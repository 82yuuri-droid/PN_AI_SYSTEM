# Workflow Diagrams

## Sales Call to Proposal

```mermaid
flowchart TD
  A["Sales call / DM / referral"] --> B["Save notes in 01_inbox"]
  B --> C["Run Sales Call Analysis prompt"]
  C --> D{"Deal score"}
  D -->|5 or 4| E["Draft proposal"]
  D -->|3| F["Pitch paid diagnostic"]
  D -->|2| G["Nurture and collect missing info"]
  D -->|1| H["Disqualify"]
  E --> I["Human review: price, scope, claims"]
  F --> I
  I --> J["Send client follow-up"]
  J --> K["Save output in 02_outputs"]
```

## Client Intake to SNS Strategy

```mermaid
flowchart TD
  A["Client intake"] --> B["Collect business model, audience, offer, goals"]
  B --> C["Run SNS Strategy prompt"]
  C --> D["Define content pillars and platform roles"]
  D --> E["Create KPI and conversion path"]
  E --> F["Generate 20 content ideas"]
  F --> G["Human review"]
  G --> H["Save strategy in 02_outputs/sns_strategies"]
  H --> I["Use strategy for weekly content planning"]
```

## Weekly Content Production

```mermaid
flowchart TD
  A["Weekly planning"] --> B["Gather strategy, KPI data, objections, FAQs"]
  B --> C["Run Weekly Content Ideas prompt"]
  C --> D["Select top 5 ideas"]
  D --> E["Assign format and CTA"]
  E --> F["Human review"]
  F --> G["Move approved ideas into content calendar"]
  G --> H["Mark reusable asset candidates"]
```

## Monthly Client Improvement

```mermaid
flowchart TD
  A["End of month"] --> B["Collect KPI data, deliverables, feedback, blockers"]
  B --> C["Run Monthly Client Improvement prompt"]
  C --> D["Identify wins and problems"]
  D --> E["Recommend next experiments"]
  E --> F{"Upsell justified?"}
  F -->|Yes| G["Draft upsell recommendation"]
  F -->|No| H["Focus on retention and improvement"]
  G --> I["Human review"]
  H --> I
  I --> J["Send client-facing report"]
  J --> K["Save lessons in knowledge base"]
```

## Objection to Asset Improvement

```mermaid
flowchart TD
  A["Prospect objection"] --> B["Run Objection Analysis prompt"]
  B --> C["Classify objection"]
  C --> D["Draft response"]
  D --> E["Identify missing proof"]
  E --> F["Improve proposal section"]
  F --> G["Create content idea"]
  G --> H["Update 04_knowledge"]
```

## Baseline Data Intake

```mermaid
flowchart TD
  A["New client / opportunity"] --> B["Run Baseline Data Intake prompt"]
  B --> C["Separate facts, assumptions, unknowns"]
  C --> D{"Enough data for proposal?"}
  D -->|Yes| E["Run Proposal Readiness Check"]
  D -->|No| F["Ask client data questions"]
  F --> G["Save missing data request"]
  G --> H["Wait for data or sell diagnostic"]
  E --> I["Draft proposal or diagnostic"]
```

## SNS Attribution Setup

```mermaid
flowchart TD
  A["SNS strategy approved"] --> B["Run SNS Attribution Plan prompt"]
  B --> C["Define business outcome"]
  C --> D["Create minimum tracking setup"]
  D --> E["Assign data owner"]
  E --> F["Track weekly metrics"]
  F --> G["Review monthly outcome"]
  G --> H["Update client improvement plan"]
```

## Content Experiment Loop

```mermaid
flowchart TD
  A["Content ideas"] --> B["Run Content Experiment Designer prompt"]
  B --> C["Select top 3 experiments"]
  C --> D["Publish content"]
  D --> E["Measure primary and secondary KPIs"]
  E --> F{"Experiment worked?"}
  F -->|Yes| G["Scale and turn into asset"]
  F -->|No| H["Revise hook, audience, CTA, or offer"]
  G --> I["Save lesson in 04_knowledge"]
  H --> I
```

## AI Employee Learning Loop

```mermaid
flowchart TD
  A["AI output"] --> B["Human review"]
  B --> C["Score output 1-5"]
  C --> D{"Score 4 or 5?"}
  D -->|Yes| E["Save as example/template"]
  D -->|No| F["Run AI Output Quality Review prompt"]
  F --> G["Update prompt or workflow"]
  E --> H["Update 04_knowledge"]
  G --> H
```
