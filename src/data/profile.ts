export const profile = {
  name: "Gowtham Kani",
  shortName: "Gowtham",
  title: "Data Engineer",
  headline:
    "Building reliable data pipelines that move, validate, and deliver data at scale.",
  positioning:
    "Building reliable ETL/ELT pipelines, CDC frameworks, and cloud data platforms.",
  summary:
    "Data Engineer specializing in ETL/ELT pipelines, CDC frameworks, cloud-native data platforms, data quality, API integrations, and reliable data processing systems.",
  location: "Chennai, Tamil Nadu, India",
  experienceYears: "~2 years",
  email: "gowtham.kani21@gmail.com",
  github: "https://github.com/gowthamkani",
  githubUser: "gowthamkani",
  linkedin: "https://linkedin.com/in/gowtham7708v",
  linkedinLabel: "linkedin.com/in/gowtham7708v",
  resumePath: "/Gowtham_Kani_Data_Engineer_Resume.docx",
  // Headshot served from public/profile.jpg; ProfilePhoto falls back to a monogram.
  photoPath: "/profile.jpg",
  // Update this after your first Vercel deploy so SEO/OG tags resolve absolutely.
  siteUrl: "https://gowthamkani.vercel.app",
  heroStack: ["Python", "SQL", "AWS", "Azure", "Databricks", "PySpark"],
} as const;

export type AboutCard = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

export const about = {
  // Four cards replace the old wall of paragraphs; the paragraphs stay below the
  // fold inside a "read more" disclosure so nothing important is lost.
  cards: [
    {
      id: "incremental",
      title: "Incremental Data Processing",
      body: "Most of my pipelines use incremental processing rather than full reloads. I work with CDC frameworks and watermark tracking so pipelines resume from the last successful point instead of reprocessing everything.",
      tags: [
        "CDC",
        "Watermark Tracking",
        "Control Tables",
        "Incremental Ingestion",
      ],
    },
    {
      id: "cloud",
      title: "Cloud & Orchestration",
      body: "I build cloud-native pipelines using serverless orchestration across AWS and Azure, with Terraform for infrastructure and GitHub Actions for CI/CD.",
      tags: [
        "AWS",
        "Azure",
        "Lambda",
        "Step Functions",
        "Durable Functions",
        "S3",
        "ADLS Gen2",
      ],
    },
    {
      id: "quality",
      title: "Data Quality",
      body: "I treat data quality as a core pipeline stage, with validation and quarantine routing before data reaches downstream systems.",
      tags: [
        "Schema Validation",
        "Null Checks",
        "Duplicate Detection",
        "Referential Integrity",
        "Business Rules",
        "Row Reconciliation",
        "Drift Detection",
      ],
    },
    {
      id: "reliability",
      title: "Reliability",
      body: "I design pipelines to be recoverable and trustworthy when upstream systems fail.",
      tags: [
        "Idempotency",
        "Retries",
        "Exponential Backoff",
        "DLQ",
        "Checkpointing",
        "Reconciliation",
      ],
    },
  ] as AboutCard[],
  paragraphs: [
    "I am a Databricks Certified Data Engineer with around two years of hands-on experience designing, building and operating production ETL/ELT pipelines. My day-to-day work is building the plumbing that moves data reliably: extracting from operational databases and REST APIs, landing it as partitioned Parquet, transforming it, validating it, and delivering it to downstream platforms.",
    "Most of what I build is incremental rather than full-reload. I work with custom CDC frameworks backed by watermark tracking in control tables, so a pipeline run resumes from the last successful point instead of reprocessing everything, and no record is missed or duplicated. Around that sit batch-control and failure-tracking tables that make every run auditable and every failure targeted for reprocessing.",
    "I build cloud-native on both AWS (Lambda, Step Functions, S3, CloudWatch, Secrets Manager, ECR) and Azure (Functions, Durable Functions, ADLS Gen2, Key Vault, Managed Identity), with Terraform for infrastructure and GitHub Actions for CI/CD. Serverless orchestration keeps the pipelines cheap to run and simple to scale.",
    "Data quality is treated as a first-class stage, not an afterthought: schema and type conformance, null and duplicate checks, referential integrity, business-rule validation, row-count reconciliation and drift detection, with quarantine routing for anything that fails. Idempotent writes, retry with exponential backoff, dead-letter queues and end-to-end reconciliation are how I keep these systems trustworthy when something upstream breaks.",
  ],
  facts: [
    { label: "Base", value: "Chennai, Tamil Nadu, India" },
    { label: "Experience", value: "~2 years in Data Engineering" },
    { label: "Certification", value: "Databricks Certified Data Engineer Associate" },
    { label: "Clouds", value: "AWS · Azure" },
    { label: "Core stack", value: "Python · SQL · PySpark · PostgreSQL" },
    { label: "Focus", value: "CDC · Data Quality · Reconciliation" },
  ],
} as const;
