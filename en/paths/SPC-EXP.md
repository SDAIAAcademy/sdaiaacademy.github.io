# SPC-EXP · Experimentation and Causal Inference

Track: Data Science

## Purpose

Teach specialists to design experiments, estimate causal effects from experimental and observational data, and measure the effect of AI systems and deployments with stated uncertainty.

## Who it is for

Data scientists, analysts, product managers and risk analysts who must say whether a change, a programme or an AI system caused an outcome, and by how much.

## Suggested order

Start with SPC-EXP-201, then take online experiments (SPC-EXP-301) or observational causal inference (SPC-EXP-302), with SPC-EXP-303 applying both to AI rollouts. At level 400, SPC-EXP-401 adds causal machine learning and policy evaluation, and SPC-EXP-402 applies experimental statistics to the evaluation of AI systems.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-EXP-201 · Designing and Reading Experiments](../courses/SPC-EXP-201.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Needs: FND-MTH-104
- Distinguish a randomised experiment, a quasi-experiment and an observational comparison, and explain what causal claim each can support.
- Draft a pre-registration that states the decision, hypothesis, unit of randomisation, primary and guardrail metrics and the analysis plan.
- Compute the sample size and run time needed to detect a minimum effect of interest, and check the answer by simulation.
- Analyse a completed two-arm experiment with a difference in means, a confidence interval and a sample ratio mismatch test.
- Measure the false-positive rate caused by repeated peeking and by testing many metrics in the same experiment.
- Review a reported experiment result and decide whether it supports the decision it claims to support.

### 2. [SPC-EXP-301 · Online Experiments at Scale](../courses/SPC-EXP-301.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: SPC-EXP-201
- Apply regression adjustment with pre-experiment covariates (CUPED, controlled-experiment using pre-experiment data) and report the variance reduction and the saving in sample size.
- Compute standard errors for ratio and per-session metrics with the delta method and with a bootstrap over the randomisation unit.
- Implement a group sequential design and an always-valid confidence sequence, and test their error rates under daily monitoring.
- Design a metric set and decision rule for a launch: a primary metric, guardrails for latency, errors, cost and harm, and how they combine.
- Diagnose interference in a two-sided marketplace experiment and design a cluster-randomised or switchback alternative with its power.
- Review experiment write-ups as a member of a review board and decide launch, iterate or stop for each.

### 3. [SPC-EXP-302 · Causal Inference from Observational Data](../courses/SPC-EXP-302.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: SPC-STA-301
- Draft a causal graph (directed acyclic graph, DAG) for a stated question and derive a valid adjustment set, identifying colliders and bad controls.
- Apply propensity-score matching and inverse probability weighting to estimate an average treatment effect, checking overlap and covariate balance.
- Apply difference-in-differences to estimate a programme effect, including an event-study plot and an estimator suited to staggered adoption.
- Implement synthetic control, regression discontinuity and instrumental-variable estimates, each with its standard diagnostic.
- Defend the choice of an identification strategy for a new causal question against at least two alternatives.
- Evaluate how sensitive an estimate is to unmeasured confounding and state how strong a confounder would have to be to change the conclusion.
- Deliver an end-to-end observational analysis from question to defended conclusion.

### 4. [SPC-EXP-303 · Measuring the Impact of AI Deployments](../courses/SPC-EXP-303.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-EXP-201
- Explain why self-reported speed-ups, usage counts and output throughput mislead as measures of AI impact.
- Prepare an outcome set for an AI deployment that separates speed, quality and value, including rework and the cost of errors.
- Analyse a staggered rollout of an AI assistant across teams, correcting for selection into early adoption.
- Design a trial for an AI deployment, choosing among randomised, stepped-wedge and encouragement designs and setting unit, duration, power and contamination controls.
- Build a return case from an impact estimate that carries its uncertainty through costs, benefits and the break-even point.
- Evaluate an impact report from a vendor or internal team and decide whether it supports scaling.

### 5. [SPC-EXP-401 · Causal Machine Learning and Policy Evaluation](../courses/SPC-EXP-401.md)

- Level 400 · Evaluate · Intensive · 36 h · In development
- Needs: SPC-EXP-302, SPC-MOD-201
- Implement double machine learning with cross-fitting for an average effect with many confounders, and compare it with plain regression adjustment.
- Build conditional average treatment effect (CATE) estimators with at least three methods and validate them on held-out randomised data.
- Evaluate a proposed targeting policy offline from logged decisions with inverse propensity and model-assisted estimators, and diagnose when the estimate cannot be trusted.
- Design a treatment-assignment policy under a budget and a fairness constraint, and compare it with treat-all and risk-based targeting.
- Diagnose a heterogeneous-effect claim that rests on overfitting, unstable subgroups or reuse of the same data for estimation and evaluation.
- Design a confirmatory experiment for a learned policy, with power for the comparison against the current policy.

### 6. [SPC-EXP-402 · Statistical Evaluation of AI Systems](../courses/SPC-EXP-402.md)

- Level 400 · Evaluate · Intensive · 30 h · In development
- Needs: SPC-STA-201, SPC-STA-301
- Compute standard errors for an evaluation score that account for clustered items, repeated sampling and several runs per item.
- Decide whether the difference between two models on a shared item set is real and large enough to matter, using a paired analysis.
- Design the size of an evaluation in items, samples per item and grader calls to detect a stated difference within a budget.
- Decide which interval method to use for small evaluations, showing by simulation where the large-sample interval fails.
- Evaluate how model-grader error biases an observed pass rate and correct it using measured sensitivity and specificity, carrying the calibration uncertainty into the final interval.
- Audit a published or internal evaluation claim for statistical validity and write a reporting standard for future claims.
