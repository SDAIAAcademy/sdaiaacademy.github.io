# LDS-PRD-202 · Evaluation, Experiments and Economics for AI Products

- Track: Executives & Leaders
- Path: [AI Product and Delivery](../paths/LDS-PRD.md)
- Level: Level 200 · Apply
- Format: Intensive: 3 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 24 h
- Audience: practitioner
- Status: Available
- Open the course: https://sdaiaacademy.github.io/lds-prd-202/
- The whole course in one file: https://sdaiaacademy.github.io/lds-prd-202/llms-full.txt
- Practice questions: https://sdaiaacademy.github.io/lds-prd-202/practice.html

## Description

Participants own the evidence for an AI assistant in pilot. With 300 synthetic traces, a 20,000-session experiment log and three price sheets, they code failure modes, turn them into a versioned evaluation set with graders and thresholds, plan and read an online experiment, and model cost per successful task against quality and latency, ending in a defended launch recommendation. DEV-EVL-301 builds the harness; this course trains its owner.

## Learning outcomes

By the end, the participant can:

- Explain why variable outputs need repeated trials, binary criteria and validated graders.
- Analyse traces into a failure taxonomy with frequency and severity.
- Prepare a versioned evaluation set that assigns a code check, model grader or human review and a release threshold to each criterion.
- Analyse an online experiment against primary, guardrail and cost metrics planned in advance.
- Compute cost per successful task and latency percentiles for alternative model configurations.
- Decide whether to launch, iterate or stop by weighing quality, cost, latency and risk.

## Prerequisites

- [LDS-PRD-201 · AI Product Discovery and Specification](LDS-PRD-201.md)
- Computes proportions and percentage differences in a spreadsheet
- Reads a chart that shows a confidence interval

## Format and days

### Day 1: من آثار التنفيذ إلى تصنيف للفشل

- مخرجات متغيرة تحتاج محاولات متكررة
- ما يسجله أثر التنفيذ، والوسم المفتوح
- الوسم المحوري مع المهندسين
- التكرار مقابل الشدة

### Day 2: مجموعة التقييم وخطة التجربة

- الفحص البرمجي والمصحح النموذجي والمراجعة البشرية
- اتفاق المصحح مع الحكم البشري
- الإصدارات والتسرب والتحديث من التشغيل
- تخطيط تجربة مباشرة

### Day 3: قراءة التجربة واقتصادياتها وقرار الإطلاق

- قراءة نتائج التجربة
- الوحدات المفوترة والتكلفة لكل مهمة ناجحة
- الفئات والتوجيه والتخزين المؤقت، والتكلفة توزيع
- معايير الإطلاق ومالكوها، والمتابعة بعد الإطلاق

### Day 4: مراجعة الإطلاق المباشرة


## Topics

### Reading traces

- What a trace records
- Open and axial coding with engineers
- Frequency against severity

### Owning the evaluation set

- Code checks, model graders and human review
- Grader agreement with human labels
- Versioning, leakage and refresh from production
- Consistency over repeated trials

### Online experiments

- A/B tests and shadow deployments
- Guardrail and cost metrics
- Minimum effect, sample size and peeking; depth in SPC-EXP-301

### Cost and latency

- Billed tokens versus user input
- Cost per successful task, not per call
- Model tiers, routing and caching as product levers
- Pricing models and cost governance are LDS-EXE-202

### The launch decision

- Cost as a distribution under volume scenarios
- Release criteria and their owners
- Usage, cohort and feedback analysis after launch
