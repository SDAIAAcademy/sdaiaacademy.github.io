# DEV-SEC · Security and Privacy Engineering for AI

Track: AI Engineering

## Purpose

Teach developers to build AI applications, agents and platforms that stay safe when the model is fooled, and to protect the personal data those systems touch.

## Who it is for

Application, platform, security and privacy engineers who build, test or approve systems that use language models, agents and personal data.

## Suggested order

Start with DEV-SEC-201, continue to DEV-SEC-301 for agents and DEV-SEC-302 for red teaming, add DEV-SEC-303, DEV-SEC-304 or DEV-SEC-305 by role, and finish with DEV-SEC-401 for platform security architecture.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-SEC-201 · Secure Development of AI Applications](../courses/DEV-SEC-201.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Distinguish risks of the model as a component from risks of the model as an agent.
- Implement validation and encoding of model output before it reaches a query, a web page or a shell.
- Configure secret handling so that no key appears in prompts, client code, logs or history.
- Apply document-level access control to retrieval.
- Review a small AI application and decide whether it may ship.

### 2. [DEV-SEC-301 · Securing Language Model and Agent Applications](../courses/DEV-SEC-301.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-SEC-201
- Prepare a threat model naming trust boundaries, private data, untrusted inputs and exit paths.
- Test the agent against injection and exfiltration through documents, images, links and tool arguments.
- Design containment that removes private data, untrusted content or the exit path from each high-risk flow.
- Build delegated authorisation with scoped, short-lived tokens exchanged at each hop.
- Measure guardrails on attack and benign sets and set thresholds.
- Evaluate the residual risk of a hardened agent and decide which actions still need approval.

### 3. [DEV-SEC-302 · AI Red Teaming and Adversarial Testing](../courses/DEV-SEC-302.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-SEC-201
- Distinguish security, safety, privacy and misuse objectives and the harm each tests.
- Design an exercise plan with scope, rules of engagement, stop conditions and handling of harmful outputs.
- Apply manual techniques including multi-turn escalation, encoding, indirect injection and attacks in Arabic dialect and transliteration.
- Configure automated probing and compute attack success with intervals.
- Evaluate findings for severity, likelihood and reproducibility and prioritise fixes.
- Build regression tests from confirmed findings.

### 4. [DEV-SEC-303 · Privacy Engineering and Privacy-Enhancing Technologies](../courses/DEV-SEC-303.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Compare pseudonymisation, anonymisation, differential privacy, synthetic data and confidential computing by what each protects and costs.
- Prepare a personal-data flow inventory with a minimisation decision per field.
- Test a de-identified release for re-identification by linkage on quasi-identifiers.
- Compute differentially private statistics under a fixed budget.
- Evaluate a synthetic dataset for utility and membership-inference leakage and decide on release.
- Build a personal-data detector for prompts, logs and retrieval chunks.

### 5. [DEV-SEC-304 · AI Supply Chain Security: Signing, Bills of Materials and Provenance](../courses/DEV-SEC-304.md)

- Level 300 · Develop · Workshop · 12 h · In development
- Explain where models, datasets, packages, prompts, tools and skills enter an AI system and the attack at each point.
- Test downloaded model files for unsafe serialisation and tampering before loading.
- Prepare a machine-learning bill of materials with model, dataset and licence provenance.
- Build a pipeline that signs model manifests and blocks unsigned, modified or badly licensed artefacts.
- Evaluate a third-party model's supply-chain evidence and decide whether to adopt it.

### 6. [DEV-SEC-305 · AI for Security Operations](../courses/DEV-SEC-305.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Build an alert-triage assistant that ranks and summarises alerts with cited evidence.
- Test model-drafted detection rules before deployment.
- Measure model-assisted code and configuration review and generated fuzzing harnesses against static analysis.
- Test a security assistant against injection hidden in log fields and tickets.
- Design the handling of AI-generated findings from verification to approved containment.

### 7. [DEV-SEC-401 · Security Architecture for AI Platforms](../courses/DEV-SEC-401.md)

- Level 400 · Evaluate · Intensive · 24 h · In development
- Needs: DEV-SEC-301
- Design an identity model that binds every agent action to an agent, a delegating person and a scoped grant.
- Design least-privilege access across tools, stores and indexes derived from data classification.
- Decide isolation tiers by code trust, tenant and data sensitivity.
- Design action monitoring that detects unsafe tool-call sequences.
- Prepare a control map to an AI controls framework and national controls.
- Review two competing platform security designs and recommend one.
