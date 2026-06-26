'use client';

import { memo } from 'react';
import { PricingProvider } from './PricingContext';
import { PriceAtom } from './PriceAtom';
import { BillingToggle } from './BillingToggle';
import { CurrencySwitcher } from './CurrencySwitcher';
import { PRICING_MATRIX, TIER_KEYS, type TierKey } from '@/lib/pricing-matrix';

/* ── Checkmark Icon ── */
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="8" fill="var(--color-success)" opacity="0.15" />
      <path
        d="M5 8l2 2 4-4"
        stroke="var(--color-success)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Pricing Card ── */
interface PricingCardProps {
  tierKey: TierKey;
}

const PricingCard = memo(function PricingCard({ tierKey }: PricingCardProps) {
  const tier = PRICING_MATRIX.tiers[tierKey];
  const isHighlighted = tier.highlighted;

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-6 lg:p-8 transition-transform duration-200 ease-out hover:-translate-y-1 ${
        isHighlighted
          ? 'gradient-border bg-[var(--color-dark-card)] shadow-2xl shadow-[var(--color-primary)]/10 scale-[1.02] lg:scale-105'
          : 'glass-card'
      }`}
    >
      {/* Popular badge */}
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier name */}
      <h3
        className="text-lg font-semibold text-[var(--color-text)]"
        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
      >
        {tier.name}
      </h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        {tier.description}
      </p>

      {/* Price — ONLY this re-renders on toggle */}
      <div className="mt-6 mb-6">
        <PriceAtom tierKey={tierKey} />
      </div>

      {/* CTA Button */}
      <a
        href="#"
        className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-150 ${
          isHighlighted
            ? 'btn-primary'
            : 'btn-outline'
        }`}
      >
        {tier.cta}
      </a>

      {/* Feature list */}
      <ul className="mt-8 space-y-3 flex-1" role="list">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
});

/* ── Inner section — React.memo'd to NEVER re-render on pricing state change ── */
const PricingSectionInner = memo(
  function PricingSectionInner() {
    return (
      <div>
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <BillingToggle />
          <CurrencySwitcher />
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {TIER_KEYS.map((tierKey) => (
            <PricingCard key={tierKey} tierKey={tierKey} />
          ))}
        </div>
      </div>
    );
  },
  // Custom comparator: always returns true → component NEVER re-renders
  () => true
);

/* ── Public PricingSection — wraps everything in PricingProvider ── */
export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 sm:py-28 relative"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(108,92,231,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 scroll-animate">
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises. Every
            plan includes a 14-day free trial.
          </p>
        </div>

        <div className="scroll-animate">
          <PricingProvider>
            <PricingSectionInner />
          </PricingProvider>
        </div>
      </div>
    </section>
  );
}
