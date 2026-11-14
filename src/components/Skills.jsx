import React from 'react';
import data from '../data.json';

export default function Skills() {
  return (
    <section id="skills" className="sec" aria-labelledby="skills-title">
      <div className="sec-head">
        <span className="label"><b>01</b> / stack matrix</span>
        <div>
          <h2 id="skills-title" className="h2">Core competencies across every layer</h2>
          <p className="body">
            From systems programming in C99 and Go to distributed cloud pipelines, neural architectures, and precision web frontends.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.skills.map((cat) => (
          <div
            key={cat.id}
            className="p-8 rounded-xl bg-(--panel) border border-(--line)"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-(--fg) font-semibold mb-4">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-(--bg) border border-(--line) text-xs font-mono text-(--fg-2)"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
