# SPC-GEN-302 · Vision and Multimodal Foundation Models

- Track: Data Science
- Path: [Generative, Multimodal and Embodied Models](../paths/SPC-GEN.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, one two-hour session and one lab a week, weekly graded assignments and a capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants pretrain and probe the visual representations that multimodal models are built on. They train a small vision transformer with two of the contrastive, masked-image and self-distillation objectives on public images, then a contrastive image-text model, and assemble a small vision-language model from a frozen encoder, a trained projector and an open-weight language model, followed by instruction tuning. A final block fits neural radiance fields and Gaussian splatting to captured scenes. Application use of vision-language models is DEV-MLE-304; video and 3D generation is SPC-GEN-402.

## Learning outcomes

By the end, the participant can:

- Compare contrastive, masked and self-distillation objectives and explain the invariances each teaches an encoder.
- Implement two self-supervised objectives for a small vision transformer and measure them with linear probes and retrieval.
- Build a small vision-language model from a frozen encoder, a trained projector and an open-weight language model, then instruction-tune it.
- Evaluate a vision-language model for hallucinated objects, Arabic and English text reading, and prompt sensitivity.
- Fit a neural radiance field and a Gaussian splatting model to a captured scene and compare quality and speed.
- Design a pretraining and adaptation plan for a vision encoder in a new domain with few labels.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Has trained an image classifier and uses linear algebra for rotations and projections

## Topics

### Self-supervised vision

- Vision transformers and patch embeddings
- Contrastive, masked and self-distillation objectives
- Probing, retrieval, dense-feature and fine-tuning evaluation

### Image-text models

- Contrastive image-text pretraining and zero-shot use
- Caption noise, filtering and inherited bias

### Vision-language models

- Encoder-projector designs against early-fusion native multimodal models
- Alignment pretraining and visual instruction tuning
- Resolution, tiling and visual token budgets

### Evaluating multimodal models

- Benchmarks and their limits
- Object hallucination and grounding
- Contamination and prompt sensitivity

### Three-dimensional representations

- Camera models and structure from motion
- Neural radiance fields and Gaussian splatting
- Depth and point clouds, in brief
