export type FlowNode = {
  label: string;
  kind: "source" | "process" | "store" | "quality" | "target";
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  cloud: string;
  summary: string;
  problem: string[];
  solution: string[];
  flow: FlowNode[];
  highlight: { title: string; body: string };
  concepts: string[];
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "enterprise-cdc-etl-platform",
    title: "Enterprise CDC & ETL Platform",
    tagline:
      "Serverless CDC ingestion from four source databases into partitioned Parquet, transformed and delivered to Salesforce with full reconciliation.",
    cloud: "AWS",
    summary:
      "Scalable ETL pipelines built with Python, AWS Lambda, Step Functions, S3 and PostgreSQL, using a custom CDC framework with watermark tracking for incremental ingestion on a multi-entity financial platform.",
    problem: [
      "Enterprise data lived across Databricks, SQL Server, Oracle and Teradata, and downstream teams needed it consolidated and pushed into Salesforce.",
      "Full reloads were expensive and slow, and any mid-run failure meant either reprocessing everything or risking missed and duplicated records.",
      "Data defects were reaching downstream systems because identifier fields were never validated at ingestion time.",
    ],
    solution: [
      "Built a CDC framework with per-entity watermark tracking that extracts only changed rows from Databricks, SQL Server, Oracle and Teradata.",
      "Converted extracted datasets into partitioned Parquet files on Amazon S3 for cheap, column-pruned downstream reads.",
      "Built automated transformation pipelines that read the Parquet files from S3 into DataFrames and feed downstream Salesforce ingestion and analytics.",
      "Integrated Salesforce Bulk API 2.0 end to end: OAuth authentication, job creation, file upload, job monitoring, status tracking and reconciliation.",
      "Designed a data-quality validation framework covering null checks, duplicate detection, schema validation, metadata validation and business rules for PAN, Aadhaar, email and phone fields.",
      "Orchestrated the whole workflow serverlessly on AWS Lambda and Step Functions, with CloudWatch for observability, ECR for container images and Secrets Manager for credentials.",
      "Automated daily batch-completion and financial reconciliation summaries delivered to business and operations teams.",
    ],
    flow: [
      {
        label: "Source Systems",
        kind: "source",
        note: "Databricks / SQL Server / Oracle / Teradata",
      },
      { label: "CDC Framework", kind: "process", note: "Change detection per entity" },
      { label: "Watermark Tracking", kind: "store", note: "cdc_control table" },
      { label: "AWS Lambda", kind: "process", note: "Step Functions orchestration" },
      { label: "S3 / Parquet", kind: "store", note: "Partitioned columnar landing" },
      { label: "Transformation", kind: "process", note: "Parquet to DataFrame" },
      { label: "Salesforce Bulk API", kind: "target", note: "Bulk API 2.0 ingestion" },
      { label: "Reconciliation", kind: "quality", note: "Counts and status verification" },
    ],
    highlight: {
      title: "The cdc_control table",
      body: "A CDC control table stores per-entity watermarks, so each pipeline run automatically resumes from where the last successful run stopped, with no missed records and no duplicates. Alongside it, batch_control and failure-tracking tables log every run's status, record counts and error reasons. That gives a clear before/after view of what ran, what is pending and what failed, and makes it possible to reprocess only the failed records instead of replaying an entire batch.",
    },
    concepts: [
      "Per-entity watermarks",
      "Resumable runs",
      "Batch control tables",
      "Failure tracking",
      "Targeted reprocessing",
      "Partitioned Parquet",
      "Bulk API job monitoring",
      "Business-rule validation",
      "Serverless orchestration",
    ],
    stack: [
      "Python",
      "AWS Lambda",
      "AWS Step Functions",
      "Amazon S3",
      "CloudWatch",
      "Secrets Manager",
      "AWS ECR",
      "PostgreSQL",
      "Parquet",
      "Salesforce Bulk API 2.0",
      "OAuth",
    ],
    featured: true,
  },
  {
    slug: "martech-data-integration-hub",
    title: "Martech Data Integration Hub",
    tagline:
      "Azure-native hub-and-spoke platform moving customer and order data into the Amperity CDP behind a 24-checkpoint data-quality gate.",
    cloud: "Azure",
    summary:
      "An Azure-native integration platform connecting Ecometry and Maximizer data with the Amperity Customer Data Platform, orchestrated with Durable Functions and governed by a fail-safe watermark strategy.",
    problem: [
      "Customer and order data sat in Ecometry (M1 REST API) and Maximizer and had to reach the Amperity Customer Data Platform continuously and correctly.",
      "A mid-pipeline failure could not be allowed to advance the CDC watermark, otherwise records would be silently skipped on the next run.",
      "New entities and field changes were arriving faster than code deployments could carry them.",
    ],
    solution: [
      "Built a hub-and-spoke platform (ingress spoke to canonical hub to egress spoke) delivering into Amperity via ADLS Gen2 file drops and Amperity Courier.",
      "Designed a Durable Functions orchestration (Azure Functions Python v2) chaining health gate, extract, ingress validation, canonical transform, egress validation, delivery and finalize stages, with deterministic orchestrators and all I/O isolated in activity functions.",
      "Implemented a 24-checkpoint data-quality framework covering schema and type conformance, referential integrity, PII and email validity, duplicate and row-count reconciliation and drift detection, with automatic quarantine routing and 100% test coverage enforced as a CI build gate.",
      "Engineered a fail-safe watermark strategy where CDC watermarks advance only after end-to-end delivery acknowledgement and reconciliation.",
      "Built a config-driven mapping engine that externalises source to canonical to target field mappings as versioned JSON, so new entities and field changes ship without a code deployment.",
      "Developed resilient API clients for Ecometry, Maximizer and Amperity with pooled HTTP connections, exponential backoff, circuit breakers and token caching.",
      "Built a dead-letter-queue retry orchestrator and reconciliation service that replays failed batches without manual intervention.",
      "Modelled a PostgreSQL Flexible Server control plane of batch, CDC and failure control tables across versioned SQL migrations, driving idempotent, externally-keyed upserts and truncate-and-load delivery semantics.",
      "Automated CI/CD with GitHub Actions and provisioned all infrastructure with Terraform across dev, staging and prod, gated on 80%+ test coverage, static typing, linting and secret scanning.",
    ],
    flow: [
      { label: "Ecometry / Maximizer", kind: "source", note: "M1 REST API + Maximizer" },
      { label: "REST APIs", kind: "process", note: "Pooled clients, backoff, circuit breakers" },
      { label: "Durable Functions", kind: "process", note: "Deterministic orchestrator" },
      { label: "Health Gate", kind: "quality", note: "Pre-flight dependency check" },
      { label: "Extract", kind: "process", note: "CDC windowed pull" },
      { label: "Ingress Validation", kind: "quality", note: "Schema and type conformance" },
      { label: "Canonical Transform", kind: "process", note: "Config-driven JSON mapping" },
      { label: "Egress Validation", kind: "quality", note: "Referential and row-count checks" },
      { label: "Delivery", kind: "target", note: "ADLS Gen2 to Amperity Courier" },
      { label: "Finalize", kind: "store", note: "Watermark advance after ack" },
      { label: "Amperity", kind: "target", note: "Customer Data Platform" },
    ],
    highlight: {
      title: "Watermarks that only move on success",
      body: "The watermark advances only after end-to-end delivery acknowledgement and reconciliation. If anything fails mid-pipeline, whether an API timeout, a validation checkpoint or a delivery error, the watermark stays where it was and the batch is safely replayed on the next run. Combined with idempotent, externally-keyed upserts in the PostgreSQL control plane, a replay produces the same result as a clean first run.",
    },
    concepts: [
      "Durable Functions orchestration",
      "24-checkpoint DQ framework",
      "Fail-safe CDC watermarks",
      "Config-driven mapping engine",
      "Retry, backoff and circuit breakers",
      "DLQ retry orchestration",
      "Reconciliation service",
      "PostgreSQL control plane",
      "Terraform IaC",
      "GitHub Actions CI/CD",
    ],
    stack: [
      "Python",
      "Azure Functions",
      "Durable Functions",
      "ADLS Gen2",
      "Azure Key Vault",
      "Managed Identity",
      "PostgreSQL",
      "Terraform",
      "GitHub Actions",
      "REST APIs",
      "pytest",
    ],
    featured: true,
  },
  {
    slug: "communication-reconciliation-framework",
    title: "Communication Reconciliation Framework",
    tagline:
      "PySpark medallion pipeline reconciling multi-channel delivery logs with SCD Type 2 history for Power BI dashboards.",
    cloud: "Databricks / PySpark",
    summary:
      "A Bronze-Silver-Gold pipeline that processes communication logs from WhatsApp, Email, Netcore and Finverse, reconciles delivery status across systems and tracks historical changes with SCD Type 2.",
    problem: [
      "Welcome messages, KYC notifications and loan notifications were being sent from multiple systems, each with its own delivery log.",
      "There was no single reconciled view of whether a given communication was actually delivered.",
      "Changes to communication records over time were being overwritten rather than tracked.",
    ],
    solution: [
      "Used PySpark to process communication logs from WhatsApp, Email, Netcore and Finverse covering welcome messages, KYC and loan notifications.",
      "Built the pipeline on a Bronze-Silver-Gold layered architecture with SCD Type 2, so historical changes to communication records are tracked accurately over time.",
      "Validated and reconciled delivery logs from each system at the Silver layer.",
      "Passed clean Gold-layer data to the Power BI team for delivery-success dashboards.",
    ],
    flow: [
      {
        label: "WhatsApp / Email / Netcore / Finverse",
        kind: "source",
        note: "Multi-channel delivery logs",
      },
      { label: "Bronze", kind: "store", note: "Raw landed logs" },
      { label: "Silver", kind: "quality", note: "Validation and cross-system reconciliation" },
      { label: "Gold", kind: "store", note: "SCD Type 2 history" },
      { label: "Power BI", kind: "target", note: "Delivery-success dashboards" },
    ],
    highlight: {
      title: "Reconciling four channels into one truth",
      body: "Each channel reports delivery in its own shape and on its own schedule. The Silver layer validates and reconciles those logs against each other so a single communication has one authoritative delivery status, and SCD Type 2 in the Gold layer keeps the full history of how that status changed rather than overwriting it.",
    },
    concepts: [
      "Medallion architecture",
      "SCD Type 2 historisation",
      "Cross-system reconciliation",
      "Delivery-log validation",
      "PySpark batch processing",
      "BI-ready Gold layer",
    ],
    stack: ["PySpark", "Databricks Lakehouse", "SQL", "Power BI"],
    featured: true,
  },
  {
    slug: "secure-bank-payroll-automation",
    title: "Secure Bank Payroll Automation",
    tagline:
      "Java 17 system moving encrypted salary disbursement files between client entities and partner banks, replacing a manual process.",
    cloud: "Java / SFTP",
    summary:
      "A Java 17 payroll automation system that securely transfers salary disbursement files between client entities and partner banks over SFTP with PGP encryption, duplicate detection and amount reconciliation.",
    problem: [
      "Salary disbursement files were being encrypted and uploaded to partner banks manually.",
      "A duplicate or lost payroll file has direct financial consequences, so the manual process carried real risk.",
      "Onboarding a new partner bank meant code changes.",
    ],
    solution: [
      "Handled setup and configuration of a Java 17 payroll automation system that securely transfers salary files between client entities and partner banks, replacing the manual encryption and upload process.",
      "Configured and supported the SFTP polling and PGP decrypt/re-encrypt pipeline built on BouncyCastle, plus bank-side SFTP upload.",
      "Set up per-bank .properties configuration so a new bank can be onboarded without code changes.",
      "Set up validation and safety checks: file-format checks, duplicate detection via filename and SHA-256 checksum, and automatic quarantine of failed files.",
      "Supported the amount reconciliation module, verifying transaction counts and total payout values per batch for finance sign-off.",
      "Provided ongoing support for the automated email notification module (Jakarta Mail), monitoring per-stage decrypt, encrypt and upload status reports sent to operations.",
    ],
    flow: [
      { label: "Client Files", kind: "source", note: "Salary disbursement batches" },
      { label: "SFTP Poll", kind: "process", note: "Scheduled inbound pickup" },
      { label: "PGP Decryption", kind: "process", note: "BouncyCastle" },
      { label: "Validation", kind: "quality", note: "File-format checks" },
      { label: "Duplicate Detection", kind: "quality", note: "Filename + SHA-256 checksum" },
      { label: "Re-encryption", kind: "process", note: "Bank-specific PGP key" },
      { label: "Bank SFTP", kind: "target", note: "Per-bank .properties config" },
      { label: "Reconciliation", kind: "quality", note: "Counts and total payout value" },
      { label: "Email Notification", kind: "target", note: "Jakarta Mail status reports" },
    ],
    highlight: {
      title: "Two independent duplicate guards",
      body: "Payroll files are checked for duplicates both by filename and by SHA-256 checksum, so a re-sent file with a new name is still caught. Anything that fails validation is quarantined rather than forwarded, and the reconciliation module verifies transaction counts and total payout values per batch before finance signs off.",
    },
    concepts: [
      "SFTP polling",
      "PGP encrypt and decrypt",
      "SHA-256 checksums",
      "Duplicate detection",
      "Quarantine on failure",
      "Amount reconciliation",
      "Config-driven bank onboarding",
    ],
    stack: ["Java 17", "SFTP", "PGP", "BouncyCastle", "Jakarta Mail", "SHA-256"],
    featured: true,
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
