import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SeoHeadManager } from './components/SeoHeadManager';
import { ScrollMotionController } from './components/ScrollMotionController';
import { AiChatbot } from './components/AiChatbot';
import { HomePage } from './pages/HomePage';
import { ServicesOverviewPage, ServiceDetailPage } from './pages/ServicePages';
import {
  IndustriesOverviewPage,
  IndustryDetailPage,
  LocationsOverviewPage,
  LocationDetailPage,
} from './pages/IndustryAndLocationPages';
import {
  AboutPage,
  PortfolioPage,
  CaseStudiesPage,
  BlogIndexPage,
  BlogArticlePage,
} from './pages/ContentAndShowcasePages';
import {
  ContactPage,
  GetAQuotePage,
  ThankYouPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFoundPage,
} from './pages/ConversionAndLegalPages';
import { SitemapAndSeoHubPage } from './pages/SitemapAndSeoHubPage';
import { getServiceBySlug } from './data/servicesData';
import { getIndustryBySlug } from './data/industriesData';
import { getLocationBySlug } from './data/locationsData';
import { getBlogBySlug } from './data/blogData';

const normalizeRoutePath = (rawPath: string): string => {
  if (!rawPath || rawPath === '/') return '/';
  const clean = rawPath.split('?')[0].split('#')[0].toLowerCase().replace(/\/+/g, '/');
  return clean.endsWith('/') ? clean : `${clean}/`;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizeRoutePath(window.location.pathname)
  );
  const [cookieConsentAccepted, setCookieConsentAccepted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('siri_cookie_consent_v1') === 'accepted';
    } catch {
      return true;
    }
  });

  const navigate = useCallback((href: string) => {
    if (href.startsWith('#')) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const normalized = normalizeRoutePath(href);
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Normalize initial path and listen for browser Back/Forward
  useEffect(() => {
    const normalized = normalizeRoutePath(window.location.pathname);
    if (window.location.pathname !== normalized && !window.location.pathname.endsWith('.xml') && !window.location.pathname.endsWith('.txt')) {
      window.history.replaceState({}, '', normalized);
      setCurrentPath(normalized);
    }

    const handlePopState = () => {
      setCurrentPath(normalizeRoutePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global interceptor for internal anchor links
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore external links, mailto, tel, target="_blank", or static files
      if (
        target.getAttribute('target') === '_blank' ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.endsWith('.xml') ||
        href.endsWith('.txt')
      ) {
        return;
      }

      if (href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [navigate]);

  const handleAcceptCookies = () => {
    try {
      localStorage.setItem('siri_cookie_consent_v1', 'accepted');
    } catch {
      // ignore
    }
    setCookieConsentAccepted(true);
  };

  const renderPage = () => {
    if (currentPath === '/') {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentPath === '/about/') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/services/') {
      return <ServicesOverviewPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/services/') && getServiceBySlug(currentPath)) {
      return <ServiceDetailPage slug={currentPath} onNavigate={navigate} />;
    }
    if (currentPath === '/portfolio/') {
      return <PortfolioPage onNavigate={navigate} />;
    }
    if (currentPath === '/case-studies/') {
      return <CaseStudiesPage onNavigate={navigate} />;
    }
    if (currentPath === '/industries/') {
      return <IndustriesOverviewPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/industries/') && getIndustryBySlug(currentPath)) {
      return <IndustryDetailPage slug={currentPath} onNavigate={navigate} />;
    }
    if (currentPath === '/locations/') {
      return <LocationsOverviewPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/locations/') && getLocationBySlug(currentPath)) {
      return <LocationDetailPage slug={currentPath} onNavigate={navigate} />;
    }
    if (currentPath === '/blog/') {
      return <BlogIndexPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/blog/') && getBlogBySlug(currentPath)) {
      return <BlogArticlePage slug={currentPath} onNavigate={navigate} />;
    }
    if (currentPath === '/contact/') {
      return <ContactPage onNavigate={navigate} />;
    }
    if (currentPath === '/get-a-quote/') {
      return <GetAQuotePage onNavigate={navigate} />;
    }
    if (currentPath === '/thank-you/') {
      return <ThankYouPage onNavigate={navigate} />;
    }
    if (currentPath === '/privacy-policy/') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }
    if (currentPath === '/terms-and-conditions/') {
      return <TermsPage onNavigate={navigate} />;
    }
    if (currentPath === '/sitemap/') {
      return <SitemapAndSeoHubPage onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141413]">
      <SeoHeadManager currentPath={currentPath} />
      <ScrollMotionController currentPath={currentPath} />
      <Header currentPath={currentPath} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />

      {/* Siri Solutions AI Growth Advisor Chatbot */}
      <AiChatbot />

      {/* Floating Quick Action Dock (WhatsApp + Call) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/971526990466?text=Hello%20Siri%20Solutions%2C%20I%20would%20like%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp +971 52 699 0466"
          className="px-4 py-2.5 rounded-full bg-[#15803D] text-white text-xs font-bold shadow-lg hover:bg-[#166534] transition-transform hover:scale-105 flex items-center gap-2"
        >
          <span>WhatsApp Us</span>
        </a>
        <a
          href="tel:+917794006495"
          aria-label="Call +91 77940 06495"
          className="px-4 py-2 rounded-full bg-[#0F172A] text-white text-xs font-semibold shadow-lg hover:bg-[#1E293B] transition-transform hover:scale-105"
        >
          Call +91 77940 06495
        </a>
      </div>

      {/* Restrained DPDP / Analytics Consent Banner */}
      {!cookieConsentAccepted && (
        <div
          role="region"
          aria-label="Cookie and Data Protection Notice"
          className="fixed bottom-4 left-4 sm:max-w-md z-30 bg-white border border-[#E5E4DF] rounded-xl shadow-lg p-4 flex items-center justify-between gap-4 text-xs"
        >
          <p className="text-[#4A4945] leading-relaxed">
            We use first-party analytics (GA4) to measure site speed and enquiry conversions in compliance with India’s DPDP Act.{' '}
            <a href="/privacy-policy/" className="underline text-[#141413]">
              Privacy Policy
            </a>
          </p>
          <button
            type="button"
            onClick={handleAcceptCookies}
            className="px-3.5 py-2 font-semibold text-white bg-[#141413] rounded-lg hover:bg-[#2A2A27] transition-colors shrink-0 cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      )}
    </div>
  );
}
