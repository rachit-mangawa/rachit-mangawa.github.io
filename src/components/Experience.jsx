import React from 'react';
import data from '../data.json';

export default function Experience() {
  return (
    <section id="experience" className="sec" aria-labelledby="exp-title">
      <div className="sec-head">
        <span className="label"><b>02</b> / history</span>
        <div>
          <h2 id="exp-title" className="h2">Production Experience<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Offline OCR, hybrid RAG with FAISS, and high-throughput SQLite ETL pipelines.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {data.experience?.map((exp, idx) => (
          <div
            key={idx}
            className="p-8 rounded-xl bg-(--panel) border border-(--line) hover:border-(--line-2) transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-xl font-medium text-(--fg)">{exp.role}</h3>
              <span className="font-mono text-xs text-(--fg-3)">{exp.period}</span>
            </div>
            <div className="font-mono text-xs text-(--accent) mb-4">{exp.company}</div>

            <ul className="space-y-2 mb-6 text-sm text-(--fg-2) leading-relaxed list-disc list-inside">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-(--fg-3)">
              {exp.tags.map((t, tIdx) => (
                <span key={tIdx} className="px-2.5 py-1 rounded bg-(--bg) border border-(--line)">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
