# SPC-TRU-303 · AI Safety and Alignment Engineering

- Track: Data Science
- Path: [Trustworthy AI Science](../paths/SPC-TRU.md)
- Level: Level 300 · Develop
- Format: Extended: 10 weeks part-time, a weekly lecture and lab, four graded labs and a safety case
- Total hours: 60 h
- Audience: specialist
- Status: In development

## Description

Participants judge whether an AI system could cause serious harm and design controls that do not depend on the model being trustworthy. They write threat models, build dangerous-capability evaluations from safe proxy tasks in a sandbox, measure propensities such as sycophancy, reward hacking and sandbagging, red-team an open model by hand and with an automated attacker, and design protocols in which a weaker trusted model monitors a stronger untrusted one. Alignment training methods are in SPC-DLR-306 and SPC-DLR-401; application red teaming is DEV-SEC-302; governance controls are LDS-AIG-302.

## Learning outcomes

By the end, the participant can:

- Compare misuse, misalignment and structural threat models, and describe how safety frameworks tie capability thresholds to safeguards.
- Draft a threat model naming actors, capabilities, harm pathways and the evidence that would rule each pathway in or out.
- Build a dangerous-capability evaluation from safe proxy tasks, with elicitation effort and thresholds fixed in advance.
- Evaluate sycophancy, reward hacking and sandbagging propensities, and test whether results change when the model can tell it is being evaluated.
- Design and stress-test a control protocol in which a trusted monitor reviews an untrusted model's actions.
- Defend a safety case that links each claim about a deployment to evaluation, red-team and monitoring evidence.

## Prerequisites

- [SPC-TRU-301 · Evaluation Science for AI Models](SPC-TRU-301.md)
- Fine-tunes a small open-weight language model with adapters, as in SPC-DLR-306 or DEV-LLM-301
- Has built a simple tool-using agent loop and read its transcripts

## Topics

### Threat models and safety frameworks

- Misuse, misalignment and structural risks
- Capability thresholds and safeguards
- Safety cases: claims, arguments and evidence

### Dangerous-capability evaluations

- Cyber and autonomy proxies in sandboxes
- Elicitation by scaffolding, fine-tuning and repeated attempts
- Handling hazardous information

### Propensity evaluations

- Sycophancy, deception and sandbagging
- Reward hacking and specification gaming
- Emergent misalignment after narrow fine-tuning
- Evaluation awareness

### Red teaming

- Manual and automated red teaming
- Limits of refusal training
- Turning findings into regression evaluations

### Monitoring and control

- Trusted and untrusted models
- Monitoring reasoning versus monitoring actions
- Audit budgets, resampling and deferral
