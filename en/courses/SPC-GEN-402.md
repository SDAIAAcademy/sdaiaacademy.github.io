# SPC-GEN-402 · World Models, Video and 3D Generation

- Track: Data Science
- Path: [Generative, Multimodal and Embodied Models](../paths/SPC-GEN.md)
- Level: Level 400 · Evaluate
- Format: Seminar: 8 weekly sessions of paper reading and discussion, a replication sprint and a closing review; rebuilt each term from current conference tutorials and workshops
- Total hours: 30 h
- Audience: specialist
- Status: In development

## Description

A research seminar on models that generate or simulate the world: video generators, interactive world models that predict what happens next given an action, and generators of 3D objects and scenes. Each week participants read and present papers, place their claims on a shared taxonomy and judge the evidence behind them. In a replication sprint each pair reproduces one small published result, such as a latent dynamics model in a classic control task or a small video prediction model, within a fixed GPU budget.

## Learning outcomes

By the end, the participant can:

- Describe the main families of video, world-model and 3D generative methods and the evidence each offers for physical consistency.
- Review a paper's claims about controllability, physical consistency and generalisation, and judge whether its evaluation supports them.
- Measure a pretrained video or world model's consistency under controlled prompts or actions with a small probe set.
- Reproduce one small published result and report where the reproduction agrees and differs.
- Defend a position on an open problem, such as how to evaluate interactive world models.

## Prerequisites

- [SPC-GEN-301 · Diffusion and Flow Matching from Scratch](SPC-GEN-301.md)
- Reads current machine learning papers and has trained a model on a GPU
- Reinforcement learning basics (SPC-GEN-304) and radiance fields (SPC-GEN-302) help in the world-model and 3D sessions

## Topics

### Video generation

- Video tokenisers, latent video diffusion and autoregressive generation
- Temporal consistency and long-horizon generation
- Measuring video quality and physical plausibility

### World models for agents

- Latent dynamics for planning and control
- Interactive, action-conditioned video world models
- World models as training environments for agents and robots

### 3D and 4D generation

- Objects and scenes as radiance fields, Gaussians or meshes
- Lifting 2D generators into 3D
- Multi-view consistency and its measurement

### Evidence and responsibility

- Benchmarks of physical understanding and their limits
- Compute, provenance and licences of training video
- Synthetic media labelling and deepfake risk
