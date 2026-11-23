import React from 'react';
import data from '../data.json';
import { trackEvent } from '../utils/analytics';
import { ArrowUpRight, ArrowDown } from './Icons';

export default function Hero() {
  return (
    <section className="he" id="top" aria-label="Introduction">
      <div className="he-pin">
        <div className="he-in">
          <div className="he-copy">

            {/* Typography Row */}
            <div className="hero-title_row">
              <div className="hero-title_group">
                <h1 className="hero-title_accent hero-title_top">Rachit</h1>
                <div className="hero-blurb hero-blurb_left">
                  <span>LeetCode - Knight (1987)</span>
                  <span>Codeforces - Specialist (1422)</span>
                  <span>B.Tech, CSE, 2023 - 2027</span>
                </div>
              </div>

              <div className="hero-title_bottom">
                <div className="hero-blurb hero-blurb_right">
                  <span>LOW-LATENCY SYSTEMS</span>
                  <span>ML &amp; AI PIPELINES</span>
                  <span>WEB ENGINEERING</span>
                </div>
                <h1 className="hero-title_accent">Mangawa</h1>
              </div>
            </div>

            {/* Action Row: Three Clean Buttons */}
            <div className="he-cta">
              <a
                className="btn btn-solid"
                href="#projects"
                onClick={() => trackEvent('hero_cta_click', { target: 'projects' })}
              >
                <span>Explore Projects</span>
                <ArrowDown className="btn-arrow w-2.5 h-2.5" />
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
                <ArrowUpRight className="btn-arrow w-2.5 h-2.5" />
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
                <ArrowUpRight className="btn-arrow w-2.5 h-2.5" />
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
