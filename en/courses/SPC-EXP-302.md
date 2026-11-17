# SPC-EXP-302 · Causal Inference from Observational Data

- Track: Data Science
- Path: [Experimentation and Causal Inference](../paths/SPC-EXP.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants answer causal questions where no experiment was run. They write each question as an estimand, draw a causal graph and derive what must be adjusted for, then estimate effects with matching and weighting, difference-in-differences with staggered adoption, synthetic control, regression discontinuity and instrumental variables. Each method is practised on a public or synthetic dataset where the answer is known or has been debated in the literature. Every analysis ends with a sensitivity analysis and a plain statement of the assumptions a reader must accept. The capstone is a full observational analysis defended before a panel.

## Learning outcomes

By the end, the participant can:

- Draft a causal graph (directed acyclic graph, DAG) for a stated question and derive a valid adjustment set, identifying colliders and bad controls.
- Apply propensity-score matching and inverse probability weighting to estimate an average treatment effect, checking overlap and covariate balance.
- Apply difference-in-differences to estimate a programme effect, including an event-study plot and an estimator suited to staggered adoption.
- Implement synthetic control, regression discontinuity and instrumental-variable estimates, each with its standard diagnostic.
- Defend the choice of an identification strategy for a new causal question against at least two alternatives.
- Evaluate how sensitive an estimate is to unmeasured confounding and state how strong a confounder would have to be to change the conclusion.
- Deliver an end-to-end observational analysis from question to defended conclusion.

## Prerequisites

- [SPC-STA-301 · Regression and Generalised Linear Modelling](SPC-STA-301.md)
- Designs and reads a randomised experiment at the depth of SPC-EXP-201
- Writes analysis notebooks in Python or R

## Next courses

- [SPC-EXP-401 · Causal Machine Learning and Policy Evaluation](SPC-EXP-401.md)

## Topics

### Questions, estimands and potential outcomes

- Average, on-the-treated and local effects
- Target populations
- Why prediction is not causation
- Pre-analysis plans for observational work

### Causal graphs and identification

- Directed acyclic graphs and the back-door criterion
- Colliders, mediators and bad controls
- The front-door idea
- What a graph cannot tell you

### Matching and weighting

- Propensity scores
- Matching and inverse probability weighting
- Estimators that combine outcome and propensity models
- Overlap, trimming and balance diagnostics

### Panel designs

- Difference-in-differences and parallel trends
- Event studies
- Staggered adoption and effects that change over time
- Interrupted time series and its limits
- Synthetic control and placebo tests

### Discontinuities and instruments

- Sharp and fuzzy regression discontinuity
- Bandwidth choice and manipulation tests
- Instrument relevance and exclusion
- Weak instruments and the local average treatment effect

### Sensitivity and partial identification

- Sensitivity to unmeasured confounding
- Bounds and partial identification
- Falsification and placebo outcomes

### Reporting causal claims

- Assumptions in plain words
- Checking assistant-written analysis code
- Limitations sections that a decision maker can use
