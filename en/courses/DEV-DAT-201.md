# DEV-DAT-201 · Modern Data Engineering

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants build one batch pipeline end to end for a fictional trading company whose margin report nobody trusts. They query raw extracts with analytical SQL, load an API and a database change feed incrementally, and model a star schema with a slowly changing supplier dimension. Tested transformations and an agreed data contract run under an orchestrator, and the result lands in an open table format that a second engine reads. All data is synthetic and deterministic. Log-based capture and streaming continue in DEV-DAT-203; contract versioning and observability in DEV-DAT-204.

## Learning outcomes

By the end, the participant can:

- Distinguish transactional, warehouse, lake and lakehouse platforms and the workloads each serves.
- Analyse raw extracts with window functions, deduplication and incremental predicates in analytical SQL.
- Implement idempotent incremental loads from an API and a change feed, applying merges with type 2 history.
- Implement a dimensional model as version-controlled transformations with tests and documentation.
- Draft a data contract in an open standard and enforce it in the build.
- Build an orchestrated pipeline into an open table format that recovers from failure by re-running.

## Prerequisites

- [FND-DAT-101 · SQL and Relational Data](FND-DAT-101.md)
- [FND-PRG-102 · Command Line, Git and Reproducible Environments](FND-PRG-102.md)
- Writes Python scripts that read and write files

## Next courses

- [DEV-DAT-202 · Analytics Engineering and Semantic Layers](DEV-DAT-202.md)
- [DEV-DAT-203 · Streaming and Change Data Capture](DEV-DAT-203.md)
- [DEV-DAT-204 · Data Quality, Contracts and Observability](DEV-DAT-204.md)
- [DEV-DAT-301 · Data Modelling: Conceptual to Semantic](DEV-DAT-301.md)
- [DEV-DAT-302 · Data Infrastructure for AI](DEV-DAT-302.md)
- [DEV-DAT-303 · Data Platform Operations: Reliability, Security and Cost](DEV-DAT-303.md)
- [DEV-DAT-401 · Data Architecture](DEV-DAT-401.md)

## Topics

### Platform shapes and analytical SQL

- Transactional versus analytical systems; extract, load, transform (ELT)
- Layered raw, cleaned and served zones
- Window functions and incremental predicates
- Columnar files and partitioning

### Ingestion and change

- Schema drift and idempotent loads
- Change data capture (CDC), merge and slowly changing dimensions
- Single-node first, distributed when measured
- Classifying fields and dropping what is not needed

### Modelling, transformation and contracts

- Grain, facts and dimensions
- Tests, environments and state-aware builds
- Open contract standards
- Verifying agent-written transformations

### Orchestration and table formats

- Retries, backfills and data-aware scheduling
- Snapshots, schema evolution, time travel and compaction
- Catalogues and multi-engine reads
