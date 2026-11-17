# DEV-LLM-201 · Building Applications on Language Models

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants build a language model application from the API up: provider-neutral calls, prompts kept as versioned code, structured outputs that validate, tool calling with confirmation before side effects, and answers grounded in documents with citations, all measured on a first evaluation set. One synthetic case study, a bilingual permits help desk with a policy handbook and a case database, runs through all four days.

## Learning outcomes

By the end, the participant can:

- Distinguish the chat-message, item-list and provider-neutral response shapes of model APIs.
- Implement prompts as versioned templates that keep instructions apart from untrusted user text.
- Implement structured outputs that validate against a schema, with a bounded retry and a fallback.
- Configure tool calling with typed tools, recovery from tool errors and confirmation before state changes.
- Measure quality, latency and cost per request for three candidate models.
- Build a grounded answering feature that cites sources and declines when the documents hold no answer.

## Prerequisites

- Writes and tests Python that calls an HTTP API
- Explains tokens, context windows and sampling at the depth of FND-AIC-102

## Next courses

- [LDS-ADV-201 · AI Use-Case Feasibility and Business Cases](LDS-ADV-201.md)
- [DEV-SWE-301 · System Design for AI Products](DEV-SWE-301.md)
- [DEV-LLM-203 · Retrieval and Knowledge Engineering for Language Model Systems](DEV-LLM-203.md)
- [DEV-LLM-204 · Document Intelligence: Parsing, Extraction and Multimodal Retrieval](DEV-LLM-204.md)
- [DEV-LLM-205 · Voice and Conversational Applications](DEV-LLM-205.md)
- [DEV-LLM-301 · Model Adaptation for Applications: Fine-Tuning, Distillation and Small Models](DEV-LLM-301.md)
- [DEV-LLM-302 · Arabic and Multilingual Language Applications](DEV-LLM-302.md)
- [DEV-LLM-303 · Model Choice, Routing and Inference Economics](DEV-LLM-303.md)
- [DEV-AGT-301 · Agentic Systems Engineering: Loops, Context and Harnesses](DEV-AGT-301.md)
- [DEV-MLE-304 · Multimodal Systems Engineering](DEV-MLE-304.md)
- [DEV-OPS-302 · Operating Language Model Applications: Tracing, Evaluation Gates and Safe Releases](DEV-OPS-302.md)
- [DEV-OPS-304 · AI Cost Engineering: Gateways, Routing, Caching and Unit Economics](DEV-OPS-304.md)

## Topics

### Model APIs without lock-in

- Three API shapes and gateways
- Sampling, reasoning effort and token limits
- Streaming, retries and rate limits

### Prompts and structured outputs

- Templates, versions and diffs
- User and retrieved text as untrusted data
- Constrained decoding versus validate and retry

### Tools

- Tool schemas and tool errors
- Confirmation before side effects
- Fixed workflows before agents

### Grounding

- Prompt versus retrieval on demand
- Keyword and embedding search over a small corpus
- Citations and saying no answer exists

### Measuring and choosing

- Error analysis on the first traces
- A small evaluation set from real tasks
- Code checks and one model-graded check
- Open-weight versus hosted models and licences
