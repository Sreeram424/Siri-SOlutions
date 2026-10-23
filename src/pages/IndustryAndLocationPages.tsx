import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafeImage } from '../components/SafeImage';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { useResolvedPageCopy } from '../components/SeoHeadManager';
import { INDUSTRIES_DATA, getIndustryBySlug } from '../data/industriesData';
import { LOCATIONS_DATA, getLocationBySlug } from '../data/locationsData';

interface PageNavProps {
  onNavigate: (href: string) => void;
}

export const IndustriesOverviewPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1, imageAlt } = useResolvedPageCopy(
    '/industries/',
    'Industries We Serve Across India',
    'enterpriseOffice'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Industries', href: '/industries/' }]} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold text-[#141413] leading-tight">
                {h1}
              </h1>
              <p className="text-base text-[#4A4945] max-w-xl">
                Tailored SEO, paid media, and web solutions for 8 core business sectors.
              </p>
              <div className="pt-2">
                <a
                  href="/get-a-quote/"
                  onClick={(e) => handleLink(e, '/get-a-quote/')}
                  className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF]"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey="enterpriseOffice" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl font-bold text-[#141413]">Select Your Industry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES_DATA.map((ind) => (
            <a
              key={ind.id}
              href={ind.slug}
              onClick={(e) => handleLink(e, ind.slug)}
              className="bg-white border border-[#E5E4DF] rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-[#1D4ED8] transition-colors"
            >
              <div className="space-y-1.5">
                <p className="text-xs font-mono-tabular text-[#6E6D68]">0{ind.number}</p>
                <h3 className="text-base font-bold text-[#141413]">{ind.name}</h3>
                <p className="text-xs text-[#4A4945] line-clamp-2">{ind.metaDescription}</p>
              </div>
              <span className="text-xs font-semibold text-[#1D4ED8] inline-flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage="/industries/" onSuccessNavigate={onNavigate} />
      </section>
    </div>
  );
};

