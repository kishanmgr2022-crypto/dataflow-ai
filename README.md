# DataFlow AI — Intelligent Automation Platform

A premium, high-converting, responsive SaaS landing page for an AI data automation platform built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**.

## ✨ Features

### Pricing Matrix (State Isolation)
- 3-tier pricing (Starter / Pro / Enterprise) computed from a single `PRICING_MATRIX` config object
- Billing toggle (Monthly ↔ Annual with 20% discount multiplier)
- Currency switcher (₹ INR / $ USD / € EUR)
- **Zero hardcoded price strings** — every price renders via `computePrice()`
- **State isolation**: Split React Context pattern ensures only `PriceAtom` components re-render on toggle — parent `PricingSection` never re-renders (verified via React DevTools Profiler)

### Bento-to-Accordion (Responsive)
- Desktop (≥768px): CSS Grid bento layout with variable cell sizes + hover effects
- Mobile (<768px): Vertical accordion with max-height CSS transitions
- **ResizeObserver** debounced at 100ms syncs `activeIndex` across layouts on breakpoint crossing
- **Zero external animation libraries** — all transitions in native CSS

### SEO & Structured Data
- Full Next.js `metadata` export (title, description, OG, Twitter Card, canonical, robots)
- JSON-LD `SoftwareApplication` structured data
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy)
- All prices rendered as server-side crawlable text

### Motion Choreography
- Staggered entry animation (CSS `animation-delay`) ≤ 500ms total
- Intersection Observer for scroll-triggered fade-in
- Hardware-accelerated only (`transform`, `opacity`)
- `will-change` removed after animation completes
- Native CSS `@keyframes` — no CSS-in-JS animation engines

### Performance
- `next/font/google` for Inter + Outfit fonts (automatic `font-display: swap`)
- `React.lazy` + `Suspense` code-splitting for below-fold components
- `loading="lazy"` on below-fold images
- No render-blocking scripts

## 🚀 Local Setup

```bash
# Clone the repository
git clone <repo-url>
cd dataflow-ai

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── layout.tsx        # Root layout, fonts, SEO metadata, JSON-LD
├── page.tsx          # Main page — orchestrates all sections
└── globals.css       # Design system: CSS variables, keyframes, utilities

components/
├── Header.tsx        # Sticky nav with scroll blur
├── Hero.tsx          # Hero with SVG illustration
├── LogoStrip.tsx     # Infinite scroll social proof
├── BentoAccordion/   # Feature 2: bento grid ↔ accordion
├── Pricing/          # Feature 1: isolated pricing matrix
├── Testimonials.tsx  # Testimonial cards
└── Footer.tsx        # 4-column footer

lib/
├── pricing-matrix.ts      # PRICING_MATRIX config + computePrice()
├── features-data.ts       # Features array for bento/accordion
└── use-scroll-animation.ts # Intersection Observer hook
```

## 🌐 Deployment

Live URL: `https://dataflow.ai` *(placeholder)*

Optimized for Vercel deployment:
```bash
npx vercel
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Animations**: Native CSS @keyframes + Web Animations API
- **Fonts**: Inter (body) + Outfit (headings) via next/font
