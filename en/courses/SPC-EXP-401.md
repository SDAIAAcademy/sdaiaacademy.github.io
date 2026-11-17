# SPC-EXP-401 · Causal Machine Learning and Policy Evaluation

- Track: Data Science
- Path: [Experimentation and Causal Inference](../paths/SPC-EXP.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: specialist
- Status: In development

## Description

Participants use machine learning to estimate who benefits from a treatment and to choose and evaluate targeting policies. They estimate average effects with double machine learning and cross-fitting, estimate conditional average treatment effects with meta-learners and causal forests, and validate them on held-out randomised data. They build uplift models for targeting, evaluate new decision policies offline from logged data, and learn a policy under budget and fairness constraints. Each policy ends with the confirmatory experiment that would test it. The capstone is a policy evaluation defended before a panel.

## Learning outcomes

By the end, the participant can:

- Implement double machine learning with cross-fitting for an average effect with many confounders, and compare it with plain regression adjustment.
- Build conditional average treatment effect (CATE) estimators with at least three methods and validate them on held-out randomised data.
- Evaluate a proposed targeting policy offline from logged decisions with inverse propensity and model-assisted estimators, and diagnose when the estimate cannot be trusted.
- Design a treatment-assignment policy under a budget and a fairness constraint, and compare it with treat-all and risk-based targeting.
- Diagnose a heterogeneous-effect claim that rests on overfitting, unstable subgroups or reuse of the same data for estimation and evaluation.
- Design a confirmatory experiment for a learned policy, with power for the comparison against the current policy.

## Prerequisites

- [SPC-EXP-302 · Causal Inference from Observational Data](SPC-EXP-302.md)
- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Fits, tunes and cross-validates gradient-boosted tree models
- Derives an adjustment set from a causal graph

## Topics

### From average to heterogeneous effects

- Conditional and individual effects
- Why risk models are not benefit models
- Identification under randomisation and under unconfoundedness

### Double machine learning

- Orthogonal scores and cross-fitting
- Choosing and tuning nuisance models
- Inference for average and partial effects
- Partially linear and interactive models

### Heterogeneous-effect estimators

- S-, T- and X-learners
- R-learner and DR-learner
- Causal forests and honest splitting
- Bayesian tree ensembles

### Validating effect estimates

- No ground truth for individual effects
- Calibration by predicted-effect group
- Uplift and Qini curves
- Rank-weighted average treatment effect

### Uplift modelling for targeting

- Response versus uplift
- Persuadable, sure-thing, lost-cause and do-not-disturb segments
- Cost-aware targeting thresholds

### Off-policy evaluation

- Logged bandit feedback and propensities
- Inverse propensity scoring and self-normalised estimators
- Direct and combined estimators
- Overlap, effective sample size and variance
- Logging propensities so future policies can be evaluated

### Policy learning and hand-over

- Policy trees and welfare maximisation
- Budget and fairness constraints
- Confirmatory experiments and monitoring
- Hand-over of the assignment rule to engineering
