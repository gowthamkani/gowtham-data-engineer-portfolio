import Link from "next/link";
import { profile } from "@/data/profile";
import { navItems } from "@/data/nav";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
            <p className="mt-1 max-w-sm text-[13px] leading-relaxed muted">
              {profile.headline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] muted transition-colors hover:text-[var(--fg)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs faint">
            &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript
            and Tailwind CSS.
          </p>
          <ul className="flex items-center gap-2">
            {[
              { href: profile.github, label: "GitHub", Icon: GitHubIcon },
              { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
              { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] muted transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
