# DEV-OPS-401 · Reliability Engineering for AI Services

- Track: AI Engineering
- Path: [Operations and Reliability](../paths/DEV-OPS.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: specialist
- Status: In development

## Description

Participants set and defend reliability standards for AI services that other teams build. They write service level objectives for availability, latency and answer quality, load-test a self-hosted language model to find the concurrency at which goodput meets the objective, design degradation and recovery paths, lead incident drills and blameless reviews, and admit models only after verifying signatures and bills of materials. Labs use small open-weight models on a provided GPU notebook and recorded traffic. Engine tuning is in DEV-INF-401; the full go-live review across disciplines is DEV-PRJ-401.

## Learning outcomes

By the end, the participant can:

- Design service level objectives for availability, latency and answer quality, with error budgets.
- Evaluate service capacity by load-testing to a goodput target and setting an admission limit.
- Design degradation for overload and dependency failure using load shedding and a smaller fallback model.
- Lead an incident drill from detection to recovery and write a blameless review.
- Build an admission check that verifies model signatures, an AI bill of materials and licences.
- Review another team's AI service for reliability readiness and set launch conditions.

## Prerequisites

- [DEV-OPS-302 · Operating Language Model Applications: Tracing, Evaluation Gates and Safe Releases](DEV-OPS-302.md)
- Has carried on-call or incident duties for a production service
- Reads latency percentiles and queueing behaviour; DEV-INF-401 and DEV-SEC-304 are recommended

## Topics

### Objectives for AI services

- Time to first token and time per output token
- Quality indicators from online evaluation
- Error budgets, burn-rate alerts and release policy
- Objectives for agents: completion and cost

### Capacity under load

- Queueing, batching and tail latency
- Goodput against an objective
- Trace-replay load and admission control

### Designing for failure

- Provider, retrieval and tool failures
- Fallback models and degraded modes
- Retry storms and chaos experiments
- Restoring indexes, session state and model artefacts

### Incidents

- Detecting silent quality regressions
- Roles and decision logs
- Incidents turned into regression tests

### Integrity and standards

- Signing a manifest of hashed model files
- AI bills of materials and admission policy
- Readiness reviews; provenance depth in DEV-SEC-304
