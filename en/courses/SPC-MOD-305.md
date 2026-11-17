# SPC-MOD-305 · Clustering, Anomaly Detection and Dimensionality Reduction

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs, guided pre-work and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants find structure in unlabelled data and show whether it is real. They reduce dimensions with principal components and nonlinear embeddings and see how projections mislead, segment with several clustering families, and validate clusters by internal indices, resampling stability and review with domain owners. They detect anomalies in synthetic transaction and sensor data and set alert thresholds against an investigation budget. Production drift monitoring is DEV-OPS-301.

## Learning outcomes

By the end, the participant can:

- Apply principal components and a nonlinear embedding and test which structures survive changes of settings and seeds.
- Apply centroid, mixture and density-based clustering under different scaling choices and measure internal indices and bootstrap stability.
- Measure the precision of anomaly detectors at a fixed investigation budget.
- Evaluate a segmentation delivered by another team and decide whether it is stable and useful enough to act on.
- Design an anomaly-monitoring rule for a data feed with thresholds, alert budget and a review step.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Uses vectors, distances and matrix notation

## Topics

### Reducing dimensions

- Principal components and loadings
- Nonlinear embeddings and their distortions

### Clustering

- Distance and scaling choices, including mixed data types
- Centroid, mixture and density-based methods

### Validation without labels

- Internal indices
- Stability under resampling
- Usefulness checks with domain owners

### Anomalies and monitoring

- Median-based and seasonal baselines
- Isolation forests and local outlier factors
- Alert budgets and precision at k
