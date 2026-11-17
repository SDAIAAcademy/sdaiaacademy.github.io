# DEV-EVL-304 · Annotation, Golden Data and Human Review Operations

- Track: AI Engineering
- Path: [Evaluation and Quality Engineering for AI Systems](../paths/DEV-EVL.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short design project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants write a labelling guideline, pilot it on synthetic Arabic and English responses, measure agreement and adjudicate, then build a versioned golden set, test whether a model labeller is reliable enough to share the work, and design and cost a review queue.

## Learning outcomes

By the end, the participant can:

- Draft a labelling guideline with definitions, decision rules and edge cases, and revise it after a pilot.
- Compute chance-corrected agreement by category and rater to find ambiguous categories.
- Measure a language model labeller's reliability against adjudicated labels before and after a prompt change.
- Design a golden evaluation set with a sampling plan, adjudication, versioning and leakage safeguards.
- Design and cost a human review queue: sampling rules, capacity, quality checks and a route into the evaluation set.

## Prerequisites

- Computes proportions, confusion matrices and confidence intervals
- Has evaluated a model or application with labelled data

## Topics

### Guidelines and raters

- Label types: binary, categorical, span, pairwise
- Decision rules and versions
- Rater training and qualification

### Agreement and adjudication

- Cohen's and Fleiss' kappa, Krippendorff's alpha
- Disagreement as signal; adjudication methods

### Golden data and model labellers

- Stratified sampling for rare failure modes
- Separation from training and prompts
- Model labellers: reliability and drift

### Review operations

- Random, risk-targeted and low-confidence sampling
- Gold items, spot audits, cost per item
- Rater welfare and dialect expertise
