# SPC-GEN · Generative, Multimodal and Embodied Models

Track: Data Science

## Purpose

Teach specialists to derive, train and evaluate generative, multimodal, speech, decision-making and embodied models, with evidence that holds up to review.

## Who it is for

AI research scientists, and vision and language engineers moving into model development, who already train deep networks and want to work on models beyond text-only language models.

## Suggested order

After SPC-DLR-302, take SPC-GEN-301 (diffusion and flows), SPC-GEN-302 (vision and multimodal models), SPC-GEN-303 (speech and Arabic) or SPC-GEN-304 (reinforcement learning) in any order. SPC-GEN-401 builds on SPC-GEN-304 and SPC-GEN-301 for robot learning, and the SPC-GEN-402 seminar on world models, video and 3D generation follows SPC-GEN-301.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-GEN-301 · Diffusion and Flow Matching from Scratch](../courses/SPC-GEN-301.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-302
- Explain diffusion, score-based and flow matching models as ways of learning a velocity field along a probability path.
- Implement flow matching and denoising score matching, and compare deterministic and stochastic samplers.
- Build a class-conditional image generator with a U-Net and then a transformer backbone, using classifier-free guidance.
- Design a latent generative model, choosing the autoencoder's compression for a compute budget.
- Implement a masked discrete diffusion model for short text and compare it with an autoregressive model of similar size.
- Evaluate a generator's quality, diversity and memorisation, and state where each metric misleads.

### 2. [SPC-GEN-302 · Vision and Multimodal Foundation Models](../courses/SPC-GEN-302.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-302
- Compare contrastive, masked and self-distillation objectives and explain the invariances each teaches an encoder.
- Implement two self-supervised objectives for a small vision transformer and measure them with linear probes and retrieval.
- Build a small vision-language model from a frozen encoder, a trained projector and an open-weight language model, then instruction-tune it.
- Evaluate a vision-language model for hallucinated objects, Arabic and English text reading, and prompt sensitivity.
- Fit a neural radiance field and a Gaussian splatting model to a captured scene and compare quality and speed.
- Design a pretraining and adaptation plan for a vision encoder in a new domain with few labels.

### 3. [SPC-GEN-303 · Speech and Arabic Language Modelling](../courses/SPC-GEN-303.md)

- Level 300 · Develop · Extended · 60 h · In development
- Needs: SPC-DLR-302
- Explain how Arabic morphology, optional diacritics, dialects and code-switching affect tokenisation, recognition and evaluation.
- Fine-tune a speech encoder and an encoder-decoder recogniser for Arabic and report error rates by dialect.
- Fine-tune a pretrained text-to-speech model for Arabic and measure its intelligibility and naturalness.
- Design an Arabic and English tokeniser and justify its vocabulary by fertility and downstream loss.
- Build a continued-pretraining and alignment run that improves a small open-weight model in Arabic without losing English ability.
- Evaluate an Arabic model for knowledge, instruction-following, dialect and cultural appropriateness, and audit the benchmarks used.

### 4. [SPC-GEN-304 · Reinforcement Learning and Decision Making](../courses/SPC-GEN-304.md)

- Level 300 · Develop · Extended · 80 h · In development
- Needs: SPC-DLR-302
- Explain the Bellman equations, the policy gradient theorem and the bias-variance trade-off in return estimates.
- Implement value iteration, bandit exploration strategies, Q-learning and a deep Q-network with replay and target networks.
- Implement a policy-gradient agent, proximal policy optimisation and an off-policy actor-critic for continuous control.
- Build a model-based agent that plans with a learned dynamics model, and diagnose where model error limits it.
- Evaluate offline methods against behaviour cloning on datasets of different quality and recommend one per regime.
- Design a reinforcement learning experiment for a decision problem, with the reward, optimisation baselines and a sound comparison over seeds.

### 5. [SPC-GEN-401 · Robot Learning and Vision-Language-Action Models](../courses/SPC-GEN-401.md)

- Level 400 · Evaluate · Extended · 60 h · In development
- Needs: SPC-GEN-304
- Implement behaviour cloning with action chunking and a diffusion policy, and compare them on the same demonstrations.
- Design a demonstration protocol and diagnose how number, diversity and operator quality of demonstrations affect success.
- Evaluate a fine-tuned open-weight VLA model against a policy trained from scratch on held-out objects, positions and instructions.
- Diagnose the gap between simulation and a real arm and measure how far randomisation and system identification close it.
- Review a published robot learning result for evaluation design and claimed generalisation.
- Configure workspace limits, speed limits and an emergency stop for a learned policy on a physical arm.

### 6. [SPC-GEN-402 · World Models, Video and 3D Generation](../courses/SPC-GEN-402.md)

- Level 400 · Evaluate · Seminar · 30 h · In development
- Needs: SPC-GEN-301
- Describe the main families of video, world-model and 3D generative methods and the evidence each offers for physical consistency.
- Review a paper's claims about controllability, physical consistency and generalisation, and judge whether its evaluation supports them.
- Measure a pretrained video or world model's consistency under controlled prompts or actions with a small probe set.
- Reproduce one small published result and report where the reproduction agrees and differs.
- Defend a position on an open problem, such as how to evaluate interactive world models.
