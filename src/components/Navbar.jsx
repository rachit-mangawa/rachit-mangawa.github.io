import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { useTheme } from '../hooks/useTheme';
import { trackEvent } from '../utils/analytics';

export default function Navbar({ scrollProgress = 0, activeSection = '' }) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Connect', href: '#connect' },
  ];

  const isScrolled = scrollProgress > 0.005 || mobileMenuOpen;

  return (
    <header className="nav" data-scrolled={isScrolled ? 'true' : 'false'}>
      {/* Top micro progress bar */}
      <div
        className="nav-progress"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
        aria-hidden="true"
      />

      <div className="nav-in">
        {/* Brand */}
        <a className="nav-brand" href="#top" aria-label={`${data.personal.name} home`}>
          <picture className="nav-logo-light">
            <source srcSet="/rachit-logo-black.webp" type="image/webp" />
            <img
              src="/rachit-logo-black.png"
              alt=""
              width="22"
              height="22"
              className="w-5.5 h-5.5 object-contain"
            />
          </picture>
          <picture className="nav-logo-dark">
            <source srcSet="/rachit-logo-white.webp" type="image/webp" />
            <img
              src="/rachit-logo-white.png"
              alt=""
              width="22"
              height="22"
              className="w-5.5 h-5.5 object-contain"
            />
          </picture>
          <span className="nav-word">{data.personal.githubHandle}</span>
        </a>

        {/* Desktop Links with Animated Underline */}
        <nav className="nav-links" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
            >
              {link.label}
              {link.isExternal && <span className="text-[10px] ml-1 opacity-70">↗</span>}
            </a>
          ))}
        </nav>

        {/* Right CTAs & Theme Toggle */}
        <div className="nav-right">
          {/* Theme Switcher Button */}
          <button
            type="button"
            className="nav-theme"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              /* Sun Icon for Light Mode */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
              </svg>
            ) : (
              /* Moon Icon for Dark Mode */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Primary Resume Solid Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('resume_download', { location: 'navbar' })}
            className="btn btn-sm btn-solid inline-flex"
          >
            Resume
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="nav-burger"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              /* Close (X) Icon */
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside className="nav-drawer" id="mobile-nav" aria-label="Mobile Navigation">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-(--line)">
              <div className="flex items-center gap-2">
                <picture className="nav-logo-light">
                  <source srcSet="/rachit-logo-black.webp" type="image/webp" />
                  <img
                    src="/rachit-logo-black.png"
                    alt=""
                    width="18"
                    height="18"
                    className="w-4.5 h-4.5 object-contain"
                  />
                </picture>
                <picture className="nav-logo-dark">
                  <source srcSet="/rachit-logo-white.webp" type="image/webp" />
                  <img
                    src="/rachit-logo-white.png"
                    alt=""
                    width="18"
                    height="18"
                    className="w-4.5 h-4.5 object-contain"
                  />
                </picture>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-(--fg-3)">
                  Index
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-(--fg-2) hover:text-(--fg) transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Clean Section Navigation Links matching web view */}
            <nav className="flex flex-col py-2" aria-label="Sections">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`nav-mobile-link ${isActive ? 'is-active' : ''}`}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
