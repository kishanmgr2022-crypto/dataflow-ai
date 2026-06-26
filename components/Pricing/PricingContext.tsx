'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { CurrencyKey } from '@/lib/pricing-matrix';

interface PricingState {
  currency: CurrencyKey;
  isAnnual: boolean;
}

interface PricingActions {
  setCurrency: (c: CurrencyKey) => void;
  toggleBilling: () => void;
}

// Split contexts: state and actions are separate so components
// that only dispatch don't re-render on state changes.
const PricingStateCtx = createContext<PricingState>({
  currency: 'INR',
  isAnnual: false,
});

const PricingActionsCtx = createContext<PricingActions>({
  setCurrency: () => {},
  toggleBilling: () => {},
});

export function PricingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PricingState>({
    currency: 'INR',
    isAnnual: false,
  });

  const setCurrency = useCallback(
    (currency: CurrencyKey) => setState((prev) => ({ ...prev, currency })),
    []
  );

  const toggleBilling = useCallback(
    () => setState((prev) => ({ ...prev, isAnnual: !prev.isAnnual })),
    []
  );

  return (
    <PricingActionsCtx.Provider value={{ setCurrency, toggleBilling }}>
      <PricingStateCtx.Provider value={state}>
        {children}
      </PricingStateCtx.Provider>
    </PricingActionsCtx.Provider>
  );
}

/** Only PriceAtom components should call this — causes re-render on state change */
export function usePricingState() {
  return useContext(PricingStateCtx);
}

/** Controls (toggle, switcher) call this — stable refs, never triggers re-render */
export function usePricingActions() {
  return useContext(PricingActionsCtx);
}
