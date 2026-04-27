# 03 - Model Governance

## Plain-English Overview

Model governance on Databricks centers on Unity Catalog (UC) + MLflow, so model assets are managed with the same governance model as data assets. UC provides centralized permissions, lineage, discoverability, and cross-workspace access controls. MLflow tracks experiments and model metadata, while UC-backed model registry governs registration, promotion, and serving access. In MLflow 3, Unity Catalog model registry is the default (`databricks-uc`) in supported setups, which simplifies consistent lifecycle management. Model aliases (for example `Champion`) decouple deployment consumers from fixed version numbers. Governance is not only security; it also supports auditability, reproducibility, and controlled collaboration. For exam decisions, expect trade-offs between speed and guardrails (for example quick deployment vs privilege boundaries). A strong answer usually includes both technical workflow and permissions model.

## Why This Matters In Databricks

- Certification scope explicitly includes governance and deployment controls
- UC secures tables, models, volumes, and related AI assets under one model
- Production mistakes are often permission/model-lineage failures, not algorithm failures

## Core Components And How They Connect

- **Unity Catalog object model**: metastore -> catalog -> schema -> object
- **Model registry in UC**: registered models with versions, aliases, tags, descriptions
- **MLflow tracking + logged models**: metrics/params/artifacts linked to model versions
- **Lineage**: table-to-model visibility for debugging/compliance
- **Serving permissions**: model `EXECUTE` and workspace/service-level access controls

## When To Use It

- Any multi-team environment with shared models or regulated data
- Promotion flows across dev/staging/prod boundaries
- Requirements for audit logs, lineage, and access review

## Common Mistakes Or Confusions

- Registering without correct UC privileges (`USE CATALOG`, `USE SCHEMA`, `CREATE MODEL`)
- Using version numbers directly everywhere instead of aliases
- Assuming workspace-level groups are equivalent to account-level governance principals
- Treating deployment status as catalog name alone (catalog reflects governance boundary)

## Typical Exam-Style Decision Points

- Alias-based rollout (`@Champion`) vs hardcoding model version IDs
- UC model registry vs legacy workspace model registry
- Managed governance with UC permissions vs ad-hoc ACLs
- Cross-workspace sharing in same metastore vs Delta Sharing for cross-region/account

## Small Example Scenario

A fraud model is retrained weekly. Teams consume `models:/prod.risk.fraud_model@Champion` rather than `/12`. After validation, the alias is reassigned to version 13; inference jobs pick it up automatically next run without code changes.

## Memory Anchors

- **UC gives one governance plane for data + models**
- **Alias = stable interface, version = implementation detail**
- **Privileges gate lifecycle operations**
- **Lineage shortens root-cause analysis**

## Related Notes

- [01 - Delta Lake](./01-delta-lake.md)
- [02 - RAG Patterns](./02-rag-patterns.md)
- [04 - Supporting Tools](./04-supporting-tools.md)
- [Glossary](./glossary.md)
