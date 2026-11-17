# DEV-LLM-302 · Arabic and Multilingual Language Applications

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants make a language model application work for Arabic speakers as well as it does in English. They measure what tokenisation costs in Arabic, normalise text and identify dialects, handle code-switching and romanised Arabic, compare Arabic-first and multilingual open models, and build and calibrate their own Arabic test set with cultural criteria. The case study is a synthetic citizen-service assistant used in Modern Standard Arabic, three dialects and mixed language. Annotation operations at scale are DEV-EVL-304; Arabic speech is DEV-MLE-302.

## Learning outcomes

By the end, the participant can:

- Measure how tokeniser fertility changes cost, usable context and chunk sizes for standard and dialectal Arabic across target models.
- Implement normalisation, romanised-Arabic detection and dialect identification.
- Test retrieval and prompting strategies for dialectal and code-switched queries.
- Design an application test set covering standard Arabic, dialects, code-switching and cultural items.
- Evaluate Arabic-first and multilingual open models on public benchmarks and on the custom set, and explain disagreements.
- Build a model-graded check for cultural appropriateness and calibrate it against native-speaker labels.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- [DEV-LLM-202 · Applied Natural Language Processing Engineering](DEV-LLM-202.md)
- Reads Modern Standard Arabic, or works in a pair with someone who does

## Topics

### Arabic as data

- Morphology, diacritics and orthographic variation
- Romanised Arabic and bidirectional text
- Numerals, names and Hijri dates

### Tokenisation and dialects

- Fertility and context budgets
- Dialect identification
- Arabic-English mixing in queries

### Open Arabic models as cases

- Arabic-first open-weight models such as ALLaM
- Multilingual models
- Context limits and licences

### Benchmarks and cultural evaluation

- Arabic knowledge, exam and instruction-following benchmarks
- Contamination and translated test sets
- Cultural rubrics and grader calibration
- Bias across dialects
