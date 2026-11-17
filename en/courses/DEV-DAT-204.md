# DEV-DAT-204 · Data Quality, Contracts and Observability

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 200 · Apply
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: practitioner
- Status: In development

## Description

Participants put quality controls into the synthetic claims platform of a fictional health insurer. They profile the sources, turn consumer requirements into executable rules, extend the contract basics of DEV-DAT-201 with versioning and service levels, and gate every build on them. Pipelines emit lineage and run events, which participants use to find the blast radius of a seeded incident, quarantine bad data, notify consumers and write a post-incident review. The quality programme and stewardship side is LDS-DMG-203.

## Learning outcomes

By the end, the participant can:

- Describe the data quality dimensions and match each to a check that runs inside a pipeline.
- Analyse tables with column, relationship and dependency profiling to propose rules.
- Implement rules with thresholds, severities and quarantine actions as pipeline gates.
- Implement contract versioning with breaking-change rules and service-level clauses for freshness and ownership, checked in continuous integration.
- Configure lineage and run events across the pipeline and use them to list affected downstream assets.
- Diagnose a data incident from alerts, lineage and logs, and lead it to closure.

## Prerequisites

- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- Runs and edits an orchestrated pipeline locally

## Topics

### Dimensions, profiling and rules

- Accuracy, completeness, consistency, timeliness, validity, uniqueness
- Column, relationship and dependency profiling
- Critical data elements first
- Rules with scope, threshold, severity and owner
- Quality scores and trend reports

### Gates in pipelines

- Warn, block or quarantine
- Write, audit, publish
- Volume and distribution anomalies

### Data contracts

- Producer and consumer duties
- Service-level clauses: freshness, completeness, support
- Versioning and breaking-change rules in continuous integration

### Lineage and observability

- Lineage as events emitted by runs
- Freshness, volume and schema signals
- Alert routing and fatigue

### Incident handling

- Triage and consumer notice
- Root cause through lineage
- Backfills, corrections and blameless reviews
