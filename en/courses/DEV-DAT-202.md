# DEV-DAT-202 · Analytics Engineering and Semantic Layers

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants take over the analytics of a fictional online marketplace whose three dashboards report three different net-revenue figures. They define metrics once as tested code, build a semantic model of joins, dimensions and access rules over a dimensional layer, and rebuild two dashboards as version-controlled code. They then measure how often a language model answers 60 business questions correctly against the raw schema and through the semantic layer. Metric and dashboard design for analysts is SPC-ANL-203.

## Learning outcomes

By the end, the participant can:

- Explain how a semantic layer differs from a dimensional model and from a business intelligence (BI) tool's internal model.
- Implement metric definitions as code, including ratios, time grains and filters, with tests that reconcile them to source totals.
- Configure a semantic model with entities, joins, dimensions and row-level access rules.
- Prepare dashboards as code that read only from the semantic layer and ship through review.
- Measure the execution accuracy of natural-language querying with and without the semantic layer.
- Decide which questions may be routed to natural-language querying, and under which safeguards.

## Prerequisites

- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)
- Uses Git to branch, commit and open a review

## Topics

### Metrics as code

- Layered models reviewed through continuous integration
- Simple, ratio, cumulative and derived metrics
- Grain, time spines and fan-out traps
- Reconciliation tests, documentation and ownership

### Semantic models

- Entities, joins and dimensions
- Access rules and classification-aware fields
- Pre-aggregation, caching and query cost
- Open interchange specifications and portability

### Dashboards as code

- Version-controlled definitions
- Certified versus exploratory content

### Natural-language querying

- Text-to-SQL failure modes
- Context from semantic layer, glossary and examples
- Execution accuracy and safeguards
