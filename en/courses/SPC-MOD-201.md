# SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants answer a prediction question on tabular data the way an independent reviewer will check it. They climb a baseline ladder, tune gradient-boosted trees under a fixed budget, test an automated or pretrained challenger on the same folds, choose validation that mirrors use, audit for leakage, break errors down by subgroup and write a model card. Data are public or synthetic, with repeated entities and dates that defeat naive splits. Production pipelines are DEV-MLE-201.

## Learning outcomes

By the end, the participant can:

- Identify the leakage type and the fitting validation scheme in short modelling cases.
- Apply a baseline ladder from a constant predictor to tuned gradient-boosted trees, logging every run.
- Implement validation that matches the data structure and measure how far a random split overstates performance.
- Test an automated or pretrained challenger against the tuned champion under identical folds and budget.
- Analyse held-out errors by subgroup with intervals that reflect slice size.
- Audit another analyst's modelling notebook and decide whether its reported score can be trusted.

## Prerequisites

- [FND-AIC-101 · How Machine Learning Works](FND-AIC-101.md)
- [FND-DAT-102 · Data Wrangling with DataFrames](FND-DAT-102.md)
- Computes and reads a bootstrap interval

## Next courses

- [SPC-EXP-401 · Causal Machine Learning and Policy Evaluation](SPC-EXP-401.md)
- [SPC-MOD-301 · Uncertainty, Interpretability and Model Validation](SPC-MOD-301.md)
- [SPC-MOD-302 · Forecasting and Time Series](SPC-MOD-302.md)
- [SPC-MOD-303 · Text and Unstructured Data for Data Science](SPC-MOD-303.md)
- [SPC-MOD-304 · Optimisation and Operations Research for Decisions](SPC-MOD-304.md)
- [SPC-MOD-305 · Clustering, Anomaly Detection and Dimensionality Reduction](SPC-MOD-305.md)
- [SPC-MOD-306 · Responsible Data Science: Privacy, Fairness and Documentation](SPC-MOD-306.md)
- [SPC-MOD-308 · Graph, Network and Relational Data Analysis](SPC-MOD-308.md)
- [SPC-MOD-401 · Foundation Models for Structured Data](SPC-MOD-401.md)
- [SPC-RSP-302 · Data Science Practicum](SPC-RSP-302.md)

## Topics

### Framing and baselines

- Target, unit and moment of prediction
- Metrics tied to the cost of errors
- Class imbalance and decision thresholds
- Constant, rule and regularised linear baselines

### Boosted trees and challengers

- Key settings, early stopping and tuning budgets
- Automated search and post-hoc ensembling
- Pretrained tabular models: row limits and licences

### Validation and leakage

- Stratified, grouped and time-ordered splits
- Nested tuning and an untouched test set
- Imputation, scaling and target encoding fitted inside folds
- Leakage types and feature availability at prediction time

### Error analysis and documentation

- Slicing by subgroup and operating condition
- Small slices and honest intervals
- Model cards and verification notes for AI-assisted code
