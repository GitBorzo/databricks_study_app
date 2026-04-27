# 01 - Delta Lake

## Plain-English Overview

Delta Lake is Databricks' default table format and the storage foundation of the lakehouse. It extends Parquet with a transaction log that tracks table changes as versions. That log enables ACID transactions, reliable concurrent writes, and time travel to older versions. In practice, this means batch and streaming jobs can read and write the same data with fewer consistency problems. Delta also enforces schema on write so broken or unexpected data is less likely to silently enter production tables. Features such as `MERGE`, Change Data Feed (CDF), and `OPTIMIZE` make it easier to build incremental pipelines and high-performance query patterns. Databricks recommends avoiding direct manipulation of Delta files because table correctness depends on managed metadata updates. For exam scenarios, Delta is often the "safe default" unless a question explicitly requires another format.

## Why This Matters In Databricks

- Most upstream ingestion and downstream GenAI/RAG features assume reliable Delta tables
- Vector Search and many governance workflows depend on Unity Catalog + Delta-backed assets
- Streaming + batch unification is a recurring architecture choice in exam questions

## Core Components And How They Connect

- **Data files + transaction log (`_delta_log`)**: log defines authoritative table state
- **ACID + optimistic concurrency**: protects correctness when multiple writers update data
- **Schema enforcement/evolution**: blocks incompatible writes or allows controlled evolution
- **CDF**: emits row-level changes for incremental consumers
- **Optimization features**: data skipping, file layout tuning, liquid clustering, `VACUUM`

## When To Use It

- Incremental ingestion pipelines (especially with Auto Loader/Lakeflow)
- Workloads needing upserts and deletes (`MERGE`)
- Pipelines where reproducibility/time-travel debugging is important
- Shared lakehouse data that needs governance + lineage

## Common Mistakes Or Confusions

- Treating Delta as "just Parquet" and editing files directly (can corrupt table state)
- Assuming schema evolution should always be automatic
- Running `VACUUM` too aggressively and breaking time-travel/debug workflows
- Confusing CDF with full table snapshots

## Typical Exam-Style Decision Points

- Choose Delta + CDF when downstream consumers need incremental changes
- Choose `MERGE` instead of full overwrite when updating subsets of records
- Prefer managed Unity Catalog Delta tables for stronger governance defaults
- Use optimization/layout tuning when query latency is a bottleneck

## Small Example Scenario

You ingest product docs daily and build a retrieval corpus for a chatbot. New files and edits arrive continuously. Delta + Auto Loader writes to a bronze table, transformations create clean silver chunks, and CDF feeds re-index jobs so only changed chunks are re-embedded.

## Memory Anchors

- **Delta = Parquet + log + guarantees**
- **CDF = incremental change stream**
- **`MERGE` = selective upsert/delete**
- **Time travel = debugging + rollback confidence**

## Related Notes

- [02 - RAG Patterns](./02-rag-patterns.md)
- [03 - Model Governance](./03-model-governance.md)
- [04 - Supporting Tools](./04-supporting-tools.md)
- [Glossary](./glossary.md)
