import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SERVICES_DATA } from '../data/servicesData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { LOCATIONS_DATA } from '../data/locationsData';
import { trackConversionEvent } from '../utils/analytics';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-[#111113] text-[#FAF9F6] border-t border-[#262624]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262624]">
          {/* Brand & Verified Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              aria-label="Siri Solutions Home"
              className="inline-block bg-white px-3.5 py-2 rounded-xl"
            >
              <BrandLogo theme="light" size="md" />
            </a>
            <p className="text-xs text-[#A8A7A1] leading-relaxed max-w-sm">
              Rooted in strategy, powered by innovation. Integrating search architecture, AI visibility (GEO), paid media, and clean web engineering.
            </p>
            <div className="pt-1 space-y-1.5 text-xs text-[#D4D3CD]">
              <p className="font-semibold text-white">Vijayawada, Andhra Pradesh, India</p>
              <p>
                <span>Phone: </span>
                <a
                  href="tel:+917794006495"
                  onClick={() => trackConversionEvent('phone_click', 'Footer Phone 1')}
                  className="text-white hover:text-[#17B897] underline underline-offset-4"
                >
                  +91 77940 06495
                </a>
                <span className="mx-1.5 text-[#6E6D68]">·</span>
                <a
                  href="tel:+971526990466"
                  onClick={() => trackConversionEvent('phone_click', 'Footer Phone 2')}
                  className="text-white hover:text-[#17B897] underline underline-offset-4"
                >
                  +971 52 699 0466
                </a>
              </p>
              <p>
                <span>WhatsApp: </span>
                <a
                  href="https://wa.me/971526990466"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversionEvent('whatsapp_click', 'Footer WhatsApp')}
                  className="text-[#17B897] hover:underline font-semibold"
                >
                  +971 52 699 0466
                </a>
              </p>
              <p>
                <span>Email: </span>
                <a
                  href="mailto:contact@sirisolutions.in"
                  className="text-white hover:text-[#17B897] underline underline-offset-4"
                >
                  contact@sirisolutions.in
                </a>
              </p>
            </div>
          </div>

          {/* Core Pages */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-semibold text-white">Navigation</h3>
            <ul className="space-y-1.5 text-xs text-[#A8A7A1]">
              <li><a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-white">Home</a></li>
              <li><a href="/about/" onClick={(e) => handleLink(e, '/about/')} className="hover:text-white">About</a></li>
              <li><a href="/services/" onClick={(e) => handleLink(e, '/services/')} className="hover:text-white">Capabilities</a></li>
              <li><a href="/portfolio/" onClick={(e) => handleLink(e, '/portfolio/')} className="hover:text-white">Portfolio</a></li>
              <li><a href="/case-studies/" onClick={(e) => handleLink(e, '/case-studies/')} className="hover:text-white">Case Studies</a></li>
              <li><a href="/blog/" onClick={(e) => handleLink(e, '/blog/')} className="hover:text-white">Insights</a></li>
              <li><a href="/contact/" onClick={(e) => handleLink(e, '/contact/')} className="hover:text-white">Contact Desk</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs font-semibold text-white">Sectors</h3>
            <ul className="space-y-1.5 text-xs text-[#A8A7A1]">
              {INDUSTRIES_DATA.map((ind) => (
                <li key={ind.id}>
                  <a href={ind.slug} onClick={(e) => handleLink(e, ind.slug)} className="hover:text-white">
                    {ind.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs font-semibold text-white">Service Areas</h3>
            <ul className="space-y-1.5 text-xs text-[#A8A7A1]">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.id}>
                  <a href={loc.slug} onClick={(e) => handleLink(e, loc.slug)} className="hover:text-white">
                    {loc.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Minimal Capabilities Strip */}
        <div className="py-6 border-b border-[#262624] flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#A8A7A1]">
          {SERVICES_DATA.map((service) => (
            <a
              key={service.id}
              href={service.slug}
              onClick={(e) => handleLink(e, service.slug)}
              className="hover:text-white transition-colors"
            >
              {service.shortName}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8C8B85]">
          <p>© {new Date().getFullYear()} Siri Solutions (sirisolutions.in). Vijayawada, Andhra Pradesh, India.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy-policy/" onClick={(e) => handleLink(e, '/privacy-policy/')} className="hover:text-white">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="/terms-and-conditions/" onClick={(e) => handleLink(e, '/terms-and-conditions/')} className="hover:text-white">
              Terms
            </a>
            <span aria-hidden="true">·</span>
            <a href="/sitemap/" onClick={(e) => handleLink(e, '/sitemap/')} className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
