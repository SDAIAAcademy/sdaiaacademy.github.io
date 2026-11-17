# DEV-INF-302 · AI Infrastructure and Capacity Planning

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 300 · Develop
- Format: Workshop: two days of analytical sizing labs and a defended case
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants size AI systems from first principles before purchase: they read accelerator datasheets, compute serving and training needs, turn benchmark curves into replica counts, check plans against rack power and cooling, and compare cloud, on-premises and sovereign-provider options in a cost model. Labs are analytical, checked against an open simulator.

## Learning outcomes

By the end, the participant can:

- Compute the memory, bandwidth and compute needed to serve a language model at a given precision, context and concurrency.
- Analyse latency-throughput benchmark curves to choose an operating point and replica count for a service objective.
- Design a capacity plan in accelerators, racks, power and cooling for a growing demand forecast.
- Evaluate cloud, on-premises and sovereign options with a cost-of-ownership model including utilisation risk and placement limits.

## Prerequisites

- [DEV-INF-201 · Machine Learning Systems on One Machine](DEV-INF-201.md)
- Works with units and orders of magnitude in a spreadsheet or notebook

## Topics

### Accelerators and their limits

- Accelerator families and peak compute
- Memory capacity and bandwidth
- Scale-up versus scale-out interconnect

### Sizing workloads

- Serving: weights, key-value cache, concurrency
- Training compute from tokens and parameters
- Benchmark curves, goodput and vendor claims

### Facilities, cost and placement

- Rack power, liquid cooling and tokens per watt
- Energy, carbon and water by region
- Rented versus owned capacity; break-even utilisation
- Classification before placement (depth in DEV-INF-405)
