# DEV-LLM-301 · Model Adaptation for Applications: Fine-Tuning, Distillation and Small Models

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants decide when adapting a model is worth it, then do it well. From error analysis of a failing extraction and function-calling feature, they build a tuning set from traces and teacher outputs, train low-rank adapters on a small open-weight model, distil a large model into it, evaluate it against the base and a larger prompted model, and serve it quantised with several adapters. Research-grade post-training is SPC-DLR-306; serving optimisation at scale is DEV-INF-401.

## Learning outcomes

By the end, the participant can:

- Decide whether to prompt, retrieve, fine-tune or distil to fix an application's failures.
- Prepare a tuning dataset with deduplication, decontamination, licence checks and personal-data removal.
- Implement supervised fine-tuning with low-rank adapters on a small open-weight model.
- Implement distillation of a teacher's behaviour into a student by generating, filtering and training on examples.
- Evaluate an adapted model against its base and a larger prompted model on task metrics, general ability and safety behaviour.
- Build a serving setup for a quantised small model with several adapters and measure its latency, throughput and cost.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- [DEV-LLM-202 · Applied Natural Language Processing Engineering](DEV-LLM-202.md)
- Reads a PyTorch training loop and diagnoses a loss curve
- Compares two configurations on an evaluation set with a statistical test (DEV-EVL-301 recommended)

## Topics

### When to adapt

- Prompt, retrieve, tune or distil
- Tuning changes behaviour more than knowledge
- What small models do and do not do reliably
- Open-weight licences and terms of use

### Data for tuning

- Traces, teacher outputs and corrections
- Chat templates and tool-call formats
- Deduplication and decontamination

### Adapters and distillation

- Low-rank and quantised adapters
- Function-calling fine-tuning
- Teacher generation with verifier filtering

### Evaluating adapted models

- Paired comparison against the base
- Forgetting and regressions
- Safety behaviour after tuning
- Arabic and English slices

### Serving small models

- Quantised formats
- Several adapters on one base
- Cost per thousand requests
