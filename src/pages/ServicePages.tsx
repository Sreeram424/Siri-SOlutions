import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafeImage } from '../components/SafeImage';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { useResolvedPageCopy } from '../components/SeoHeadManager';
import { SERVICES_DATA, ServicePageData, getServiceBySlug } from '../data/servicesData';

interface PageNavProps {
  onNavigate: (href: string) => void;
}

export const ServicesOverviewPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { h1, imageAlt } = useResolvedPageCopy(
    '/services/',
    'Digital Marketing, SEO & Web Capabilities',
    'enterpriseOffice'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const categories = ['All', 'Search & GEO', 'Paid Media', 'Content & Social', 'Web & Conversion'];
  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20">
      <section className="bg-white pt-8 border-b border-[#E5E4DF] pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={[{ label: 'Capabilities', href: '/services/' }]} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold text-[#17B897]">
                Rooted in Strategy · Powered by Innovation
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#111113] leading-tight">
                {h1}
              </h1>
              <p className="text-base text-[#4A4945] max-w-xl leading-relaxed">
                15 focused disciplines across organic search, AI optimization (GEO), paid acquisition, and clean web engineering.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/contact/"
                  onClick={(e) => handleLink(e, '/contact/')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#111113] rounded-xl hover:bg-[#2563EB] transition-colors"
                >
                  Contact Desk
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey="enterpriseOffice" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-[#111113]">Capabilities ({filteredServices.length})</h2>
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white border border-[#E5E4DF] rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat ? 'bg-[#111113] text-white' : 'text-[#4A4945] hover:text-[#111113]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <a
              key={service.id}
              href={service.slug}
              onClick={(e) => handleLink(e, service.slug)}
              className="group bg-white border border-[#E5E4DF] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#111113] transition-colors"
            >
              <div className="space-y-2">
                <p className="text-xs font-mono-tabular text-[#6E6D68]">{service.number} · {service.category}</p>
                <h3 className="text-lg font-bold text-[#111113] group-hover:text-[#2563EB] transition-colors">
                  {service.shortName}
                </h3>
                <p className="text-xs text-[#4A4945] line-clamp-2">{service.metaDescription}</p>
              </div>
              <span className="text-xs font-semibold text-[#111113] inline-flex items-center gap-1 pt-2 border-t border-[#F3F2EE]">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage="/services/" onSuccessNavigate={onNavigate} />
      </section>
    </div>
  );
};

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (href: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service: ServicePageData | undefined = getServiceBySlug(slug);
  const resolvedCopy = useResolvedPageCopy(
    service?.slug || slug,
    service?.h1 || '',
    service?.imageKey || 'seoAuditDesk'
  );

  if (!service) return null;

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const relatedServices = service.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServicePageData => Boolean(s));

  return (
    <article className="space-y-20 pb-20">
      {/* Minimal Dandamudi Biotech-inspired Service Hero */}
      <section className="bg-white pt-8 border-b border-[#E5E4DF] pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs
            items={[
              { label: 'Capabilities', href: '/services/' },
              { label: service.shortName, href: service.slug },
            ]}
            onNavigate={onNavigate}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-semibold text-[#17B897] font-mono-tabular">
                {service.number} · {service.category}
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#111113] leading-tight">
                {resolvedCopy.h1}
              </h1>
              <p className="text-sm sm:text-base text-[#4A4945] leading-relaxed max-w-xl">
                {service.heroLead}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#service-quote-form"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#111113] rounded-xl hover:bg-[#2563EB] transition-colors"
                >
                  Contact Desk
                </a>
                <a
                  href="/case-studies/"
                  onClick={(e) => handleLink(e, '/case-studies/')}
                  className="px-6 py-3 text-sm font-semibold text-[#111113] bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl hover:border-[#111113] transition-colors"
                >
                  View Outcomes
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage imageKey={service.imageKey} customAlt={resolvedCopy.imageAlt} priority={true} />
            </div>
          </div>

          {/* 3-Column Competency & Outcome Bar */}
          <div className="pt-8 border-t border-[#E5E4DF] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-xs text-[#6E6D68]">Verified Result</p>
              <p className="text-base font-bold text-[#111113] font-mono-tabular">
                {service.documentedOutcome.measuredResult}
              </p>
            </div>
            <div className="space-y-1 sm:border-l sm:border-[#E5E4DF] sm:pl-6">
              <p className="text-xs text-[#6E6D68]">Benchmark Timeframe</p>
              <p className="text-base font-bold text-[#111113] font-mono-tabular">
                {service.documentedOutcome.timeframe}
              </p>
            </div>
            <div className="space-y-1 sm:border-l sm:border-[#E5E4DF] sm:pl-6">
              <p className="text-xs text-[#6E6D68]">Client Sector</p>
              <p className="text-base font-bold text-[#111113]">
                {service.documentedOutcome.clientContext}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables & Strategic Pillars */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-[#2563EB]">Core Competencies</p>
          <h2 className="text-2xl font-bold text-[#111113]">Key Deliverables</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {service.deliverables.slice(0, 4).map((deliv, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#E5E4DF] rounded-2xl space-y-2"
            >
              <p className="text-xs font-mono-tabular text-[#6E6D68]">0{idx + 1}</p>
              <h3 className="text-base font-bold text-[#111113]">{deliv.title}</h3>
              <p className="text-xs text-[#4A4945] leading-relaxed line-clamp-2">{deliv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Process */}
      <section className="bg-white border-y border-[#E5E4DF] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#17B897]">Methodology</p>
            <h2 className="text-2xl font-bold text-[#111113]">Execution Framework</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {service.processSteps.map((step) => (
              <div key={step.stepNumber} className="p-5 bg-[#FAF9F6] border border-[#E5E4DF] rounded-2xl space-y-1.5">
                <p className="text-xs font-mono-tabular font-bold text-[#2563EB]">{step.stepNumber}</p>
                <h3 className="text-sm font-bold text-[#111113]">{step.title}</h3>
                <p className="text-xs text-[#4A4945] line-clamp-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs & Related Capabilities */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-white border border-[#E5E4DF] rounded-2xl p-6">
          <FaqAccordion items={service.faqs.slice(0, 3)} heading="Frequently Asked Questions" />
        </div>
        <div className="lg:col-span-5 space-y-3">
          <h2 className="text-lg font-bold text-[#111113]">Related Capabilities</h2>
          {relatedServices.map((rel) => (
            <a
              key={rel.id}
              href={rel.slug}
              onClick={(e) => handleLink(e, rel.slug)}
              className="p-4 bg-white border border-[#E5E4DF] rounded-2xl hover:border-[#111113] flex items-center justify-between block transition-colors"
            >
              <span className="text-sm font-bold text-[#111113]">{rel.shortName}</span>
              <ArrowRight className="w-4 h-4 text-[#111113]" />
            </a>
          ))}
        </div>
      </section>

      <section id="service-quote-form" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm
          defaultService={service.shortName}
          sourcePage={service.slug}
          onSuccessNavigate={onNavigate}
        />
      </section>
    </article>
  );
};
