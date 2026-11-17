# FND-DAT-102 · Data Wrangling with DataFrames

- Track: Data & AI Foundations
- Path: [Data Handling](../paths/FND-DAT.md)
- Level: Level 100 · Explain
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: beginner
- Status: In development

## Description

Participants turn messy raw files into analysis-ready tables with a DataFrame library. They type data, handle missing values, parse dates, normalise Arabic and English text, reshape between wide and long forms, join with cardinality checks and aggregate, writing each step as a small tested function in a notebook that reruns from the raw files. Labs use a synthetic bilingual service-request register; the capstone documents a fresh extract.

## Learning outcomes

By the end, the participant can:

- Describe tidy data and identify the reshaping operation that makes a given table tidy.
- Distinguish the ways data can be missing and explain how dropping, filling or flagging changes a summary.
- Implement a cleaning pipeline as chained, tested functions for types, dates, duplicates and categories.
- Apply joins with declared cardinality and reconcile row counts before and after each join.
- Normalise Arabic and English text fields for matching and measure the effect on match rates.
- Identify defects in assistant-written wrangling code, such as wrong types, dropped rows and many-to-many joins.

## Prerequisites

- Writes short Python programs with functions, lists and dictionaries (FND-PRG-101 or equivalent)
- Runs a notebook and installs a package in a provided environment

## Next courses

- [FND-DAT-103 · Data Formats, Interfaces and Quality Checks](FND-DAT-103.md)
- [SPC-ANL-201 · Exploratory Analysis and Visualisation](SPC-ANL-201.md)
- [SPC-ANL-204 · Data Acquisition, Preparation and Quality for Analysis](SPC-ANL-204.md)
- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)

## Topics

### Loading and typing

- Delimited, spreadsheet and columnar files
- Spreadsheet traps: serial dates, leading zeros, merged headers
- Nullable, string and categorical types
- Copy behaviour and method chaining

### Cleaning

- Missing values: causes and treatments
- Duplicates and keys
- Range and plausibility checks
- Dates, periods, and Hijri and Gregorian calendars

### Text, including Arabic

- String methods and regular expressions
- Arabic letter variants, diacritics, elongation and digit forms
- Names and addresses across scripts

### Reshaping, joining and aggregating

- Tidy data, melt and pivot
- Joins with validated cardinality
- Group-by and window-style operations
- Eager and lazy engines

### Reproducible notebooks

- Rerunning from raw files
- Functions, assertions and parameters
- Data dictionaries and cleaning logs
