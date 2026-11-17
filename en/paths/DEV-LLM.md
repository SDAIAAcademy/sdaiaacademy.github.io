# DEV-LLM · Language Model Application Engineering

Track: AI Engineering

## Purpose

Teach developers to build dependable software on language models: calling them, grounding them in data, adapting them, and choosing and paying for them.

## Who it is for

Software engineers, data engineers and data scientists who put language, document and voice features into products and services.

## Suggested order

Start with DEV-LLM-201 (the application core); add DEV-LLM-202 for classic NLP engineering, DEV-LLM-203 for retrieval and DEV-LLM-204 or DEV-LLM-205 as the product needs; continue to DEV-LLM-301 (adaptation), DEV-LLM-302 (Arabic and multilingual) and DEV-LLM-303 (model choice and economics), then to agents in DEV-AGT-301 and evaluation in DEV-EVL-301.

## Courses in order

In the order their prerequisites suggest.

### 1. [DEV-LLM-201 · Building Applications on Language Models](../courses/DEV-LLM-201.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Distinguish the chat-message, item-list and provider-neutral response shapes of model APIs.
- Implement prompts as versioned templates that keep instructions apart from untrusted user text.
- Implement structured outputs that validate against a schema, with a bounded retry and a fallback.
- Configure tool calling with typed tools, recovery from tool errors and confirmation before state changes.
- Measure quality, latency and cost per request for three candidate models.
- Build a grounded answering feature that cites sources and declines when the documents hold no answer.

### 2. [DEV-LLM-202 · Applied Natural Language Processing Engineering](../courses/DEV-LLM-202.md)

- Level 200 · Apply · Intensive · 30 h · In development
- Needs: FND-AIC-101
- Explain how tokenisation, embeddings and attention turn a sentence into a prediction.
- Implement semantic search and measure recall at ten for two embedding models.
- Measure a classical baseline, a prompted generative model and a fine-tuned encoder against each other on a routing task.
- Implement a token-classification model that extracts named entities.
- Apply low-rank and quantised low-rank adapters to fit training into limited memory.
- Build a routing and extraction service with a demo interface and a model card.

### 3. [DEV-LLM-203 · Retrieval and Knowledge Engineering for Language Model Systems](../courses/DEV-LLM-203.md)

- Level 200 · Apply · Intensive · 36 h · In development
- Needs: DEV-LLM-201
- Distinguish lexical, dense, hybrid, multi-vector and agentic retrieval and the query types each suits.
- Implement hybrid retrieval with rank fusion and a cross-encoder reranker.
- Configure an agent to choose among file listing, keyword, semantic and SQL search and to page large results.
- Implement assistant access to a warehouse through a provided semantic layer, with query validation, row limits and role checks.
- Implement permission filtering so retrieval returns only passages the requester may see.
- Build a knowledge assistant over documents, structured data and a memory file, and defend each choice with measurements.

### 4. [DEV-LLM-204 · Document Intelligence: Parsing, Extraction and Multimodal Retrieval](../courses/DEV-LLM-204.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Needs: DEV-LLM-201
- Compare pipeline parsers, small document models and general vision-language models for layout, tables and Arabic text.
- Measure parsing quality separately from extraction with edit distance and table-structure scores.
- Implement schema-based extraction with field rules and cross-field checks.
- Implement retrieval that indexes page images alongside parsed text.
- Build a pipeline that routes low-confidence fields to human review.

### 5. [DEV-LLM-205 · Voice and Conversational Applications](../courses/DEV-LLM-205.md)

- Level 200 · Apply · Workshop · 16 h · In development
- Needs: DEV-LLM-201
- Distinguish cascaded, speech-to-speech and full-duplex voice architectures by latency, control and inspectable text.
- Implement a cascaded agent with voice activity detection, streaming recognition, tools and streaming synthesis.
- Configure end-of-turn detection and interruption handling.
- Measure word and character error rates on dialect and code-switched speech.
- Build a voice channel that confirms key details and hands over to a person.

### 6. [DEV-LLM-301 · Model Adaptation for Applications: Fine-Tuning, Distillation and Small Models](../courses/DEV-LLM-301.md)

- Level 300 · Develop · Intensive · 36 h · In development
- Needs: DEV-LLM-201, DEV-LLM-202
- Decide whether to prompt, retrieve, fine-tune or distil to fix an application's failures.
- Prepare a tuning dataset with deduplication, decontamination, licence checks and personal-data removal.
- Implement supervised fine-tuning with low-rank adapters on a small open-weight model.
- Implement distillation of a teacher's behaviour into a student by generating, filtering and training on examples.
- Evaluate an adapted model against its base and a larger prompted model on task metrics, general ability and safety behaviour.
- Build a serving setup for a quantised small model with several adapters and measure its latency, throughput and cost.

### 7. [DEV-LLM-302 · Arabic and Multilingual Language Applications](../courses/DEV-LLM-302.md)

- Level 300 · Develop · Intensive · 30 h · In development
- Needs: DEV-LLM-201, DEV-LLM-202
- Measure how tokeniser fertility changes cost, usable context and chunk sizes for standard and dialectal Arabic across target models.
- Implement normalisation, romanised-Arabic detection and dialect identification.
- Test retrieval and prompting strategies for dialectal and code-switched queries.
- Design an application test set covering standard Arabic, dialects, code-switching and cultural items.
- Evaluate Arabic-first and multilingual open models on public benchmarks and on the custom set, and explain disagreements.
- Build a model-graded check for cultural appropriateness and calibrate it against native-speaker labels.

### 8. [DEV-LLM-303 · Model Choice, Routing and Inference Economics](../courses/DEV-LLM-303.md)

- Level 300 · Develop · Workshop · 12 h · In development
- Needs: DEV-LLM-201
- Measure quality, latency and cost per successful task for four models at two reasoning settings.
- Design a cascade that escalates from a small model to a larger one on validation failure or low confidence, keeping quality above a floor.
- Configure prompt and tool layout for prefix caching and measure the effect.
- Compute the break-even volume between a hosted API and self-hosting.
- Decide on model choice and hosting for the case-study application.
