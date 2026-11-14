import React from 'react';
import data from '../data.json';

export default function OpenSource() {
  return (
    <section id="opensource" className="sec" aria-labelledby="os-title">
      <div className="sec-head">
        <span className="label"><b>04</b> / open source</span>
        <div>
          <h2 id="os-title" className="h2">Contributing to industry foundations</h2>
          <p className="body">
            Upstream contributions to core machine learning runtimes, kernel math verifications, and global tooling.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-xl bg-(--panel) border border-(--line) flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-(--accent) uppercase tracking-wider font-semibold">Core Contribution</span>
          <h3 className="text-xl font-medium mt-1 text-(--fg)">{data.openSource.project} — PR #{data.openSource.prNumber}</h3>
          <p className="text-sm text-(--fg-2) mt-2 max-w-2xl leading-relaxed">
            {data.openSource.contribution}. Fixed gradient math and verification issue #{data.openSource.issueNumber}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-(--fg-3)">
            {data.openSource.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-(--bg) border border-(--line)">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={data.openSource.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid inline-flex items-center gap-2 self-start md:self-auto shrink-0"
        >
          <span>View Pull Request</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
