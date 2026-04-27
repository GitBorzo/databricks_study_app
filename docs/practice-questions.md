# Practice Questions

## Easy (15)

1) **Multiple choice**  
Which Delta Lake feature enables querying prior table states?  
A. Liquid clustering  
B. Time travel via transaction log versions  
C. Vector index snapshots  
D. Workspace catalog binding  
**Answer:** B  
**Why:** Delta writes create new versions tracked in `_delta_log`, enabling historical reads.  
**Source:** [01 - Delta Lake](./01-delta-lake.md), https://docs.databricks.com/aws/en/delta/

2) **Short answer**  
What is the core purpose of retrieval in RAG?  
**Answer:** To fetch relevant supporting context before generation.  
**Why:** Without relevant context, the generator is likely to hallucinate or miss domain facts.  
**Source:** [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/generative-ai/retrieval-augmented-generation

3) **Multiple choice**  
Which statement about Unity Catalog is most accurate?  
A. It only governs SQL tables  
B. It governs data and AI assets, including models  
C. It replaces MLflow entirely  
D. It is only for one workspace  
**Answer:** B  
**Why:** UC provides governance for tables, files, and AI assets across attached workspaces.  
**Source:** [03 - Model Governance](./03-model-governance.md), https://docs.databricks.com/aws/en/data-governance/unity-catalog/

4) **Short answer**  
Why are model aliases useful?  
**Answer:** They provide stable names (for example `Champion`) while underlying versions change.  
**Why:** Consumers avoid hardcoded version updates.  
**Source:** [03 - Model Governance](./03-model-governance.md), https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/

5) **Multiple choice**  
`ai_parse_document` is primarily used to:  
A. Serve models online  
B. Parse unstructured documents into structured output  
C. Build vector endpoints  
D. Assign UC permissions  
**Answer:** B  
**Why:** It is an AI Function for intelligent document parsing.  
**Source:** [04 - Supporting Tools](./04-supporting-tools.md), https://docs.databricks.com/aws/en/large-language-models/ai-functions#ai_parse_document

6) **Short answer**  
What does context precision measure?  
**Answer:** Whether retrieved items are relevant and ranked above irrelevant ones.  
**Why:** It diagnoses retriever ranking quality.  
**Source:** [Glossary](./glossary.md), https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/third-party-scorers/deep-eval

7) **Multiple choice**  
Which tool is explicitly designed for vector retrieval on Databricks?  
A. Auto Loader  
B. Model Serving  
C. Mosaic AI Vector Search  
D. Catalog Explorer  
**Answer:** C  
**Why:** Vector Search provides indexed semantic/hybrid retrieval.  
**Source:** [04 - Supporting Tools](./04-supporting-tools.md), https://docs.databricks.com/aws/en/vector-search/vector-search

8) **Short answer**  
What is one key benefit of Auto Loader over simple file streaming reads?  
**Answer:** Scalable file discovery with checkpointed exactly-once ingestion behavior.  
**Why:** It is built for high-volume incremental cloud ingestion.  
**Source:** [04 - Supporting Tools](./04-supporting-tools.md), https://docs.databricks.com/aws/en/ingestion/auto-loader/

9) **Multiple choice**  
Which metric usually requires ground truth?  
A. Faithfulness  
B. Correctness  
C. Relevance to query  
D. Retrieval relevance  
**Answer:** B  
**Why:** Correctness compares output with expected facts/expected response.  
**Source:** [Glossary](./glossary.md), https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/concepts/judges/is_correct

10) **Short answer**  
What does CDF stand for and why is it useful?  
**Answer:** Change Data Feed; it exposes row-level changes for incremental downstream processing.  
**Why:** Useful for re-indexing only changed content.  
**Source:** [01 - Delta Lake](./01-delta-lake.md), https://docs.databricks.com/aws/en/delta/

11) **Multiple choice**  
Knowledge Assistant is best described as:  
A. A Delta optimization command  
B. A managed document-grounded chatbot builder  
C. A schema inference library  
D. A UC metastore migration tool  
**Answer:** B  
**Why:** It creates citation-capable chat agents over docs/indexes.  
**Source:** [04 - Supporting Tools](./04-supporting-tools.md), https://docs.databricks.com/aws/en/generative-ai/agent-bricks/knowledge-assistant

