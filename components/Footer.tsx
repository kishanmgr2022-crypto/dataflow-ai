const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
};

function SocialIcon({ type }: { type: 'twitter' | 'linkedin' | 'github' }) {
  const icons = {
    twitter: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    github: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  };
  return icons[type];
}

export default function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[var(--color-dark-surface)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="url(#footer-logo-grad)"
                />
                <path
                  d="M10 16L14 12L18 16L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 20L14 16L18 20L22 16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="footer-logo-grad"
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                  >
                    <stop stopColor="var(--color-primary)" />
                    <stop offset="1" stopColor="var(--color-secondary)" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className="text-base font-bold"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                DataFlow AI
              </span>
            </a>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              Intelligent AI data automation platform for building, deploying,
              and scaling data pipelines.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/tathagat-anand-79812138a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <SocialIcon type="linkedin" />
              </a>
              <a
                href="https://github.com/kishanmgr2022-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors duration-150"
                aria-label="GitHub"
              >
                <SocialIcon type="github" />
              </a>
              <a
                href="https://github.com/kishanmgr2022-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors duration-150"
                aria-label="X (Twitter)"
              >
                <SocialIcon type="twitter" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3
                className="text-sm font-semibold text-[var(--color-text)] mb-4 tracking-wide"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {group.title}
              </h3>
              <ul className="space-y-3" role="list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-light)] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} DataFlow AI. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Built with{' '}
            <span className="text-[var(--color-accent)]" aria-label="love">
              ❤️
            </span>{' '}
            for data teams
          </p>
        </div>
      </div>
    </footer>
  );
}
