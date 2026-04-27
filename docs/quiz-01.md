# Quiz 01

## Questions

1. A team wants reliable concurrent writes and rollback capability in a lakehouse table. Which choice best fits?  
   A) Plain Parquet table  
   B) Delta Lake table  
   C) CSV in volume  
   D) JSON in DBFS

2. A RAG system retrieves poor evidence. Which metric is most direct for this issue?  
   A) Output fluency  
   B) Context precision  
   C) Token count  
   D) Safety

3. Which step comes immediately before generation in classic RAG flow?  
   A) Augmentation  
   B) Model registration  
   C) CDF sync  
   D) Alias assignment

4. A model consumer should not change code each time a new model version is approved. Use:  
   A) Version pin by integer only  
   B) Model alias  
   C) Catalog rename  
   D) Endpoint recreation

5. Which Databricks feature is purpose-built for semantic vector retrieval?  
   A) Lakeflow Jobs  
   B) Vector Search  
   C) Catalog Explorer  
   D) Delta Sharing

6. You need parser output from PDFs in SQL/pipeline contexts. Best starting feature?  
   A) `ai_parse_document`  
   B) `OPTIMIZE`  
   C) `VACUUM`  
   D) `COPY INTO`

7. Which UC privilege combination is most relevant for registering a new model?  
   A) `DROP TABLE` and `ALTER SCHEMA`  
   B) `USE CATALOG`, `USE SCHEMA`, and `CREATE MODEL`  
   C) `EXECUTE` only  
   D) `SELECT` only

8. If response is on-topic but factually wrong vs known truth, which metric likely fails?  
   A) Answer relevancy  
   B) Correctness  
   C) Context recall  
   D) Latency

9. Why use Auto Loader with incremental ingestion?  
   A) It only supports batch overwrite  
   B) It scales cloud file discovery with streaming semantics  
   C) It replaces Unity Catalog  
   D) It disables schema handling

10. Knowledge Assistant is primarily intended to:  
    A) Replace Delta Lake ACID behavior  
    B) Build and iterate citation-based document chat agents  
    C) Create metastore bindings  
    D) Train embedding models from scratch

## Answer Key

1) **B** - Delta provides ACID and versioned history.  
2) **B** - Context precision targets retrieval relevance/ranking quality.  
3) **A** - Retrieved context is combined with the prompt in augmentation.  
4) **B** - Aliases provide stable references independent of version numbers.  
5) **B** - Vector Search is the Databricks-native semantic retrieval service.  
6) **A** - `ai_parse_document` handles document parsing for AI workflows.  
7) **B** - These are core prerequisites for UC model registration.  
8) **B** - Correctness compares against expected facts/ground truth.  
9) **B** - Auto Loader is designed for scalable incremental ingestion.  
10) **B** - Knowledge Assistant is a managed document-grounded agent workflow.
