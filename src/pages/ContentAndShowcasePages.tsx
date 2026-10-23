import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafeImage } from '../components/SafeImage';
import { BrandLogo } from '../components/BrandLogo';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { useResolvedPageCopy } from '../components/SeoHeadManager';
import { CASE_STUDIES_DATA, PORTFOLIO_PROJECTS } from '../data/portfolioAndCasesData';
import { BLOG_ARTICLES_DATA, BLOG_CATEGORIES, getBlogBySlug } from '../data/blogData';
import { LOCATIONS_DATA } from '../data/locationsData';

interface PageNavProps {
  onNavigate: (href: string) => void;
}

export const AboutPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1, imageAlt } = useResolvedPageCopy(
    '/about/',
    'Digital Marketing, SEO & Web Solutions Built on Measurable Outcomes',
    'heroWorkspace'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="bg-white pt-8 border-b border-[#E5E4DF] pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'About', href: '/about/' }]} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <BrandLogo size="md" />
              </div>
              <p className="text-xs font-semibold text-[#17B897]">
                Rooted in Strategy · Powered by Innovation
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold text-[#111113] leading-tight">
                {h1}
              </h1>
              <p className="text-base text-[#4A4945] leading-relaxed max-w-xl">
                Headquartered in Vijayawada, Andhra Pradesh, Siri Solutions integrates technical search architecture, AI visibility (GEO), paid media, and clean web engineering.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/contact/"
                  onClick={(e) => handleLink(e, '/contact/')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#111113] rounded-xl hover:bg-[#2563EB] transition-colors"
                >
                  Contact Desk
                </a>
                <a
                  href="tel:+917794006495"
                  className="px-6 py-3 text-sm font-semibold text-[#111113] bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl hover:border-[#111113] transition-colors"
                >
                  +91 77940 06495
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey="heroWorkspace" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl font-bold text-[#141413]">How We Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { num: '01', title: 'Business Audit', body: 'Deep review of your website, search visibility, and competitors.' },
            { num: '02', title: 'Custom Strategy', body: 'Tailored SEO, paid ads, and web roadmap aligned with your goals.' },
            { num: '03', title: 'Rapid Execution', body: 'Clean web engineering, on-page SEO, and targeted ad campaigns.' },
            { num: '04', title: 'Transparent Reporting', body: '100% client ownership of code, analytics, and ad accounts.' },
          ].map((item) => (
            <div key={item.num} className="bg-white border border-[#E5E4DF] rounded-xl p-5 space-y-2">
              <p className="text-xs font-mono-tabular text-[#1D4ED8] font-bold">{item.num}</p>
              <h3 className="text-base font-bold text-[#141413]">{item.title}</h3>
              <p className="text-xs text-[#4A4945] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Service Areas */}
      <section className="bg-white border-y border-[#E5E4DF] py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-2">
            <h2 className="text-lg font-bold text-[#141413]">Vijayawada Headquarters</h2>
            <p className="text-xs text-[#4A4945]">Vijayawada, Andhra Pradesh, India</p>
            <p className="text-xs text-[#4A4945]">
              Phone: <a href="tel:+917794006495" className="font-semibold text-[#141413] underline">+91 77940 06495</a> ·{' '}
              <a href="tel:+971526990466" className="font-semibold text-[#141413] underline">+971 52 699 0466</a>
            </p>
            <p className="text-xs text-[#4A4945]">
              WhatsApp: <a href="https://wa.me/971526990466" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1D4ED8] underline">+971 52 699 0466</a>
            </p>
            <p className="text-xs text-[#4A4945]">
              Email: <a href="mailto:contact@sirisolutions.in" className="font-semibold text-[#141413] underline">contact@sirisolutions.in</a>
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-wrap gap-2">
            {LOCATIONS_DATA.map((loc) => (
              <a
                key={loc.id}
                href={loc.slug}
                onClick={(e) => handleLink(e, loc.slug)}
                className="px-3.5 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-xs font-semibold text-[#141413] hover:border-[#1D4ED8]"
              >
                {loc.city}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage="/about/" onSuccessNavigate={onNavigate} />
      </section>
    </div>
  );
};

export const PortfolioPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1, imageAlt } = useResolvedPageCopy(
    '/portfolio/',
    'Selected Web & Search Growth Projects',
    'webEngineeringCollab'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio/' }]} onNavigate={onNavigate} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold text-[#141413] leading-tight">{h1}</h1>
              <p className="text-base text-[#4A4945] max-w-xl">
                Recent website design, development, and search optimization builds.
              </p>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey="webEngineeringCollab" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="bg-white border border-[#E5E4DF] rounded-2xl p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <SafeImage imageKey={proj.imageKey} />
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#2563EB]">{proj.deliverableType}</span>
                <span className="text-[#6E6D68]">{proj.sector} · {proj.city}</span>
              </div>
              <h2 className="text-lg font-bold text-[#111113]">{proj.title}</h2>
              <p className="text-xs text-[#4A4945] leading-relaxed">{proj.summary}</p>
            </div>
            <div className="pt-3 border-t border-[#E5E4DF] flex items-center justify-between text-xs">
              <a
                href={proj.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tabular font-semibold text-[#111113] hover:text-[#2563EB] underline underline-offset-4"
              >
                Visit {proj.clientUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗
              </a>
              <a
                href={proj.relatedServiceSlug}
                onClick={(e) => handleLink(e, proj.relatedServiceSlug)}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                Service →
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage="/portfolio/" onSuccessNavigate={onNavigate} />
      </section>
    </div>
  );
};

export const CaseStudiesPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1, imageAlt } = useResolvedPageCopy(
    '/case-studies/',
    'Documented Client Case Studies',
    'paidMediaSession'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies/' }]} onNavigate={onNavigate} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-bold text-[#141413] leading-tight">{h1}</h1>
              <p className="text-base text-[#4A4945] max-w-xl">
                Verified outcomes across SEO, Google Ads, Meta Ads, and web conversion.
              </p>
            </div>
            <div className="lg:col-span-5">
              <SafeImage imageKey="paidMediaSession" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {CASE_STUDIES_DATA.map((cs) => (
          <article key={cs.id} className="bg-white border border-[#E5E4DF] rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <p className="text-xs text-[#6E6D68]">{cs.city} · {cs.timeframe}</p>
              <p className="text-lg font-bold text-[#17B897] font-mono-tabular">{cs.headlineMetric}</p>
              <h2 className="text-base font-bold text-[#111113]">{cs.title}</h2>
              <p className="text-xs text-[#4A4945] leading-relaxed">{cs.documentedOutcome}</p>
            </div>
            <div className="pt-3 border-t border-[#E5E4DF] flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-2">
                {cs.servicesProvided.map((s) => (
                  <a
                    key={s.slug}
                    href={s.slug}
                    onClick={(e) => handleLink(e, s.slug)}
                    className="text-xs font-semibold text-[#2563EB] hover:underline"
                  >
                    {s.name} →
                  </a>
                ))}
              </div>
              {cs.clientUrl && (
                <a
                  href={cs.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono-tabular font-semibold text-[#111113] underline underline-offset-4 hover:text-[#2563EB]"
                >
                  {cs.clientUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm sourcePage="/case-studies/" onSuccessNavigate={onNavigate} />
      </section>
    </div>
  );
};

export const BlogIndexPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { h1 } = useResolvedPageCopy(
    '/blog/',
    'Digital Marketing & SEO Insights',
    'seoAuditDesk'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const articles =
    selectedCategory === 'All'
      ? BLOG_ARTICLES_DATA
      : BLOG_ARTICLES_DATA.filter((a) => a.category === selectedCategory);

  return (
    <div className="space-y-14 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }]} onNavigate={onNavigate} />
          <h1 className="text-3xl sm:text-5xl font-bold text-[#141413]">{h1}</h1>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {['All', ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#141413] text-white border-[#141413]'
                    : 'bg-white text-[#4A4945] border-[#E5E4DF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.slug}
            onClick={(e) => handleLink(e, article.slug)}
            className="bg-white border border-[#E5E4DF] rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-[#1D4ED8] transition-colors"
          >
            <div className="space-y-2">
              <p className="text-xs text-[#6E6D68]">{article.category} · {article.readTime}</p>
              <h2 className="text-base font-bold text-[#141413]">{article.title}</h2>
              <p className="text-xs text-[#4A4945] line-clamp-2">{article.excerpt}</p>
            </div>
            <span className="text-xs font-semibold text-[#1D4ED8] inline-flex items-center gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        ))}
      </section>
    </div>
  );
};

interface BlogArticleProps {
  slug: string;
  onNavigate: (href: string) => void;
}

export const BlogArticlePage: React.FC<BlogArticleProps> = ({ slug, onNavigate }) => {
  const article = getBlogBySlug(slug);
  const resolvedCopy = useResolvedPageCopy(
    article?.slug || slug,
    article?.h1 || '',
    article?.imageKey || 'seoAuditDesk'
  );

  if (!article) return null;

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <article className="space-y-12 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-10">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog/' },
              { label: article.title, href: article.slug },
            ]}
            onNavigate={onNavigate}
          />
          <p className="text-xs text-[#6E6D68]">{article.category} · {article.readTime}</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#141413] leading-tight">
            {resolvedCopy.h1}
          </h1>
          <p className="text-sm text-[#4A4945] leading-relaxed">{article.leadSummary}</p>
        </div>
      </section>

      <div className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-5 bg-white border border-[#E5E4DF] rounded-xl space-y-2">
          <h2 className="text-sm font-bold text-[#141413]">Key Takeaways</h2>
          <ul className="space-y-1.5 text-xs text-[#4A4945]">
            {article.keyTakeaways.map((kt, idx) => (
              <li key={idx}>• {kt}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="text-lg font-bold text-[#141413]">{sec.heading}</h2>
              <p className="text-sm text-[#4A4945] leading-relaxed">{sec.paragraphs[0]}</p>
            </section>
          ))}
        </div>

        <div className="pt-4 border-t border-[#E5E4DF] flex flex-wrap gap-3">
          {article.relatedServices.map((s) => (
            <a
              key={s.slug}
              href={s.slug}
              onClick={(e) => handleLink(e, s.slug)}
              className="px-3.5 py-2 bg-white border border-[#E5E4DF] rounded-lg text-xs font-semibold text-[#1D4ED8]"
            >
              {s.name} →
            </a>
          ))}
        </div>

        <LeadCaptureForm sourcePage={article.slug} onSuccessNavigate={onNavigate} />
      </div>
    </article>
  );
};
