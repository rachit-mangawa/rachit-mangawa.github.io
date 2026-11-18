import React from 'react';
import data from '../data.json';
import { trackEvent } from '../utils/analytics';

export default function Hero() {
  return (
    <section className="he" id="top" aria-label="Introduction">
      <div className="he-pin">
        <div className="he-in">
          <div className="he-copy">

            {/* Main Headline: Rachit Mangawa */}
            <h1 className="he-title">
              <span>{data.personal.name}</span>
            </h1>

            {/* Education Sub-line in Monospace */}
            <div className="he-edu" aria-label="Education: CSE at Netaji Subhas University of Technology, 2023 to 2027">
              <span> B.Tech Computer Science</span>
              <span className="he-edu-sep" aria-hidden="true" style={{ color: "var(--accent)" }}>|</span>
              <span title="Netaji Subhas University of Technology">NSUT</span>
              <span className="he-edu-sep" aria-hidden="true" style={{ color: "var(--accent)" }}>|</span>
              <span>2023 – 2027</span>
            </div>


            {/* Sub-headline Tagline */}
            <p className="he-sub">
              {data.personal.tagline?.replace(/\.+$/, '')}.
            </p>


            {/* Action Row: Three Clean Buttons */}
            <div className="he-cta">
              <a
                className="btn btn-solid"
                href="#projects"
                onClick={() => trackEvent('hero_cta_click', { target: 'projects' })}
              >
                <span>Explore Projects</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                className="btn"
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile (opens in new tab)"
                onClick={() => trackEvent('hero_cta_click', { target: 'github' })}
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="btn"
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
                onClick={() => trackEvent('hero_cta_click', { target: 'linkedin' })}
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Footer: Core Skills */}
        <div className="he-foot" aria-label="Core Skills">
          <span className="he-foot-a">Python</span>
          <span className="he-foot-a">C++</span>
          <span className="he-foot-a">TypeScript</span>
          <span className="he-foot-a">SQL</span>
          <span className="he-foot-a">PyTorch</span>
          <span className="he-foot-a">FastAPI</span>
          <span className="he-foot-a">Next.js</span>
          <span className="he-foot-a">FAISS</span>
          <span className="he-foot-a">Ollama</span>
          <span className="he-foot-a">Docker</span>
          <span className="he-foot-a">Linux</span>
        </div>
      </div>
    </section>
  );
}
