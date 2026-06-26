'use client';

import { usePricingState, usePricingActions } from './PricingContext';

export function BillingToggle() {
  const { isAnnual } = usePricingState();
  const { toggleBilling } = usePricingActions();

  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-sm font-medium transition-colors duration-150 ${
          !isAnnual ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'
        }`}
      >
        Monthly
      </span>

      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={toggleBilling}
        className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        style={{
          background: isAnnual
            ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
            : 'var(--color-border)',
        }}
      >
        <span
          className="inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200"
          style={{
            transform: isAnnual ? 'translateX(24px)' : 'translateX(4px)',
          }}
        />
      </button>

      <span
        className={`text-sm font-medium transition-colors duration-150 ${
          isAnnual ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'
        }`}
      >
        Annual
      </span>

      {isAnnual && (
        <span className="ml-1 inline-flex items-center rounded-full bg-[var(--color-success)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-success)]">
          Save 20%
        </span>
      )}
    </div>
  );
}
