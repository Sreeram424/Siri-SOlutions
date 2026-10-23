import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SafeImage } from '../components/SafeImage';
import { BrandLogo } from '../components/BrandLogo';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { useResolvedPageCopy } from '../components/SeoHeadManager';
import { SERVICES_DATA } from '../data/servicesData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { LOCATIONS_DATA } from '../data/locationsData';
import { PORTFOLIO_PROJECTS } from '../data/portfolioAndCasesData';
import { HorizontalScrollShowcase } from '../components/HorizontalScrollShowcase';

interface HomePageProps {
  onNavigate: (href: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { imageAlt } = useResolvedPageCopy(
    '/',
    'Rooted in Strategy. Powered by Innovation.',
    'heroWorkspace'
  );

  const [activeServiceTab, setActiveServiceTab] = useState<
    'Search & GEO' | 'Paid Media' | 'Web & Conversion' | 'Content & Social'
  >('Search & GEO');

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const visibleServices = SERVICES_DATA.filter((s) => s.category === activeServiceTab);

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION (Referenced directly from dandamudibiotech.in layout & structure) */}
      <section className="relative bg-white pt-12 sm:pt-16 pb-20 border-b border-[#E5E4DF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Kicker, Bold Two-Part Headline, Concise Mission, Two Clean CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs sm:text-sm font-semibold text-[#17B897] tracking-wide">
                Rooted in Strategy. Powered by Innovation.
              </p>

              <h1 className="text-4xl sm:text-6xl font-bold text-[#111113] leading-[1.08] tracking-tight">
                Digital Growth for Future-Ready Brands.
              </h1>

