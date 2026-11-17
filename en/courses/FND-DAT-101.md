# FND-DAT-101 · SQL and Relational Data

- Track: Data & AI Foundations
- Path: [Data Handling](../paths/FND-DAT.md)
- Level: Level 100 · Explain
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: beginner
- Status: In development

## Description

Participants query relational data in SQL and check that the answers are right. In an embedded analytical engine on a laptop they move from keys and constraints through joins, grouping and common table expressions to window functions. They predict results before running queries, catch the silent errors that joins and NULLs cause, and test assistant-written SQL against known answers. The capstone answers a stakeholder brief on an unseen dataset.

## Learning outcomes

By the end, the participant can:

- Explain the relational model: tables, keys, constraints, NULL and the grain of a table.
- Identify the output of joins, grouping and NULL comparisons before running them.
- Write queries with filters, joins, grouping, subqueries and common table expressions that answer business questions.
- Apply window functions to rank rows, compare periods and compute running and moving totals.
- Implement a small schema with keys and constraints, load raw files into it and report rejected rows.
- Identify silent errors in assistant-written SQL, such as join fan-out, wrong grain and missing business rules.

## Prerequisites

- Comfortable with spreadsheets: filters, sorting and simple formulas
- No programming experience required

## Next courses

- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- [DEV-DAT-301 · Data Modelling: Conceptual to Semantic](DEV-DAT-301.md)
- [SPC-ANL-203 · Metrics, Semantic Models and Dashboards](SPC-ANL-203.md)
- [SPC-ANL-204 · Data Acquisition, Preparation and Quality for Analysis](SPC-ANL-204.md)

## Topics

### The relational model

- Tables, types, keys and constraints
- Grain and cardinality
- Normal forms in brief, and why analytical tables are wider
- Embedded versus client-server engines

### Querying one table

- Filters, sorting, and expressions on text and dates
- CASE expressions and set operations
- NULL and three-valued logic
- Grouping and having

### Combining tables

- Inner, outer, semi and anti joins
- Join fan-out and double counting
- Subqueries and common table expressions

### Window functions

- Partitions and ordering
- Ranking, lag and lead
- Running and moving aggregates

### Building and checking

- Loading files into constrained tables
- Insert, update and delete inside a transaction
- Views that limit what is exposed
- Reading a query plan and the effect of an index
- Testing queries against known answers
