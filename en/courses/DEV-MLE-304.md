# DEV-MLE-304 · Multimodal Systems Engineering

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build applications that read images and video with vision-language models: field extraction from inspection and retail photos, answers grounded with boxes and points, and time-stamped questions over sampled video frames. They choose between an open-weight and a hosted model on their own test set. Document parsing is in DEV-LLM-204; model training in SPC-GEN-302.

## Learning outcomes

By the end, the participant can:

- Implement question answering and field extraction from images with schema validation.
- Use boxes and points returned by the model to check that each answer refers to the right region.
- Evaluate an open-weight and a hosted vision-language model for accuracy, hallucination, cost and latency, and choose one.
- Build a video pipeline that samples frames, answers time-stamped questions and routes low-confidence segments to human review.
- Explain where image resolution, cropping and frame sampling lose information a model needs.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Has fine-tuned or evaluated a pretrained image or text model

## Topics

### How vision-language models see

- Visual tokens, resolution and token cost
- Frame sampling and temporal context
- Image-text embeddings for search and filtering

### Building with images and video

- Image prompts with structured outputs
- Grounding with boxes and points
- Pairing a general model with a specialist detector
- Keyframes and time-stamped answers

### Evaluation and limits

- Test sets from own images
- Object-existence and hallucination checks
- Arabic text in images
- Instructions hidden in images
