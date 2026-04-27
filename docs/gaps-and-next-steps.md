# Gaps And Next Steps

## Current Gaps

- **Local material parse gap (partial):** Two local PDFs were incorporated, but the `.one` notebook file has not yet been exported/parsed.
- **Past conversation gap:** The provided Perplexity thread is private/inaccessible from tooling, so its question nuances were not directly extracted.
- **Hands-on gap:** No runnable workspace notebooks/labs/examples from your own projects were available to convert into "mistake-driven" revision notes.
- **Exam pattern gap:** Question style is inferred from certification scope + general Databricks exam patterns, not from your private historical question bank.
- **Version-sensitivity gap:** Some features are preview/legacy-transition (for example inference tables). Confirm your target exam release expectations.

## Where Local Resources Are Thin

- Material inside the `Databricks-Certified-Generative-AI-Engineer-Associate.one` file
- Real retrieval failure incidents and fixes from your environment
- Your own governance permission mistakes and model promotion workflows
- Practical latency/cost benchmarks for your preferred model + retriever settings
- Personal weak-topic history (for example topics repeatedly answered incorrectly)

## Top 5 High-Value Next Study Actions

1. **Export the `.one` file:** Export `Databricks-Certified-Generative-AI-Engineer-Associate.one` to PDF/Markdown, then I will integrate remaining personal notes.
2. **Run two timed mocks:** Complete [quiz-01](./quiz-01.md) and [quiz-02](./quiz-02.md) under 20 minutes each, then annotate every miss with root cause.
3. **Build one mini RAG pipeline:** Parse -> chunk -> embed -> index -> retrieve -> evaluate; record 3 failure cases and fixes in new notes.
4. **Practice governance commands:** Rehearse UC privilege scenarios (`USE CATALOG`, `USE SCHEMA`, `CREATE MODEL`, `EXECUTE`) and alias-based rollout decisions.
5. **Metric drill session:** For 10 failed outputs, classify each failure as retrieval precision, retrieval recall, faithfulness, correctness, or relevance.

## Needs Verification

- Exam content can evolve with product releases. Re-check official exam guide near your exam date.
- If your internal materials contradict a statement here, validate against current official docs and update this hub.
