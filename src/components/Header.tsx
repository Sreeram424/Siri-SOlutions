import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SERVICES_DATA } from '../data/servicesData';
import { trackConversionEvent } from '../utils/analytics';

interface HeaderProps {
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setServicesOpen(false);
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  const categories: ('Search & GEO' | 'Paid Media' | 'Content & Social' | 'Web & Conversion')[] = [
    'Search & GEO',
    'Paid Media',
    'Content & Social',
    'Web & Conversion',
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E4DF]">
      <div className="max-w-[1280px] mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLink(e, '/')}
          aria-label="Siri Solutions Home"
          className="font-display whitespace-nowrap shrink-0 inline-flex items-center gap-2.5 group"
        >
          <span className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 100 100"
              className="w-10 h-10 overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <mask id="siri-logo-notch">
                  <rect x="-10" y="-10" width="120" height="120" fill="white" />
                  <circle cx="81" cy="18" r="14.5" fill="black" />
                </mask>
              </defs>
              <g mask="url(#siri-logo-notch)">
                <g transform="rotate(-7 48 54)">
                  <rect
                    x="12"
                    y="18"
                    width="72"
                    height="72"
                    rx="18"
                    fill="#111113"
                  />
                  <text
                    x="48"
                    y="69"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontWeight="800"
                    fontSize="48"
                  >
                    S
                  </text>
                </g>
              </g>
              <circle cx="81" cy="18" r="9.5" fill="#17B897" />
            </svg>
          </span>
          <span className="flex flex-col justify-center leading-none">
            <span className="inline-flex items-baseline text-[22px] font-extrabold tracking-tight text-[#111113] leading-none">
              <span>Siri</span>
              <span className="inline-block w-[4.5px] h-[4.5px] bg-[#2563EB] ml-[2px] mb-[1px]" />
            </span>
            <span className="text-[8.5px] font-normal tracking-[0.28em] text-[#111113] mt-[4px] leading-none">
              SOLUTIONS
            </span>
          </span>
        </a>

        {/* Zone 2: Minimal Editorial Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4945]">
          <a
            href="/"
            onClick={(e) => handleLink(e, '/')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentPath === '/' ? 'text-[#111113] font-semibold' : 'hover:text-[#111113]'
            }`}
          >
            Home
          </a>

          <a
            href="/about/"
            onClick={(e) => handleLink(e, '/about/')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentPath === '/about/' ? 'text-[#111113] font-semibold' : 'hover:text-[#111113]'
            }`}
          >
            About
          </a>

          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((prev) => !prev)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`inline-flex items-center gap-1 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith('/services/')
                  ? 'text-[#111113] font-semibold'
                  : 'hover:text-[#111113]'
              }`}
            >
              <span>Capabilities</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180 text-[#1D4ED8]' : ''}`}
              />
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[820px] max-w-[94vw]"
              >
                <div className="bg-white border border-[#E5E4DF] rounded-2xl shadow-xl p-6">
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F3F2EE]">
                    <p className="text-xs font-semibold text-[#111113]">
                      Core Digital Capabilities
                    </p>
                    <a
                      href="/services/"
                      onClick={(e) => handleLink(e, '/services/')}
                      className="text-xs font-semibold text-[#1D4ED8] hover:underline whitespace-nowrap shrink-0 inline-flex items-center gap-1"
                    >
                      <span>Explore All Services</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-4 gap-6">
                    {categories.map((cat) => (
                      <div key={cat} className="space-y-2">
                        <p className="text-xs font-semibold text-[#111113] pb-1 border-b border-[#F3F2EE]">
                          {cat}
                        </p>
                        <ul className="space-y-1.5">
                          {SERVICES_DATA.filter((s) => s.category === cat).map((service) => (
                            <li key={service.id}>
                              <a
                                href={service.slug}
                                onClick={(e) => handleLink(e, service.slug)}
                                className={`block text-xs py-0.5 transition-colors ${
                                  currentPath === service.slug
                                    ? 'font-semibold text-[#1D4ED8]'
                                    : 'text-[#4A4945] hover:text-[#111113]'
                                }`}
                              >
                                {service.shortName}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/industries/"
            onClick={(e) => handleLink(e, '/industries/')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentPath.startsWith('/industries/')
                ? 'text-[#111113] font-semibold'
                : 'hover:text-[#111113]'
            }`}
          >
            Sectors
          </a>

          <a
            href="/case-studies/"
            onClick={(e) => handleLink(e, '/case-studies/')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentPath.startsWith('/case-studies/') || currentPath.startsWith('/portfolio/')
                ? 'text-[#111113] font-semibold'
                : 'hover:text-[#111113]'
            }`}
          >
            Outcomes
          </a>

          <a
            href="/contact/"
            onClick={(e) => handleLink(e, '/contact/')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentPath === '/contact/'
                ? 'text-[#111113] font-semibold'
                : 'hover:text-[#111113]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Minimal Primary Action (Dandamudi Biotech "Contact Desk" style) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact/"
            onClick={(e) => handleLink(e, '/contact/')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#111113] rounded-xl hover:bg-[#2563EB] transition-colors whitespace-nowrap shrink-0"
          >
            Contact Desk
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2.5 text-[#111113] hover:bg-[#F3F2EE] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E4DF] max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#F3F2EE]">
            <a href="/" onClick={(e) => handleLink(e, '/')}>
              <BrandLogo size="sm" />
            </a>
            <span className="text-xs text-[#6E6D68]">Vijayawada, AP</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <a href="/" onClick={(e) => handleLink(e, '/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Home
            </a>
            <a href="/about/" onClick={(e) => handleLink(e, '/about/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              About
            </a>
            <a href="/services/" onClick={(e) => handleLink(e, '/services/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Capabilities
            </a>
            <a href="/industries/" onClick={(e) => handleLink(e, '/industries/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Sectors
            </a>
            <a href="/case-studies/" onClick={(e) => handleLink(e, '/case-studies/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Case Studies
            </a>
            <a href="/portfolio/" onClick={(e) => handleLink(e, '/portfolio/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Portfolio
            </a>
            <a href="/blog/" onClick={(e) => handleLink(e, '/blog/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Insights
            </a>
            <a href="/contact/" onClick={(e) => handleLink(e, '/contact/')} className="p-2.5 rounded-lg bg-[#FAF9F6] text-[#111113]">
              Contact Desk
            </a>
          </div>

          <div className="border-t border-[#E5E4DF] pt-4 space-y-2 text-xs">
            <p className="font-semibold text-[#111113]">Contact Desk (Vijayawada, AP)</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917794006495"
                onClick={() => trackConversionEvent('phone_click', 'Mobile Menu India Phone', currentPath)}
                className="text-[#2563EB] font-semibold underline"
              >
                +91 77940 06495
              </a>
              <a
                href="tel:+971526990466"
                onClick={() => trackConversionEvent('phone_click', 'Mobile Menu UAE Phone', currentPath)}
                className="text-[#2563EB] font-semibold underline"
              >
                +971 52 699 0466
              </a>
              <a
                href="https://wa.me/971526990466"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversionEvent('whatsapp_click', 'Mobile Menu WhatsApp', currentPath)}
                className="text-[#15803D] font-semibold underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
