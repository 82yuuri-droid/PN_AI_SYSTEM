# Required Folder Structure

## Local Repo Structure

```text
08_AI_Agents/growth_producer_ai/
├── README.md
├── system_prompt.md
├── user_prompt_templates.md
├── workflow_diagrams.md
├── required_folder_structure.md
├── operating_instructions.md
├── 01_inbox/
├── 02_outputs/
│   ├── sales_call_analysis/
│   ├── proposals/
│   ├── sns_strategies/
│   ├── content_ideas/
│   ├── client_improvements/
│   ├── baseline_data/
│   ├── experiments/
│   ├── attribution_plans/
│   ├── critiques/
│   └── case_studies/
├── 03_templates/
├── 04_knowledge/
└── 05_review_log/
```

## What Goes Where

## `01_inbox`

Raw inputs before AI processing.

Examples:

- Sales call notes
- Call transcripts
- DM conversations
- Client intake notes
- KPI exports
- Client feedback
- Screenshots or copied text from SNS accounts

Naming rule:

```text
YYYY-MM-DD_client-name_input-type.md
```

Example:

```text
2026-06-12_acme_sales-call-notes.md
```

## `02_outputs/sales_call_analysis`

AI analysis of sales calls.

Naming rule:

```text
YYYY-MM-DD_client-name_sales-analysis.md
```

## `02_outputs/proposals`

Proposal drafts.

Naming rule:

```text
YYYY-MM-DD_client-name_proposal-draft.md
```

## `02_outputs/sns_strategies`

SNS strategy drafts.

Naming rule:

```text
YYYY-MM-DD_client-name_sns-strategy.md
```

## `02_outputs/content_ideas`

Weekly content plans.

Naming rule:

```text
YYYY-WW_client-name_content-ideas.md
```

## `02_outputs/client_improvements`

Monthly improvement reports.

Naming rule:

```text
YYYY-MM_client-name_improvement-review.md
```

## `02_outputs/baseline_data`

Baseline data requests and readiness checks.

Naming rule:

```text
YYYY-MM-DD_client-name_baseline-data.md
```

## `02_outputs/experiments`

Content and growth experiment plans.

Naming rule:

```text
YYYY-MM-DD_client-name_experiment-plan.md
```

## `02_outputs/attribution_plans`

Measurement plans connecting SNS/content to business outcomes.

Naming rule:

```text
YYYY-MM-DD_client-name_attribution-plan.md
```

## `02_outputs/critiques`

AI or human critiques of strategy, proposal, and report drafts.

Naming rule:

```text
YYYY-MM-DD_client-name_output-critique.md
```

## `02_outputs/case_studies`

Proof assets created from completed work.

Naming rule:

```text
YYYY-MM-DD_client-name_case-study.md
```

## `03_templates`

Reusable internal templates.

Recommended files:

- `sales_call_notes_template.md`
- `proposal_input_template.md`
- `sns_strategy_input_template.md`
- `monthly_client_review_template.md`
- `human_review_checklist.md`
- `baseline_data_template.md`
- `experiment_plan_template.md`
- `attribution_plan_template.md`

## `04_knowledge`

Reference material used by the AI employee.

Recommended files:

- `offer_menu.md`
- `pricing_rules.md`
- `case_studies.md`
- `objection_library.md`
- `content_pillars_by_client.md`
- `client_result_patterns.md`
- `data_source_checklist.md`
- `measurement_methods.md`

## `05_review_log`

Human review and quality improvement.

Recommended files:

- `weekly_ai_employee_review.md`
- `prompt_improvement_log.md`
- `output_quality_log.md`
- `prompt_improvement_log.md`

## Google Drive / Notion Mirror

If PN uses Google Drive or Notion as the operational home, mirror the same structure:

```text
PN Growth Producer AI
├── 01 Inbox
├── 02 Outputs
├── 03 Templates
├── 04 Knowledge
└── 05 Review Log
```

The repo remains the source of system instructions and prompt templates. Google Drive or Notion can hold working client files.
