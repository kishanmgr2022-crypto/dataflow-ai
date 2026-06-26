export type TierKey = 'starter' | 'pro' | 'enterprise';
export type CurrencyKey = 'INR' | 'USD' | 'EUR';

export interface TierConfig {
  base: number;
  name: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface CurrencyConfig {
  symbol: string;
  tariff: number;
  locale: string;
}

export interface PricingMatrixType {
  tiers: Record<TierKey, TierConfig>;
  currencies: Record<CurrencyKey, CurrencyConfig>;
  annualMultiplier: number;
}

export const PRICING_MATRIX: PricingMatrixType = {
  tiers: {
    starter: {
      base: 2499,
      name: 'Starter',
      description: 'Perfect for small teams getting started with AI automation',
      features: [
        'Up to 5 data pipelines',
        '10,000 records/month',
        'Basic AI transformations',
        'Email support',
        'Standard integrations',
        'Community access',
      ],
      cta: 'Start Free Trial',
    },
    pro: {
      base: 7499,
      name: 'Pro',
      description: 'For growing teams that need powerful automation tools',
      features: [
        'Unlimited pipelines',
        '500,000 records/month',
        'Advanced AI models',
        'Priority support',
        'Custom integrations',
        'Team collaboration',
        'Advanced analytics',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    enterprise: {
      base: 19999,
      name: 'Enterprise',
      description: 'For organizations with mission-critical data workflows',
      features: [
        'Unlimited everything',
        'Custom AI model training',
        'Dedicated success manager',
        '24/7 phone support',
        'SLA guarantee',
        'On-premise deployment',
        'SSO & SAML',
        'Audit logs',
        'Custom contracts',
      ],
      cta: 'Contact Sales',
    },
  },
  currencies: {
    INR: { symbol: '₹', tariff: 1.0, locale: 'en-IN' },
    USD: { symbol: '$', tariff: 0.012, locale: 'en-US' },
    EUR: { symbol: '€', tariff: 0.011, locale: 'de-DE' },
  },
  annualMultiplier: 0.8,
};

export function computePrice(
  tierBase: number,
  currencyTariff: number,
  isAnnual: boolean
): number {
  return tierBase * currencyTariff * (isAnnual ? PRICING_MATRIX.annualMultiplier : 1.0);
}

export function formatPrice(
  price: number,
  currencyKey: CurrencyKey
): string {
  const { symbol, locale } = PRICING_MATRIX.currencies[currencyKey];
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: currencyKey === 'INR' ? 0 : 2,
    maximumFractionDigits: currencyKey === 'INR' ? 0 : 2,
  }).format(price);
  return `${symbol}${formatted}`;
}

export const TIER_KEYS: TierKey[] = ['starter', 'pro', 'enterprise'];
export const CURRENCY_KEYS: CurrencyKey[] = ['INR', 'USD', 'EUR'];
