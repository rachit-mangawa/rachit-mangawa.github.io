import React from 'react';
import data from '../data.json';

export default function Projects() {
  return (
    <section id="projects" className="sec" aria-labelledby="proj-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>03</b> / systems</span>

        {/* Right Column: Title, Subtitle, and Projects Registry Table */}
        <div>
          <h2 id="proj-title" className="h2">Featured Projects &amp; Architecture<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Edge AI embedded runtimes, pluggable API gateways, sub-15ms NLP intent engines, and resilient LLM cascades.
          </p>

          <div className="mt-10 sm:mt-14">
            <ul className="pj-table">
              {data.projects.map((proj) => (
                <li key={proj.id} className="pj-row">
                  {/* Top Line: Project Title on Left, External Links Anchored on Right */}
                  <div className="pj-header">
                    <h3 className="pj-title">
                      <a
                        href={proj.live || proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {proj.title}
                      </a>
                    </h3>

                    <div className="pj-links">
                      <a
                        href={proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-link action-link-secondary"
                        aria-label={`${proj.title} source code on GitHub`}
                      >
                        <span>Code</span>
                      </a>
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link action-link-primary"
                          aria-label={`${proj.title} live deployment`}
                        >
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Subtle Technical Kicker under Title (No Loud Borders) */}
                  {(proj.homeMetric || proj.tagline) && (
                    <div className="pj-kicker">
                      {proj.homeMetric || proj.tagline}
                    </div>
                  )}

                  {/* 1-2 Line Description */}
                  <p className="pj-desc">
                    {proj.description}
                  </p>

                  {/* Stack Pills matching Skills & Experience */}
                  <div className="pj-pills">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