              <p className="text-base sm:text-lg text-[#4A4945] leading-relaxed max-w-xl">
                Integrating foundational search architecture with modern AI visibility (GEO), precision paid media, and clean-code web engineering to build lasting digital authority.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/services/"
                  onClick={(e) => handleLink(e, '/services/')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#111113] rounded-xl hover:bg-[#2563EB] transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Our Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact/"
                  onClick={(e) => handleLink(e, '/contact/')}
                  className="px-6 py-3.5 text-sm font-semibold text-[#111113] bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl hover:border-[#111113] transition-colors"
                >
                  Contact Desk
                </a>
              </div>
            </div>

            {/* Right Column: Clean Hero Visual */}
            <div className="lg:col-span-5">
              <SafeImage imageKey="heroWorkspace" customAlt={imageAlt} priority={true} />
            </div>
          </div>

          {/* Bottom Hero Strip: 3 Core Competency Callouts (Dandamudi Biotech 3-pillar bar style) */}
          <div className="pt-10 border-t border-[#E5E4DF] grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-xs font-mono-tabular text-[#6E6D68]">Search Architecture</p>
              <p className="text-lg font-bold text-[#111113]">SEO &amp; AI Visibility (GEO)</p>
              <p className="text-xs text-[#4A4945]">Technical indexing &amp; LLM answer citations.</p>
            </div>
            <div className="space-y-1 sm:border-l sm:border-[#E5E4DF] sm:pl-6">
              <p className="text-xs font-mono-tabular text-[#6E6D68]">Precision Acquisition</p>
              <p className="text-lg font-bold text-[#111113]">3.8x Verified ROAS</p>
              <p className="text-xs text-[#4A4945]">High-intent Google &amp; Meta ad systems.</p>
            </div>
            <div className="space-y-1 sm:border-l sm:border-[#E5E4DF] sm:pl-6">
              <p className="text-xs font-mono-tabular text-[#6E6D68]">Verified Performance</p>
              <p className="text-lg font-bold text-[#111113]">&le; 2.0s Core Web Vitals</p>
              <p className="text-xs text-[#4A4945]">100% client-owned web &amp; analytics assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC PILLARS (Dandamudi Biotech 4 Strategic Pillars Layout) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-xl space-y-2">
          <p className="text-xs font-semibold text-[#2563EB]">Strategic Pillars</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#111113]">
            Four Core Disciplines Driving Sustainable Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              index: '01',
              title: 'Organic & AI Search',
              subtitle: 'SEO · Local SEO · GEO',
              desc: 'Compounding search visibility across Google Search, Maps, and AI engines.',
              href: '/services/seo-services/',
            },
            {
              index: '02',
              title: 'Performance Media',
              subtitle: 'Google Ads · Meta Ads',
              desc: 'Conversion-tracked paid search and social campaigns built for qualified pipeline.',
              href: '/services/google-ads/',
            },
            {
              index: '03',
              title: 'Web Engineering',
              subtitle: 'Design · Full-Stack · CRO',
              desc: 'Fast, responsive websites and landing pages engineered to convert traffic.',
              href: '/services/website-development/',
            },
            {
              index: '04',
              title: 'Brand & Content',
              subtitle: 'Content · Social Media',
              desc: 'Editorial authority clusters and social storytelling for modern businesses.',
              href: '/services/content-marketing/',
            },
          ].map((pillar) => (
            <a
              key={pillar.index}
              href={pillar.href}
              onClick={(e) => handleLink(e, pillar.href)}
              className="group bg-white border border-[#E5E4DF] rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#111113] transition-colors"
            >
              <div className="space-y-2.5">
                <p className="text-xs font-mono-tabular text-[#6E6D68]">
                  {pillar.index} · {pillar.subtitle}
                </p>
                <h3 className="text-lg font-bold text-[#111113] group-hover:text-[#2563EB] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#4A4945] leading-relaxed">{pillar.desc}</p>
              </div>
              <span className="text-xs font-semibold text-[#111113] inline-flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY / ABOUT SPLIT (Dandamudi Biotech Minimal Story Section) */}
      <section className="bg-white border-y border-[#E5E4DF] py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SafeImage imageKey="seoAuditDesk" />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold text-[#17B897]">Our Approach</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111113] leading-tight">
              Where Technical Precision Meets Measurable Commercial Impact.
            </h2>
            <p className="text-sm sm:text-base text-[#4A4945] leading-relaxed">
              Headquartered in Vijayawada, Andhra Pradesh, Siri Solutions partners with businesses across India and the UAE. We eliminate vanity metrics and focus strictly on search equity, qualified enquiries, and clean web infrastructure that you own 100%.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl">
                <p className="text-xl font-bold text-[#111113] font-mono-tabular">15</p>
                <p className="text-xs text-[#6E6D68]">Focused Services</p>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl">
                <p className="text-xl font-bold text-[#111113] font-mono-tabular">8</p>
                <p className="text-xs text-[#6E6D68]">Core Industries</p>
              </div>
              <div className="p-4 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl">
                <p className="text-xl font-bold text-[#111113] font-mono-tabular">100%</p>
                <p className="text-xs text-[#6E6D68]">Asset Ownership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPECIALIZED CAPABILITIES (Minimal Categorized Grid) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#2563EB]">Specialized Services</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111113]">
              Capabilities by Discipline
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-white border border-[#E5E4DF] rounded-xl">
            {(['Search & GEO', 'Paid Media', 'Web & Conversion', 'Content & Social'] as const).map(
              (tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveServiceTab(tab)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    activeServiceTab === tab
                      ? 'bg-[#111113] text-white'
                      : 'text-[#4A4945] hover:text-[#111113]'
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleServices.map((service) => (
            <a
              key={service.id}
              href={service.slug}
              onClick={(e) => handleLink(e, service.slug)}
              className="group bg-white border border-[#E5E4DF] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#111113] transition-colors"
            >
              <div className="space-y-2">
                <p className="text-xs font-mono-tabular text-[#6E6D68]">
                  {service.number} · {service.category}
                </p>
                <h3 className="text-base font-bold text-[#111113] group-hover:text-[#2563EB] transition-colors">
                  {service.shortName}
                </h3>
                <p className="text-xs text-[#4A4945] leading-relaxed line-clamp-2">
                  {service.metaDescription}
                </p>
              </div>
              <span className="text-xs font-semibold text-[#111113] inline-flex items-center gap-1 pt-2 border-t border-[#F3F2EE]">
                View Scope <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE HORIZONTAL SCROLL SHOWCASE (Slides move horizontally as you scroll vertically) */}
      <HorizontalScrollShowcase onNavigate={onNavigate} />

      {/* Sectors and Locations Quick Navigation Hub */}
      <section className="bg-white border-b border-[#E5E4DF] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#17B897]">Domain Experience</p>
                <h3 className="text-xl font-bold text-[#111113]">8 Core Industries We Serve</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES_DATA.map((ind) => (
                  <a
                    key={ind.id}
                    href={ind.slug}
                    onClick={(e) => handleLink(e, ind.slug)}
                    className="px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl text-xs font-medium text-[#111113] hover:border-[#111113] transition-colors"
                  >
                    {ind.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#2563EB]">Regional Footprint</p>
                <h3 className="text-xl font-bold text-[#111113]">Active Client Service Hubs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS_DATA.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.slug}
                    onClick={(e) => handleLink(e, loc.slug)}
                    className="px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl text-xs font-medium text-[#111113] hover:border-[#111113] transition-colors"
                  >
                    {loc.city}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT DESK (Minimal Dandamudi Biotech Contact Desk Layout) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6 bg-white border border-[#E5E4DF] rounded-2xl p-8">
          <BrandLogo size="md" />
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#17B897]">Contact Desk</p>
            <h2 className="text-2xl font-bold text-[#111113]">
              Start a Conversation With Siri Solutions
            </h2>
            <p className="text-xs text-[#4A4945] leading-relaxed">
              Connect with our team in Vijayawada for a focused review of your website, search rankings, or paid media campaigns.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E5E4DF] space-y-3 text-xs text-[#4A4945]">
            <p>
              <strong className="text-[#111113]">Headquarters:</strong> Vijayawada, Andhra Pradesh, India
            </p>
            <p>
              <strong className="text-[#111113]">Phone:</strong>{' '}
              <a href="tel:+917794006495" className="text-[#111113] underline font-semibold">
                +91 77940 06495
              </a>{' '}
              ·{' '}
              <a href="tel:+971526990466" className="text-[#111113] underline font-semibold">
                +971 52 699 0466
              </a>
            </p>
            <p>
              <strong className="text-[#111113]">WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/971526990466"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#15803D] underline font-semibold"
              >
                +971 52 699 0466
              </a>
            </p>
            <p>
              <strong className="text-[#111113]">Email:</strong>{' '}
              <a href="mailto:contact@sirisolutions.in" className="text-[#111113] underline font-semibold">
                contact@sirisolutions.in
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <LeadCaptureForm
            sourcePage="/"
            onSuccessNavigate={onNavigate}
            heading="Enquiry Desk"
            subheading="All enquiries are delivered directly to contact@sirisolutions.in."
          />
        </div>
      </section>
    </div>
  );
};
