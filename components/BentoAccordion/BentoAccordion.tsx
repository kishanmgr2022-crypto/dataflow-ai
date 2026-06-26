'use client';

import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react';
import { FEATURES, type Feature } from '@/lib/features-data';
import './bento-accordion.css';

/* ── Inline SVG Icons ── */
function FeatureIcon({ icon }: { icon: string }) {
  const size = 28;
  const icons: Record<string, ReactNode> = {
    pipeline: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h4M14 6h6M4 12h16M4 18h6M14 18h6" />
        <circle cx="11" cy="6" r="3" />
        <circle cx="11" cy="18" r="3" />
      </svg>
    ),
    transform: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    sync: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2v6h-6" />
        <path d="M3 12a9 9 0 0115.36-6.36L21 8" />
        <path d="M3 22v-6h6" />
        <path d="M21 12a9 9 0 01-15.36 6.36L3 16" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    builder: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    analytics: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  };

  return (
    <span className="bento-icon inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
      {icons[icon] || icons.analytics}
    </span>
  );
}

/* ── Chevron ── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`accordion-chevron ${open ? 'accordion-chevron--open' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

const BREAKPOINT = 768;
const DEBOUNCE_MS = 100;

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeIndexRef = useRef<number | null>(null);
  const isUserTriggeredRef = useRef(true);
  const wasBelowBreakpointRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const accordionContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sync ref whenever state changes
  const updateActiveIndex = useCallback((index: number | null, userTriggered = true) => {
    activeIndexRef.current = index;
    isUserTriggeredRef.current = userTriggered;
    setActiveIndex(index);
  }, []);

  // Handle bento hover
  const handleBentoHover = useCallback(
    (index: number) => {
      updateActiveIndex(index, true);
    },
    [updateActiveIndex]
  );

  const handleBentoLeave = useCallback(() => {
    updateActiveIndex(null, true);
  }, [updateActiveIndex]);

  // Handle accordion click
  const handleAccordionClick = useCallback(
    (index: number) => {
      const newIndex = activeIndexRef.current === index ? null : index;
      updateActiveIndex(newIndex, true);
    },
    [updateActiveIndex]
  );

  // ResizeObserver with debounce
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Determine initial state
    wasBelowBreakpointRef.current = window.innerWidth < BREAKPOINT;

    let debounceTimer: ReturnType<typeof setTimeout>;

    const observer = new ResizeObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const isBelowNow = window.innerWidth < BREAKPOINT;
        const wasBelowBefore = wasBelowBreakpointRef.current;

        // Only act on actual breakpoint crossings
        if (isBelowNow !== wasBelowBefore) {
          wasBelowBreakpointRef.current = isBelowNow;

          if (isBelowNow) {
            // Desktop → Mobile: sync activeIndex to accordion (instant, no animation)
            const currentIndex = activeIndexRef.current;
            if (currentIndex !== null) {
              updateActiveIndex(currentIndex, false); // false = resize-triggered → instant
            }
          } else {
            // Mobile → Desktop: just ensure state is synced
            const currentIndex = activeIndexRef.current;
            if (currentIndex !== null) {
              updateActiveIndex(currentIndex, true);
            }
          }
        }
      }, DEBOUNCE_MS);
    });

    observer.observe(wrapper);

    return () => {
      clearTimeout(debounceTimer);
      observer.disconnect();
    };
  }, [updateActiveIndex]);

  return (
    <section id="features" aria-labelledby="features-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Everything you need to{' '}
            <span className="gradient-text">automate data</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Six powerful capabilities that work together to transform how your
            team handles data — from ingestion to insight.
          </p>
        </div>

        <div ref={wrapperRef} className="bento-wrapper scroll-animate">
          {/* Desktop: Bento Grid */}
          <div className="bento-grid" onMouseLeave={handleBentoLeave}>
            {FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className={`bento-card bento-span-c${feature.gridSpan.col}-r${feature.gridSpan.row} ${
                  activeIndex === index ? 'bento-card--active' : ''
                } ${activeIndex !== null && activeIndex !== index ? 'bento-card--dimmed' : ''}`}
                onMouseEnter={() => handleBentoHover(index)}
                role="group"
                aria-label={feature.title}
              >
                {/* Feature illustration */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <img
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-20 transition-opacity duration-200"
                    style={activeIndex === index ? { opacity: 0.35 } : {}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-card)] via-[var(--color-dark-card)]/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <FeatureIcon icon={feature.icon} />
                  <h3
                    className="mt-4 text-lg font-semibold text-[var(--color-text)]"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Accordion */}
          <div className="accordion-list" role="list">
            {FEATURES.map((feature, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={feature.id}
                  className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}
                  role="listitem"
                >
                  <button
                    className="accordion-header"
                    onClick={() => handleAccordionClick(index)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${feature.id}`}
                  >
                    <span className="accordion-header-left">
                      <FeatureIcon icon={feature.icon} />
                      <h3
                        className="text-base font-semibold text-[var(--color-text)]"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                      >
                        {feature.title}
                      </h3>
                    </span>
                    <Chevron open={isOpen} />
                  </button>
                  <div
                    id={`accordion-panel-${feature.id}`}
                    ref={(el) => { accordionContentRefs.current[index] = el; }}
                    className={`accordion-content ${isOpen ? 'accordion-content--open' : ''} ${
                      isOpen && !isUserTriggeredRef.current ? 'accordion-content--instant' : ''
                    }`}
                    role="region"
                    aria-labelledby={feature.id}
                  >
                    <div className="accordion-body">
                      <img
                        src={feature.image}
                        alt={`${feature.title} illustration`}
                        width={400}
                        height={200}
                        loading="lazy"
                        className="w-full h-32 object-cover rounded-lg mb-3 opacity-80"
                      />
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {feature.description}
                      </p>
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
