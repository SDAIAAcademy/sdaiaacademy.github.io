# DEV-SWE-204 · Testing and Verification of AI-Assisted Code

- Track: AI Engineering
- Path: [Software Engineering for AI Builders](../paths/DEV-SWE.md)
- Level: Level 200 · Apply
- Format: Workshop: two days with labs and a short build project, with guided pre-work
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build the checks that decide whether agent-written code is accepted. On a synthetic, mostly agent-written fee-calculation library, they write and protect acceptance tests before delegating, add property-based and mutation testing, wire code, dependency and secret scanning into continuous integration, and size review effort to agent volume. Application-level security is DEV-SEC-201.

## Learning outcomes

By the end, the participant can:

- Prepare acceptance tests before delegating and protect them from agent edits.
- Implement property-based tests that find defects example tests miss.
- Measure suite strength with mutation testing and kill surviving mutants.
- Configure code, dependency and secret scanning and triage findings.
- Build a verification pipeline that accepts a correct agent change and rejects faulty ones.

## Prerequisites

- [FND-PRG-104 · Software Testing, Code Review and Documentation](FND-PRG-104.md)
- Has used a coding agent

## Next courses

- [DEV-SWE-302 · Agent-Ready Engineering Organisations: Parallel Agents, Review and Governance](DEV-SWE-302.md)

## Topics

### Tests as the contract

- Test-first delegation
- Characterisation tests before agent refactoring
- Protected tests and hooks
- Agents that skip, weaken or hard-code tests

### Stronger tests

- Properties and shrinking
- Mutation testing: why coverage is not strength

### Security of generated code

- Common flaws in generated code
- Static analysis and secret detection
- Dependencies, licences and invented package names

### Review capacity

- Review depth by risk tier
- Small, stacked changes
- Agent review as a first pass only
