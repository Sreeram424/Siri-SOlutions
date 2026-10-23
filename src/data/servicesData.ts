export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceIndustryApp {
  industryName: string;
  industrySlug: string;
  applicationSummary: string;
}

export interface ServiceComparisonRow {
  criterion: string;
  conventionalApproach: string;
  siriSolutionsApproach: string;
}

export interface ServicePageData {
  id: string;
  number: string;
  slug: string;
  category: 'Search & GEO' | 'Paid Media' | 'Content & Social' | 'Web & Conversion';
  shortName: string;
  h1: string;
  titleTag: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetAudience: string;
  imageKey: 'heroWorkspace' | 'seoAuditDesk' | 'webEngineeringCollab' | 'paidMediaSession' | 'enterpriseOffice';
  heroLead: string;
  audienceOverview: string;
  problemsAddressed: { title: string; detail: string }[];
  deliverables: ServiceDeliverable[];
  processSteps: ServiceProcessStep[];
  industryApplications: ServiceIndustryApp[];
  toolsAndReporting: {
    toolsUsed: string[];
    reportingCadence: string;
    primaryKpis: string[];
    methodologyNote: string;
  };
  comparisonTable: ServiceComparisonRow[];
  documentedOutcome: {
    clientContext: string;
    baselineProblem: string;
    intervention: string;
    measuredResult: string;
    timeframe: string;
    caseStudyId: string;
  };
  relatedServiceSlugs: string[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServicePageData[] = [
  {
    id: 'seo-services',
    number: '01',
    slug: '/services/seo-services/',
    category: 'Search & GEO',
    shortName: 'Search Engine Optimization',
    h1: 'Search Engine Optimization Services in India Built for Qualified Pipeline',
    titleTag: 'SEO Services in India | Organic Growth — Siri Solutions',
    metaDescription: 'Full-funnel SEO services in India combining technical architecture, intent-mapped content, and authority building to grow qualified organic enquiries.',
    primaryKeyword: 'SEO services India',
    secondaryKeywords: ['SEO agency India', 'organic search optimization India', 'B2B SEO company India', 'search engine optimization services'],
    searchIntent: 'Commercial / Transactional — Businesses seeking an ongoing SEO partner in India',
    targetAudience: 'Mid-market B2B firms, enterprise brands, funded SaaS companies, and multi-city service providers in India',
    imageKey: 'seoAuditDesk',
    heroLead: 'We engineer compounding organic search visibility by aligning your site architecture, technical health, and commercial content with how Indian and global buyers actually research solutions.',
    audienceOverview: 'Designed for growth-stage companies, established B2B enterprises, and regional market leaders across India whose customer acquisition costs on paid channels have risen and who need sustainable, high-intent organic enquiries.',
    problemsAddressed: [
      {
        title: 'High Impressions with Low Commercial Enquiries',
        detail: 'Many websites rank for broad informational queries that attract students or researchers while failing to appear for bottom-of-funnel commercial comparisons and service pages.'
      },
      {
        title: 'Keyword Cannibalization Across Pages',
        detail: 'Overlapping blog posts, city pages, and service URLs compete for the same search query, diluting page authority and causing erratic ranking fluctuations.'
      },
      {
        title: 'Stagnant Crawl Efficiency on Growing Sites',
        detail: 'Uncontrolled index bloat, orphaned service pages, and slow mobile rendering prevent search engines from discovering and prioritizing high-margin commercial pages.'
      },
      {
        title: 'Disconnect Between Traffic Metrics and CRM Revenue',
        detail: 'Standard agency reports celebrate raw session growth without attributing organic landings to verified form submissions, phone calls, or qualified sales pipeline.'
      }
    ],
    deliverables: [
      {
        title: 'Commercial Keyword & Search Intent Mapping',
        description: 'Page-by-page mapping of primary and semantic secondary keywords across informational, commercial evaluation, and transactional stages—preventing internal competition.'
      },
      {
        title: 'On-Page Architecture & Heading Restructuring',
        description: 'Optimization of title tags, meta descriptions, H1–H3 hierarchies, internal anchor links, and semantic entity coverage across priority commercial URLs.'
      },
      {
        title: 'Technical Crawl & Indexation Hygiene',
        description: 'Resolution of canonical conflicts, redirect chains, XML sitemap errors, robots.txt directives, and Core Web Vitals bottlenecks on mobile and desktop.'
      },
      {
        title: 'Bottom-of-Funnel Commercial Content Production',
        description: 'Subject-matter-reviewed service pages, industry vertical guides, and solution comparison assets tailored to Indian enterprise and consumer buying committees.'
      },
      {
        title: 'Schema.org Structured Data Implementation',
        description: 'Deployment and validation of Organization, Service, FAQPage, BreadcrumbList, and Article JSON-LD markup to clarify entity relationships for search crawlers.'
      },
      {
        title: 'GA4 & Search Console Lead Attribution Reporting',
        description: 'Custom Looker Studio and GA4 conversion tracking tying organic landing pages directly to qualified form fills, WhatsApp enquiries, and phone calls.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Baseline Technical & SERP Diagnostic',
        description: 'We audit crawl logs, index coverage, current keyword footprint, and top 5 organic competitors in your target Indian or international markets.'
      },
      {
        stepNumber: '02',
        title: 'URL Architecture & Keyword Matrix',
        description: 'Every existing and planned URL is assigned a single primary search intent, target audience persona, and internal linking cluster.'
      },
      {
        stepNumber: '03',
        title: 'Technical Remediation & On-Page Overhaul',
        description: 'Our engineers and SEO specialists fix rendering bottlenecks, deploy structured data, and rewrite core commercial service and category pages.'
      },
      {
        stepNumber: '04',
        title: 'Topic Cluster Expansion & Authority Building',
        description: 'We publish research-backed supporting guides and earn relevant editorial mentions that pass topical authority to your money pages.'
      },
      {
        stepNumber: '05',
        title: 'Conversion Attribution & Iterative Refinement',
        description: 'Monthly analysis of query-level CTR, scroll engagement, and lead qualification rates to refine underperforming pages and capture emerging queries.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B SaaS & Enterprise Software',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Capturing integration, alternative, and category evaluation queries from product and engineering decision-makers.'
      },
      {
        industryName: 'Healthcare & Multi-Specialty Hospitals',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Building clinician-reviewed condition and treatment pages with E-E-A-T signals and department-level appointment conversion paths.'
      },
      {
        industryName: 'Real Estate Developers',
        industrySlug: '/industries/real-estate/',
        applicationSummary: 'Ranking RERA-verified residential and commercial project pages for corridor-specific investment and buyer queries.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog SEO Spider', 'Ahrefs / Semrush SERP Suite', 'PageSpeed Insights & CrUX'],
      reportingCadence: 'Bi-weekly sprint updates + comprehensive monthly pipeline attribution review',
      primaryKpis: ['Non-branded commercial organic clicks', 'Qualified organic enquiries (Forms, Calls, WhatsApp)', 'Top-3 & Top-10 commercial keyword share of voice', 'Organic landing page conversion rate'],
      methodologyNote: 'We never promise overnight #1 rankings or rely on automated link schemes. Every optimization is documented in a shared implementation log.'
    },
    comparisonTable: [
      {
        criterion: 'Keyword Selection',
        conventionalApproach: 'High-volume generic terms with low buyer intent',
        siriSolutionsApproach: 'Commercial-intent queries mapped to specific service & industry URLs'
      },
      {
        criterion: 'Content Production',
        conventionalApproach: 'Thin, repetitive 500-word blog posts written for word count',
        siriSolutionsApproach: 'Deep, practitioner-reviewed guides and structured comparison tables'
      },
      {
        criterion: 'Primary Success Metric',
        conventionalApproach: 'Raw traffic volume and arbitrary domain score metrics',
        siriSolutionsApproach: 'Verified non-branded organic pipeline and cost-per-acquisition reduction'
      }
    ],
    documentedOutcome: {
      clientContext: 'Mid-Market Industrial Automation & IoT Provider (Hyderabad & Pune)',
      baselineProblem: '78% of organic traffic came from brand-name searches; commercial product pages were buried on page 3 due to duplicate parameter URLs.',
      intervention: 'Consolidated 140 duplicate URLs via canonical tags, rebuilt 12 core solution pages around engineer search intent, and added technical specification tables.',
      measuredResult: '+164% increase in non-branded organic RFQ submissions and 41% growth in qualified dealer enquiries',
      timeframe: '7 Months',
      caseStudyId: 'industrial-iot-organic-pipeline'
    },
    relatedServiceSlugs: ['/services/technical-seo/', '/services/content-marketing/', '/services/geo-optimization/'],
    faqs: [
      {
        question: 'How long does it take to see measurable leads from SEO in India?',
        answer: 'Technical fixes and on-page restructuring on existing domains typically show measurable impression and ranking movement within 6 to 10 weeks. Compounding growth in qualified non-branded enquiries generally stabilizes between months 4 and 6, depending on domain history and competitive density.'
      },
      {
        question: 'Do you guarantee #1 rankings on Google?',
        answer: 'No credible SEO agency can guarantee a specific ranking position because search algorithms evaluate hundreds of dynamic signals. Instead, we guarantee transparent deliverables, clean technical execution, and measurable tracking of non-branded commercial visibility and enquiry growth.'
      },
      {
        question: 'Will our internal development team need to implement the technical SEO changes?',
        answer: 'We adapt to your workflow. Our web engineering team can implement changes directly across React, Next.js, WordPress, Shopify, or custom stacks, or we can provide developer-ready tickets with QA verification for your in-house engineers.'
      },
      {
        question: 'How do you prevent different pages on our site from competing for the same keyword?',
        answer: 'Before writing or editing a single page, we maintain a master Keyword & URL Map. Each URL is assigned one primary search intent and distinct secondary variants, supported by strict canonical tags and hierarchical internal linking.'
      }
    ]
  },
  {
    id: 'local-seo',
    number: '02',
    slug: '/services/local-seo/',
    category: 'Search & GEO',
    shortName: 'Local SEO Services',
    h1: 'Local SEO Services in India for Single & Multi-Location Businesses',
    titleTag: 'Local SEO Services in India | GBP & Map Pack — Siri Solutions',
    metaDescription: 'Capture high-intent "near me" and city-specific searches across India with Google Business Profile optimization, NAP consistency, and local landing pages.',
    primaryKeyword: 'local SEO company India',
    secondaryKeywords: ['local SEO services India', 'Google Business Profile optimization India', 'multi-location SEO India', 'local map pack ranking'],
    searchIntent: 'Commercial — Clinics, retail chains, real estate developers, and regional businesses seeking local search visibility',
    targetAudience: 'Healthcare clinics, hospital chains, retail showrooms, hospitality brands, and city-focused B2B service firms across India',
    imageKey: 'seoAuditDesk',
    heroLead: 'When buyers in Hyderabad, Bengaluru, Mumbai, or Chennai search for a trusted local provider, your business needs accurate Google Business Profile visibility, consistent citations, and location-specific landing pages.',
    audienceOverview: 'Built for single-location practices and multi-branch enterprises across Indian metros and Tier-2 cities that rely on walk-ins, phone enquiries, appointment bookings, and regional service calls.',
    problemsAddressed: [
      {
        title: 'Inconsistent Name, Address, and Phone (NAP) Data',
        detail: 'Historical address changes, varied phone formats across Indian directories (Justdial, Sulekha, Practo, IndiaMART), and duplicate listings erode local pack trust.'
      },
      {
        title: 'Under-Optimized Google Business Profiles',
        detail: 'Missing secondary categories, unpopulated service menus, outdated premise photos, and unanswered customer Q&As suppress Map Pack visibility.'
      },
      {
        title: 'Thin or Doorway City Pages that Fail to Rank',
        detail: 'Swapping city names on identical page templates triggers search engine duplicate-content filters instead of earning genuine local relevance.'
      },
      {
        title: 'Untracked Phone & WhatsApp Conversions from Maps',
        detail: 'Businesses often cannot distinguish how many calls, direction requests, or website clicks originated from Google Maps versus organic web search.'
      }
    ],
    deliverables: [
      {
        title: 'Google Business Profile (GBP) Audit & Governance',
        description: 'Verification support, primary/secondary category alignment, service catalog buildout, UTM-tagged website links, and authentic premise photo curation.'
      },
      {
        title: 'Location Landing Page Architecture',
        description: 'Creation of genuinely useful city and branch pages containing verified address data, local service nuances, transit landmarks, and embedded maps.'
      },
      {
        title: 'Indian Citation & Directory Standardization',
        description: 'Cleanup and standardization of NAP records across authoritative Indian business directories and industry-specific portals.'
      },
      {
        title: 'LocalBusiness Schema Markup Deployment',
        description: 'Valid JSON-LD implementation for eligible physical branches (MedicalClinic, LegalService, Store, ProfessionalService) with accurate geo-coordinates and hours.'
      },
      {
        title: 'Ethical Review Acquisition & Response Workflow',
        description: 'QR and WhatsApp post-service feedback workflows to encourage genuine customer reviews—strictly compliant with Google guidelines and zero fake reviews.'
      },
      {
        title: 'Branch-Level Call & Direction Tracking',
        description: 'Monthly reporting on GBP call clicks, direction requests, local keyword grid rankings, and location-page form completions.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Entity & Branch Footprint Audit',
        description: 'We inventory every verified physical location, existing GBP listing, duplicate profile, and directory citation across India.'
      },
      {
        stepNumber: '02',
        title: 'GBP Hardening & Duplicate Suppression',
        description: 'We claim, merge, or remove duplicate listings and configure accurate categories, attributes, and UTM tracking parameters.'
      },
      {
        stepNumber: '03',
        title: 'Hyperlocal Page & Schema Implementation',
        description: 'We build unique branch or service-area pages on your domain linked directly to corresponding GBP profiles with valid LocalBusiness schema.'
      },
      {
        stepNumber: '04',
        title: 'Citation Alignment & Local Authority',
        description: 'We standardize NAP data across top Indian directories and earn local press or chamber-of-commerce mentions.'
      },
      {
        stepNumber: '05',
        title: 'Review Velocity & Local Pack Monitoring',
        description: 'Ongoing monitoring of geo-grid search visibility, Q&A management, and review response governance.'
      }
    ],
    industryApplications: [
      {
        industryName: 'Healthcare, Clinics & Diagnostics',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Managing branch-level and doctor-level Google Business Profiles across city neighborhoods for specialist consultations.'
      },
      {
        industryName: 'Multi-Branch Local Services',
        industrySlug: '/industries/local-businesses/',
        applicationSummary: 'Capturing high-urgency "near me" service calls and WhatsApp bookings with verified service-area coverage.'
      },
      {
        industryName: 'Hospitality & Boutique Hotels',
        industrySlug: '/industries/hospitality/',
        applicationSummary: 'Improving direct local discovery, authentic guest photo visibility, and commission-free direct phone inquiries.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Business Profile Manager', 'Google Search Console', 'GA4 UTM Attribution', 'Local Falcon Geo-Grid Tracker', 'Schema Markup Validator'],
      reportingCadence: 'Monthly branch-by-branch performance scorecard',
      primaryKpis: ['Google Business Profile call clicks & website visits', 'Local 3-Pack visibility across target pin codes', 'Location page conversion rate', 'Verified customer review velocity & response time'],
      methodologyNote: 'We never create fake virtual offices or stuff keywords into business names on Google Maps, protecting your listings from suspension.'
    },
    comparisonTable: [
      {
        criterion: 'GBP Naming & Address Policy',
        conventionalApproach: 'Keyword stuffing business titles and using unverified virtual co-working addresses',
        siriSolutionsApproach: 'Strict compliance with Google guidelines to prevent profile suspension'
      },
      {
        criterion: 'City & Branch Web Pages',
        conventionalApproach: 'Hundreds of cloned pages with only the city name replaced',
        siriSolutionsApproach: 'Curated, high-utility location hubs with authentic branch or service-area context'
      },
      {
        criterion: 'Customer Reviews',
        conventionalApproach: 'Purchased or fabricated generic 5-star ratings',
        siriSolutionsApproach: 'Automated post-visit SMS/WhatsApp prompts for real, permissioned customers'
      }
    ],
    documentedOutcome: {
      clientContext: 'Multi-Specialty Dental & Orthodontic Network (8 Clinics across Hyderabad & Vijayawada)',
      baselineProblem: 'Three clinics had duplicate unverified map pins, and all 8 listings linked to the generic homepage rather than dedicated branch pages.',
      intervention: 'Merged duplicate pins, built 8 distinct clinic pages with practitioner credentials and LocalBusiness schema, and added UTM call tracking.',
      measuredResult: '+118% increase in direct clinic phone calls from Google Maps and 84% growth in online appointment requests',
      timeframe: '5 Months',
      caseStudyId: 'multi-clinic-local-search-growth'
    },
    relatedServiceSlugs: ['/services/seo-services/', '/services/google-ads/', '/services/conversion-rate-optimization/'],
    faqs: [
      {
        question: 'Can we rank in the Google Map Pack in cities where we do not have a physical office?',
        answer: 'Google Map Pack results require a legitimate, staffed physical premise or a verified local service-area business. For cities where you serve clients remotely without a physical branch, we build organic service-area landing pages and run geo-targeted Google Search Ads rather than creating fake map pins.'
      },
      {
        question: 'Our Google Business Profile was suspended. Can you help reinstate it?',
        answer: 'Yes. We audit the profile against Google’s guidelines, remove policy violations (such as title keyword stuffing or address discrepancies), compile utility/registration documentation, and manage the formal reinstatement appeal.'
      },
      {
        question: 'How do you track leads coming specifically from Google Business Profile?',
        answer: 'We append structured UTM parameters to the website, appointment, and product links inside your Google Business Profile, allowing GA4 and your CRM to separate GBP organic conversions from standard web search traffic.'
      },
      {
        question: 'How many location pages should our business publish?',
        answer: 'Publish location pages only for cities or neighborhoods where you have either a physical branch or a verifiable customer base and distinct service offering. Seven to ten deeply researched regional hubs outperform a hundred thin city pages.'
      }
    ]
  },
  {
    id: 'technical-seo',
    number: '03',
    slug: '/services/technical-seo/',
    category: 'Search & GEO',
    shortName: 'Technical SEO Services',
    h1: 'Technical SEO Services for Complex Websites, SPAs & Enterprise Portals',
    titleTag: 'Technical SEO Services India | Crawl & CWV — Siri Solutions',
    metaDescription: 'Resolve crawl budget waste, JavaScript rendering issues, Core Web Vitals (LCP, INP, CLS), and site migrations with our technical SEO engineering team.',
    primaryKeyword: 'technical SEO services',
    secondaryKeywords: ['technical SEO audit India', 'Core Web Vitals optimization', 'JavaScript SEO agency', 'website migration SEO India'],
    searchIntent: 'Commercial / Technical — Engineering and marketing teams needing architectural SEO remediation',
    targetAudience: 'CTOs, engineering managers, heads of growth, and e-commerce directors managing large or JavaScript-heavy web platforms',
    imageKey: 'seoAuditDesk',
    heroLead: 'Search engines cannot rank what they cannot cleanly crawl, render, and index. Our technical SEO engineers work directly alongside your developers to fix architectural bottlenecks, Core Web Vitals, and indexation leaks.',
    audienceOverview: 'Built for engineering-led organizations, large e-commerce catalogs, React/Next.js applications, and businesses preparing for domain migrations or platform replatforming.',
    problemsAddressed: [
      {
        title: 'Client-Side JavaScript Rendering Delays',
        detail: 'Single-page applications that rely entirely on client-side fetches often expose empty DOM shells or delayed metadata to search and AI crawlers.'
      },
      {
        title: 'Failing Core Web Vitals on Indian Mobile Networks',
        detail: 'Uncompressed hero imagery, main-thread third-party script blocking, and layout shifts cause poor LCP (>2.5s) and INP (>200ms) on mid-range Android devices.'
      },
      {
        title: 'Crawl Budget Exhaustion from Facets & Parameters',
        detail: 'Sort filters, session parameters, and internal search URLs generate millions of low-value URLs that trap Googlebot away from core commercial pages.'
      },
      {
        title: 'Traffic Loss During Website Redesigns or Migrations',
        detail: 'Launching a new site design or changing URL structures without a 1:1 301 redirect map and canonical verification regularly destroys years of organic equity.'
      }
    ],
    deliverables: [
      {
        title: 'Crawl Architecture & Log File Analysis',
        description: 'Deep inspection of server crawl logs and full-site Screaming Frog crawls to identify orphan pages, redirect chains, soft 404s, and crawl traps.'
      },
      {
        title: 'Core Web Vitals Remediation (LCP, INP, CLS)',
        description: 'Code-level recommendations for image preloading, WebP/AVIF delivery, script deferral, font-display strategies, and interaction latency reduction.'
      },
      {
        title: 'JavaScript SSR / Prerendering Verification',
        description: 'Comparison of raw HTML responses versus rendered DOM across Googlebot and AI search bots to ensure all copy, links, and metadata are immediately crawlable.'
      },
      {
        title: 'Indexation Governance (Robots, Canonicals, Sitemaps)',
        description: 'Restructuring of dynamic XML sitemaps, robots.txt rules, x-robots headers, and self-referencing or consolidated canonical tags.'
      },
      {
        title: 'Zero-Loss Site Migration & Redirect Engineering',
        description: 'Pre-launch staging audits, legacy-to-new URL mapping, 301 redirect ruleset creation, and post-launch 404/crawl monitoring.'
      },
      {
        title: 'Entity Graph & JSON-LD Schema Validation',
        description: 'Implementation of nested, error-free JSON-LD schemas connecting Organization, WebSite, Service, Product, and BreadcrumbList entities.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Full-Stack Crawl & Rendering Simulation',
        description: 'We crawl your production and staging environments with both HTML-only and headless Chromium user-agents to expose rendering discrepancies.'
      },
      {
        stepNumber: '02',
        title: 'Prioritized Engineering Backlog',
        description: 'Every issue is scored by commercial impact vs. engineering effort and delivered as clear Jira/GitHub tickets with exact code snippets.'
      },
      {
        stepNumber: '03',
        title: 'Collaborative Sprint Implementation',
        description: 'We pair with your frontend and DevOps engineers to deploy fixes, validate staging builds, and test edge-caching configurations.'
      },
      {
        stepNumber: '04',
        title: 'Post-Release Verification & CrUX Monitoring',
        description: 'We monitor Google Search Console coverage reports, real-user Chrome UX Report (CrUX) field data, and server response codes over 28-day windows.'
      },
      {
        stepNumber: '05',
        title: 'Automated Regression Guardrails',
        description: 'Setup of pre-deployment SEO checks so future code releases do not accidentally overwrite canonical tags, robots directives, or H1 structures.'
      }
    ],
    industryApplications: [
      {
        industryName: 'E-commerce & Large Catalogs',
        industrySlug: '/industries/ecommerce/',
        applicationSummary: 'Controlling faceted navigation index bloat and optimizing product listing page (PLP) load speeds on mobile.'
      },
      {
        industryName: 'B2B SaaS & Web Platforms',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Ensuring React/Next.js documentation, integration directories, and marketing pages render clean server-side HTML.'
      },
      {
        industryName: 'Fintech & BFSI Portals',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Optimizing interactive EMI/tax calculators and high-security portals for fast INP and clean indexation.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Screaming Frog SEO Spider', 'Google Search Console Indexing API', 'Chrome UX Report (CrUX) & Lighthouse', 'Cloudflare / Server Log Analyzers', 'Schema.org & Rich Results Test'],
      reportingCadence: 'Sprint-aligned technical QA reports + 28-day CrUX field performance tracking',
      primaryKpis: ['Core Web Vitals Pass Rate (LCP <= 2.5s, INP <= 200ms, CLS <= 0.1)', 'Valid Indexed vs. Excluded URL Ratio', 'Crawl response time (TTFB)', 'Zero unintended 4xx/5xx errors on priority URLs'],
      methodologyNote: 'We write actual code diffs and regex redirect rules rather than handing your developers generic 100-page automated PDF exports.'
    },
    comparisonTable: [
      {
        criterion: 'Audit Deliverable Format',
        conventionalApproach: 'Automated 120-page PDF export from a third-party tool',
        siriSolutionsApproach: 'Prioritized engineering tickets with exact HTML/JS/server config diffs'
      },
      {
        criterion: 'Performance Testing',
        conventionalApproach: 'Single desktop lab test score in isolation',
        siriSolutionsApproach: 'Real-user mobile CrUX field data tested for Indian 4G/5G device profiles'
      },
      {
        criterion: 'Migration Support',
        conventionalApproach: 'Post-launch damage control after rankings drop',
        siriSolutionsApproach: 'Pre-launch staging crawl, 1:1 URL redirect matrix, and live cutover QA'
      }
    ],
    documentedOutcome: {
      clientContext: 'Fintech Lending & Mutual Fund Comparison Portal (Mumbai)',
      baselineProblem: 'A React SPA migration caused 65% of calculator and product pages to drop out of Google’s index due to client-side-only meta tags and 4.8s mobile LCP.',
      intervention: 'Implemented route-level pre-rendering, dynamic canonical headers, font subsetting, and main-thread script deferral.',
      measuredResult: '100% restoration of index coverage in 3 weeks, mobile LCP reduced from 4.8s to 1.9s, and +52% organic application starts',
      timeframe: '3 Months',
      caseStudyId: 'fintech-spa-technical-recovery'
    },
    relatedServiceSlugs: ['/services/seo-audit/', '/services/website-development/', '/services/geo-optimization/'],
    faqs: [
      {
        question: 'Can search engines and AI bots crawl React or Vite Single-Page Applications?',
        answer: 'While Googlebot can execute JavaScript, client-side rendering often delays indexing, wastes crawl budget, and fails completely for many social shared cards and AI crawlers (such as OAI-SearchBot or PerplexityBot). We implement SSR, static pre-rendering, or clean semantic HTML fallbacks so critical content is immediately readable.'
      },
      {
        question: 'What are the target Core Web Vitals thresholds we need to hit?',
        answer: 'Google evaluates three primary field metrics at the 75th percentile of mobile and desktop loads: Largest Contentful Paint (LCP) of 2.5 seconds or less, Interaction to Next Paint (INP) of 200 milliseconds or less, and Cumulative Layout Shift (CLS) of 0.1 or less.'
      },
      {
        question: 'We are redesigning our website and changing URL paths. When should you get involved?',
        answer: 'Ideally 4 to 6 weeks before the new site launches. Engaging during the wireframing and staging phase allows us to preserve existing high-ranking URLs, prepare a complete 301 redirect map, and verify staging templates before DNS cutover.'
      },
      {
        question: 'Do we need to fix every single warning shown in automated SEO audit tools?',
        answer: 'No. Many automated warnings have zero impact on search rankings or conversions. We separate cosmetic linter warnings from structural blockers that genuinely affect crawling, indexing, or user experience.'
      }
    ]
  },
  {
    id: 'ecommerce-seo',
    number: '04',
    slug: '/services/ecommerce-seo/',
    category: 'Search & GEO',
    shortName: 'E-commerce SEO Services',
    h1: 'E-commerce SEO Services in India for D2C Brands & Online Marketplaces',
    titleTag: 'Ecommerce SEO Services India | Category & Product Growth',
    metaDescription: 'Scale non-branded organic revenue for Shopify, WooCommerce, and custom D2C stores in India with collection architecture, product schema, and faceted SEO.',
    primaryKeyword: 'ecommerce SEO services',
    secondaryKeywords: ['Shopify SEO agency India', 'D2C SEO services India', 'online store organic growth', 'ecommerce category page optimization'],
    searchIntent: 'Commercial — D2C brands and online retailers seeking higher organic product & category sales',
    targetAudience: 'D2C founders, e-commerce managers, and omnichannel retail brands across India',
    imageKey: 'enterpriseOffice',
    heroLead: 'Reduce your dependence on rising paid ad CPMs by turning your category collections, filtered sub-collections, and product detail pages into compounding organic revenue channels.',
    audienceOverview: 'Tailored for Indian D2C brands, specialty online retailers, and B2B industrial catalog stores operating on Shopify, WooCommerce, Magento, or custom headless commerce stacks.',
    problemsAddressed: [
      {
        title: 'Under-Indexed Sub-Category Demand',
        detail: 'Stores often have a single broad collection page (e.g., "Running Shoes") while missing thousands of high-converting modifier queries (e.g., "men’s wide-fit marathon shoes under ₹5000").'
      },
      {
        title: 'Duplicate Product Descriptions & Out-of-Stock Churn',
        detail: 'Manufacturer-copied descriptions and 404 deletions of seasonal out-of-stock SKUs bleed organic authority and break incoming links.'
      },
      {
        title: 'Faceted Filter Index Bloat',
        detail: 'Color, size, and price filter combinations create thousands of near-identical URLs that dilute ranking signals from core collection pages.'
      },
      {
        title: 'Missing Merchant Listing & Product Structured Data',
        detail: 'Incomplete Product, Offer, and AggregateRating JSON-LD prevents eligibility for rich price, stock availability, and shipping snippets in Google Search.'
      }
    ],
    deliverables: [
      {
        title: 'Collection & Sub-Category Taxonomy Expansion',
        description: 'Identification and creation of indexable, search-demand-backed sub-collection pages targeting material, use-case, and buyer-persona modifiers.'
      },
      {
        title: 'Faceted Navigation & Canonical Governance',
        description: 'Ruleset determining which filter combinations should be indexed with clean static URLs versus blocked or canonicalized back to the parent category.'
      },
      {
        title: 'Product & Merchant Listing JSON-LD Schema',
        description: 'Structured markup for INR pricing, stock status, SKU identifiers, shipping details, and return policy metadata aligned with Google Merchant Center.'
      },
      {
        title: 'High-Intent Collection & PDP Copywriting',
        description: 'Concise, helpful buying guidance on category pages and unique specification/usage copy on top-revenue product pages.'
      },
      {
        title: 'Seasonal & Out-of-Stock SKU Lifecycle Policy',
        description: 'Structured workflows for temporarily out-of-stock vs. permanently discontinued products to preserve ranking equity.'
      },
      {
        title: 'Organic Revenue & Assisted Conversion Attribution',
        description: 'GA4 e-commerce tracking segmenting non-branded organic revenue by collection vs. PDP vs. buying guide landings.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Catalog & Search Demand Gap Audit',
        description: 'We map your entire SKU catalog and collection tree against how Indian shoppers search for product categories, modifiers, and problems.'
      },
      {
        stepNumber: '02',
        title: 'Faceted Crawl & Speed Remediation',
        description: 'We eliminate duplicate filter URLs, optimize heavy Shopify/WooCommerce theme scripts, and compress product gallery images.'
      },
      {
        stepNumber: '03',
        title: 'Collection Page & Internal Grid Optimization',
        description: 'We launch new high-intent sub-collections, optimize breadcrumb hierarchies, and implement automated cross-collection linking.'
      },
      {
        stepNumber: '04',
        title: 'Buying Guides & Comparison Content',
        description: 'We create authentic product comparison guides and care/usage resources that link directly into top-margin SKUs.'
      },
      {
        stepNumber: '05',
        title: 'Revenue per Organic Session Optimization',
        description: 'Ongoing testing of category sort orders, trust badges, and delivery estimation messaging to maximize organic add-to-cart rates.'
      }
    ],
    industryApplications: [
      {
        industryName: 'D2C Consumer Brands & Retail',
        industrySlug: '/industries/ecommerce/',
        applicationSummary: 'Building non-branded category visibility to balance Meta and Google Shopping customer acquisition costs.'
      },
      {
        industryName: 'Healthcare & Wellness Products',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Structuring ingredient-led and concern-led collection pages with compliant nutritional/clinical citations.'
      },
      {
        industryName: 'B2B Industrial & Component Catalogs',
        industrySlug: '/industries/local-businesses/',
        applicationSummary: 'Making part-number, specification, and bulk-order catalog pages discoverable for procurement officers.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Search Console Merchant Listings', 'Google Merchant Center', 'GA4 Enhanced E-commerce', 'Screaming Frog', 'Shopify / WooCommerce Performance Profiler'],
      reportingCadence: 'Monthly organic revenue, AOV, and category visibility report',
      primaryKpis: ['Non-branded organic revenue (INR)', 'Organic transactions & add-to-cart rate', 'Collection page Top-5 keyword rankings', 'Valid Product rich snippet coverage'],
      methodologyNote: 'We prioritize collection pages with proven purchase intent before spending time rewriting thousands of low-margin SKU variants.'
    },
    comparisonTable: [
      {
        criterion: 'Primary Optimization Target',
        conventionalApproach: 'Writing generic blog posts disconnected from store products',
        siriSolutionsApproach: 'Expanding high-intent collection & sub-category pages where shoppers buy'
      },
      {
        criterion: 'Filter & Parameter URLs',
        conventionalApproach: 'Leaving default CMS filter parameters open to index bloat',
        siriSolutionsApproach: 'Selective indexation of high-demand modifiers with strict canonical controls'
      },
      {
        criterion: 'Success Measurement',
        conventionalApproach: 'Sitewide organic sessions including non-buying informational traffic',
        siriSolutionsApproach: 'Non-branded organic revenue, add-to-cart rate, and blended MER improvement'
      }
    ],
    documentedOutcome: {
      clientContext: 'D2C Ergonomic Office Furniture Brand (Bengaluru — Pan-India Delivery)',
      baselineProblem: 'Store had only 6 top-level collections and 3,200 indexed filter parameter URLs; 85% of revenue depended on paid Meta and Shopping ads.',
      intervention: 'De-indexed parameter bloat, built 28 search-driven sub-collections (e.g., lumbar mesh chairs, standing desks by size), and deployed Product schema.',
      measuredResult: '+192% growth in non-branded organic revenue and 29% reduction in blended store CAC',
      timeframe: '6 Months',
      caseStudyId: 'd2c-furniture-ecommerce-seo'
    },
    relatedServiceSlugs: ['/services/technical-seo/', '/services/conversion-rate-optimization/', '/services/google-ads/'],
    faqs: [
      {
        question: 'Should we focus on optimizing collection pages or individual product pages first?',
        answer: 'For most e-commerce stores, category and sub-collection pages capture the highest volume of non-branded commercial searches. We prioritize your collection taxonomy first, alongside your top 20% revenue-generating flagship product pages.'
      },
      {
        question: 'How should we handle products that go out of stock temporarily or permanently?',
        answer: 'Never delete a product URL with a 404 if it has search visibility or backlinks. For temporarily out-of-stock items, keep the URL live with an email/WhatsApp restock alert and linked alternatives. For permanently discontinued items, 301 redirect the URL to the closest replacement SKU or parent collection.'
      },
      {
        question: 'Do you work with Shopify and WooCommerce stores?',
        answer: 'Yes. We regularly resolve Shopify’s default `/collections/.../products/...` duplicate URL structures, tag-page index bloat, and WooCommerce database/script slowdowns.'
      },
      {
        question: 'Can organic e-commerce SEO work alongside our Google Shopping campaigns?',
        answer: 'Absolutely. Clean product titles, GTIN/SKU identifiers, and structured Product schema improve both your organic Merchant Listing visibility and your Google Shopping feed quality scores.'
      }
    ]
  },
  {
    id: 'seo-audit',
    number: '05',
    slug: '/services/seo-audit/',
    category: 'Search & GEO',
    shortName: 'SEO Audit Services',
    h1: 'Comprehensive SEO Audit Services in India: Technical, Content & Commercial Gap Analysis',
    titleTag: 'SEO Audit Services India | Technical & SERP Diagnostic',
    metaDescription: 'Uncover exactly why your website is losing organic search share with a manual, engineer-led SEO audit covering crawl health, content gaps, and conversion leaks.',
    primaryKeyword: 'SEO audit services',
    secondaryKeywords: ['website SEO audit India', 'technical SEO audit company', 'organic traffic drop diagnosis', 'penalty recovery audit India'],
    searchIntent: 'Commercial / Diagnostic — Businesses seeking a one-time deep diagnostic or pre-engagement roadmap',
    targetAudience: 'CMOs, founders, product owners, and in-house marketing teams needing an independent, actionable 90-day SEO roadmap',
    imageKey: 'seoAuditDesk',
    heroLead: 'Before committing to a long-term retainer or a website rebuild, get a manual, practitioner-led diagnostic that pinpoints the exact technical, structural, and content bottlenecks holding back your organic pipeline.',
    audienceOverview: 'Ideal for companies experiencing sudden post-update traffic drops, businesses preparing for a major site redesign, or in-house marketing teams that need a clear, prioritized 90-day execution blueprint.',
    problemsAddressed: [
      {
        title: 'Unexplained Ranking & Traffic Declines',
        detail: 'After Google core updates or site deployments, teams often struggle to isolate whether the drop stems from technical indexing issues, intent shifts, or thin content.'
      },
      {
        title: 'Wasted Budget on Generic Monthly SEO Retainers',
        detail: 'Many businesses pay for months of routine blog writing and directory links while a single canonical tag error or robots rule blocks core service pages.'
      },
      {
        title: 'Unclear Prioritization for Engineering & Content Teams',
        detail: 'Automated SEO tools flag thousands of minor notices without telling your team which three fixes will actually move commercial enquiries.'
      },
      {
        title: 'Invisible Presence in AI Search & Answer Engines',
        detail: 'Legacy pages written without clear entity definitions, structured data, or direct question-answer hierarchy fail to surface in AI-assisted search.'
      }
    ],
    deliverables: [
      {
        title: '120-Point Manual Technical & Crawl Diagnostic',
        description: 'Verification of indexation coverage, canonical logic, redirect chains, mobile rendering, Core Web Vitals, and structured data validity.'
      },
      {
        title: 'Search Intent & Keyword Cannibalization Matrix',
        description: 'Full inventory of every live URL on your domain, identifying competing pages, orphan URLs, and uncaptured commercial search queries.'
      },
      {
        title: 'Content Quality & E-E-A-T Assessment',
        description: 'Page-by-page review of service pages and blog content to identify thin pages to prune, merge, or upgrade with first-hand practitioner expertise.'
      },
      {
        title: 'Competitor SERP & Authority Gap Analysis',
        description: 'Benchmarking your domain against 3 to 5 direct commercial competitors in India across topical coverage, internal linking, and editorial authority.'
      },
      {
        title: 'Conversion Path & UX Friction Review',
        description: 'Analysis of organic landing page bounce patterns, CTA visibility, form complexity, and mobile click-to-call/WhatsApp readiness.'
      },
      {
        title: 'Prioritized 90-Day Implementation Roadmap',
        description: 'Live walkthrough workshop plus a developer- and writer-ready spreadsheet ranked by impact, effort, and owner.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Access Setup & Stakeholder Discovery',
        description: 'We connect read-only access to Google Search Console and GA4 and interview your team on commercial priorities and historical site changes.'
      },
      {
        stepNumber: '02',
        title: 'Deep Crawl & Log Inspection',
        description: 'We run custom crawls, inspect JavaScript rendering diffs, and analyze indexation statuses across every directory of your site.'
      },
      {
        stepNumber: '03',
        title: 'Content & Competitor Gap Mapping',
        description: 'We map your current rankings against commercial buyer queries in your target Indian regions and industry verticals.'
      },
      {
        stepNumber: '04',
        title: 'Roadmap Compilation & Ticket Creation',
        description: 'We translate findings into concrete engineering tickets, URL consolidation rules, and page-level content briefs.'
      },
      {
        stepNumber: '05',
        title: 'Executive Walkthrough & Q&A Workshop',
        description: 'A 90-minute live session with your marketing and engineering leads to review every finding and align on immediate execution.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B SaaS & Technology',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Auditing documentation subdomains, marketing sites, and international hreflang configurations.'
      },
      {
        industryName: 'Fintech & Financial Services',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Evaluating YMYL (Your Money Your Life) E-E-A-T compliance, author attribution, and calculator indexability.'
      },
      {
        industryName: 'Education & EdTech Platforms',
        industrySlug: '/industries/education/',
        applicationSummary: 'Resolving course catalog duplication and seasonal admission-page indexing bottlenecks.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Search Console', 'GA4', 'Screaming Frog SEO Spider', 'PageSpeed Insights / CrUX', 'Ahrefs / Semrush'],
      reportingCadence: 'Delivered within 10–14 business days with a live 90-minute walkthrough',
      primaryKpis: ['Identification of 100% of critical indexing & rendering blockers', 'Complete URL action map (Keep, Update, Merge, 301, Noindex)', '90-day prioritized execution backlog'],
      methodologyNote: 'If you choose to engage Siri Solutions for ongoing implementation within 30 days of your audit, 100% of the audit fee is credited toward your first quarter.'
    },
    comparisonTable: [
      {
        criterion: 'Who Performs the Audit',
        conventionalApproach: 'Junior account manager running a 5-minute automated site grader',
        siriSolutionsApproach: 'Senior technical SEO engineer and content strategist reviewing your actual codebase and SERPs'
      },
      {
        criterion: 'Actionability',
        conventionalApproach: 'Generic advice like "improve page speed" or "add more keywords"',
        siriSolutionsApproach: 'Exact URL-by-URL action sheet with specific canonical, redirect, and copy specifications'
      },
      {
        criterion: 'Commercial Alignment',
        conventionalApproach: 'Treats every page equally, including outdated archive posts',
        siriSolutionsApproach: 'Prioritizes fixes on revenue-generating service, category, and high-intent pages'
      }
    ],
    documentedOutcome: {
      clientContext: 'EdTech Upskilling Platform (Delhi NCR)',
      baselineProblem: 'Organic traffic fell 44% over two quarters despite publishing 60 blog posts per month; course enrollment pages were stagnating.',
      intervention: 'Audit revealed 1,800 thin AI-generated blog posts diluting crawl equity and 19 duplicate course URL variants per program. Pruned/consolidated 1,400 URLs and fixed course canonicals.',
      measuredResult: '+88% recovery in organic course page impressions within 60 days and +47% increase in counselor call bookings',
      timeframe: '8 Weeks Post-Audit Execution',
      caseStudyId: 'edtech-audit-content-pruning'
    },
    relatedServiceSlugs: ['/services/technical-seo/', '/services/seo-services/', '/services/geo-optimization/'],
    faqs: [
      {
        question: 'How long does a comprehensive SEO audit take to complete?',
        answer: 'A standard manual SEO audit takes 10 to 14 business days depending on the size and architectural complexity of your website.'
      },
      {
        question: 'What access do you need from our team to conduct the audit?',
        answer: 'We require read-only access to Google Search Console and Google Analytics 4. No CMS admin or server root credentials are required during the diagnostic phase.'
      },
      {
        question: 'Can our internal team implement the audit recommendations on our own?',
        answer: 'Yes. Every audit deliverable is structured so an internal developer and content team can execute it independently. We also remain available if you prefer our team to handle implementation.'
      },
      {
        question: 'Does the SEO audit include Generative Engine Optimization (GEO) readiness?',
        answer: 'Yes. Every audit evaluates crawler access for AI search bots, entity clarity, JSON-LD schema accuracy, and question-answer structural formatting.'
      }
    ]
  },
  {
    id: 'geo-optimization',
    number: '06',
    slug: '/services/geo-optimization/',
    category: 'Search & GEO',
    shortName: 'Generative Engine Optimization',
    h1: 'Generative Engine Optimization (GEO) Services for AI-Powered Search Discovery',
    titleTag: 'GEO Services India | Generative Engine Optimization',
    metaDescription: 'Structure your website content, entity schema, and verifiable facts for accurate discovery across Google AI Overviews and AI-assisted search engines.',
    primaryKeyword: 'generative engine optimization services',
    secondaryKeywords: ['GEO optimization agency India', 'AI search optimization India', 'entity SEO and structured data', 'Google AI Overviews optimization'],
    searchIntent: 'Commercial / Emerging Category — Forward-looking B2B & consumer brands optimizing for AI-assisted search',
    targetAudience: 'B2B SaaS leaders, enterprise marketers, healthcare providers, and financial platforms where buyers use conversational search queries',
    imageKey: 'seoAuditDesk',
    heroLead: 'Decision-makers increasingly research vendors using multi-part conversational queries and AI-powered search summaries. We structure your site’s entity architecture, factual clarity, and crawlable HTML so search systems accurately understand and reference your business.',
    audienceOverview: 'Built for B2B software companies, professional service agencies, healthcare institutions, and specialized Indian enterprises whose buyers compare solutions through complex, research-heavy search journeys.',
    problemsAddressed: [
      {
        title: 'Ambiguous Entity Identity Across the Web',
        detail: 'When your company description, service taxonomy, pricing model, and geographic coverage vary across pages and directories, AI retrieval systems struggle to synthesize accurate facts about your brand.'
      },
      {
        title: 'Buried Answers Inside Fluffy Marketing Copy',
        detail: 'Pages filled with vague adjectives rather than direct definitions, specification tables, and clear question-answer blocks are skipped by retrieval-augmented search engines.'
      },
      {
        title: 'Blocked or JavaScript-Obscured AI Crawlers',
        detail: 'Overly restrictive WAF rules, outdated robots.txt files, or client-only JS rendering prevent legitimate search crawlers from reading your core documentation and service pages.'
      },
      {
        title: 'Lack of Original Data & Verifiable Citations',
        detail: 'Generic rewrites of existing articles offer zero information gain; retrieval systems prioritize pages with concrete metrics, comparison matrices, and attributable expertise.'
      }
    ],
    deliverables: [
      {
        title: 'AI Crawler Access & Robots.txt Governance',
        description: 'Verification that legitimate search crawlers (Googlebot, OAI-SearchBot, PerplexityBot, Bingbot) receive fast, server-rendered HTML without WAF blocks.'
      },
      {
        title: 'Entity Graph & Nested JSON-LD Architecture',
        description: 'Deployment of interconnected Organization, Service, Product, Person, and FAQPage structured data with stable `@id` identifiers.'
      },
      {
        title: 'Answer-First Content & Table Restructuring',
        description: 'Reformatting core commercial and educational pages with concise lead definitions, HTML comparison tables, and explicit scope boundaries.'
      },
      {
        title: 'Conversational Query & Follow-Up Question Mapping',
        description: 'Expanding service and industry pages to address multi-constraint queries (e.g., regulatory compliance, integration stack, Indian regional support, implementation timelines).'
      },
      {
        title: 'Author & Subject-Matter Expert Attribution',
        description: 'Adding verifiable author profiles, review dates, and primary regulatory or technical citations to reinforce E-E-A-T.'
      },
      {
        title: 'Zero-Click & Referral Visibility Tracking',
        description: 'Configuring GA4 custom channel groupings to measure referral traffic and assisted conversions from AI search platforms alongside organic search.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Entity & Retrieval Audit',
        description: 'We test how major search engines and conversational retrieval systems currently interpret your brand, services, and competitive positioning.'
      },
      {
        stepNumber: '02',
        title: 'Crawler Accessibility & HTML Verification',
        description: 'We audit robots.txt, server headers, and raw HTML output to ensure all factual specifications and tables reside in clean, crawlable markup.'
      },
      {
        stepNumber: '03',
        title: 'Structured Content & Comparison Table Upgrade',
        description: 'We refactor priority service and solution pages to include clear definitions, structured comparison tables, and direct Q&A modules.'
      },
      {
        stepNumber: '04',
        title: 'Schema Graph & External Consistency Alignment',
        description: 'We deploy nested JSON-LD entity graphs and align your brand’s factual boilerplate across authoritative external profiles.'
      },
      {
        stepNumber: '05',
        title: 'Ongoing Query & Attribution Monitoring',
        description: 'We track long-tail conversational queries in Search Console and monitor referral conversions in GA4.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B SaaS & Enterprise Tech',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Structuring product capability matrices, security compliance specs, and competitor comparison pages for technical evaluators.'
      },
      {
        industryName: 'Fintech & Regulated BFSI',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Publishing clear, RBI/SEBI-aligned product eligibility tables and transparent fee structures.'
      },
      {
        industryName: 'Healthcare & Specialty Hospitals',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Structuring procedure overviews, recovery timelines, and specialist credentials with clear medical schema.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Search Console (Long-tail & regex query filters)', 'GA4 Custom AI Referral Channel Grouping', 'Schema.org Validator', 'Server Log Bot Inspector'],
      reportingCadence: 'Monthly entity coverage, technical crawlability, and conversational search report',
      primaryKpis: ['Long-tail conversational query impressions (8+ word queries)', 'Structured data & entity graph completeness', 'Qualified referral & organic conversions from comparison/guide pages'],
      methodologyNote: 'We never promise guaranteed citations or rankings in ChatGPT, Google AI Overviews, or Perplexity. GEO is grounded in verifiable entity clarity, structured HTML, and genuine information gain.'
    },
    comparisonTable: [
      {
        criterion: 'Content Formatting',
        conventionalApproach: 'Long, unstructured walls of text with buried takeaways',
        siriSolutionsApproach: 'Direct 40-word lead definitions followed by semantic HTML comparison tables'
      },
      {
        criterion: 'Entity Consistency',
        conventionalApproach: 'Isolated page metadata with conflicting service descriptions',
        siriSolutionsApproach: 'Unified `@id` JSON-LD entity graph connecting Organization, Services, and Authors'
      },
      {
        criterion: 'Expectations & Ethics',
        conventionalApproach: 'Hype promises of "hacked AI rankings" using spammy prompt injection',
        siriSolutionsApproach: 'Transparent, guideline-compliant technical clarity and authoritative content'
      }
    ],
    documentedOutcome: {
      clientContext: 'B2B Supply Chain & Warehouse Management SaaS (Bengaluru)',
      baselineProblem: 'Product pages used vague marketing slogans without clear ERP integration tables or Indian GST compliance documentation, missing technical buyer evaluations.',
      intervention: 'Restructured 18 solution pages with HTML integration matrices, direct FAQ definitions, and nested SoftwareApplication + Service schema.',
      measuredResult: '+112% growth in organic impressions for 7+ word technical evaluation queries and +38% increase in enterprise demo requests',
      timeframe: '5 Months',
      caseStudyId: 'b2b-saas-geo-entity-architecture'
    },
    relatedServiceSlugs: ['/services/seo-services/', '/services/technical-seo/', '/services/content-marketing/'],
    faqs: [
      {
        question: 'Does GEO replace traditional Search Engine Optimization (SEO)?',
        answer: 'No. Generative Engine Optimization builds directly on strong technical SEO fundamentals. AI-powered search systems rely heavily on traditional search indexes, clean HTML crawlability, and authoritative domains to retrieve information.'
      },
      {
        question: 'Can you guarantee our business will be cited in ChatGPT or Google AI Overviews?',
        answer: 'No. Generative systems synthesize responses dynamically and no agency can guarantee specific citations. Our work focuses on the factors you can control: crawl accessibility, unambiguous entity data, structured HTML tables, and authoritative, factual content.'
      },
      {
        question: 'Should we block AI crawlers in our robots.txt file?',
        answer: 'It depends on your business model. For most B2B and service businesses, allowing search-retrieval bots (such as OAI-SearchBot and PerplexityBot) helps prospective buyers discover your services, while you can still choose how to handle model-training crawlers.'
      },
      {
        question: 'How do we measure traffic or leads influenced by AI search?',
        answer: 'We configure custom channel groupings in GA4 to isolate referral clicks from AI platforms and use regex filters in Google Search Console to track growth in multi-word conversational queries and branded search lift.'
      }
    ]
  },
  {
    id: 'google-ads',
    number: '07',
    slug: '/services/google-ads/',
    category: 'Paid Media',
    shortName: 'Google Ads Management',
    h1: 'Google Ads Management Services in India Focused on Qualified Lead Cost & ROAS',
    titleTag: 'Google Ads Agency India | Search & Shopping — Siri Solutions',
    metaDescription: 'Data-disciplined Google Ads management in India. We structure high-intent Search, Shopping, and Performance Max campaigns tracked directly to CRM revenue.',
    primaryKeyword: 'Google Ads agency India',
    secondaryKeywords: ['Google Ads management services India', 'paid search agency India', 'Google Shopping ads management', 'B2B Google Ads specialist'],
    searchIntent: 'Commercial / Transactional — Businesses seeking professional Google Ads campaign management',
    targetAudience: 'B2B companies, healthcare providers, real estate developers, educational institutes, and D2C brands in India investing ₹1.5L+ monthly in ad spend',
    imageKey: 'paidMediaSession',
    heroLead: 'Stop paying for irrelevant broad-match clicks, competitor job seekers, and low-intent mobile app placements. We engineer tightly segmented Google Ads accounts optimized for verified sales pipeline and profitable return on ad spend.',
    audienceOverview: 'Designed for Indian businesses and global exporters that want immediate, measurable capture of high-intent search demand without wasting budget on automated network bloat.',
    problemsAddressed: [
      {
        title: 'Budget Bleed on Irrelevant Search Terms',
        detail: 'Unmonitored Broad Match and auto-applied recommendations often spend 30–50% of budget on students, free-tool seekers, and unrelated brand queries.'
      },
      {
        title: 'Optimizing for Raw Form Fills Instead of Qualified Leads',
        detail: 'When Google Ads optimizes only for top-of-funnel page views or unvalidated forms, smart bidding algorithms chase cheap, low-quality spam leads.'
      },
      {
        title: 'Sending Paid Clicks to Slow, Generic Homepages',
        detail: 'Paying ₹80–₹400 per click only to land users on an unfocused homepage with slow mobile load times destroys conversion efficiency.'
      },
      {
        title: 'Opaque Performance Max & Display Spend',
        detail: 'Default PMax campaigns frequently cannibalize branded search queries and dump budget into low-quality mobile gaming app placements.'
      }
    ],
    deliverables: [
      {
        title: 'Intent-Segmented Search Campaign Architecture',
        description: 'Separation of Exact/Phrase high-intent commercial queries, competitor comparisons, and branded protection into distinct budget-controlled campaigns.'
      },
      {
        title: 'Proactive Negative Keyword & Placement Exclusion Lists',
        description: 'Account-level exclusion lists filtering out "jobs", "free", "course", "salary", "pdf", and mobile app display placements from day one.'
      },
      {
        title: 'Offline Conversion Tracking (OCT) & Enhanced Conversions',
        description: 'Integration of GCLID tracking with your CRM (Zoho, HubSpot, LeadSquared, Salesforce) so Google bids toward SQLs and closed revenue.'
      },
      {
        title: 'Google Shopping & Feed Optimization (For E-commerce)',
        description: 'Merchant Center product title enrichment, custom labels by margin/seasonality, and tiered Shopping/PMax structures.'
      },
      {
        title: 'Ad Copy & Extension Testing Matrix',
        description: 'Structured testing of Responsive Search Ads (RSAs), sitelinks, callouts, structured snippets, and verified business lead forms.'
      },
      {
        title: 'Transparent Spend, CPL & Pipeline Dashboard',
        description: 'Live Looker Studio reporting showing exact ad spend, search term logs, cost per qualified lead, and ROAS—with 100% direct client ownership of the ad account.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Historical Account & Search Term Forensic Audit',
        description: 'We analyze your past 12 months of search term reports, conversion actions, auction insights, and wasted spend buckets.'
      },
      {
        stepNumber: '02',
        title: 'Conversion Tracking & CRM Loop Setup',
        description: 'We configure GTM, GA4, Enhanced Conversions, and GCLID capture so every form fill, WhatsApp click, and phone call is accurately attributed.'
      },
      {
        stepNumber: '03',
        title: 'Campaign Rebuild & Landing Page Alignment',
        description: 'We launch tightly themed ad groups paired with fast, message-matched landing pages for each service or product line.'
      },
      {
        stepNumber: '04',
        title: 'Weekly Search Term Pruning & Bid Calibration',
        description: 'Weekly manual review of actual triggered search queries, negative keyword additions, geo-bid adjustments, and schedule tuning.'
      },
      {
        stepNumber: '05',
        title: 'Lead Quality Feedback & Scaling',
        description: 'Monthly review of CRM lead disposition data to shift budget into the exact keyword themes and Indian cities producing closed revenue.'
      }
    ],
    industryApplications: [
      {
        industryName: 'Real Estate & Commercial Projects',
        industrySlug: '/industries/real-estate/',
        applicationSummary: 'Capturing corridor-specific luxury and mid-segment homebuyer queries with RERA-compliant microsites and CRM site-visit tracking.'
      },
      {
        industryName: 'B2B SaaS & Enterprise Services',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Bidding on high-intent software category and competitor alternative keywords with offline SQL conversion feedback.'
      },
      {
        industryName: 'Healthcare & Specialty Hospitals',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Running compliant surgical and diagnostic search campaigns with immediate click-to-call and appointment scheduling.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Ads Editor', 'Google Tag Manager', 'Google Merchant Center', 'GA4 & Looker Studio', 'CRM Offline Conversion Sync (Zoho / HubSpot / LeadSquared)'],
      reportingCadence: 'Weekly search-term & spend hygiene check + monthly executive pipeline review',
      primaryKpis: ['Cost Per Qualified Lead (CPQL)', 'Return on Ad Spend (ROAS) / Pipeline Generated', 'Non-Branded Search Impression Share', 'Landing Page Conversion Rate'],
      methodologyNote: 'You always retain 100% administrative ownership of your Google Ads account and billing. We never charge hidden markups on media spend.'
    },
    comparisonTable: [
      {
        criterion: 'Bidding Signal',
        conventionalApproach: 'Raw page views or unverified form submissions',
        siriSolutionsApproach: 'Validated leads and CRM-synced Offline Conversion Tracking (GCLID)'
      },
      {
        criterion: 'Account Ownership',
        conventionalApproach: 'Agency-owned sub-account with opaque media fee bundling',
        siriSolutionsApproach: '100% client-owned Google Ads account with transparent management fee'
      },
      {
        criterion: 'Auto-Recommendations',
        conventionalApproach: 'Blindly enabling Google’s auto-apply recommendations',
        siriSolutionsApproach: 'Disabled auto-apply; manual weekly search term and placement governance'
      }
    ],
    documentedOutcome: {
      clientContext: 'B2B Enterprise Cloud & ERP Implementation Partner (Hyderabad & Bengaluru)',
      baselineProblem: 'Spending ₹4.2L/month on broad-match keywords with a 4.1% conversion rate, but 70% of leads were students or job applicants.',
      intervention: 'Restructured into Exact/Phrase commercial ad groups, added 650+ negative keywords, disabled Display expansion, and synced Zoho CRM SQL stages via GCLID.',
      measuredResult: '-46% reduction in Cost Per Sales-Qualified Lead and +135% increase in qualified enterprise discovery calls',
      timeframe: '90 Days',
      caseStudyId: 'erp-partner-google-ads-restructure'
    },
    relatedServiceSlugs: ['/services/ppc-management/', '/services/landing-page-development/', '/services/conversion-rate-optimization/'],
    faqs: [
      {
        question: 'Who owns the Google Ads account and how does billing work?',
        answer: 'Your company retains 100% ownership and administrative control of the Google Ads account. You pay Google directly for ad spend using your corporate payment method, and Siri Solutions charges a transparent monthly management fee.'
      },
      {
        question: 'What is a realistic minimum monthly ad spend for Google Ads in India?',
        answer: 'While budgets vary by industry CPCs, we generally recommend a minimum media budget of ₹75,000 to ₹1,50,000 per month so campaigns gather enough statistically significant conversion data to optimize effectively.'
      },
      {
        question: 'How do you stop spam or low-quality leads from Google Ads?',
        answer: 'We combine three defenses: strict search-only placement controls (turning off Display/Search Partner bloat where appropriate), multi-step or work-email validation on landing pages, and Offline Conversion Tracking that trains Google’s bidding algorithm only on CRM-verified leads.'
      },
      {
        question: 'Should we run Google Ads if we are already investing in SEO?',
        answer: 'Yes. Google Ads provides immediate visibility for competitive bottom-of-funnel keywords and lets you test which value propositions and keywords convert into paying customers—data we then use to prioritize your long-term SEO roadmap.'
      }
    ]
  },
  {
    id: 'ppc-management',
    number: '08',
    slug: '/services/ppc-management/',
    category: 'Paid Media',
    shortName: 'PPC Management',
    h1: 'Multi-Channel PPC Management Services in India for Predictable Acquisition',
    titleTag: 'PPC Management Services India | Paid Media — Siri Solutions',
    metaDescription: 'Cross-channel PPC campaign management across Google, Microsoft Bing, LinkedIn, and YouTube. Full-funnel attribution and budget allocation for Indian brands.',
    primaryKeyword: 'PPC management services India',
    secondaryKeywords: ['PPC campaign management', 'pay per click agency India', 'B2B LinkedIn and search ads India', 'performance marketing agency India'],
    searchIntent: 'Commercial — Businesses needing cross-channel paid search and paid media portfolio management',
    targetAudience: 'Growth directors, CMOs, and multi-channel brands running paid search alongside LinkedIn, Bing, and remarketing',
    imageKey: 'paidMediaSession',
    heroLead: 'Manage your entire paid acquisition portfolio under one unified attribution framework. We allocate capital dynamically across Google Search, Microsoft Ads, LinkedIn B2B, and high-intent remarketing based on marginal pipeline return.',
    audienceOverview: 'Built for B2B enterprises, SaaS exporters, higher-education institutions, and multi-product brands that require coordinated bidding and creative sequencing across multiple paid networks.',
    problemsAddressed: [
      {
        title: 'Siloed Ad Channels Double-Counting Conversions',
        detail: 'When Google, Meta, and LinkedIn are managed in isolation, each platform claims credit for the same conversion, inflating reported ROAS while true revenue stagnates.'
      },
      {
        title: 'Diminishing Returns from Over-Scaling a Single Network',
        detail: 'Pushing extra budget into saturated search keywords drives up marginal CPA when untapped desktop decision-makers on Microsoft/Bing or LinkedIn remain ignored.'
      },
      {
        title: 'Generic Remarketing That Annoys Prospects',
        detail: 'Showing the exact same top-of-funnel banner ad 30 times to a prospect who already visited your pricing page wastes impression budget.'
      },
      {
        title: 'Lack of Pacing & Unit-Economics Discipline',
        detail: 'Campaigns often overspend early in the month or continue funding high-volume, low-margin product lines with poor LTV:CAC ratios.'
      }
    ],
    deliverables: [
      {
        title: 'Cross-Channel Media Mix & Budget Allocation Plan',
        description: 'Channel allocation modeling across Google Ads, Microsoft/Bing Ads (crucial for corporate Windows laptops), LinkedIn Ads, and Meta remarketing.'
      },
      {
        title: 'Unified UTM Taxonomy & Multi-Touch Attribution',
        description: 'Standardized UTM naming conventions and GA4/CRM tracking to compare first-touch discovery against last-touch conversion across platforms.'
      },
      {
        title: 'B2B Account-Based & Role-Targeted Campaigns',
        description: 'LinkedIn and Microsoft audience targeting layered by company size, industry vertical, and job seniority alongside high-intent search capture.'
      },
      {
        title: 'Sequential Remarketing Architecture',
        description: 'Stage-based retargeting serving case studies, security/compliance proof, or specific product offers based on the exact pages a user visited.'
      },
      {
        title: 'Landing Page Split-Testing & Message Matching',
        description: 'Coordinated headline, proof, and form testing across paid landing pages to lower cost per acquisition.'
      },
      {
        title: 'Executive Unit-Economics Reporting',
        description: 'Monthly breakdown of Spend, CPL, Cost per SQL, Customer Acquisition Cost (CAC), and Pipeline-to-Spend ratio by channel.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Unit Economics & Attribution Audit',
        description: 'We review your target CAC, sales cycle length, deal values, and current cross-channel conversion deduplication.'
      },
      {
        stepNumber: '02',
        title: 'Channel Architecture & Tracking Standardization',
        description: 'We implement a single source of truth in GA4 and your CRM with strict UTM governance across all paid platforms.'
      },
      {
        stepNumber: '03',
        title: 'Phased Campaign Deployment',
        description: 'We capture bottom-of-funnel search intent first before layering mid-funnel retargeting and top-of-funnel demand generation.'
      },
      {
        stepNumber: '04',
        title: 'Bi-Weekly Budget Rebalancing',
        description: 'We shift media spend away from high-CPA ad sets toward the channels, geographies, and devices generating verified pipeline.'
      },
      {
        stepNumber: '05',
        title: 'Quarterly Cohort & LTV Review',
        description: 'Evaluating how leads from each paid channel progress through your sales pipeline over 30-, 60-, and 90-day cohorts.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B SaaS & IT Services',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Combining Google/Bing bottom-of-funnel search capture with LinkedIn role-based retargeting for enterprise buying committees.'
      },
      {
        industryName: 'Education & Executive Programs',
        industrySlug: '/industries/education/',
        applicationSummary: 'Coordinating admission-cycle search ads, YouTube program explainers, and counselor callback remarketing.'
      },
      {
        industryName: 'Fintech & Wealth Management',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Acquiring high-net-worth and corporate finance leads across desktop search and financial publisher placements.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Ads', 'Microsoft Advertising (Bing)', 'LinkedIn Campaign Manager', 'Google Tag Manager & GA4', 'Looker Studio Cross-Channel Blender'],
      reportingCadence: 'Bi-weekly pacing & optimization reviews + monthly executive unit-economics deck',
      primaryKpis: ['Blended Cost Per Qualified Lead / CAC', 'Pipeline-to-Spend Ratio', 'Assisted vs. Direct Channel Conversions', 'Impression-to-Lead Conversion Velocity'],
      methodologyNote: 'We never force a channel into your media mix unless your unit economics and average deal value justify its CPC floor.'
    },
    comparisonTable: [
      {
        criterion: 'Attribution Model',
        conventionalApproach: 'Relying on each ad platform’s self-reported in-app numbers',
        siriSolutionsApproach: 'Deduplicated CRM & GA4 attribution tied to verified pipeline'
      },
      {
        criterion: 'Remarketing Strategy',
        conventionalApproach: 'Showing one generic brand banner to all past site visitors for 180 days',
        siriSolutionsApproach: 'Time-windowed, page-specific proof assets (case studies, pricing FAQs)'
      },
      {
        criterion: 'Budget Allocation',
        conventionalApproach: 'Fixed monthly channel splits regardless of marginal performance',
        siriSolutionsApproach: 'Dynamic bi-weekly reallocation toward lowest marginal cost-per-SQL'
      }
    ],
    documentedOutcome: {
      clientContext: 'Enterprise Cybersecurity & SOC Compliance Consultancy (Pune & US/India Delivery)',
      baselineProblem: 'High Google Ads CPCs on generic security terms led to ₹18,500 CPL with low C-suite reach.',
      intervention: 'Shifted 30% of budget to Microsoft Ads (capturing corporate enterprise laptops at 45% lower CPC) and added LinkedIn retargeting showing SOC2 audit case studies to visited domains.',
      measuredResult: '-39% drop in blended Cost Per Qualified Opportunity and ₹3.8 Cr in attributed pipeline',
      timeframe: '4 Months',
      caseStudyId: 'cybersecurity-multichannel-ppc'
    },
    relatedServiceSlugs: ['/services/google-ads/', '/services/meta-ads/', '/services/landing-page-development/'],
    faqs: [
      {
        question: 'What is the difference between your Google Ads service and PPC Management?',
        answer: 'Our Google Ads service focuses specifically on the Google ecosystem (Search, Shopping, YouTube, PMax). Our PPC Management service is designed for businesses running coordinated multi-network paid acquisition across Google, Microsoft/Bing Ads, LinkedIn Ads, and paid social remarketing under a unified budget and attribution model.'
      },
      {
        question: 'Is Microsoft (Bing) Ads actually useful for Indian and global B2B companies?',
        answer: 'Yes. Many enterprise employees use corporate-issued Windows laptops where Microsoft Edge and Bing are locked as defaults. We regularly see 35% to 50% lower CPCs on Microsoft Ads for high-intent B2B software and industrial queries.'
      },
      {
        question: 'How do you prevent remarketing ads from fatiguing our audience?',
        answer: 'We set strict frequency caps (typically 3 to 4 impressions per user per week) and segment audiences by recency (e.g., 1–7 days, 8–21 days, 22–45 days) while automatically excluding converted leads.'
      },
      {
        question: 'Do you design the ad creatives and landing pages needed for PPC?',
        answer: 'Yes. Our in-house design and web engineering teams produce static/carousel ad creatives and fast, conversion-focused landing pages so you do not have to coordinate multiple vendors.'
      }
    ]
  },
  {
    id: 'meta-ads',
    number: '09',
    slug: '/services/meta-ads/',
    category: 'Paid Media',
    shortName: 'Meta Ads Management',
    h1: 'Meta Ads Management (Facebook & Instagram) for D2C Revenue & Qualified Lead Generation',
    titleTag: 'Meta Ads Agency India | Facebook & Instagram — Siri Solutions',
    metaDescription: 'Performance-driven Facebook and Instagram Ads management in India. Creative testing, Conversions API (CAPI) setup, and WhatsApp/landing page funnels.',
    primaryKeyword: 'Facebook and Instagram ads management',
    secondaryKeywords: ['Meta ads agency India', 'Instagram performance marketing India', 'D2C Meta ads ROAS', 'WhatsApp lead generation ads India'],
    searchIntent: 'Commercial — D2C brands and consumer/B2B service companies seeking paid social acquisition',
    targetAudience: 'D2C e-commerce brands, real estate developers, healthcare clinics, education providers, and consumer apps across India',
    imageKey: 'paidMediaSession',
    heroLead: 'On Meta, creative relevance and server-side conversion signal quality drive 80% of performance. We combine systematic creative testing with Conversions API (CAPI) engineering to scale profitable customer acquisition across Facebook and Instagram.',
    audienceOverview: 'Built for Indian D2C brands looking to scale catalog sales and for high-consideration businesses (real estate, healthcare, education, B2B) that need qualified leads rather than accidental instant-form submissions.',
    problemsAddressed: [
      {
        title: 'Low-Intent Native Lead Forms That Never Answer Calls',
        detail: 'Default Facebook Instant Forms auto-fill outdated user details, generating cheap leads who forget submitting the form 10 minutes later.'
      },
      {
        title: 'Signal Loss from Browser Tracking Restrictions',
        detail: 'Relying solely on the browser Meta Pixel misses 20–35% of iOS and privacy-browser conversions, starving Meta’s delivery algorithm of purchase data.'
      },
      {
        title: 'Creative Fatigue & Rising CPMs',
        detail: 'Running the same two static graphics for months causes click-through rates to collapse and cost per acquisition to spike.'
      },
      {
        title: 'High Cash-on-Delivery (COD) RTO Rates for Indian D2C',
        detail: 'Optimizing campaigns for all checkouts without filtering impulse COD buyers in high-RTO pin codes erodes net contribution margin.'
      }
    ],
    deliverables: [
      {
        title: 'Meta Pixel + Server-Side Conversions API (CAPI) Setup',
        description: 'Implementation of deduplicated browser and server-side event tracking with high Event Match Quality (EMQ) scores.'
      },
      {
        title: 'Structured Creative Testing Framework',
        description: 'Bi-weekly testing of hooks, formats (founder videos, product demonstrations, comparison carousels, customer proof), and value propositions.'
      },
      {
        title: 'High-Intent Lead Qualification Funnels',
        description: 'Conditional logic Instant Forms, OTP/WhatsApp verification flows, and fast custom landing pages that filter out accidental clicks.'
      },
      {
        title: 'D2C Catalog & Advantage+ Shopping Architecture',
        description: 'Dynamic Product Ads (DPA), collection carousels, and prepaid-incentivized checkout campaigns tailored for Indian D2C unit economics.'
      },
      {
        title: 'CRM & WhatsApp Business API Integration',
        description: 'Instant webhook routing of Meta leads into your CRM and automated WhatsApp follow-up within 30 seconds of submission.'
      },
      {
        title: 'Creative-Level ROAS & Thumbstop Reporting',
        description: 'Granular analysis of 3-second video hold rate (Thumbstop), hook hold rate, link CTR, and net cost per qualified outcome.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Signal & Creative Audit',
        description: 'We audit your Meta Events Manager, Event Match Quality (EMQ) scores, historical creative winners, and audience overlap.'
      },
      {
        stepNumber: '02',
        title: 'CAPI & Funnel Engineering',
        description: 'We deploy server-side CAPI events and build either high-friction qualified lead forms or conversion-optimized landing pages.'
      },
      {
        stepNumber: '03',
        title: 'Creative Sprint & Sandbox Testing',
        description: 'We launch dedicated creative testing campaigns isolating distinct buyer pain points, visual angles, and formats.'
      },
      {
        stepNumber: '04',
        title: 'Scaling Proven Winners',
        description: 'Winning creatives are graduated into consolidated scaling campaigns with strict CPA/ROAS cost controls.'
      },
      {
        stepNumber: '05',
        title: 'Creative Refresh & Cohort Feedback',
        description: 'Continuous monitoring of frequency and thumbstop decay alongside CRM lead-to-sale conversion rates.'
      }
    ],
    industryApplications: [
      {
        industryName: 'E-commerce & D2C Brands',
        industrySlug: '/industries/ecommerce/',
        applicationSummary: 'Scaling prepaid order volume and repeat customer retention with dynamic product catalogs and video creative testing.'
      },
      {
        industryName: 'Real Estate Developments',
        industrySlug: '/industries/real-estate/',
        applicationSummary: 'Generating qualified site-visit bookings for residential townships and commercial properties using conditional qualification forms.'
      },
      {
        industryName: 'Education & Skill Academies',
        industrySlug: '/industries/education/',
        applicationSummary: 'Driving webinar registrations, brochure downloads, and counselor calls with instant WhatsApp nurturing.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Meta Ads Manager & Events Manager', 'Server-Side Google Tag Manager (CAPI)', 'GA4 UTM Attribution', 'CRM Webhook Integrators'],
      reportingCadence: 'Weekly creative performance breakdown + monthly net ROAS / CPQL review',
      primaryKpis: ['Net Return on Ad Spend (ROAS) / Cost Per Qualified Lead', 'Thumbstop Ratio (3s Video Views / Impressions)', 'Outbound Link CTR', 'Event Match Quality (EMQ) Score'],
      methodologyNote: 'We never measure success by cheap "likes", "post engagement", or unverified auto-fill leads. Every campaign is tied to downstream conversion events.'
    },
    comparisonTable: [
      {
        criterion: 'Lead Capture Mechanism',
        conventionalApproach: 'Default 2-field auto-fill Instant Forms with high junk rates',
        siriSolutionsApproach: 'High-intent conditional forms with manual typing or dedicated landing pages'
      },
      {
        criterion: 'Conversion Tracking',
        conventionalApproach: 'Basic browser Pixel only (losing 25%+ of mobile data)',
        siriSolutionsApproach: 'Deduplicated Browser Pixel + Server-Side Conversions API (CAPI)'
      },
      {
        criterion: 'Campaign Structure',
        conventionalApproach: 'Dozens of micro-interest ad sets fragmenting the learning phase',
        siriSolutionsApproach: 'Consolidated account structure powered by systematic creative diversity'
      }
    ],
    documentedOutcome: {
      clientContext: 'Premium Residential Gated Community Developer (Kokapet, Hyderabad)',
      baselineProblem: 'Previous agency generated 900 Facebook Instant Form leads/month at ₹280 CPL, but sales team reported only 1.8% booked site visits.',
      intervention: 'Replaced basic Instant Forms with a 3-question budget/timeline qualifier + fast microsite landing page, and synced CRM "Site Visit Scheduled" events via CAPI.',
      measuredResult: 'Site-visit conversion rate jumped from 1.8% to 11.4%, reducing Cost Per Actual Site Visit by 54%',
      timeframe: '60 Days',
      caseStudyId: 'real-estate-meta-capi-funnel'
    },
    relatedServiceSlugs: ['/services/landing-page-development/', '/services/ppc-management/', '/services/social-media-marketing/'],
    faqs: [
      {
        question: 'Why did we get so many fake or unresponsive leads from Facebook Ads in the past?',
        answer: 'Default Meta Instant Forms auto-populate a user’s old profile phone number and email with a single tap, meaning users often submit without reading. We fix this by enabling "Higher Intent" review steps, adding custom qualifying questions that require manual selection, or routing users to a fast landing page.'
      },
      {
        question: 'What is Meta Conversions API (CAPI) and why does our business need it?',
        answer: 'Conversions API sends conversion events (purchases or qualified CRM leads) directly from your server to Meta rather than relying only on browser cookies. This restores lost attribution data and helps Meta’s algorithm find higher-converting buyers.'
      },
      {
        question: 'Can you run Click-to-WhatsApp ads that integrate with our sales team?',
        answer: 'Yes. For markets across India where buyers prefer WhatsApp communication, we set up structured Click-to-WhatsApp ads with pre-qualification prompts so your sales team engages warm prospects immediately.'
      },
      {
        question: 'How often do you test new ad creatives?',
        answer: 'Depending on monthly ad spend, we introduce new creative variations every 10 to 14 days to combat ad fatigue and test new customer value propositions.'
      }
    ]
  },
  {
    id: 'social-media-marketing',
    number: '10',
    slug: '/services/social-media-marketing/',
    category: 'Content & Social',
    shortName: 'Social Media Marketing',
    h1: 'Strategic Social Media Marketing Services in India for Brand Credibility & Demand',
    titleTag: 'Social Media Marketing Agency India — Siri Solutions',
    metaDescription: 'Build genuine brand authority on LinkedIn, Instagram, and YouTube. Executive thought leadership, documentary brand content, and community management.',
    primaryKeyword: 'social media marketing agency India',
    secondaryKeywords: ['B2B LinkedIn marketing India', 'corporate social media management', 'brand social media strategy India', 'executive thought leadership'],
    searchIntent: 'Commercial — B2B and consumer brands seeking authoritative, non-generic social media management',
    targetAudience: 'B2B companies, executive founders, healthcare groups, hospitality brands, and D2C businesses in India',
    imageKey: 'enterpriseOffice',
    heroLead: 'Prospects inspect your LinkedIn, Instagram, and YouTube presence to verify whether your business is active, credible, and knowledgeable before they ever submit an enquiry. We replace generic festival templates with substantive domain content.',
    audienceOverview: 'Designed for B2B organizations building LinkedIn category authority and consumer-facing brands that need consistent, high-trust visual storytelling across Instagram and YouTube.',
    problemsAddressed: [
      {
        title: 'Generic Stock-Template Posts That Erode Brand Trust',
        detail: 'Publishing repetitive stock-photo graphics and generic motivational quotes makes an established business look amateurish to discerning buyers.'
      },
      {
        title: 'Dormant Executive & Company LinkedIn Profiles',
        detail: 'In B2B sales across India, enterprise buyers routinely check the founder’s and company’s LinkedIn profiles during vendor shortlisting.'
      },
      {
        title: 'Disconnected Social Activity with Zero Website Traffic',
        detail: 'Social calendars managed without a clear link to service pages, case studies, or newsletter capture fail to contribute to the commercial funnel.'
      },
      {
        title: 'Slow Response to Direct Messages & Comment Enquiries',
        detail: 'High-intent pricing or availability questions left unanswered in Instagram DMs or LinkedIn comments result in lost leads.'
      }
    ],
    deliverables: [
      {
        title: 'Channel-Native Content Strategy & Pillar Architecture',
        description: 'Selection of the 2–3 platforms where your buyers actually spend time (e.g., LinkedIn + YouTube for B2B; Instagram + YouTube Shorts for D2C/Hospitality).'
      },
      {
        title: 'Founder & Executive LinkedIn Thought Leadership',
        description: 'Interview-driven ghostwriting for leadership profiles sharing real project lessons, industry commentary, and architectural frameworks.'
      },
      {
        title: 'Documentary Carousels, Case Breakdowns & Short Video Scripts',
        description: 'Editorial design of multi-slide educational carousels, project walkthroughs, and concise video scripts filmed with authentic team members.'
      },
      {
        title: 'Profile & Bio Conversion Optimization',
        description: 'Structuring company pages, highlights, featured sections, and UTM-tracked bio links to guide profile visitors to relevant landing pages.'
      },
      {
        title: 'Community Governance & Enquiry Routing',
        description: 'Structured monitoring and escalation workflows so product or service enquiries in comments and DMs reach your sales desk promptly.'
      },
      {
        title: 'Monthly Audience Quality & Referral Attribution Report',
        description: 'Tracking follower demographics (job titles, industries, cities), content save/share rates, and social-assisted website conversions.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Brand Audit & Subject-Matter Extraction',
        description: 'We audit your existing social footprint and conduct monthly 45-minute recorded interviews with your internal subject-matter experts.'
      },
      {
        stepNumber: '02',
        title: 'Editorial Calendar & Visual System Setup',
        description: 'We establish a clean, typography-led visual identity system (free of cliché templates) and a 30-day rolling editorial calendar.'
      },
      {
        stepNumber: '03',
        title: 'Batch Content Production & Review',
        description: 'Our writers and designers produce carousels, long-form posts, and video scripts for your approval two weeks ahead of publication.'
      },
      {
        stepNumber: '04',
        title: 'Publishing, Distribution & Employee Advocacy',
        description: 'Scheduled publishing paired with internal team sharing prompts to expand organic reach among target industry networks.'
      },
      {
        stepNumber: '05',
        title: 'Format Iteration & Paid Boost Selection',
        description: 'Identifying top-performing organic posts (by save rate and profile clicks) to amplify selectively via targeted paid reach.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B SaaS & Enterprise Consulting',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Building founder and company LinkedIn authority that warms up enterprise accounts and attracts inbound partnership enquiries.'
      },
      {
        industryName: 'Hospitality & Experiential Retail',
        industrySlug: '/industries/hospitality/',
        applicationSummary: 'Showcasing authentic property photography, culinary stories, and guest experiences on Instagram to drive direct bookings.'
      },
      {
        industryName: 'Healthcare & Specialist Clinics',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Publishing doctor-led patient education videos and myth-busting carousels that build pre-appointment trust.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['LinkedIn Company & Creator Analytics', 'Meta Business Suite', 'YouTube Studio', 'GA4 Social UTM Tracking', 'Figma Editorial Design System'],
      reportingCadence: 'Monthly editorial calendar approval + monthly engagement & referral scorecard',
      primaryKpis: ['Content Save & Share Rate', 'Target Persona Follower Growth (LinkedIn Job/City Demographics)', 'UTM-Tracked Profile Visits & Website Clicks', 'DM/Comment Enquiry Volume'],
      methodologyNote: 'We do not publish generic "Happy Monday" filler posts or buy fake followers/engagement pods. Every post must educate, prove capability, or answer a buyer question.'
    },
    comparisonTable: [
      {
        criterion: 'Content Source',
        conventionalApproach: 'Generic internet rewrites and stock-photo festival greetings',
        siriSolutionsApproach: 'Extracted from monthly interviews with your actual engineers, doctors, or founders'
      },
      {
        criterion: 'Visual Aesthetic',
        conventionalApproach: 'Cluttered Canva templates with neon badges and stock icons',
        siriSolutionsApproach: 'Restrained editorial typography, real project diagrams, and authentic photography'
      },
      {
        criterion: 'Measurement',
        conventionalApproach: 'Vanity reach from irrelevant viral reels',
        siriSolutionsApproach: 'Saves, shares, target-buyer demographic reach, and UTM website clicks'
      }
    ],
    documentedOutcome: {
      clientContext: 'B2B FinOps & Cloud Cost Optimization Startup (Bengaluru)',
      baselineProblem: 'Company LinkedIn page posted only sporadic job openings and festival graphics; founders had zero organic visibility among CTOs.',
      intervention: 'Implemented bi-weekly founder technical breakdowns, architectural AWS cost-saving carousels, and case study summaries over 6 months.',
      measuredResult: '420,000+ organic impressions among verified engineering leaders and 28 inbound enterprise discovery calls attributed to LinkedIn',
      timeframe: '6 Months',
      caseStudyId: 'finops-linkedin-thought-leadership'
    },
    relatedServiceSlugs: ['/services/content-marketing/', '/services/meta-ads/', '/services/ppc-management/'],
    faqs: [
      {
        question: 'Which social media platforms should our business actually focus on?',
        answer: 'Most businesses spread themselves too thin across five platforms. For B2B, SaaS, and professional services, LinkedIn and YouTube deliver the highest return. For D2C, hospitality, real estate, and healthcare, Instagram and YouTube are primary. We help you dominate 2 core channels rather than posting mediocre content everywhere.'
      },
      {
        question: 'How do you create technical or industry-specific posts without sounding generic?',
        answer: 'Instead of asking junior copywriters to guess your industry, we conduct a structured 45-minute recorded interview with your founder or subject-matter expert once a month. We extract your real insights, data, and customer stories and turn them into polished posts.'
      },
      {
        question: 'Do you handle paid boosting alongside organic social media?',
        answer: 'Yes. In fact, boosting your top 10% highest-performing organic posts to a tightly defined target audience on LinkedIn or Instagram is one of the most cost-effective ways to build retargeting pools.'
      },
      {
        question: 'Will we have full approval over posts before anything goes live?',
        answer: 'Always. You receive the complete copy and visual assets in a shared review workspace at least 10 business days prior to scheduled publication.'
      }
    ]
  },
  {
    id: 'content-marketing',
    number: '11',
    slug: '/services/content-marketing/',
    category: 'Content & Social',
    shortName: 'Content Marketing',
    h1: 'Content Marketing Services in India: Topic Clusters, Commercial Guides & Case Studies',
    titleTag: 'Content Marketing Agency India | B2B & SEO Content',
    metaDescription: 'Research-backed content marketing in India. We produce commercial landing pages, topic clusters, whitepapers, and case studies that earn search visibility.',
    primaryKeyword: 'content marketing agency',
    secondaryKeywords: ['B2B content marketing India', 'SEO content writing services India', 'technical content agency India', 'case study writing services'],
    searchIntent: 'Commercial — Companies seeking strategic content architecture and high-authority writing',
    targetAudience: 'B2B SaaS, fintech, healthcare, industrial, and enterprise marketing leaders across India',
    imageKey: 'enterpriseOffice',
    heroLead: 'Search engines and human buyers both reward depth, original perspective, and structural clarity. We build topic-cluster content architectures, commercial comparison guides, and documented case studies that turn readers into qualified enquiries.',
    audienceOverview: 'Created for organizations tired of superficial, AI-spun articles that fail to rank or convert—and that need credible, practitioner-reviewed content across their entire buyer journey.',
    problemsAddressed: [
      {
        title: 'High Volume of Thin, Unread Blog Posts',
        detail: 'Publishing dozens of generic "What is X?" articles written without domain expertise wastes budget and dilutes sitewide quality signals.'
      },
      {
        title: 'Missing Mid- and Bottom-of-Funnel Enablement Assets',
        detail: 'Prospects evaluating pricing, implementation timelines, regulatory compliance, or vendor comparisons find no helpful documentation on your site.'
      },
      {
        title: 'Orphan Articles with Zero Internal Linking Strategy',
        detail: 'Blog posts published in isolation without contextual internal links to core service pages fail to pass ranking equity or guide users to convert.'
      },
      {
        title: 'Outdated Legacy Content Decaying in Search Rankings',
        detail: 'Older high-performing guides gradually lose visibility when statistics, screenshots, and regulatory references are left unupdated for years.'
      }
    ],
    deliverables: [
      {
        title: 'Topic Cluster & Pillar Architecture Blueprint',
        description: 'Mapping of core commercial pillars supported by interconnected cluster guides, comparison pages, and glossary definitions.'
      },
      {
        title: 'Subject-Matter-Reviewed Long-Form Guides',
        description: 'In-depth, original articles featuring structured headings, HTML comparison tables, actionable checklists, and Indian market context.'
      },
      {
        title: 'Commercial Service & Industry Landing Page Copy',
        description: 'Conversion-focused copywriting for core service, solution, and vertical pages addressing buyer objections and evaluation criteria.'
      },
      {
        title: 'Documented Client Case Studies & Whitepapers',
        description: 'Structured customer interviews turned into problem-intervention-outcome case studies for both web browsing and sales-team PDF sharing.'
      },
      {
        title: 'Historical Content Refresh & Pruning Program',
        description: 'Auditing existing articles to consolidate overlapping posts, update outdated data, and improve conversion calls to action.'
      },
      {
        title: 'Internal Link Graph & Schema Enrichment',
        description: 'Every published asset includes exact bi-directional internal links (to and from existing pages) plus Article and FAQPage JSON-LD schema.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Buyer Journey & SERP Information-Gain Analysis',
        description: 'We analyze top-ranking pages and customer sales calls to identify what existing articles miss and where we can add original value.'
      },
      {
        stepNumber: '02',
        title: 'Detailed Content Briefs & Entity Outlines',
        description: 'Every piece starts with a structured brief defining search intent, primary/secondary keywords, heading hierarchy, tables, and internal links.'
      },
      {
        stepNumber: '03',
        title: 'Expert Interview & Draft Production',
        description: 'Our specialist writers combine primary research and SME insights to write clear, jargon-free copy.'
      },
      {
        stepNumber: '04',
        title: 'Editorial QA, Formatting & Schema Deployment',
        description: 'We format articles with custom diagrams/tables, descriptive alt text, author credentials, and valid structured data.'
      },
      {
        stepNumber: '05',
        title: 'Internal Link Wiring & Conversion Tracking',
        description: 'Upon publication, we add contextual links from older high-authority pages to the new asset and track assisted conversions in GA4.'
      }
    ],
    industryApplications: [
      {
        industryName: 'Fintech, Banking & Insurance',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Producing compliant, clear educational guides on taxation, credit, and corporate treasury that capture high-intent searchers.'
      },
      {
        industryName: 'Healthcare & Medical Networks',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Developing doctor-reviewed patient guides with clear symptom, diagnostic, and treatment pathways.'
      },
      {
        industryName: 'B2B SaaS & Enterprise Tech',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Writing technical implementation playbooks, ROI calculators, and vendor evaluation guides.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Search Console', 'GA4 Content Group & Assisted Conversion Reports', 'Ahrefs Content Explorer', 'Schema.org Article & Author Markup'],
      reportingCadence: 'Bi-weekly editorial delivery + monthly content attribution and decay report',
      primaryKpis: ['Organic rankings & clicks per topic cluster', 'Assisted conversions from blog/resource landings', 'Average engaged time on page', 'Internal click-through rate from articles to service pages'],
      methodologyNote: 'We never publish unedited bulk AI-generated articles. Every guide is outlined, researched, and edited by human strategists for accuracy and utility.'
    },
    comparisonTable: [
      {
        criterion: 'Content Planning',
        conventionalApproach: 'Random weekly blog topics based on surface keyword volume',
        siriSolutionsApproach: 'Interconnected Topic Clusters directly supporting commercial service pages'
      },
      {
        criterion: 'Information Gain',
        conventionalApproach: 'Summarizing the top 3 existing Google results',
        siriSolutionsApproach: 'Adding original comparison tables, Indian regulatory nuances, and real examples'
      },
      {
        criterion: 'Post-Publish Workflow',
        conventionalApproach: 'Hit publish and forget the URL exists',
        siriSolutionsApproach: 'Retroactive internal linking, Search Console indexing, and 90-day refresh checks'
      }
    ],
    documentedOutcome: {
      clientContext: 'Corporate Payroll & HR Compliance SaaS (Chennai & Pan-India)',
      baselineProblem: 'Blog had 210 short articles generating traffic from students searching HR definitions, but zero leads for enterprise payroll software.',
      intervention: 'Built 4 commercial topic clusters around Indian statutory compliance (PF, ESI, PT, New Wage Code) with downloadable audit checklists and embedded calculators.',
      measuredResult: '+215% increase in organic demo requests attributed to blog landing pages within two quarters',
      timeframe: '6 Months',
      caseStudyId: 'hr-saas-compliance-topic-clusters'
    },
    relatedServiceSlugs: ['/services/seo-services/', '/services/geo-optimization/', '/services/social-media-marketing/'],
    faqs: [
      {
        question: 'How many articles should we publish per month for effective SEO and content marketing?',
        answer: 'Quality and depth consistently beat raw volume. Four to six deeply researched, 1,500–2,500 word authoritative guides and comparison pages per month will outperform thirty thin 500-word blog posts every time.'
      },
      {
        question: 'Do you include author bios and E-E-A-T signals on blog posts?',
        answer: 'Yes. Especially for healthcare, finance, legal, and B2B technology topics, we configure structured author and reviewer attribution (with Person schema linking to verified LinkedIn/credential profiles) alongside publication and last-updated dates.'
      },
      {
        question: 'Can you help refresh and consolidate our existing old blog posts?',
        answer: 'Yes. In fact, updating, merging, and re-optimizing existing articles that already have historical age and backlinks is often the fastest way to generate organic traffic gains in the first 60 days.'
      },
      {
        question: 'How do blog readers actually convert into business leads?',
        answer: 'Instead of relying only on a generic footer newsletter box, we embed contextual inline calls to action, comparison tables, and related service modules matched specifically to the topic of each article.'
      }
    ]
  },
  {
    id: 'website-design',
    number: '12',
    slug: '/services/website-design/',
    category: 'Web & Conversion',
    shortName: 'Website Design',
    h1: 'B2B & Commercial Website Design Services in India Built for Trust & Clarity',
    titleTag: 'Website Design Agency India | UX/UI Design — Siri Solutions',
    metaDescription: 'Professional, conversion-focused website design in India. Clean typography, SEO-first information architecture, mobile-first UX, and authentic visual direction.',
    primaryKeyword: 'website design company India',
    secondaryKeywords: ['B2B website design agency India', 'UI UX design services India', 'corporate website redesign India', 'conversion-focused web design'],
    searchIntent: 'Commercial — Businesses seeking a modern, credible website design or redesign',
    targetAudience: 'Founders, marketing directors, and established Indian businesses upgrading outdated or low-converting websites',
    imageKey: 'heroWorkspace',
    heroLead: 'Your website is the primary trust test for every referral, search visitor, and paid ad click. We design clean, typographically disciplined interfaces structured around buyer comprehension, SEO hierarchy, and effortless mobile usability.',
    audienceOverview: 'Designed for Indian enterprises, B2B exporters, funded startups, healthcare networks, and service businesses whose current websites look dated, cluttered, or indistinguishable from generic templates.',
    problemsAddressed: [
      {
        title: 'Visual Clutter & Generic Template Aesthetics',
        detail: 'Sites overloaded with stock carousels, glowing gradients, floating badges, and vague slogans fail to communicate what the business actually does in the first 5 seconds.'
      },
      {
        title: 'Designs Created Without SEO Architecture in Mind',
        detail: 'Many visual designers create single-page layouts or image-heavy mockups that lack indexable service URLs, logical H1–H3 hierarchies, or space for substantive copy.'
      },
      {
        title: 'Poor Mobile Usability & Cramped Touch Targets',
        detail: 'Over 70% of Indian discovery traffic occurs on mobile devices, yet many corporate websites have broken mobile navigation, tiny tap targets, and intrusive sticky popups.'
      },
      {
        title: 'Inconsistent Brand Identity Across Pages',
        detail: 'Ad-hoc page additions over the years result in mismatched typography, conflicting button styles, and confusing navigation paths.'
      }
    ],
    deliverables: [
      {
        title: 'Information Architecture & URL Sitemap Blueprint',
        description: 'Complete structural plan mapping navigation menus, service silos, industry pages, breadcrumbs, and conversion pathways before visual design begins.'
      },
      {
        title: 'Wireframing & Content Hierarchy Prototyping',
        description: 'Low- and mid-fidelity interactive wireframes establishing exact section flow, headline hierarchy, proof placement, and form layouts.'
      },
      {
        title: 'Design Token System & Component Library',
        description: 'Scalable Figma design system defining color tokens (60-30-10 discipline), typographic scales, spacing math, cards, tables, and interactive states.'
      },
      {
        title: 'Mobile-First & 1440px Desktop High-Fidelity UI',
        description: 'Complete responsive layouts for every unique page template (Home, Service, Industry, Case Study, Blog, Contact) with WCAG AA contrast verification.'
      },
      {
        title: 'Natural Photography & Visual Asset Direction',
        description: 'Art direction and curation of authentic commercial photography, clean architectural diagrams, and genuine product screenshots.'
      },
      {
        title: 'Developer-Ready Specs & SEO Annotation Sheet',
        description: 'Annotated handoff specifying semantic HTML tags (`<header>`, `<main>`, `<article>`, `<h1>`–`<h3>`), image aspect ratios, and hover/focus states.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Stakeholder Discovery & SEO Sitemap Alignment',
        description: 'We align your commercial goals and SEO keyword map first so every required service and industry page has a dedicated place in the architecture.'
      },
      {
        stepNumber: '02',
        title: 'UX Wireframing & Copy Integration',
        description: 'We design wireframes around real copy and buyer questions—never designing empty boxes filled with "Lorem Ipsum".'
      },
      {
        stepNumber: '03',
        title: 'Visual Direction & Token System',
        description: 'We establish a refined typographic pairing, restrained color palette, and component language tailored to your domain.'
      },
      {
        stepNumber: '04',
        title: 'Responsive UI Design & Accessibility Audit',
        description: 'We design desktop and mobile viewports simultaneously, verifying 4.5:1 contrast ratios, keyboard focus states, and ≥44px mobile touch targets.'
      },
      {
        stepNumber: '05',
        title: 'Engineering Handoff or Full-Stack Build',
        description: 'Seamless transition to our in-house web development team (or your internal developers) with rigorous design QA.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B SaaS & Enterprise Software',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Designing product-led interfaces, interactive architecture diagrams, and clear enterprise security/pricing pages.'
      },
      {
        industryName: 'Real Estate & Architectural Projects',
        industrySlug: '/industries/real-estate/',
        applicationSummary: 'Creating editorial project showcases with floor-plan explorers, location connectivity maps, and RERA disclosure clarity.'
      },
      {
        industryName: 'Fintech & Institutional Finance',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Building high-trust, institutional-grade interfaces with clear data visualization and accessible calculators.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Figma Design Systems', 'WCAG Contrast & Accessibility Checkers', 'Microsoft Clarity / Hotjar Heatmap Analysis', 'Responsive Viewport Simulators'],
      reportingCadence: 'Weekly interactive Figma prototype walkthroughs',
      primaryKpis: ['Mobile & Desktop UX Task Completion', 'WCAG 2.1 AA Accessibility Compliance', 'Scroll Depth & Primary CTA Engagement Rate', 'Zero Layout Shift (CLS) Geometry'],
      methodologyNote: 'We never design with Lorem Ipsum placeholder text. Copywriting, SEO heading structure, and UX layout are engineered together.'
    },
    comparisonTable: [
      {
        criterion: 'Design Starting Point',
        conventionalApproach: 'Buying a bloated ₹4,000 theme and forcing your content into it',
        siriSolutionsApproach: 'Custom information architecture built around your SEO map and buyer journey'
      },
      {
        criterion: 'Visual Aesthetic',
        conventionalApproach: 'Heavy gradients, floating 3D cartoons, and distracting scroll jacking',
        siriSolutionsApproach: 'Editorial whitespace, strong typography, and authentic commercial photography'
      },
      {
        criterion: 'Mobile Experience',
        conventionalApproach: 'An afterthought shrunk down from desktop at the end of the project',
        siriSolutionsApproach: 'Mobile-first navigation, thumb-friendly forms, and strict 15% sticky height cap'
      }
    ],
    documentedOutcome: {
      clientContext: 'Precision Aerospace & Defense Component Manufacturer (Hyderabad)',
      baselineProblem: 'Legacy 2017 website was non-responsive on mobile, buried ISO/AS9100 certifications in PDF downloads, and had a 79% bounce rate from international procurement buyers.',
      intervention: 'Redesigned around a clean 28-page capability and facility architecture with authentic shop-floor photography, tabular tolerance matrices, and RFQ drawers.',
      measuredResult: 'Bounce rate dropped from 79% to 38%, average session duration rose to 3m 40s, and international RFQ submissions increased by +128%',
      timeframe: '10 Weeks Post-Launch',
      caseStudyId: 'aerospace-manufacturing-ux-redesign'
    },
    relatedServiceSlugs: ['/services/website-development/', '/services/landing-page-development/', '/services/conversion-rate-optimization/'],
    faqs: [
      {
        question: 'Do you write the website copy as part of the website design project?',
        answer: 'Yes. Designing a website without real copy leads to broken layouts and weak conversion messaging. Our SEO and content strategists draft or refine your page copy in parallel with the wireframing phase.'
      },
      {
        question: 'Can you use our existing brand colors and logo, or can you refresh them?',
        answer: 'Both. If you have established brand guidelines, we translate them into a clean web token system. If your current palette lacks sufficient contrast or digital legibility, we refine your color and typography tokens while respecting your brand equity.'
      },
      {
        question: 'How do you make sure a website redesign does not hurt our existing SEO rankings?',
        answer: 'Unlike pure design studios, we are an SEO-first agency. We audit your existing top-ranking URLs before designing the new sitemap, preserve critical heading and internal link structures, and prepare a complete 301 redirect map.'
      },
      {
        question: 'Will we receive the editable source design files?',
        answer: 'Yes. Upon completion, you receive full ownership of the organized Figma source files, component library, and exported visual assets.'
      }
    ]
  },
  {
    id: 'website-development',
    number: '13',
    slug: '/services/website-development/',
    category: 'Web & Conversion',
    shortName: 'Website Development',
    h1: 'Custom Website Development Services in India Engineered for Speed, SEO & Scale',
    titleTag: 'Website Development Company India | Fast & SEO-Ready',
    metaDescription: 'High-performance website development in India. Semantic HTML, sub-2.5s Core Web Vitals, clean CMS architecture, and secure CRM/analytics integrations.',
    primaryKeyword: 'website development company India',
    secondaryKeywords: ['business website development', 'custom web development India', 'SEO friendly website development', 'React Next.js WordPress agency India'],
    searchIntent: 'Commercial / Transactional — Businesses seeking reliable full-stack website development',
    targetAudience: 'SMEs, mid-market enterprises, B2B companies, and D2C brands across India needing fast, maintainable web engineering',
    imageKey: 'webEngineeringCollab',
    heroLead: 'We build fast, accessible, and easily maintainable websites engineered from the ground up for Core Web Vitals performance, technical SEO crawlability, and seamless CRM lead routing.',
    audienceOverview: 'Built for businesses frustrated by slow, plugin-bloated websites that break on update, score poorly on Google PageSpeed, and require a developer just to edit a headline or meta description.',
    problemsAddressed: [
      {
        title: 'Bloated Page-Builder Code & Failing Core Web Vitals',
        detail: 'Sites built with heavy drag-and-drop themes and 40+ conflicting plugins suffer from 6-second load times, security vulnerabilities, and high bounce rates.'
      },
      {
        title: 'Hardcoded Pages That Marketing Teams Cannot Edit',
        detail: 'When titles, meta descriptions, FAQs, and service copy are hardcoded without a structured content model, simple SEO updates get bottlenecked for weeks.'
      },
      {
        title: 'Broken Forms & Lost Sales Enquiries',
        detail: 'Unvalidated contact forms without SMTP redundancy, spam protection, or CRM webhook backups silently drop high-value customer leads.'
      },
      {
        title: 'Missing Technical SEO Foundations at Launch',
        detail: 'Sites frequently launch with staging `noindex` tags left on, broken canonical URLs, missing XML sitemaps, and unconfigured GA4/GTM events.'
      }
    ],
    deliverables: [
      {
        title: 'Clean, Semantic Frontend & Component Architecture',
        description: 'Modular code built with semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`), accessible ARIA attributes, and responsive Tailwind/CSS grid layouts.'
      },
      {
        title: 'Core Web Vitals Performance Engineering',
        description: 'Responsive WebP/AVIF image pipelines, lazy loading below the fold, critical font preloading, and minimal JavaScript bundles targeting LCP <= 2.5s and INP <= 200ms.'
      },
      {
        title: 'Structured Content Model & Metadata Controls',
        description: 'Independent route management allowing per-page control of URL slugs, title tags, meta descriptions, canonical tags, OpenGraph cards, H1s, and JSON-LD schema.'
      },
      {
        title: 'Secure Lead Capture, Spam Filtering & CRM Webhooks',
        description: 'Validated enquiry and quote forms with honeypot/rate-limit spam protection, instant WhatsApp/phone click tracking, and direct CRM integration.'
      },
      {
        title: 'Technical SEO & Analytics Infrastructure',
        description: 'Automated XML sitemap, robots.txt, 301 redirect engine, custom 404 page, Google Tag Manager, GA4 conversion events, and Search Console verification.'
      },
      {
        title: 'Pre-Launch 16-Point QA & Post-Launch Support',
        description: 'Cross-device browser testing, accessibility contrast/keyboard verification, and 30 days of post-launch warranty engineering support.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Technical Architecture & Stack Selection',
        description: 'We select the right architecture for your team’s workflow—whether modern React/Next.js/Vite, headless CMS, or a lean, custom-coded WordPress/Shopify build.'
      },
      {
        stepNumber: '02',
        title: 'Component & Content Model Development',
        description: 'We build reusable, accessible UI components (headers, breadcrumbs, service templates, FAQ accordions, forms) backed by structured content schemas.'
      },
      {
        stepNumber: '03',
        title: 'SEO, Schema & Conversion Instrumentation',
        description: 'Every route is wired with dynamic metadata, JSON-LD structured data, and GTM/GA4 event listeners for forms, phone clicks, and WhatsApp taps.'
      },
      {
        stepNumber: '04',
        title: 'Performance, Security & Accessibility QA',
        description: 'We test across Android, iOS, and desktop viewports, verify Core Web Vitals thresholds, and run link-integrity and schema validation checks.'
      },
      {
        stepNumber: '05',
        title: 'Zero-Downtime Deployment & Team Training',
        description: 'We manage DNS/SSL cutover, submit XML sitemaps in Search Console, and train your marketing team on content management.'
      }
    ],
    industryApplications: [
      {
        industryName: 'B2B Enterprises & Exporters',
        industrySlug: '/industries/local-businesses/',
        applicationSummary: 'Building fast, multi-service corporate websites with technical specification tables and international RFQ workflows.'
      },
      {
        industryName: 'Healthcare & Hospital Networks',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Developing doctor directory search, department silos, and fast mobile appointment booking portals.'
      },
      {
        industryName: 'SaaS & Technology Companies',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Engineering modular marketing sites with interactive pricing calculators, integration hubs, and documentation directories.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['React / TypeScript / Next.js / Modern Web Stack', 'Tailwind CSS', 'Google Lighthouse & PageSpeed Insights', 'Google Tag Manager & GA4', 'Git Version Control & Automated CI/CD'],
      reportingCadence: 'Weekly staging deployment previews + pre-launch technical audit sign-off',
      primaryKpis: ['LCP <= 2.5s, INP <= 200ms, CLS <= 0.1', '100% Valid Structured Data & Canonical Coverage', 'Zero Broken Internal Links or Orphan Pages', '100% Form Delivery & Event Tracking Accuracy'],
      methodologyNote: 'You own 100% of your codebase, repository, and hosting credentials. No proprietary vendor lock-in.'
    },
    comparisonTable: [
      {
        criterion: 'Codebase Quality',
        conventionalApproach: 'Heavy multi-purpose themes stacked with 35+ third-party plugins',
        siriSolutionsApproach: 'Lean, modular component architecture with zero unnecessary script bloat'
      },
      {
        criterion: 'SEO Readiness at Launch',
        conventionalApproach: 'SEO treated as a paid add-on after the site is already built',
        siriSolutionsApproach: 'Clean URLs, breadcrumbs, schema, sitemaps, and canonicals baked into the build'
      },
      {
        criterion: 'Form & Lead Reliability',
        conventionalApproach: 'Basic email-only forms that silently fail or flood with spam',
        siriSolutionsApproach: 'Validated forms with spam protection, instant UI states, and CRM webhook sync'
      }
    ],
    documentedOutcome: {
      clientContext: 'Multi-State Logistics & Cold Chain Infrastructure Operator (Mumbai & Chennai)',
      baselineProblem: 'Legacy WordPress site took 7.4 seconds to load on mobile, suffered frequent plugin crashes, and had 14 broken service URLs.',
      intervention: 'Engineered a modular, SEO-first web platform with 22 dedicated service/corridor pages, WebP asset pipeline, and automated Zoho CRM lead routing.',
      measuredResult: 'Mobile LCP improved from 7.4s to 1.6s, organic indexed pages grew 3.1x, and monthly B2B quote requests increased by +142%',
      timeframe: '8 Weeks Build + 90 Days Post-Launch',
      caseStudyId: 'cold-chain-logistics-web-platform'
    },
    relatedServiceSlugs: ['/services/website-design/', '/services/technical-seo/', '/services/landing-page-development/'],
    faqs: [
      {
        question: 'Will our marketing team be able to update page titles, copy, and blog posts without a developer?',
        answer: 'Yes. We structure every website with a clear separation between layout components and page content data so your team can update titles, meta descriptions, H1s, images, alt text, FAQs, and articles independently.'
      },
      {
        question: 'How do you ensure our website loads fast on Indian mobile networks?',
        answer: 'We optimize for realistic 4G/5G Android conditions by serving compressed WebP/AVIF images, preloading only critical fonts, eliminating render-blocking third-party scripts, and enforcing strict asset budgets.'
      },
      {
        question: 'Do you set up Google Analytics 4, Google Tag Manager, and Search Console before launch?',
        answer: 'Yes. Every website we develop launches with GA4, GTM conversion events (form submissions, phone clicks, WhatsApp clicks), XML sitemaps, and Google Search Console verification pre-configured.'
      },
      {
        question: 'What happens if we already have an existing website with search rankings?',
        answer: 'We crawl your current website prior to development, preserve high-performing URL slugs wherever possible, and implement server-level 301 redirects for any changed URLs so your search equity carries over cleanly.'
      }
    ]
  },
  {
    id: 'landing-page-development',
    number: '14',
    slug: '/services/landing-page-development/',
    category: 'Web & Conversion',
    shortName: 'Landing Page Development',
    h1: 'High-Converting Landing Page Design & Development Services for Paid Campaigns',
    titleTag: 'Landing Page Design & Development India — Siri Solutions',
    metaDescription: 'Custom landing page design and development in India for Google Ads and Meta campaigns. Fast load times, message matching, social proof, and lead tracking.',
    primaryKeyword: 'landing page design services',
    secondaryKeywords: ['landing page development India', 'PPC landing page agency', 'high converting landing pages India', 'B2B lead generation landing pages'],
    searchIntent: 'Commercial / Transactional — Advertisers seeking dedicated landing pages to improve paid ad conversion rates',
    targetAudience: 'Performance marketers, founders, real estate developers, SaaS teams, and healthcare clinics running Google or Meta Ads',
    imageKey: 'webEngineeringCollab',
    heroLead: 'Sending paid Google or Meta ad clicks to a generic website homepage leaks up to 60% of potential conversions. We design and engineer dedicated, fast-loading campaign landing pages built around a single conversion goal.',
    audienceOverview: 'Built for any business investing in Google Search, Performance Max, LinkedIn, or Meta Ads that needs message-matched, distraction-free landing pages that load in under 1.8 seconds on mobile.',
    problemsAddressed: [
      {
        title: 'Navigation Distractions Leaking Paid Traffic',
        detail: 'Standard website headers with 20 menu links pull paid visitors away from the enquiry flow before they complete a consultation request.'
      },
      {
        title: 'Weak Message Match & Low Google Ads Quality Scores',
        detail: 'When a user searches "industrial chiller maintenance Pune" and lands on a generic corporate page, ad relevance drops and CPCs rise.'
      },
      {
        title: 'Slow Mobile Load Times Killing Ad Clicks',
        detail: 'Up to 35% of mobile users abandon a paid ad click if the destination landing page takes longer than 3 seconds to render interactive content.'
      },
      {
        title: 'High-Friction or Unclear Lead Forms',
        detail: 'Asking for 11 mandatory fields on a tiny mobile screen without explaining what happens after submission suppresses conversion rates.'
      }
    ],
    deliverables: [
      {
        title: 'Ad-Group Message-Matched Copy & Architecture',
        description: 'Headline, subheadline, and proof modules written to mirror the exact search query or ad hook that brought the visitor to the page.'
      },
      {
        title: 'Focused Single-Goal Conversion Layout',
        description: 'Distraction-free header, clear above-the-fold value proposition, adjacent quantitative proof, objection-handling FAQs, and persistent mobile CTA.'
      },
      {
        title: 'Sub-2-Second Mobile Performance Build',
        description: 'Ultra-lightweight HTML/CSS/React implementation achieving 95+ PageSpeed scores to maximize click-to-landing-page retention.'
      },
      {
        title: 'Multi-Step or Qualified Enquiry Form + WhatsApp Routing',
        description: 'Low-friction 2-step qualification forms, work-email/phone validation, click-to-call buttons, and instant WhatsApp callback triggers.'
      },
      {
        title: 'Dedicated Thank-You Page & GCLID/CAPI Tracking',
        description: 'Clean conversion confirmation state firing exact Google Ads, Meta CAPI, and GA4 events with hidden UTM/GCLID field capture.'
      },
      {
        title: 'A/B Variant Ready Modular Sections',
        description: 'Structured so headlines, hero imagery, and form lengths can be tested systematically without rebuilding the page.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Campaign Intent & Offer Audit',
        description: 'We review your active ad groups, target keywords, ad creatives, and competitor landing pages to define the strongest conversion hook.'
      },
      {
        stepNumber: '02',
        title: 'Conversion Copywriting & Wireframe Flow',
        description: 'We sequence the page using Proposition -> Capability Mechanism -> Adjacent Quantitative Proof -> Objection FAQs -> Action.'
      },
      {
        stepNumber: '03',
        title: 'High-Fidelity UI & Mobile-First Engineering',
        description: 'We design and code the page with strict visual restraint, tabular metrics, and thumb-friendly mobile form inputs.'
      },
      {
        stepNumber: '04',
        title: 'CRM Webhook & Ad Pixel QA',
        description: 'We test form submissions end-to-end into your CRM and verify GCLID, FBCLID, and UTM parameter persistence.'
      },
      {
        stepNumber: '05',
        title: 'Heatmap Monitoring & Variant Iteration',
        description: 'Post-launch analysis of scroll drop-off, field abandonment, and device-specific conversion rates.'
      }
    ],
    industryApplications: [
      {
        industryName: 'Real Estate Project Launches',
        industrySlug: '/industries/real-estate/',
        applicationSummary: 'Building fast, RERA-compliant project microsites with floor-plan unlocks, pricing sheet requests, and site-visit booking.'
      },
      {
        industryName: 'B2B SaaS Demo & Trial Funnels',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Creating competitor-comparison and feature-specific landing pages that convert high-CPC search traffic into product demos.'
      },
      {
        industryName: 'Healthcare Procedures & Clinics',
        industrySlug: '/industries/healthcare/',
        applicationSummary: 'Designing specialist treatment landing pages with doctor credentials, transparent consultation info, and instant phone/WhatsApp booking.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['React / Static Edge Builds', 'Google Tag Manager & GA4', 'Microsoft Clarity (Heatmaps & Session Recordings)', 'CRM Webhooks'],
      reportingCadence: 'Delivered in 7–10 business days + 30-day post-launch conversion diagnostic',
      primaryKpis: ['Landing Page Conversion Rate (CVR %)', 'Click-to-Landing-Page Load Retention Rate', 'Google Ads Landing Page Experience Score (Above Average)', 'Cost Per Qualified Lead Reduction'],
      methodologyNote: 'Paid campaign landing pages are configured with appropriate `noindex` or canonical directives when necessary so they never cannibalize your core organic SEO service pages.'
    },
    comparisonTable: [
      {
        criterion: 'Destination Strategy',
        conventionalApproach: 'Sending all paid ad groups to the main website homepage',
        siriSolutionsApproach: 'Dedicated, distraction-free landing pages matched to specific ad themes'
      },
      {
        criterion: 'Load Performance',
        conventionalApproach: 'Slow third-party drag-and-drop builder pages taking 5+ seconds on mobile',
        siriSolutionsApproach: 'Hand-engineered lightweight pages loading in under 1.8 seconds'
      },
      {
        criterion: 'Lead Capture',
        conventionalApproach: 'Generic contact form with no hidden UTM or GCLID tracking',
        siriSolutionsApproach: 'Qualified multi-step or validated form passing full ad attribution to CRM'
      }
    ],
    documentedOutcome: {
      clientContext: 'Multi-City Fertility & IVF Hospital Network (Chennai, Bengaluru & Hyderabad)',
      baselineProblem: 'Google Ads sent clicks to slow hospital department pages with 18 navigation links, resulting in a 2.9% conversion rate.',
      intervention: 'Built city-specific, clinician-led landing pages with 1.4s mobile load time, transparent treatment FAQs, and 2-field callback/WhatsApp booking.',
      measuredResult: 'Landing page conversion rate increased from 2.9% to 8.7%, cutting Cost Per Booked Consultation by 58%',
      timeframe: '45 Days',
      caseStudyId: 'healthcare-ppc-landing-page-lift'
    },
    relatedServiceSlugs: ['/services/google-ads/', '/services/meta-ads/', '/services/conversion-rate-optimization/'],
    faqs: [
      {
        question: 'Will campaign landing pages hurt our SEO by creating duplicate content?',
        answer: 'No. When we build dedicated PPC landing pages that overlap topically with an existing organic service page, we configure appropriate `robots` directives or canonical tags so search engines index your primary SEO page while paid traffic converts on the tailored landing page.'
      },
      {
        question: 'Should a landing page include a phone number and WhatsApp button alongside the form?',
        answer: 'In the Indian market, yes. Many high-intent buyers prefer calling directly or initiating a WhatsApp message rather than filling out a form. We track all three conversion actions (form submit, click-to-call, WhatsApp click) in GA4 and Google Ads.'
      },
      {
        question: 'How many fields should our lead generation form have?',
        answer: 'It is a balance between volume and lead quality. Typically, 4 to 5 well-structured fields (Name, Work Email/Phone, Company/City, Required Service, and one qualifying dropdown) maximize qualified pipeline while filtering out accidental submissions.'
      },
      {
        question: 'Can you host the landing pages on our existing domain or a subdomain?',
        answer: 'Both. We can deploy them directly under `/lp/...` routes on your primary domain or on a dedicated campaign subdomain (e.g., `go.yourdomain.in`) connected to your analytics and CRM.'
      }
    ]
  },
  {
    id: 'conversion-rate-optimization',
    number: '15',
    slug: '/services/conversion-rate-optimization/',
    category: 'Web & Conversion',
    shortName: 'Conversion Rate Optimization',
    h1: 'Conversion Rate Optimization (CRO) Services in India to Turn Traffic into Revenue',
    titleTag: 'CRO Services India | Conversion Rate Optimization Agency',
    metaDescription: 'Increase leads and e-commerce checkouts from your existing website traffic. Quantitative funnel diagnostics, UX friction removal, and A/B experimentation.',
    primaryKeyword: 'conversion rate optimization services',
    secondaryKeywords: ['CRO agency India', 'website conversion optimization', 'ecommerce checkout optimization India', 'B2B lead funnel optimization'],
    searchIntent: 'Commercial — Businesses with existing traffic seeking higher lead or checkout conversion efficiency',
    targetAudience: 'E-commerce brands, SaaS companies, and high-traffic B2B/consumer websites across India',
    imageKey: 'webEngineeringCollab',
    heroLead: 'Doubling your conversion rate from 1.5% to 3.0% doubles the return on every rupee you already spend on SEO, Google Ads, and Meta Ads. We use behavioral analytics, funnel diagnostics, and structured testing to remove buyer friction.',
    audienceOverview: 'Ideal for websites generating at least 10,000+ monthly sessions or steady paid ad traffic where visitors browse key commercial pages or add items to cart but abandon before converting.',
    problemsAddressed: [
      {
        title: 'High Traffic on Service or Product Pages with Low Enquiry Rates',
        detail: 'Pages attract the right visitors, but vague value propositions, missing trust proof, or buried CTAs cause users to leave to compare competitors.'
      },
      {
        title: 'Form Field Drop-Off & Mobile Input Errors',
        detail: 'Poor keyboard types on mobile inputs, confusing validation errors, and intrusive mandatory fields cause 40%+ of users who start a form to abandon it.'
      },
      {
        title: 'E-commerce Cart & Checkout Abandonment',
        detail: 'Unexpected shipping charges at the final step, slow coupon modals, and lack of clear delivery timelines or UPI/prepaid trust signals kill D2C checkouts.'
      },
      {
        title: 'Redesigning Based on Opinions Instead of User Data',
        detail: 'Teams frequently argue over button colors or layout changes without checking GA4 step-by-step drop-off data or real session recordings.'
      }
    ],
    deliverables: [
      {
        title: 'GA4 Funnel & Step-Drop-Off Diagnostic',
        description: 'Granular event analysis pinpointing the exact page templates, device types, and form steps where qualified users abandon the journey.'
      },
      {
        title: 'Heatmap, Scroll-Map & Session Recording Audit',
        description: 'Qualitative behavioral review identifying dead clicks, rage clicks, ignored sections, and mobile layout breaks.'
      },
      {
        title: 'Form Friction & Lead Capture Overhaul',
        description: 'Optimization of field count, inline validation, autofill attributes, error recovery messages, and post-submission confirmation flows.'
      },
      {
        title: 'Claim-to-Proof Adjacency Restructuring',
        description: 'Repositioning concrete case metrics, client testimonials, and regulatory/security credentials directly beside primary conversion CTAs.'
      },
      {
        title: 'E-commerce PDP, Cart Drawer & Checkout Optimization',
        description: 'Testing pincode delivery estimators, size/spec clarity, prepaid UPI incentives, and streamlined cart drawers.'
      },
      {
        title: 'Hypothesis Backlog & Split-Test Execution',
        description: 'Structured testing of high-impact layout and copy changes with statistical confidence tracking on primary conversion events.'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Instrumentation & Data Hygiene Check',
        description: 'We verify that GA4, form field interactions, scroll depth, and e-commerce checkout steps are firing accurately across mobile and desktop.'
      },
      {
        stepNumber: '02',
        title: 'Quantitative & Qualitative Friction Audit',
        description: 'We combine GA4 funnel exploration with heatmap/scroll analysis and live user heuristic testing.'
      },
      {
        stepNumber: '03',
        title: 'Prioritized Hypothesis Roadmap',
        description: 'We rank every identified friction point by traffic volume, commercial value, and ease of engineering implementation.'
      },
      {
        stepNumber: '04',
        title: 'UX/Copy Implementation & Experimentation',
        description: 'We deploy high-certainty UX fixes immediately and run controlled A/B tests on high-traffic pages.'
      },
      {
        stepNumber: '05',
        title: 'Revenue & Lead Quality Verification',
        description: 'We measure not just raw conversion rate lift, but downstream CRM lead qualification and net revenue per visitor.'
      }
    ],
    industryApplications: [
      {
        industryName: 'E-commerce & D2C Stores',
        industrySlug: '/industries/ecommerce/',
        applicationSummary: 'Improving product-to-cart rate, reducing checkout abandonment, and increasing prepaid UPI order share over COD.'
      },
      {
        industryName: 'B2B SaaS & Enterprise Lead Gen',
        industrySlug: '/industries/saas/',
        applicationSummary: 'Increasing demo request completion rates and pricing-page engagement.'
      },
      {
        industryName: 'Fintech & Loan/Account Onboarding',
        industrySlug: '/industries/fintech/',
        applicationSummary: 'Reducing drop-off across multi-step KYC, calculator-to-application transitions, and mobile OTP verification.'
      }
    ],
    toolsAndReporting: {
      toolsUsed: ['Google Analytics 4 Funnel Exploration', 'Microsoft Clarity / Hotjar', 'Google Tag Manager Custom Events', 'A/B Testing & Feature Flag Frameworks'],
      reportingCadence: 'Bi-weekly experiment velocity updates + monthly conversion & revenue-per-session report',
      primaryKpis: ['Primary Conversion Rate (Enquiries or Purchases / Sessions)', 'Form Start-to-Completion Ratio', 'Revenue or Qualified Pipeline per 1,000 Sessions', 'Cart-to-Checkout Completion Rate'],
      methodologyNote: 'We never use deceptive dark patterns, fake countdown timers, or fabricated "Someone in Mumbai just bought this" popups that damage brand credibility.'
    },
    comparisonTable: [
      {
        criterion: 'CRO Methodology',
        conventionalApproach: 'Randomly changing button colors or adding aggressive exit-intent popups',
        siriSolutionsApproach: 'Fixing structural clarity, proof adjacency, mobile speed, and form friction'
      },
      {
        criterion: 'Urgency & Trust Tactics',
        conventionalApproach: 'Fake scarcity timers and annoying spin-the-wheel overlays',
        siriSolutionsApproach: 'Genuine quantitative proof, transparent pricing/process FAQs, and fast UX'
      },
      {
        criterion: 'Primary Metric',
        conventionalApproach: 'Micro-clicks that do not translate to sales',
        siriSolutionsApproach: 'Verified form completions, qualified phone/WhatsApp leads, and net revenue'
      }
    ],
    documentedOutcome: {
      clientContext: 'B2B Commercial Solar EPC & Energy Storage Provider (Pune & Maharashtra/Telangana)',
      baselineProblem: 'Site received 18,000 monthly visits from organic and paid search, but the 9-field industrial quote form had an 82% abandonment rate on mobile.',
      intervention: 'Replaced the 9-field wall with a 3-step progressive rooftop/bill estimator, added adjacent industrial case study proof, and enabled 1-tap WhatsApp engineer connect.',
      measuredResult: '+94% increase in completed commercial solar enquiries from the same traffic volume',
      timeframe: '60 Days',
      caseStudyId: 'commercial-solar-cro-funnel'
    },
    relatedServiceSlugs: ['/services/landing-page-development/', '/services/website-design/', '/services/ecommerce-seo/'],
    faqs: [
      {
        question: 'How much website traffic do we need before investing in CRO?',
        answer: 'Even if your website has modest traffic (e.g., 2,000 to 5,000 visits/month), heuristic UX improvements, form friction removal, and clearer proof placement will immediately lift enquiries. For statistical A/B split-testing, we typically look for pages with at least 10,000+ monthly visits and 100+ monthly conversions.'
      },
      {
        question: 'Will CRO changes slow down our website with heavy testing scripts?',
        answer: 'No. Many legacy client-side A/B testing scripts cause severe screen flicker and hurt Core Web Vitals (INP/LCP). We implement lightweight server/edge variations or clean component updates that preserve your site speed.'
      },
      {
        question: 'Do you optimize for phone and WhatsApp enquiries as well as form fills?',
        answer: 'Yes. For Indian B2B and local service businesses, phone calls and WhatsApp messages often account for 40% to 60% of high-intent leads. We design and track mobile action bars and contextual contact options without exceeding the 15% mobile sticky viewport cap.'
      },
      {
        question: 'How does CRO work together with our SEO and Google Ads campaigns?',
        answer: 'CRO acts as a multiplier on both channels. When your service pages and landing pages convert at a higher rate, your Google Ads Cost Per Lead drops immediately, and your organic SEO traffic generates more pipeline without needing to wait months for additional traffic growth.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServicePageData | undefined => {
  const normalized = slug.endsWith('/') ? slug : `${slug}/`;
  return SERVICES_DATA.find((s) => s.slug === normalized);
};
