import React, { useState, useEffect } from 'react';
import { scrollReveal } from 'svg-scroll-draw/reveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Achievements from './components/Achievements';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  const [docProgress, setDocProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Graceful backward compatibility for old /rachit-mangawa links
    if (window.location.pathname.startsWith('/rachit-mangawa')) {
      const remaining = window.location.pathname.replace(/^\/rachit-mangawa\/?/, '').replace(/^\/+/, '');
      const cleanPath = '/' + (remaining ? remaining : '') + window.location.search + window.location.hash;
      window.history.replaceState(null, '', cleanPath || '/');
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const vh = window.innerHeight;

          // Full document progress
          const totalHeight = document.documentElement.scrollHeight - vh;
          const docP = totalHeight > 0 ? scrollY / totalHeight : 0;
          setDocProgress(docP);

          // Active section tracking
          const scrollPos = scrollY + vh * 0.35;
          const sectionIds = ['experience', 'projects', 'opensource', 'skills', 'achievements', 'connect'];
          let currentSec = '';
          for (const sId of sectionIds) {
            const el = document.getElementById(sId);
            if (el && el.offsetTop <= scrollPos) {
              currentSec = sId;
            }
          }
          if (scrollY + vh >= document.documentElement.scrollHeight - 50) {
            currentSec = 'connect';
          }
          setActiveSection(currentSec);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let revealInstance = null;
    try {
      revealInstance = scrollReveal('.sec-head, .exp-entry, .pj-row, .os-row, .sk-row, .ach-row', {
        preset: 'fadeUp',
        stagger: 0.08,
      });
    } catch {
      // Graceful fallback if unsupported
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      revealInstance?.destroy?.();
    };
  }, []);

  return (
    <div className="home min-h-screen bg-(--bg) text-(--fg) selection:bg-(--fg) selection:text-(--bg)">
      {/* Skip to Main Content Link for Keyboard and Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:px-4 focus:py-2 focus:bg-(--panel) focus:text-(--fg) focus:border focus:border-(--accent) focus:rounded-sm focus:shadow-md font-mono text-xs"
      >
        Skip to main content
      </a>

      {/* Top Fixed Header */}
      <Navbar scrollProgress={docProgress} activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Achievements />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
