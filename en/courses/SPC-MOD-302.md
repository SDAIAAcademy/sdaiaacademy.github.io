# SPC-MOD-302 · Forecasting and Time Series

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants forecast with the discipline of a backtest. On public energy, retail and tourism series they decompose series, set a benchmark floor with naive and seasonal-naive methods, fit exponential smoothing and ARIMA-family models with calendar effects, including holidays that move against the Gregorian year, train global boosted forecasters and run pretrained zero-shot forecasters as baselines. Forecasts are scored by rolling-origin cross-validation with point and probabilistic measures and reconciled across hierarchies. The production system is DEV-MLE-306.

## Learning outcomes

By the end, the participant can:

- Distinguish forecasting settings by horizon, number of series, information available and demand pattern.
- Compute seasonal-trend decompositions and a benchmark floor scored by rolling-origin cross-validation.
- Apply exponential smoothing, ARIMA-family and dynamic regression models with moving-holiday features and check residuals.
- Test global boosted and pretrained zero-shot forecasters against statistical models on point and quantile accuracy.
- Review a forecast evaluation for leakage across time and for model selection on the test window.
- Build a forecasting analysis for new series and defend the method, horizon and uncertainty to a planner.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Fits and reads a linear regression
- Handles dates and resampling in a dataframe library

## Next courses

- [DEV-MLE-306 · Forecasting Systems in Production](DEV-MLE-306.md)
- [SPC-MOD-401 · Foundation Models for Structured Data](SPC-MOD-401.md)

## Topics

### Framing and exploring series

- Forecast unit, horizon and information set
- Seasonal-trend decomposition
- Outliers, structural breaks and missing periods
- Lunar and solar calendars and moving holidays

### Benchmarks and evaluation

- Naive, seasonal-naive and drift forecasts
- Rolling-origin cross-validation
- Scaled errors, pinball loss and coverage

### Statistical forecasters

- Exponential smoothing
- ARIMA and seasonal ARIMA
- Dynamic regression and intermittent demand

### Learned and pretrained forecasters

- Lag features with boosted trees
- Global models across many series
- Zero-shot baselines, licences and pretraining overlap

### Hierarchies and uncertainty

- Bottom-up and optimal reconciliation
- Quantile forecasts and fan charts for planners
