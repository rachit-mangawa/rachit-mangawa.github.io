import React from 'react';
import data from '../data.json';

export default function Hero() {
  return (
    <section className="he" id="top" aria-label="Introduction">
      <div className="he-pin">
        <div className="he-in">
          <div className="he-copy">
            {/* Main Headline: Rachit Mangawa */}
            <h1 className="he-title">
              <span>Rachit Mangawa</span>
            </h1>

            {/* Sub-headline description */}
            <p className="he-sub">
              Making something useful & fun.
            </p>

            {/* Action Row: Three Clean Buttons */}
            <div className="he-cta">
              <a className="btn btn-solid" href="#projects">
                <span>Explore Projects</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                className="btn"
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="btn"
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                className="btn"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Resume</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Footer: Competencies Ticker */}
        <div className="he-foot" aria-label="Core Competencies">
          <span className="he-foot-a">Python</span>
          <span className="he-foot-a">PyTorch</span>
          <span className="he-foot-a">C++</span>
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
