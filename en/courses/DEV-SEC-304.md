# DEV-SEC-304 · AI Supply Chain Security: Signing, Bills of Materials and Provenance

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 300 · Develop
- Format: Workshop: one and a half days with labs and an adoption review
- Total hours: 12 h
- Audience: practitioner
- Status: In development

## Description

Participants secure the path by which models, datasets and dependencies reach production. On a pipeline pulling an open-weight model and a public dataset, they catch a tampered file and an unsafe format, sign and verify a manifest of hashed model files, generate a machine-learning bill of materials, store models as registry artefacts and fail builds on unacceptable licences. Supplier governance is LDS-AIG-203; release gating is DEV-OPS-401.

## Learning outcomes

By the end, the participant can:

- Explain where models, datasets, packages, prompts, tools and skills enter an AI system and the attack at each point.
- Test downloaded model files for unsafe serialisation and tampering before loading.
- Prepare a machine-learning bill of materials with model, dataset and licence provenance.
- Build a pipeline that signs model manifests and blocks unsigned, modified or badly licensed artefacts.
- Evaluate a third-party model's supply-chain evidence and decide whether to adopt it.

## Prerequisites

- Builds container images and edits a continuous integration pipeline
- Has loaded an open-weight model from a hub

## Topics

### Attack surface

- Entry points from weights to skills
- Poisoned and mislabelled artefacts
- Code execution on model load

### Provenance

- Model and dataset cards as evidence
- Bills of materials in open formats
- Build provenance attestations

### Signing and registries

- Signing a manifest of hashed files
- Models as registry artefacts
- Verification at admission

### Licences

- Licences and acceptable-use terms
- Licence policy as code
- Re-checking upstream changes
