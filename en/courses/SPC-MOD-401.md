# SPC-MOD-401 · Foundation Models for Structured Data

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 400 · Evaluate
- Format: Workshop: two days with labs, guided pre-work and a tracked follow-up task
- Total hours: 16 h
- Audience: specialist
- Status: In development

## Description

Participants decide whether a pretrained model for tables, time series or relational data should replace or join a tuned baseline. They test tabular in-context learners against tuned boosted trees across sample sizes and zero-shot forecasters against statistical benchmarks, survey relational and graph pretraining, audit leaderboard claims and weigh licences, cost and data residency. Labs run on a free notebook GPU or a provided accelerator.

## Learning outcomes

By the end, the participant can:

- Evaluate a tabular foundation model against a tuned, ensembled boosted-tree baseline across training-set sizes.
- Evaluate zero-shot and fine-tuned forecasters against seasonal naive, exponential smoothing and a tuned global boosted-tree model.
- Audit a published claim for pretraining overlap, unequal tuning budgets and leaderboard overfitting.
- Design a reusable evaluation protocol and decide on adoption for one structured-data task, including licence, hosting and data-flow conditions.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- [SPC-MOD-302 · Forecasting and Time Series](SPC-MOD-302.md)
- Tunes boosted trees under a fixed budget and runs rolling-origin backtests

## Topics

### How the models work

- In-context learning on tables
- Pretrained forecasters and covariates
- Relational deep learning and graph foundation models

### When they win

- Small-data and many-series regimes
- Tuned, ensembled baselines
- Cost and latency per prediction

### Evaluation caveats

- Pretraining and test overlap
- Leaderboard overfitting
- Uncertainty in rankings

### Adoption conditions

- Non-commercial and research-only weights
- Hosted against local inference
- Version pinning and hand-over
