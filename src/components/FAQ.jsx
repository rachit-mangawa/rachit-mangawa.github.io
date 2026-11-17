import React from 'react';

const faqs = [
  {
    q: "Who is Rachit Mangawa and what is his background?",
    a: "Rachit Mangawa is a Software Engineer specializing in low-latency systems engineering, machine learning runtimes, and AI retrieval architectures. He is a final-year undergraduate pursuing a B.Tech. in Computer Science & Artificial Intelligence (CSAI) at Netaji Subhas University of Technology (NSUT), Delhi (Class of 2027), and former Software Developer Intern at UIDAI (Aadhaar)."
  },
  {
    q: "What is HeartFlow OS and what problem does it solve?",
    a: "HeartFlow OS is a deterministic edge AI medical telemetry runtime and C99 embedded transpiler engineered by Rachit. It compiles 5-model Scikit-Learn soft-voting ensembles into zero-malloc C99 headers (<512B stack, 8.15KB SRAM) for microcontrollers, achieving 18.4µs on-device inference with a -76.4% INT8 SRAM reduction, paired with a 60 FPS Web Serial oscillograph."
  },
  {
    q: "What engineering work did Rachit perform at UIDAI (Aadhaar)?",
    a: "At UIDAI (Aadhaar), Rachit engineered an air-gapped multilingual document ingestion pipeline for 50MB scanned PDFs across 12 Indian languages using OpenCV, Tesseract OCR, local Ollama inference, and hybrid FAISS + BM25 retrieval with Cross-Encoder reranking. He also developed an async ETL pipeline ingesting 100K-row workbooks in 5–15s via SQLite WAL batch upserts across 4.2M records, keeping peak RAM strictly under 16GB."
  },
  {
    q: "What upstream contribution did Rachit make to TensorFlow Core?",
    a: "Rachit resolved an automatic differentiation numerical limit bug in TensorFlow Core (Merged PR #120944 for Issue #120578), where tf.math.bessel_i1 autodiff at x=0 incorrectly evaluated to 1.0 instead of 0.5. His patch enforced true mathematical limit continuity in math_grad.py accompanied by Python and C++ unit regression tests."
  },
  {
    q: "What are Rachit's competitive programming credentials?",
    a: "Rachit is a LeetCode Knight with a peak rating of 1987 (Top 2.84% worldwide) and ranked 316th out of 38,291 participants (Top 0.83%) in Biweekly Contest 190 (solving all 4 problems). On Codeforces, he holds a Specialist rating of 1422 (Division 2 competitor, handle: @i_win_again)."
  },
  {
    q: "How can recruiters and engineering teams get in touch with Rachit?",
    a: "Rachit can be reached directly via email at rachit.mangawa.work@gmail.com, on LinkedIn at linkedin.com/in/rachit-mangawa, and on GitHub at github.com/rachit-mangawa. His full PDF resume is downloadable at rachit-mangawa.github.io/resume.pdf."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="sec" aria-labelledby="faq-title">
      <div className="sec-head mb-0!">
        {/* Left Column: Monospace Category Coordinate */}
        <span className="label"><b>06</b> / aeo-faq</span>

        {/* Right Column: Title, Subtitle, and FAQ Accordion */}
        <div>
          <h2 id="faq-title" className="h2">
            Frequently Asked Questions<span className="text-(--accent)">.</span>
          </h2>
          <p className="body">
            Factual summaries and entity data answering common queries for technical recruiters, engineering leaders, and answer engines.
          </p>

          <div className="mt-10 sm:mt-14 space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-(--line) rounded-sm bg-(--panel) transition-colors hover:border-(--line-2)"
              >
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 font-medium text-base sm:text-lg text-(--fg) cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-(--accent)">
                  <span className="leading-snug">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-(--fg-3) font-mono text-sm transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-sm sm:text-base leading-relaxed text-(--fg-2) border-t border-(--line)/50">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
