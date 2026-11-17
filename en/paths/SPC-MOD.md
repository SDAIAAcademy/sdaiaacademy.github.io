# SPC-MOD · Machine Learning and Modelling

Track: Data Science

## Purpose

Teach data scientists to build, validate and explain predictive, forecasting, text, unsupervised and optimisation models as evidence for decisions, treating every model name as a replaceable example.

## Who it is for

Data scientists, statisticians and quantitative analysts who choose modelling methods and must defend the result, and engineers who need the modelling judgement behind the systems they build.

## Suggested order

Start with SPC-MOD-201, then SPC-MOD-301 for uncertainty, interpretation and validation; branch by problem into forecasting (SPC-MOD-302), text (SPC-MOD-303), optimisation (SPC-MOD-304), unsupervised methods (SPC-MOD-305) and graphs (SPC-MOD-308), with SPC-MOD-306 and SPC-MOD-307 as shared practice. SPC-MOD-401 and SPC-MOD-402 extend to foundation models for structured data and to simulation.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](../courses/SPC-MOD-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: FND-AIC-101, FND-DAT-102
- Identify the leakage type and the fitting validation scheme in short modelling cases.
- Apply a baseline ladder from a constant predictor to tuned gradient-boosted trees, logging every run.
- Implement validation that matches the data structure and measure how far a random split overstates performance.
- Test an automated or pretrained challenger against the tuned champion under identical folds and budget.
- Analyse held-out errors by subgroup with intervals that reflect slice size.
- Audit another analyst's modelling notebook and decide whether its reported score can be trusted.

### 2. [SPC-MOD-301 · Uncertainty, Interpretability and Model Validation](../courses/SPC-MOD-301.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: SPC-MOD-201
- Explain what calibration, conformal coverage and feature attribution each guarantee, and their assumptions.
- Measure calibration with proper scores and reliability diagrams, then recalibrate and report the effect by subgroup.
- Implement conformal intervals and prediction sets and test coverage overall, by group and under simulated shift.
- Compute permutation, accumulated-local-effect and Shapley-value explanations and test their stability across refits.
- Diagnose why a model degrades on a later batch from slice metrics, coverage loss and explanation changes.
- Audit a model package against a reporting checklist and deliver a fit-for-use decision.

### 3. [SPC-MOD-302 · Forecasting and Time Series](../courses/SPC-MOD-302.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: SPC-MOD-201
- Distinguish forecasting settings by horizon, number of series, information available and demand pattern.
- Compute seasonal-trend decompositions and a benchmark floor scored by rolling-origin cross-validation.
- Apply exponential smoothing, ARIMA-family and dynamic regression models with moving-holiday features and check residuals.
- Test global boosted and pretrained zero-shot forecasters against statistical models on point and quantile accuracy.
- Review a forecast evaluation for leakage across time and for model selection on the test window.
- Build a forecasting analysis for new series and defend the method, horizon and uncertainty to a planner.

### 4. [SPC-MOD-303 · Text and Unstructured Data for Data Science](../courses/SPC-MOD-303.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: SPC-MOD-201, FND-AIC-102
- Compare sparse features, embeddings and prompted language models on data needs, cost, transparency and failures.
- Prepare a codebook and gold set and measure agreement between annotators with chance-corrected statistics.
- Measure sparse, embedding-based and prompted classifiers against the same held-out gold set.
- Implement schema-constrained field extraction and measure field-level precision and recall.
- Evaluate a language model as an annotator and decide whether its labels can feed a downstream analysis.
- Design a text-measurement project that answers a stakeholder question and defend each measurement choice.

### 5. [SPC-MOD-304 · Optimisation and Operations Research for Decisions](../courses/SPC-MOD-304.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: FND-MTH-101, SPC-MOD-201
- Distinguish linear, integer, constraint and scenario-based formulations and identify which a problem needs.
- Implement a linear programme for allocation and interpret shadow prices for a manager.
- Implement a staff roster with hard and soft rules and measure solve time and optimality gap as it grows.
- Analyse a plan under uncertain demand by Monte Carlo simulation against a scenario-based alternative.
- Build a predict-then-optimise pipeline and evaluate forecasts by the decision regret they cause.
- Design a decision model from a stakeholder brief, verify it against the owner's rules and defend its trade-offs.

### 6. [SPC-MOD-305 · Clustering, Anomaly Detection and Dimensionality Reduction](../courses/SPC-MOD-305.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-MOD-201
- Apply principal components and a nonlinear embedding and test which structures survive changes of settings and seeds.
- Apply centroid, mixture and density-based clustering under different scaling choices and measure internal indices and bootstrap stability.
- Measure the precision of anomaly detectors at a fixed investigation budget.
- Evaluate a segmentation delivered by another team and decide whether it is stable and useful enough to act on.
- Design an anomaly-monitoring rule for a data feed with thresholds, alert budget and a review step.

### 7. [SPC-MOD-306 · Responsible Data Science: Privacy, Fairness and Documentation](../courses/SPC-MOD-306.md)

- Level 300 · Develop · Intensive · 24 h · In development
- Needs: SPC-MOD-201
- Distinguish pseudonymisation, de-identification, aggregation and differential privacy by the guarantee each gives.
- Measure re-identification risk from quasi-identifiers and reduce it while tracking analytic utility.
- Compute differentially private counts and means and state the accuracy cost of a privacy budget.
- Audit a classifier for subgroup disparities, choose fairness criteria that fit the decision and evaluate mitigations.
- Build the documentation set that lets an independent reviewer rerun an analysis and judge its limits.

### 8. [SPC-MOD-307 · Problem Framing, Product Sense and Analytical Review](../courses/SPC-MOD-307.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-ANL-201
- Prepare a decision question with estimand, population, metric and decision rule from a request.
- Analyse a metric set for proxy failure and gaming, and propose guardrail metrics.
- Design an analysis plan stating data, method, threats to validity and the result that would change the decision.
- Review an analysis for errors in question fit, data handling, method, inference and communication.
- Decide whether a request needs description, an experiment, a causal study, a model or no analysis.

### 9. [SPC-MOD-308 · Graph, Network and Relational Data Analysis](../courses/SPC-MOD-308.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-MOD-201
- Construct a network from transaction records, justifying node, edge, weight and window choices.
- Compute centrality, clustering and assortativity against a degree-preserving null model.
- Evaluate community structure across two methods, under resampling and against external attributes.
- Build and compare heuristic, embedding and graph neural network link predictors.
- Explain how message passing generalises neighbourhood features and when engineered features suffice.

### 10. [SPC-MOD-401 · Foundation Models for Structured Data](../courses/SPC-MOD-401.md)

- Level 400 · Evaluate · Workshop · 16 h · In development
- Needs: SPC-MOD-201, SPC-MOD-302
- Evaluate a tabular foundation model against a tuned, ensembled boosted-tree baseline across training-set sizes.
- Evaluate zero-shot and fine-tuned forecasters against seasonal naive, exponential smoothing and a tuned global boosted-tree model.
- Audit a published claim for pretraining overlap, unequal tuning budgets and leaderboard overfitting.
- Design a reusable evaluation protocol and decide on adoption for one structured-data task, including licence, hosting and data-flow conditions.

### 11. [SPC-MOD-402 · Simulation and Agent-Based Modelling](../courses/SPC-MOD-402.md)

- Level 400 · Evaluate · Workshop · 16 h · In development
- Needs: SPC-STA-201
- Build a discrete-event model of a queueing service and compare staffing policies with replications and common random numbers.
- Build an agent-based model of adoption and document it with a standard protocol.
- Calibrate model parameters against observed aggregate patterns and report their uncertainty.
- Analyse which inputs drive outputs with designed experiments and global sensitivity analysis.
- Evaluate scenarios for a policy decision and defend what the model can and cannot support.
