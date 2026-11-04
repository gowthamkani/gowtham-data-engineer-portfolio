import { profile } from "@/data/profile";
import { Section } from "./ui";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon, LocationIcon } from "./Icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: `github.com/${profile.githubUser}`,
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Reliable Data Systems"
      intro="Interested in Data Engineering, cloud data platforms, or building reliable data pipelines? Feel free to connect - the quickest route is email."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <div>
          <ul className="space-y-3">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-4 transition-colors hover:border-[var(--border-strong)]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-[var(--border)] muted transition-colors group-hover:text-[var(--accent)]">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wide faint">
                      {label}
                    </span>
                    <span className="block truncate font-mono text-[13px]">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
            <p className="inline-flex items-center gap-2 text-[13px] muted">
              <LocationIcon className="h-4 w-4 faint" />
              {profile.location}
            </p>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--accent)] hover:opacity-80"
            >
              <DownloadIcon className="h-4 w-4" />
              Download resume
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
