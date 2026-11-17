# SPC-MOD-301 · Uncertainty, Interpretability and Model Validation

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants produce the evidence an independent validator needs about a trained model: whether its probabilities can be trusted, how wide its errors are, what drives its predictions and where it stops working. They measure and repair calibration, wrap models in conformal intervals and prediction sets, test coverage by subgroup and under shift, apply explanation methods and show where they mislead, and write a validation report against a published checklist. Labs use synthetic readmission and credit data.

## Learning outcomes

By the end, the participant can:

- Explain what calibration, conformal coverage and feature attribution each guarantee, and their assumptions.
- Measure calibration with proper scores and reliability diagrams, then recalibrate and report the effect by subgroup.
- Implement conformal intervals and prediction sets and test coverage overall, by group and under simulated shift.
- Compute permutation, accumulated-local-effect and Shapley-value explanations and test their stability across refits.
- Diagnose why a model degrades on a later batch from slice metrics, coverage loss and explanation changes.
- Audit a model package against a reporting checklist and deliver a fit-for-use decision.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Reads hypothesis tests and bootstrap intervals at the depth of SPC-STA-201

## Topics

### Probabilities you can act on

- Proper scoring rules
- Reliability diagrams and binned calibration error
- Platt, isotonic and temperature scaling

### Conformal prediction

- Exchangeability and what coverage means
- Split, cross and quantile-based methods
- Group-conditional coverage and shift
- Abstention and referral to a person when sets are large

### Explanation and its limits

- Interpretable models as the first option
- Importance, effect plots, Shapley values and counterfactuals
- Correlated features and unstable attributions
- Explaining the model, not the world

### Validation practice

- Independent challenge
- Leakage and reproducibility checklists
- Stress and shift testing
- Validation report structure
