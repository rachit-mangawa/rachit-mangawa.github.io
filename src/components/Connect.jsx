import React, { useState } from 'react';
import data from '../data.json';

export default function Connect() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(data.personal.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => { });
    }
  };

  return (
    <section id="resume" className="sec border-t-0! pb-14! md:pb-20!" aria-labelledby="resume-title">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Top Row: Giant Display Title on left, Giant Framer Arrow on right */}
        <div className="flex flex-row items-end justify-between gap-3 sm:gap-6">
          <div className="max-w-2xl text-left min-w-0">
            <h2
              id="resume-title"
              className="text-left font-medium tracking-[-0.045em] leading-[0.98] text-(--fg)"
              style={{ fontSize: 'clamp(28px, 6.2vw, 96px)' }}
            >
              <span>Let&apos;s build</span>
              <br />
              <span>something useful</span>
              <span className="text-(--accent)">.</span>
            </h2>
          </div>

          {/* Right: Framer Arrow Swap Button (Opens Outlook / Mail Client) */}
          <div className="shrink-0 self-end">
            <a
              href={`mailto:${data.personal.email}`}
              aria-label={`Send email to ${data.personal.email}`}
              title="Open mail client"
              className="arrow-swap"
            >
              {/* Arrow 1: Initially visible, flies top-right on hover */}
              <svg
                viewBox="0 0 102 102"
                fill="none"
                className="arrow-swap-item arrow-swap-1"
                aria-hidden="true"
              >
                <path
                  d="M1.3 100.7 L100.7 1.3 M25.5 1.3 L100.7 1.3 L100.7 76.5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Arrow 2: Waiting outside bottom-left, flies into center on hover */}
              <svg
                viewBox="0 0 102 102"
                fill="none"
                className="arrow-swap-item arrow-swap-2"
                aria-hidden="true"
              >
                <path
                  d="M1.3 100.7 L100.7 1.3 M25.5 1.3 L100.7 1.3 L100.7 76.5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Row: Description on left, [ email | copy ] on right below arrow in same line */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
          <p className="body text-left text-(--fg-2) leading-relaxed max-w-xl m-0">
            Currently open to software engineering and machine learning roles. If you&apos;re working on low-latency infrastructure, practical AI pipelines, or high-performance systems, let&apos;s talk.
          </p>

          <div className="shrink-0 max-w-full">
            <div className="inline-flex items-center max-w-full rounded-lg border border-(--line-2) bg-(--panel) font-mono text-[11px] sm:text-xs overflow-hidden transition-colors hover:border-(--fg)">
              <span className="px-3 sm:px-3.5 py-2 text-(--fg) select-all tracking-tight truncate">
                {data.personal.email}
              </span>
              <span className="text-(--line-2) select-none">|</span>
              <button
                type="button"
                onClick={copyEmail}
                className="px-3 sm:px-3.5 py-2 text-(--fg-2) hover:text-(--accent) transition-colors cursor-pointer uppercase tracking-wider text-[11px] font-medium shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <span className="text-(--accent) font-semibold">copied!</span>
                ) : (
                  <span>copy</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
