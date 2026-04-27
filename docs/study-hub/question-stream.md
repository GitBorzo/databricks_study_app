# Never-Ending Exam Question Stream

Use this as a continuous bank of hard, exam-style multiple choice questions.

## Format Rules

- Style mirrors your local objective-led scenario format.
- Unless stated otherwise, select **ONE** answer.
- For "Select TWO" questions, exactly two options are correct.
- Answer key is at the end of each round.

---

## Round 001 (Hard)

### Question 1
**Objective:** Design retrieval systems using advanced chunking strategies  
A team stores long compliance manuals with nested headings and cross-references. Retrieval has high recall but low answer faithfulness due to loosely connected chunk matches. Which change is MOST likely to improve final answer grounding?

A. Increase chunk overlap to 95% across all sections  
B. Apply structure-aware chunking and include section-path metadata in retrieval filters  
C. Remove metadata and rely only on semantic similarity  
D. Increase model temperature to improve citation diversity

### Question 2
**Objective:** Configure vector search for latency/cost/scale trade-offs  
An application indexes 900M vectors at 768 dimensions and refreshes daily in large batches. Query latency can tolerate a modest increase if indexing throughput improves significantly. Which setup is MOST appropriate?

A. Standard endpoint with frequent manual full rebuilds  
B. Storage-optimized endpoint with triggered sync design  
C. Direct vector access index with notebook-only updates  
D. Standard endpoint with no indexing strategy change

### Question 3
**Objective:** Differentiate retrieval-quality and response-quality failure modes  
Evaluation shows high answer relevancy, low correctness, and moderate retrieval relevance. Which diagnosis is BEST?

A. The app is off-topic and retrieval is failing completely  
B. Responses are on-topic but often factually wrong versus expected truth  
C. Retrieval is perfect; evaluation labels are unnecessary  
D. The issue is only latency-related

### Question 4
**Objective:** Select governance controls for model lifecycle  
A team wants strict environment separation with minimal accidental promotion from staging to production. Which control combination is BEST?

A. Use one shared schema and rely on naming conventions  
B. Separate catalogs/schemas with privilege boundaries plus alias-based promotion workflow  
C. Register all models in workspace-local registry  
D. Grant broad admin access to reduce operational friction

### Question 5
**Objective:** Implement grounding guardrails in RAG  
A legal assistant must never infer beyond retrieved policy text. Which instruction pattern is MOST reliable?

A. "Provide your best answer, even when context is sparse."  
B. "Use only retrieved context; if missing, explicitly state insufficient information."  
C. "Prioritize fluency over strict citation."  
D. "Use external world knowledge to fill policy gaps."

### Question 6
**Objective:** Select the right retrieval architecture for mixed data types  
An HR assistant must answer policy questions from documents and salary-band questions from governed structured tables. Which architecture is BEST?

A. One document retriever for everything  
B. Router/supervisor pattern: document retriever for policies, structured tool for table-backed queries  
C. Fine-tune one LLM and disable all tools  
D. Convert structured tables to long text files

### Question 7
**Objective:** Diagnose context-window performance degradation  
A pipeline injects top-40 retrieved chunks for every query. Response quality becomes inconsistent and latency spikes. Which action is MOST appropriate first?

A. Expand to top-80 for better coverage  
B. Add reranking and reduce injected context to top 3-8 evidence chunks  
C. Remove chunk metadata fields  
D. Disable retrieval and use prompt engineering only

### Question 8
**Objective:** Choose model selection criteria under constraints  
For customer support summarization at very high QPS, the product requires low latency and strict cost ceilings while maintaining acceptable quality. Which selection strategy is BEST?

A. Always choose largest reasoning model available  
B. Choose model with best quality-latency-cost fit for summarization workload  
C. Choose model with longest context window regardless need  
D. Choose newest model by release date only

### Question 9
**Objective:** Apply Unity Catalog permissions for model use  
A consumer workload must load a UC-registered model by alias for batch inference. Which minimum access is typically required on the model object?

A. `CREATE MODEL`  
B. `EXECUTE` (plus required catalog/schema usage privileges)  
C. `APPLY TAG`  
D. `MANAGE`

### Question 10
**Objective:** Evaluate retrieval quality with the right metric family  
You are comparing two retrievers before changing any generation settings. Which metric pair is MOST relevant?

A. Fluency and toxicity  
B. Context precision and context recall  
C. Token count and latency  
D. Correctness and safety only

### Question 11
**Objective:** Build robust unstructured ingestion pipelines  
A team ingests PDFs from cloud storage and wants incremental, fault-tolerant processing with minimal custom state management. Which approach is BEST?

A. One-time batch script without checkpoints  
B. Auto Loader with pipeline-managed checkpointing pattern  
C. Manual API polling and local file cache  
D. Upload documents directly to model registry artifacts

