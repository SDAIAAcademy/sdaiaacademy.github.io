# SPC-GEN-301 · Diffusion and Flow Matching from Scratch

- Track: Data Science
- Path: [Generative, Multimodal and Embodied Models](../paths/SPC-GEN.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, one two-hour session and one lab a week, weekly graded assignments and a capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants build image generators from the equations up, treating diffusion and flow matching as one framework: a probability path from noise to data, a learned velocity or score field, and a differential equation solved at sampling time. They implement both objectives on toy distributions, train a U-Net and then a diffusion transformer on public image datasets, add classifier-free guidance, move into the latent space of an autoencoder, and finish with discrete diffusion for text. Every quality claim is backed by metrics on held-out data.

## Learning outcomes

By the end, the participant can:

- Explain diffusion, score-based and flow matching models as ways of learning a velocity field along a probability path.
- Implement flow matching and denoising score matching, and compare deterministic and stochastic samplers.
- Build a class-conditional image generator with a U-Net and then a transformer backbone, using classifier-free guidance.
- Design a latent generative model, choosing the autoencoder's compression for a compute budget.
- Implement a masked discrete diffusion model for short text and compare it with an autoregressive model of similar size.
- Evaluate a generator's quality, diversity and memorisation, and state where each metric misleads.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Works with probability densities and multivariable calculus, at the depth of SPC-DLR-301

## Next courses

- [SPC-GEN-402 · World Models, Video and 3D Generation](SPC-GEN-402.md)

## Topics

### Probability paths

- Ordinary and stochastic differential equations for generation
- Velocity and score fields; conditional and marginal paths
- Flow matching, score matching and denoising as one loss family
- Noise schedules, prediction targets and loss weighting

### Sampling and conditioning

- Euler, higher-order and stochastic solvers
- Few-step sampling by distillation and consistency training
- U-Net and diffusion transformer backbones
- Classifier-free guidance and text conditioning by cross-attention

### Latent models

- Variational autoencoders
- Compression against reconstruction
- Latent diffusion at a fixed budget

### Discrete diffusion for text

- Masked and uniform corruption processes
- Diffusion against autoregressive language models

### Evaluation and release

- Fréchet distance, precision and recall, and their failure modes
- Memorisation and extraction checks
- Provenance, watermarking and labelling of synthetic media
