'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-dark)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <rect
                width="32"
                height="32"
                rx="8"
                fill="url(#logo-gradient)"
              />
              <path
                d="M10 16L14 12L18 16L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 20L14 16L18 20L22 16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                >
                  <stop stopColor="var(--color-primary)" />
                  <stop offset="1" stopColor="var(--color-secondary)" />
                </linearGradient>
              </defs>
            </svg>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              DataFlow{' '}
              <span className="gradient-text">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
            >
              Testimonials
            </a>
            <a href="#pricing" className="btn-primary text-sm !py-2.5 !px-5">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)] animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="btn-primary text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
