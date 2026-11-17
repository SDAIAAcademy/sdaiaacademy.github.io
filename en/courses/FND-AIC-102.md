# FND-AIC-102 · How Language Models Work

- Track: Data & AI Foundations
- Path: [AI Concepts and Responsible Practice](../paths/FND-AIC.md)
- Level: Level 100 · Explain
- Format: Workshop: two days with labs and a tracked follow-up task
- Total hours: 16 h
- Audience: beginner
- Status: In development

## Description

Participants test language model behaviour with small logged experiments. They count Arabic and English tokens, read next-token probabilities from a small open-weight model, vary sampling, probe long-context recall, write a minimal tool-calling loop and measure what extra reasoning effort buys. The output is a behaviour sheet for one model, each claim backed by a run.

## Learning outcomes

By the end, the participant can:

- Explain how a model generates text by repeated next-token prediction and how sampling settings change the output.
- Measure token counts for parallel Arabic and English text across two tokenisers.
- Describe how pretraining, post-training and reasoning effort shape an assistant's answers, and what a knowledge cut-off limits.
- Implement a minimal tool-calling loop and mark which steps the model and the program each perform.
- Identify typical failure modes in model transcripts and name a check that catches each.

## Prerequisites

- Runs a Python notebook and edits short scripts (FND-PRG-101 or equivalent)

## Next courses

- [SPC-MOD-303 · Text and Unstructured Data for Data Science](SPC-MOD-303.md)

## Topics

### Tokens and prediction

- Tokenisers and Arabic script
- Transformers and attention in outline
- Next-token probabilities and sampling
- Tokens as cost and context

### How models are made

- Pretraining and post-training
- Reasoning effort and test-time compute
- Knowledge cut-off

### Context and tools

- Context windows and recall
- Tool calls that a program executes
- Retrieval as fresh context

### Failure modes

- Fabrication and sycophancy
- Injection through retrieved text
- Jagged capability
