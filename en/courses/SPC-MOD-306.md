# SPC-MOD-306 · Responsible Data Science: Privacy, Fairness and Documentation

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: practitioner
- Status: In development

## Description

Participants take one synthetic public-service dataset with personal attributes through the checks a responsible analysis needs before release. They measure re-identification risk and de-identify the data, answer aggregate queries under a differential privacy budget, audit a classifier's errors across subgroups, and write the datasheet, model card and reproducibility record that let a reviewer rerun and challenge the work. The method is general; national data protection rules are the worked reference. It extends the first model card of SPC-MOD-201; privacy attacks on trained models are SPC-TRU-304 and compliance casework is LDS-DMG-206.

## Learning outcomes

By the end, the participant can:

- Distinguish pseudonymisation, de-identification, aggregation and differential privacy by the guarantee each gives.
- Measure re-identification risk from quasi-identifiers and reduce it while tracking analytic utility.
- Compute differentially private counts and means and state the accuracy cost of a privacy budget.
- Audit a classifier for subgroup disparities, choose fairness criteria that fit the decision and evaluate mitigations.
- Build the documentation set that lets an independent reviewer rerun an analysis and judge its limits.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Computes classification metrics and group-wise aggregates in Python or R

## Topics

### Personal data in analysis

- Identifiers, quasi-identifiers and sensitive attributes
- Minimisation, purpose limitation and classification
- Linkage and re-identification attacks

### De-identification and its limits

- k-anonymity and its successors
- Generalisation, suppression and aggregation
- Synthetic data with utility and disclosure checks
- When de-identified data are still personal data

### Differential privacy basics

- Privacy budget and composition
- Mechanisms for counts and means
- Evaluating a differential privacy claim against a published hazards list, such as the US National Institute of Standards and Technology guidelines (SP 800-226)

### Subgroup fairness audit

- Group metrics and why they conflict
- Intersectional slices and small-group uncertainty
- Auditing when protected attributes are missing or restricted
- Mitigation before, during and after training

### Documentation and reproducibility

- Datasheets and model cards
- Reproducibility checklists such as REFORMS
- Pinned environments and versioned data
