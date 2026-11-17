# DEV-EVL-401 · Evaluation Programmes and Release Gates

- Track: AI Engineering
- Path: [Evaluation and Quality Engineering for AI Systems](../paths/DEV-EVL.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: specialist
- Status: In development

## Description

Participants design how an organisation decides that an AI system is fit to release and stays so. For a synthetic public-service agency with a citizen assistant, a document-triage model and an internal coding agent, they tier systems by risk, back-test release criteria, audit a public benchmark, plan monitoring and brief a mock risk committee. Pipeline implementation is in DEV-OPS-302; benchmark science is in SPC-TRU-301.

## Learning outcomes

By the end, the participant can:

- Design a risk-tiered evaluation policy stating the suites, sample sizes, human review and sign-off each tier requires.
- Design release criteria with blocking thresholds, non-inferiority margins and re-evaluation triggers fixed in advance, and back-test them.
- Audit a public benchmark or vendor claim for validity, contamination, harness sensitivity and dependence on token budget.
- Design a monitoring plan linking production signals to offline suites and turning incidents into regression cases.
- Analyse the running cost of an evaluation programme across grader calls, review hours and infrastructure, and allocate it by tier.
- Defend a release recommendation, presenting the evidence with its uncertainty and residual risk.

## Prerequisites

- [DEV-EVL-301 · Evaluation-Driven Development for Language Model Applications](DEV-EVL-301.md)
- Has run an evaluation suite as a gate in continuous integration
- Reads paired comparisons, confidence intervals and power calculations

## Topics

### Evaluation as an organisational system

- Inventory and owners; tiering by impact, autonomy and reach
- Evidence per tier: capability, regression, adversarial, subgroup, human review, monitoring
- Shared harness, dataset registry and grader calibration records

### Release criteria

- Blocking and advisory checks; criteria fixed in advance
- Non-inferiority margins, noise floors and many checks at once
- Change classes: prompt, model, retrieval, tool, provider upgrade
- Sign-off, exceptions and their expiry

### Auditing benchmarks and claims

- Construct validity and task ambiguity
- Contamination and models that recognise a benchmark
- Harness, token budget and infrastructure effects on rankings

### Monitoring after release

- Sampled grading of production traffic
- Drift, feedback and guardrail-trigger signals with named owners
- Incidents turned into regression cases

### Reporting and governance

- Scorecards that show uncertainty and residual risk
- System cards and evaluation records
- Mapping tiers and gates to a risk management framework
