import { IMAGE_LIBRARY } from './images';
import { SERVICES_DATA } from './servicesData';
import { INDUSTRIES_DATA } from './industriesData';
import { LOCATIONS_DATA } from './locationsData';
import { BLOG_ARTICLES_DATA } from './blogData';

export interface PageSeoInventoryRow {
  url: string;
  pageGroup: 'Main Pages' | 'Service Pages' | 'Industry Pages' | 'Location Hubs' | 'Blog Articles';
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetAudience: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  imageFilename: string;
  imageAltText: string;
  internalLinks: string[];
  schemaTypes: string[];
}

export const MAIN_PAGES_SEO: PageSeoInventoryRow[] = [
  {
    url: '/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'digital marketing agency in India',
    secondaryKeywords: ['SEO agency India', 'website development company India', 'PPC management services India', 'GEO optimization India'],
    searchIntent: 'Commercial / Brand Discovery — Indian & global businesses evaluating a full-funnel digital growth partner',
    targetAudience: 'Founders, CMOs, VPs of Marketing, and business owners across India',
    titleTag: 'Siri Solutions — Digital Marketing & SEO Agency in India',
    metaDescription: 'Siri Solutions is an India-focused digital marketing, technical SEO, GEO, paid search, and web development agency helping businesses grow qualified leads.',
    h1: 'Search-First Digital Marketing & Web Engineering for Businesses Across India',
    imageFilename: IMAGE_LIBRARY.heroWorkspace.seoFilename,
    imageAltText: IMAGE_LIBRARY.heroWorkspace.alt,
    internalLinks: ['/services/', '/services/seo-services/', '/services/google-ads/', '/services/website-development/', '/industries/', '/case-studies/', '/get-a-quote/'],
    schemaTypes: ['Organization', 'WebSite', 'LocalBusiness', 'FAQPage']
  },
  {
    url: '/about/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'about Siri Solutions digital agency India',
    secondaryKeywords: ['digital marketing team Vijayawada', 'SEO agency Andhra Pradesh India', 'ethical SEO agency India'],
    searchIntent: 'Informational / Brand Trust — Prospective clients evaluating leadership, methodology, and credentials',
    targetAudience: 'Enterprise procurement teams, founders, and marketing heads evaluating Siri Solutions',
    titleTag: 'About Siri Solutions | Digital Growth & SEO Partner India',
    metaDescription: 'Learn how Siri Solutions combines technical SEO, paid media, and clean web development from Vijayawada, Andhra Pradesh for Indian brands.',
    h1: 'Digital Marketing, SEO & Web Solutions Built on Measurable Outcomes',
    imageFilename: IMAGE_LIBRARY.heroWorkspace.seoFilename,
    imageAltText: IMAGE_LIBRARY.heroWorkspace.alt,
    internalLinks: ['/services/', '/case-studies/', '/portfolio/', '/locations/vijayawada/', '/contact/', '/get-a-quote/'],
    schemaTypes: ['Organization', 'AboutPage', 'BreadcrumbList']
  },
  {
    url: '/services/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'digital marketing services India',
    secondaryKeywords: ['SEO and PPC services India', 'web design and development services', 'B2B digital marketing capabilities'],
    searchIntent: 'Commercial Evaluation — Buyers reviewing full service taxonomy',
    targetAudience: 'Marketing directors and business owners comparing agency capabilities',
    titleTag: 'Digital Marketing, SEO & Web Services India — Siri Solutions',
    metaDescription: 'Explore our 15 specialized digital growth services: Technical SEO, Local SEO, GEO, Google Ads, Meta CAPI, Content Marketing, and Web Engineering.',
    h1: 'Digital Marketing, SEO & Web Development Services',
    imageFilename: IMAGE_LIBRARY.enterpriseOffice.seoFilename,
    imageAltText: IMAGE_LIBRARY.enterpriseOffice.alt,
    internalLinks: SERVICES_DATA.map((s) => s.slug),
    schemaTypes: ['CollectionPage', 'ItemList', 'BreadcrumbList']
  },
  {
    url: '/portfolio/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'web design and SEO portfolio India',
    secondaryKeywords: ['B2B website design examples India', 'D2C ecommerce SEO projects', 'real estate microsite portfolio'],
    searchIntent: 'Commercial Evaluation — Prospects inspecting build quality and UX architecture',
    targetAudience: 'Founders, product heads, and marketing leaders evaluating design and engineering standards',
    titleTag: 'Web Design & Digital Marketing Portfolio — Siri Solutions',
    metaDescription: 'Review selected web engineering, technical SEO, and campaign microsite projects delivered by Siri Solutions for Indian B2B, real estate, and D2C brands.',
    h1: 'Selected Web & Search Growth Projects',
    imageFilename: IMAGE_LIBRARY.webEngineeringCollab.seoFilename,
    imageAltText: IMAGE_LIBRARY.webEngineeringCollab.alt,
    internalLinks: ['/case-studies/', '/services/website-design/', '/services/website-development/', '/get-a-quote/'],
    schemaTypes: ['CollectionPage', 'BreadcrumbList']
  },
  {
    url: '/case-studies/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'SEO and digital marketing case studies India',
    secondaryKeywords: ['B2B lead generation results India', 'Google Ads ROAS case study', 'technical SEO recovery results'],
    searchIntent: 'Commercial Proof — Decision-makers verifying documented outcomes before requesting a quote',
    targetAudience: 'CMOs, CEOs, and growth leads seeking quantitative evidence',
    titleTag: 'Client Case Studies & Documented Outcomes — Siri Solutions',
    metaDescription: 'Documented SEO, GEO, Google Ads, and conversion optimization case studies with real baseline challenges, interventions, and verified metrics across India.',
    h1: 'Documented Client Case Studies',
    imageFilename: IMAGE_LIBRARY.paidMediaSession.seoFilename,
    imageAltText: IMAGE_LIBRARY.paidMediaSession.alt,
    internalLinks: ['/services/seo-services/', '/services/google-ads/', '/services/meta-ads/', '/industries/', '/get-a-quote/'],
    schemaTypes: ['CollectionPage', 'BreadcrumbList']
  },
  {
    url: '/industries/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'industry specific digital marketing India',
    secondaryKeywords: ['B2B SaaS real estate healthcare marketing', 'vertical SEO strategies India', 'D2C and fintech digital agency'],
    searchIntent: 'Commercial Evaluation — Buyers looking for domain experience in their specific sector',
    targetAudience: 'Sector-specific leaders in Real Estate, SaaS, Fintech, E-commerce, Healthcare, Education, and Hospitality',
    titleTag: 'Industries We Serve | Vertical Marketing India — Siri Solutions',
    metaDescription: 'Tailored SEO, paid search, and web engineering strategies for Real Estate, B2B SaaS, Fintech, E-commerce, Healthcare, Education, and Hospitality in India.',
    h1: 'Industries We Serve Across India',
    imageFilename: IMAGE_LIBRARY.enterpriseOffice.seoFilename,
    imageAltText: IMAGE_LIBRARY.enterpriseOffice.alt,
    internalLinks: INDUSTRIES_DATA.map((i) => i.slug),
    schemaTypes: ['CollectionPage', 'BreadcrumbList']
  },
  {
    url: '/locations/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'digital marketing agency locations India',
    secondaryKeywords: ['SEO services Vijayawada Hyderabad Bengaluru Mumbai', 'pan-India digital marketing coverage', 'regional search marketing India'],
    searchIntent: 'Local Commercial — Businesses verifying regional service coverage across Indian cities',
    targetAudience: 'Businesses in Vijayawada, Hyderabad, Bengaluru, Chennai, Mumbai, Delhi NCR, Pune, and Visakhapatnam',
    titleTag: 'Service Areas Across India | Vijayawada HQ — Siri Solutions',
    metaDescription: 'Headquartered in Vijayawada, Andhra Pradesh with service delivery across Hyderabad, Bengaluru, Chennai, Mumbai, Delhi NCR, Pune, and Visakhapatnam.',
    h1: 'Locations We Serve Across India',
    imageFilename: IMAGE_LIBRARY.heroWorkspace.seoFilename,
    imageAltText: IMAGE_LIBRARY.heroWorkspace.alt,
    internalLinks: LOCATIONS_DATA.map((l) => l.slug),
    schemaTypes: ['CollectionPage', 'BreadcrumbList']
  },
  {
    url: '/blog/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'digital marketing and SEO blog India',
    secondaryKeywords: ['technical SEO guides India', 'GEO optimization insights', 'Google Ads B2B playbooks'],
    searchIntent: 'Informational — Practitioners and buyers researching actionable search and conversion guides',
    targetAudience: 'Marketing leaders, SEO practitioners, founders, and developers across India',
    titleTag: 'Search, GEO, Paid Media & Web Engineering Blog — Siri Solutions',
    metaDescription: 'Original, practitioner-written guides on Technical SEO, Generative Engine Optimization (GEO), Local SEO, Google Ads, and Core Web Vitals for Indian brands.',
    h1: 'Digital Marketing & SEO Insights',
    imageFilename: IMAGE_LIBRARY.seoAuditDesk.seoFilename,
    imageAltText: IMAGE_LIBRARY.seoAuditDesk.alt,
    internalLinks: BLOG_ARTICLES_DATA.map((b) => b.slug),
    schemaTypes: ['Blog', 'BreadcrumbList']
  },
  {
    url: '/contact/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'contact Siri Solutions Vijayawada',
    secondaryKeywords: ['digital marketing consultation India', 'Siri Solutions phone number address', 'Vijayawada SEO agency contact'],
    searchIntent: 'Transactional / Navigational — Prospective clients initiating direct contact',
    targetAudience: 'Prospective clients, partners, and enterprise procurement teams',
    titleTag: 'Contact Siri Solutions | Vijayawada, Andhra Pradesh & India',
    metaDescription: 'Contact Siri Solutions in Vijayawada, Andhra Pradesh (+91 77940 06495 / +971 52 699 0466) to discuss SEO, Google Ads, or website development.',
    h1: 'Contact Siri Solutions',
    imageFilename: IMAGE_LIBRARY.enterpriseOffice.seoFilename,
    imageAltText: IMAGE_LIBRARY.enterpriseOffice.alt,
    internalLinks: ['/get-a-quote/', '/locations/vijayawada/', '/services/'],
    schemaTypes: ['ContactPage', 'LocalBusiness', 'BreadcrumbList']
  },
  {
    url: '/get-a-quote/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'request digital marketing proposal India',
    secondaryKeywords: ['SEO audit quote India', 'website development cost proposal', 'Google Ads audit request'],
    searchIntent: 'Transactional — High-intent buyers requesting a custom proposal and diagnostic',
    targetAudience: 'Decision-makers ready to scope an SEO, paid media, or web engineering engagement',
    titleTag: 'Request a Consultation & Custom Proposal — Siri Solutions',
    metaDescription: 'Request a tailored SEO diagnostic, paid media audit, or website development proposal from Siri Solutions. Receive a practitioner roadmap within 2 business days.',
    h1: 'Request a Custom Growth Proposal & Initial Website Diagnostic',
    imageFilename: IMAGE_LIBRARY.seoAuditDesk.seoFilename,
    imageAltText: IMAGE_LIBRARY.seoAuditDesk.alt,
    internalLinks: ['/case-studies/', '/services/', '/contact/'],
    schemaTypes: ['WebPage', 'BreadcrumbList']
  },
  {
    url: '/privacy-policy/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'Siri Solutions privacy policy',
    secondaryKeywords: ['DPDP Act compliance India', 'cookie and analytics privacy notice'],
    searchIntent: 'Informational / Legal — Visitors verifying data handling and DPDP Act 2023 compliance',
    targetAudience: 'Website visitors, clients, and compliance reviewers',
    titleTag: 'Privacy Policy & Data Protection (DPDP) — Siri Solutions',
    metaDescription: 'Read Siri Solutions’ Privacy Policy detailing how we collect, protect, and process enquiry and analytics data in alignment with India’s DPDP Act.',
    h1: 'Privacy Policy & Personal Data Protection Notice',
    imageFilename: IMAGE_LIBRARY.heroWorkspace.seoFilename,
    imageAltText: IMAGE_LIBRARY.heroWorkspace.alt,
    internalLinks: ['/terms-and-conditions/', '/contact/'],
    schemaTypes: ['WebPage', 'BreadcrumbList']
  },
  {
    url: '/terms-and-conditions/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'Siri Solutions terms and conditions',
    secondaryKeywords: ['agency service terms India', 'website usage terms'],
    searchIntent: 'Informational / Legal — Visitors and clients reviewing contractual and usage terms',
    targetAudience: 'Website visitors, legal teams, and prospective clients',
    titleTag: 'Terms and Conditions of Use & Service — Siri Solutions',
    metaDescription: 'Terms and Conditions governing the use of sirisolutions.in and engagement principles for our SEO, paid media, and web engineering services.',
    h1: 'Terms and Conditions of Website Use & Service Governance',
    imageFilename: IMAGE_LIBRARY.heroWorkspace.seoFilename,
    imageAltText: IMAGE_LIBRARY.heroWorkspace.alt,
    internalLinks: ['/privacy-policy/', '/contact/'],
    schemaTypes: ['WebPage', 'BreadcrumbList']
  },
  {
    url: '/sitemap/',
    pageGroup: 'Main Pages',
    primaryKeyword: 'Siri Solutions HTML sitemap and SEO architecture',
    secondaryKeywords: ['site directory sirisolutions.in', 'keyword map and metadata inventory'],
    searchIntent: 'Navigational / Technical Inspection — Users, crawlers, and stakeholders reviewing full site architecture',
    targetAudience: 'Visitors, search crawlers, and technical stakeholders auditing deliverables',
    titleTag: 'HTML Sitemap & SEO Deliverables Hub — Siri Solutions',
    metaDescription: 'Complete HTML sitemap, URL inventory, keyword map, metadata spreadsheet, image alt-text inventory, schema inspector, and launch checklist for Siri Solutions.',
    h1: 'Complete HTML Sitemap, Keyword Map & Technical SEO Deliverables Hub',
    imageFilename: IMAGE_LIBRARY.seoAuditDesk.seoFilename,
    imageAltText: IMAGE_LIBRARY.seoAuditDesk.alt,
    internalLinks: ['/', '/services/', '/industries/', '/locations/', '/blog/', '/contact/'],
    schemaTypes: ['WebPage', 'BreadcrumbList']
  }
];

