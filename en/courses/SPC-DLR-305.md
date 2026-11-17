# SPC-DLR-305 · Data and Scaling for Foundation Models

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 40 h
- Audience: specialist
- Status: In development

## Description

Participants turn raw web crawl archives into pretraining data and decide how to spend a compute budget on it. They extract text, identify languages including Arabic varieties, filter for quality, remove personal data and near-duplicates, record licences and provenance, and set a mixture that may include filtered synthetic data. Each filtering decision is tested by training small models on the data it produces. Finally they fit scaling laws from small runs to choose a model size and token count for a stated budget.

## Learning outcomes

By the end, the participant can:

- Prepare a text pipeline from raw web archives covering extraction, language identification, quality filters and personal-data removal.
- Implement near-duplicate detection with MinHash and decontaminate the corpus against evaluation sets.
- Evaluate a filter, synthetic dataset or mixture by training small models on its output at equal compute.
- Build a scaling-law fit from small runs and use it to decide model size and token count for a budget.
- Draft a data card recording sources, licences, opt-out handling, filters and known gaps.

## Prerequisites

- [SPC-DLR-303 · Building a Language Model from Scratch](SPC-DLR-303.md)
- Processes multi-gigabyte files with a dataframe or SQL engine
- Fits and reads a regression on log-log axes

## Topics

### Sources and rights

- Web crawls, books, code and open government data
- Licences and opt-out signals
- Personal data in web text

### Cleaning and filtering

- Text extraction and language identification for Arabic varieties
- Rule-based and classifier quality filters
- What filters remove from dialect and minority text

### Deduplication and decontamination

- Exact and near-duplicate detection
- MinHash and locality-sensitive hashing
- Removing benchmark overlap

### Mixtures and synthetic data

- Domain weights and multilingual balance
- Generating and filtering synthetic data
- Degradation from training on model output

### Scaling laws and budgets

- Compute-optimal allocation
- Checking extrapolation
- Data-constrained regimes and repetition
