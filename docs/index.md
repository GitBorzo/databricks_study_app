# Databricks GenAI Engineer Associate Study Hub

Compact revision hub for the Databricks Certified Generative AI Engineer Associate exam.

Web app wrapper available at `../study-hub-app/` (PWA, Android installable).

## What This Hub Covers

- Delta Lake foundations for reliable data + streaming pipelines
- RAG architecture and troubleshooting on Databricks
- Model governance with Unity Catalog + MLflow
- Supporting tools: Vector Search, Model Serving, AI Functions, Lakeflow, evaluation

## Recommended Study Order

1. [01 - Delta Lake](./01-delta-lake.md)
2. [02 - RAG Patterns](./02-rag-patterns.md)
3. [03 - Model Governance](./03-model-governance.md)
4. [04 - Supporting Tools](./04-supporting-tools.md)
5. [Glossary](./glossary.md)
6. [Flashcards](./flashcards.md)
7. [Practice Questions](./practice-questions.md)
8. [Quiz 01](./quiz-01.md)
9. [Quiz 02](./quiz-02.md)
10. [Never-Ending Question Stream](./question-stream.md)
11. [Gaps and Next Steps](./gaps-and-next-steps.md)
12. [Sources](./sources.md)

## Must Know For Exam

- Delta Lake transaction log, ACID, schema enforcement, CDF, time travel
- RAG sequence: retrieval -> augmentation -> generation
- Chunking + embedding choices and their trade-offs
- Vector Search index types, hybrid search, filtering, reranking
- Unity Catalog privileges (`USE CATALOG`, `USE SCHEMA`, `CREATE MODEL`, `EXECUTE`)
- MLflow + Unity Catalog model lifecycle and aliases (for example `@Champion`)
- Model Serving + inference tables + monitoring/evaluation metrics
- Cost vs latency trade-offs in retrieval depth, reranking, and model choice
- Context engineering concepts from your course notes (context rot, strict grounding, token budgets)

## Easy To Confuse

- `relevance_to_query` (answer relevance) vs retrieval relevance
- `faithfulness/groundedness` vs correctness (ground truth needed for correctness)
- Context precision vs context recall
- Managed vs external UC tables/volumes
- Legacy inference tables vs AI Gateway-enabled inference tables
- Structured Streaming directly vs Auto Loader + Lakeflow SDP
- Vector Search standard vs storage-optimized endpoints

## Weekly Review Checklist (Short)

- [ ] Re-read one topic note and rewrite its memory anchors from memory
- [ ] Do 10 flashcards from weak areas
- [ ] Attempt 5 medium + 3 hard practice questions
- [ ] Review 1 retrieval-failure scenario and explain root cause/fix
- [ ] Review 1 governance scenario (`GRANT`, model alias, serving access)
- [ ] Update [gaps-and-next-steps](./gaps-and-next-steps.md) after each mock quiz
