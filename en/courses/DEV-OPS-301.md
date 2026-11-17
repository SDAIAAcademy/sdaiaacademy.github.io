# DEV-OPS-301 · Machine Learning Operations: Pipelines, Registries and Delivery

- Track: AI Engineering
- Path: [Operations and Reliability](../paths/DEV-OPS.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants build the machinery that lets a model be retrained, checked and redeployed safely many times. On a synthetic customer dataset delivered in monthly batches with planted drift, they version data, code and models together, register models with lineage, write a training pipeline with validation and promotion gates, deliver it to staging and production, monitor drift and delayed-label performance, and wire retraining triggers that a person approves. Labs run on a laptop or a provided lab virtual machine with a single-node cluster. Feature stores are in DEV-MLE-203.

## Learning outcomes

By the end, the participant can:

- Implement versioning that ties each model to its data snapshot, code commit, configuration and environment.
- Build a training pipeline with data validation, evaluation against the production model and a promotion gate.
- Configure continuous integration and delivery that tests code, data contracts and model behaviour before deployment.
- Measure feature drift, prediction drift and delayed-label performance against a reference window.
- Design a retraining policy combining schedule, drift and performance triggers with human approval and a cost limit.
- Diagnose a training-serving skew incident from lineage and logs.

## Prerequisites

- [DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring](DEV-OPS-201.md)
- Trains and validates a supervised model in Python, as in DEV-MLE-201
- Writes unit tests and works in Git with merge requests

## Next courses

- [DEV-INF-403 · Designing an Internal AI Platform](DEV-INF-403.md)

## Topics

### Versioning and registries

- What changes behaviour: data, code, configuration, environment
- Experiment tracking and registry lineage
- The hand-off contract from data scientists

### Pipelines

- Parameterised and conditional steps
- Data validation and contracts
- Champion and challenger evaluation
- Failure recovery and reruns

### Delivery for models

- Tests for code, data and model behaviour
- Pipelines and environments as code
- Promotion gates and approvals
- Shadow, canary and rollback

### Monitoring and retraining

- Drift statistics and false alarms
- Delayed labels and proxy metrics
- Training-serving skew
- Retraining triggers and cost

### Governing the pipeline

- Maturity levels from manual to automated
- Subgroup metrics in every gate
- Audit logs, retention and decommissioning
