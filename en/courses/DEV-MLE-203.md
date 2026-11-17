# DEV-MLE-203 · Feature, Training-Data and Labelling Pipelines

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 200 · Apply
- Format: Workshop: 2 days with labs and a short tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build the data side of a production model on a synthetic payments event log. They assemble training sets with point-in-time joins, define features once for training and serving, catch training-serving skew, and run a model-assisted labelling flow with human review and versioned labels.

## Learning outcomes

By the end, the participant can:

- Explain how point-in-time errors, stale features and training-serving skew enter a prediction system.
- Implement an as-of join that uses only feature values available at each label's time.
- Configure shared feature definitions with offline materialisation and online retrieval.
- Test a deployed model for training-serving skew by comparing logged and recomputed features.
- Build a labelling flow that samples by model uncertainty, pre-labels, routes to human review and versions the labels.

## Prerequisites

- [DEV-MLE-201 · Machine Learning Engineering: Baselines, Validation and Pipelines](DEV-MLE-201.md)
- Writes analytical SQL with joins and window functions

## Topics

### Features and point-in-time correctness

- Entities, keys and event time
- Batch, streaming and on-request features
- Offline and online stores, freshness and backfills
- As-of joins and late-arriving data

### Training-serving skew

- Causes: duplicated code, defaults, versions
- Logging served features
- Skew checks; monitoring is DEV-OPS-301

### Labelling flows

- Choosing what to label next
- Model pre-labels and anchoring bias
- Label provenance and versioning; guidelines and agreement are DEV-EVL-304
