# DEV-DAT-301 · Data Modelling: Conceptual to Semantic

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants model one domain of a fictional water utility, from interviews and undocumented source schemas to a semantic model. They derive conceptual and normalised logical models, then implement a dimensional mart, an auditable vault layer and a wide feature table, measuring each under its intended queries. They publish a semantic model over the mart and review language-model-generated schemas against modelling standards. Every choice is recorded and defended. Metrics as code and dashboards are DEV-DAT-202; ontologies and knowledge graphs continue in DEV-DAT-304.

## Learning outcomes

By the end, the participant can:

- Compare normalised, dimensional, vault and wide-table models by the change, history and query patterns each serves.
- Prepare conceptual and normalised logical models from interviews and source-system analysis.
- Design a dimensional model with declared grain, conformed dimensions and chosen history types, and implement it.
- Design a vault layer and a wide feature table and optimise their physical layout.
- Implement a semantic model of entities, measures and dimensions carrying definitions and classification tags.
- Review a generated schema against modelling standards and defend the corrections.

## Prerequisites

- [FND-DAT-101 · SQL and Relational Data](FND-DAT-101.md)
- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- Reads and writes table definitions with keys and constraints

## Next courses

- [DEV-DAT-401 · Data Architecture](DEV-DAT-401.md)

## Topics

### Conceptual and logical modelling

- Entities and business rules from interviews
- Normal forms and when to stop
- Natural, surrogate and composite keys
- Diagram-as-code notation

### Source analysis

- Schema inspection and reverse engineering
- Profiling for keys and dependencies
- Conflicting definitions across systems

### Dimensional design

- Grain, facts and conformed dimensions
- Slowly changing dimension types and bitemporal history
- Degenerate, role-playing and bridge structures

### Vault, wide tables and physical design

- Hubs, links and satellites
- Wide tables for lakehouse engines
- Partitioning, clustering and indexing
- Reference data and code sets

### Semantic models and review

- Measures and dimensions for reporting tools and agents
- Standards, naming and model repositories
- Schema evolution and backward-compatible change
- Reviewing generated schemas