### Question 12
**Objective:** Apply parsing strategy for complex documents  
Extraction quality drops on multi-column reports containing figures and tables. Which improvement is MOST appropriate?

A. Regex-only parser over raw binary  
B. Use document parsing pipeline with layout-aware parsing (`ai_parse_document`-style approach)  
C. Increase retrieval top-k only  
D. Skip parsing and embed raw files

### Question 13 (Select TWO)
**Objective:** Identify likely root causes of low faithfulness  
Which TWO conditions are most likely to reduce faithfulness?

A. Retrieved context includes conflicting/outdated chunks  
B. Strict grounding instructions are enforced  
C. Reranking removes weak candidates before prompting  
D. Prompt allows model to answer beyond provided context

### Question 14
**Objective:** Distinguish model registry from deployment interfaces  
Which statement is MOST accurate?

A. Model registry and serving endpoint are the same object  
B. Registry governs lifecycle/versioning; serving exposes runtime inference interface  
C. Serving replaces need for model lineage  
D. Registry exists only for classical ML, not GenAI apps

### Question 15
**Objective:** Optimize retrieval with metadata-aware design  
Users ask "current refund rules in Germany." The system frequently cites old global policy sections. Which fix is BEST?

A. Increase generation max tokens  
B. Add metadata filters (region and effective date) before final retrieval  
C. Disable filtering to maximize context variety  
D. Force deterministic decoding only

### Question 16
**Objective:** Choose evaluation mode across lifecycle phases  
Which statement BEST describes offline evaluation vs production monitoring?

A. Offline evaluation requires live traffic only  
B. Monitoring cannot include quality signals  
C. Offline evaluation validates on test/eval data; monitoring tracks live quality/latency/cost drift  
D. Both are interchangeable terms

### Question 17
**Objective:** Apply alias-based deployment control  
A production app uses `models:/prod.ml_team.agent@Champion`. Why is this pattern preferred?

A. It guarantees zero latency  
B. It decouples consumers from fixed version numbers during controlled promotion  
C. It bypasses UC permissions checks  
D. It removes need for evaluation

### Question 18 (Select TWO)
**Objective:** Identify anti-patterns in RAG data preparation  
Which TWO are anti-patterns that commonly hurt retrieval quality?

A. Keeping repetitive boilerplate headers/footers in every chunk  
B. Deduplicating near-identical documents  
C. Chunking solely by arbitrary size with no structure checks  
D. Capturing source metadata for filtering

### Question 19
**Objective:** Select retrieval strategy for exact identifiers  
Users frequently ask with precise asset IDs and error codes that embeddings alone often miss. Which retrieval strategy is MOST suitable?

A. Pure semantic search only  
B. Hybrid keyword-similarity retrieval  
C. Generative-only no retrieval  
D. Randomized candidate sampling

### Question 20
**Objective:** Apply least-privilege design for served GenAI systems  
A served application needs access to one vector index and one model endpoint. Security requires strict boundaries. Which design is BEST?

A. Workspace admin access for all users  
B. Grant narrowly scoped permissions to required principals/resources only  
C. Hardcode PAT in prompt template  
D. Disable governance controls for faster rollout

### Question 21
**Objective:** Detect when retrieval, not generation, is the bottleneck  
Answer correctness is poor, but manual review shows generated text is coherent and well formatted. Retrieved evidence is often irrelevant. What should be tuned first?

A. Response post-processor style rules  
B. Retriever settings (query formulation, filtering, top-k, reranking)  
C. Output language model temperature only  
D. UI layout

### Question 22
**Objective:** Choose schema strategy for governed serving logs  
A team enables inference tables for endpoint debugging and then edits the payload schema manually. What is the primary risk?

A. Better compatibility with all future endpoints  
B. Auto-capture can fail or become unreliable  
C. Immediate model retraining  
D. Automatic query acceleration

### Question 23
**Objective:** Select robust architecture for incremental re-indexing  
You need to update only changed chunks after document edits. Which design is MOST appropriate?

A. Full re-embed and full re-index on every run  
B. Change-aware flow using Delta change tracking and targeted re-embedding/index updates  
C. No persistence of source versions  
D. Manual copy-paste refresh

### Question 24
**Objective:** Manage cost without quality collapse  
A team reduced cost by sharply shrinking context size; now response completeness dropped. Which next step is BEST?

A. Revert to maximum context for every query  
B. Use reranked targeted context and tune chunking/metadata to raise evidence density  
C. Disable retrieval entirely  
D. Increase temperature

### Question 25
**Objective:** Select tooling for managed document chatbot iteration  
A product team wants a governed document chatbot with citations and SME feedback loops, with minimal custom backend code. Which option is MOST appropriate?

A. Knowledge Assistant-style managed workflow  
B. Custom training pipeline from scratch only  
C. BI dashboard templates only  
D. Local notebooks without endpoint deployment

