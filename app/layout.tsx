import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DataFlow AI — Intelligent Automation Platform',
  description:
    'Transform raw data into actionable insights with AI data automation. Build, deploy, and scale intelligent data pipelines in minutes with DataFlow AI.',
  keywords: [
    'AI data automation',
    'data pipelines',
    'ETL automation',
    'data integration',
    'machine learning',
    'data transformation',
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://dataflow.ai',
  },
  openGraph: {
    title: 'DataFlow AI — Intelligent Automation Platform',
    description:
      'Transform raw data into actionable insights with AI data automation. Build, deploy, and scale intelligent data pipelines in minutes.',
    type: 'website',
    url: 'https://dataflow.ai',
    siteName: 'DataFlow AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DataFlow AI — Intelligent Data Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataFlow AI — Intelligent Automation Platform',
    description:
      'Transform raw data into actionable insights with AI data automation. Build and scale intelligent data pipelines in minutes.',
    images: ['/og-image.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DataFlow AI',
  description:
    'Intelligent AI data automation platform for building, deploying, and scaling data pipelines.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '2499',
    description: 'Starter plan — monthly billing',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2847',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://dataflow.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[var(--color-dark)] text-[var(--color-text)]"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
