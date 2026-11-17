# USE-FLU-103 · How AI Systems Learn and Where They Fail

- Track: Data & AI Fluency
- Path: [Fluency for Everyone](../paths/USE-FLU.md)
- Level: Level 100 · Explain
- Format: Primer: one facilitated day of six sessions or six self-paced modules, with a scenario test
- Total hours: 6 h
- Audience: beginner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/use-flu-103/
- The whole course in one file: https://sdaiaacademy.github.io/use-flu-103/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/use-flu-103/practice.html

## Description

A non-technical primer on how learned systems are made and why they fail. Participants trace the path from data to model to decision for a workplace tool, train a small classifier without code and watch it break on shifted data, work out why a high detection rate and a high accuracy figure both mislead when the event is rare, look for leakage and bias in dataset descriptions, and collect fluent but wrong answers from a language model. The course ends with a written critique of a vendor's accuracy claim that names the evidence still missing.

## Learning outcomes

By the end, the participant can:

- Describe the path from data to model to decision for a workplace AI system and mark where people make choices.
- Explain why a fluent language model answer can be wrong, including next-word prediction, missing or outdated knowledge and the tendency to agree with the user.
- Compute the false alarms, misses and share of real flags that stated detection rates imply when the event is rare, and show why overall accuracy misleads.
- Describe how overfitting and data shift lower a model's performance on new data.
- Analyse a dataset description for leakage, unrepresentative coverage and unreliable labels, and state who could be harmed by each problem.
- Draft a critique of a vendor accuracy claim that asks for the missing evidence: test data, base rate, error types, subgroup results and conditions of use.
- Distinguish a model from the system around it, including rules, retrieval, tools and human review, and identify where a human must stay in the loop.

## Prerequisites

- Basic arithmetic with percentages; no programming or statistics

## Next courses

- [USE-SEC-201 · AI in Health Systems](USE-SEC-201.md)
- [USE-SEC-202 · AI in Energy and Petrochemicals](USE-SEC-202.md)
- [USE-SEC-203 · AI in Government Services](USE-SEC-203.md)
- [USE-SEC-204 · AI in Education Systems](USE-SEC-204.md)
- [USE-SEC-205 · AI in Mobility and Logistics](USE-SEC-205.md)
- [USE-SEC-206 · AI in Financial Services](USE-SEC-206.md)

## Format and days

### Day 1: من البيانات إلى القرار

- الطريق من البيانات إلى القرار

### Day 2: التعلم والتعميم

- نموذج نجح في اختباره ثم أخفق

### Day 3: الأخطاء والمعدلات الأساسية والعتبات

- ما لا يقوله معدل الكشف

### Day 4: التسرب والتحيز

- حين تختبئ الإجابة في البيانات

### Day 5: النماذج اللغوية: السلاسة لا تعني الصحة

- السلاسة لا تعني الصحة

### Day 6: مساءلة الادعاء

- الأدلة التي يدين لك بها الادعاء

## Topics

### From data to decision

- Task types: classify, forecast, recommend, generate
- Features, labels and examples
- Model versus system: rules, retrieval, tools, human review
- Who chooses what in the pipeline

### Learning and generalising

- Training and testing
- Overfitting
- Data shift and stale models
- Why more data is not always better data

### Errors, base rates and thresholds

- False positives and false negatives
- Base rates and rare events
- Why accuracy alone misleads
- Thresholds as policy choices

### Leakage and bias

- Leakage: when the answer hides in the data
- Representation, label and proxy bias
- Historical patterns repeated
- Results by subgroup

### Language models: fluent is not correct

- Next-word prediction
- Knowledge cut-off and missing local knowledge
- Invented sources and figures
- Agreeing with the user

### Questioning a claim

- What was tested, on whom, under which conditions
- Error types and who bears their cost
- Further evidence to ask for
- Automation bias: people deferring to the system
- Human oversight and the right to challenge