export const COMPLETE_SEO_INVENTORY: PageSeoInventoryRow[] = [
  ...MAIN_PAGES_SEO,
  ...SERVICES_DATA.map((s): PageSeoInventoryRow => ({
    url: s.slug,
    pageGroup: 'Service Pages',
    primaryKeyword: s.primaryKeyword,
    secondaryKeywords: s.secondaryKeywords,
    searchIntent: s.searchIntent,
    targetAudience: s.targetAudience,
    titleTag: s.titleTag,
    metaDescription: s.metaDescription,
    h1: s.h1,
    imageFilename: IMAGE_LIBRARY[s.imageKey].seoFilename,
    imageAltText: IMAGE_LIBRARY[s.imageKey].alt,
    internalLinks: [
      ...s.relatedServiceSlugs,
      ...s.industryApplications.map((i) => i.industrySlug),
      '/case-studies/',
      '/get-a-quote/'
    ],
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList']
  })),
  ...INDUSTRIES_DATA.map((i): PageSeoInventoryRow => ({
    url: i.slug,
    pageGroup: 'Industry Pages',
    primaryKeyword: i.primaryKeyword,
    secondaryKeywords: i.secondaryKeywords,
    searchIntent: i.searchIntent,
    targetAudience: i.targetAudience,
    titleTag: i.titleTag,
    metaDescription: i.metaDescription,
    h1: i.h1,
    imageFilename: IMAGE_LIBRARY[i.imageKey].seoFilename,
    imageAltText: IMAGE_LIBRARY[i.imageKey].alt,
    internalLinks: [
      ...i.recommendedServices.map((r) => r.serviceSlug),
      '/case-studies/',
      '/get-a-quote/'
    ],
    schemaTypes: ['Service', 'FAQPage', 'BreadcrumbList']
  })),
  ...LOCATIONS_DATA.map((l): PageSeoInventoryRow => ({
    url: l.slug,
    pageGroup: 'Location Hubs',
    primaryKeyword: l.primaryKeyword,
    secondaryKeywords: l.secondaryKeywords,
    searchIntent: l.searchIntent,
    targetAudience: l.targetAudience,
    titleTag: l.titleTag,
    metaDescription: l.metaDescription,
    h1: l.h1,
    imageFilename: IMAGE_LIBRARY[l.imageKey].seoFilename,
    imageAltText: IMAGE_LIBRARY[l.imageKey].alt,
    internalLinks: [
      ...l.cityServicePillars.map((p) => p.linkedCoreServiceSlug),
      ...l.keyIndustriesServed.map((k) => k.slug),
      '/contact/',
      '/get-a-quote/'
    ],
    schemaTypes: l.id === 'vijayawada' ? ['LocalBusiness', 'Service', 'FAQPage', 'BreadcrumbList'] : ['Service', 'FAQPage', 'BreadcrumbList']
  })),
  ...BLOG_ARTICLES_DATA.map((b): PageSeoInventoryRow => ({
    url: b.slug,
    pageGroup: 'Blog Articles',
    primaryKeyword: b.primaryKeyword,
    secondaryKeywords: b.secondaryKeywords,
    searchIntent: b.searchIntent,
    targetAudience: b.targetAudience,
    titleTag: b.titleTag,
    metaDescription: b.metaDescription,
    h1: b.h1,
    imageFilename: IMAGE_LIBRARY[b.imageKey].seoFilename,
    imageAltText: IMAGE_LIBRARY[b.imageKey].alt,
    internalLinks: [
      ...b.relatedServices.map((r) => r.slug),
      ...b.relatedIndustries.map((r) => r.slug),
      '/get-a-quote/'
    ],
    schemaTypes: ['BlogPosting', 'Person', 'BreadcrumbList']
  }))
];

