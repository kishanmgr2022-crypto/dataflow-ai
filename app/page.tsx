'use client';

import { lazy, Suspense } from 'react';
import { useScrollAnimation } from '@/lib/use-scroll-animation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';

// Code-split heavy components via React.lazy
const BentoAccordion = lazy(() =>
  import('@/components/BentoAccordion/BentoAccordion')
);
const PricingSection = lazy(() =>
  import('@/components/Pricing/PricingSection')
);
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Footer = lazy(() => import('@/components/Footer'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 rounded-full border-2 border-[var(--color-primary)] border-t-transparent animate-spin" />
    </div>
  );
}

export default function Home() {
  // Initialize scroll-triggered animations
  useScrollAnimation();

  return (
    <>
      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Social proof / logos strip */}
        <LogoStrip />

        {/* 3. Features: Bento-to-Accordion */}
        <Suspense fallback={<SectionLoader />}>
          <BentoAccordion />
        </Suspense>

        {/* 4. Pricing Matrix */}
        <Suspense fallback={<SectionLoader />}>
          <PricingSection />
        </Suspense>

        {/* 5. Testimonials */}
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </main>

      {/* 6. Footer */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
}