---

## Round 001 Answer Key

1) B  
2) B  
3) B  
4) B  
5) B  
6) B  
7) B  
8) B  
9) B  
10) B  
11) B  
12) B  
13) A, D  
14) B  
15) B  
16) C  
17) B  
18) A, C  
19) B  
20) B  
21) B  
22) B  
23) B  
24) B  
25) A

---

## Round 002 (Hard)

### Question 1
**Objective:** Choose retrieval controls for multi-tenant safety  
An internal assistant serves multiple business units, and responses must only use tenant-authorized content. Which design is MOST appropriate?

A. No retrieval filters; rely on prompt instructions only  
B. Tenant-scoped metadata filters in retrieval plus strict grounding instruction  
C. Use larger context windows to reduce filtering need  
D. Disable citations to avoid leakage

### Question 2
**Objective:** Select parsing strategy for heterogeneous files  
Your corpus includes PDFs, PPTX, DOCX, and scanned image attachments. You need a scalable parsing approach inside Databricks workflows. Which option is BEST?

A. Manually parse each format with separate custom scripts only  
B. Use AI Functions-driven parsing flow with governed storage and incremental processing  
C. Skip parsing and embed binaries directly  
D. Convert everything to plain text manually in local tools

### Question 3
**Objective:** Diagnose retrieval insufficiency  
Users ask detailed policy exceptions; responses are concise but miss critical caveats despite on-topic wording. Which metric is most likely low?

A. Answer relevancy  
B. Context recall  
C. Fluency  
D. Token efficiency

### Question 4
**Objective:** Select serving observability strategy  
A team needs request/response diagnostics and ongoing quality drift checks in production. Which combination is MOST complete?

A. Endpoint uptime metric only  
B. Inference logging plus evaluation/monitoring metrics pipeline  
C. Offline eval once at launch only  
D. Manual spot-checking with no logs

### Question 5
**Objective:** Determine best model promotion approach  
A regulated org requires approvals before production model changes, but consumers must not edit code per release. Which mechanism is BEST?

A. Hardcode version numbers in every consumer  
B. Approval workflow plus alias reassignment on approved versions  
C. Replace registry with notebook checkpoints  
D. Disable governance to reduce friction

### Question 6
**Objective:** Handle retrieval noise under latency constraints  
Top-20 retrieval returns many loosely related chunks. Latency budget is strict. What is the BEST first change?

A. Increase top-k to 60  
B. Add reranking and reduce final injected chunk count  
C. Disable metadata  
D. Increase generation temperature

### Question 7
**Objective:** Choose Delta strategy for incremental pipelines  
A source document table updates continuously and downstream embedding jobs must process only changed rows. Which approach is MOST suitable?

A. Daily full table overwrite and full re-embedding  
B. Change-aware incremental flow using Delta change tracking patterns  
C. Keep data in CSV snapshots only  
D. Run retrieval directly on raw file names

### Question 8
**Objective:** Distinguish role of UC in GenAI architecture  
Which statement is MOST accurate?

A. UC governs only structured SQL tables  
B. UC can govern data and AI assets, including models and indexes  
C. UC is optional for any enterprise governance scenario  
D. UC removes need for model serving permissions

### Question 9
**Objective:** Select failure diagnosis sequence  
A RAG app fails correctness checks. Which troubleshooting order is MOST effective?

A. Tune output style, then UI theme, then filters  
B. Validate retrieval evidence first, then augmentation, then generation behavior  
C. Increase max output tokens first  
D. Replace embedding model randomly

### Question 10
**Objective:** Optimize chunk strategy for legal documents  
Clauses reference definitions several sections earlier; fixed-size chunks reduce answer completeness. Which strategy is BEST?

A. Zero-overlap fixed-size chunks  
B. Structure-aware chunking with moderate overlap and section metadata  
C. One chunk per full document  
D. No chunk metadata stored

### Question 11
**Objective:** Select secure credentialing pattern  
A production retriever service calls Vector Search endpoints. Which authentication approach is preferred?

A. Personal tokens embedded in prompt files  
B. Service principal-based credentials with least privilege  
C. Shared admin credential across all apps  
D. Anonymous endpoint access

### Question 12
**Objective:** Choose evaluation method for ground-truth comparisons  
You have expected answers for a curated test set and want factual match scoring. Which metric family is MOST direct?

A. Correctness-style judge with expectations  
B. Latency-only metrics  
C. Safety-only metrics  
D. Throughput-only metrics

### Question 13 (Select TWO)
**Objective:** Identify context-engineering anti-patterns  
Which TWO patterns most often hurt production RAG quality?

A. Injecting large unranked context blocks indiscriminately  
B. Applying metadata filters aligned to query constraints  
C. Allowing model to answer beyond retrieved evidence  
D. Using explicit "insufficient information" fallback behavior

