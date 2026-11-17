# SPC-EXP-301 · Online Experiments at Scale

- Track: Data Science
- Path: [Experimentation and Causal Inference](../paths/SPC-EXP.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants run the statistics behind an experimentation programme that launches many tests a year, including tests of AI features. On a synthetic event stream from an online service they apply regression adjustment with pre-experiment data, compute intervals for ratio metrics, design sequential tests that allow continuous monitoring, and define guardrail metrics for latency, errors, cost and harm. They detect interference in marketplaces and networks and design cluster and switchback alternatives. They build a trustworthiness check pack and sit on a mock review board that decides whether experiments launch, iterate or stop.

## Learning outcomes

By the end, the participant can:

- Apply regression adjustment with pre-experiment covariates (CUPED, controlled-experiment using pre-experiment data) and report the variance reduction and the saving in sample size.
- Compute standard errors for ratio and per-session metrics with the delta method and with a bootstrap over the randomisation unit.
- Implement a group sequential design and an always-valid confidence sequence, and test their error rates under daily monitoring.
- Design a metric set and decision rule for a launch: a primary metric, guardrails for latency, errors, cost and harm, and how they combine.
- Diagnose interference in a two-sided marketplace experiment and design a cluster-randomised or switchback alternative with its power.
- Review experiment write-ups as a member of a review board and decide launch, iterate or stop for each.

## Prerequisites

- [SPC-EXP-201 · Designing and Reading Experiments](SPC-EXP-201.md)
- Fits and reads a linear regression with covariates
- Queries event-level data with SQL, including grouping and joins

## Topics

### Experimentation as a programme

- Experiment lifecycle and platform components
- Overall evaluation criterion and metric taxonomy
- Guardrail and quality metrics
- Testing AI features: model, prompt and ranking changes

### Trustworthiness checks

- A/A tests and sample ratio mismatch
- Logging, triggering and exposure
- Novelty, primacy and carry-over
- Bots, outliers and capped metrics

### Variance and metrics

- Delta method for ratio metrics
- Bootstrap at the randomisation unit
- Regression adjustment with pre-experiment data
- Power calculations that include variance reduction

### Sequential testing

- Why continuous monitoring inflates error
- Group sequential boundaries and alpha spending
- Always-valid inference and confidence sequences
- Stopping for harm on guardrails

### Interference and complex designs

- Network and marketplace interference
- Cluster randomisation
- Switchback and time-split designs
- Holdouts and long-term effects
- Surrogate metrics for long-term outcomes and their validation

### Many experiments at once

- False discovery rate across a programme
- Pre-planned segments versus fishing
- Winner's curse and shrinkage of reported effects
- Bandits versus fixed-allocation tests for inference

### Review and decisions

- Review board practice
- Launch criteria and decision records
- Archiving results and learning across experiments
- Consent and notice for experiments at scale
