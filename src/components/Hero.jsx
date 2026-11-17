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
              <span>{data.personal.name}</span>
            </h1>

            {/* Direct-Answer Bio Block (AEO / GEO & Human Summary) */}
            <p className="he-sub">
              Software Engineer specializing in low-latency systems, AI retrieval pipelines, and web interfaces. Final-year CSAI student at Netaji Subhas University of Technology (NSUT), former Software Developer Intern at UIDAI (Aadhaar), and LeetCode Knight.
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
                aria-label="GitHub Profile (opens in new tab)"
              >
                <span>GitHub</span>
              </a>

              <a
                className="btn"
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <span>LinkedIn</span>
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
