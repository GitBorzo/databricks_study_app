# 04 - Supporting Tools

## Plain-English Overview

Databricks GenAI solutions are usually not one tool but a chain of supporting capabilities. Vector Search handles semantic retrieval and can combine keyword + vector search. AI Functions such as `ai_parse_document` and `ai_prep_search` help convert raw content into retrieval-ready form. Lakeflow Spark Declarative Pipelines and Auto Loader keep ingestion incremental and production-friendly. Model Serving exposes models/agents as endpoints and can log inference data for monitoring. Inference tables and MLflow evaluation help diagnose quality, latency, and cost regressions over time. Knowledge Assistant (Agent Bricks) provides a managed way to build document-grounded chat agents with citations and feedback loops. Your local exam-prep notes also stress objective-led tool selection across Agent Framework, AI Gateway, and multi-tool orchestration choices. In exam questions, tool choice often depends on operational constraints: speed to launch, governance requirements, and latency budget.

## Why This Matters In Databricks

- You are expected to pick the right Databricks-native component for each stage
- Most architectural mistakes come from wrong sequencing, not isolated tool misuse
- Good answers map pipeline design to quality, latency, cost, and governance outcomes

## Core Components And How They Connect

- **Auto Loader + Lakeflow SDP**: incremental ingest from cloud/object storage to Delta
- **AI Functions**: parse/enrich text at scale in SQL or pipelines
- **Vector Search**: index + retrieve vectors (managed or self-managed embeddings)
- **Agent Framework**: compose retrievers, prompts, tools, and control logic for agentic apps
- **Model Serving**: online inference endpoints for models/agents
- **Inference tables + monitoring**: operational + quality signals for feedback loops
- **AI Gateway**: centralized controls/observability for served AI interactions
- **Knowledge Assistant**: managed document chatbot with citations and expert feedback

## When To Use It

- Need quick POC with governed path to production
- Need continuous ingestion and periodic index sync
- Need to inspect runtime behavior (request/response traces, latency, failures)

## Common Mistakes Or Confusions

- Ignoring endpoint/index scaling mode when estimating latency/cost
- Enabling features without checking preview/legacy status (for example inference table variants)
- Forgetting to re-sync knowledge sources after source updates
- Assuming row/column ACL behavior applies identically to every GenAI component

## Typical Exam-Style Decision Points

- Standard vs storage-optimized Vector Search endpoint
- Managed embeddings vs self-managed embeddings
- AI Function pipeline parsing vs custom parser stack
- Legacy inference tables vs AI Gateway-enabled inference tables
- Manual custom RAG stack vs managed Knowledge Assistant
- Single-agent chains vs supervisor/multi-agent routing patterns

## Small Example Scenario

A support team needs fast rollout of a citation-based chatbot over product PDFs. They ingest files to UC volumes, parse + chunk using AI-assisted pipeline steps, create a Vector Search index, and deploy via Knowledge Assistant endpoint. They monitor quality drift with evaluation metrics and adjust chunking/reranking.

## Memory Anchors

- **Pipeline first, model second**
- **Retrieval quality drives response quality**
- **Monitoring closes the loop**
- **Governance must be designed in, not added later**

## Related Notes

- [01 - Delta Lake](./01-delta-lake.md)
- [02 - RAG Patterns](./02-rag-patterns.md)
- [03 - Model Governance](./03-model-governance.md)
- [Glossary](./glossary.md)