### Question 14
**Objective:** Select architecture for mixed retrieval + actions  
An assistant must retrieve policy text and, if approved, submit a workflow action in a backend system. Which design is BEST?

A. Single LLM call with no tool interfaces  
B. Agent chain with retrieval tool and action tool under explicit tool policy  
C. Retrieval-only chatbot with no action path  
D. Replace backend action with generated text output

### Question 15
**Objective:** Configure retrieval for identifier-heavy queries  
Users frequently search by invoice IDs and exact contract codes. Which retrieval mode is MOST appropriate?

A. Pure semantic retrieval with no keyword signals  
B. Hybrid keyword-similarity retrieval with filters  
C. Randomized retrieval for diversity  
D. Generation without retrieval

### Question 16
**Objective:** Design quality-cost monitoring loop  
Leadership wants weekly quality reporting with cost trend visibility. What should be implemented?

A. One-time benchmark only  
B. Scheduled evaluation and monitoring dashboards including quality + token/latency trends  
C. Manual anecdotal review only  
D. Remove evaluation to reduce noise

### Question 17
**Objective:** Apply least-privilege endpoint/resource access  
A served app needs read access to one index in `prod.support` and no other domains. Which policy is BEST?

A. Grant workspace-wide index management  
B. Grant narrowly scoped read/query privileges to required principal only  
C. Share admin token among all teams  
D. Remove UC enforcement for endpoint speed

### Question 18
**Objective:** Prevent stale-answer issues  
A policy corpus updates weekly, but users keep receiving answers based on older versions. Which fix is MOST direct?

A. Increase answer verbosity  
B. Ensure ingestion/index sync process captures updates and retrieval filters favor effective-date metadata  
C. Increase context window only  
D. Disable reranking

### Question 19
**Objective:** Select serving and registry responsibilities  
Which statement is MOST accurate?

A. Registry handles online autoscaling and request routing  
B. Serving endpoints handle online inference; registry manages versions/aliases/metadata  
C. Registry replaces evaluation tooling  
D. Serving removes the need for model lineage

### Question 20
**Objective:** Decide first remediation for low faithfulness  
Responses frequently include claims not supported by cited chunks. Which first remediation is BEST?

A. Raise temperature to increase creativity  
B. Tighten grounding instructions and reduce noisy context via reranked evidence  
C. Remove citation requirement  
D. Ignore and prioritize latency

### Question 21 (Select TWO)
**Objective:** Identify signs that retrieval is the primary bottleneck  
Which TWO observations most strongly indicate retrieval is the main problem?

A. Retrieved chunks are often irrelevant to query intent  
B. Responses are ungrammatical despite correct evidence  
C. Correct answers appear when manually supplying better context  
D. UI render time increases after theme changes

### Question 22
**Objective:** Select robust ingestion-governance pattern  
A team wants full lineage from raw document to chunk table under governance controls. Which layout is BEST?

A. Raw files in unmanaged local folders only  
B. Raw files in UC volumes, parsed/chunked outputs in Delta tables under UC  
C. Only vector index storage, no intermediate tables  
D. Raw files stored inside prompt templates

### Question 23
**Objective:** Tune context window economics  
Costs are rising due to very large prompts. Quality must stay stable. Which optimization is MOST appropriate?

A. Retrieve fewer but higher-quality chunks via reranking and metadata constraints  
B. Disable all retrieval and rely on pretrained memory  
C. Increase top-k for every query  
D. Force max output tokens to highest value

### Question 24
**Objective:** Choose best fallback behavior for uncertain queries  
For safety-critical assistant outputs, what fallback behavior is MOST appropriate when evidence is insufficient?

A. Infer likely answer from general web knowledge  
B. Return explicit "insufficient information" and request clarifying input/source  
C. Generate answer with low-confidence disclaimer only  
D. Return random nearest chunk summary

### Question 25
**Objective:** Select managed solution for fast, governed rollout  
A team needs rapid launch of a document Q&A assistant with citations, source sync, and SME improvement loops. Which choice is BEST?

A. Knowledge Assistant workflow  
B. Spreadsheet-based FAQ bot  
C. Custom from-scratch infra with no managed services  
D. BI dashboard with no retrieval pipeline

---

## Round 002 Answer Key

1) B  
2) B  
3) B  
4) B  
5) B  
6) B  
7) B  
8) B  
9) B  
10) B  
11) B  
12) A  
13) A, C  
14) B  
15) B  
16) B  
17) B  
18) B  
19) B  
20) B  
21) A, C  
22) B  
23) A  
24) B  
25) A

---

## Continuation Protocol

When you want more, request: **"Next round"**.  
I will append `Round 003`, `Round 004`, and so on indefinitely, keeping difficulty high and format consistent.
