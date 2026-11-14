import React, { useState, useEffect } from 'react';
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
  const [heroProgress, setHeroProgress] = useState(0);
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

          // Hero scroll distance
          const heroP = Math.min(1, Math.max(0, scrollY / vh));
          setHeroProgress(heroP);

          // Full document progress
          const totalHeight = document.documentElement.scrollHeight - vh;
          const docP = totalHeight > 0 ? scrollY / totalHeight : 0;
          setDocProgress(docP);

          // Active section tracking
          const scrollPos = scrollY + vh * 0.35;
          const sectionIds = ['skills', 'experience', 'projects', 'opensource', 'achievements', 'resume'];
          let currentSec = '';
          for (const sId of sectionIds) {
            const el = document.getElementById(sId);
            if (el && el.offsetTop <= scrollPos) {
              currentSec = sId;
            }
          }
          if (scrollY + vh >= document.documentElement.scrollHeight - 50) {
            currentSec = 'resume';
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
        <Hero scrollProgress={heroProgress} />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Achievements />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
