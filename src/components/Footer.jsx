import React from 'react';
import data from '../data.json';
import { ArrowUp } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-(--line) py-6 px-(--gutter) flex flex-col items-center justify-between gap-4 text-xs font-mono text-(--fg-2) md:flex-row">
      {/* Left: Copyright */}
      <div className="shrink-0">
        <span>© 2026 {data.personal.name}</span>
      </div>

      {/* Center: Social Profiles & llms.txt */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line inline-flex items-center min-h-9 py-1"
          aria-label="GitHub profile @rachit-mangawa (opens in new tab)"
        >
          <span>GitHub</span>
        </a>
        <a
          href={data.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line inline-flex items-center min-h-9 py-1"
          aria-label="LinkedIn profile (opens in new tab)"
        >
          <span>LinkedIn</span>
        </a>
        <a
          href={data.personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line inline-flex items-center min-h-9 py-1"
          aria-label="LeetCode profile @rachit-mangawa (opens in new tab)"
        >
          <span>LeetCode</span>
        </a>
        <a
          href={data.personal.codeforces}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line inline-flex items-center min-h-9 py-1"
          aria-label="Codeforces profile @i_win_again (opens in new tab)"
        >
          <span>Codeforces</span>
        </a>
        <a
          href={data.personal.kaggle}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line inline-flex items-center min-h-9 py-1"
          aria-label="Kaggle profile @rachitmangawa (opens in new tab)"
        >
          <span>Kaggle</span>
        </a>
        <a
          href="/llms.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line inline-flex items-center min-h-9 py-1 text-(--fg-3) hover:text-(--fg)"
          aria-label="llms.txt context file"
        >
          <span>llms.txt</span>
        </a>
      </div>

      {/* Right: Top */}
      <div className="shrink-0">
        <a
          href="#top"
          className="hover:text-(--fg) transition-colors inline-flex items-center gap-1.5 min-h-9 py-1 footer-top-link"
          aria-label="Back to top of page"
        >
          <span>Top</span>
          <ArrowUp className="footer-top-arrow w-2.5 h-2.5" />
        </a>
      </div>
    </footer>
  );
}
