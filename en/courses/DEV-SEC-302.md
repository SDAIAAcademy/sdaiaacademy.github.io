# DEV-SEC-302 · AI Red Teaming and Adversarial Testing

- Track: AI Engineering
- Path: [Security and Privacy Engineering for AI](../paths/DEV-SEC.md)
- Level: Level 300 · Develop
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 30 h
- Audience: practitioner
- Status: In development

## Description

Participants plan and run a red-team exercise against two synthetic targets: a bilingual Arabic and English citizen-services assistant and a tool-using agent. They set scope and rules of engagement, pick objectives from a catalogue of adversary techniques, probe manually and with automated generators and scorers, measure attack success over repeated trials, rate findings and report them so a product owner can act. Every confirmed finding becomes a regression test. Building controls is DEV-SEC-301; governance-side testing is LDS-AIG-302.

## Learning outcomes

By the end, the participant can:

- Distinguish security, safety, privacy and misuse objectives and the harm each tests.
- Design an exercise plan with scope, rules of engagement, stop conditions and handling of harmful outputs.
- Apply manual techniques including multi-turn escalation, encoding, indirect injection and attacks in Arabic dialect and transliteration.
- Configure automated probing and compute attack success with intervals.
- Evaluate findings for severity, likelihood and reproducibility and prioritise fixes.
- Build regression tests from confirmed findings.

## Prerequisites

- [DEV-SEC-201 · Secure Development of AI Applications](DEV-SEC-201.md)
- Writes Python scripts that call an API
- Computes a proportion with a confidence interval

## Topics

### Planning

- Objectives tied to harms
- Scope, rules of engagement and stop conditions
- Handling harmful outputs and tester welfare

### Attack techniques

- Technique catalogues
- Jailbreak families and multi-turn escalation
- Indirect and cross-modal injection
- Hidden-context extraction and agent goal hijack
- Arabic, dialect, transliteration and code-switching

### Automated probing

- Generators, converters and scorers
- Attacker models and their limits
- Budgets and repeated trials

### Scoring and reporting

- Success rates with intervals
- Severity, likelihood and reproducibility
- Disclosure to suppliers

### From findings to regression

- Findings as test cases
- Suites that survive model updates
- Red-team suites in release gates
