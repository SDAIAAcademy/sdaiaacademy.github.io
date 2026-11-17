# DEV-SWE-301 · System Design for AI Products

- Track: AI Engineering
- Path: [Software Engineering for AI Builders](../paths/DEV-SWE.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a design-review day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants design AI products as systems rather than prompts. On a synthetic bilingual permit assistant that retrieves regulations, parses uploads, drafts decisions and files them after human approval, they decide what is plain code, workflow, model call or agent, place every piece of state, set latency and cost budgets per user task, and plan degradation when a model is slow, wrong or down. A walking skeleton with fault injection tests the design, and a panel review closes the course.

## Learning outcomes

By the end, the participant can:

- Explain how non-determinism, token-priced compute, provider limits and model changes alter service design.
- Prepare a latency and cost budget per user task, including time to first token and cost per successful task.
- Analyse the failure modes of a design and attach a detection signal and degradation response to each.
- Design the decomposition and state placement of an AI product.
- Build a walking skeleton whose degradation paths hold the budget under injected faults.
- Review a peer design and defend one's own when the panel changes a constraint.

## Prerequisites

- [DEV-SWE-202 · Back-End Services and Interfaces for AI Applications](DEV-SWE-202.md)
- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Has maintained a service with a database and an external API dependency

## Next courses

- [DEV-INF-404 · AI Solution Architecture and Decision Records](DEV-INF-404.md)

## Topics

### What AI components change

- Non-determinism, token pricing and provider limits
- Models that change or retire; keeping a provider exit
- Code first, workflows before agents

### Decomposition and state

- Boundaries between code, workflow, model call and agent
- Monolith or services, decided by experiment
- Where conversation, memory, documents and job state live
- Idempotent steps and event logs
- Caches and cache-aware prompt layout

### Budgets

- Quality targets and where evaluation runs
- Latency at the 95th percentile
- Cost per successful task
- Rate limits and model tiers

### Failure and degradation

- Failure-mode analysis
- Timeouts, circuit breakers and bulkheads
- Fallback models, cached answers and human hand-off
- Limiting the blast radius of actions

### Design reviews

- Decision records and trade-off tables
- Security, privacy and data-placement checklists
- Hand-offs to DEV-INF-404 and DEV-OPS-304
