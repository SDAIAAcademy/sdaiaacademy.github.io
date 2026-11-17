# DEV-INF-404 · AI Solution Architecture and Decision Records

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: specialist
- Status: In development

## Description

Participants practise the architect's core loop on AI systems: requirements to quality-attribute scenarios, scenarios to options, options to recorded decisions, and decisions to designs others can review and reuse. On fictional public-sector and enterprise cases they write measurable scenarios, draw views as code, compare at least three options on three-year cost, risk and lock-in, keep a decision log, define a reference design with automated fitness checks, and review a peer's architecture alongside data architects.

## Learning outcomes

By the end, the participant can:

- Prepare quality-attribute scenarios with measurable targets, including regulatory and classification constraints.
- Design an end-to-end architecture with context, container and data-flow views and a per-request latency and cost budget.
- Evaluate at least three solution options, including a non-generative baseline.
- Deliver a decision log whose records state context, options, decision, consequences and review trigger.
- Review a peer's architecture with a structured trade-off method and recommend approval or a recorded deviation.
- Design a reference architecture with fitness functions that check conformance automatically.

## Prerequisites

- [DEV-SWE-301 · System Design for AI Products](DEV-SWE-301.md)
- Has helped deliver an AI or data system to production
- Data architects may take DEV-DAT-401 in place of DEV-SWE-301

## Topics

### Requirements to scenarios

- Drivers, constraints and stakeholders
- AI quality attributes: accuracy, latency, cost, explainability, privacy, oversight
- Regulation as architecture constraints

### Views and patterns

- Views as code
- Retrieval, agentic, fine-tuned, classical, batch and event-driven patterns
- Evaluation, observability, fallback and trust boundaries as components
- Integration with enterprise systems and data platforms

### Options analysis

- Weighted criteria and their pitfalls
- Total cost of ownership and sensitivity
- Lock-in, portability, exit and procurement requirements

### Decision records

- Record structure and review triggers
- Decision logs as living documents
- Reconstructing decisions for legacy systems

### Reference designs and reviews

- Reference architectures and fitness functions
- Structured trade-off reviews and deviations
- Explaining trade-offs to sponsors
