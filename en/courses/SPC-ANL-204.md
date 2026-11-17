# SPC-ANL-204 · Data Acquisition, Preparation and Quality for Analysis

- Track: Data Science
- Path: [Analysis and Business Intelligence](../paths/SPC-ANL.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants assemble an analysis dataset from an API, open-data files and an internal extract. They record provenance and licences, link records across sources with and without shared keys, and clean the result with validation rules that rerun on every build. They show how missing data and measurement error move a headline estimate. They label a free-text column with a language model, measure agreement with a human-coded sample and stability across reruns, and use that sample to correct the estimate the labels feed. Pipeline gates and data contracts are DEV-DAT-204; text modelling in depth is SPC-MOD-303.

## Learning outcomes

By the end, the participant can:

- Describe missing-data mechanisms and types of measurement error, and the bias each can introduce.
- Prepare a provenance record for each source with origin, coverage, licence, refresh date and limits.
- Implement record linkage across sources, with cardinality tests, reconciliation counts and a clerical review of uncertain matches.
- Configure validation rules for types, ranges, uniqueness, completeness and cross-field consistency.
- Analyse how complete-case analysis, imputation and a sensitivity range change a headline estimate.
- Evaluate language-model labels of free text as a measurement instrument and decide whether they are fit for the analysis.

## Prerequisites

- [FND-DAT-101 · SQL and Relational Data](FND-DAT-101.md)
- [FND-DAT-102 · Data Wrangling with DataFrames](FND-DAT-102.md)
- Has fitted a simple linear regression and read its coefficients
- Calls a paginated API from Python (FND-DAT-103 or equivalent)

## Topics

### Sourcing

- Data requirements from the question
- Found data versus designed data
- Licences, coverage and selection bias

### Linking and cleaning

- Keys, grain and join cardinality
- Linkage without shared keys: blocking, similarity, clerical review
- Arabic name variants and transliteration
- Linkage error and its effect on counts
- Rules as code and change logs

### Missing data and measurement error

- Missing completely at random, at random, not at random
- Single and multiple imputation
- Proxies and misclassification
- Sensitivity ranges

### Labelling with language models

- Labels as measurement
- Codebooks and human-coded samples
- Chance-corrected agreement
- Correcting estimates for label error
- Drift after model or prompt changes
