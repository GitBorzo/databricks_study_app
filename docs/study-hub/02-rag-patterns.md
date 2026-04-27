# 02 - RAG Patterns

## Plain-English Overview

RAG combines retrieval with LLM generation so answers are grounded in your own data instead of model memory alone. A typical flow is: parse documents, chunk them, create embeddings, index them, retrieve relevant context at query time, then generate an answer with citations. On Databricks, this usually means Delta/Lakeflow for data pipelines, Vector Search for retrieval, and Model Serving for runtime endpoints. Your local notes also emphasize the shift from prompt engineering to context engineering: reliability comes from how context is selected and constrained, not just how instructions are phrased. Chunking strategy, metadata quality, and retriever configuration strongly influence answer quality. Hybrid retrieval (keyword + vector) often helps when exact identifiers matter (for example SKUs, codes, ticket IDs). Reranking can improve relevance, but usually adds latency and cost. Evaluation should separate retrieval quality from response quality so you can diagnose whether failures come from "bad context" or "bad answer synthesis."

## Why This Matters In Databricks

- Core certification focus: performant RAG apps using Databricks-native tools
- Databricks provides integrated ingestion, indexing, serving, evaluation, and governance
- Many questions hinge on "what to tune first" when retrieval quality drops

## Core Components And How They Connect

- **Parsing**: extract usable text/structure from PDFs/docs (`ai_parse_document` can help)
- **Chunking**: split documents into retrieval units with overlap and metadata
- **Embeddings**: encode chunks into vectors
- **Vector index**: store vectors + metadata for ANN/hybrid search
- **Retriever**: fetch top-k candidates; may apply filters and reranking
- **Generator**: LLM composes response from user query + retrieved context
- **Evaluation/monitoring**: assess answer quality, grounding, relevance, cost, latency

## When To Use It

- Answers require proprietary or frequently updated knowledge
- You need citations and auditable source grounding
- Prompt-only solutions hallucinate or miss organization-specific facts

## Common Mistakes Or Confusions

- Overfocusing on model size while retrieval quality is poor
- Chunk sizes too large (noise) or too small (missing context)
- Missing metadata filters for tenant/product/region scoping
- Confusing "answer relevance" with "retrieval relevance"
- Skipping deduplication and polluting top-k with near-identical chunks
- Ignoring context-rot patterns ("lost in the middle" and context poisoning)

## Typical Exam-Style Decision Points

- Hybrid retrieval vs pure vector search when exact terms are critical
- Reranking on/off based on latency budget and quality target
- Databricks-managed vs self-managed embeddings in Vector Search
- Whether to add evaluation labels (`expected_response`/facts) now or later
- When strict grounding instructions should force "I do not have that information"

## Small Example Scenario

Your HR assistant answers policy questions but often returns irrelevant sections. You add metadata (policy type, country, effective date), switch to hybrid retrieval, and introduce reranking only for ambiguous prompts. Quality improves with a moderate latency increase.

## Memory Anchors

- **RAG failure triage: retrieve -> augment -> generate**
- **If retrieval is wrong, generation cannot fully recover**
- **Metadata + chunking quality often beat brute-force bigger models**
- **Evaluate retrieval and response separately**
- **Context is a budget: every extra chunk has quality/latency cost**

## Related Notes

- [01 - Delta Lake](./01-delta-lake.md)
- [03 - Model Governance](./03-model-governance.md)
- [04 - Supporting Tools](./04-supporting-tools.md)
- [Glossary](./glossary.md)
