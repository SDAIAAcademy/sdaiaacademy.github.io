# DEV-DAT-302 · Data Infrastructure for AI

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants build the data layer that language model applications and agents read from, and run it as a pipeline rather than a one-off index. On a synthetic bilingual municipal corpus with a change feed, they embed incrementally, carry source permissions onto every chunk, propagate deletions, gate personal data, migrate embedding models and expose governed tables to an agent through a protocol server. Parser choice is DEV-LLM-204, search quality DEV-LLM-203, retrieval evaluation DEV-EVL-303 and graphs DEV-DAT-304.

## Learning outcomes

By the end, the participant can:

- Implement an incremental pipeline that parses, chunks and embeds documents and reprocesses only what changed.
- Configure a parsing stage that routes by document class, falls back to deterministic extraction and quarantines failures.
- Design an index whose chunks and vectors trace to source, version and permissions, and migrate it to a new embedding model.
- Build permission-aware indexing that copies source access rules onto chunks and filters before ranking.
- Measure personal-data detection before indexing and set a redaction rule per entity type.
- Build a protocol server that gives an agent read-only, scoped access to governed tables and metrics.

## Prerequisites

- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- Has called an embedding or language model API from Python

## Topics

### Unstructured data as a pipeline

- Change feeds and idempotent reprocessing
- Parsing routes and deterministic fallback
- Chunking as a versioned transform
- Quarantine and replay

### Embeddings and indexes as derived data

- Multilingual embedding choice
- Vectors in a relational database, table format, search service or object store
- Hybrid index refresh and dual-index migration

### Permissions, deletion and lineage

- Source access lists to chunk labels
- Filtering before ranking
- Erasure that reaches derived data

### Personal data and external services

- Detectors and what they miss
- Redaction and pseudonymisation at indexing
- Data sent to external model services
- Prompt and trace logs as governed data

### Governed agent access

- Protocol servers over a catalogue and semantic layer
- Read-only tools, scopes and audit logs
- When a plain API or command-line tool is enough