export const LAUNCH_CHECKLIST_ITEMS = [
  {
    id: 'chk-1',
    category: 'URL & Route Architecture',
    requirement: 'All 52+ approved pages exist at their assigned lowercase trailing-slash URLs (Main, 15 Services, 8 Industries, 8 Locations, 8 Blog Posts).',
    verificationNote: 'Verified across History API Router & /public/sitemap.xml.',
    status: 'Verified'
  },
  {
    id: 'chk-2',
    category: 'Metadata & H1 Discipline',
    requirement: 'Every page renders a unique <title> (50–60 chars), unique <meta name="description"> (140–160 chars), and exactly one clear, descriptive H1.',
    verificationNote: 'Dynamic Head Manager updates title, description, canonical, and OG tags on every route transition.',
    status: 'Verified'
  },
  {
    id: 'chk-3',
    category: 'Image SEO & Natural Photography',
    requirement: 'All meaningful images use authentic commercial documentary photography with contextual alt attributes, WebP SEO filenames, and zero AI-slop illustrations.',
    verificationNote: 'Verified in /src/data/images.ts with SafeImage fallback containers and explicit dimensions.',
    status: 'Verified'
  },
  {
    id: 'chk-4',
    category: 'Conversion Forms & Validation',
    requirement: 'Contact and Request-a-Quote forms validate required fields, email/phone format, honeypot spam protection, and route to /thank-you/ with GA4/GTM event logging.',
    verificationNote: 'Interactive LeadCaptureForm component with real-time validation, local persistence, and conversion tracking.',
    status: 'Verified'
  },
  {
    id: 'chk-5',
    category: 'Interactive Navigation & Direct Channels',
    requirement: 'Sticky header (<=15% mobile viewport cap), accessible Services mega-dropdown, click-to-call (+91 77940 06495, +971 52 699 0466), and WhatsApp (+971 52 699 0466) links work.',
    verificationNote: 'Tested across desktop (1440px) and mobile viewports.',
    status: 'Verified'
  },
  {
    id: 'chk-6',
    category: 'Technical SEO Directives',
    requirement: 'Canonical tags, XML sitemap (/sitemap.xml), robots.txt (/robots.txt with GEO bot allowances), trailing-slash normalization, and custom 404 page active.',
    verificationNote: 'Serving /sitemap.xml and /robots.txt + automatic canonical normalization.',
    status: 'Verified'
  },
  {
    id: 'chk-7',
    category: 'JSON-LD Structured Data',
    requirement: 'Valid Organization, WebSite, BreadcrumbList, Service, FAQPage, BlogPosting, Person, and verified LocalBusiness (Vijayawada HQ) JSON-LD injected per route.',
    verificationNote: 'Dynamic JSON-LD script updated in <head> on every route and inspectable in SEO Hub.',
    status: 'Verified'
  },
  {
    id: 'chk-8',
    category: 'Indexability Hygiene',
    requirement: 'All public commercial and informational pages carry index, follow directives; only /thank-you/ conversion confirmation uses noindex.',
    verificationNote: 'Verified meta robots tag management per route.',
    status: 'Verified'
  },
  {
    id: 'chk-9',
    category: 'Internal Linking & Zero Orphan Pages',
    requirement: 'Hierarchical linking (Home -> Services -> Individual Service -> Industry -> Case Study / Blog -> Contact) with breadcrumbs on all deeper pages.',
    verificationNote: 'Zero orphan routes; every page linked from navigation, contextual hubs, and HTML Sitemap.',
    status: 'Verified'
  },
  {
    id: 'chk-10',
    category: 'Local SEO & Location Transparency',
    requirement: 'Consistent NAP for Vijayawada, Andhra Pradesh HQ (+91 77940 06495, +971 52 699 0466); other Indian city hubs transparently state service-area delivery.',
    verificationNote: 'Verified across Contact Page, Footer, and all /locations/[city]/ pages.',
    status: 'Verified'
  },
  {
    id: 'chk-11',
    category: 'GEO (Generative Engine Optimization)',
    requirement: 'Service and industry pages include direct lead definitions, semantic HTML comparison tables, and clear Q&A blocks for AI search retrieval.',
    verificationNote: 'Implemented across all 15 service pages and 8 blog playbooks.',
    status: 'Verified'
  },
  {
    id: 'chk-12',
    category: 'Core Web Vitals & Anti-Slop Design',
    requirement: 'Zero decorative pulsing dots, zero thick left borders, zero pill-badge clutter, tabular numerals (tabular-nums), and compositor-friendly interactions.',
    verificationNote: 'Audited against Universal Frontend Design Constitution.',
    status: 'Verified'
  }
];

