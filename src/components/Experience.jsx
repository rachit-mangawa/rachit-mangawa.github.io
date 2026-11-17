import React from 'react';
import data from '../data.json';

export default function Experience() {
  return (
    <section id="experience" className="sec" aria-labelledby="exp-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>02</b> / history</span>

        {/* Right Column: Title, Subtitle, and Experience aligned flush with left negative space */}
        <div>
          <h2 id="exp-title" className="h2">Production Experience<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Offline OCR, hybrid RAG with FAISS, and high-throughput SQLite ETL pipelines.
          </p>

          <div className="mt-10 sm:mt-14 exp-list">
            {data.experience?.map((exp, idx) => (
              <div key={idx} className="exp-entry">
                {/* Top Partitioned Monospace Strip (.tb - 2-point system, UIDAI highlighted) */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="tb" aria-label="Organization and Role">
                    <span className="text-(--accent) font-semibold tracking-wide">{exp.shortCompany || exp.company}</span>
                    <span className="text-(--fg-2)">{exp.shortRole || exp.role}</span>
                  </div>
                  <div className="tb" aria-label="Tenure Timeline">
                    <span className="text-(--fg-3)">{exp.period}</span>
                  </div>
                </div>

                {/* Role Headline with Aadhaar Logo & Organization */}
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-md bg-(--panel) border border-(--line-2) shrink-0 flex items-center justify-center">
                      <img
                        src="/aadhaar_logo.png"
                        alt="Aadhaar UIDAI official emblem"
                        width="32"
                        height="32"
                        loading="lazy"
                        decoding="async"
                        className="h-7 w-7 sm:h-8 sm:w-8 object-contain rounded-xs"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-(--fg) tracking-tight">{exp.role}</h3>
                      <p className="text-xs font-mono text-(--fg-3) mt-1">{exp.company}</p>
                    </div>
                  </div>
                </div>

                {/* Clean Experience Points with Monospace Dash */}
                <ul className="exp-points">
                  {exp.points.map((pt, pIdx) => {
                    const desc = typeof pt === 'object' && pt !== null ? pt.desc : pt;
                    return (
                      <li key={pIdx} className="exp-point">
                        <span className="exp-dash" aria-hidden="true">–</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Stack Pills matching Skills (.pill) */}
                <div className="mt-6 flex flex-wrap gap-2 items-center">
                  {exp.tags.map((t, tIdx) => (
                    <span key={tIdx} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
