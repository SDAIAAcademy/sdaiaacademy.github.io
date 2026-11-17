# SPC-DLR-306 · Post-Training I: Fine-Tuning, Preference Optimisation and Distillation

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, one lecture and one long lab a week, four graded assignments, a supervised test and a post-training capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants take a small open-weight base model through instruction tuning, preference optimisation and distillation, writing each loss themselves before using a library. They build datasets with correct chat templates and loss masks, compare full fine-tuning with low-rank adapters (LoRA), train a reward model and a direct preference optimisation (DPO) run, distil a larger open model into a smaller one, merge checkpoints, and measure what each step adds and costs, including forgetting and safety regressions. Reinforcement learning is SPC-DLR-401; application-level adaptation is DEV-LLM-301.

## Learning outcomes

By the end, the participant can:

- Prepare instruction and preference datasets with chat templates, loss masking, decontamination and licence checks.
- Build supervised fine-tuning runs with full-parameter and low-rank adapter variants and decide between them.
- Build a reward model and a DPO run from their loss functions.
- Apply sequence-level and logit-level distillation from a larger teacher to a smaller student.
- Apply weight-merging methods to combine checkpoints tuned for different skills.
- Evaluate an adapted model for improvements, forgetting, instruction following and safety regressions.

## Prerequisites

- [SPC-DLR-303 · Building a Language Model from Scratch](SPC-DLR-303.md)
- Has fine-tuned a pretrained network and read its loss curves
- Runs a model evaluation with a harness; DEV-EVL-301 or SPC-TRU-301 is recommended

## Next courses

- [SPC-DLR-401 · Post-Training II: Reinforcement Learning for Language Models](SPC-DLR-401.md)

## Topics

### Supervised fine-tuning

- Base and instruction models; chat templates
- Loss masking and sequence packing
- Full fine-tuning, LoRA and quantised adapters
- Catastrophic forgetting

### Preference optimisation

- Pairwise reward models
- Reinforcement learning from human feedback (RLHF) in outline
- Direct preference methods and variants
- Over-optimisation against a reward

### Distillation

- Logit, sequence-level and on-policy distillation
- Distilling reasoning traces
- Licence terms on teacher outputs

### Merging

- Linear and spherical interpolation
- Task arithmetic, TIES and DARE
- When merging helps

### Evaluating adapted models

- Held-out capability suites
- Validated model graders
- Refusal and safety regressions
- Contamination and language slices
