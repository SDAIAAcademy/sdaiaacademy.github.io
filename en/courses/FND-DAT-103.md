# FND-DAT-103 · Data Formats, Interfaces and Quality Checks

- Track: Data & AI Foundations
- Path: [Data Handling](../paths/FND-DAT.md)
- Level: Level 100 · Explain
- Format: Workshop: two days with labs, a short pre-work task and a tracked follow-up task
- Total hours: 16 h
- Audience: beginner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/fnd-dat-103/
- The whole course in one file: https://sdaiaacademy.github.io/fnd-dat-103/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/fnd-dat-103/practice.html

## Description

Participants move data between files, interfaces and tables without losing or corrupting it. They compare delimited, JSON Lines and columnar files, repair encoding and time-zone faults, write a paginated API client with retries, flatten nested JSON and declare a schema whose checks stop a bad batch from loading.

## Learning outcomes

By the end, the participant can:

- Compare delimited, JSON Lines and columnar files on size, read time and type fidelity.
- Explain how encodings, byte order marks and time zones corrupt data, and identify each symptom.
- Implement an API client that follows cursor pagination, respects rate limits, retries with backoff and keeps raw responses.
- Convert nested JSON into typed tables written as partitioned columnar files.
- Implement validation checks that stop a load when a batch breaks the declared schema.

## Prerequisites

- [FND-DAT-102 · Data Wrangling with DataFrames](FND-DAT-102.md)
- Writes Python functions and handles exceptions (FND-PRG-101 or equivalent)

## Format and days

### Day 1: Files: formats, text and time

- File formats
- Text and time

### Day 2: Interfaces and the boundary

- Interfaces
- Schema and validation

### Day 3: Live ingestion run


## Topics

### File formats

- Delimited dialects and quoting
- JSON (JavaScript Object Notation) and JSON Lines
- Columnar files, partitions and in-memory interchange

### Text and time

- UTF-8 and legacy Arabic encodings
- Offsets and Coordinated Universal Time (UTC)
- Time zones and daylight saving

### Interfaces

- Status codes and errors
- Offset and cursor pagination
- Rate limits, retries and backoff
- Rerunnable loads and checkpoints

### Schema and validation

- Declared types, ranges and keys
- Failing a load versus quarantining rows
- Data contracts, which follow in DEV-DAT-204
