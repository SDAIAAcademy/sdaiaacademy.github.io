# LDS-DMG-301 · Governing Data for AI: Training, Retrieval and Agent Access

- Track: Executives & Leaders
- Path: [Data Management and Governance Professions](../paths/LDS-DMG.md)
- Level: Level 300 · Develop
- Format: Workshop: 2 days with labs on provided AI systems
- Total hours: 16 h
- Audience: specialist
- Status: Available
- Open the course: https://sdaiaacademy.github.io/lds-dmg-301/
- The whole course in one file: https://sdaiaacademy.github.io/lds-dmg-301/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/lds-dmg-301/practice.html

## Description

Participants decide what data AI systems may train on, retrieve, expose to agents or send to external models, then test those decisions on a provided assistant and agent over synthetic data. Pipelines are DEV-DAT-302; agent sandboxes LDS-AIG-302; personal data and copyright in training LDS-AIG-306.

## Learning outcomes

By the end, the participant can:

- Classify proposed AI data uses by data class, purpose and hosting as allowed, conditional or prohibited.
- Test a retrieval assistant for permission leaks and specify the label filter that closes them.
- Configure per-tool agent permissions as scoped, read-only or approval-gated.
- Review provider terms on retention, training on inputs, residency and deletion, and decide which data classes may be sent.
- Defend a data-for-AI standard with logging and retention rules, and a decision record for one case.

## Prerequisites

- [LDS-DMG-204 · Data Classification in Practice](LDS-DMG-204.md)
- Explains how an assistant retrieves documents and calls tools (FND-AIC-102 or equivalent)

## Format and days

### Day 1: من الطلب إلى الفهرس

- ما الذي يجوز أن يأخذه الذكاء الاصطناعي
- الوسوم تسافر إلى الإجابة

### Day 2: الوكلاء والمزوّدون والأدلة

- أقل الصلاحيات لكل أداة
- المزوّد الخارجي والسجل الذي يبقى

### Day 3: وكيل الرد على المواطنين أمام اللجنة


## Topics

### Uses and eligibility

- Training, evaluation, retrieval, agent context and logs
- Derived data inherits source rules; training cannot be undone
- Classification, purpose, secondary use and source licences
- Hosting tiers: local, sovereign cloud, external service

### Permission-aware access

- Labels at indexing, filters at retrieval
- Least privilege and approvals for agents
- Access through semantic layers and tool servers

### External models and evidence

- Provider terms, transfers and residency
- Prompt and output logs
- AI data-use register
