import { certifications, education } from "@/data/experience";
import { Section } from "./ui";
import { CertIcon, CapIcon } from "./Icons";

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Credentials" title="Certifications & education">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] faint">
            Certifications & training
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5"
              >
                <span className="mt-0.5 shrink-0 text-[var(--accent)]">
                  <CertIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug">{cert.name}</p>
                  <p className="mt-1 text-xs muted">{cert.issuer}</p>
                  <p className="mt-0.5 font-mono text-[11px] faint">{cert.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] faint">
            Education
          </h3>
          <ul className="space-y-3">
            {education.map((item) => (
              <li
                key={item.degree}
                className="flex gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5"
              >
                <span className="mt-0.5 shrink-0 text-[var(--accent)]">
                  <CapIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium leading-snug">{item.degree}</p>
                  <p className="mt-1 text-xs muted">{item.institution}</p>
                  <p className="mt-0.5 font-mono text-[11px] faint">{item.period}</p>
                  <p className="mt-0.5 font-mono text-[11px] faint">{item.percentage}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
