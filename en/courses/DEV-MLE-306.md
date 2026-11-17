# DEV-MLE-306 · Forecasting Systems in Production

- Track: AI Engineering
- Path: [Machine Learning Engineering](../paths/DEV-MLE.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants turn forecasting methods into a running system. On a public many-series retail or energy dataset they build a rolling-origin backtest with a seasonal-naive floor, test statistical, gradient-boosted and pretrained zero-shot forecasters, reconcile forecasts across a hierarchy, and deploy a scheduled pipeline that writes probabilistic forecasts, monitors accuracy and triggers retraining.

## Learning outcomes

By the end, the participant can:

- Implement a rolling-origin backtest that scores point and quantile forecasts against naive floors.
- Test statistical, gradient-boosted and pretrained zero-shot forecasters under one backtest.
- Apply hierarchical reconciliation across product and region levels.
- Build a scheduled pipeline with input checks, versioned models and forecasts stored with their intervals.
- Design monitoring and retraining rules that catch accuracy decay and structural breaks without reacting to noise.

## Prerequisites

- [SPC-MOD-302 · Forecasting and Time Series](SPC-MOD-302.md)
- Has packaged a Python job in a container and run it on a schedule

## Topics

### Backtesting as the contract

- Rolling origins and horizons
- Scaled errors, pinball loss and coverage
- Information available at forecast time
- Moving holidays such as Ramadan and Eid

### Many series and hierarchies

- Global versus local models
- Intermittent and new series
- Hierarchical reconciliation

### Pretrained forecasters as baselines

- Zero-shot use with covariates
- When tuned statistical models still win
- Licences and overlap with test series

### Production

- Data-arrival checks
- Structural-break monitoring
- Retraining policies and human overrides
