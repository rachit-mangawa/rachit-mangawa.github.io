import React, { useState } from 'react';
import data from '../data.json';
import { trackEvent } from '../utils/analytics';

export default function Connect() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(data.personal.email)
        .then(() => {
          setCopied(true);
          trackEvent('copy_email');
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => { });
    }
  };

  return (
    <section id="connect" className="sec pb-14! md:pb-20!" aria-labelledby="connect-title">
      <div className="flex flex-col gap-10 md:gap-14">
        {/* Top Row: Giant Display Title on left, Giant Framer Arrow on right */}
        <div className="flex flex-row items-end justify-between gap-3 sm:gap-6">
          <div className="max-w-2xl text-left min-w-0">
            <h2
              id="connect-title"
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
              onClick={() => trackEvent('contact_click', { method: 'mailto' })}
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

        {/* Bottom Row: Description on left, Minimalist Email Button on right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
          <p className="body text-left text-(--fg-2) leading-relaxed m-0">
            Open to software engineering, ML, and backend roles. Let&apos;s talk.
          </p>

          <div className="shrink-0">
            <button
              type="button"
              onClick={copyEmail}
              className="email-link-line group focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4 rounded-sm"
              aria-label={`Copy email address: ${data.personal.email}`}
            >
              {/* Tooltip on hover */}
              <span className="email-tooltip font-mono" aria-hidden="true">
                {copied ? 'Copied to clipboard!' : 'Click to copy email'}
              </span>

              {/* Email text with white/ink underline on hover */}
              <span className="email-text select-all">
                {data.personal.email}
              </span>

              {/* Minimalist copy / checkmark icon */}
              {copied ? (
                <span className="inline-flex items-center gap-1 text-(--accent) text-xs font-semibold">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[11px] uppercase tracking-wider">Copied</span>
                </span>
              ) : (
                <span className="inline-flex items-center text-(--fg-3) group-hover:text-(--fg) transition-colors">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
