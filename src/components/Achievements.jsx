import React from 'react';
import data from '../data.json';

export default function Achievements() {
  const achievements = data.achievements || [];

  return (
    <section id="achievements" className="sec" aria-labelledby="ach-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>05</b> / verification</span>

        {/* Right Column: Title, Subtitle, and Achievements Table */}
        <div>
          <h2 id="ach-title" className="h2">Competitive Achievements<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Contest ratings, competition standings, and global percentiles.
          </p>

          <ul className="ach-table">
            {achievements.map((ach) => (
              <li key={ach.id} className="ach-row">
                <div className="ach-left">
                  <span className="ach-platform">{ach.platform}</span>
                </div>

                <div className="ach-mid">
                  <h3 className="ach-title">
                    <span>{ach.title}</span>{' '}
                    {ach.badge && <span className="text-(--fg-2) font-mono text-xs">{ach.badge}</span>}
                  </h3>
                  <div className="ach-meta">
                    {ach.highlight && (
                      <>
                        <span className="text-(--accent) font-semibold">{ach.highlight}</span>
                        <span className="text-(--line-2)" aria-hidden="true">·</span>
                      </>
                    )}
                    {Array.isArray(ach.meta) ? (
                      ach.meta.map((m, mIdx) => (
                        <React.Fragment key={mIdx}>
                          {mIdx > 0 && <span className="text-(--line-2)" aria-hidden="true">·</span>}
                          <span>{m}</span>
                        </React.Fragment>
                      ))
                    ) : (
                      ach.meta && <span>{ach.meta}</span>
                    )}
                  </div>
                </div>

                <div className="ach-action">
                  <a
                    href={ach.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link action-link-secondary"
                    aria-label={`${ach.platform} ${ach.title}: ${ach.label} (opens in new tab)`}
                  >
                    <span>{ach.label}</span>
                    <span className="action-arrow" aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
