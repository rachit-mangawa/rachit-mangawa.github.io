import React from 'react';
import data from '../data.json';

export default function Footer() {
  return (
    <footer className="border-t border-(--line) py-8 px-(--gutter) flex flex-col items-center justify-between gap-6 text-xs font-mono text-(--fg-3) md:flex-row">
      {/* Left: Copyright */}
      <div className="shrink-0">
        <span>© 2026 {data.personal.name}</span>
      </div>

      {/* Center: Social Profiles & Discovery Links */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={data.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line"
            aria-label="GitHub profile (opens in new tab)"
          >
            <span>GitHub</span>
          </a>
          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href={data.personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line"
            aria-label="LeetCode profile (opens in new tab)"
          >
            <span>LeetCode</span>
          </a>
          <a
            href={data.personal.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line"
            aria-label="Codeforces profile (opens in new tab)"
          >
            <span>Codeforces</span>
          </a>
          <a
            href={data.personal.kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent-line"
            aria-label="Kaggle profile (opens in new tab)"
          >
            <span>Kaggle</span>
          </a>
        </div>

        {/* Machine-readable context endpoints */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 text-[11px] text-(--fg-3) opacity-70">
          <a href="/resume.pdf" className="hover:text-(--fg) hover:opacity-100 transition-colors" aria-label="Download Resume PDF">resume.pdf</a>
          <span aria-hidden="true">·</span>
          <a href="/llms.txt" className="hover:text-(--fg) hover:opacity-100 transition-colors" aria-label="Machine-readable LLM standard context">llms.txt</a>
          <span aria-hidden="true">·</span>
          <a href="/llms-small.txt" className="hover:text-(--fg) hover:opacity-100 transition-colors" aria-label="Compact LLM context">llms-small.txt</a>
          <span aria-hidden="true">·</span>
          <a href="/llms-full.txt" className="hover:text-(--fg) hover:opacity-100 transition-colors" aria-label="Full technical architecture record">llms-full.txt</a>
          <span aria-hidden="true">·</span>
          <a href="/rss.xml" className="hover:text-(--fg) hover:opacity-100 transition-colors" aria-label="RSS 2.0 Feed">rss.xml</a>
          <span aria-hidden="true">·</span>
          <a href="/sitemap.xml" className="hover:text-(--fg) hover:opacity-100 transition-colors" aria-label="XML Sitemap">sitemap.xml</a>
        </div>
      </div>

      {/* Right: Back to top */}
      <div className="shrink-0">
        <a
          href="#top"
          className="hover:text-(--fg) transition-colors flex items-center gap-1.5"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
