import React, { useEffect } from 'react';

interface ScrollMotionControllerProps {
  currentPath: string;
}

const REVEAL_SELECTOR = [
  '#main-content section > div > div',
  '#main-content h1',
  '#main-content h2',
  '#main-content .grid > a',
  '#main-content .grid > div',
  '#main-content .grid > article',
  '#main-content blockquote',
  '#main-content form',
  '#main-content figure',
  'footer > div > div',
].join(', ');

const PARALLAX_SECTION_SELECTOR = '#main-content section';

export const ScrollMotionController: React.FC<ScrollMotionControllerProps> = ({ currentPath }) => {
  useEffect(() => {
    let rafId = 0;

    // 1. Bidirectional IntersectionObserver (triggers every time on scroll down AND scroll up)
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const viewportHeight = window.innerHeight || 800;

        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.06) {
            el.setAttribute('data-reveal-state', 'visible');
          } else {
            // Determine if element exited above the viewport (scrolled down past it)
            // or below the viewport (scrolled up above it)
            if (entry.boundingClientRect.top < viewportHeight * 0.15) {
              el.setAttribute('data-reveal-state', 'hidden-above');
            } else {
              el.setAttribute('data-reveal-state', 'hidden-below');
            }
          }
        });
      },
      {
        threshold: [0, 0.06, 0.15],
        rootMargin: '-3% 0px -5% 0px',
      }
    );

    const registerElements = () => {
      const nodes = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
      const viewportHeight = window.innerHeight || 800;

      nodes.forEach((el) => {
        if (!el.hasAttribute('data-scroll-reveal')) {
          el.setAttribute('data-scroll-reveal', 'true');

          // Compute subtle stagger delay for siblings inside grids
          const parent = el.parentElement;
          if (parent && parent.classList.contains('grid')) {
            const siblings = Array.from(parent.children);
            const idx = siblings.indexOf(el);
            const delayMs = (idx % 4) * 55;
            el.style.setProperty('--reveal-delay', `${delayMs}ms`);
          }

          const rect = el.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.05) {
            el.setAttribute('data-reveal-state', 'visible');
          } else if (rect.top <= 0) {
            el.setAttribute('data-reveal-state', 'hidden-above');
          } else {
            el.setAttribute('data-reveal-state', 'hidden-below');
          }
        }

        intersectionObserver.observe(el);
      });
    };

    // 2. Continuous Bidirectional Section Parallax Engine (forward & backward scroll)
    const updateSectionParallax = () => {
      const sections = document.querySelectorAll<HTMLElement>(PARALLAX_SECTION_SELECTOR);
      const viewportHeight = window.innerHeight || 800;

      sections.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;

        // Progress from -1 (top of viewport) to +1 (bottom of viewport)
        const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / (viewportHeight / 2);
        const clamped = Math.max(-1.2, Math.min(1.2, progress));

        // Alternate subtle depth speed on section inner container
        const inner = sec.firstElementChild as HTMLElement | null;
        if (inner) {
          const speed = index % 2 === 0 ? -10 : -16;
          const offsetY = clamped * speed;
          inner.style.transform = `translate3d(0, ${offsetY.toFixed(1)}px, 0)`;
          inner.style.willChange = 'transform';
        }
      });
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateSectionParallax);
    };

    registerElements();
    updateSectionParallax();

    // Watch for dynamic filter/tab changes inside #main-content
    const mainEl = document.getElementById('main-content');
    const mutationObserver = new MutationObserver(() => {
      registerElements();
      updateSectionParallax();
    });

    if (mainEl) {
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentPath]);

  return null;
};
