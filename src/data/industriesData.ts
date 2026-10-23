export interface IndustryPageData {
  id: string;
  number: string;
  slug: string;
  name: string;
  h1: string;
  titleTag: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetAudience: string;
  imageKey: 'heroWorkspace' | 'seoAuditDesk' | 'webEngineeringCollab' | 'paidMediaSession' | 'enterpriseOffice';
  heroLead: string;
  indianMarketContext: string;
  challenges: { title: string; detail: string }[];
  recommendedServices: {
    serviceName: string;
    serviceSlug: string;
    whyRelevant: string;
  }[];
  strategyPillars: {
    step: string;
    title: string;
    description: string;
  }[];
  kpisAndMeasurement: string[];
  exampleOutcome: {
    segment: string;
    challenge: string;
    solution: string;
    result: string;
  };
  faqs: { question: string; answer: string }[];
}

export const INDUSTRIES_DATA: IndustryPageData[] = [
  {
    id: 'real-estate',
    number: '01',
    slug: '/industries/real-estate/',
    name: 'Real Estate & Property Developers',
    h1: 'Digital Marketing & SEO for Real Estate Developers in India',
    titleTag: 'Real Estate Digital Marketing Agency India — Siri Solutions',
    metaDescription: 'Generate RERA-compliant, site-visit-qualified leads for residential townships, luxury villas, and commercial real estate projects across Indian metros.',
    primaryKeyword: 'real estate digital marketing agency India',
    secondaryKeywords: ['real estate SEO services India', 'property lead generation Google Ads', 'real estate microsite development', 'RERA compliant marketing'],
    searchIntent: 'Commercial — Real estate developers and channel partners seeking qualified site visits and NRI enquiries',
    targetAudience: 'Residential & commercial real estate developers in Hyderabad, Bengaluru, Mumbai, Pune, Chennai, and Delhi NCR',
    imageKey: 'paidMediaSession',
    heroLead: 'Real estate marketing in India fails when agencies optimize for cheap, unverified ₹150 instant-form leads that never answer the phone. We build corridor-specific search visibility, fast RERA-compliant project microsites, and CRM-synced paid funnels optimized for actual site visits.',
    indianMarketContext: 'Homebuyers and commercial investors across growth corridors (such as Kokapet/Financial District in Hyderabad, Sarjapur/Whitefield in Bengaluru, or Thane/Navi Mumbai) research builders, RERA registration numbers, floor plans, and price-per-sq-ft across 8 to 14 touchpoints before scheduling a site visit.',
    challenges: [
      {
        title: 'Low-Intent Aggregator & Instant-Form Lead Fatigue',
        detail: 'Pre-sales callers spend 80% of their day dialing unresponsive auto-filled leads or property portal Window Shoppers with mismatched budgets.'
      },
      {
        title: 'Heavy, Slow-Loading Project Microsites',
        detail: 'Brochure-heavy websites with 25MB uncompressed renders take 9+ seconds to load on mobile data, causing 40% of paid Google and Meta clicks to bounce.'
      },
      {
        title: 'Zero Organic Visibility for Corridor & Micro-Market Queries',
        detail: 'Developers rely 100% on paid ads during launch phases and miss organic search demand for "3 BHK gated community in [Locality]" or NRI investment queries.'
      },
      {
        title: 'Disconnected Pre-Sales CRM Attribution',
        detail: 'Without passing GCLID and CAPI signals back from LeadSquared, Sell.Do, or Zoho CRM when a site visit is booked, ad algorithms keep optimizing for junk leads.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Google Ads Management',
        serviceSlug: '/services/google-ads/',
        whyRelevant: 'Captures high-intent micro-market, configuration (3/4 BHK, villa, Grade-A office), and NRI investment search demand.'
      },
      {
        serviceName: 'Meta Ads Management',
        serviceSlug: '/services/meta-ads/',
        whyRelevant: 'Uses conditional budget/timeline qualification and Server-Side CAPI tied to verified CRM site-visit stages.'
      },
      {
        serviceName: 'Landing Page Development',
        serviceSlug: '/services/landing-page-development/',
        whyRelevant: 'Sub-2-second RERA-compliant project microsites with interactive floor plans, location connectivity matrices, and WhatsApp brochure unlocks.'
      },
      {
        serviceName: 'Local SEO Services',
        serviceSlug: '/services/local-seo/',
        whyRelevant: 'Optimizes project Experience Center Google Business Profiles for direction requests and direct walk-ins.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'RERA-Compliant Microsite & Speed Architecture',
        description: 'We build fast, mobile-first project pages displaying verified RERA numbers, carpet areas, connectivity times, and floor-plan unlocks.'
      },
      {
        step: '02',
        title: 'Budget-Qualified Lead Filtering',
        description: 'Every enquiry form includes configuration (e.g., 3 BHK vs. Villa), budget bracket, and purchase timeline selectors to filter out mismatched enquiries.'
      },
      {
        step: '03',
        title: 'Domestic & NRI Geo-Segmented Campaigns',
        description: 'Separate search and social campaigns tailored for local metro buyers vs. NRI investors in the US, UAE, UK, and Singapore.'
      },
      {
        step: '04',
        title: 'CRM Site-Visit Loopback',
        description: 'Automated webhook integration sending "Qualified Pre-Sales" and "Site Visit Completed" milestones back to Google Ads and Meta.'
      }
    ],
    kpisAndMeasurement: [
      'Cost Per Qualified Site Visit (CPSV)',
      'Lead-to-Site-Visit Conversion Percentage',
      'Micro-market Non-Branded Organic Search Share',
      'Experience Center Google Maps Direction Requests'
    ],
    exampleOutcome: {
      segment: 'Luxury Gated Township Developer (West Hyderabad)',
      challenge: '1.8% lead-to-site-visit conversion from standard Facebook lead forms.',
      solution: 'Deployed a sub-2s project microsite with 3-question budget qualification and CRM CAPI loopback.',
      result: 'Site-visit conversion rate rose to 11.4% and Cost Per Completed Site Visit dropped by 54% in 60 days.'
    },
    faqs: [
      {
        question: 'Can you integrate leads directly with Sell.Do, LeadSquared, or Zoho CRM?',
        answer: 'Yes. We configure real-time webhook integrations with all major Indian real estate CRMs, capturing UTM source, campaign, ad group, keyword, and GCLID parameters on every enquiry.'
      },
      {
        question: 'How do you handle RERA compliance on real estate landing pages and ads?',
        answer: 'We prominently display the state RERA registration number and official RERA portal link on every landing page and ad creative, and we avoid unverified ROI promises or misleading possession claims.'
      }
    ]
  },
  {
    id: 'saas',
    number: '02',
    slug: '/industries/saas/',
    name: 'B2B SaaS & Enterprise Technology',
    h1: 'B2B SaaS Digital Marketing, Technical SEO & GEO Agency in India',
    titleTag: 'B2B SaaS Marketing & SEO Agency India — Siri Solutions',
    metaDescription: 'Grow qualified product demos and enterprise pipeline for Indian B2B SaaS companies serving domestic and global markets through SEO, GEO, and paid search.',
    primaryKeyword: 'B2B SaaS marketing agency India',
    secondaryKeywords: ['SaaS SEO agency India', 'B2B SaaS Google Ads management', 'GEO for SaaS companies', 'SaaS conversion optimization'],
    searchIntent: 'Commercial — SaaS founders, VPs of Marketing, and growth leads seeking inbound demo pipeline',
    targetAudience: 'Seed-to-Series C B2B SaaS companies and enterprise software firms in Bengaluru, Chennai, Hyderabad, Pune, and Delhi NCR',
    imageKey: 'webEngineeringCollab',
    heroLead: 'Indian SaaS companies building for both domestic enterprises and global markets cannot win on generic top-of-funnel blog traffic alone. We build bottom-of-funnel comparison pages, integration directories, GEO entity graphs, and offline-tracked paid search that generate SQLs.',
    indianMarketContext: 'Whether selling HR/payroll software to Indian mid-market firms or DevOps/API platforms to North American and European engineering teams, SaaS buyers evaluate security compliance (SOC2, ISO, DPDP Act), integration ecosystems, and transparent pricing before booking a demo.',
    challenges: [
      {
        title: 'High Traffic on Glossary Posts with Zero Demo Requests',
        detail: 'Ranking for broad definitional terms brings student traffic while high-intent "[Competitor] alternatives" and "[Use Case] software" queries go uncaptured.'
      },
      {
        title: 'Missing Visibility in AI-Powered Software Evaluations',
        detail: 'Technical buyers increasingly use conversational AI search to shortlist SaaS tools by integration support, API limits, and compliance certifications.'
      },
      {
        title: 'High Paid Search CPCs with Unqualified Free-Email Signups',
        detail: 'Bidding on generic software terms without work-email validation and CRM SQL feedback drains budget on non-commercial users.'
      },
      {
        title: 'Disconnected Documentation & Marketing Architecture',
        detail: 'Product docs, API references, and integration pages sit on isolated subdomains that fail to pass SEO authority to core commercial product pages.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Generative Engine Optimization (GEO)',
        serviceSlug: '/services/geo-optimization/',
        whyRelevant: 'Structures software capability matrices, compliance specs, and SoftwareApplication schema for AI-assisted vendor shortlisting.'
      },
      {
        serviceName: 'Search Engine Optimization',
        serviceSlug: '/services/seo-services/',
        whyRelevant: 'Captures commercial feature, industry use-case, integration, and competitor alternative search queries.'
      },
      {
        serviceName: 'PPC Management (Google, Bing & LinkedIn)',
        serviceSlug: '/services/ppc-management/',
        whyRelevant: 'Combines high-intent search capture on Google/Bing with role-based LinkedIn retargeting for multi-stakeholder buying committees.'
      },
      {
        serviceName: 'Conversion Rate Optimization',
        serviceSlug: '/services/conversion-rate-optimization/',
        whyRelevant: 'Optimizes interactive product tours, pricing page clarity, and demo scheduling flows.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Bottom-of-Funnel Solution & Comparison Architecture',
        description: 'We build dedicated pages for every core product module, industry vertical, ERP/CRM integration, and ethical competitor comparison.'
      },
      {
        step: '02',
        title: 'Entity Clarity & Technical Documentation SEO',
        description: 'We consolidate subdomain authority, implement SoftwareApplication JSON-LD, and structure clear capability tables.'
      },
      {
        step: '03',
        title: 'Work-Email Validated Demo Funnels',
        description: 'We streamline demo and trial signups with corporate domain validation and instant calendar routing.'
      },
      {
        step: '04',
        title: 'SQL & Pipeline Attribution (HubSpot / Salesforce)',
        description: 'Every organic landing page and paid keyword is tracked down to MQL, SQL, and Closed-Won ARR in your CRM.'
      }
    ],
    kpisAndMeasurement: [
      'Non-Branded Organic Demo & Trial Signups',
      'Cost Per Sales-Qualified Opportunity (CPSQO)',
      'Pipeline-to-Paid-Spend Ratio',
      'Visibility Across Integration & Alternative Queries'
    ],
    exampleOutcome: {
      segment: 'B2B Supply Chain & WMS SaaS (Bengaluru)',
      challenge: 'Low visibility for technical ERP integration and warehouse automation queries.',
      solution: 'Built 18 integration and use-case pages with structured comparison tables and SoftwareApplication schema.',
      result: '+112% growth in technical evaluation impressions and +38% increase in qualified enterprise demo bookings.'
    },
    faqs: [
      {
        question: 'Can you help our India-based SaaS company target US, UK, and APAC markets?',
        answer: 'Yes. Over half of our B2B SaaS engagements involve targeting international enterprise buyers in North America, Europe, the Middle East, and APAC alongside domestic Indian enterprise segments, including proper regional keyword research and hreflang setup where required.'
      },
      {
        question: 'How do you handle competitor comparison ("Alternative to X") pages ethically?',
        answer: 'We build factual, verifiable comparison tables highlighting architectural differences, deployment models, local support availability, and pricing structures without making disparaging or unsubstantiated claims.'
      }
    ]
  },
  {
    id: 'fintech',
    number: '03',
    slug: '/industries/fintech/',
    name: 'Fintech, BFSI & Financial Services',
    h1: 'Compliant Digital Marketing, Technical SEO & GEO for Fintech & BFSI in India',
    titleTag: 'Fintech Marketing & SEO Agency India | BFSI — Siri Solutions',
    metaDescription: 'High-trust organic search, E-E-A-T content architecture, and compliant paid acquisition for Indian fintech, lending, wealth management, and insurance brands.',
    primaryKeyword: 'fintech marketing agency India',
    secondaryKeywords: ['BFSI digital marketing India', 'fintech SEO services India', 'financial services content marketing', 'YMYL SEO specialist India'],
    searchIntent: 'Commercial — Fintech, NBFC, wealth management, and insurance teams seeking compliant organic and paid growth',
    targetAudience: 'Fintech startups, NBFCs, wealth platforms, payment gateways, and insurance brokers across Mumbai, Bengaluru, Delhi NCR, and Hyderabad',
    imageKey: 'seoAuditDesk',
    heroLead: 'Financial services fall under Google’s strict YMYL (Your Money Your Life) quality guidelines and Indian regulatory oversight (RBI, SEBI, IRDAI). We engineer authoritative, transparent content ecosystems, interactive financial calculators, and compliant paid acquisition funnels.',
    indianMarketContext: 'Indian retail and SME financial customers compare interest rates, processing fees, GST compliance, and regulatory credentials rigorously. Building trust requires explicit fee transparency, verified author attribution, and fast mobile onboarding.',
    challenges: [
      {
        title: 'Strict Google YMYL & E-E-A-T Algorithmic Scrutiny',
        detail: 'Financial pages lacking verifiable subject-matter review, regulatory disclosures, and institutional trust signals are suppressed during core search updates.'
      },
      {
        title: 'JavaScript Calculator & Portal Indexing Failures',
        detail: 'EMI, SIP, GST, and eligibility calculators built as client-only widgets often fail to index or suffer from sluggish mobile Interaction to Next Paint (INP).'
      },
      {
        title: 'Ad Policy Restrictions & High Competitive CPCs',
        detail: 'Google and Meta enforce strict Financial Services Verification policies in India; non-compliant ad copy or landing page disclosures trigger account disapprovals.'
      },
      {
        title: 'High Drop-Off Between Application Start and KYC Completion',
        detail: 'Friction-heavy mobile forms and unclear document checklists cause qualified borrowers or investors to abandon mid-funnel.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Technical SEO Services',
        serviceSlug: '/services/technical-seo/',
        whyRelevant: 'Ensures financial calculators, dynamic rate tables, and product pages render fast, crawlable server-side HTML.'
      },
      {
        serviceName: 'Content Marketing',
        serviceSlug: '/services/content-marketing/',
        whyRelevant: 'Produces Chartered Accountant (CA) and financial-analyst-reviewed guides with explicit regulatory citations.'
      },
      {
        serviceName: 'Generative Engine Optimization (GEO)',
        serviceSlug: '/services/geo-optimization/',
        whyRelevant: 'Structures eligibility criteria, fee schedules, and FinancialProduct schema for accurate retrieval.'
      },
      {
        serviceName: 'Conversion Rate Optimization',
        serviceSlug: '/services/conversion-rate-optimization/',
        whyRelevant: 'Streamlines calculator-to-application transitions and multi-step onboarding flows.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Programmatic & Interactive Calculator SEO',
        description: 'We engineer fast, indexable financial calculators and comparison tools paired with clear explanatory documentation.'
      },
      {
        step: '02',
        title: 'E-E-A-T Author & Regulatory Governance',
        description: 'Every article and product page includes verified author/reviewer credentials, publication timestamps, and mandatory RBI/SEBI/IRDAI disclaimers.'
      },
      {
        step: '03',
        title: 'G2 Financial Verification & Compliant Paid Search',
        description: 'We assist with Google Ads Financial Services Verification in India and structure compliant, high-intent search campaigns.'
      },
      {
        step: '04',
        title: 'Mid-Funnel Onboarding Optimization',
        description: 'Reducing friction across mobile OTP verification, eligibility checks, and document upload steps.'
      }
    ],
    kpisAndMeasurement: [
      'Organic Application Starts from Non-Branded Queries',
      'Calculator-to-Lead Conversion Rate',
      'Cost Per Verified KYC / Approved Application',
      'Core Web Vitals Pass Rate on Mobile Calculators'
    ],
    exampleOutcome: {
      segment: 'Fintech Lending & Mutual Fund Portal (Mumbai)',
      challenge: '65% of calculator pages dropped from Google index after a client-side SPA update.',
      solution: 'Deployed route pre-rendering, FinancialProduct schema, and mobile INP optimization.',
      result: '100% index restoration in 3 weeks and +52% growth in organic application starts.'
    },
    faqs: [
      {
        question: 'How do you handle Google’s Financial Services Verification for Google Ads in India?',
        answer: 'Google requires advertisers promoting financial products in India to complete G2 verification proving authorization by relevant regulators (such as RBI, SEBI, or IRDAI) or qualifying exemptions. We guide your compliance team through the exact documentation and landing page disclosure requirements.'
      },
      {
        question: 'How do you build E-E-A-T for financial blog and product content?',
        answer: 'We never publish anonymous financial advice. We pair our content strategists with your internal financial experts or chartered accountants, display verifiable reviewer bios with Person schema, cite official regulatory circulars, and maintain transparent fee/term tables.'
      }
    ]
  },
  {
    id: 'ecommerce',
    number: '04',
    slug: '/industries/ecommerce/',
    name: 'E-commerce & D2C Retail Brands',
    h1: 'E-commerce & D2C Digital Marketing, SEO & ROAS Optimization in India',
    titleTag: 'Ecommerce & D2C Marketing Agency India — Siri Solutions',
    metaDescription: 'Scale profitable D2C e-commerce revenue in India. Collection SEO, Google Shopping & Meta CAPI campaigns, and checkout conversion optimization.',
    primaryKeyword: 'ecommerce digital marketing agency India',
    secondaryKeywords: ['D2C marketing agency India', 'ecommerce SEO company India', 'Google Shopping and Meta ads D2C', 'Shopify CRO agency India'],
    searchIntent: 'Commercial — D2C founders and e-commerce heads looking to improve MER, ROAS, and organic sales',
    targetAudience: 'D2C brands in apparel, home/ergonomics, personal care, electronics, and specialty retail across India',
    imageKey: 'enterpriseOffice',
    heroLead: 'Growing an Indian D2C brand solely on paid social ads often leads to shrinking contribution margins and high Cash-on-Delivery RTO losses. We balance your acquisition mix by scaling organic collection rankings, optimizing Google Shopping feeds, and improving prepaid checkout rates.',
    indianMarketContext: 'Indian online shoppers compare prices across marketplaces and direct brand stores, care deeply about pin-code delivery timelines, and increasingly adopt UPI for instant checkout when trust signals are clear.',
    challenges: [
      {
        title: 'Over-Reliance on Paid Ads with Rising CPMs',
        detail: 'When 80%+ of sales depend on Meta and Google ads, seasonal auction spikes immediately compress net profitability.'
      },
      {
        title: 'Under-Optimized Collection Trees & Faceted Bloat',
        detail: 'Default Shopify and WooCommerce setups miss high-intent sub-category search demand while indexing thousands of useless filter parameter URLs.'
      },
      {
        title: 'High COD Return-to-Origin (RTO) Eroding ROAS',
        detail: 'Ad campaigns optimized for gross checkout completions without factoring in COD cancellations or prepaid UPI incentives overstate real ROAS.'
      },
      {
        title: 'Slow Mobile Product Pages from Third-Party App Bloat',
        detail: 'Stacking 25+ unoptimized review, loyalty, popup, and chat scripts pushes mobile load times past 5 seconds and hurts add-to-cart rates.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'E-commerce SEO Services',
        serviceSlug: '/services/ecommerce-seo/',
        whyRelevant: 'Expands search-driven sub-collections, cleans up faceted filter bloat, and deploys Merchant Listing Product schema.'
      },
      {
        serviceName: 'Meta Ads Management',
        serviceSlug: '/services/meta-ads/',
        whyRelevant: 'Combines systematic video/carousel creative testing with Server-Side CAPI and dynamic catalog campaigns.'
      },
      {
        serviceName: 'Google Ads Management',
        serviceSlug: '/services/google-ads/',
        whyRelevant: 'Structures margin-segmented Google Shopping, Performance Max, and non-branded search capture.'
      },
      {
        serviceName: 'Conversion Rate Optimization',
        serviceSlug: '/services/conversion-rate-optimization/',
        whyRelevant: 'Lifts PDP add-to-cart rates, streamlines slide-out cart drawers, and incentivizes prepaid UPI checkouts.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Sub-Collection & Merchant Schema Expansion',
        description: 'We build indexable category pages around use-case, material, and price modifiers supported by rich INR Product schema.'
      },
      {
        step: '02',
        title: 'Margin-Tiered Shopping & CAPI Architecture',
        description: 'We segment ad campaigns by product gross margin and inventory depth, backed by server-side purchase tracking.'
      },
      {
        step: '03',
        title: 'Script Cleanup & Mobile PDP Speed',
        description: 'We audit and remove redundant storefront scripts to achieve sub-2.5s mobile Largest Contentful Paint.'
      },
      {
        step: '04',
        title: 'Prepaid Checkout & Cart Retention UX',
        description: 'Clear pin-code delivery estimators, transparent return policies, and UPI prepaid trust cues.'
      }
    ],
    kpisAndMeasurement: [
      'Marketing Efficiency Ratio (MER — Total Revenue / Total Ad Spend)',
      'Non-Branded Organic Collection & PDP Revenue',
      'Net Delivered ROAS (Post-RTO/Returns)',
      'Mobile Add-to-Cart & Prepaid Checkout Share'
    ],
    exampleOutcome: {
      segment: 'D2C Ergonomic Furniture Brand (Bengaluru — Pan-India)',
      challenge: '85% reliance on paid ads and 3,200 duplicate filter URLs hurting organic rankings.',
      solution: 'Cleaned parameter bloat, launched 28 sub-collections, and restructured Shopping/Meta CAPI.',
      result: '+192% non-branded organic revenue growth and 29% reduction in blended store CAC in 6 months.'
    },
    faqs: [
      {
        question: 'How do you help reduce Cash-on-Delivery (COD) RTO through digital marketing?',
        answer: 'We tackle RTO at both the ad and storefront levels: excluding historically high-RTO pin codes or low-intent placements in paid campaigns, highlighting transparent UPI prepaid incentives in the cart drawer, and triggering automated WhatsApp order confirmation flows.'
      },
      {
        question: 'Can you optimize our store without breaking our existing Shopify or WooCommerce theme?',
        answer: 'Yes. All technical SEO, schema, speed, and CRO updates are developed and tested on a duplicated staging theme before being merged into your live storefront.'
      }
    ]
  },
  {
    id: 'healthcare',
    number: '05',
    slug: '/industries/healthcare/',
    name: 'Healthcare, Hospitals & Specialty Clinics',
    h1: 'Healthcare Digital Marketing & Local SEO Agency in India for Hospitals & Clinics',
    titleTag: 'Healthcare Digital Marketing Agency India | Hospital SEO',
    metaDescription: 'Patient-first digital marketing for Indian hospitals, specialty clinics, and diagnostic networks. Clinician-reviewed SEO, multi-branch Local SEO, and Google Ads.',
    primaryKeyword: 'healthcare digital marketing agency India',
    secondaryKeywords: ['hospital SEO services India', 'medical clinic local SEO', 'doctor appointment lead generation', 'healthcare Google Ads India'],
    searchIntent: 'Commercial — Hospital administrators, clinic founders, and healthcare marketing heads seeking patient appointments',
    targetAudience: 'Multi-specialty hospitals, IVF/fertility centers, dental/eye chains, dermatology clinics, and diagnostic labs across India',
    imageKey: 'seoAuditDesk',
    heroLead: 'Patients searching for symptoms, specialist doctors, or surgical procedures in their city need accurate, empathetic medical information and an immediate way to book an appointment or call your reception desk.',
    indianMarketContext: 'Healthcare discovery in India is hyper-local and mobile-first. Patients evaluate doctor qualifications, hospital accreditations (NABH/NABL), insurance/TPA cashless coverage, neighbourhood proximity on Google Maps, and verified patient reviews before choosing a provider.',
    challenges: [
      {
        title: 'Fragmented Branch & Doctor Google Business Profiles',
        detail: 'Hospitals and multi-clinic chains frequently suffer from unverified practitioner pins, wrong reception phone numbers, and listings linking to broken URLs.'
      },
      {
        title: 'Thin Department Pages Lacking Medical E-E-A-T',
        detail: 'Medical pages written by generic copywriters without doctor review or clear treatment FAQs fail to rank under Google’s strict healthcare quality standards.'
      },
      {
        title: 'Clunky Appointment Portals That Lose Urgent Patients',
        detail: 'Forcing an anxious patient on a mobile phone through a 7-step registration portal instead of offering 1-tap click-to-call or WhatsApp callback loses appointments.'
      },
      {
        title: 'Healthcare Advertising Policy Disapprovals',
        detail: 'Running paid ads for sensitive medical procedures or diagnostics without compliant landing page copy and regulatory adherence leads to ad disapprovals.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Local SEO Services',
        serviceSlug: '/services/local-seo/',
        whyRelevant: 'Governs hospital branch and individual specialist Google Business Profiles across every city neighborhood.'
      },
      {
        serviceName: 'Search Engine Optimization',
        serviceSlug: '/services/seo-services/',
        whyRelevant: 'Builds clinician-reviewed Center of Excellence, procedure, symptom, and doctor profile silos with MedicalOrganization schema.'
      },
      {
        serviceName: 'Google Ads Management',
        serviceSlug: '/services/google-ads/',
        whyRelevant: 'Captures high-urgency specialist and diagnostic search queries with immediate call extensions and appointment landing pages.'
      },
      {
        serviceName: 'Landing Page Development',
        serviceSlug: '/services/landing-page-development/',
        whyRelevant: 'Creates fast, empathetic procedure pages displaying doctor credentials, cashless insurance details, and instant callback forms.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Department, Procedure & Doctor URL Architecture',
        description: 'We structure clear silos connecting Centers of Excellence -> Specific Procedures -> Individual Specialist Profiles -> Branch Locations.'
      },
      {
        step: '02',
        title: 'Clinician-Reviewed E-E-A-T Content Governance',
        description: 'Every medical page clearly states the reviewing doctor’s qualifications, registration details, last medical review date, and patient FAQs.'
      },
      {
        step: '03',
        title: 'Hyperlocal GBP & Map Pack Dominance',
        description: 'We standardize branch and practitioner listings, appointment links, and ethical post-consultation review workflows.'
      },
      {
        step: '04',
        title: 'Frictionless Mobile Call & Appointment Tracking',
        description: 'Every call click, WhatsApp enquiry, and form booking is attributed by department and branch.'
      }
    ],
    kpisAndMeasurement: [
      'Booked Outpatient & Surgical Consultations by Department',
      'Direct Phone Calls & Direction Clicks from Google Maps',
      'Non-Branded Organic Visibility for Procedure & Specialist Queries',
      'Cost Per Booked Patient Appointment (Google Ads)'
    ],
    exampleOutcome: {
      segment: 'Multi-City Fertility & Specialty Network (Chennai, Bengaluru, Hyderabad)',
      challenge: 'Low 2.9% paid landing page conversion rate and fragmented clinic map listings.',
      solution: 'Launched clinician-led city procedure pages and consolidated 8 clinic GBP profiles with UTM call tracking.',
      result: 'Paid landing page CVR rose to 8.7% (-58% Cost Per Consultation) and Google Maps direct clinic calls grew +118%.'
    },
    faqs: [
      {
        question: 'How do you ensure medical content is accurate and compliant with Indian guidelines?',
        answer: 'We follow strict healthcare editorial standards (including National Medical Commission ethical norms): no sensationalized cure guarantees, no fabricated patient stories, and mandatory sign-off by your qualified clinical specialists before publication.'
      },
      {
        question: 'Should individual doctors have their own pages on our hospital website?',
        answer: 'Yes. Patients frequently search for doctors by name alongside their specialty and city. Dedicated, well-structured doctor profile pages with qualifications, OP timings, and direct booking forms rank strongly and build institutional E-E-A-T.'
      }
    ]
  },
  {
    id: 'education',
    number: '06',
    slug: '/industries/education/',
    name: 'Education, Universities & EdTech',
    h1: 'Education & EdTech Digital Marketing, SEO & Student Acquisition Agency in India',
    titleTag: 'Education & EdTech Marketing Agency India — Siri Solutions',
    metaDescription: 'Drive qualified student applications and counselor bookings for Indian universities, executive programs, and EdTech platforms via SEO and paid search.',
    primaryKeyword: 'education digital marketing agency India',
    secondaryKeywords: ['EdTech SEO agency India', 'student enrollment lead generation', 'university digital marketing India', 'course page optimization'],
    searchIntent: 'Commercial — Admissions directors, university marketers, and EdTech growth teams seeking qualified student enrollments',
    targetAudience: 'Private universities, B-schools, professional certification institutes, and EdTech platforms across India',
    imageKey: 'enterpriseOffice',
    heroLead: 'Student and parent decision journeys in India revolve around curriculum credibility, placement outcomes, fee transparency, and seasonal admission deadlines. We build evergreen course-catalog SEO and high-intent admission funnels that deliver counselor-ready enquiries.',
    indianMarketContext: 'Whether prospective learners are evaluating an executive PG program, a degree university, or a technical certification, they compare syllabus depth, faculty credentials, accreditation (UGC/AICTE/NAAC), and career outcomes across months of research.',
    challenges: [
      {
        title: 'Seasonal Admission Spikes with High Paid Ad Competition',
        detail: 'Relying only on Google and Meta ads during peak March–July admission windows exposes institutions to skyrocketing CPCs.'
      },
      {
        title: 'Duplicate Cohort & Campus Course URLs',
        detail: 'Creating new URLs for every batch year (e.g., `/mba-admissions-2025`, `/mba-admissions-2026`) resets organic ranking authority every 12 months.'
      },
      {
        title: 'Low Counselor Connect Rates from Unqualified Forms',
        detail: 'Brochure gates that capture unverified phone numbers without checking educational eligibility overburden admissions counselors.'
      },
      {
        title: 'Thin Course Pages Missing Syllabus & Outcome Data',
        detail: 'Course pages that hide curriculum modules, fee structures, and faculty details behind forced PDF downloads perform poorly in both search and AI discovery.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Search Engine Optimization',
        serviceSlug: '/services/seo-services/',
        whyRelevant: 'Establishes evergreen canonical course URLs and career-outcome topic clusters that rank year-round.'
      },
      {
        serviceName: 'SEO Audit Services',
        serviceSlug: '/services/seo-audit/',
        whyRelevant: 'Consolidates duplicate batch/campus URLs and prunes thin informational blog bloat.'
      },
      {
        serviceName: 'PPC Management',
        serviceSlug: '/services/ppc-management/',
        whyRelevant: 'Coordinates Google Search, YouTube program walkthroughs, and remarketing aligned with application deadlines.'
      },
      {
        serviceName: 'Landing Page Development',
        serviceSlug: '/services/landing-page-development/',
        whyRelevant: 'Builds fast program pages with interactive syllabus accordions, eligibility checks, and instant counselor scheduling.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Evergreen Course Architecture & Course Schema',
        description: 'We maintain permanent, authority-accumulating URLs for each program enriched with Schema.org Course and EducationalOrganization markup.'
      },
      {
        step: '02',
        title: 'Career-Path & Comparison Content Clusters',
        description: 'We publish transparent career guides, role roadmaps, and program comparison matrices that link directly to relevant courses.'
      },
      {
        step: '03',
        title: 'Eligibility-Filtered Admission Funnels',
        description: 'Forms capture current qualification/work experience and preferred intake so counselors prioritize eligible applicants.'
      },
      {
        step: '04',
        title: 'CRM Enrollment Attribution (Meritto / NoPaperForms / LeadSquared)',
        description: 'Full tracking from initial organic or paid click through counselor call, application fee payment, and final enrollment.'
      }
    ],
    kpisAndMeasurement: [
      'Cost Per Qualified Application & Enrolled Student',
      'Lead-to-Counselor-Connect Rate',
      'Non-Branded Organic Course Page Enquiries',
      'Syllabus & Brochure Download-to-Application Ratio'
    ],
    exampleOutcome: {
      segment: 'EdTech Upskilling & Executive Certification Platform (Delhi NCR)',
      challenge: '44% organic traffic drop caused by 1,800 thin blog posts and 19 duplicate URLs per course.',
      solution: 'Consolidated duplicate course URLs, pruned thin posts, and restructured core program pages.',
      result: '+88% recovery in organic course impressions and +47% increase in counselor call bookings in 8 weeks.'
    },
    faqs: [
      {
        question: 'How should we handle annual admission pages without losing SEO rankings every year?',
        answer: 'Never create a brand-new URL slug with the year in it (like `/admissions-2026/`) as your primary ranking page. Instead, keep a permanent evergreen URL (`/admissions/` or `/programs/data-science/`) and update the H1, title tag, and intake dates dynamically each cycle.'
      },
      {
        question: 'Can you integrate with education CRMs like Meritto (formerly NoPaperForms) or LeadSquared?',
        answer: 'Yes. We integrate landing pages and paid lead forms directly with education CRMs so lead source, keyword, and eligibility answers map cleanly to counselor queues.'
      }
    ]
  },
  {
    id: 'hospitality',
    number: '07',
    slug: '/industries/hospitality/',
    name: 'Hospitality, Hotels, Resorts & Travel',
    h1: 'Hospitality & Hotel Digital Marketing Agency in India to Grow Direct Bookings',
    titleTag: 'Hospitality & Hotel Digital Marketing India — Siri Solutions',
    metaDescription: 'Increase commission-free direct bookings, wedding/banquet enquiries, and local discovery for Indian hotels, resorts, and hospitality brands.',
    primaryKeyword: 'hospitality digital marketing agency India',
    secondaryKeywords: ['hotel SEO services India', 'direct hotel booking marketing', 'resort Google Ads and social media', 'banquet and MICE lead generation'],
    searchIntent: 'Commercial — Hotel owners, resort GMs, and hospitality marketing heads looking to increase direct bookings and event enquiries',
    targetAudience: 'Boutique hotels, luxury resorts, business hotel chains, banquet venues, and experiential travel operators in India',
    imageKey: 'heroWorkspace',
    heroLead: 'Third-party OTAs charge 18% to 25% commission on every room night—often by bidding on your own hotel’s brand name in search results. We help hospitality brands reclaim direct booking share, rank for destination and event queries, and convert high-margin MICE and wedding enquiries.',
    indianMarketContext: 'Domestic leisure travel, destination weddings, and corporate offsites (MICE) across India have surged. Guests discover properties on Instagram and Google Maps, compare OTA rates against your direct website, and frequently enquire via WhatsApp for group or event bookings.',
    challenges: [
      {
        title: 'OTA Brand-Bidding Cannibalizing Direct Bookings',
        detail: 'When a guest searches your property name on Google, OTAs outrank or outbid your official website and charge a 20% commission on a guest you already earned.'
      },
      {
        title: 'Slow, Clunky Booking Engine Transitions on Mobile',
        detail: 'Guests clicking "Book Now" on mobile encounter slow third-party booking widgets that lose selected dates or hide best-rate guarantees.'
      },
      {
        title: 'Missed High-Margin Wedding, Banquet & Corporate Offsite Demand',
        detail: 'Properties often bury their banquet capacity, lawn dimensions, and corporate retreat packages in a single generic paragraph.'
      },
      {
        title: 'Under-Leveraged Google Business Profile & Local Pack Presence',
        detail: 'Outdated guest room photos, missing amenity attributes, and untracked direct reservation links on Google Maps leak local demand.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Local SEO Services',
        serviceSlug: '/services/local-seo/',
        whyRelevant: 'Optimizes property Google Business Profiles, amenity attributes, authentic photography, and direct booking links.'
      },
      {
        serviceName: 'Search Engine Optimization',
        serviceSlug: '/services/seo-services/',
        whyRelevant: 'Builds dedicated destination, staycation, wedding venue, and corporate MICE landing pages.'
      },
      {
        serviceName: 'Google Ads Management',
        serviceSlug: '/services/google-ads/',
        whyRelevant: 'Protects branded search share from OTAs and captures high-intent destination, banquet, and resort queries.'
      },
      {
        serviceName: 'Website Design & Development',
        serviceSlug: '/services/website-design/',
        whyRelevant: 'Showcases authentic architectural photography with fast mobile room selection and seamless booking engine handoff.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Direct Booking Parity & Brand Protection',
        description: 'We highlight clear "Book Direct" perks on your website and run disciplined brand-defense and destination search campaigns.'
      },
      {
        step: '02',
        title: 'Dedicated Wedding, Banquet & MICE Funnels',
        description: 'We create detailed venue pages with seating capacity tables, catering options, and instant event-planner WhatsApp/call capture.'
      },
      {
        step: '03',
        title: 'Destination & Experiential Content SEO',
        description: 'We publish curated local travel guides, seasonal itineraries, and staycation pages that attract leisure travelers early in their planning.'
      },
      {
        step: '04',
        title: 'Booking Engine & GA4 E-commerce Tracking',
        description: 'Cross-domain tracking between your property website and reservation engine (SynXis, Staah, AxisRooms, DJUBO) to measure true direct ROAS.'
      }
    ],
    kpisAndMeasurement: [
      'Direct Website Room-Night Bookings & Revenue (INR)',
      'Direct-to-OTA Booking Share Ratio',
      'Qualified Wedding, Banquet & Corporate MICE Enquiries',
      'Google Business Profile Direct Call & Booking Clicks'
    ],
    exampleOutcome: {
      segment: 'Boutique Heritage & Leisure Resort Group (Goa & Coorg)',
      challenge: '76% of room bookings came through high-commission OTAs; corporate offsite pages had zero organic visibility.',
      solution: 'Rebuilt room and MICE venue pages, implemented cross-domain Staah booking tracking, and launched direct-perk search + Instagram remarketing.',
      result: 'Direct website booking share increased from 24% to 43% within 5 months, saving ₹28L+ in annualized OTA commissions.'
    },
    faqs: [
      {
        question: 'Can you track completed room bookings across third-party hotel booking engines?',
        answer: 'Yes. We configure cross-domain GA4 and Google Ads conversion tracking across major hospitality booking engines used in India (including STAAH, AxisRooms, eZee, and SynXis) so you see exact room revenue generated per campaign.'
      },
      {
        question: 'How do we generate more corporate offsite and destination wedding leads?',
        answer: 'Event planners and HR teams search with specific capacity and location constraints (e.g., "150 guest residential wedding resort near Bengaluru"). We build dedicated venue pages with exact hall/lawn specifications, downloadable fact sheets, and fast inquiry forms.'
      }
    ]
  },
  {
    id: 'local-businesses',
    number: '08',
    slug: '/industries/local-businesses/',
    name: 'Multi-Location & Regional Service Businesses',
    h1: 'Digital Marketing & Local Lead Generation for Indian SMEs & Service Businesses',
    titleTag: 'Local Business Digital Marketing India — Siri Solutions',
    metaDescription: 'Practical, ROI-focused SEO, Google Maps optimization, Google Ads, and fast websites for Indian SMEs, B2B manufacturers, and professional service firms.',
    primaryKeyword: 'digital marketing for local businesses India',
    secondaryKeywords: ['SME digital marketing agency India', 'local service lead generation', 'B2B manufacturer SEO India', 'professional services web design'],
    searchIntent: 'Commercial — Regional service firms, B2B manufacturers, legal/CA firms, and home/commercial service providers',
    targetAudience: 'Established SMEs, industrial manufacturers, interior design studios, solar EPCs, and professional practices across India',
    imageKey: 'webEngineeringCollab',
    heroLead: 'Regional service providers and B2B manufacturers do not need vanity social media likes or bloated enterprise retainers. You need a fast, credible website, top visibility when buyers search your service + city, and tracked phone and WhatsApp enquiries.',
    indianMarketContext: 'Across Indian commercial hubs, B2B procurement officers and residential customers alike verify a vendor’s website, Google Maps rating, project portfolio, and GST/business credentials before requesting a quotation.',
    challenges: [
      {
        title: 'Dependence on Shared Lead Directories (IndiaMART / Justdial)',
        detail: 'Buying shared directory leads pits you in a race-to-the-bottom price war against 8 other vendors who received the exact same enquiry.'
      },
      {
        title: 'Outdated "Brochure" Websites That Do Not Generate Calls',
        detail: 'Many established businesses have a 5-page website built years ago that lacks dedicated service pages, mobile click-to-call, or proof of completed work.'
      },
      {
        title: 'Wasted Ad Spend on Broad Geographic Radii',
        detail: 'Running poorly configured Google or Facebook ads without strict city/pin-code boundaries brings enquiries from regions you cannot profitably serve.'
      },
      {
        title: 'Zero Visibility into Which Marketing Channel Works',
        detail: 'When phone calls, WhatsApp messages, and contact forms are untracked, business owners cannot tell whether SEO or ads produced their best customers.'
      }
    ],
    recommendedServices: [
      {
        serviceName: 'Website Development',
        serviceSlug: '/services/website-development/',
        whyRelevant: 'Replaces outdated brochure sites with a fast, mobile-first website containing dedicated pages for every core service and product.'
      },
      {
        serviceName: 'Local SEO Services',
        serviceSlug: '/services/local-seo/',
        whyRelevant: 'Captures exclusive, high-intent Google Maps and city-specific search enquiries.'
      },
      {
        serviceName: 'Google Ads Management',
        serviceSlug: '/services/google-ads/',
        whyRelevant: 'Delivers immediate inbound calls and quote requests from buyers searching in your exact service area.'
      },
      {
        serviceName: 'Conversion Rate Optimization',
        serviceSlug: '/services/conversion-rate-optimization/',
        whyRelevant: 'Adds progressive quote estimators, real project galleries, and 1-tap phone/WhatsApp actions.'
      }
    ],
    strategyPillars: [
      {
        step: '01',
        title: 'Own Your Exclusive Lead Engine',
        description: 'We build dedicated service and product specification pages on your own domain so buyers enquire exclusively with your team.'
      },
      {
        step: '02',
        title: 'Service-Area & Pin-Code Precision',
        description: 'We align both your Local SEO footprint and Google Ads location targeting strictly to the cities or industrial corridors you serve.'
      },
      {
        step: '03',
        title: 'Authentic Proof & Project Documentation',
        description: 'We showcase genuine photographs of your facility, completed installations, and client testimonials rather than stock imagery.'
      },
      {
        step: '04',
        title: 'Simple, Transparent Call & WhatsApp Tracking',
        description: 'Clear monthly reporting showing exact phone calls, WhatsApp chats, and quotation forms generated.'
      }
    ],
    kpisAndMeasurement: [
      'Exclusive Inbound Phone Calls & WhatsApp Enquiries',
      'Completed Request-for-Quote (RFQ) Submissions',
      'Local 3-Pack & City Keyword Rankings',
      'Cost Per Exclusive Lead vs. Shared Directory Leads'
    ],
    exampleOutcome: {
      segment: 'Commercial Solar EPC & Energy Storage Provider (Pune & Maharashtra)',
      challenge: '82% mobile abandonment on an outdated 9-field quote form and heavy reliance on shared directory leads.',
      solution: 'Rebuilt service pages with a 3-step progressive bill estimator, project gallery, and 1-tap WhatsApp connect.',
      result: '+94% increase in exclusive commercial solar enquiries within 60 days.'
    },
    faqs: [
      {
        question: 'We are an established offline business with very little digital presence. Where should we start?',
        answer: 'Start with the foundation: a fast, SEO-architected website that clearly explains each of your services with real project photos, paired with a verified Google Business Profile. Once your site converts visitors cleanly, we layer on Local SEO and targeted Google Search Ads.'
      },
      {
        question: 'How is generating leads on our own website better than buying leads from directories?',
        answer: 'Directory leads are sold simultaneously to 5 to 10 competitors, forcing you to compete solely on the lowest price. When a prospect finds your website through organic search or Google Ads and views your case studies, they enquire exclusively with your company.'
      }
    ]
  }
];

export const getIndustryBySlug = (slug: string): IndustryPageData | undefined => {
  const normalized = slug.endsWith('/') ? slug : `${slug}/`;
  return INDUSTRIES_DATA.find((i) => i.slug === normalized);
};
