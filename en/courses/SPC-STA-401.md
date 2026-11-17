# SPC-STA-401 · Bayesian Modelling and Decisions under Uncertainty

- Track: Data Science
- Path: [Statistics and Inference](../paths/SPC-STA.md)
- Level: Level 400 · Evaluate
- Format: Extended: 10 weeks part-time, with weekly labs, graded assignments and a defended capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants build Bayesian models for real decisions and judge models built by others. They set priors and check them by prior predictive simulation, fit models with Hamiltonian Monte Carlo, diagnose the computation, and test fit with posterior predictive checks and cross-validation. They build hierarchical models for many small groups and verify their code by simulation-based calibration. The final weeks turn posteriors into decisions through expected utility and the value of further data.

## Learning outcomes

By the end, the participant can:

- Implement a Bayesian workflow from prior predictive simulation through fitting to sampler diagnosis.
- Design a hierarchical model for many small groups and defend the pooling it implies.
- Evaluate competing models with posterior predictive checks and approximate leave-one-out cross-validation.
- Validate a model implementation by parameter recovery and simulation-based calibration.
- Decide between actions by expected utility under the posterior, including the value of collecting more data.
- Review another analyst's Bayesian analysis for priors, computation, checking and reporting.

## Prerequisites

- [SPC-STA-301 · Regression and Generalised Linear Modelling](SPC-STA-301.md)
- Works with conditional probability and likelihoods at the depth of FND-MTH-103
- Writes simulation code in Python or R

## Topics

### Priors and posteriors

- The model as a data-generating story
- Eliciting priors from domain experts
- Prior predictive simulation
- Bayesian and frequentist answers compared

### Computation

- Grid approximation for intuition
- Hamiltonian Monte Carlo
- Convergence, effective sample size and divergences
- Reparameterisation; limits of variational approximation

### Hierarchical models

- Partial pooling and shrinkage
- Varying intercepts and slopes
- Measurement error and missing data

### Checking models

- Posterior predictive checks
- Approximate leave-one-out cross-validation and stacking
- Simulation-based calibration
- Prior sensitivity
- Reporting a Bayesian analysis

### Decisions

- Utility and loss
- Expected value of information
- Small experiments and benchmarks
- Bandits and Thompson sampling
