# SPC-ANL-203 · Metrics, Semantic Models and Dashboards

- Track: Data Science
- Path: [Analysis and Business Intelligence](../paths/SPC-ANL.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants turn business questions from a synthetic service organisation into governed metrics, each with a definition, formula, grain, filters, owner and tests. They build a star-schema semantic model over a small warehouse, define metrics once in an open specification, and design a dashboard that answers the questions with few charts and loads within a time budget. They then acceptance-test a conversational analytics agent on certified questions and report where it returns wrong but plausible numbers. Metrics as tested pipeline code are DEV-DAT-202; deep platform tuning is SPC-ANL-303.

## Learning outcomes

By the end, the participant can:

- Explain where inconsistent numbers arise between metric definitions, semantic models and dashboards.
- Draft metric definitions with formula, grain, filters, time logic, owner and known limits.
- Implement a dimensional semantic model with conformed dimensions and metrics defined once.
- Design a dashboard for a named audience and decision, choosing layout, comparisons and drill paths.
- Measure dashboard load time and reduce it through aggregation, filters or model changes.
- Evaluate a conversational analytics agent against governed metrics and decide whether it is fit for a stated use.

## Prerequisites

- [FND-DAT-101 · SQL and Relational Data](FND-DAT-101.md)
- [SPC-ANL-201 · Exploratory Analysis and Visualisation](SPC-ANL-201.md)
- Writes SQL with joins, grouping and window functions

## Next courses

- [SPC-ANL-303 · Business Intelligence Platform Practice: Governance, Performance and Enablement](SPC-ANL-303.md)

## Topics

### Metrics

- Ratios, rates, distinct counts and snapshots
- Grain, time windows and calendars
- Metric trees from goal to driver
- Owners, certification and change control

### Semantic models

- Star schemas and slowly changing dimensions
- Join paths and fan-out errors
- Metrics in an open interchange specification
- Synonyms and descriptions as context for AI

### Dashboard design and performance

- Audience, decision and update cycle
- Comparisons with targets, prior periods and peers
- Freshness, as-of dates and data-quality flags
- Accessibility and right-to-left layouts
- Task-based testing with intended users
- Pre-aggregation and load-time budgets

### Conversational analytics

- From question to query
- Certified question sets
- Wrong grain, wrong filter, invented metric
- Human review before use
