# DEV-EVL-303 · Evaluating Retrieval and Grounded Generation

- Track: AI Engineering
- Path: [Evaluation and Quality Engineering for AI Systems](../paths/DEV-EVL.md)
- Level: Level 300 · Develop
- Format: Workshop: one and a half days with labs and a short evaluation project, with guided pre-work
- Total hours: 12 h
- Audience: practitioner
- Status: In development

## Description

Participants evaluate a retrieval-augmented assistant over a synthetic bilingual corpus of public-service regulations. They extend a test set with graded relevance judgements, measure retrieval apart from generation, check that answers are supported, cited and complete, test abstention on unanswerable questions, and attribute failures to parsing, retrieval or generation.

## Learning outcomes

By the end, the participant can:

- Design a retrieval test set covering Arabic and English, dialect and spelling variants, and unanswerable and multi-passage questions.
- Compute rank-aware retrieval metrics for two retrievers and compare them with a paired interval.
- Implement claim-level support, citation and completeness checks and calibrate the model-graded step against human labels.
- Diagnose the main source of failure in a grounded-generation system and decide which component to change first.

## Prerequisites

- [DEV-EVL-301 · Evaluation-Driven Development for Language Model Applications](DEV-EVL-301.md)
- Has built or operated a retrieval-augmented application, for example in DEV-LLM-203

## Topics

### Measuring retrieval

- Graded relevance and pooling
- Recall at k, reciprocal rank, discounted gain
- Evaluating agentic search steps

### Building test sets

- Real, written and filtered synthetic queries
- Unanswerable, multi-passage and time-sensitive questions
- Dialect, spelling-variant and Latin-script Arabic queries against Modern Standard Arabic text

### Grounding and citations

- Supported versus correct and complete
- Citation precision and recall
- Abstention

### Attributing failures

- Parsing measured on its own
- Retrieval ceiling
- Permission leaks
