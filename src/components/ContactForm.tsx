"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

const fieldClasses =
  "w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--fg-faint)] transition-colors focus:border-[var(--accent)]";

/**
 * There is no mail backend deployed, so instead of pretending to send, the form
 * composes the message and hands it to the visitor's own mail client. Nothing
 * silently disappears and no third-party service is needed.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio enquiry${name ? ` from ${name}` : ""}${
      company ? ` (${company})` : ""
    }`;
    const body = [message, "", "---", name, company].filter(Boolean).join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium muted">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={fieldClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-xs font-medium muted">
            Company <span className="faint">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Data Ltd."
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A little about the role or the problem you are hiring for."
          className={`${fieldClasses} resize-y`}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
        >
          Open in email client
        </button>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-4 py-2.5 text-sm muted transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
        >
          {copied ? "Address copied" : "Copy email address"}
        </button>
      </div>

      <p className="mt-4 text-xs leading-relaxed faint">
        This form opens a pre-filled draft in your own mail app rather than sending
        through a third party, so you keep a copy of what you sent.
      </p>
    </form>
  );
}
