# DEV-INF-402 · Scaling Machine Learning Systems: Distributed Training and Fleets

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: specialist
- Status: In development

## Description

Participants time collective communication and fit a cost model to it, train a small transformer with replicated and then sharded state across worker processes, plan data, tensor and pipeline parallelism for a large model and check the plan in a simulator, set checkpoint intervals from failure rates, and diagnose low utilisation in recorded fleet telemetry. Labs run on CPU workers, a provided multi-accelerator node for one session, and an analytical simulator.

## Learning outcomes

By the end, the participant can:

- Compute collective communication time with a latency-bandwidth model and calibrate it against measurements.
- Build a training run with replicated, then sharded, model and optimiser state and measure scaling efficiency.
- Design a parallelism plan that fits device memory and maximises throughput for a large model.
- Design a checkpoint and recovery policy from failure rates and checkpoint cost.
- Diagnose the causes of low accelerator utilisation in a fleet.
- Evaluate fleet serving options for several models across two sites.

## Prerequisites

- [DEV-INF-201 · Machine Learning Systems on One Machine](DEV-INF-201.md)
- [DEV-MLE-202 · Deep Learning Engineering](DEV-MLE-202.md)
- Debugs a training loop and reads its memory use
- Explains network bandwidth, latency and topology

## Topics

### The fleet and its limits

- Memory capacity and bandwidth
- Scale-up and scale-out interconnects
- Amdahl's law and the communication tax

### Collective communication

- All-reduce, all-gather, reduce-scatter, all-to-all
- Ring and tree algorithms
- Overlapping communication with computation

### Distributed training

- Data parallelism and sharded optimiser state
- Tensor, pipeline and expert parallelism
- Mixed precision and activation recomputation
- Planning with a simulator

### Fault tolerance

- Failure models and silent data corruption
- Checkpoint intervals and the Young-Daly rule
- Elastic restart and lost-work budgets

### Fleet efficiency and serving at scale

- Utilisation, stragglers and input stalls
- Job queues and gang scheduling (mechanics in DEV-INF-301)
- Placement across sites and failover
- Energy and carbon of training and serving
