# DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring

- Track: AI Engineering
- Path: [Operations and Reliability](../paths/DEV-OPS.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants take a tabular classifier and a small open-weight language model from a notebook to a service that other people can call. They package each in a container image with pinned dependencies, serve it behind a typed HTTP API with validation and health checks, add structured logs, metrics and alerts, and release a new version through a staged rollout that they reverse when a health signal fails. Labs run on a laptop with 16 GB of memory, or on a provided lab virtual machine where a laptop cannot run containers.

## Learning outcomes

By the end, the participant can:

- Distinguish batch, online and streaming inference and the signals that matter for each.
- Package a model as a reproducible container image with pinned dependencies and no secrets inside.
- Implement a serving endpoint with input validation, timeouts, a concurrency limit and health checks.
- Configure structured logs, request metrics and two alerts with documented thresholds.
- Deliver a new version through a health-gated staged rollout and roll it back when a signal degrades.
- Prepare a runbook with versions, artefact hashes, owner, alerts and rollback steps.

## Prerequisites

- Writes and runs Python scripts from the command line
- Uses Git and a Python virtual environment, as taught in FND-PRG-102
- Has called an HTTP API and read a JSON response
- Loads a saved model in Python and calls it for predictions

## Next courses

- [DEV-AGT-402 · Agent Platforms: Sandboxes, Durable Execution and Identity](DEV-AGT-402.md)
- [DEV-OPS-301 · Machine Learning Operations: Pipelines, Registries and Delivery](DEV-OPS-301.md)
- [DEV-OPS-302 · Operating Language Model Applications: Tracing, Evaluation Gates and Safe Releases](DEV-OPS-302.md)
- [DEV-INF-301 · Container Orchestration for AI Workloads: Accelerators, Scheduling and Autoscaling](DEV-INF-301.md)
- [DEV-INF-401 · Inference Performance and Cost Engineering](DEV-INF-401.md)

## Topics

### From notebook to service

- Batch, online and streaming inference
- Service contracts
- Latency, throughput and cost as requirements

### Packaging

- Images, layers and multi-stage builds
- Pinned dependencies
- Secrets out of images; image scanning

### Serving

- Typed APIs and input validation
- Timeouts, retries and concurrency limits
- A small language model behind a standard chat-completions interface
- Health, readiness and warm-up

### Observability basics

- Structured logs and correlation identifiers
- Latency, traffic, errors and saturation
- Tokens and time to first token
- Personal data kept out of logs

### Releasing

- Immutable, versioned artefacts
- Deployments, services and probes on a single-node cluster
- Rolling and blue-green updates
- Rollback drills and runbooks
