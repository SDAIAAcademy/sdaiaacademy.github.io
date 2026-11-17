# DEV-OPS · Operations and Reliability

Track: AI Engineering

## Purpose

Teach developers to put AI services into production and keep them correct, available, affordable and recoverable once people depend on them.

## Who it is for

AI, software and platform engineers who deploy, release, monitor and run machine learning models, language model applications and agents.

## Suggested order

Start with DEV-OPS-201 (packaging, serving and a first rollback), then take DEV-OPS-301 for model pipelines or DEV-OPS-302 for language model applications; add DEV-OPS-303 (agents) and DEV-OPS-304 (cost) as the systems require, and finish with DEV-OPS-401 (reliability engineering). Serving performance and platform design continue in DEV-INF-301, DEV-INF-401 and DEV-INF-403.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring](../courses/DEV-OPS-201.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Distinguish batch, online and streaming inference and the signals that matter for each.
- Package a model as a reproducible container image with pinned dependencies and no secrets inside.
- Implement a serving endpoint with input validation, timeouts, a concurrency limit and health checks.
- Configure structured logs, request metrics and two alerts with documented thresholds.
- Deliver a new version through a health-gated staged rollout and roll it back when a signal degrades.
- Prepare a runbook with versions, artefact hashes, owner, alerts and rollback steps.

### 2. [DEV-OPS-301 · Machine Learning Operations: Pipelines, Registries and Delivery](../courses/DEV-OPS-301.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-OPS-201
- Implement versioning that ties each model to its data snapshot, code commit, configuration and environment.
- Build a training pipeline with data validation, evaluation against the production model and a promotion gate.
- Configure continuous integration and delivery that tests code, data contracts and model behaviour before deployment.
- Measure feature drift, prediction drift and delayed-label performance against a reference window.
- Design a retraining policy combining schedule, drift and performance triggers with human approval and a cost limit.
- Diagnose a training-serving skew incident from lineage and logs.

### 3. [DEV-OPS-302 · Operating Language Model Applications: Tracing, Evaluation Gates and Safe Releases](../courses/DEV-OPS-302.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-OPS-201, DEV-LLM-201
- Implement versioning of prompts, model identifiers, settings, index and tool schemas as one release unit.
- Instrument model, retrieval and tool calls with spans, token counts, time to first token and time per output token.
- Build a release gate that blocks a change when a critical failure rate rises beyond a stated margin.
- Deliver a change through shadow and canary stages with automatic rollback.
- Configure input and output guardrails and measure their false-block and miss rates.
- Design an online evaluation loop that samples traces, routes uncertain cases to people and feeds failures into the offline suite.

### 4. [DEV-OPS-303 · Operating AI Agents: Durable Execution, Sandboxing and Replay](../courses/DEV-OPS-303.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-AGT-301, DEV-OPS-302
- Implement an agent bundle that pins model, prompts, tool schemas, skills and harness settings.
- Test tool idempotency by injecting crashes, timeouts and duplicate deliveries.
- Diagnose an agent failure by replaying its recorded trace against two versions.
- Decide whether to drain, pin or migrate in-flight sessions for an upgrade, then carry it out.
- Configure per-agent rate and spend limits, tool allowlists and a kill switch.

### 5. [DEV-OPS-304 · AI Cost Engineering: Gateways, Routing, Caching and Unit Economics](../courses/DEV-OPS-304.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-LLM-201
- Compute request cost and cost per successful outcome from tokens, tool calls and retries.
- Configure gateway keys per team, environment tags and spend limits.
- Optimise a gateway routing policy so each request class meets its quality floor at lower cost.
- Evaluate exact, prefix and semantic caches for savings, staleness and cross-tenant leakage.
- Prepare a unit-economics report with trend, forecast, energy use and savings options.

### 6. [DEV-OPS-401 · Reliability Engineering for AI Services](../courses/DEV-OPS-401.md)

- Level 400 · Evaluate · Intensive · 36 h · In development
- Needs: DEV-OPS-302
- Design service level objectives for availability, latency and answer quality, with error budgets.
- Evaluate service capacity by load-testing to a goodput target and setting an admission limit.
- Design degradation for overload and dependency failure using load shedding and a smaller fallback model.
- Lead an incident drill from detection to recovery and write a blameless review.
- Build an admission check that verifies model signatures, an AI bill of materials and licences.
- Review another team's AI service for reliability readiness and set launch conditions.
