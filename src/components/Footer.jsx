import React from 'react';
import data from '../data.json';

export default function Footer() {
  return (
    <footer className="border-t border-(--line) py-8 px-(--gutter) flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-(--fg-3)">
      {/* Left: Copyright */}
      <div className="shrink-0">
        <span>© 2026 {data.personal.name}</span>
      </div>

      {/* Center: Social Profiles with Orange Underline */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line"
        >
          <span>GitHub</span>
        </a>
        <a
          href={data.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line"
        >
          <span>LinkedIn</span>
        </a>
        <a
          href={data.personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line"
        >
          <span>LeetCode</span>
        </a>
        <a
          href={data.personal.codeforces}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line"
        >
          <span>Codeforces</span>
        </a>
        <a
          href={data.personal.kaggle}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent-line"
        >
          <span>Kaggle</span>
        </a>
      </div>

      {/* Right: Back to top */}
      <div className="shrink-0">
        <a
          href="#top"
          className="hover:text-(--fg) transition-colors flex items-center gap-1.5"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
