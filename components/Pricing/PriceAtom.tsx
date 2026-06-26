'use client';

import { memo } from 'react';
import { usePricingState } from './PricingContext';
import {
  computePrice,
  formatPrice,
  PRICING_MATRIX,
  type TierKey,
} from '@/lib/pricing-matrix';

interface PriceAtomProps {
  tierKey: TierKey;
}

/**
 * PriceAtom — the only component that re-renders on pricing state change.
 * Parents stay completely stable.
 */
function PriceAtomInner({ tierKey }: PriceAtomProps) {
  const { currency, isAnnual } = usePricingState();
  const tier = PRICING_MATRIX.tiers[tierKey];
  const currencyConfig = PRICING_MATRIX.currencies[currency];
  const price = computePrice(tier.base, currencyConfig.tariff, isAnnual);
  const formatted = formatPrice(price, currency);

  return (
    <span className="price-atom inline-flex items-baseline" data-tier={tierKey}>
      <span
        className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)]"
        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
      >
        {formatted}
      </span>
      <span className="text-sm text-[var(--color-text-muted)] ml-1.5">
        /{isAnnual ? 'yr' : 'mo'}
      </span>
    </span>
  );
}

export const PriceAtom = memo(PriceAtomInner);
