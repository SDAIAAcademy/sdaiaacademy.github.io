# DEV-DAT-304 · Knowledge Graphs and Ontology Engineering

- Track: AI Engineering
- Path: [Data Engineering and Architecture](../paths/DEV-DAT.md)
- Level: Level 300 · Develop
- Format: Workshop: two days with labs and a short graded build
- Total hours: 16 h
- Audience: practitioner
- Status: In development

## Description

Participants build a knowledge graph from two synthetic registries and a set of Arabic and English documents. They resolve duplicate entities, write an ontology from competency questions with public vocabularies, validate it with shape constraints, admit language-model-extracted facts only after validation and with provenance, and compare graph-grounded with text-only retrieval on multi-hop questions.

## Learning outcomes

By the end, the participant can:

- Distinguish Resource Description Framework (RDF) graphs, property graphs and relational models, and state when each fits.
- Apply entity resolution with blocking, scoring and clustering, and measure its precision and recall.
- Design an ontology and shape constraints that answer competency questions.
- Implement language-model extraction of facts into the graph with validation and source provenance.
- Evaluate graph-grounded against text-only retrieval and recommend one.

## Prerequisites

- Has designed a normalised relational schema (DEV-DAT-301 or equivalent)
- Has called a language model API from Python

## Topics

### Graph models

- Triples, identifiers and property graphs
- SPARQL, Cypher and ISO Graph Query Language
- When a relational model is enough

### Entity resolution

- Arabic transliteration and normalisation
- Blocking, scoring, clustering and human review

### Ontology engineering

- Competency questions
- Reusing SKOS, schema.org and PROV-O
- Shapes Constraint Language (SHACL) validation

### Using graphs

- Validated extraction with provenance
- Graph-grounded retrieval and paths as explanations
- Ontology versioning as sources change
