# DEV-INF · Infrastructure, Performance and Architecture

Track: AI Engineering

## Purpose

Teach engineers to make AI systems fit the machines, clusters, devices and budgets they run on, and to design the architectures that hold them, by estimating first, measuring always and deciding with evidence.

## Who it is for

Machine learning, MLOps and platform engineers and solution architects who run models on single machines, shared accelerator clusters, data centres or devices.

## Suggested order

Start with DEV-INF-201; then take DEV-INF-301 for shared clusters, DEV-INF-302 for capacity planning, or DEV-INF-303 and DEV-INF-304 for devices; DEV-INF-401 and DEV-INF-402 deepen performance and scale, and DEV-INF-403 to DEV-INF-405 cover platform and solution architecture.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-INF-201 · Machine Learning Systems on One Machine](../courses/DEV-INF-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: FND-PRG-101, FND-AIC-101
- Compute a first-order time estimate with the roofline model and identify whether data, algorithm or machine binds the workload.
- Measure where time goes in a training step and explain the gap from the estimate.
- Compute a training memory budget and apply mixed precision and activation checkpointing to fit a memory limit.
- Apply quantisation, pruning and distillation and measure accuracy, size and latency for each variant.
- Prepare a fair benchmark with warm-up, repetitions, fixed inputs and latency percentiles.
- Deliver a served model that meets a stated requirement on two hardware targets and defend a ship, restrict or hold decision.

### 2. [DEV-INF-301 · Container Orchestration for AI Workloads: Accelerators, Scheduling and Autoscaling](../courses/DEV-INF-301.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-OPS-201
- Configure accelerator allocation for whole, shared and partitioned devices and verify isolation between tenants.
- Configure queue-based admission with quotas, borrowing, priorities and preemption for a shared accelerator pool.
- Implement gang scheduling so that a multi-worker training job no longer holds accelerators idle.
- Design autoscaling for an inference service on queue or latency metrics, including scale to zero and a cold-start budget.
- Evaluate load-aware and prefix-cache-aware routing against round-robin.
- Audit a cluster against a public AI conformance checklist and deliver a ranked remediation plan.

### 3. [DEV-INF-302 · AI Infrastructure and Capacity Planning](../courses/DEV-INF-302.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-INF-201
- Compute the memory, bandwidth and compute needed to serve a language model at a given precision, context and concurrency.
- Analyse latency-throughput benchmark curves to choose an operating point and replica count for a service objective.
- Design a capacity plan in accelerators, racks, power and cooling for a growing demand forecast.
- Evaluate cloud, on-premises and sovereign options with a cost-of-ownership model including utilisation risk and placement limits.

### 4. [DEV-INF-303 · Edge and On-Device AI: Small Models and Neural Processors](../courses/DEV-INF-303.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-INF-201
- Analyse whether on-device, browser, hybrid or server inference fits a case on privacy, latency, connectivity and cost.
- Prepare a small language model and a vision model for a device by quantising, converting and checking parity.
- Measure latency, peak memory, energy per inference and thermal throttling under sustained load.
- Optimise a model for a neural processing unit or GPU delegate by diagnosing unsupported operators.
- Build a browser application that runs a small model locally with a server fallback.
- Deliver an on-device application that meets a latency, memory and accuracy budget and defend its trade-offs.

### 5. [DEV-INF-304 · Embedded Machine Learning on Microcontrollers](../courses/DEV-INF-304.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: DEV-INF-201
- Compute the flash, RAM and energy budget of a sensing application, including the tensor arena and duty cycle.
- Prepare a sensor dataset and feature pipeline with a documented collection protocol.
- Deploy a full-integer quantised model to a microcontroller and diagnose the memory, latency and accuracy problems that appear.
- Deliver a sensing device that meets a stated memory, latency and battery-life target under real conditions.

### 6. [DEV-INF-401 · Inference Performance and Cost Engineering](../courses/DEV-INF-401.md)

- Level 400 · Evaluate · Intensive · 40 h · In development
- Needs: DEV-INF-201, DEV-OPS-201
- Compute prefill cost, decode cost and key-value cache memory, and predict the binding resource.
- Benchmark a serving configuration as a goodput curve over concurrency against latency objectives.
- Diagnose why a deployment misses its service objective.
- Optimise batching, admission, prefix caching, cache precision and speculative decoding while holding task quality.
- Evaluate compressed variants against the base model and decide which to serve.
- Design a serving topology covering disaggregation, routing, replica count and scaling policy.

### 7. [DEV-INF-402 · Scaling Machine Learning Systems: Distributed Training and Fleets](../courses/DEV-INF-402.md)

- Level 400 · Evaluate · Intensive · 36 h · In development
- Needs: DEV-INF-201, DEV-MLE-202
- Compute collective communication time with a latency-bandwidth model and calibrate it against measurements.
- Build a training run with replicated, then sharded, model and optimiser state and measure scaling efficiency.
- Design a parallelism plan that fits device memory and maximises throughput for a large model.
- Design a checkpoint and recovery policy from failure rates and checkpoint cost.
- Diagnose the causes of low accelerator utilisation in a fleet.
- Evaluate fleet serving options for several models across two sites.

### 8. [DEV-INF-403 · Designing an Internal AI Platform](../courses/DEV-INF-403.md)

- Level 400 · Evaluate · Studio · 40 h · In development
- Needs: DEV-OPS-301
- Analyse platform demand into a matrix of workloads, tenants, classifications and service objectives.
- Design a model catalogue and gateway with admission criteria, routing, quotas, fallback and audit logging.
- Design tenant isolation, quotas and fair sharing of accelerators.
- Build golden-path templates with evaluation, tracing and governance gates on by default.
- Design cost attribution and showback with a tagging scheme and unit metrics.
- Defend the platform design, its build-or-buy decisions and a phased roadmap.

### 9. [DEV-INF-404 · AI Solution Architecture and Decision Records](../courses/DEV-INF-404.md)

- Level 400 · Evaluate · Intensive · 36 h · In development
- Needs: DEV-SWE-301
- Prepare quality-attribute scenarios with measurable targets, including regulatory and classification constraints.
- Design an end-to-end architecture with context, container and data-flow views and a per-request latency and cost budget.
- Evaluate at least three solution options, including a non-generative baseline.
- Deliver a decision log whose records state context, options, decision, consequences and review trigger.
- Review a peer's architecture with a structured trade-off method and recommend approval or a recorded deviation.
- Design a reference architecture with fitness functions that check conformance automatically.

### 10. [DEV-INF-405 · Regulated and Sovereign Deployment Architecture](../courses/DEV-INF-405.md)

- Level 400 · Evaluate · Workshop · 16 h · In development
- Classify a system's data and AI artefacts and analyse every flow crossing a jurisdiction or trust boundary.
- Design a placement that puts each component in an allowed location.
- Design and test key custody, attestation, egress denial and signed model import.
- Defend a hybrid deployment design and its evidence pack.
