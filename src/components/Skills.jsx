import React from 'react';
import data from '../data.json';
import {
  siPython,
  siCplusplus,
  siTypescript,
  siGnubash,
  siOllama,
  siHuggingface,
  siPytorch,
  siTensorflow,
  siScikitlearn,
  siOpencv,
  siPandas,
  siNumpy,
  siFastapi,
  siNextdotjs,
  siSqlite,
  siSqlalchemy,
  siPlotly,
  siDocker,
  siGit,
  siGithubactions,
  siPytest,
  siLinux,
} from 'simple-icons';

const skillIconMap = {
  // Languages
  'Python': siPython.path,
  'C++': siCplusplus.path,
  'TypeScript': siTypescript.path,
  'Bash': siGnubash.path,

  // GenAI & NLP
  'Ollama': siOllama.path,
  'Hugging Face': siHuggingface.path,

  // ML & Computer Vision
  'PyTorch': siPytorch.path,
  'TensorFlow': siTensorflow.path,
  'Scikit-Learn': siScikitlearn.path,
  'OpenCV': siOpencv.path,
  'Pandas': siPandas.path,
  'NumPy': siNumpy.path,

  // Backend & Web
  'FastAPI': siFastapi.path,
  'Next.js': siNextdotjs.path,
  'SQLite': siSqlite.path,
  'SQLAlchemy': siSqlalchemy.path,
  'Plotly': siPlotly.path,

  // MLOps & Developer Tools
  'Docker': siDocker.path,
  'Git': siGit.path,
  'GitHub Actions': siGithubactions.path,
  'PyTest': siPytest.path,
  'Linux': siLinux.path,
};

export default function Skills() {
  return (
    <section id="skills" className="sec" aria-labelledby="skills-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>01</b> / stack</span>

        {/* Right Column: Title, Subtitle, and Skills Stack aligned flush */}
        <div>
          <h2 id="skills-title" className="h2">Technical Skills &amp; Tooling<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Python, C++, PyTorch models, local RAG pipelines, and modern web tooling.
          </p>

          {/* Exact layout replicated from svg-scroll-draw /guides */}
          <div className="mt-10 sm:mt-14 border-t border-(--line)">
            {data.skills.map((cat, catIdx) => {
              const number = String(catIdx + 1).padStart(2, '0');
              return (
                <div key={cat.id} className="sk-row">
                  {/* Column 1: Exact svg-scroll-draw number (font: 500 11px/1 var(--mono) in --accent) */}
                  <span className="sk-num">
                    {number}
                  </span>

                  {/* Column 2: Exact svg-scroll-draw title (clamp(20px, 2vw, 28px) weight 500) */}
                  <div className="min-w-0">
                    <h3 className="sk-title">
                      {cat.category}
                    </h3>

                    {/* Skill Badges below title */}
                    <div className="mt-3.5 flex flex-wrap gap-2.5 sm:gap-3 items-center">
                      {cat.skills.map((skill, idx) => {
                        const iconPath = skillIconMap[skill];
                        return (
                          <div
                            key={idx}
                            className="group inline-flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-(--panel) border border-(--line) hover:border-(--line-2) transition-all duration-200"
                          >
                            {iconPath && (
                              <svg
                                role="img"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-(--fg-2) group-hover:text-(--accent) transition-colors shrink-0"
                                aria-hidden="true"
                              >
                                <path d={iconPath} />
                              </svg>
                            )}
                            <span className="text-xs font-mono font-medium text-(--fg) tracking-tight">
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
