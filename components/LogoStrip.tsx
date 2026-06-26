export default function LogoStrip() {
  const logos = [
    'Google', 'Microsoft', 'Stripe', 'Shopify', 'Notion', 'Slack',
  ];

  return (
    <section
      id="social-proof"
      aria-label="Trusted by leading companies"
      className="py-12 border-y border-[var(--color-border)] overflow-hidden bg-[var(--color-dark-surface)]/50"
    >
      <p className="text-center text-sm text-[var(--color-text-muted)] mb-8 tracking-widest uppercase">
        Trusted by innovative teams worldwide
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--color-dark)] to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--color-dark)] to-transparent pointer-events-none" aria-hidden="true" />

        {/* Scrolling track */}
        <div className="flex animate-scroll-x" style={{ width: 'max-content' }}>
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center px-10 md:px-14"
            >
              <span
                className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-muted)] opacity-50 hover:opacity-80 transition-opacity duration-200 select-none whitespace-nowrap"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
