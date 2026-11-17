# LDS-DMG-203 · Data Quality Management

- Track: Executives & Leaders
- Path: [Data Management and Governance Professions](../paths/LDS-DMG.md)
- Level: Level 200 · Apply
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: practitioner
- Status: In development

## Description

Participants run a quality programme for one service domain of a fictional agency whose monthly report disagrees with its source systems. They turn requirements into measurable rules, profile synthetic tables, execute the rules and log issues. They trace a recurring error to its origin, agree corrective and preventive actions with owners, and judge whether a dataset and a document collection are fit to train or ground an AI system. Pipeline-level contracts and observability are DEV-DAT-204.

## Learning outcomes

By the end, the participant can:

- Prepare measurable quality rules with scope, method, threshold and frequency.
- Analyse column, relationship and dependency profiles to find anomalies.
- Implement rules as executable checks and report results by dimension.
- Diagnose the root cause of a recurring issue and define corrective and preventive actions.
- Measure the fitness of data for training or grounding an AI system.
- Design a quality plan covering priorities, rules, monitoring and issue workflow for a domain.

## Prerequisites

- [LDS-DMG-101 · Data Management Foundations](LDS-DMG-101.md)
- Writes simple SQL with filters, joins and grouping (FND-DAT-101 or the provided SQL pre-work)

## Topics

### Requirements and rules

- Dimensions: accuracy, completeness, consistency, timeliness, validity, uniqueness
- Critical data elements
- Thresholds, tolerances and exceptions
- Cost and service impact of poor quality

### Profiling and measurement

- Column, relationship and dependency profiling
- Sampling when full checks cost too much
- Scorecards that do not mislead

### Issue management

- Lifecycle, severity and escalation
- Five whys, cause-and-effect diagrams, lineage tracing
- Prevention at entry and integration points

### Quality in operation

- Pre-release checks before sharing or publication
- Quality clauses in sharing agreements
- Settling priority disputes with owners

### Data used by AI

- Quality characteristics for analytics and machine learning data (ISO/IEC 5259)
- Representativeness, label noise, duplication, leakage
- Currency and conflicting versions in retrieval collections
- AI-suggested rules under review
