# DEV-DAT-203 · Streaming and Change Data Capture

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants build the event backbone of a fictional delivery company. They publish order and courier events to a partitioned log, capture changes from the payments database without touching its code, and process both streams with event-time windows, watermarks and keyed state. They make the pipeline survive crashes and duplicate deliveries without double counting, write results into an open table format and serve a low-latency view in streaming SQL. Generators replay synthetic events, some late, out of order or duplicated.

## Learning outcomes

By the end, the participant can:

- Distinguish logs from queues and the three delivery guarantees, and state what each costs.
- Configure a partitioned log with keys, schemas and consumer groups that preserve per-entity ordering.
- Implement log-based change data capture, including deletes and schema changes.
- Implement event-time windows with watermarks and keyed state, and compare them with a batch recomputation.
- Build a stream into an open table format that loses and duplicates nothing after a crash.
- Decide between streaming, micro-batch and batch from latency, cost and correctness evidence.

## Prerequisites

- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- Runs multi-service applications with containers on a laptop
- A laptop with about 16 GB of memory for the container stack, or a provided remote workspace

## Topics

### Logs, queues and events

- Partitions, keys, offsets and retention
- Consumer groups and queue semantics
- Event schemas and compatibility rules

### Change data capture

- Log-based versus query-based capture
- Snapshots, deletes and schema changes
- The outbox pattern

### State and time

- Event time versus processing time
- Windows, watermarks and late data
- Keyed state and checkpoints
- Joining streams with tables

### Correctness under failure

- End-to-end delivery guarantees
- Idempotent sinks and transactional writes
- Consumer lag, back-pressure and dead-letter topics
- Replays and reprocessing

### Streams into tables and SQL

- Streaming into open table formats; compacting small files
- Incrementally maintained views
- Latency budgets and running cost
