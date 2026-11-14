import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import data from './data.json';

export default function App() {
  const [heroProgress, setHeroProgress] = useState(0);
  const [docProgress, setDocProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Graceful backward compatibility for old /rachit-mangawa links
    if (window.location.pathname.startsWith('/rachit-mangawa')) {
      const cleanPath = '/' + window.location.pathname.replace(/^\/rachit-mangawa\/?/, '') + window.location.search + window.location.hash;
      window.history.replaceState(null, '', cleanPath || '/');
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const vh = window.innerHeight;

          // Hero is 200vh, so its pin scroll distance is 1vh
          const heroP = Math.min(1, Math.max(0, scrollY / vh));
          setHeroProgress(heroP);

          // Full document progress
          const totalHeight = document.documentElement.scrollHeight - vh;
          const docP = totalHeight > 0 ? scrollY / totalHeight : 0;
          setDocProgress(docP);

          // Active section tracking
          const scrollPos = scrollY + vh * 0.35;
          const sectionIds = ['about', 'skills', 'experience', 'projects', 'opensource', 'achievements', 'resume'];
          let currentSec = '';
          for (const sId of sectionIds) {
            const el = document.getElementById(sId);
            if (el && el.offsetTop <= scrollPos) {
              currentSec = sId;
            }
          }
          setActiveSection(currentSec);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="home min-h-screen bg-(--bg) text-(--fg) selection:bg-(--fg) selection:text-(--bg)">
      {/* Top Fixed Header */}
      <Navbar scrollProgress={docProgress} activeSection={activeSection} />

      {/* Main Content Area */}
      <main>
        {/* Pinned 200vh Hero Stage */}
        <Hero scrollProgress={heroProgress} />

        {/* Section 01: About */}
        <section id="about" className="sec" aria-labelledby="about-title">
          <div className="sec-head">
            <span className="label"><b>01</b> / profile</span>
            <div>
              <h2 id="about-title" className="h2">Hi there!</h2>
              <p className="body">
                I build AI stuff and anything else I find interesting, RAG pipelines, multi agent systems, Full Stack apps, and generally anything that looks shiny at 2AM in the morning :)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-(--fg-2) leading-relaxed text-base">
            <div className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)]">
              <span className="font-mono text-xs text-[var(--accent)] tracking-wider uppercase block mb-3">Foundational Approach</span>
              <p>
                From bare-metal C99 compilers and distributed backend gateways to responsive, accessible client interfaces, every layer is treated as a craft. I design systems with minimal dependencies and predictable runtime characteristics.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)]">
              <span className="font-mono text-xs text-[var(--accent)] tracking-wider uppercase block mb-3">Core Philosophy</span>
              <p>
                Performance is not an afterthought; it is an architectural contract. I prioritize zero-allocation hot paths, cache-conscious data layouts, and deterministic execution profiles over framework churn.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: Skills */}
        <section id="skills" className="sec" aria-labelledby="skills-title">
          <div className="sec-head">
            <span className="label"><b>02</b> / stack matrix</span>
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
                className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)]"
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-(--fg) font-semibold mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-(--bg) border border-[var(--line)] text-xs font-mono text-(--fg-2)"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 03: Experience */}
        <section id="experience" className="sec" aria-labelledby="exp-title">
          <div className="sec-head">
            <span className="label"><b>03</b> / work history</span>
            <div>
              <h2 id="exp-title" className="h2">Production deployments at population scale</h2>
              <p className="body">
                Designing mission-critical infrastructure, microservices, and distributed streaming engines.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {data.experience?.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--line-2)] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-xl font-medium text-(--fg)">{exp.role}</h3>
                  <span className="font-mono text-xs text-[var(--fg-3)]">{exp.period}</span>
                </div>
                <div className="font-mono text-xs text-[var(--accent)] mb-4">{exp.company}</div>

                <ul className="space-y-2 mb-6 text-sm text-(--fg-2) leading-relaxed list-disc list-inside">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-[var(--fg-3)]">
                  {exp.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded bg-(--bg) border border-[var(--line)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Projects */}
        <section id="projects" className="sec" aria-labelledby="proj-title">
          <div className="sec-head">
            <span className="label"><b>04</b> / selected projects</span>
            <div>
              <h2 id="proj-title" className="h2">Systems, engines, and production code</h2>
              <p className="body">
                Custom microkernels, distributed gateways, neural NLP classifiers, and high-concurrency memory engines.
              </p>
            </div>
          </div>

          <div className="uc-grid">
            {/* Project 1: HeartFlow OS */}
            <article className="uc-tile">
              <div className="uc-panel">
                <span className="uc-index" aria-hidden="true">01</span>
                <span className="uc-tag">Microkernel OS</span>
                <div className="uc-art">
                  <svg className="uc-svg" viewBox="0 0 400 300" aria-hidden="true">
                    {/* Drafting grid */}
                    <line x1="30" y1="50" x2="370" y2="50" className="uc-h" />
                    <line x1="30" y1="250" x2="370" y2="250" className="uc-h" />
                    <line x1="200" y1="30" x2="200" y2="270" className="uc-h" />
                    {/* Kernel ring boxes */}
                    <rect x="50" y="70" width="300" height="160" rx="8" className="uc-h" />
                    <rect x="80" y="95" width="240" height="110" rx="6" className="uc-s" />
                    <rect x="120" y="120" width="160" height="60" rx="4" className="uc-p" />
                    {/* Center Ring 0 Core */}
                    <circle cx="200" cy="150" r="14" className="uc-a" />
                    <circle cx="200" cy="150" r="4" className="uc-p" />
                    {/* Paging bus lines */}
                    <path d="M 60 150 L 120 150 M 280 150 L 340 150" className="uc-a" />
                    <path d="M 150 70 L 150 95 M 250 70 L 250 95" className="uc-p" />
                    <path d="M 150 205 L 150 230 M 250 205 L 250 230" className="uc-p" />
                    {/* Drafting annotations */}
                    <text x="60" y="85" className="uc-t">RING 3: USERLAND</text>
                    <text x="90" y="110" className="uc-t">RING 1: DEVICE DRIVERS</text>
                    <text x="130" y="136" className="uc-t">RING 0: SCHEDULER</text>
                    <text x="350" y="85" textAnchor="end" className="uc-t">CR3 PAGING</text>
                    <text x="350" y="240" textAnchor="end" className="uc-t">0x00100000</text>
                    <text x="60" y="240" className="uc-t">RR · PREEMPTIVE</text>
                  </svg>
                </div>
              </div>
              <h3 className="uc-title">
                <a href={data.projects[0].repo} target="_blank" rel="noopener noreferrer">
                  {data.projects[0].title}
                </a>
                <span className="font-mono text-xs text-[var(--fg-3)]">↗</span>
              </h3>
              <p className="uc-desc">{data.projects[0].description}</p>
              <code className="uc-code">
                <span className="uc-fn">kernel_init</span>(<span className="uc-str">&apos;paging_enabled&apos;</span>, <span className="uc-str">&apos;rr_scheduler&apos;</span>)
              </code>
            </article>

            {/* Project 2: HF Pluggable Gateway */}
            <article className="uc-tile">
              <div className="uc-panel">
                <span className="uc-index" aria-hidden="true">02</span>
                <span className="uc-tag">API Gateway</span>
                <div className="uc-art">
                  <svg className="uc-svg" viewBox="0 0 400 300" aria-hidden="true">
                    {/* Gateway Ingress Pipeline */}
                    <line x1="30" y1="150" x2="110" y2="150" className="uc-p" />
                    {/* Rate Limiter Bucket */}
                    <rect x="110" y="90" width="70" height="120" rx="6" className="uc-s" />
                    {/* Token Level */}
                    <line x1="110" y1="140" x2="180" y2="140" className="uc-a" />
                    <line x1="110" y1="165" x2="180" y2="165" className="uc-a" />
                    {/* Redis Cache Box */}
                    <rect x="220" y="70" width="130" height="60" rx="6" className="uc-h" />
                    {/* Downstream Service Dispatch */}
                    <rect x="220" y="170" width="130" height="60" rx="6" className="uc-h" />
                    {/* Bus connecting paths */}
                    <path d="M 180 150 L 205 150 L 205 100 L 220 100" className="uc-p" />
                    <path d="M 205 150 L 205 200 L 220 200" className="uc-p" />
                    {/* Feedback loop */}
                    <path d="M 285 70 C 285 45, 145 45, 145 90" className="uc-a" strokeDasharray="3 3" />
                    {/* Drafting annotations */}
                    <text x="40" y="142" className="uc-t">INGRESS</text>
                    <text x="120" y="110" className="uc-t">BUCKET</text>
                    <text x="235" y="95" className="uc-t">REDIS CLUSTER</text>
                    <text x="235" y="112" className="uc-t">&lt;1ms LATENCY</text>
                    <text x="235" y="195" className="uc-t">BACKEND POOL</text>
                    <text x="235" y="212" className="uc-t">10K RPS FLOW</text>
                    <text x="200" y="42" textAnchor="middle" className="uc-t">TOKEN REFILL SYNC</text>
                  </svg>
                </div>
              </div>
              <h3 className="uc-title">
                <a href={data.projects[1].repo} target="_blank" rel="noopener noreferrer">
                  {data.projects[1].title}
                </a>
                <span className="font-mono text-xs text-[var(--fg-3)]">↗</span>
              </h3>
              <p className="uc-desc">{data.projects[1].description}</p>
              <code className="uc-code">
                <span className="uc-fn">gateway.Route</span>(<span className="uc-str">&apos;token_bucket&apos;</span>, <span className="uc-str">&apos;cluster_sync&apos;</span>)
              </code>
            </article>

            {/* Project 3: Semantic Comment Analyzer */}
            <article className="uc-tile">
              <div className="uc-panel">
                <span className="uc-index" aria-hidden="true">03</span>
                <span className="uc-tag">NLP Classifier</span>
                <div className="uc-art">
                  <svg className="uc-svg" viewBox="0 0 400 300" aria-hidden="true">
                    {/* Transformer Attention Matrix */}
                    <line x1="50" y1="150" x2="100" y2="150" className="uc-p" />
                    {/* Neural Layers */}
                    <circle cx="120" cy="90" r="10" className="uc-s" />
                    <circle cx="120" cy="150" r="10" className="uc-a" />
                    <circle cx="120" cy="210" r="10" className="uc-s" />

                    <circle cx="200" cy="70" r="10" className="uc-s" />
                    <circle cx="200" cy="120" r="10" className="uc-p" />
                    <circle cx="200" cy="180" r="10" className="uc-a" />
                    <circle cx="200" cy="230" r="10" className="uc-s" />

                    <circle cx="280" cy="110" r="10" className="uc-a" />
                    <circle cx="280" cy="190" r="10" className="uc-s" />

                    {/* Dense connections */}
                    <line x1="130" y1="90" x2="190" y2="70" className="uc-h" />
                    <line x1="130" y1="90" x2="190" y2="120" className="uc-h" />
                    <line x1="130" y1="150" x2="190" y2="120" className="uc-p" />
                    <line x1="130" y1="150" x2="190" y2="180" className="uc-a" />
                    <line x1="130" y1="210" x2="190" y2="180" className="uc-h" />
                    <line x1="130" y1="210" x2="190" y2="230" className="uc-h" />

                    <line x1="210" y1="120" x2="270" y2="110" className="uc-p" />
                    <line x1="210" y1="180" x2="270" y2="110" className="uc-a" />
                    <line x1="210" y1="180" x2="270" y2="190" className="uc-h" />

                    {/* Output vectors */}
                    <line x1="290" y1="110" x2="350" y2="110" className="uc-a" />
                    <line x1="290" y1="190" x2="350" y2="190" className="uc-s" />

                    {/* Drafting annotations */}
                    <text x="40" y="142" className="uc-t">INPUT</text>
                    <text x="120" y="60" textAnchor="middle" className="uc-t">EMBED</text>
                    <text x="200" y="45" textAnchor="middle" className="uc-t">ATTENTION</text>
                    <text x="280" y="85" textAnchor="middle" className="uc-t">DENSE</text>
                    <text x="355" y="106" className="uc-t">SENTIMENT</text>
                    <text x="355" y="122" className="uc-t">+0.94</text>
                    <text x="355" y="186" className="uc-t">TOXICITY</text>
                    <text x="355" y="202" className="uc-t">0.02</text>
                  </svg>
                </div>
              </div>
              <h3 className="uc-title">
                <a href={data.projects[2].repo} target="_blank" rel="noopener noreferrer">
                  {data.projects[2].title}
                </a>
                <span className="font-mono text-xs text-[var(--fg-3)]">↗</span>
              </h3>
              <p className="uc-desc">{data.projects[2].description}</p>
              <code className="uc-code">
                <span className="uc-fn">tf.classify</span>(<span className="uc-str">&apos;bert_encoder&apos;</span>, <span className="uc-str">&apos;batch_size: 64&apos;</span>)
              </code>
            </article>

            {/* Project 4: Vera Engine */}
            <article className="uc-tile">
              <div className="uc-panel">
                <span className="uc-index" aria-hidden="true">04</span>
                <span className="uc-tag">Storage Engine</span>
                <div className="uc-art">
                  <svg className="uc-svg" viewBox="0 0 400 300" aria-hidden="true">
                    {/* B-Tree Root Node */}
                    <rect x="150" y="50" width="100" height="38" rx="4" className="uc-p" />
                    {/* Level 1 Nodes */}
                    <rect x="60" y="130" width="80" height="36" rx="4" className="uc-s" />
                    <rect x="160" y="130" width="80" height="36" rx="4" className="uc-a" />
                    <rect x="260" y="130" width="80" height="36" rx="4" className="uc-s" />
                    {/* Tree links */}
                    <path d="M 180 88 L 100 130" className="uc-h" />
                    <path d="M 200 88 L 200 130" className="uc-a" />
                    <path d="M 220 88 L 300 130" className="uc-h" />
                    {/* Zero-Allocation Columnar Vector Buffer */}
                    <rect x="50" y="210" width="300" height="40" rx="4" className="uc-h" />
                    <line x1="110" y1="210" x2="110" y2="250" className="uc-h" />
                    <line x1="170" y1="210" x2="170" y2="250" className="uc-h" />
                    <line x1="230" y1="210" x2="230" y2="250" className="uc-h" />
                    <line x1="290" y1="210" x2="290" y2="250" className="uc-h" />
                    {/* Active pointer to block */}
                    <path d="M 200 166 L 200 210" className="uc-a" />
                    <circle cx="200" cy="230" r="5" className="uc-a" />
                    {/* Drafting annotations */}
                    <text x="200" y="73" textAnchor="middle" className="uc-t">B-TREE ROOT</text>
                    <text x="100" y="152" textAnchor="middle" className="uc-t">LEAF A</text>
                    <text x="200" y="152" textAnchor="middle" className="uc-t">PAGE 0x4F</text>
                    <text x="300" y="152" textAnchor="middle" className="uc-t">LEAF C</text>
                    <text x="60" y="202" className="uc-t">ZERO-ALLOC BUFFER</text>
                    <text x="340" y="202" textAnchor="end" className="uc-t">SIMD SCAN</text>
                  </svg>
                </div>
              </div>
              <h3 className="uc-title">
                <a href={data.projects[3].repo} target="_blank" rel="noopener noreferrer">
                  {data.projects[3].title}
                </a>
                <span className="font-mono text-xs text-[var(--fg-3)]">↗</span>
              </h3>
              <p className="uc-desc">{data.projects[3].description}</p>
              <code className="uc-code">
                <span className="uc-fn">engine.Scan</span>(<span className="uc-str">&apos;zero_alloc&apos;</span>, <span className="uc-str">&apos;b_tree_idx&apos;</span>)
              </code>
            </article>
          </div>
        </section>

        {/* Section 05: Open Source */}
        <section id="opensource" className="sec" aria-labelledby="os-title">
          <div className="sec-head">
            <span className="label"><b>05</b> / open source</span>
            <div>
              <h2 id="os-title" className="h2">Contributing to industry foundations</h2>
              <p className="body">
                Upstream contributions to core machine learning runtimes, kernel math verifications, and global tooling.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-[var(--panel)] border border-[var(--line)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-semibold">Core Contribution</span>
              <h3 className="text-xl font-medium mt-1 text-(--fg)">{data.openSource.project} — PR #{data.openSource.prNumber}</h3>
              <p className="text-sm text-(--fg-2) mt-2 max-w-2xl leading-relaxed">
                {data.openSource.contribution}. Fixed gradient math and verification issue #{data.openSource.issueNumber}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-[var(--fg-3)]">
                {data.openSource.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-(--bg) border border-[var(--line)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={data.openSource.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid inline-flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <span>View Pull Request</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Section 06: Achievements */}
        <section id="achievements" className="sec" aria-labelledby="ach-title">
          <div className="sec-head">
            <span className="label"><b>06</b> / verification</span>
            <div>
              <h2 id="ach-title" className="h2">Competitive standing & technical rankings</h2>
              <p className="body">
                Top percentile competitive programming and algorithmic problem solving across global platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* LeetCode Card */}
            <a
              href={data.personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--line-2)] transition-colors block"
            >
              <div className="font-mono text-xs text-[var(--fg-3)]">LEETCODE</div>
              <div className="text-2xl font-semibold mt-2 text-(--fg)">{data.ratings.leetcode.rank}</div>
              <div className="text-xs text-(--fg-2) font-mono mt-1">Rating {data.ratings.leetcode.rating}</div>
              <div className="text-[11px] text-[var(--accent)] font-mono mt-3 font-medium">{data.ratings.leetcode.topPercent} Global</div>
            </a>

            {/* Codeforces Card */}
            <a
              href={data.personal.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--line-2)] transition-colors block"
            >
              <div className="font-mono text-xs text-[var(--fg-3)]">CODEFORCES</div>
              <div className="text-2xl font-semibold mt-2 text-(--fg)">{data.ratings.codeforces.rank}</div>
              <div className="text-xs text-(--fg-2) font-mono mt-1">Rating {data.ratings.codeforces.rating}</div>
              <div className="text-[11px] text-[var(--fg-3)] font-mono mt-3">@{data.personal.codeforcesHandle}</div>
            </a>

            {/* GitHub Card */}
            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--line-2)] transition-colors block"
            >
              <div className="font-mono text-xs text-[var(--fg-3)]">GITHUB</div>
              <div className="text-2xl font-semibold mt-2 text-(--fg)">Open Source</div>
              <div className="text-xs text-(--fg-2) font-mono mt-1">12+ Repositories</div>
              <div className="text-[11px] text-[var(--fg-3)] font-mono mt-3">@{data.personal.githubHandle}</div>
            </a>

            {/* Kaggle Card */}
            <a
              href={data.personal.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[var(--panel)] border border-[var(--line)] hover:border-[var(--line-2)] transition-colors block"
            >
              <div className="font-mono text-xs text-[var(--fg-3)]">KAGGLE</div>
              <div className="text-2xl font-semibold mt-2 text-(--fg)">Machine Learning</div>
              <div className="text-xs text-(--fg-2) font-mono mt-1">Datasets & NLP</div>
              <div className="text-[11px] text-[var(--fg-3)] font-mono mt-3">@{data.personal.kaggleHandle}</div>
            </a>
          </div>
        </section>

        {/* Section 07: Resume & Direct Connect */}
        <section id="resume" className="sec text-center" aria-labelledby="resume-title">
          <div className="max-w-2xl mx-auto">
            <span className="label"><b>07</b> / resume &amp; connect</span>
            <h2 id="resume-title" className="h2 mx-auto mt-4 mb-4">Let&apos;s build something exceptional</h2>
            <p className="body mx-auto mb-8">
              Available for software engineering roles, high-impact systems projects, and collaborations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid inline-flex items-center gap-2"
              >
                <span>Resume</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="btn inline-flex items-center gap-2"
              >
                <span>{data.personal.email}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] py-12 px-6 text-center text-xs font-mono text-[var(--fg-3)]">
        <p>© 2026 {data.personal.name}. All rights reserved. Hosted on GitHub Pages.</p>
      </footer>
    </div>
  );
}