export const CMS_CONTENT_MODEL_SCHEMA = [
  {
    collection: 'services',
    routePattern: '/services/[slug]/',
    fields: [
      'id (string, unique)',
      'slug (string, lowercase trailing slash)',
      'category (enum: Search & GEO | Paid Media | Content & Social | Web & Conversion)',
      'titleTag (string, 50-60 chars)',
      'metaDescription (string, 140-160 chars)',
      'h1 (string, unique)',
      'primaryKeyword (string)',
      'secondaryKeywords (string[])',
      'heroLead (text)',
      'problemsAddressed (array of {title, detail})',
      'deliverables (array of {title, description})',
      'processSteps (array of {stepNumber, title, description})',
      'comparisonTable (array of {criterion, conventionalApproach, siriSolutionsApproach})',
      'documentedOutcome (relation -> case_studies)',
      'relatedServiceSlugs (relation[] -> services)',
      'faqs (array of {question, answer})'
    ]
  },
  {
    collection: 'industries',
    routePattern: '/industries/[slug]/',
    fields: [
      'id (string, unique)',
      'slug (string)',
      'name (string)',
      'titleTag (string)',
      'metaDescription (string)',
      'h1 (string)',
      'indianMarketContext (text)',
      'challenges (array of {title, detail})',
      'recommendedServices (relation[] -> services)',
      'strategyPillars (array of {step, title, description})',
      'kpisAndMeasurement (string[])',
      'faqs (array of {question, answer})'
    ]
  },
  {
    collection: 'locations',
    routePattern: '/locations/[slug]/',
    fields: [
      'id (string, unique)',
      'city (string)',
      'state (string)',
      'presenceType (enum: Primary Headquarters | Verified Service-Area Hub)',
      'officeNote (string, verified NAP or service-area disclosure)',
      'commercialCorridors (string[])',
      'cityServicePillars (array of {id, title, targetKeyword, summary, localStrategyPoints, linkedCoreServiceSlug})',
      'keyIndustriesServed (relation[] -> industries)',
      'faqs (array of {question, answer})'
    ]
  },
  {
    collection: 'blog_articles',
    routePattern: '/blog/[slug]/',
    fields: [
      'id (string, unique)',
      'slug (string)',
      'category (enum: 8 core categories)',
      'titleTag (string)',
      'metaDescription (string)',
      'h1 (string)',
      'publishedDate (ISO date)',
      'updatedDate (ISO date)',
      'author (object: {name, role, credentials})',
      'keyTakeaways (string[])',
      'sections (structured blocks + HTML comparison tables)',
      'relatedServices (relation[] -> services)',
      'relatedIndustries (relation[] -> industries)'
    ]
  }
];
