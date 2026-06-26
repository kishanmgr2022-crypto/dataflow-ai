'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      role="banner"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(108,92,231,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,206,201,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '2s',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(253,121,168,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1
              className="animate-fade-slide-up animation-delay-0"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-[var(--color-text)]">
                Automate Your Data.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight gradient-text mt-2">
                AI-Powered.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-xl mx-auto lg:mx-0 animate-fade-slide-up animation-delay-100 leading-relaxed">
              Transform raw data into actionable insights with intelligent
              automation. Build, deploy, and scale data pipelines in minutes —
              not months.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-slide-up animation-delay-200">
              <a href="#pricing" className="btn-primary text-center">
                Start Free Trial
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a href="#features" className="btn-outline text-center">
                <svg
                  className="mr-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 animate-fade-slide-up animation-delay-300">
              <div>
                <p
                  className="text-2xl sm:text-3xl font-bold gradient-text"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  10x
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
                  Faster Pipelines
                </p>
              </div>
              <div>
                <p
                  className="text-2xl sm:text-3xl font-bold gradient-text"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  99.9%
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
                  Uptime SLA
                </p>
              </div>
              <div>
                <p
                  className="text-2xl sm:text-3xl font-bold gradient-text"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  200+
                </p>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
                  Integrations
                </p>
              </div>
            </div>
          </div>

          {/* Hero SVG Illustration */}
          <div className="relative animate-fade-slide-up animation-delay-200 hidden lg:block">
            <div className="animate-float">
              <svg
                viewBox="0 0 500 400"
                fill="none"
                width="500"
                height="400"
                aria-label="AI data pipeline visualization showing interconnected nodes and flowing data"
                className="w-full h-auto"
              >
                {/* Background glow */}
                <circle cx="250" cy="200" r="150" fill="url(#hero-radial)" opacity="0.15" />

                {/* Connection lines */}
                <path d="M100 120 L200 80 L300 130 L400 90" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <path d="M120 200 L200 180 L280 220 L380 180" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <path d="M80 280 L180 300 L300 260 L420 300" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                
                {/* Vertical connectors */}
                <path d="M200 80 L200 180" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.4" />
                <path d="M300 130 L280 220" stroke="var(--color-secondary)" strokeWidth="1.5" opacity="0.4" />
                <path d="M180 300 L200 180" stroke="var(--color-primary-light)" strokeWidth="1.5" opacity="0.4" />

                {/* Data nodes - Layer 1 */}
                <g>
                  <circle cx="100" cy="120" r="16" fill="var(--color-dark-card)" stroke="var(--color-primary)" strokeWidth="2" />
                  <circle cx="100" cy="120" r="6" fill="var(--color-primary)" opacity="0.8" />
                </g>
                <g>
                  <circle cx="200" cy="80" r="20" fill="var(--color-dark-card)" stroke="var(--color-primary-light)" strokeWidth="2" />
                  <path d="M192 80 L200 72 L208 80 L200 88Z" fill="var(--color-primary-light)" />
                </g>
                <g>
                  <circle cx="300" cy="130" r="18" fill="var(--color-dark-card)" stroke="var(--color-secondary)" strokeWidth="2" />
                  <circle cx="300" cy="130" r="7" fill="var(--color-secondary)" opacity="0.8" />
                </g>
                <g>
                  <circle cx="400" cy="90" r="14" fill="var(--color-dark-card)" stroke="var(--color-accent)" strokeWidth="2" />
                  <circle cx="400" cy="90" r="5" fill="var(--color-accent)" opacity="0.8" />
                </g>

                {/* Data nodes - Layer 2 (AI Processing) */}
                <g>
                  <rect x="170" y="155" width="60" height="50" rx="12" fill="var(--color-dark-card)" stroke="var(--color-primary)" strokeWidth="2" />
                  <text x="200" y="185" textAnchor="middle" fill="var(--color-primary-light)" fontSize="12" fontWeight="bold">AI</text>
                </g>
                <g>
                  <rect x="250" y="198" width="60" height="44" rx="10" fill="var(--color-dark-card)" stroke="var(--color-secondary)" strokeWidth="2" />
                  <text x="280" y="225" textAnchor="middle" fill="var(--color-secondary)" fontSize="10" fontWeight="bold">ETL</text>
                </g>

                {/* Data nodes - Layer 3 */}
                <g>
                  <circle cx="80" cy="280" r="14" fill="var(--color-dark-card)" stroke="var(--color-primary)" strokeWidth="2" />
                  <circle cx="80" cy="280" r="5" fill="var(--color-primary)" opacity="0.8" />
                </g>
                <g>
                  <circle cx="180" cy="300" r="18" fill="var(--color-dark-card)" stroke="var(--color-accent)" strokeWidth="2" />
                  <path d="M174 300 L180 294 L186 300 L180 306Z" fill="var(--color-accent)" />
                </g>
                <g>
                  <circle cx="300" cy="260" r="16" fill="var(--color-dark-card)" stroke="var(--color-secondary)" strokeWidth="2" />
                  <circle cx="300" cy="260" r="6" fill="var(--color-secondary)" opacity="0.8" />
                </g>
                <g>
                  <circle cx="420" cy="300" r="20" fill="var(--color-dark-card)" stroke="var(--color-primary-light)" strokeWidth="2" />
                  <path d="M412 300 L420 292 L428 300 L420 308Z" fill="var(--color-primary-light)" />
                </g>

                {/* Animated data particles */}
                <circle r="3" fill="var(--color-secondary)" opacity="0.9">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M100 120 L200 80 L300 130 L400 90" />
                </circle>
                <circle r="3" fill="var(--color-primary-light)" opacity="0.9">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M120 200 L200 180 L280 220 L380 180" begin="1s" />
                </circle>
                <circle r="2.5" fill="var(--color-accent)" opacity="0.9">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M80 280 L180 300 L300 260 L420 300" begin="0.5s" />
                </circle>

                <defs>
                  <radialGradient id="hero-radial">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-secondary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
