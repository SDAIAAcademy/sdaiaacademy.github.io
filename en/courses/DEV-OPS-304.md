# DEV-OPS-304 · AI Cost Engineering: Gateways, Routing, Caching and Unit Economics

- Track: AI Engineering
- Path: [Operations and Reliability](../paths/DEV-OPS.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a costed review
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants make the cost of AI applications measurable, attributable and smaller without losing quality. From a month of synthetic usage traces for three applications behind one gateway, they model cost per request, attribute spend, set budgets and alerts, tune routing in operation under a quality check, measure caches and report cost per successful outcome. Engine optimisation is in DEV-INF-401; model choice and prompt layout are in DEV-LLM-303.

## Learning outcomes

By the end, the participant can:

- Compute request cost and cost per successful outcome from tokens, tool calls and retries.
- Configure gateway keys per team, environment tags and spend limits.
- Optimise a gateway routing policy so each request class meets its quality floor at lower cost.
- Evaluate exact, prefix and semantic caches for savings, staleness and cross-tenant leakage.
- Prepare a unit-economics report with trend, forecast, energy use and savings options.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Reads request traces with token counts; DEV-LLM-303 is recommended

## Topics

### The cost model

- Prefill, decode and cached tokens
- Retries, agent steps and long contexts
- Accelerator hours and utilisation

### Attribution and budgets

- Keys and tags per team
- Showback before chargeback
- Spend anomaly alerts
- Unsettled allocation for agents

### Routing and caching

- Request classes, cascades and fallbacks
- Measured cache hit rates
- Staleness and tenant isolation

### Reporting value

- Cost per successful outcome
- Forecasting spend
- Energy beside money