12) **Short answer**  
What does schema enforcement prevent?  
**Answer:** Writing incompatible data shapes into a table.  
**Why:** It protects downstream reliability.  
**Source:** [01 - Delta Lake](./01-delta-lake.md), https://docs.databricks.com/aws/en/delta/

13) **Multiple choice**  
In RAG, augmentation means:  
A. Indexing data  
B. Combining user query with retrieved context for prompting  
C. Deploying serving endpoint  
D. Monitoring latency  
**Answer:** B  
**Why:** Augmentation is prompt construction with evidence.  
**Source:** [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/generative-ai/retrieval-augmented-generation

14) **Short answer**  
Where are vector search indexes governed?  
**Answer:** In Unity Catalog.  
**Why:** They are UC-governed assets.  
**Source:** [04 - Supporting Tools](./04-supporting-tools.md), https://docs.databricks.com/aws/en/vector-search/vector-search

15) **Multiple choice**  
Which exam area percentage is highest in the certification summary page?  
A. Governance  
B. Design Applications  
C. Application Development  
D. Data Preparation  
**Answer:** C  
**Why:** Application Development is listed as 30%.  
**Source:** https://www.databricks.com/learn/certification/genai-engineer-associate

## Medium (15)

16) **Scenario (multiple choice)**  
Your RAG app misses exact part numbers but answers generic questions fine. First adjustment?  
A. Increase model temperature  
B. Add hybrid keyword-similarity retrieval  
C. Disable metadata filters  
D. Remove chunk overlap  
**Answer:** B  
**Why:** Exact identifiers are often better handled with keyword + vector hybrid retrieval.  
**Source:** [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/vector-search/vector-search

17) **Scenario (short answer)**  
You need cross-workspace model reuse with centralized permissions. What setup is expected?  
**Answer:** Register models in Unity Catalog and use UC privileges/aliases.  
**Why:** UC-backed registry supports cross-workspace governance in attached metastores.  
**Source:** [03 - Model Governance](./03-model-governance.md), https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/

18) **Multiple choice**  
Which is the best reason to keep raw source data before chunking?  
A. Faster endpoint startup  
B. Better colorized notebooks  
C. Traceability/auditing and reproducible reprocessing  
D. Reduced token limits  
**Answer:** C  
**Why:** Databricks guidance recommends preserving raw source for traceability and reprocessing.  
**Source:** https://docs.databricks.com/aws/en/generative-ai/tutorials/ai-cookbook/quality-data-pipeline-rag

19) **Scenario (multiple choice)**  
A team wants incremental ingestion from object storage with minimal custom state handling. Best option?  
A. Manual polling script with SQL inserts  
B. Auto Loader in Lakeflow SDP  
C. Daily overwrite job only  
D. Direct REST writes to serving endpoint  
**Answer:** B  
**Why:** Auto Loader + Lakeflow provides incremental ingestion and managed checkpointing patterns.  
**Source:** [04 - Supporting Tools](./04-supporting-tools.md), https://docs.databricks.com/aws/en/ingestion/auto-loader/

20) **Short answer**  
Why can answer relevancy be high while correctness is low?  
**Answer:** The answer can be on-topic but factually wrong against ground truth.  
**Why:** Relevancy and correctness evaluate different dimensions.  
**Source:** [Glossary](./glossary.md), https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/concepts/judges

21) **Scenario (multiple choice)**  
You want to swap production model versions without changing downstream code. Use:  
A. Catalog rename  
B. Model alias reassignment  
C. Endpoint deletion/recreation  
D. Table cloning  
**Answer:** B  
**Why:** Aliases decouple consumers from version numbers.  
**Source:** [03 - Model Governance](./03-model-governance.md), https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/

