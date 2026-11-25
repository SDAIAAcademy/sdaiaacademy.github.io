# FND-DAT · Data Handling

Track: Data & AI Foundations

## Purpose

Teach participants to query, clean, reshape, move and check data with methods that outlast any single engine or library.

## Who it is for

Anyone starting technical data or AI work, including future analysts, data scientists, data engineers and AI engineers who can code but have not yet worked with messy real data.

## Suggested order

FND-DAT-101 and FND-DAT-102 can be taken in either order; FND-DAT-103 follows FND-DAT-102. The stream leads to SPC-ANL-201 and SPC-ANL-204 for analysts and data scientists, and to DEV-DAT-201 and DEV-DAT-204 for data engineers.

## Courses in order

In the order their prerequisites suggest.

### 1. [FND-DAT-101 · SQL and Relational Data](../courses/FND-DAT-101.md)

- Level 100 · Explain · Intensive · 30 h · Available
- Explain the relational model: tables, keys, constraints, NULL and the grain of a table.
- Identify the output of joins, grouping and NULL comparisons before running them.
- Write queries with filters, joins, grouping, subqueries and common table expressions that answer business questions.
- Apply window functions to rank rows, compare periods and compute running and moving totals.
- Implement a small schema with keys and constraints, load raw files into it and report rejected rows.
- Identify silent errors in assistant-written SQL, such as join fan-out, wrong grain and missing business rules.

### 2. [FND-DAT-102 · Data Wrangling with DataFrames](../courses/FND-DAT-102.md)

- Level 100 · Explain · Intensive · 30 h · In development
- Describe tidy data and identify the reshaping operation that makes a given table tidy.
- Distinguish the ways data can be missing and explain how dropping, filling or flagging changes a summary.
- Implement a cleaning pipeline as chained, tested functions for types, dates, duplicates and categories.
- Apply joins with declared cardinality and reconcile row counts before and after each join.
- Normalise Arabic and English text fields for matching and measure the effect on match rates.
- Identify defects in assistant-written wrangling code, such as wrong types, dropped rows and many-to-many joins.

### 3. [FND-DAT-103 · Data Formats, Interfaces and Quality Checks](../courses/FND-DAT-103.md)

- Level 100 · Explain · Workshop · 16 h · Available
- Needs: FND-DAT-102
- Compare delimited, JSON Lines and columnar files on size, read time and type fidelity.
- Explain how encodings, byte order marks and time zones corrupt data, and identify each symptom.
- Implement an API client that follows cursor pagination, respects rate limits, retries with backoff and keeps raw responses.
- Convert nested JSON into typed tables written as partitioned columnar files.
- Implement validation checks that stop a load when a batch breaks the declared schema.
