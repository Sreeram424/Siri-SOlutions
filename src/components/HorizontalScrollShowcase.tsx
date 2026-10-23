import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioAndCasesData';
import { SafeImage } from './SafeImage';

interface HorizontalScrollShowcaseProps {
  onNavigate: (href: string) => void;
}

export const HorizontalScrollShowcase: React.FC<HorizontalScrollShowcaseProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current || !trackRef.current) {
            ticking = false;
            return;
          }

          const containerRect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalScrollableDistance = containerRef.current.offsetHeight - windowHeight;

          if (totalScrollableDistance <= 0) {
            ticking = false;
            return;
          }

          // Top of container relative to viewport top
          const currentScrolled = -containerRect.top;
          const progress = Math.max(0, Math.min(1, currentScrolled / totalScrollableDistance));
          setScrollProgress(progress);

          // Horizontal translation distance
          const maxTranslate = trackRef.current.scrollWidth - window.innerWidth + 80;
          if (maxTranslate > 0) {
            trackRef.current.style.transform = `translate3d(-${(progress * maxTranslate).toFixed(1)}px, 0, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const slides = [
    ...PORTFOLIO_PROJECTS,
    {
      id: 'scale-cta-slide',
      title: 'Partner With Siri Solutions for Your Next Digital Leap',
      clientName: 'Your Business Next',
      clientUrl: 'https://sirisolutions.in/get-a-quote/',
      sector: 'India & UAE Markets',
      industrySlug: '/services/',
      city: 'Vijayawada HQ',
      deliverableType: 'SEO · Ads · Web Development' as const,
      imageKey: 'heroWorkspace' as const,
      summary:
        'Get a comprehensive technical audit of your organic search rankings, ad performance, and web conversion infrastructure within 24 hours.',
      technicalHighlights: [
        'Dedicated senior digital strategists based in Vijayawada, AP',
        '100% asset ownership of code, ad accounts, and analytics',
        'Bi-weekly transparent KPI reporting with direct WhatsApp support',
      ],
      measuredImpact: 'Schedule Consultation',
      relatedServiceSlug: '/contact/',
      isCta: true,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#111113] text-white"
      style={{ height: '360vh' }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Section Header */}
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#17B897] animate-pulse" />
              <p className="text-xs font-semibold text-[#17B897] tracking-wider uppercase">
                Interactive Showcase · Horizontal Scroll
              </p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">
              Verified Client Platforms &amp; Growth Case Studies
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#CBD5E1]">
            <span className="hidden md:inline text-[#94A3B8]">
              Scroll down vertically to glide through projects
            </span>
            <div className="w-32 h-1.5 bg-[#262624] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#17B897] to-[#2563EB] transition-all duration-75"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-[#17B897]">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="w-full overflow-visible py-4 flex-1 flex items-center">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 pl-4 sm:pl-8 lg:pl-16 pr-16 will-change-transform"
            style={{ transition: 'transform 0.08s ease-out' }}
          >
            {slides.map((slide, index) => {
              const isLastCta = (slide as { isCta?: boolean }).isCta;

              if (isLastCta) {
                return (
                  <div
                    key={slide.id}
                    className="w-[340px] sm:w-[440px] shrink-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#334155] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <span className="inline-block px-3 py-1 bg-[#17B897]/20 text-[#17B897] text-xs font-semibold rounded-full">
                        Ready To Grow?
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                        Let’s Engineer Your Growth Platform
                      </h3>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed">
                        {slide.summary}
                      </p>
                      <ul className="space-y-2 pt-2 text-xs text-[#94A3B8]">
                        {slide.technicalHighlights.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#17B897] font-bold">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 space-y-3">
                      <a
                        href="/contact/"
                        onClick={(e) => handleLink(e, '/contact/')}
                        className="w-full py-3.5 px-6 text-center text-sm font-bold text-[#111113] bg-[#17B897] rounded-xl hover:bg-white transition-colors block shadow-lg"
                      >
                        Contact Desk in Vijayawada →
                      </a>
                      <a
                        href="https://wa.me/971526990466"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-colors block"
                      >
                        WhatsApp: +971 52 699 0466
                      </a>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={slide.id}
                  className="w-[320px] sm:w-[420px] shrink-0 bg-[#1A1A1E] border border-[#2A2A2E] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#17B897] transition-all shadow-xl group"
                >
                  <div className="space-y-4">
                    {/* Visual Preview */}
                    <div className="overflow-hidden rounded-2xl aspect-16/10 border border-[#2D2D32] bg-[#0E0E10] relative">
                      <SafeImage imageKey={slide.imageKey} />
                      <div className="absolute top-3 left-3 bg-[#111113]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-[#17B897]">
                        {slide.deliverableType}
                      </div>
                      <div className="absolute top-3 right-3 bg-[#111113]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[11px] font-mono text-[#94A3B8]">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                        <span>{slide.sector}</span>
                        <span>{slide.city}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#17B897] transition-colors">
                        {slide.clientName}
                      </h3>
                      <p className="text-xs text-[#CBD5E1] line-clamp-3 leading-relaxed">
                        {slide.summary}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="pt-2 border-t border-[#26262A] space-y-1.5 text-[11px] text-[#A8A7A1]">
                      {slide.technicalHighlights.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-[#17B897] shrink-0">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Bar */}
                  <div className="pt-5 border-t border-[#26262A] flex items-center justify-between text-xs">
                    <a
                      href={slide.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[#17B897] hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={slide.relatedServiceSlug}
                      onClick={(e) => handleLink(e, slide.relatedServiceSlug)}
                      className="text-white hover:text-[#17B897] inline-flex items-center gap-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="max-w-[1280px] w-full mx-auto px-4 pb-4 text-center sm:hidden text-[11px] text-[#94A3B8] z-10">
          Scroll down vertically to advance the slides
        </div>
      </div>
    </section>
  );
};