22) **Short answer**  
What is the purpose of metadata filters in retrieval?  
**Answer:** Narrow candidate context by attributes like region/product/time to improve relevance and governance alignment.  
**Why:** Filters reduce noisy retrieval and wrong-domain citations.  
**Source:** [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/vector-search/vector-search

23) **Scenario (multiple choice)**  
A model registration attempt fails with privilege errors. Most likely missing?  
A. `CREATE MODEL` on schema (plus `USE CATALOG`/`USE SCHEMA`)  
B. `SELECT` on endpoint logs  
C. `OPTIMIZE` permissions on payload table  
D. Notebook editor access only  
**Answer:** A  
**Why:** UC model registration requires those privileges.  
**Source:** [03 - Model Governance](./03-model-governance.md), https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/

24) **Scenario (short answer)**  
Retriever returns many near-duplicate chunks. One upstream pipeline fix?  
**Answer:** Add deduplication (for example MinHash-style approach) before indexing.  
**Why:** Duplicate-heavy corpora reduce retrieval diversity and quality.  
**Source:** https://docs.databricks.com/aws/en/generative-ai/tutorials/ai-cookbook/quality-data-pipeline-rag

25) **Multiple choice**  
Which endpoint type may offer larger vector capacity but slightly higher query latency?  
A. Standard endpoint  
B. Storage-optimized endpoint  
C. SQL warehouse endpoint  
D. Delta endpoint  
**Answer:** B  
**Why:** Storage-optimized endpoints target larger scale and faster indexing with slight latency increase.  
**Source:** https://docs.databricks.com/aws/en/vector-search/vector-search

26) **Short answer**  
What is one practical signal from inference tables for debugging?  
**Answer:** Request/response payloads with status codes and execution times.  
**Why:** It helps pinpoint failing inputs and performance issues.  
**Source:** https://docs.databricks.com/aws/en/machine-learning/model-serving/inference-tables

27) **Scenario (multiple choice)**  
You must parse PDFs and keep pipeline SQL-friendly for analysts. Best first tool?  
A. `ai_parse_document` in AI Functions workflows  
B. Handwritten OCR service wrapper only  
C. Disable parsing and embed raw binary  
D. Train custom parser model first  
**Answer:** A  
**Why:** AI Functions provide built-in parsing from SQL and pipeline contexts.  
**Source:** https://docs.databricks.com/aws/en/large-language-models/ai-functions#ai_parse_document

28) **Short answer**  
What does context recall diagnose in RAG evaluation?  
**Answer:** Whether retrieved context includes the necessary information to answer correctly.  
**Why:** Low recall suggests missing evidence, not necessarily bad generation.  
**Source:** [Glossary](./glossary.md), https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/third-party-scorers/deep-eval

29) **Scenario (multiple choice)**  
Your team needs quick document chatbot delivery with citations and SME feedback loops. Prefer:  
A. Build full custom orchestration from scratch first  
B. Knowledge Assistant  
C. Manual SQL UDF chain only  
D. Hive metastore + custom ACL scripts  
**Answer:** B  
**Why:** Knowledge Assistant is designed for this managed pattern.  
**Source:** https://docs.databricks.com/aws/en/generative-ai/agent-bricks/knowledge-assistant

30) **Short answer**  
Why separate retrieval metrics from response metrics?  
**Answer:** To isolate whether failures originate in context selection or answer synthesis.  
**Why:** Different remediation actions are needed for each failure type.  
**Source:** https://docs.databricks.com/en/generative-ai/tutorials/ai-cookbook/evaluate-assess-performance.html

## Hard (10)

31) **Scenario (applied)**  
A regulated team wants production and development data isolation, but still one central governance plane. Propose a UC control pattern.  
**Answer:** Use Unity Catalog with catalog/workspace binding and privilege boundaries per environment; keep shared metastore governance where appropriate.  
**Why:** Workspace-catalog binding supports environment-aware isolation while keeping centralized governance.  
**Source:** https://docs.databricks.com/aws/en/data-governance/unity-catalog/

