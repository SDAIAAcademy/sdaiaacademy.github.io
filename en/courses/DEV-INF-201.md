# DEV-INF-201 · Machine Learning Systems on One Machine

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants follow one small model from data to a served endpoint on a single machine and account for its time and memory. They estimate a workload with simple performance models, profile training and inference, fit a run into a memory limit, compress and accelerate the model, benchmark it honestly and serve it under load. Labs use a laptop CPU, a free notebook GPU and public data.

## Learning outcomes

By the end, the participant can:

- Compute a first-order time estimate with the roofline model and identify whether data, algorithm or machine binds the workload.
- Measure where time goes in a training step and explain the gap from the estimate.
- Compute a training memory budget and apply mixed precision and activation checkpointing to fit a memory limit.
- Apply quantisation, pruning and distillation and measure accuracy, size and latency for each variant.
- Prepare a fair benchmark with warm-up, repetitions, fixed inputs and latency percentiles.
- Deliver a served model that meets a stated requirement on two hardware targets and defend a ship, restrict or hold decision.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- [FND-AIC-101 · How Machine Learning Works](FND-AIC-101.md)
- Writes Python with array libraries from a terminal and a notebook
- Has trained a small neural network in a deep learning framework
- Explains processors, memory hierarchy and accelerators at the level of FND-PRG-105
- Linear algebra and probability at the level of FND-MTH-101 and FND-MTH-103

## Next courses

- [DEV-INF-302 · AI Infrastructure and Capacity Planning](DEV-INF-302.md)
- [DEV-INF-303 · Edge and On-Device AI: Small Models and Neural Processors](DEV-INF-303.md)
- [DEV-INF-304 · Embedded Machine Learning on Microcontrollers](DEV-INF-304.md)
- [DEV-INF-401 · Inference Performance and Cost Engineering](DEV-INF-401.md)
- [DEV-INF-402 · Scaling Machine Learning Systems: Distributed Training and Fleets](DEV-INF-402.md)

## Topics

### Workloads and estimates

- Deployment paradigms from data centre to microcontroller
- Roofline model and arithmetic intensity
- Finding the binding constraint first

### Frameworks and training

- Tensors, operators and automatic differentiation
- Eager execution, graph capture and compilation
- Training memory and mixed precision
- Input pipelines and data loading

### Compression and acceleration

- Numerical formats and post-training quantisation with calibration
- Pruning and distillation, with the accuracy cost measured
- Vectorisation, tiling and operator fusion

### Benchmarking and serving

- Benchmark hygiene and percentiles
- Latency budgets and queueing under load
- Dynamic batching and key-value caching
- Energy per inference; hand-off to DEV-OPS-201
