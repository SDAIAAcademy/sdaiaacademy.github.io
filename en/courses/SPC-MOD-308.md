# SPC-MOD-308 · Graph, Network and Relational Data Analysis

- Track: Data Science
- Path: [Machine Learning and Modelling](../paths/SPC-MOD.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs, guided pre-work and a tracked follow-up task
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build networks from event data and analyse them with methods whose assumptions they can state. They choose nodes, edges, weights and time windows, compare centrality and clustering with null models, test whether detected communities are real, and predict links with a time-respecting split, ending with a small graph neural network set against simple heuristics. Data are public research networks and a synthetic supplier and payment ledger.

## Learning outcomes

By the end, the participant can:

- Construct a network from transaction records, justifying node, edge, weight and window choices.
- Compute centrality, clustering and assortativity against a degree-preserving null model.
- Evaluate community structure across two methods, under resampling and against external attributes.
- Build and compare heuristic, embedding and graph neural network link predictors.
- Explain how message passing generalises neighbourhood features and when engineered features suffice.

## Prerequisites

- [SPC-MOD-201 · Machine Learning for Tabular Data: Baselines and Validation](SPC-MOD-201.md)
- Reads a matrix as an adjacency or similarity table
- Has trained a small neural network, or completes the pre-work notebook

## Topics

### From records to networks

- Nodes, edges, weights and direction
- Bipartite projections and their distortions
- Temporal networks and missing edges

### Measures and null models

- Centrality and what each measure assumes about flow
- Clustering and assortativity
- The configuration model

### Community structure

- Modularity and its resolution limit
- Leiden and stochastic block models
- Validation without ground truth

### Link prediction and relational learning

- Heuristics and node embeddings
- Temporal splits and leakage
- Message passing; knowledge graphs are in DEV-DAT-304
