# DEV-INF-301 · Container Orchestration for AI Workloads: Accelerators, Scheduling and Autoscaling

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants run AI workloads on a shared container cluster as a platform team must: accelerators allocated and shared safely, training jobs admitted fairly under quotas, distributed jobs placed all at once, and inference services scaled and routed on the metrics users feel. Labs use single-node clusters on provided virtual machines with simulated accelerators, small open-weight models and recorded traces, with the public Kubernetes AI conformance checklist as the rubric.

## Learning outcomes

By the end, the participant can:

- Configure accelerator allocation for whole, shared and partitioned devices and verify isolation between tenants.
- Configure queue-based admission with quotas, borrowing, priorities and preemption for a shared accelerator pool.
- Implement gang scheduling so that a multi-worker training job no longer holds accelerators idle.
- Design autoscaling for an inference service on queue or latency metrics, including scale to zero and a cold-start budget.
- Evaluate load-aware and prefix-cache-aware routing against round-robin.
- Audit a cluster against a public AI conformance checklist and deliver a ranked remediation plan.

## Prerequisites

- [DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring](DEV-OPS-201.md)
- Writes and applies declarative manifests on a container orchestrator
- Explains time to first token and throughput for a language model service

## Topics

### Accelerators as cluster resources

- Device plugins versus dynamic resource allocation
- Time-slicing, partitioning and virtualised devices
- Device health, taints and driver operators

### Admission and scheduling

- Queues, quotas, cohorts and borrowing
- Preemption with checkpoint and resume; dominant-resource fairness
- Gang and topology-aware placement

### Serving and autoscaling

- Serving operators and model weights as registry artefacts
- Cold start and scale to zero
- Scaling pods on service-objective metrics, nodes by accelerator type

### Inference-aware traffic

- Gateway inference extensions and endpoint picking
- Priority, fairness and load shedding
- Prefill and decode placement (depth in DEV-INF-401)

### Observability, isolation and conformance

- Per-accelerator metrics in a standard format
- Mediated device access and workload sandboxing
- Showback of accelerator-hours per tenant
- The checklist as an acceptance test
