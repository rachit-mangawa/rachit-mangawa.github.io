import React from 'react';
import data from '../data.json';

export default function Skills() {
  return (
    <section id="skills" className="sec" aria-labelledby="skills-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>04</b> / skills</span>

        {/* Right Column: Title, Subtitle, and Skills Stack aligned flush */}
        <div>
          <h2 id="skills-title" className="h2">Technical Skills &amp; Tooling<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Languages, machine learning frameworks, persistence layers, and systems tools.
          </p>

          <div className="mt-10 sm:mt-14 sk-table">
            {data.skills.map((cat) => (
              <div key={cat.id} className="sk-row">
                {/* Left Column: Category name (14px mono) + accent sub-label (11px mono) */}
                <div className="sk-cat">
                  <span className="sk-cat-name">{cat.category}</span>
                  {cat.type && <span className="sk-cat-type">{cat.type}</span>}
                </div>

                {/* Right Column: Clean monochrome pills wrapping naturally */}
                <div className="sk-pills">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="pill">
                      {skill}
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
