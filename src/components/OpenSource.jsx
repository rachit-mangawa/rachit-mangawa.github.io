import React from 'react';
import data from '../data.json';
import { siTensorflow } from 'simple-icons';

export default function OpenSource() {
  const os = data.openSource;

  return (
    <section id="opensource" className="sec" aria-labelledby="os-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>04</b> / upstream</span>

        {/* Right Column: Title, Subtitle, and Contribution Registry */}
        <div>
          <h2 id="os-title" className="h2">Open Source Contributions<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Upstream gradient math, numerical precision, and autodiff patches in major frameworks.
          </p>

          <div className="mt-10 sm:mt-14 exp-list">
            <div className="exp-entry">
              {/* Top Partitioned Monospace Strip (.tb) & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="tb" aria-label="Project and Status">
                  <span className="text-(--accent) font-semibold tracking-wide">{os.shortProject || os.project}</span>
                  <span className="text-(--fg-2)">{os.status || 'Merged'}</span>
                </div>

                {/* Monospace Underline Action Links: Merged PR + Issue */}
                <div className="flex items-center gap-5">
                  <a
                    href={os.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link action-link-primary"
                    aria-label={`View Merged PR #${os.prNumber} on GitHub`}
                  >
                    <span>Merged PR #{os.prNumber}</span>
                  </a>
                  <a
                    href={os.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link action-link-secondary"
                    aria-label={`View Issue #${os.issueNumber} on GitHub`}
                  >
                    <span>Issue #{os.issueNumber}</span>
                  </a>
                </div>
              </div>

              {/* Headline with TensorFlow Logo Tile */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-(--panel) border border-(--line-2) shrink-0 flex items-center justify-center">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-[#FF6F00] shrink-0"
                      aria-hidden="true"
                    >
                      <path d={siTensorflow.path} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-(--fg) tracking-tight">{os.headline}</h3>
                    <p className="text-xs font-mono text-(--fg-3) mt-1">{os.subhead}</p>
                  </div>
                </div>
              </div>

              {/* Problem / Solution Table (Reference: svg-scroll-draw /docs .dc-opt) */}
              <ul className="os-table">
                <li className="os-row">
                  <span className="os-key">Problem</span>
                  <p className="os-desc">
                    {os.problem || "In tf.math.bessel_i1 autodiff, the mathematical limit at x=0 returned 1.0 instead of 0.5, causing silent numerical errors in calculus pipelines."}
                  </p>
                </li>
                <li className="os-row">
                  <span className="os-key">Solution</span>
                  <p className="os-desc">
                    {os.solution || "Patched math_grad.py with true limit handling and added comprehensive unit regression tests covering both bessel_i1 and bessel_i1e across TensorFlow Python and C++ bindings."}
                  </p>
                </li>
              </ul>

              {/* Stack Pills matching Skills & Experience */}
              <div className="mt-6 flex flex-wrap gap-2 items-center">
                {os.tags?.map((t, tIdx) => (
                  <span key={tIdx} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
