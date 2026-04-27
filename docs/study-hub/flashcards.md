# Flashcards

## Delta Lake

**Q:** What makes Delta Lake different from plain Parquet?  
**A:** A transaction log adds ACID guarantees, schema checks, and versioned history.

**Q:** Why is CDF useful in GenAI pipelines?  
**A:** It lets downstream jobs process only changed rows for re-indexing/re-embedding.

**Q:** When should you prefer `MERGE` over overwrite?  
**A:** When you need selective updates/deletes without rewriting full tables.

**Q:** What risk comes from editing Delta files directly in storage?  
**A:** You can break table consistency because metadata/log state is bypassed.

**Q:** What is time travel mainly used for in practice?  
**A:** Debugging, reproducibility, and rollback to known-good table versions.

## RAG Patterns

**Q:** What are the three core RAG steps?  
**A:** Retrieval, augmentation, generation.

**Q:** If answers are fluent but wrong, what should you inspect first?  
**A:** Retrieval quality and retrieved context relevance.

**Q:** When is hybrid search especially helpful?  
**A:** When exact tokens (IDs, SKUs, codes) matter along with semantic meaning.

**Q:** Why add chunk overlap?  
**A:** To preserve context across chunk boundaries and reduce information loss.

**Q:** What is a typical reranking trade-off?  
**A:** Better relevance at the cost of added latency and compute.

## Model Governance

**Q:** Why use model aliases like `@Champion`?  
**A:** They provide stable references while versions change underneath.

**Q:** Which privileges are often needed to register UC models?  
**A:** `USE CATALOG`, `USE SCHEMA`, and `CREATE MODEL`.

**Q:** What does model lineage help with?  
**A:** Tracing model behavior back to source data and transformations.

**Q:** Why is UC model registry preferred over legacy workspace registry?  
**A:** Better centralized governance, cross-workspace visibility, and auditing.

**Q:** Does catalog name alone define deployment status?  
**A:** No, aliases/workflows manage deployment status; catalog mainly defines governance boundary.

## Supporting Tools

**Q:** What does Auto Loader add over basic file streaming reads?  
**A:** Scalable file discovery, schema evolution handling, and checkpointed exactly-once ingestion.

**Q:** What is `ai_parse_document` for?  
**A:** Parsing unstructured docs into structured content for downstream retrieval pipelines.

**Q:** What does Vector Search index from?  
**A:** A Delta table containing text/metadata and embeddings (managed or self-managed).

**Q:** Why enable inference tables?  
**A:** To capture request/response payloads for monitoring and debugging.

**Q:** Knowledge Assistant is best described as what?  
**A:** A managed way to build a citation-based chatbot over documents or vector indexes.

## Evaluation Metrics

**Q:** Difference between correctness and faithfulness?  
**A:** Correctness compares to ground truth; faithfulness checks consistency with provided context.

**Q:** What does answer relevancy measure?  
**A:** Whether the response addresses the user query.

**Q:** What does context precision measure?  
**A:** Whether retrieved items are mostly relevant and ranked well.

**Q:** What does context recall measure?  
**A:** Whether retrieval includes the necessary supporting information.

**Q:** Why track latency and token metrics with quality metrics?  
**A:** To optimize real-world trade-offs, not quality in isolation.
