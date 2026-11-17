# DEV-LLM-203 · Retrieval and Knowledge Engineering for Language Model Systems

- Track: AI Engineering
- Path: [Language Model Application Engineering](../paths/DEV-LLM.md)
- Level: Level 200 · Apply
- Format: Intensive: 4 teaching days and a capstone day, with guided pre-work and a tracked follow-up task
- Total hours: 36 h
- Audience: practitioner
- Status: In development

## Description

Participants build the retrieval layer of a language model system: lexical, dense and hybrid search with reranking over a bilingual corpus, an agent that chooses among search tools, a memory file kept across sessions, statistical answers through a semantic layer instead of free text-to-SQL, and filtering by the requester's permissions. The case study is a synthetic ministry knowledge base with a statistics warehouse. Retrieval evaluation in depth is in DEV-EVL-303, building semantic models in DEV-DAT-202, indexing pipelines in DEV-DAT-302 and graph retrieval in DEV-DAT-304.

## Learning outcomes

By the end, the participant can:

- Distinguish lexical, dense, hybrid, multi-vector and agentic retrieval and the query types each suits.
- Implement hybrid retrieval with rank fusion and a cross-encoder reranker.
- Configure an agent to choose among file listing, keyword, semantic and SQL search and to page large results.
- Implement assistant access to a warehouse through a provided semantic layer, with query validation, row limits and role checks.
- Implement permission filtering so retrieval returns only passages the requester may see.
- Build a knowledge assistant over documents, structured data and a memory file, and defend each choice with measurements.

## Prerequisites

- [DEV-LLM-201 · Building Applications on Language Models](DEV-LLM-201.md)
- Writes SQL with joins and grouping

## Topics

### Search fundamentals

- BM25 and inverted indexes
- Approximate nearest-neighbour indexes
- Rank fusion and reranking
- Arabic morphology in lexical search

### Preparing a corpus

- Chunking by structure
- Metadata, dates and deduplication
- Long context versus retrieval

### Agentic search and memory

- The cheapest tool that works first
- Query rewriting and decomposition
- Offloading large results to files
- Memory files and wikis: bloat and staleness

### Structured data

- Schema grounding
- Semantic layers and governed metrics
- Validating generated SQL

### Access and trust

- Permission filters before ranking
- Retrieved text as untrusted input
- Citations and source dates
