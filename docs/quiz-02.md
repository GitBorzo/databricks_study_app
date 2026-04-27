# Quiz 02

## Questions

1. You need exact identifier matching and semantic relevance in retrieval. Best query mode?  
   A) Pure vector similarity only  
   B) Hybrid keyword + similarity search  
   C) Random chunk sampling  
   D) Full table scan only

2. Which statement about inference tables is most accurate?  
   A) They are only for notebook UI styling  
   B) They log request/response data for monitoring/debugging  
   C) They replace MLflow runs  
   D) They eliminate endpoint permissions

3. In UC, registered models are managed as a subtype of which securable category?  
   A) TABLE  
   B) FUNCTION  
   C) VOLUME  
   D) SHARE

4. If context recall is low, the most likely issue is:  
   A) Too many irrelevant chunks retrieved  
   B) Necessary evidence not retrieved  
   C) Grammar quality is poor  
   D) Endpoint ACL missing

5. Which architecture choice usually improves governance by default?  
   A) Managed UC tables/models with explicit privileges  
   B) Unregistered files and ad-hoc scripts  
   C) Workspace-only local artifacts  
   D) Anonymous public endpoints

6. A team wants minimal manual ops for document-grounded chatbot creation and iterative SME feedback. Best fit?  
   A) Knowledge Assistant  
   B) Delta clone command  
   C) DBFS root scripts  
   D) Warehouse auto-stop

7. Which is a typical quality-vs-latency trade-off?  
   A) Reranking disabled always improves quality  
   B) Reranking can improve quality but may increase latency  
   C) Chunk overlap always reduces latency  
   D) More filters always reduce cost and quality

8. Why keep raw ingested source before aggressive transformations?  
   A) For color coding tables  
   B) For lineage, auditability, and reproducible reprocessing  
   C) To disable schema checks  
   D) To bypass governance

9. Which metric explicitly evaluates grounding to retrieved context?  
   A) Faithfulness  
   B) Total token count  
   C) Throughput  
   D) Model alias

10. To expose a model or agent as a REST endpoint on Databricks, use:  
    A) Delta Sharing  
    B) Model Serving  
    C) Catalog Explorer  
    D) Auto Loader

## Answer Key

1) **B** - Hybrid search combines exact-term and semantic matching.  
2) **B** - Inference tables capture serving traffic details for operations/quality work.  
3) **B** - In UC, model permissions are managed via function securable behavior.  
4) **B** - Low recall indicates missing needed evidence in retrieval output.  
5) **A** - Managed UC assets align with centralized governance controls.  
6) **A** - Knowledge Assistant is designed for this managed lifecycle.  
7) **B** - Reranking often improves relevance but adds compute/latency.  
8) **B** - Raw retention supports traceability and reliable reprocessing.  
9) **A** - Faithfulness checks consistency of response with provided context.  
10) **B** - Model Serving hosts inference endpoints.
