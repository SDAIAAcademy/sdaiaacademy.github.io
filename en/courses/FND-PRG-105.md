# FND-PRG-105 · Computer Systems and Cloud Essentials for AI Work

- Track: Data & AI Foundations
- Path: [Programming and Software Practice](../paths/FND-PRG.md)
- Level: Level 100 · Explain
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: beginner
- Status: In development

## Description

Participants build a working model of the machine and the cloud beneath data and AI code. They measure how processors, accelerators, memory and storage limit a workload, compare threads and processes, follow an API call from name lookup to response, and run a containerised batch job on a cloud virtual machine with object storage and least-privilege access. Every lab ends with a cost figure. Serving, orchestration and capacity planning follow in DEV-OPS-201, DEV-INF-201 and DEV-INF-302.

## Learning outcomes

By the end, the participant can:

- Explain the memory hierarchy and how accelerators differ from processors, and identify what limits a workload.
- Describe the steps between calling an API and receiving its response, from name lookup to status code.
- Measure a program's processor, memory and disk use, and compare threaded and multi-process versions.
- Use an HTTP API from code with authentication, timeouts and retries with back-off.
- Configure a virtual machine, object storage, a container image and a least-privilege role for a batch job.
- Plan, size and price a small batch inference job, run it, and explain the gap between estimate and actual.

## Prerequisites

- [FND-PRG-101 · Python Programming for Data and AI](FND-PRG-101.md)
- [FND-PRG-102 · Command Line, Git and Reproducible Environments](FND-PRG-102.md)

## Next courses

- [DEV-SWE-202 · Back-End Services and Interfaces for AI Applications](DEV-SWE-202.md)

## Topics

### Inside one machine

- Cores, threads and accelerators
- Memory hierarchy and bandwidth
- Storage throughput
- Model memory from parameter count and number format

### Operating system essentials

- Processes, threads and the global interpreter lock
- Asynchronous input and output

### Networks and APIs

- Addresses, ports and name lookup
- Transport encryption and certificates
- Methods, status codes and headers
- Timeouts, retries and rate limits

### Containers and cloud primitives

- Pushing an image to a registry and running it remotely
- Compute, object storage and managed services
- Identity, roles and least privilege
- Regions, residency and shared responsibility

### Cost basics

- Pricing units for compute, storage, transfer and tokens
- Idle resources, teardown and budgets
