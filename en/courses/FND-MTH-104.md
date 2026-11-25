# FND-MTH-104 · Statistics by Simulation: Variation, Estimation and Testing

- Track: Data & AI Foundations
- Path: [Mathematics and Statistics](../paths/FND-MTH.md)
- Level: Level 100 · Explain
- Format: Extended: 8 weeks part-time, one session and one lab a week, weekly graded problem sets and a capstone
- Total hours: 45 h
- Audience: beginner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/fnd-mth-104/
- The whole course in one file: https://sdaiaacademy.github.io/fnd-mth-104/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/fnd-mth-104/practice.html

## Description

Participants approach inference by simulation before formulas. They draw repeated samples to see variation, build bootstrap intervals for means, medians, differences and slopes, run permutation tests, and report effect sizes with intervals rather than bare p-values. They find multiple-testing and forking-path problems in reported results. Each lab ends with a note on how the result was checked, and the capstone is an analysis brief on a public dataset, defended orally. Power analysis and study design follow in SPC-STA-201 and SPC-EXP-201.

## Learning outcomes

By the end, the participant can:

- Distinguish population, sample, parameter, statistic and sampling distribution, and explain what a standard error measures.
- Explain what p-values and confidence intervals mean and identify misreadings of them.
- Identify multiple-testing, forking-path and confounding problems in a reported analysis.
- Compute bootstrap intervals for means, medians, group differences and regression slopes.
- Implement permutation tests and report each result as an effect size with an interval.
- Apply family-wise and false-discovery-rate corrections and measure by simulation how often uncorrected tests produce false findings.

## Prerequisites

- [FND-MTH-103 · Probability for Data and AI](FND-MTH-103.md)
- Probability shown in the placement test is accepted in place of FND-MTH-103
- Computes group summaries with a DataFrame library (FND-DAT-102 or the pre-work notebook)

## Next courses

- [SPC-STA-201 · Statistical Inference by Simulation](SPC-STA-201.md)
- [SPC-EXP-201 · Designing and Reading Experiments](SPC-EXP-201.md)

## Format and days

### Day 1: Describing data

- Centre, spread, shape and missing values

### Day 2: Sampling variation

- Populations, samples and standard error

### Day 3: Observational and experimental data

- Confounding and Simpson's paradox

### Day 4: The bootstrap

- The bootstrap and its coverage

### Day 5: Intervals for differences and slopes

- Differences and slopes

### Day 6: Permutation tests

- Null models, p-values and effect sizes

### Day 7: Many tests and forking paths

- Multiple testing and false discoveries

### Day 8: Error rates, power and honest reporting

- Type I and II errors, power and reporting

### Day 9: Capstone oral checks


## Topics

### Describing data

- Centre and spread, median and interquartile range
- Distribution shape and outliers
- Missing data and summaries

### Sampling variation

- Populations, samples and sampling frames
- Sampling distributions and standard error by simulation
- Observational versus experimental data, confounding and Simpson's paradox

### Estimation

- The bootstrap and its assumptions
- Interval coverage checked by simulation
- Intervals for differences and slopes

### Testing

- Null models and permutation tests
- What p-values do not mean
- Type I and Type II errors, and a first look at power
- Effect size and practical significance

### Honest reporting

- Multiple testing and false discoveries
- Forking paths and pre-specified analyses
- Recording how each result was checked
