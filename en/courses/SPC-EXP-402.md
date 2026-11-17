# SPC-EXP-402 · Statistical Evaluation of AI Systems

- Track: Data Science
- Path: [Experimentation and Causal Inference](../paths/SPC-EXP.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: specialist
- Status: In development

## Description

Participants treat every model evaluation as an experiment with a sampling design. Using item-level results they generate from small open-weight models on public benchmarks and a synthetic in-house task set, or from provided item-level logs, they compute standard errors that respect clustered items and repeated samples, compare models with paired designs, size an evaluation for a minimum effect of interest, use exact and Bayesian intervals when items are few, and correct pass rates for the measured error of a model grader. They audit published comparisons and write a statistical reporting standard for evaluation claims. Benchmark design, contamination and grader validation are taught in SPC-TRU-301 and DEV-EVL-301.

## Learning outcomes

By the end, the participant can:

- Compute standard errors for an evaluation score that account for clustered items, repeated sampling and several runs per item.
- Decide whether the difference between two models on a shared item set is real and large enough to matter, using a paired analysis.
- Design the size of an evaluation in items, samples per item and grader calls to detect a stated difference within a budget.
- Decide which interval method to use for small evaluations, showing by simulation where the large-sample interval fails.
- Evaluate how model-grader error biases an observed pass rate and correct it using measured sensitivity and specificity, carrying the calibration uncertainty into the final interval.
- Audit a published or internal evaluation claim for statistical validity and write a reporting standard for future claims.

## Prerequisites

- [SPC-STA-201 · Statistical Inference by Simulation](SPC-STA-201.md)
- [SPC-STA-301 · Regression and Generalised Linear Modelling](SPC-STA-301.md)
- Runs a language model evaluation with a harness and exports item-level scores, at the depth of DEV-EVL-301
- Writes simulation code in Python or R

## Topics

### Evaluations as experiments

- Items as a sample from a population of tasks
- Sources of variance: items, sampling, graders, harness
- Published recommendations for reporting evaluation uncertainty

### Standard errors and clustering

- Large-sample intervals and their assumptions
- Clustered items and design effects
- Repeated samples per item and variance decomposition
- Estimators of success at k attempts and their variance

### Paired designs and comparisons

- Paired differences and correlated item results
- Comparing many models and multiple comparisons
- Leaderboard ranks with uncertainty

### Power and sizing

- Minimum effect of interest
- Power for paired and clustered designs
- Trading items against samples per item and grader calls

### Small samples and extreme rates

- Wilson, exact and Bayesian intervals
- Beta-binomial models for item difficulty
- Item response models and reduced item sets
- Coverage checks by simulation

### Grader error

- Graders as noisy measurement
- Correction with sensitivity and specificity
- Propagating calibration uncertainty
- Combining a small human-labelled set with many model-graded items (prediction-powered inference)

### Reporting and standards

- Evaluation reports with uncertainty
- Slices by language and subgroup, including Arabic and English
- An organisational standard for evaluation claims
