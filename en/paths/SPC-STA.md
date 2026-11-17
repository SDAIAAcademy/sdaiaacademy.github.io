# SPC-STA · Statistics and Inference

Track: Data Science

## Purpose

Teach specialists to quantify uncertainty, build and interpret statistical models, design samples and measures, and turn posterior evidence into decisions, using simulation to check every method they apply.

## Who it is for

Data scientists, analysts and AI researchers who estimate quantities from data, compare groups or systems, run surveys, or must state how sure they are before a decision is taken.

## Suggested order

Start with SPC-STA-201 after FND-MTH-104 or the placement test. SPC-STA-301 builds the regression models that SPC-EXP-302 and SPC-EXP-402 rely on, and SPC-STA-302 adds survey and measurement design. SPC-STA-401 completes the stream with Bayesian modelling and decision analysis.

## Courses in order

In the order their prerequisites suggest.

### 1. [SPC-STA-201 · Statistical Inference by Simulation](../courses/SPC-STA-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: FND-MTH-104
- Prepare an analysis plan stating estimand, unit of analysis, method and error rates before seeing the data.
- Compute bootstrap and large-sample intervals for ratios and differences in dependent data, resampling the correct unit.
- Implement a simulation that measures the coverage and Type I error of a method when its assumptions fail.
- Compute power and sample size by simulating the planned analysis, including clustering and attrition.
- Apply family-wise, false discovery rate and gatekeeping control to a planned family of claims, and test equivalence where the claim is no meaningful difference.
- Deliver an inference report that states estimates, intervals, effect sizes and limits in plain words.

### 2. [SPC-STA-301 · Regression and Generalised Linear Modelling](../courses/SPC-STA-301.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: SPC-STA-201
- Distinguish descriptive, predictive and causal uses of a regression and the assumption each requires.
- Implement linear, logistic and count models with interactions and splines, interpreted as predicted values and average marginal effects.
- Diagnose misfit with residuals, influence measures and fake-data simulation, and correct the model.
- Analyse grouped data with cluster-adjusted standard errors and a random-intercept model, compared with a naive fit.
- Apply ridge and lasso penalties with cross-validated tuning and measure the stability of the selected predictors.
- Build and defend a regression model that answers a stated question, justifying terms, family and uncertainty.

### 3. [SPC-STA-302 · Survey, Sampling and Measurement Design](../courses/SPC-STA-302.md)

- Level 300 · Develop · Workshop · 16 h · In development
- Needs: SPC-STA-201
- Compute design weights, design effects and design-based standard errors for a stratified cluster sample.
- Apply non-response adjustment and raking to population margins and measure the effect on estimates.
- Analyse questionnaire items for wording faults, scale reliability and evidence of validity.
- Review two disagreeing survey results and trace the gap to frame, non-response, wording or denominator.
- Design a sampling and measurement plan with frame, design, sample size, weighting and pretest.

### 4. [SPC-STA-401 · Bayesian Modelling and Decisions under Uncertainty](../courses/SPC-STA-401.md)

- Level 400 · Evaluate · Extended · 60 h · In development
- Needs: SPC-STA-301
- Implement a Bayesian workflow from prior predictive simulation through fitting to sampler diagnosis.
- Design a hierarchical model for many small groups and defend the pooling it implies.
- Evaluate competing models with posterior predictive checks and approximate leave-one-out cross-validation.
- Validate a model implementation by parameter recovery and simulation-based calibration.
- Decide between actions by expected utility under the posterior, including the value of collecting more data.
- Review another analyst's Bayesian analysis for priors, computation, checking and reporting.
