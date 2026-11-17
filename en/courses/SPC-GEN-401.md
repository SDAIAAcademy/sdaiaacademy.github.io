# SPC-GEN-401 · Robot Learning and Vision-Language-Action Models

- Track: Data Science
- Path: [Generative, Multimodal and Embodied Models](../paths/SPC-GEN.md)
- Level: Level 400 · Evaluate
- Format: Extended: 10 weeks part-time, one two-hour session and one lab a week, with robot-arm lab days and a team capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants train and evaluate learned robot policies in simulation and on low-cost open robot arms. They collect teleoperated demonstrations, train behaviour cloning, action-chunking and diffusion policies, fine-tune an open-weight vision-language-action (VLA) model, and measure success with intervals on held-out objects, positions and instructions. They narrow the simulation-to-hardware gap with domain randomisation and system identification. Engineering of deployed robot learning systems is DEV-PHY-302.

## Learning outcomes

By the end, the participant can:

- Implement behaviour cloning with action chunking and a diffusion policy, and compare them on the same demonstrations.
- Design a demonstration protocol and diagnose how number, diversity and operator quality of demonstrations affect success.
- Evaluate a fine-tuned open-weight VLA model against a policy trained from scratch on held-out objects, positions and instructions.
- Diagnose the gap between simulation and a real arm and measure how far randomisation and system identification close it.
- Review a published robot learning result for evaluation design and claimed generalisation.
- Configure workspace limits, speed limits and an emergency stop for a learned policy on a physical arm.

## Prerequisites

- [SPC-GEN-304 · Reinforcement Learning and Decision Making](SPC-GEN-304.md)
- Has trained a diffusion or flow model, as in SPC-GEN-301, or passes an entry exercise
- Fine-tunes a transformer model with adapters, as in SPC-DLR-306

## Topics

### Robot data

- Observation and action spaces, control rate and latency
- Teleoperation, public datasets and data cards

### Imitation learning

- Behaviour cloning and compounding error
- Action chunking
- Diffusion and flow policies for multimodal actions

### Vision-language-action models

- Backbones with action heads or action tokens
- Pretraining on data from many robot types
- Adapter fine-tuning, inference speed and action rate

### Simulation to reality

- Where simulators differ from hardware
- Domain randomisation and system identification

### Evaluation and safe operation

- Success rates, intervals and trial counts
- Generalisation splits; simulated evaluation as a proxy for hardware
- Workspace limits, emergency stop and supervision
