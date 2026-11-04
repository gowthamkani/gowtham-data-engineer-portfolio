export type PipelineStage = {
  step: string;
  title: string;
  body: string;
  tags: string[];
};

export const pipelineStages: PipelineStage[] = [
  {
    step: "01",
    title: "Source",
    body: "Identify the system of record and how change is expressed in it: an updated timestamp, a version column, a log, or an API cursor. Everything downstream depends on getting this right.",
    tags: ["Databases", "REST APIs", "File drops"],
  },
  {
    step: "02",
    title: "Extract",
    body: "Pull only what changed since the last successful run, using the watermark stored in the control table. Extraction is windowed and restartable, never a full reload by default.",
    tags: ["CDC", "Watermarks", "Incremental"],
  },
  {
    step: "03",
    title: "CDC / Incremental Processing",
    body: "Turn the extracted window into a change set: inserts, updates and deletes resolved against what is already loaded, so a run costs the size of the change and not the size of the table.",
    tags: ["Change sets", "Control tables", "Checkpointing"],
  },
  {
    step: "04",
    title: "Validate",
    body: "Check the data on arrival, before it is trusted: schema and type conformance, required fields, referential integrity. Anything that fails is quarantined rather than passed on.",
    tags: ["Schema checks", "Quarantine"],
  },
  {
    step: "05",
    title: "Transform",
    body: "Map source fields into a canonical shape, driven by externalised configuration where possible so a new entity or a renamed field does not require a code deployment.",
    tags: ["Canonical model", "Config-driven mapping"],
  },
  {
    step: "06",
    title: "Quality Checks",
    body: "Run the checks that catch silent corruption: nulls, duplicates, business rules on identifiers, row-count comparison against the source, and drift against the expected distribution.",
    tags: ["Null / duplicate", "Business rules", "Drift detection"],
  },
  {
    step: "07",
    title: "Load",
    body: "Write to the target idempotently, keyed on a stable external identifier, so replaying a batch produces the same result as running it once. Failures go to a dead-letter queue for retry.",
    tags: ["Idempotency", "Retry", "DLQ"],
  },
  {
    step: "08",
    title: "Reconcile",
    body: "Compare what was sent with what the target acknowledges: counts, totals, and per-record status. Reconciliation is what turns 'the job succeeded' into 'the data is actually there'.",
    tags: ["Counts", "Acknowledgement", "Reporting"],
  },
  {
    step: "09",
    title: "Update Watermark",
    body: "Only now does the watermark move. If any earlier stage failed, it stays where it was and the next run safely picks up the same window again.",
    tags: ["Fail-safe advance", "Safe replay"],
  },
];

export type Principle = {
  name: string;
  body: string;
};

export const principles: Principle[] = [
  {
    name: "CDC",
    body: "Move only what changed. Full reloads are a fallback, not a design.",
  },
  {
    name: "Watermarks",
    body: "A control table records the high-water mark per entity so every run knows exactly where to resume.",
  },
  {
    name: "Idempotency",
    body: "Running the same batch twice must not produce two results. Externally-keyed upserts make replay safe.",
  },
  {
    name: "Retry",
    body: "Transient failures are expected. Exponential backoff and circuit breakers keep a flaky upstream from taking the pipeline down.",
  },
  {
    name: "DLQ",
    body: "What cannot be processed now is parked, not dropped, and replayed by a retry orchestrator later.",
  },
  {
    name: "Reconciliation",
    body: "Every delivery is verified against the target before it is called done.",
  },
  {
    name: "Data Quality",
    body: "Validation is a pipeline stage with its own checkpoints and quarantine path, not a downstream surprise.",
  },
  {
    name: "Observability",
    body: "Batch-control and failure tables plus cloud logging make every run answerable: what ran, what is pending, what failed and why.",
  },
];
