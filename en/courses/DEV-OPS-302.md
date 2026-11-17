# DEV-OPS-302 · Operating Language Model Applications: Tracing, Evaluation Gates and Safe Releases

- Track: AI Engineering
- Path: [Operations and Reliability](../paths/DEV-OPS.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants run a grounded assistant, a synthetic public-services help desk with retrieval and two tools, as a production service. They version prompts, model identifiers, settings, retrieval index and tool schemas as one release unit, trace every request, put evaluation suites into a release gate, ship changes through shadow and canary stages with automatic rollback, configure guardrails, and sample live traffic for online evaluation and human review. Labs use a small open-weight model on a laptop or a free hosted tier. Evaluator design is in DEV-EVL-301 and organisation-wide release criteria in DEV-EVL-401; here participants operate evaluators.

## Learning outcomes

By the end, the participant can:

- Implement versioning of prompts, model identifiers, settings, index and tool schemas as one release unit.
- Instrument model, retrieval and tool calls with spans, token counts, time to first token and time per output token.
- Build a release gate that blocks a change when a critical failure rate rises beyond a stated margin.
- Deliver a change through shadow and canary stages with automatic rollback.
- Configure input and output guardrails and measure their false-block and miss rates.
- Design an online evaluation loop that samples traces, routes uncertain cases to people and feeds failures into the offline suite.

## Prerequisites

- [DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring](DEV-OPS-201.md)
- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Has written automated checks of model outputs; DEV-EVL-301 is recommended

## Next courses

- [DEV-OPS-303 · Operating AI Agents: Durable Execution, Sandboxing and Replay](DEV-OPS-303.md)
- [DEV-OPS-401 · Reliability Engineering for AI Services](DEV-OPS-401.md)

## Topics

### What changes behaviour

- The release unit
- Provider model updates and pinned identifiers
- Knowledge-base refresh as a release

### Tracing

- Spans for model, retrieval, tool and agent calls
- OpenTelemetry generative AI conventions, still in development
- Retention and redaction of traces

### Gates and releases

- Critical and tolerated failure modes
- Paired comparison under a call budget
- Shadow traffic, canaries and rollback triggers

### Guardrails and online evaluation

- Guardrails inline, evaluators after the fact
- Calibrated graders on live traces
- Review queues and new regression cases
