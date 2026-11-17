# SPC-STA-301 · Regression and Generalised Linear Modelling

- Track: Data Science
- Path: [Statistics and Inference](../paths/SPC-STA.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: specialist
- Status: In development

## Description

Participants build regression models that answer stated questions and defend what the coefficients mean. They fit linear, logistic and count models with interactions and spline terms, diagnose misfit with residuals and fake-data simulation, compare cluster-adjusted errors with a first mixed-effects model for grouped data, and apply penalised regression when predictors are many. Results are reported as predicted quantities and marginal effects with intervals. The capstone is a modelling report on public data, defended live.

## Learning outcomes

By the end, the participant can:

- Distinguish descriptive, predictive and causal uses of a regression and the assumption each requires.
- Implement linear, logistic and count models with interactions and splines, interpreted as predicted values and average marginal effects.
- Diagnose misfit with residuals, influence measures and fake-data simulation, and correct the model.
- Analyse grouped data with cluster-adjusted standard errors and a random-intercept model, compared with a naive fit.
- Apply ridge and lasso penalties with cross-validated tuning and measure the stability of the selected predictors.
- Build and defend a regression model that answers a stated question, justifying terms, family and uncertainty.

## Prerequisites

- [SPC-STA-201 · Statistical Inference by Simulation](SPC-STA-201.md)
- Reads matrix notation for a linear model
- Writes analysis notebooks in Python or R

## Next courses

- [SPC-STA-401 · Bayesian Modelling and Decisions under Uncertainty](SPC-STA-401.md)
- [SPC-EXP-302 · Causal Inference from Observational Data](SPC-EXP-302.md)
- [SPC-EXP-402 · Statistical Evaluation of AI Systems](SPC-EXP-402.md)

## Topics

### Linear models as answers

- Description, prediction and causal claims
- Adjustment sets and the Table 2 fallacy (identification in SPC-EXP-302)
- Contrasts, interactions and transformed outcomes
- Splines for non-linear relationships

### Generalised linear models

- Links and outcome families
- Logistic regression and separation
- Poisson, negative binomial and offsets
- Average marginal effects

### Diagnostics

- Residuals, hat values and influence
- Overdispersion and calibration
- Recovering known parameters from fake data

### Grouped data

- Heteroskedasticity-consistent and cluster-adjusted standard errors
- Random intercepts and slopes
- No, complete and partial pooling

### Regularisation and reporting

- Ridge, lasso and elastic net
- Why intervals after selection mislead
- Effect plots on the outcome scale
