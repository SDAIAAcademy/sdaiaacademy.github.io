# DEV-DAT · Data Engineering and Architecture

Track: AI Engineering

## Purpose

Teach developers to build, test, model and operate the pipelines and platforms that analytics and AI systems depend on, and to design them so they can be trusted, changed and paid for.

## Who it is for

Software, data and analytics engineers, BI developers and data modellers who move data from source systems to the people, models and agents that use it.

## Suggested order

Start with DEV-DAT-201 (batch pipelines end to end), then add DEV-DAT-202 (metrics and semantic layers), DEV-DAT-203 (streaming and change data capture) and DEV-DAT-204 (quality, contracts and observability); DEV-DAT-301 deepens modelling, DEV-DAT-302 to DEV-DAT-304 cover AI data infrastructure, platform operations and knowledge graphs, and DEV-DAT-401 closes with architecture.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-DAT-201 · Modern Data Engineering](../courses/DEV-DAT-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: FND-DAT-101, FND-PRG-102
- Distinguish transactional, warehouse, lake and lakehouse platforms and the workloads each serves.
- Analyse raw extracts with window functions, deduplication and incremental predicates in analytical SQL.
- Implement idempotent incremental loads from an API and a change feed, applying merges with type 2 history.
- Implement a dimensional model as version-controlled transformations with tests and documentation.
- Draft a data contract in an open standard and enforce it in the build.
- Build an orchestrated pipeline into an open table format that recovers from failure by re-running.

### 2. [DEV-DAT-202 · Analytics Engineering and Semantic Layers](../courses/DEV-DAT-202.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: DEV-DAT-201
- Explain how a semantic layer differs from a dimensional model and from a business intelligence (BI) tool's internal model.
- Implement metric definitions as code, including ratios, time grains and filters, with tests that reconcile them to source totals.
- Configure a semantic model with entities, joins, dimensions and row-level access rules.
- Prepare dashboards as code that read only from the semantic layer and ship through review.
- Measure the execution accuracy of natural-language querying with and without the semantic layer.
- Decide which questions may be routed to natural-language querying, and under which safeguards.

### 3. [DEV-DAT-203 · Streaming and Change Data Capture](../courses/DEV-DAT-203.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: DEV-DAT-201
- Distinguish logs from queues and the three delivery guarantees, and state what each costs.
- Configure a partitioned log with keys, schemas and consumer groups that preserve per-entity ordering.
- Implement log-based change data capture, including deletes and schema changes.
- Implement event-time windows with watermarks and keyed state, and compare them with a batch recomputation.
- Build a stream into an open table format that loses and duplicates nothing after a crash.
- Decide between streaming, micro-batch and batch from latency, cost and correctness evidence.

### 4. [DEV-DAT-204 · Data Quality, Contracts and Observability](../courses/DEV-DAT-204.md)

- Level 200 · Apply · Intensive · 24 h · In development
- Needs: DEV-DAT-201
- Describe the data quality dimensions and match each to a check that runs inside a pipeline.
- Analyse tables with column, relationship and dependency profiling to propose rules.
- Implement rules with thresholds, severities and quarantine actions as pipeline gates.
- Implement contract versioning with breaking-change rules and service-level clauses for freshness and ownership, checked in continuous integration.
- Configure lineage and run events across the pipeline and use them to list affected downstream assets.
- Diagnose a data incident from alerts, lineage and logs, and lead it to closure.

### 5. [DEV-DAT-301 · Data Modelling: Conceptual to Semantic](../courses/DEV-DAT-301.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: FND-DAT-101, DEV-DAT-201
- Compare normalised, dimensional, vault and wide-table models by the change, history and query patterns each serves.
- Prepare conceptual and normalised logical models from interviews and source-system analysis.
- Design a dimensional model with declared grain, conformed dimensions and chosen history types, and implement it.
- Design a vault layer and a wide feature table and optimise their physical layout.
- Implement a semantic model of entities, measures and dimensions carrying definitions and classification tags.
- Review a generated schema against modelling standards and defend the corrections.

### 6. [DEV-DAT-302 · Data Infrastructure for AI](../courses/DEV-DAT-302.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-DAT-201
- Implement an incremental pipeline that parses, chunks and embeds documents and reprocesses only what changed.
- Configure a parsing stage that routes by document class, falls back to deterministic extraction and quarantines failures.
- Design an index whose chunks and vectors trace to source, version and permissions, and migrate it to a new embedding model.
- Build permission-aware indexing that copies source access rules onto chunks and filters before ranking.
- Measure personal-data detection before indexing and set a redaction rule per entity type.
- Build a protocol server that gives an agent read-only, scoped access to governed tables and metrics.

### 7. [DEV-DAT-303 · Data Platform Operations: Reliability, Security and Cost](../courses/DEV-DAT-303.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-DAT-201
- Configure service level objectives and error budgets for data product freshness, completeness and latency.
- Implement branch-based promotion with state-aware continuous integration, infrastructure as code and write-audit-publish gates.
- Design and test access controls combining roles, attributes, column masking, row filters and encryption at a single policy enforcement point.
- Optimise platform cost by attributing spend to workloads and changing engine placement, schedules and table maintenance.
- Prepare a software bill of materials for pipeline code, images and connectors and gate builds on it.
- Diagnose and resolve platform incidents from lineage, logs and metrics, and write a blameless review.

### 8. [DEV-DAT-304 · Knowledge Graphs and Ontology Engineering](../courses/DEV-DAT-304.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Distinguish Resource Description Framework (RDF) graphs, property graphs and relational models, and state when each fits.
- Apply entity resolution with blocking, scoring and clustering, and measure its precision and recall.
- Design an ontology and shape constraints that answer competency questions.
- Implement language-model extraction of facts into the graph with validation and source provenance.
- Evaluate graph-grounded against text-only retrieval and recommend one.

### 9. [DEV-DAT-401 · Data Architecture](../courses/DEV-DAT-401.md)

- Level 400 · Evaluate · Intensive · 36 h · In development
- Needs: DEV-DAT-201, DEV-DAT-301
- Analyse business, regulatory and operational requirements into quality-attribute scenarios.
- Design a target architecture covering storage, catalogue, engines, integration, semantic layer and serving to analytics and AI.
- Evaluate three architecture options on five-year cost of ownership and risk.
- Design standards for federated ownership: data product descriptors, contracts, naming and the supported platform path.
- Review a design and a vendor proposal against the standards and decide on deviations.
- Design a migration roadmap with transition states, legacy retirement and measurable milestones.
