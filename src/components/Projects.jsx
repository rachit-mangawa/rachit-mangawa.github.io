import React from 'react';
import data from '../data.json';

export default function Projects() {
  return (
    <section id="projects" className="sec" aria-labelledby="proj-title">
      <div className="sec-head">
        <span className="label"><b>03</b> / selected projects</span>
        <div>
          <h2 id="proj-title" className="h2">Systems, engines, and production code</h2>
          <p className="body">
            Custom microkernels, distributed gateways, neural NLP classifiers, and high-concurrency memory engines.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projects.map((proj) => (
          <article
            key={proj.id}
            className="p-8 rounded-xl bg-(--panel) border border-(--line) hover:border-(--line-2) transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-(--fg-3) mb-3">
                <span>{proj.number}</span>
                <span className="text-(--accent) font-medium text-[11px] tracking-wider uppercase">
                  {proj.homeMetric}
                </span>
              </div>

              <h3 className="text-xl font-medium text-(--fg) mb-1.5">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--accent) transition-colors inline-flex items-center justify-between w-full"
                >
                  <span>{proj.title}</span>
                  <span className="font-mono text-xs text-(--fg-3)">↗</span>
                </a>
              </h3>

              <p className="font-mono text-xs text-(--fg-3) mb-3">
                {proj.tagline}
              </p>

              <p className="text-sm text-(--fg-2) leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div className="pt-4 border-t border-(--line) flex flex-wrap gap-2">
              {proj.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-(--bg) border border-(--line) text-xs font-mono text-(--fg-3)"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
