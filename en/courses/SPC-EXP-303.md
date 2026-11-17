# SPC-EXP-303 · Measuring the Impact of AI Deployments

- Track: Data Science
- Path: [Experimentation and Causal Inference](../paths/SPC-EXP.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs, guided pre-work and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants design and analyse the measurement of an AI deployment such as a coding assistant for developers, a drafting assistant for case workers or an agent in a service centre. They choose between randomised, stepped-wedge and encouragement designs, measure outcomes that matter (quality, completed work, rework, time to resolution) instead of throughput or self-report, and correct for selection in who adopts first. On synthetic data modelled on published trials they compare perceived and measured gains, then turn an estimate and its uncertainty into a return case with costs. The product is a measurement plan an organisation can run.

## Learning outcomes

By the end, the participant can:

- Explain why self-reported speed-ups, usage counts and output throughput mislead as measures of AI impact.
- Prepare an outcome set for an AI deployment that separates speed, quality and value, including rework and the cost of errors.
- Analyse a staggered rollout of an AI assistant across teams, correcting for selection into early adoption.
- Design a trial for an AI deployment, choosing among randomised, stepped-wedge and encouragement designs and setting unit, duration, power and contamination controls.
- Build a return case from an impact estimate that carries its uncertainty through costs, benefits and the break-even point.
- Evaluate an impact report from a vendor or internal team and decide whether it supports scaling.

## Prerequisites

- [SPC-EXP-201 · Designing and Reading Experiments](SPC-EXP-201.md)
- Fits a linear regression with group fixed effects
- Reads a difference-in-differences estimate and its parallel-trends check, from SPC-EXP-302 or from the tracked pre-work on staggered rollouts
- Can describe one AI assistant or agent workflow from a work setting, including what it produces and who checks it

## Topics

### Why AI impact is hard to measure

- Perceived versus measured productivity
- Throughput, activity and self-report as proxies
- Uneven effects across tasks and people
- Novelty and observation effects in short pilots
- Learning curves and skill loss over time

### Outcomes that matter

- Speed, quality, rework and error cost
- Blind expert review of sampled work outputs
- Cost per completed task
- Effects on staff and on service users

### Trial designs for rollouts

- Individual and cluster randomisation
- Stepped-wedge and phased rollouts
- Encouragement designs when use cannot be forced
- Contamination and spillover between teams

### When the rollout already happened

- Selection into adoption
- Staggered difference-in-differences
- Matched comparison teams
- Rollout order or licence allocation as an instrument

### From estimate to return case

- Costs of usage, licences, review and change
- Distributions instead of point estimates
- Value versus speed
- Stop, continue or scale

### Reporting and governance

- Measurement plans as a gate before scaling
- Communicating uncertainty to sponsors
- Ethics of measuring workers
