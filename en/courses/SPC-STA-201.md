# SPC-STA-201 · Statistical Inference by Simulation

- Track: Data Science
- Path: [Statistics and Inference](../paths/SPC-STA.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Building on the single-sample bootstrap and permutation tests of FND-MTH-104, participants turn a question into an estimand, estimate it with an interval, test it, and check by simulation that their method does what it claims. They handle paired and clustered observations, skewed outcomes and ratios, compute power by simulating the planned analysis, control error rates across a planned family of claims and test equivalence when the claim is that nothing changed. The capstone is an inference report on public data, defended live.

## Learning outcomes

By the end, the participant can:

- Prepare an analysis plan stating estimand, unit of analysis, method and error rates before seeing the data.
- Compute bootstrap and large-sample intervals for ratios and differences in dependent data, resampling the correct unit.
- Implement a simulation that measures the coverage and Type I error of a method when its assumptions fail.
- Compute power and sample size by simulating the planned analysis, including clustering and attrition.
- Apply family-wise, false discovery rate and gatekeeping control to a planned family of claims, and test equivalence where the claim is no meaningful difference.
- Deliver an inference report that states estimates, intervals, effect sizes and limits in plain words.

## Prerequisites

- [FND-MTH-104 · Statistics by Simulation: Variation, Estimation and Testing](FND-MTH-104.md)
- Writes short analysis scripts in Python or R with a dataframe library
- A pass in the placement test is accepted in place of FND-MTH-104

## Next courses

- [SPC-STA-301 · Regression and Generalised Linear Modelling](SPC-STA-301.md)
- [SPC-STA-302 · Survey, Sampling and Measurement Design](SPC-STA-302.md)
- [SPC-EXP-402 · Statistical Evaluation of AI Systems](SPC-EXP-402.md)
- [SPC-MOD-402 · Simulation and Agent-Based Modelling](SPC-MOD-402.md)
- [SPC-RSP-302 · Data Science Practicum](SPC-RSP-302.md)

## Topics

### From question to estimand

- Population, unit of analysis and estimand
- Scope of inference
- Pre-specified analyses and forking paths

### Intervals that respect the data

- Studentised and bias-corrected bootstrap
- Paired, clustered and blocked resampling
- Where large-sample formulas fail
- Confidence versus prediction intervals

### Tests and their error rates

- Restricted permutations for paired and clustered data
- Equivalence and non-inferiority margins
- Simulation studies to check a method

### Power by simulation

- Minimum effect of interest
- Clustering, unequal allocation and attrition
- Why post-hoc power is not evidence

### Many comparisons and reporting

- Choosing an error rate for a family of claims
- Gatekeeping for primary and secondary claims
- Effect sizes with intervals
- Verification notes for assistant-written code
