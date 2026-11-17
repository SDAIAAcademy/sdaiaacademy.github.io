# DEV-SWE-202 · Back-End Services and Interfaces for AI Applications

- Track: AI Engineering
- Path: [Software Engineering for AI Builders](../paths/DEV-SWE.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants build the service between users and language models. On a synthetic citizen-enquiry assistant they define a typed API contract, stream model output, move batch summarisation onto a queue with retries and idempotency, add sign-in, per-user authorisation and quotas, and persist conversations and job state so the service survives restarts. A deterministic fake model with scripted latency keeps labs and the load test on a laptop; a small open-weight model serves end-to-end checks. Deployment continues in DEV-OPS-201.

## Learning outcomes

By the end, the participant can:

- Distinguish request-response, streaming and asynchronous job patterns and state which fits a given model call.
- Implement a typed API contract that validates model output and maps provider failures to stable error codes.
- Implement token streaming with cancellation and clean handling of client disconnects.
- Implement queued jobs with idempotency keys, retries with backoff and a status endpoint.
- Configure sign-in, per-user authorisation and quotas.
- Build a service that persists state, recovers from a restart and meets a latency budget under load.

## Prerequisites

- [FND-PRG-105 · Computer Systems and Cloud Essentials for AI Work](FND-PRG-105.md)
- Has called a language model API from Python
- Writes unit tests in Python
- Writes SQL against a relational database

## Next courses

- [DEV-SWE-301 · System Design for AI Products](DEV-SWE-301.md)

## Topics

### Contracts

- Resource design and versioning
- Validating model output at the boundary
- Error mapping for timeouts, refusals and outages
- Provider-neutral clients and gateways

### Streaming

- Server-sent events and WebSockets
- Time to first token
- Cancellation and disconnects
- Streaming tool-call events

### Asynchronous work

- Queues and workers
- Idempotency and at-least-once delivery
- Backoff, jitter and dead-letter queues
- Status endpoints and webhooks

### Identity, limits and state

- OpenID Connect and token validation
- Provider keys held server-side only
- Tenant isolation, quotas and spend caps
- Conversations and tool calls as stored data
- Retention and deletion

### Readiness

- Fake models for tests
- Load tests against a budget
- Structured logs and trace identifiers
