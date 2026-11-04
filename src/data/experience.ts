export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

// NOTE: title/period below follow the portfolio brief ("Data Engineer",
// "April 2025 - Present"). The resume DOCX in this repo says "Software Engineer,
// Oct 2024 - Present". Pick one and keep both documents consistent.
export const experience: Role[] = [
  {
    title: "Data Engineer",
    company: "Greenmen Consulting",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "Oct 2024 - Present",
    bullets: [
      "Developed and maintained scalable ETL pipelines using Python, AWS Lambda, Step Functions, S3 and PostgreSQL for enterprise data integration on a multi-entity financial platform.",
      "Extracted data from Databricks, SQL Server, Oracle and Teradata using a CDC framework with watermark tracking, converting datasets into partitioned Parquet files for optimised storage and processing.",
      "Built automated transformation pipelines converting Parquet files from AWS S3 into DataFrames, feeding downstream Salesforce ingestion and analytics.",
      "Integrated Salesforce Bulk API 2.0 for end-to-end data ingestion: OAuth authentication, job creation, file uploads, job monitoring, status tracking and reconciliation.",
      "Designed data-quality validation frameworks covering null checks, duplicate detection, schema validation, metadata validation and business-rule checks for PAN, Aadhaar, email and phone number fields.",
      "Built a cdc_control table storing per-entity watermarks so each pipeline run automatically resumes from where the last successful run stopped, with no missed or duplicate records.",
      "Built batch_control and failure-tracking tables logging each run's status, record counts and errors with reasons, enabling targeted reprocessing of only the failed records.",
      "Orchestrated serverless ETL workflows using AWS Lambda, Step Functions, CloudWatch, ECR and Secrets Manager for automated, scalable data processing.",
      "Automated daily reporting of batch completion and financial reconciliation summaries to business and operations teams.",
    ],
    tags: [
      "Python",
      "AWS Lambda",
      "Step Functions",
      "S3",
      "PostgreSQL",
      "CDC",
      "Parquet",
      "Salesforce Bulk API 2.0",
      "PySpark",
      "Azure Functions",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    detail: "Valid through September 15, 2027",
  },
  {
    name: "Java Fullstack Development",
    issuer: "Qspiders Technologies, Chennai",
    detail: "Course completion",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  percentage: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Arts in History",
    institution: "Kamarajar University",
    period: "2023",
    percentage: "60%"
  },
];
