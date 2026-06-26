'use client';

const testimonials = [
  {
    quote:
      'DataFlow AI cut our pipeline development time by 80%. What used to take weeks now takes hours.',
    author: 'Sarah Chen',
    title: 'VP of Engineering',
    company: 'TechCorp',
    initials: 'SC',
    color: 'var(--color-primary)',
  },
  {
    quote:
      'The AI transformations are game-changing. We automated our entire data quality workflow overnight.',
    author: 'Marcus Rodriguez',
    title: 'Head of Data',
    company: 'ScaleUp Inc',
    initials: 'MR',
    color: 'var(--color-secondary)',
  },
  {
    quote:
      'Enterprise-grade reliability with startup-level ease of use. Best data platform we have ever used.',
    author: 'Priya Sharma',
    title: 'CTO',
    company: 'DataFirst',
    initials: 'PS',
    color: 'var(--color-accent)',
  },
];

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="var(--color-secondary)"
      aria-hidden="true"
    >
      <path d="M8 0l2.47 4.84L16 5.63l-4 3.77.94 5.32L8 12.26l-4.94 2.46.94-5.32-4-3.77 5.53-.79L8 0z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="var(--color-primary)"
      opacity="0.15"
      aria-hidden="true"
      className="absolute top-6 right-6"
    >
      <path d="M10.3 12.5C7.5 14.2 6 16.8 6 20c0 1.4.5 2.6 1.5 3.5S9.5 25 11 25c1.3 0 2.4-.5 3.3-1.4.9-.9 1.4-2 1.4-3.3 0-1.2-.4-2.2-1.3-3-.8-.8-1.8-1.3-3-1.3-.3 0-.7.1-1.1.2.8-2.3 2.5-4 5-5.2L13 8c-.5.3-1.3 1.2-2.2 2.2-.2.3-.4.6-.5 1v1.3zm12 0C19.5 14.2 18 16.8 18 20c0 1.4.5 2.6 1.5 3.5S21.5 25 23 25c1.3 0 2.4-.5 3.3-1.4.9-.9 1.4-2 1.4-3.3 0-1.2-.4-2.2-1.3-3-.8-.8-1.8-1.3-3-1.3-.3 0-.7.1-1.1.2.8-2.3 2.5-4 5-5.2L25 8c-.5.3-1.3 1.2-2.2 2.2-.2.3-.4.6-.5 1v1.3z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28 relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,206,201,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Loved by Data Teams{' '}
            <span className="gradient-text">Everywhere</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Join thousands of teams that trust DataFlow AI to power their most
            critical data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 scroll-animate">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="relative glass-card p-6 lg:p-8 flex flex-col"
            >
              <QuoteIcon />

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--color-text)] text-sm sm:text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-[var(--color-text)]">
                    {t.author}
                  </cite>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    {t.title}, {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