32) **Multiple choice**  
In a RAG pipeline, which sequence best supports incremental re-indexing with minimal recompute?  
A. Parse -> Chunk -> Embed -> Index, then consume Delta CDF changes for updates  
B. Generate -> Retrieve -> Parse -> Index  
C. Index -> Parse -> Drop source  
D. Chunk -> Serve -> Evaluate only  
**Answer:** A  
**Why:** This sequence aligns with unstructured pipeline guidance and incremental update strategy.  
**Source:** [01 - Delta Lake](./01-delta-lake.md), [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/generative-ai/tutorials/ai-cookbook/quality-data-pipeline-rag

33) **Scenario (short answer)**  
Quality dropped after adding reranking and increasing top-k; latency budget also exceeded. What tuning direction is most defensible first?  
**Answer:** Reduce candidate set/top-k and apply reranking selectively (for ambiguous queries only), then re-measure precision/latency.  
**Why:** It addresses latency-cost pressure while preserving targeted quality gains.  
**Source:** [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/vector-search/vector-search

34) **Multiple choice**  
Which statement is most accurate about correctness vs faithfulness?  
A. Both always require ground truth  
B. Correctness can use expected facts; faithfulness checks consistency with retrieved context  
C. Faithfulness is only latency-based  
D. Correctness ignores expected response  
**Answer:** B  
**Why:** Correctness is ground-truth comparison; faithfulness checks grounding to context.  
**Source:** [Glossary](./glossary.md), https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/concepts/judges/is_correct, https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/third-party-scorers/deep-eval

35) **Scenario (applied)**  
You need to promote a validated staging model into prod without retraining due cost constraints. What UC/MLflow pattern fits?  
**Answer:** Copy model version across UC registered models and set production alias (for example `Champion`) after validation.  
**Why:** Databricks supports cross-environment promotion via model version copy + alias update.  
**Source:** https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/

36) **Multiple choice**  
A team uses serving inference tables and edits the payload table schema manually. Most likely outcome?  
A. Automatic schema harmonization  
B. Inference logging can fail/corrupt and may require new endpoint configuration  
C. Faster log delivery  
D. Automatic alias reassignment  
**Answer:** B  
**Why:** Inference table docs warn that schema/name changes can break auto-capture.  
**Source:** https://docs.databricks.com/aws/en/machine-learning/model-serving/inference-tables

37) **Scenario (short answer)**  
You have low context precision and high context recall. What does that imply?  
**Answer:** Retriever finds many necessary items but also returns substantial noise/irrelevant items.  
**Why:** Recall is coverage; precision is ranking/relevance cleanliness.  
**Source:** [Glossary](./glossary.md), https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/third-party-scorers/deep-eval

38) **Scenario (multiple choice)**  
You need managed chatbot setup over UC files, with source sync and collaborative quality tuning by SMEs. Which capability is essential?  
A. Delta `VACUUM`  
B. Knowledge Assistant examples/guidelines workflow  
C. SQL warehouse scaling only  
D. Workspace Model Registry legacy  
**Answer:** B  
**Why:** Knowledge Assistant supports source sync, examples, and guideline feedback loops.  
**Source:** https://docs.databricks.com/aws/en/generative-ai/agent-bricks/knowledge-assistant

39) **Scenario (applied short answer)**  
A retriever fails on country-specific policy questions despite good generic answers. Give two targeted fixes.  
**Answer:** Add metadata fields/filters (country, policy date/type) and tune chunking to keep policy sections semantically coherent.  
**Why:** This improves retrieval specificity and reduces cross-policy contamination.  
**Source:** [02 - RAG Patterns](./02-rag-patterns.md), https://docs.databricks.com/aws/en/generative-ai/tutorials/ai-cookbook/quality-data-pipeline-rag

40) **Multiple choice**  
You need UC-governed model lifecycle with broader MLflow 3 features and centralized tracking. Best baseline choice?  
A. Legacy workspace model registry  
B. UC model registry (`databricks-uc`) with MLflow tracking and aliases  
C. Notebook-local pickle files  
D. Standalone external registry only  
**Answer:** B  
**Why:** This aligns with Databricks recommendation for governance + lifecycle controls.  
**Source:** [03 - Model Governance](./03-model-governance.md), https://docs.databricks.com/aws/en/machine-learning/manage-model-lifecycle/, https://docs.databricks.com/aws/en/mlflow/
