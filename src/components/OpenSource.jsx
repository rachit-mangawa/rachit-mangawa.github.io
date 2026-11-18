import React from 'react';
import data from '../data.json';
import { siTensorflow } from 'simple-icons';

export default function OpenSource() {
  const os = data.openSource;

  return (
    <section id="opensource" className="sec" aria-labelledby="os-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>03</b> / upstream</span>

        {/* Right Column: Title, Subtitle, and Contribution Registry */}
        <div>
          <h2 id="os-title" className="h2">Open Source Contributions<span className="text-(--accent)">.</span></h2>
          <p className="body">
            Upstream gradient math, numerical precision, and autodiff patches in major frameworks.
          </p>

          <div className="mt-10 sm:mt-14 exp-list">
            <div className="exp-entry">
              {/* Headline with TensorFlow Logo Tile */}
              <div className="mb-2">
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
                    <p className="text-xs font-mono text-(--fg-3) mt-1">
                      <span className="text-(--accent) font-semibold">{os.project}</span>
                      <span className="text-(--line-2) mx-1.5" aria-hidden="true">·</span>
                      <span>tensorflow/tensorflow</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem / Solution Table (Matching Achievements Table Format) */}
              <ul className="os-table">
                <li className="os-row">
                  <div className="os-left">
                    <span className="os-key">Problem</span>
                  </div>
                  <div className="os-mid">
                    <p className="os-desc">
                      In <code>tf.math.bessel_i1</code> autodiff, the mathematical limit at <code>x=0</code> returned <code>1.0</code> instead of <code>0.5</code>, causing silent numerical errors in calculus pipelines.
                    </p>
                  </div>
                  <div className="os-action">
                    <a
                      href={os.issueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link action-link-secondary"
                      aria-label={`View Issue #${os.issueNumber} on GitHub (opens in new tab)`}
                    >
                      <span>#{os.issueNumber}</span>
                      <span className="action-arrow" aria-hidden="true">↗</span>
                    </a>
                  </div>
                </li>

                <li className="os-row">
                  <div className="os-left">
                    <span className="os-key">Solution</span>
                  </div>
                  <div className="os-mid">
                    <p className="os-desc">
                      Patched <code>math_grad.py</code> with true limit handling and added comprehensive unit regression tests covering both <code>bessel_i1</code> and <code>bessel_i1e</code> across TensorFlow Python and C++ bindings.
                    </p>
                  </div>
                  <div className="os-action">
                    <a
                      href={os.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link action-link-primary"
                      aria-label={`View Merged PR #${os.prNumber} on GitHub (opens in new tab)`}
                    >
                      <span>#{os.prNumber}</span>
                      <span className="action-arrow" aria-hidden="true">↗</span>
                    </a>
                  </div>
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
