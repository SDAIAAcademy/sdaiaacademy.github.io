# DEV-LLM-202 · Applied Natural Language Processing Engineering

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 200 · Apply
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

The Academy's Applied NLP course. Participants trace Arabic and English text through tokenisers, embeddings and attention, build semantic search, and solve routing and entity-extraction tasks three ways: a classical baseline, a prompted generative model and a fine-tuned encoder. They adapt a model with low-rank adapters in free notebook memory and ship a small service with a model card. The data is a stream of synthetic citizen requests to a municipality.

## Learning outcomes

By the end, the participant can:

- Explain how tokenisation, embeddings and attention turn a sentence into a prediction.
- Implement semantic search and measure recall at ten for two embedding models.
- Measure a classical baseline, a prompted generative model and a fine-tuned encoder against each other on a routing task.
- Implement a token-classification model that extracts named entities.
- Apply low-rank and quantised low-rank adapters to fit training into limited memory.
- Build a routing and extraction service with a demo interface and a model card.

## Prerequisites

- [FND-AIC-101 · How Machine Learning Works](FND-AIC-101.md)
- Trains a classifier in a notebook and reads precision, recall and F1

## Next courses

- [DEV-LLM-301 · Model Adaptation for Applications: Fine-Tuning, Distillation and Small Models](DEV-LLM-301.md)
- [DEV-LLM-302 · Arabic and Multilingual Language Applications](DEV-LLM-302.md)

## Topics

### Representing text

- Subword tokenisers
- Arabic script, diacritics and normalisation
- Embeddings, vector indexes and semantic search

### Inside the transformer

- Attention and positions
- Encoders and decoders
- Pretrained checkpoints and model cards

### Decision models

- Baselines first
- Classification and token-classification heads
- A prompted model as a zero-shot classifier
- Precision, recall and F1

### Adapting and shipping

- Labels, splits and leakage
- Fine-tuning an encoder
- Low-rank adapters
- CPU latency and a demo
