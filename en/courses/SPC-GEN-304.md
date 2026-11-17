# SPC-GEN-304 · Reinforcement Learning and Decision Making

- Track: Data Science
- Path: [Generative, Multimodal and Embodied Models](../paths/SPC-GEN.md)
- Level: Level 300 · Develop
- Format: Extended: 12 weeks part-time, one two-hour session and one lab a week, graded assignments and a capstone
- Total hours: 80 h
- Audience: specialist
- Status: In development

## Description

Participants implement the main families of reinforcement learning from scratch and report results that hold across random seeds. They solve small Markov decision processes (MDPs) exactly, then build value-based, policy-gradient and actor-critic agents, a model-based agent that plans with a learned dynamics model, and an offline agent trained on logged data. They compare exploration strategies and close by setting reinforcement learning against optimisation and heuristic baselines on operations problems. Reinforcement learning for language models is SPC-DLR-401, robot learning SPC-GEN-401 and optimisation methods SPC-MOD-304.

## Learning outcomes

By the end, the participant can:

- Explain the Bellman equations, the policy gradient theorem and the bias-variance trade-off in return estimates.
- Implement value iteration, bandit exploration strategies, Q-learning and a deep Q-network with replay and target networks.
- Implement a policy-gradient agent, proximal policy optimisation and an off-policy actor-critic for continuous control.
- Build a model-based agent that plans with a learned dynamics model, and diagnose where model error limits it.
- Evaluate offline methods against behaviour cloning on datasets of different quality and recommend one per regime.
- Design a reinforcement learning experiment for a decision problem, with the reward, optimisation baselines and a sound comparison over seeds.

## Prerequisites

- [SPC-DLR-302 · Deep Learning from First Principles](SPC-DLR-302.md)
- Uses probability, expectations and gradient-based optimisation, at the depth of SPC-DLR-301

## Next courses

- [SPC-GEN-401 · Robot Learning and Vision-Language-Action Models](SPC-GEN-401.md)

## Topics

### Foundations

- MDPs, value functions and dynamic programming
- Bandits, regret and exploration

### Value-based methods

- Temporal-difference learning and Q-learning
- Deep Q-networks and overestimation

### Policy and actor-critic methods

- Policy gradients, baselines and advantage estimation
- Trust regions and proximal policy optimisation
- Off-policy actor-critic with entropy regularisation

### Model-based and offline learning

- Learned dynamics, model predictive control and tree search
- Behaviour cloning, distribution shift and conservative value methods
- Off-policy evaluation, in brief (full treatment in SPC-EXP-401)

### Experiments and applications

- Seeds, interquartile means and bootstrap intervals
- Reward design, reward hacking and constraints
- Comparison with optimisation and heuristics
- Multi-agent settings, in brief
