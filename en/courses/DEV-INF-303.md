# DEV-INF-303 · Edge and On-Device AI: Small Models and Neural Processors

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants move small language and vision models onto laptops, single-board computers, phones and the browser. They decide when on-device inference is worth it, quantise and convert models, run them on neural processing units and other on-device accelerators, measure speed, memory, energy and heat, and build a browser application with a server fallback. Labs use open-weight models, public data and provided boards.

## Learning outcomes

By the end, the participant can:

- Analyse whether on-device, browser, hybrid or server inference fits a case on privacy, latency, connectivity and cost.
- Prepare a small language model and a vision model for a device by quantising, converting and checking parity.
- Measure latency, peak memory, energy per inference and thermal throttling under sustained load.
- Optimise a model for a neural processing unit or GPU delegate by diagnosing unsupported operators.
- Build a browser application that runs a small model locally with a server fallback.
- Deliver an on-device application that meets a latency, memory and accuracy budget and defend its trade-offs.

## Prerequisites

- [DEV-INF-201 · Machine Learning Systems on One Machine](DEV-INF-201.md)
- Has trained and evaluated a small neural network with a deep learning framework
- Builds a simple web page with JavaScript, or completes the provided pre-work

## Topics

### When and why on device

- Privacy, residency and data minimisation
- Offline, latency and per-request cost
- Hybrid device and server patterns

### Small models and formats

- Small language models tested on own tasks
- Efficient vision backbones and detectors
- Weight-only and full-integer quantisation
- Quantised file formats and parity tests

### Runtimes and accelerators

- Mobile and embedded inference runtimes
- Neural processing unit delegates and fallbacks
- Browser inference on WebGPU and built-in model interfaces

### Measurement and operations

- On-device benchmark protocol
- Energy, battery and thermal limits
- Updating and protecting models on devices
