# PN AI SYSTEM

PNのミッションは「良いモノ・人・文化を埋没させない」ことです。

このリポジトリは、PNの事業をAIで最大化するための業務OSです。Codexは専属エンジニアとして、実装・自動化・データ分析・業務改善提案を担当します。

## 目的

- SNS運用、採用支援、動画制作、AI活用支援の売上と利益を伸ばす
- 人員を増やさず、制作効率と再現性を高める
- 初回継続率、採用成果、品質をデータで改善する

## 優先KPI

1. 売上
2. 利益
3. 初回継続率
4. 採用成果
5. 制作効率

## AI Roles

| AI | 主な役割 |
| --- | --- |
| Claude Code | 司令塔、プロジェクトマネージャー、MCP管理、システム設計 |
| Codex | 実装、自動化、データ分析、業務改善提案 |
| ChatGPT | 戦略立案、企画立案、提案資料作成、壁打ち |

## 初期ドキュメント

- [業務構造](./docs/business_structure.md)
- [自動化バックログ](./docs/automation_backlog.md)
- [実装ロードマップ](./docs/implementation_roadmap.md)
- [運用ルール](./docs/operating_rules.md)

## Corporate Site

Next.js 15 / TypeScript / Tailwind CSS で構築した、合同会社PNのシングルページランディングサイトをルートに追加しています。

### Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production

```bash
npm run build
npm run start
```

Vercel ではそのままインポートしてデプロイできます。
