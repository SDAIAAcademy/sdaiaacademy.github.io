# DEV-DAT-303 · Data Platform Operations: Reliability, Security and Cost

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants operate a running lakehouse for a synthetic utility company on a laptop container stack. They set service objectives for freshness, completeness and latency, promote changes through branch environments and continuous integration, enforce roles, masking, row filters and encryption at one policy point, attribute and cut spend, and block unsafe dependencies. The course ends with an on-call shift with injected faults and a restore drill. Quality rules and contracts are DEV-DAT-204; model and dataset provenance is DEV-SEC-304.

## Learning outcomes

By the end, the participant can:

- Configure service level objectives and error budgets for data product freshness, completeness and latency.
- Implement branch-based promotion with state-aware continuous integration, infrastructure as code and write-audit-publish gates.
- Design and test access controls combining roles, attributes, column masking, row filters and encryption at a single policy enforcement point.
- Optimise platform cost by attributing spend to workloads and changing engine placement, schedules and table maintenance.
- Prepare a software bill of materials for pipeline code, images and connectors and gate builds on it.
- Diagnose and resolve platform incidents from lineage, logs and metrics, and write a blameless review.

## Prerequisites

- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- Has run a pipeline under version control with automated tests
- Works with containers and a command-line shell
- Quality gates as in DEV-DAT-204 (recommended)

## Topics

### Reliability for data

- Freshness, completeness and latency indicators
- Error budgets and alerting on symptoms
- Compaction, snapshot expiry and restore drills

### DataOps

- Branches and zero-copy environments
- State-aware builds in continuous integration
- Promotion and rollback across environments
- Infrastructure as code; reviewing agent-written changes

### Access and security

- Role-based and attribute-based control
- Policy in the catalogue or query engine
- Masking, row filters and short-lived credentials
- Encryption at rest and in transit, key rotation
- Access reviews and lineage as audit evidence

### Cost

- Unit cost per query, pipeline and data product
- Showback before chargeback (FinOps Framework)

### Supply chain and incidents

- Pinned dependencies, bills of materials, signed images
- On-call, runbooks and blameless reviews
