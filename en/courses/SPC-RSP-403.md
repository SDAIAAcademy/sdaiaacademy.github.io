# SPC-RSP-403 · Frontier Seminar: AI for Science

- Track: Data Science
- Path: [Research Practice and Frontier](../paths/SPC-RSP.md)
- Level: Level 400 · Evaluate
- Format: Seminar: six weekly sessions of reading, presentation and hands-on work with open-weight models, rebuilt each term from current conference tutorials and workshops
- Total hours: 24 h
- Audience: specialist
- Status: In development

## Description

A reading and hands-on seminar on scientific foundation models with open weights: protein, genomic, materials, weather and Earth-observation models. Each week participants read current papers, run an open model on public data and test one claim against a domain baseline and a fair split. The seminar trains the judgement scientific use needs: leakage through similar sequences or nearby places and times, physical baselines, uncertainty, and the gap between benchmark scores and laboratory or field validation.

## Learning outcomes

By the end, the participant can:

- Explain how scientific foundation models differ from language models in training data, inductive biases, outputs and validation.
- Use an open-weight scientific model to produce predictions on public data and compare them with a domain baseline.
- Design an evaluation split that prevents leakage through sequence similarity, spatial proximity or temporal overlap.
- Review a published AI-for-science claim for its baselines, its validation against experiment or observation, and its uncertainty.
- Design a validation plan for using a scientific model in a domain project, naming the experimental or field evidence required.

## Prerequisites

- Trains and evaluates a deep learning model in Python, as in SPC-DLR-302, or equivalent
- Has university-level grounding in one science (biology, chemistry, physics or Earth science) or works with a scientist partner
- Reads research papers fluently

## Topics

### Proteins and molecules

- Protein language and structure models
- Confidence scores and their calibration
- Splits that respect sequence similarity

### Genomics

- Genomic language and sequence-to-function models
- Long-range context and variant effect prediction
- Access rules for human genetic data

### Materials and chemistry

- Machine-learned interatomic potentials
- Predicted stability versus synthesis in the laboratory
- Public materials and catalysis datasets

### Weather, climate and Earth observation

- Data-driven weather models trained on reanalysis
- Persistence, climatology and physical-model baselines
- Neural operators and physics-informed training on small partial differential equation problems
- Earth-observation foundation models and spatial splits

### Validating scientific claims

- Benchmarks versus laboratory and field validation
- Uncertainty, extrapolation and out-of-distribution inputs
- Claims of automated discovery by research agents
