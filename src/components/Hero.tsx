import { profile } from "@/data/profile";
import { Button, ArrowRight, Tag } from "./ui";
import { PipelineVisual } from "./PipelineVisual";
import { ProfilePhoto } from "./ProfilePhoto";
import { LinkedInIcon, MailIcon, DownloadIcon, LocationIcon, CertIcon } from "./Icons";

const secondaryLinks = [
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="container-page relative grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {profile.experienceYears} building production data pipelines
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-[var(--accent)] md:text-xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-xl font-medium leading-snug text-balance md:text-2xl">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed muted">{profile.summary}</p>

          <ul className="mt-7 flex flex-wrap gap-1.5">
            {profile.heroStack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects" variant="primary">
              View Projects <ArrowRight />
            </Button>
            <Button href={profile.resumePath} download>
              <DownloadIcon /> Download Resume
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {secondaryLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 text-sm muted transition-colors hover:text-[var(--accent)]"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--border)] pt-6 text-sm muted">
            <span className="inline-flex items-center gap-1.5">
              <LocationIcon className="h-4 w-4 faint" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CertIcon className="h-4 w-4 faint" />
              Databricks Certified Data Engineer Associate
            </span>
          </div>
        </div>

        <div className="space-y-10">
          <ProfilePhoto />
          <PipelineVisual />
        </div>
      </div>
    </section>
  );
}
