'use client';

import { usePricingState, usePricingActions } from './PricingContext';
import { CURRENCY_KEYS, PRICING_MATRIX, type CurrencyKey } from '@/lib/pricing-matrix';

export function CurrencySwitcher() {
  const { currency: activeCurrency } = usePricingState();
  const { setCurrency } = usePricingActions();

  return (
    <div
      className="inline-flex rounded-xl p-1 gap-1"
      style={{ background: 'var(--color-dark-surface)' }}
      role="radiogroup"
      aria-label="Select currency"
    >
      {CURRENCY_KEYS.map((key: CurrencyKey) => {
        const isActive = activeCurrency === key;
        const { symbol } = PRICING_MATRIX.currencies[key];
        return (
          <button
            key={key}
            role="radio"
            aria-checked={isActive}
            onClick={() => setCurrency(key)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
              isActive
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-dark-card)]'
            }`}
          >
            {symbol} {key}
          </button>
        );
      })}
    </div>
  );
}
