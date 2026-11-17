# SPC-ANL · Analysis and Business Intelligence

Track: Data Science

## Purpose

Teach analysts and business intelligence specialists to turn questions and data into checked findings, governed metrics, dashboards and decision briefings, using AI assistance that is verified and reproducible.

## Who it is for

Data analysts, business intelligence specialists and data scientists who explore and prepare data, define and publish metrics, run reporting platforms and brief decision makers.

## Suggested order

Start with SPC-ANL-201 and SPC-ANL-204, add SPC-ANL-202 for AI-assisted analysis, then SPC-ANL-203 for metrics, semantic models and dashboards. At level 300, SPC-ANL-301 turns analysis into decision briefings, SPC-ANL-302 adds spatial analysis, and SPC-ANL-303 covers governance, performance and enablement on a business intelligence platform.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-ANL-201 · Exploratory Analysis and Visualisation](../courses/SPC-ANL-201.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: FND-DAT-102
- Distinguish exploratory from confirmatory analysis and explain why an exploratory pattern needs a fresh test.
- Prepare an analysis plan listing questions, units of observation, variables and the comparison that answers each question.
- Analyse distributions and pairwise relationships with summaries and charts suited to each variable type.
- Use a grammar of graphics to map variables to position, colour and facets, with honest scales and baselines.
- Test whether an apparent difference or correlation could arise by chance, using permutation or bootstrap resampling.
- Build a reproducible exploratory report stating findings, open questions and limits.

### 2. [SPC-ANL-202 · Analysis with AI Assistants: Delegate, Verify, Reproduce](../courses/SPC-ANL-202.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Needs: SPC-ANL-201
- Prepare a delegation plan marking which steps stay with the analyst, and a brief stating question, data, constraints and acceptance checks.
- Test assisted analyses by recomputing headline numbers and checking joins, filters and denominators.
- Measure run-to-run variability by repeating one request and comparing code, numbers and conclusions.
- Deliver an assisted analysis package that another analyst can rerun and audit.

### 3. [SPC-ANL-203 · Metrics, Semantic Models and Dashboards](../courses/SPC-ANL-203.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: FND-DAT-101, SPC-ANL-201
- Explain where inconsistent numbers arise between metric definitions, semantic models and dashboards.
- Draft metric definitions with formula, grain, filters, time logic, owner and known limits.
- Implement a dimensional semantic model with conformed dimensions and metrics defined once.
- Design a dashboard for a named audience and decision, choosing layout, comparisons and drill paths.
- Measure dashboard load time and reduce it through aggregation, filters or model changes.
- Evaluate a conversational analytics agent against governed metrics and decide whether it is fit for a stated use.

### 4. [SPC-ANL-204 · Data Acquisition, Preparation and Quality for Analysis](../courses/SPC-ANL-204.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: FND-DAT-101, FND-DAT-102
- Describe missing-data mechanisms and types of measurement error, and the bias each can introduce.
- Prepare a provenance record for each source with origin, coverage, licence, refresh date and limits.
- Implement record linkage across sources, with cardinality tests, reconciliation counts and a clerical review of uncertain matches.
- Configure validation rules for types, ranges, uniqueness, completeness and cross-field consistency.
- Analyse how complete-case analysis, imputation and a sensitivity range change a headline estimate.
- Evaluate language-model labels of free text as a measurement instrument and decide whether they are fit for the analysis.

### 5. [SPC-ANL-301 · Data Storytelling and Decision Briefings](../courses/SPC-ANL-301.md)

- Level 300 · Develop · Intensive · 24 h · In development
- Needs: SPC-ANL-201
- Analyse a decision context to identify the decision maker, options, criteria and the evidence that would change the choice.
- Draft a storyline that puts the answer first and supports it with grouped, ordered reasons.
- Prepare explanatory charts whose titles state the finding, with annotation matched to the message.
- Draft statements of uncertainty, assumptions and risks in plain words using ranges, natural frequencies and scenarios.
- Deliver a decision memo stating recommendation, evidence, uncertainty, alternatives considered and what to monitor after the decision.
- Defend a recommendation in a live briefing under questioning, stating what is not known.

### 6. [SPC-ANL-302 · Geospatial Analytics](../courses/SPC-ANL-302.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-ANL-201
- Explain how projections and the modifiable areal unit problem can change a spatial result.
- Apply spatial joins, buffers and distance measures to compute access to services.
- Prepare maps with normalised measures, suitable class breaks and colour schemes.
- Diagnose spatial clustering with global and local autocorrelation and judge whether a hot spot is meaningful.
- Deliver a service-access analysis with stated assumptions and limits.

### 7. [SPC-ANL-303 · Business Intelligence Platform Practice: Governance, Performance and Enablement](../courses/SPC-ANL-303.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-ANL-203
- Implement measures with period comparisons, semi-additive balances, ratios and filter-dependent logic.
- Configure row-level and object-level access rules and test them with personas.
- Optimise a slow report using execution plans, indexes, aggregation tables and refresh design.
- Prepare an executive scorecard with objectives, measures, targets, owners and review rhythm.
- Design a governance and enablement plan covering certification, retirement, training and usage measures.
