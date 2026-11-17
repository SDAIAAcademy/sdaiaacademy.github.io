# SPC-DLR-401 · Post-Training II: Reinforcement Learning for Language Models

- Track: Data Science
- Path: [Deep Learning and Model Development](../paths/SPC-DLR.md)
- Level: Level 400 · Evaluate
- Format: Extended: 10 weeks part-time, one seminar and one long lab a week on a provided multi-GPU node, four graded assignments, a supervised test and a reproduction capstone
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants train language models with reinforcement learning (RL) against rewards that can be checked. They write a policy-gradient loop with group-relative advantages and a divergence penalty, build verifiers for maths, code and structured outputs, train a small open model to reason, and find and close the reward hacks it discovers. They measure accuracy against test-time compute and train on verified agent trajectories from a sandboxed coding environment. Every result is compared at equal compute with a supervised or distillation baseline.

## Learning outcomes

By the end, the participant can:

- Build an RL training loop for a language model with group-relative advantages, clipping and a divergence penalty.
- Design verifiable reward functions for maths, code and format tasks that reject known exploits.
- Diagnose reward hacking and pathologies such as length inflation, format gaming and entropy collapse, and fix them.
- Evaluate test-time compute strategies and choose an allocation for a fixed inference budget.
- Decide whether RL, fine-tuning on filtered samples or distillation gives the largest improvement on a task at equal compute.
- Prepare verified agent trajectories from a sandboxed environment and use them for rejection-sampling fine-tuning.

## Prerequisites

- [SPC-DLR-306 · Post-Training I: Fine-Tuning, Preference Optimisation and Distillation](SPC-DLR-306.md)
- Explains policy gradients and value baselines at the depth of an introductory reinforcement learning course such as SPC-GEN-304
- Runs containers and writes unit tests

## Topics

### RL for language models

- Policy gradients, baselines and advantages
- Clipping, divergence control and critic-free estimators
- Rollout and training systems

### Rewards

- Verifiable rewards for maths, code and formats
- Outcome, process and learned reward models, and their limits
- Reward hacking and specification gaming

### Reasoning training

- Cold start with supervised data
- Curricula and difficulty filtering
- Whether written reasoning reflects the computation

### Test-time compute

- Best-of-n, voting and verifier reranking
- Sequential refinement and budget control
- Compute-optimal allocation and reporting

### Learning from agent trajectories

- Environments, sandboxes and task contracts
- Trajectory curation and credit assignment
- Multi-turn RL with tools
