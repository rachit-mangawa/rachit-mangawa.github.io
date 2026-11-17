import React from 'react';
import data from '../data.json';
import { trackEvent } from '../utils/analytics';

export default function Footer() {
  return (
    <footer className="border-t border-(--line) py-8 px-(--gutter) flex flex-col items-center justify-between gap-6 text-xs font-mono text-(--fg-2) md:flex-row">
      {/* Left: Copyright */}
      <div className="shrink-0">
        <span>© 2026 {data.personal.name}</span>
      </div>

      {/* Center: Social Profiles & Discovery Links */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={data.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line inline-flex items-center min-h-[36px] py-1"
            aria-label="GitHub profile @rachit-mangawa (opens in new tab)"
          >
            <span>GitHub</span>
          </a>
          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line inline-flex items-center min-h-[36px] py-1"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href={data.personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line inline-flex items-center min-h-[36px] py-1"
            aria-label="LeetCode profile @rachit-mangawa (opens in new tab)"
          >
            <span>LeetCode</span>
          </a>
          <a
            href={data.personal.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line inline-flex items-center min-h-[36px] py-1"
            aria-label="Codeforces profile @i_win_again (opens in new tab)"
          >
            <span>Codeforces</span>
          </a>
          <a
            href={data.personal.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line inline-flex items-center min-h-[36px] py-1"
            aria-label="Kaggle profile @rachitmangawa (opens in new tab)"
          >
            <span>Kaggle</span>
          </a>
        </div>

        {/* Machine-readable context endpoints with accessible touch targets & high contrast */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-(--fg-2)">
          <a
            href="/resume.pdf"
            onClick={() => trackEvent('resume_download', { location: 'footer' })}
            className="inline-flex items-center py-1.5 px-2 hover:text-(--fg) hover:underline transition-colors"
            aria-label="resume.pdf document"
          >
            resume.pdf
          </a>
          <span aria-hidden="true" className="text-(--line-2)">·</span>
          <a
            href="/llms.txt"
            className="inline-flex items-center py-1.5 px-2 hover:text-(--fg) hover:underline transition-colors"
            aria-label="llms.txt standard context"
          >
            llms.txt
          </a>
          <span aria-hidden="true" className="text-(--line-2)">·</span>
          <a
            href="/llms-small.txt"
            className="inline-flex items-center py-1.5 px-2 hover:text-(--fg) hover:underline transition-colors"
            aria-label="llms-small.txt compact context"
          >
            llms-small.txt
          </a>
          <span aria-hidden="true" className="text-(--line-2)">·</span>
          <a
            href="/llms-full.txt"
            className="inline-flex items-center py-1.5 px-2 hover:text-(--fg) hover:underline transition-colors"
            aria-label="llms-full.txt complete record"
          >
            llms-full.txt
          </a>
          <span aria-hidden="true" className="text-(--line-2)">·</span>
          <a
            href="/rss.xml"
            className="inline-flex items-center py-1.5 px-2 hover:text-(--fg) hover:underline transition-colors"
            aria-label="rss.xml feed"
          >
            rss.xml
          </a>
          <span aria-hidden="true" className="text-(--line-2)">·</span>
          <a
            href="/sitemap.xml"
            className="inline-flex items-center py-1.5 px-2 hover:text-(--fg) hover:underline transition-colors"
            aria-label="sitemap.xml site map"
          >
            sitemap.xml
          </a>
        </div>
      </div>

      {/* Right: Back to top */}
      <div className="shrink-0">
        <a
          href="#top"
          className="hover:text-(--fg) transition-colors inline-flex items-center gap-1.5 min-h-[36px] py-1"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
