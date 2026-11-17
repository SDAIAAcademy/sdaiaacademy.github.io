# DEV-MLE-201 · Machine Learning Engineering: Baselines, Validation and Pipelines

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants engineer a tabular model the way production will judge it. They climb a baseline ladder from a constant predictor to tuned boosted trees and an automated challenger, choose validation that mirrors use, hunt seeded leaks, calibrate probabilities and set a cost-based threshold, then package it as a configuration-driven pipeline an assessor re-runs from a clean checkout. Data is public or synthetic, with repeated entities and time stamps that make naive validation fail. The data-science counterpart is SPC-MOD-201; conformal intervals and explanation methods are SPC-MOD-301.

## Learning outcomes

By the end, the participant can:

- Explain why a validation estimate turns optimistic when splits ignore groups, time order or duplicate entities.
- Implement a baseline ladder from a constant predictor through a regularised linear model to gradient-boosted trees tuned under a fixed budget, then test an automated or pretrained challenger.
- Configure a grouped or time-ordered validation scheme and report its gap to a naive random split.
- Analyse a training pipeline for target, temporal, preprocessing and entity leakage and remove each source.
- Calibrate predicted probabilities and choose a decision threshold from stated error costs.
- Build a reproducible training pipeline that another engineer re-runs to the same metrics.

## Prerequisites

- [FND-AIC-101 · How Machine Learning Works](FND-AIC-101.md)
- Writes Python functions with unit tests and works with DataFrames
- Uses Git to branch, commit and request a review
- Reads a bootstrap interval and a confusion matrix (FND-MTH-104 or equivalent)

## Next courses

- [DEV-MLE-202 · Deep Learning Engineering](DEV-MLE-202.md)
- [DEV-MLE-203 · Feature, Training-Data and Labelling Pipelines](DEV-MLE-203.md)
- [DEV-MLE-303 · Recommender and Ranking Systems Engineering](DEV-MLE-303.md)

## Topics

### The baseline ladder

- Framing target and metric
- Constant, rule and linear baselines
- Gradient-boosted trees, tuning budgets and simple ensembles
- Automated and pretrained tabular models as challengers

### Validation and leakage

- Grouped, stratified and time-ordered splits
- Nested tuning and the untouched test set
- Leakage types and fitting transforms inside folds
- Feature availability at prediction time

### Probabilities and decisions

- Calibration curves, Platt and isotonic methods
- Thresholds from error costs
- Error and calibration by subgroup

### Engineering the pipeline

- Pipeline objects and configuration files
- Seeds, locked environments and data hashes
- Schema, invariance and minimum-performance tests
- Model card and prediction interface for hand-off to DEV-OPS-301
