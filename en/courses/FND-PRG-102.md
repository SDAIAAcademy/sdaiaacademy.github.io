# FND-PRG-102 · Command Line, Git and Reproducible Environments

- Track: Data & AI Foundations
- Path: [Programming and Software Practice](../paths/FND-PRG.md)
- Level: Level 100 · Explain
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: beginner
- Status: In development

## Description

Participants set up work that another person can rebuild from a clean machine. They script the shell, use Git with branches, pull requests and review on a shared repository, resolve a merge conflict, lock dependencies, run a project in a container without administrator rights, and keep secrets out of history.

## Learning outcomes

By the end, the participant can:

- Explain how Git records history as commits, branches and remotes, and what each everyday command changes.
- Use the shell to inspect and transform files, combining commands with pipes and a short script.
- Apply a branch, pull request and review workflow, including resolving a merge conflict.
- Configure an isolated environment with locked dependencies and run the project in a container without administrator rights.
- Prepare a repository that keeps secrets out of history, and carry out the response when one leaks.
- Deliver a repository that a peer reproduces on a clean machine using only its README.

## Prerequisites

- Writes and runs a short program in Python or another language

## Next courses

- [FND-PRG-104 · Software Testing, Code Review and Documentation](FND-PRG-104.md)
- [FND-PRG-105 · Computer Systems and Cloud Essentials for AI Work](FND-PRG-105.md)
- [DEV-SWE-201 · Software Engineering with Coding Agents](DEV-SWE-201.md)
- [DEV-DAT-201 · Modern Data Engineering](DEV-DAT-201.md)

## Topics

### The shell

- Paths and permissions
- Pipes, redirection and filters
- Environment variables and exit codes
- Remote login with secure shell (SSH) keys

### Version control

- Commits, staging and history
- Branches, merges and conflicts
- Pull requests and review etiquette
- Undoing mistakes

### Reproducible environments

- Virtual environments
- Declared dependencies and lock files
- One documented command to rebuild and run
- Keeping data and outputs out of the code

### Containers at user level

- Images, containers and volumes
- A short container definition
- What a container does not isolate

### Secrets and hygiene

- Scanning before each commit
- After a leak: rotate, then clean history
