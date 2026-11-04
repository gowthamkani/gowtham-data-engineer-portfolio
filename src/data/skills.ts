export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    blurb: "Pipeline patterns and modelling techniques I use day to day.",
    skills: [
      "ETL / ELT",
      "CDC (Change Data Capture)",
      "Incremental Ingestion",
      "Batch Processing",
      "Watermark Tracking",
      "Parquet",
      "Partitioning",
      "Data Lineage",
      "Schema Mapping",
      "SCD Type 2",
      "Medallion Architecture",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    blurb: "Languages and libraries I write pipelines and tests in.",
    skills: [
      "Python",
      "SQL",
      "Java",
      "Pandas",
      "Polars",
      "PyArrow",
      "PySpark",
      "pytest",
    ],
  },
  {
    id: "aws",
    title: "AWS",
    blurb: "Serverless compute, storage, secrets and images on AWS.",
    skills: [
      "Lambda",
      "Step Functions",
      "S3",
      "CloudWatch",
      "Secrets Manager",
      "ECR",
    ],
  },
  {
    id: "azure",
    title: "Azure",
    blurb: "Durable orchestration and governed storage on Azure.",
    skills: [
      "Azure Functions",
      "Durable Functions",
      "ADLS Gen2",
      "Key Vault",
      "Managed Identity",
    ],
  },
  {
    id: "databases",
    title: "Databases & Warehousing",
    blurb: "Sources and targets I extract from, model in, and load to.",
    skills: [
      "PostgreSQL",
      "Databricks Lakehouse",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    blurb: "How the pipelines get built, provisioned and shipped.",
    skills: ["Docker", "Terraform", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    id: "apis",
    title: "APIs & Integration",
    blurb: "High-volume API ingestion and delivery.",
    skills: [
      "REST APIs",
      "Salesforce Bulk API 2.0",
      "OAuth",
      "Postman",
      "API Management",
    ],
  },
  {
    id: "data-quality",
    title: "Data Quality & Reliability",
    blurb: "The checks and failure handling that make a pipeline trustworthy.",
    skills: [
      "Schema Validation",
      "Null Validation",
      "Duplicate Detection",
      "Metadata Validation",
      "Business Rules",
      "Reconciliation",
      "Data Observability",
      "Error Handling",
      "Idempotency",
      "Dead-Letter Queues",
    ],
  },
];
