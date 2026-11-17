# DEV-INF-401 · Inference Performance and Cost Engineering

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 400 · Evaluate
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 40 h
- Audience: specialist
- Status: In development

## Description

Participants take a language model deployment that is too slow and too costly and make it meet a service objective at the lowest cost they can defend. They build a first-principles cost model, measure goodput curves on replayed traffic, locate bottlenecks, and apply batching, caching, quantisation, speculative decoding, routing, disaggregated prefill and decode, and autoscaling, re-checking task quality after every change.

## Learning outcomes

By the end, the participant can:

- Compute prefill cost, decode cost and key-value cache memory, and predict the binding resource.
- Benchmark a serving configuration as a goodput curve over concurrency against latency objectives.
- Diagnose why a deployment misses its service objective.
- Optimise batching, admission, prefix caching, cache precision and speculative decoding while holding task quality.
- Evaluate compressed variants against the base model and decide which to serve.
- Design a serving topology covering disaggregation, routing, replica count and scaling policy.

## Prerequisites

- [DEV-INF-201 · Machine Learning Systems on One Machine](DEV-INF-201.md)
- [DEV-OPS-201 · Deploying AI Services: Containers, Serving and Monitoring](DEV-OPS-201.md)
- Serves an open-weight model behind an HTTP endpoint and reads its metrics
- Explains latency percentiles and the difference between latency and throughput
- DEV-LLM-303 recommended

## Topics

### The cost model of inference

- Prefill and decode: compute-bound and memory-bound
- Key-value cache memory arithmetic
- Queueing and the latency-throughput trade-off

### Measuring serving performance

- Time to first token, time per output token, goodput
- Load patterns and trace replay
- Pareto curves and benchmark validity

### Scheduling and caching in the engine

- Continuous batching, chunked prefill, admission control
- Paged attention, cache precision and offload to host memory
- Prefix and semantic caching, and tenant isolation

### Cheaper models

- Quantisation formats per accelerator
- Speculative decoding and acceptance rates
- Distilled and multi-adapter serving (distillation itself: DEV-LLM-301)

### Serving across replicas

- Disaggregated prefill and decode; cache-aware routing
- Autoscaling on queue and service-objective metrics, scale to zero, cold starts
- Cost and energy per successful request