interface IndustryDetailProps {
  slug: string;
  onNavigate: (href: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailProps> = ({ slug, onNavigate }) => {
  const industry = getIndustryBySlug(slug);
  const resolvedCopy = useResolvedPageCopy(
    industry?.slug || slug,
    industry?.h1 || '',
    industry?.imageKey || 'enterpriseOffice'
  );

  if (!industry) return null;

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <article className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Industries', href: '/industries/' },
              { label: industry.name, href: industry.slug },
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs text-[#6E6D68] font-mono-tabular">Industry {industry.number}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#141413] leading-tight">
                {resolvedCopy.h1}
              </h1>
              <p className="text-sm sm:text-base text-[#4A4945] leading-relaxed">
                {industry.metaDescription}
              </p>
              <div className="pt-2">
                <a
                  href="#industry-quote-form"
                  className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF]"
                >
                  Request Proposal
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey={industry.imageKey} customAlt={resolvedCopy.imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Recommended Services */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-xl font-bold text-[#141413]">Key Challenges We Solve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industry.challenges.map((ch, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#E5E4DF] rounded-xl">
                <h3 className="text-sm font-bold text-[#141413]">{ch.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-xl font-bold text-[#141413]">Recommended Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industry.recommendedServices.map((rec, idx) => (
              <a
                key={idx}
                href={rec.serviceSlug}
                onClick={(e) => handleLink(e, rec.serviceSlug)}
                className="p-4 bg-white border border-[#E5E4DF] rounded-xl hover:border-[#1D4ED8] flex items-center justify-between"
              >
                <span className="text-sm font-bold text-[#141413]">{rec.serviceName}</span>
                <ArrowRight className="w-4 h-4 text-[#1D4ED8] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Pillars & Outcome */}
      <section className="bg-white border-y border-[#E5E4DF] py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.strategyPillars.map((pil) => (
              <div key={pil.step} className="p-4 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl space-y-1">
                <p className="font-mono-tabular text-xs font-bold text-[#1D4ED8]">{pil.step}</p>
                <h3 className="text-sm font-bold text-[#141413]">{pil.title}</h3>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#6E6D68]">{industry.exampleOutcome.segment}</p>
              <p className="text-sm sm:text-base font-bold text-[#15803D] font-mono-tabular mt-0.5">
                {industry.exampleOutcome.result}
              </p>
            </div>
            <a
              href="/case-studies/"
              onClick={(e) => handleLink(e, '/case-studies/')}
              className="text-xs font-semibold text-[#1D4ED8] hover:underline shrink-0"
            >
              View Case Studies →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-white border border-[#E5E4DF] rounded-xl p-6">
          <FaqAccordion items={industry.faqs.slice(0, 2)} heading="FAQs" />
        </div>
        <div id="industry-quote-form" className="lg:col-span-7">
          <LeadCaptureForm sourcePage={industry.slug} onSuccessNavigate={onNavigate} />
        </div>
      </section>
    </article>
  );
};

export const LocationsOverviewPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1, imageAlt } = useResolvedPageCopy(
    '/locations/',
    'Locations We Serve Across India',
    'heroWorkspace'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Locations', href: '/locations/' }]} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs text-[#6E6D68]">
                Headquartered in Vijayawada, Andhra Pradesh · Serving Businesses Across India
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#141413] leading-tight">
                {h1}
              </h1>
              <p className="text-base text-[#4A4945] max-w-xl">
                Based in Vijayawada (+91 77940 06495 / +971 52 699 0466), we deliver SEO, paid ads, and web development across key Indian business hubs.
              </p>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey="heroWorkspace" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LOCATIONS_DATA.map((loc) => (
          <a
            key={loc.id}
            href={loc.slug}
            onClick={(e) => handleLink(e, loc.slug)}
            className="bg-white border border-[#E5E4DF] rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-[#1D4ED8] transition-colors"
          >
            <div className="space-y-1.5">
              <p className="text-xs text-[#6E6D68]">{loc.state}</p>
              <h2 className="text-lg font-bold text-[#141413]">{loc.city}</h2>
              <p className="text-xs text-[#4A4945] line-clamp-2">{loc.heroLead}</p>
            </div>
            <span className="text-xs font-semibold text-[#1D4ED8] inline-flex items-center gap-1">
              View {loc.city} <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        ))}
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage="/locations/" onSuccessNavigate={onNavigate} />
      </section>
    </div>
  );
};

interface LocationDetailProps {
  slug: string;
  onNavigate: (href: string) => void;
}

export const LocationDetailPage: React.FC<LocationDetailProps> = ({ slug, onNavigate }) => {
  const location = getLocationBySlug(slug);
  const resolvedCopy = useResolvedPageCopy(
    location?.slug || slug,
    location?.h1 || '',
    location?.imageKey || 'heroWorkspace'
  );

  if (!location) return null;

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <article className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Locations', href: '/locations/' },
              { label: location.city, href: location.slug },
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs text-[#6E6D68]">
                {location.city}, {location.state} · {location.officeNote}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#141413] leading-tight">
                {resolvedCopy.h1}
              </h1>
              <p className="text-sm sm:text-base text-[#4A4945] leading-relaxed">
                {location.heroLead}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#location-quote-form"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF]"
                >
                  Request Consultation
                </a>
                <a
                  href="tel:+917794006495"
                  className="px-5 py-2.5 text-sm font-semibold text-[#141413] bg-white border border-[#E5E4DF] rounded-lg hover:bg-[#F3F2EE]"
                >
                  Call +91 77940 06495
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey={location.imageKey} customAlt={resolvedCopy.imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core City Services */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl font-bold text-[#141413]">Services in {location.city}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {location.cityServicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-[#E5E4DF] rounded-xl p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#141413]">{pillar.title}</h3>
                <p className="text-xs text-[#4A4945] leading-relaxed">{pillar.summary}</p>
              </div>
              <a
                href={pillar.linkedCoreServiceSlug}
                onClick={(e) => handleLink(e, pillar.linkedCoreServiceSlug)}
                className="text-xs font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Areas & Industries */}
      <section className="bg-white border-y border-[#E5E4DF] py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#141413]">Key Areas in {location.city}</h2>
            <div className="flex flex-wrap gap-2">
              {location.commercialCorridors.map((c, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-xs text-[#4A4945]">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-base font-bold text-[#141413]">Industries Served</h2>
            <div className="flex flex-wrap gap-2">
              {location.keyIndustriesServed.map((ind) => (
                <a
                  key={ind.slug}
                  href={ind.slug}
                  onClick={(e) => handleLink(e, ind.slug)}
                  className="px-3 py-1.5 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-xs font-semibold text-[#141413] hover:border-[#1D4ED8]"
                >
                  {ind.name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="location-quote-form" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage={location.slug} onSuccessNavigate={onNavigate} />
      </section>
    </article>
  );
};
