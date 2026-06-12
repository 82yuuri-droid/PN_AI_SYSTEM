#!/usr/bin/env python3
import argparse
import csv
from collections import defaultdict
from dataclasses import dataclass
from datetime import date, datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
REPORTS_DIR = ROOT / "reports"


@dataclass
class Project:
    project_id: str
    client_name: str
    service: str
    contract_amount: int
    cost_amount: int
    estimated_hours: float
    actual_hours: float
    start_date: date
    end_date: date
    status: str
    is_first_contract: str
    is_continued: str
    recruiting_result_count: int
    deliverable_count: int
    revision_count: int
    owner: str


@dataclass
class Task:
    task_id: str
    project_id: str
    task_name: str
    service: str
    stage: str
    owner: str
    due_date: date
    status: str
    waiting_on: str
    estimated_hours: float
    actual_hours: float


def parse_date(value: str) -> date:
    return datetime.strptime(value, "%Y-%m-%d").date()


def parse_int(value: str) -> int:
    return int(float(value or 0))


def parse_float(value: str) -> float:
    return float(value or 0)


def read_projects(path: Path) -> list[Project]:
    with path.open(newline="", encoding="utf-8") as f:
        rows = csv.DictReader(f)
        return [
            Project(
                project_id=row["project_id"],
                client_name=row["client_name"],
                service=row["service"],
                contract_amount=parse_int(row["contract_amount"]),
                cost_amount=parse_int(row["cost_amount"]),
                estimated_hours=parse_float(row["estimated_hours"]),
                actual_hours=parse_float(row["actual_hours"]),
                start_date=parse_date(row["start_date"]),
                end_date=parse_date(row["end_date"]),
                status=row["status"],
                is_first_contract=row["is_first_contract"],
                is_continued=row["is_continued"],
                recruiting_result_count=parse_int(row["recruiting_result_count"]),
                deliverable_count=parse_int(row["deliverable_count"]),
                revision_count=parse_int(row["revision_count"]),
                owner=row["owner"],
            )
            for row in rows
        ]


def read_tasks(path: Path) -> list[Task]:
    with path.open(newline="", encoding="utf-8") as f:
        rows = csv.DictReader(f)
        return [
            Task(
                task_id=row["task_id"],
                project_id=row["project_id"],
                task_name=row["task_name"],
                service=row["service"],
                stage=row["stage"],
                owner=row["owner"],
                due_date=parse_date(row["due_date"]),
                status=row["status"],
                waiting_on=row["waiting_on"],
                estimated_hours=parse_float(row["estimated_hours"]),
                actual_hours=parse_float(row["actual_hours"]),
            )
            for row in rows
        ]


def yen(value: int | float) -> str:
    return f"{value:,.0f}円"


def pct(value: float) -> str:
    return f"{value:.1f}%"


def in_month(day: date, month: str) -> bool:
    return day.strftime("%Y-%m") == month


