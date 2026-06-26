'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Intersection Observer hook that adds 'is-visible' class to elements
 * with 'scroll-animate' class when they enter the viewport.
 * Also removes will-change after animation completes.
 */
export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = useCallback(() => {
    if (typeof window === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('is-visible');

            // Remove will-change after transition completes to free compositor layers
            const handleTransitionEnd = () => {
              el.classList.add('animation-complete');
              el.removeEventListener('transitionend', handleTransitionEnd);
            };
            el.addEventListener('transitionend', handleTransitionEnd, { once: true });

            // Stop observing once visible
            observerRef.current?.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));
  }, []);

  useEffect(() => {
    setupObserver();
    return () => observerRef.current?.disconnect();
  }, [setupObserver]);
}
