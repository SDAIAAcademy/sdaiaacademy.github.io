# SPC-MOD-303 · Text and Unstructured Data for Data Science

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants turn text into measurements they can defend. On public Arabic and English consultation responses, reviews and tender notices they build sparse-feature baselines, use embeddings as features, classify and extract fields with prompted language models, and find topic structure by clustering embeddings. Every model output is treated as a measurement, with agreement against a human gold set, stability across runs and prompts, dialect gaps and versions reported. Retrieval systems are DEV-LLM-203; production document extraction is DEV-LLM-204.

## Learning outcomes

By the end, the participant can:

- Compare sparse features, embeddings and prompted language models on data needs, cost, transparency and failures.
- Prepare a codebook and gold set and measure agreement between annotators with chance-corrected statistics.
- Measure sparse, embedding-based and prompted classifiers against the same held-out gold set.
- Implement schema-constrained field extraction and measure field-level precision and recall.
- Evaluate a language model as an annotator and decide whether its labels can feed a downstream analysis.
- Design a text-measurement project that answers a stakeholder question and defend each measurement choice.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- [FND-AIC-102 · How Language Models Work](FND-AIC-102.md)
- Calls a language model from Python and parses structured output

## Topics

### Text as data

- Units of analysis and sampling
- Arabic normalisation, dialects and code-switching
- Personal data in free text

### Representations

- Sparse term weighting
- Multilingual sentence embeddings
- Embeddings as tabular features

### Language models as instruments

- Zero-shot and few-shot classification
- Extraction schemas and structured output
- Local open-weight versus hosted models

### Measurement reliability

- Cohen's kappa and Krippendorff's alpha
- Model labels against people
- Correcting estimates for label error with a gold subsample
- Drift after model or prompt changes

### Structure discovery

- Clustering embeddings into topics
- Human validation of topic labels