def build_report(month: str, today: date) -> str:
    projects = [p for p in read_projects(DATA_DIR / "projects.csv") if in_month(p.start_date, month) or in_month(p.end_date, month)]
    tasks = [t for t in read_tasks(DATA_DIR / "tasks.csv") if in_month(t.due_date, month)]

    revenue = sum(p.contract_amount for p in projects)
    cost = sum(p.cost_amount for p in projects)
    profit = revenue - cost
    margin = (profit / revenue * 100) if revenue else 0

    first_contracts = [p for p in projects if p.is_first_contract == "yes"]
    continued = [p for p in first_contracts if p.is_continued == "yes"]
    known_first = [p for p in first_contracts if p.is_continued in {"yes", "no"}]
    first_retention = (len(continued) / len(known_first) * 100) if known_first else 0

    total_deliverables = sum(p.deliverable_count for p in projects)
    total_hours = sum(p.actual_hours for p in projects)
    production_efficiency = (total_deliverables / total_hours) if total_hours else 0

    service_rows = []
    by_service: dict[str, list[Project]] = defaultdict(list)
    for project in projects:
        by_service[project.service].append(project)

    for service, rows in sorted(by_service.items()):
        service_revenue = sum(p.contract_amount for p in rows)
        service_profit = sum(p.contract_amount - p.cost_amount for p in rows)
        service_hours = sum(p.actual_hours for p in rows)
        service_rows.append(
            f"| {service} | {len(rows)} | {yen(service_revenue)} | {yen(service_profit)} | {service_hours:.1f}h |"
        )

    overdue_tasks = [t for t in tasks if t.due_date < today and t.status not in {"done", "cancelled"}]
    waiting_tasks = [t for t in tasks if t.status == "waiting" or t.waiting_on]
    high_revision_projects = [p for p in projects if p.revision_count >= 4]
    low_margin_projects = [p for p in projects if p.contract_amount and ((p.contract_amount - p.cost_amount) / p.contract_amount) < 0.5]

    suggestions = []
    if low_margin_projects:
        suggestions.append("粗利率50%未満の案件は、作業範囲、修正回数、外注費を確認する。")
    if high_revision_projects:
        suggestions.append("修正回数が多い案件は、初稿前チェックリストと合意済み構成の運用を強化する。")
    if waiting_tasks:
        suggestions.append("クライアント確認待ちタスクは、期限付きリマインドと次工程への影響を明記して送る。")
    if first_contracts and first_retention < 70:
        suggestions.append("初回案件は、月末前に成果、課題、次月施策をまとめた継続提案を必ず出す。")
    if not suggestions:
        suggestions.append("大きな警告はなし。既存顧客への追加提案候補を抽出する。")

    lines = [
        f"# PN Monthly Summary: {month}",
        "",
        "## KPI Summary",
        "",
        f"- 売上: {yen(revenue)}",
        f"- 利益: {yen(profit)}",
        f"- 粗利率: {pct(margin)}",
        f"- 初回継続率: {pct(first_retention)}",
        f"- 採用成果数: {sum(p.recruiting_result_count for p in projects)}",
        f"- 制作効率: {production_efficiency:.2f}納品物/h",
        "",
        "## Service Breakdown",
        "",
        "| 事業 | 案件数 | 売上 | 利益 | 実工数 |",
        "| --- | ---: | ---: | ---: | ---: |",
        *service_rows,
        "",
        "## Alerts",
        "",
    ]

    if overdue_tasks:
        lines.append("### 期限超過タスク")
        lines.extend(f"- {t.task_id}: {t.task_name} ({t.client_name if hasattr(t, 'client_name') else t.project_id}, {t.due_date})" for t in overdue_tasks)
        lines.append("")

    if waiting_tasks:
        lines.append("### 確認待ちタスク")
        lines.extend(f"- {t.task_id}: {t.task_name} / waiting_on={t.waiting_on or 'unknown'} / due={t.due_date}" for t in waiting_tasks)
        lines.append("")

    if low_margin_projects:
        lines.append("### 粗利率注意案件")
        lines.extend(f"- {p.project_id}: {p.client_name} / {p.service} / 粗利率 {pct((p.contract_amount - p.cost_amount) / p.contract_amount * 100)}" for p in low_margin_projects)
        lines.append("")

    if high_revision_projects:
        lines.append("### 修正回数注意案件")
        lines.extend(f"- {p.project_id}: {p.client_name} / {p.service} / 修正 {p.revision_count}回" for p in high_revision_projects)
        lines.append("")

    lines.extend(
        [
            "## Next Actions",
            "",
            *[f"- {suggestion}" for suggestion in suggestions],
            "",
            "## Add-on Proposal Hints",
            "",
            "- SNS運用顧客: 成果が出た投稿をショート動画化し、動画制作の追加提案につなげる。",
            "- 採用支援顧客: 応募導線と採用SNSをセットで改善提案する。",
            "- 動画制作顧客: 納品動画の運用代行、月次分析、追加カット制作を提案する。",
            "- 全顧客: AI活用診断を入口に、社内業務の工数削減提案へつなげる。",
            "",
        ]
    )

    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate PN monthly KPI summary.")
    parser.add_argument("--month", default=date.today().strftime("%Y-%m"), help="Target month in YYYY-MM format.")
    parser.add_argument("--today", default=date.today().isoformat(), help="Date used for overdue checks.")
    parser.add_argument("--write", action="store_true", help="Write the report to reports/YYYY-MM.md.")
    args = parser.parse_args()

    report = build_report(args.month, parse_date(args.today))
    if args.write:
        REPORTS_DIR.mkdir(exist_ok=True)
        path = REPORTS_DIR / f"{args.month}.md"
        path.write_text(report + "\n", encoding="utf-8")
        print(path)
    else:
        print(report)


if __name__ == "__main__":
    main()

