# DEV-SEC-303 · Privacy Engineering and Privacy-Enhancing Technologies

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants engineer privacy into a synthetic health-insurance claims pipeline that trains a model, answers questions over member documents and logs prompts. They minimise personal-data flows, pseudonymise identifiers with keyed tokens, re-identify a released table by linkage and repair it, publish differentially private statistics under a budget, generate synthetic data and measure its leakage, and build a detector for personal data in prompts, logs and retrieval chunks, including Arabic names. Legal procedure such as impact assessments is LDS-DMG-206; memorisation and deletion in trained models are LDS-AIG-306.

## Learning outcomes

By the end, the participant can:

- Compare pseudonymisation, anonymisation, differential privacy, synthetic data and confidential computing by what each protects and costs.
- Prepare a personal-data flow inventory with a minimisation decision per field.
- Test a de-identified release for re-identification by linkage on quasi-identifiers.
- Compute differentially private statistics under a fixed budget.
- Evaluate a synthetic dataset for utility and membership-inference leakage and decide on release.
- Build a personal-data detector for prompts, logs and retrieval chunks.

## Prerequisites

- Cleans and joins tables with a DataFrame library in Python
- Computes a mean, a variance and a proportion

## Topics

### Privacy by design

- Purpose, minimisation and retention
- Personal data in training, retrieval, prompts and logs
- Linkage, inference and extraction threats

### Pseudonymisation and anonymisation

- Keyed hashing and tokenisation
- Quasi-identifiers and k-anonymity
- Generalisation, suppression and their limits

### Differential privacy

- Sensitivity, noise and budget
- Counts, histograms and means
- Training with differential privacy and its accuracy cost

### Synthetic data

- Tabular generators
- Utility and privacy metrics
- Membership inference

### Personal data in AI systems

- Detection in prompts, logs and corpora
- Arabic names and identifier formats
- Masking before external model calls
- Federated learning and secure computation in brief
