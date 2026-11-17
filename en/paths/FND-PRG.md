# FND-PRG · Programming and Software Practice

Track: Data & AI Foundations

## Purpose

Give non-computing graduates a sound base in programming and software practice, and refresh computing graduates, before they build data and AI systems.

## Who it is for

Graduates and career changers heading for analysis, data science, data engineering or AI engineering courses, and computing graduates whose degree did not require testing, version control or reproducible environments.

## Suggested order

Start with FND-PRG-101, then take FND-PRG-102 and FND-PRG-106 alongside or straight after it; continue to FND-PRG-103, FND-PRG-104 and FND-PRG-105, which lead into DEV-SWE-201 and the other Developer streams.

## Courses in order

In the order their prerequisites suggest.

### 1. [FND-PRG-101 · Python Programming for Data and AI](../courses/FND-PRG-101.md)

- Level 100 · Explain · Extended · 60 h · In development
- Read a short program and state its output and the value of each variable at marked lines.
- Distinguish lists, tuples, dictionaries and sets by mutability, ordering and lookup cost, and name the right one for a task.
- Explain when work belongs in a notebook and when in a script or module, including the risk of hidden state.
- Implement functions with type hints, docstrings and explicit handling of invalid input.
- Use classes, files and the standard library to read, transform and write delimited and JSON data, including Arabic text.
- Build a small command-line program that loads, validates, summarises and reports on a dataset, and explain its structure.

### 2. [FND-PRG-102 · Command Line, Git and Reproducible Environments](../courses/FND-PRG-102.md)

- Level 100 · Explain · Intensive · 24 h · In development
- Explain how Git records history as commits, branches and remotes, and what each everyday command changes.
- Use the shell to inspect and transform files, combining commands with pipes and a short script.
- Apply a branch, pull request and review workflow, including resolving a merge conflict.
- Configure an isolated environment with locked dependencies and run the project in a container without administrator rights.
- Prepare a repository that keeps secrets out of history, and carry out the response when one leaks.
- Deliver a repository that a peer reproduces on a clean machine using only its README.

### 3. [FND-PRG-103 · Data Structures, Algorithms and Complexity](../courses/FND-PRG-103.md)

- Level 100 · Explain · Extended · 60 h · In development
- Needs: FND-PRG-101
- Explain big-O notation and identify the cost class of a given piece of code.
- Compare arrays, linked structures, hash tables, heaps and trees by operation cost and memory layout.
- Implement a dynamic array, a hash map with collision handling, a binary heap and a binary search tree.
- Implement and measure sorting, binary search and graph traversal, and relate the timings to predicted complexity.
- Analyse a slow data-processing function and change its structure or algorithm to remove the bottleneck.
- Design and build a small in-memory index and defend its structures against a time and memory budget.

### 4. [FND-PRG-104 · Software Testing, Code Review and Documentation](../courses/FND-PRG-104.md)

- Level 100 · Explain · Intensive · 30 h · In development
- Needs: FND-PRG-101, FND-PRG-102
- Distinguish unit, integration and end-to-end tests, and explain what each can and cannot show.
- Design test cases from a specification using equivalence partitions, boundary values and error cases.
- Implement unit and integration tests with fixtures and test doubles for files, time and network calls.
- Review a pull request for correctness, tests, readability and security, and write actionable comments.
- Prepare a README and reference documentation, and package the library for installation.
- Deliver a tested, reviewed and documented release with automated checks on every change.

### 5. [FND-PRG-105 · Computer Systems and Cloud Essentials for AI Work](../courses/FND-PRG-105.md)

- Level 100 · Explain · Intensive · 30 h · In development
- Needs: FND-PRG-101, FND-PRG-102
- Explain the memory hierarchy and how accelerators differ from processors, and identify what limits a workload.
- Describe the steps between calling an API and receiving its response, from name lookup to status code.
- Measure a program's processor, memory and disk use, and compare threaded and multi-process versions.
- Use an HTTP API from code with authentication, timeouts and retries with back-off.
- Configure a virtual machine, object storage, a container image and a least-privilege role for a batch job.
- Plan, size and price a small batch inference job, run it, and explain the gap between estimate and actual.

### 6. [FND-PRG-106 · Code Reading and Debugging without Assistance](../courses/FND-PRG-106.md)

- Level 100 · Explain · Workshop · 12 h · In development
- Needs: FND-PRG-101
- Read unfamiliar code and state its output, including the effects of aliasing, scope and mutation.
- Explain what a traceback or failing assertion reveals about where and what a fault is.
- Apply the reproduce, isolate, hypothesise, test and fix method to locate defects, keeping a log.
- Use a step debugger, breakpoints and targeted logging to inspect program state.
- Distinguish assistant use that keeps debugging skill, such as asking for explanations, from use that erodes it.
