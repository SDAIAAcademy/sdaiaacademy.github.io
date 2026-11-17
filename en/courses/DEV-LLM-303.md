# DEV-LLM-303 · Model Choice, Routing and Inference Economics

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 300 · Develop
- Format: Workshop: one and a half days with labs and a costed decision memo, with guided pre-work
- Total hours: 12 h
- Audience: practitioner
- Status: In development

## Description

Participants choose models with numbers. They score open and closed, small and large models at several reasoning settings on their own tasks, design a routing policy with tiers and fallbacks, arrange prompts for cache hits, and compute when self-hosting an open-weight model beats an API. The case study is a synthetic document-review application with a stated volume, quality floor and data-placement rule. Serving optimisation continues in DEV-INF-401 and production cost control in DEV-OPS-304.

## Learning outcomes

By the end, the participant can:

- Measure quality, latency and cost per successful task for four models at two reasoning settings.
- Design a cascade that escalates from a small model to a larger one on validation failure or low confidence, keeping quality above a floor.
- Configure prompt and tool layout for prefix caching and measure the effect.
- Compute the break-even volume between a hosted API and self-hosting.
- Decide on model choice and hosting for the case-study application.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Has compared two configurations of an application on an evaluation set

## Topics

### Choosing on own tasks

- Leaderboards versus own evaluations
- Licence, residency and deprecation risk
- Reasoning budgets

### Routing and tiers

- Cascades and difficulty routers
- Per-stage models
- Cache cost of switching models

### Caching

- Prefix caching and stable layouts
- Response caches and their risks

### Self-hosting economics

- Throughput and utilisation
- Batch versus interactive
- Break-even
