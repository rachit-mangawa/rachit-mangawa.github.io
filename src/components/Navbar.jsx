import React, { useState } from 'react';
import data from '../data.json';
import { useTheme } from '../hooks/useTheme';

export default function Navbar({ scrollProgress = 0, activeSection = '' }) {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Achievements', href: '#achievements' },
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
        <a className="nav-brand" href="#top">
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
          <a
            href={data.personal.github}
            className="nav-gh"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            href={data.personal.linkedin}
            className="nav-gh"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

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
            className="btn btn-sm btn-solid hidden sm:inline-flex"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="nav-drawer" id="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-sm py-2 text-[var(--fg-2)] hover:text-[var(--fg)] border-b border-[var(--line)] last:border-none flex items-center justify-between"
            >
              <span>{link.label}</span>
              {link.isExternal && <span className="text-xs opacity-70">↗</span>}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-solid w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              View Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
