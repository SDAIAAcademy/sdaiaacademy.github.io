# DEV-INF-403 · Designing an Internal AI Platform

- Track: AI Engineering
- Path: [Infrastructure, Performance and Architecture](../paths/DEV-INF.md)
- Level: Level 400 · Evaluate
- Format: Studio: six weeks part-time with weekly coaching, three design reviews and a final defence before a panel
- Total hours: 40 h
- Audience: specialist
- Status: In development

## Description

Participants design the shared platform through which many teams reach models safely and at known cost. For a fictional organisation with twelve product teams and three data classification levels, each participant designs the model catalogue and admission rules, a gateway with quotas and fallback, tenant isolation, golden paths with evaluation and tracing built in, and showback, builds a thin working slice, and defends the design after three coached reviews.

## Learning outcomes

By the end, the participant can:

- Analyse platform demand into a matrix of workloads, tenants, classifications and service objectives.
- Design a model catalogue and gateway with admission criteria, routing, quotas, fallback and audit logging.
- Design tenant isolation, quotas and fair sharing of accelerators.
- Build golden-path templates with evaluation, tracing and governance gates on by default.
- Design cost attribution and showback with a tagging scheme and unit metrics.
- Defend the platform design, its build-or-buy decisions and a phased roadmap.

## Prerequisites

- [DEV-OPS-301 · Machine Learning Operations: Pipelines, Registries and Delivery](DEV-OPS-301.md)
- Has used or operated a shared machine learning platform in a team
- Reads container cluster manifests; has configured a model gateway and read a usage-based bill (DEV-OPS-304 covers both)

## Topics

### The platform as a product

- Tenants, users and the platform team
- Demand analysis and phasing
- Adoption, lead time and utilisation metrics

### Catalogue and gateway

- Admission: licence, evaluation evidence, permitted classification, cost tier
- Provider abstraction, credentials, quotas, fallback, protocol-server mediation
- Models as versioned, signed artefacts; deprecation and migration

### Tenancy and shared capacity

- Isolation of data, keys and compute
- Noisy neighbours and fair sharing
- Self-hosted open-weight capacity beside hosted APIs

### Golden paths

- Templates for retrieval, agent, batch and fine-tuning work
- Gates built into the default
- Paved roads against mandates

### Cost attribution

- Tags and one key per team and application
- Showback before chargeback
- Cost per successful outcome; agent workloads without an accepted method
