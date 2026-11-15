import React from 'react';
import data from '../data.json';

export default function Achievements() {
  return (
    <section id="achievements" className="sec" aria-labelledby="ach-title">
      <div className="sec-head">
        <span className="label"><b>05</b> / verification</span>
        <div>
          <h2 id="ach-title" className="h2">Competitive Achievements<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Top 0.8% global LeetCode rank, Codeforces Specialist, and competitive algorithm scores.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* LeetCode Card */}
        <a
          href={data.personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-(--panel) border border-(--line) hover:border-(--line-2) focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 transition-colors block"
        >
          <div className="font-mono text-xs text-(--fg-3)">LEETCODE</div>
          <div className="text-2xl font-semibold mt-2 text-(--fg)">{data.ratings.leetcode.rank}</div>
          <div className="text-xs text-(--fg-2) font-mono mt-1">Rating {data.ratings.leetcode.rating}</div>
          <div className="text-[11px] text-(--accent) font-mono mt-3 font-medium">{data.ratings.leetcode.topPercent} Global</div>
        </a>

        {/* Codeforces Card */}
        <a
          href={data.personal.codeforces}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-(--panel) border border-(--line) hover:border-(--line-2) focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 transition-colors block"
        >
          <div className="font-mono text-xs text-(--fg-3)">CODEFORCES</div>
          <div className="text-2xl font-semibold mt-2 text-(--fg)">{data.ratings.codeforces.rank}</div>
          <div className="text-xs text-(--fg-2) font-mono mt-1">Rating {data.ratings.codeforces.rating}</div>
          <div className="text-[11px] text-(--fg-3) font-mono mt-3">@{data.personal.codeforcesHandle}</div>
        </a>

        {/* GitHub Card */}
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-(--panel) border border-(--line) hover:border-(--line-2) focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 transition-colors block"
        >
          <div className="font-mono text-xs text-(--fg-3)">GITHUB</div>
          <div className="text-2xl font-semibold mt-2 text-(--fg)">Open Source</div>
          <div className="text-xs text-(--fg-2) font-mono mt-1">12+ Repositories</div>
          <div className="text-[11px] text-(--fg-3) font-mono mt-3">@{data.personal.githubHandle}</div>
        </a>

        {/* Kaggle Card */}
        <a
          href={data.personal.kaggle}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-(--panel) border border-(--line) hover:border-(--line-2) focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2 transition-colors block"
        >
          <div className="font-mono text-xs text-(--fg-3)">KAGGLE</div>
          <div className="text-2xl font-semibold mt-2 text-(--fg)">Machine Learning</div>
          <div className="text-xs text-(--fg-2) font-mono mt-1">Datasets &amp; NLP</div>
          <div className="text-[11px] text-(--fg-3) font-mono mt-3">@{data.personal.kaggleHandle}</div>
        </a>
      </div>
    </section>
  );
}
