"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

/**
 * Falls back to a clean monogram if public/profile.jpg has not been added yet,
 * so the hero never renders a broken image.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[18rem] lg:mx-0">
      <span
        aria-hidden="true"
        className="absolute -inset-3 rounded-2xl border border-[var(--border)]"
      />
      <span
        aria-hidden="true"
        className="absolute -right-2 -top-2 h-16 w-16 rounded-full opacity-40 blur-2xl"
        style={{ backgroundColor: "var(--accent)" }}
      />
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-subtle)]">
        {failed ? (
          <div className="grid-bg grid h-full w-full place-items-center">
            <span className="font-mono text-5xl font-semibold text-[var(--accent)]">GK</span>
            <span className="sr-only">Profile photo placeholder</span>
          </div>
        ) : (
          <Image
            src={profile.photoPath}
            alt={`${profile.name}, Data Engineer`}
            fill
            priority
            sizes="(min-width: 1024px) 18rem, 60vw"
            className="object-cover object-[center_18%]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span
        aria-hidden="true"
        className="absolute -bottom-3 left-4 rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]"
      >
        Databricks Certified
      </span>
    </div>
  );
}
