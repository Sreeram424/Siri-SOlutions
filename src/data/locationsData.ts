export interface CityServicePillar {
  id: 'seo' | 'digital-marketing' | 'web-development' | 'google-ads';
  title: string;
  targetKeyword: string;
  summary: string;
  localStrategyPoints: string[];
  linkedCoreServiceSlug: string;
}

export interface LocationPageData {
  id: string;
  city: string;
  state: string;
  slug: string;
  presenceType: 'Primary Headquarters & Delivery Studio' | 'Verified Service-Area & Client Delivery Hub';
  officeNote: string;
  h1: string;
  titleTag: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  targetAudience: string;
  imageKey: 'heroWorkspace' | 'seoAuditDesk' | 'webEngineeringCollab' | 'paidMediaSession' | 'enterpriseOffice';
  heroLead: string;
  marketOverview: string;
  commercialCorridors: string[];
  keyIndustriesServed: { name: string; slug: string }[];
  cityServicePillars: CityServicePillar[];
  localCaseHighlight: {
    sector: string;
    summary: string;
    metric: string;
  };
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS_DATA: LocationPageData[] = [
  {
    id: 'vijayawada',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    slug: '/locations/vijayawada/',
    presenceType: 'Primary Headquarters & Delivery Studio',
    officeNote: 'Verified Headquarters: Siri Solutions, Vijayawada, Andhra Pradesh, India · +91 77940 06495 · +971 52 699 0466',
    h1: 'Digital Marketing, SEO & Web Development Agency in Vijayawada',
    titleTag: 'Digital Marketing & SEO Agency in Vijayawada — Siri Solutions',
    metaDescription: 'Partner with Siri Solutions in Vijayawada, Andhra Pradesh for SEO, Google Ads, Social Media Marketing, and custom website development.',
    primaryKeyword: 'digital marketing agency in Vijayawada',
    secondaryKeywords: ['SEO company in Vijayawada', 'website development in Vijayawada', 'Google Ads agency Vijayawada'],
    searchIntent: 'Local Commercial — Vijayawada & Andhra Pradesh businesses seeking a local digital partner',
    targetAudience: 'Retail, healthcare, real estate, education, and commercial businesses in Vijayawada & AP',
    imageKey: 'heroWorkspace',
    heroLead: 'Based in Vijayawada, Andhra Pradesh, Siri Solutions delivers SEO, Google & Meta Ads, and high-converting websites for businesses across India.',
    marketOverview: 'Serving commercial hubs across Benz Circle, MG Road, Labbipet, Auto Nagar, and the Amaravati–Guntur capital region.',
    commercialCorridors: ['Benz Circle & MG Road', 'Labbipet & Governorpet', 'Auto Nagar Industrial Hub', 'Amaravati & Guntur Corridor'],
    keyIndustriesServed: [
      { name: 'Real Estate', slug: '/industries/real-estate/' },
      { name: 'Healthcare', slug: '/industries/healthcare/' },
      { name: 'Education', slug: '/industries/education/' },
      { name: 'Local Businesses', slug: '/industries/local-businesses/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Vijayawada',
        targetKeyword: 'SEO company in Vijayawada',
        summary: 'Local SEO, Google Business Profile optimization, and organic search growth.',
        localStrategyPoints: ['Google Maps ranking', 'On-page & technical SEO'],
        linkedCoreServiceSlug: '/services/seo-services/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Vijayawada',
        targetKeyword: 'digital marketing agency in Vijayawada',
        summary: '360° digital growth across search, social media, and paid campaigns.',
        localStrategyPoints: ['Full-funnel lead generation', 'Social media & content strategy'],
        linkedCoreServiceSlug: '/services/social-media-marketing/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Vijayawada',
        targetKeyword: 'website development in Vijayawada',
        summary: 'Fast, mobile-responsive websites and landing pages built to convert.',
        localStrategyPoints: ['Custom business websites', 'WhatsApp & CRM integration'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Vijayawada',
        targetKeyword: 'Google Ads agency in Vijayawada',
        summary: 'ROI-focused Search and Local campaigns driving immediate enquiries.',
        localStrategyPoints: ['Search & Call ads', 'Conversion tracking'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Andhra Pradesh Healthcare & Retail',
      summary: 'Increased direct phone calls and online bookings across regional branches.',
      metric: '+118% Direct Calls & Enquiries'
    },
    faqs: [
      {
        question: 'Where is Siri Solutions located?',
        answer: 'We are based in Vijayawada, Andhra Pradesh, India. Call us at +91 77940 06495 or +971 52 699 0466.'
      },
      {
        question: 'Can we schedule a free consultation?',
        answer: 'Yes. Contact us by phone (+91 77940 06495), WhatsApp (+971 52 699 0466), or our website form for a 30-minute strategy call.'
      }
    ]
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    slug: '/locations/hyderabad/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Headquartered in Vijayawada, Andhra Pradesh · Serving Hyderabad businesses across HITEC City, Madhapur, Gachibowli & Banjara Hills.',
    h1: 'Digital Marketing, SEO & Web Development Services in Hyderabad',
    titleTag: 'Digital Marketing & SEO Services in Hyderabad — Siri Solutions',
    metaDescription: 'Technical SEO, Google Ads, Local SEO, and custom website development for Hyderabad businesses.',
    primaryKeyword: 'digital marketing agency in Hyderabad',
    secondaryKeywords: ['SEO company in Hyderabad', 'website development in Hyderabad', 'Google Ads Hyderabad'],
    searchIntent: 'Local Commercial — Hyderabad businesses seeking SEO, Ads, and Web services',
    targetAudience: 'IT/SaaS firms, real estate developers, healthcare clinics, and SMEs in Hyderabad',
    imageKey: 'heroWorkspace',
    heroLead: 'We help Hyderabad technology firms, real estate developers, and healthcare networks scale search visibility and qualified leads.',
    marketOverview: 'Focused execution for businesses across HITEC City, Madhapur, Gachibowli, Banjara Hills, and Secunderabad.',
    commercialCorridors: ['HITEC City & Madhapur', 'Financial District & Gachibowli', 'Kokapet', 'Banjara Hills & Jubilee Hills'],
    keyIndustriesServed: [
      { name: 'Real Estate', slug: '/industries/real-estate/' },
      { name: 'Healthcare', slug: '/industries/healthcare/' },
      { name: 'B2B SaaS', slug: '/industries/saas/' },
      { name: 'Local Businesses', slug: '/industries/local-businesses/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Hyderabad',
        targetKeyword: 'SEO company in Hyderabad',
        summary: 'Technical SEO, Local Maps, and organic lead generation.',
        localStrategyPoints: ['Local SEO & GBP optimization', 'Technical & B2B SEO'],
        linkedCoreServiceSlug: '/services/seo-services/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Hyderabad',
        targetKeyword: 'digital marketing agency in Hyderabad',
        summary: 'Integrated SEO, PPC, and social media campaigns.',
        localStrategyPoints: ['Lead generation funnels', 'CRM conversion tracking'],
        linkedCoreServiceSlug: '/services/ppc-management/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Hyderabad',
        targetKeyword: 'website development in Hyderabad',
        summary: 'Fast corporate websites, microsites, and e-commerce stores.',
        localStrategyPoints: ['Mobile-first design', 'Fast Core Web Vitals'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Hyderabad',
        targetKeyword: 'Google Ads agency in Hyderabad',
        summary: 'Targeted Search and Performance Max campaigns.',
        localStrategyPoints: ['High-intent keyword targeting', 'ROI & CPL optimization'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Hyderabad Real Estate & B2B Tech',
      summary: 'Reduced cost per site visit by 54% and grew organic B2B RFQs by 164%.',
      metric: '-54% Cost Per Site Visit'
    },
    faqs: [
      {
        question: 'How do we get started in Hyderabad?',
        answer: 'Call us at +91 77940 06495 or WhatsApp +971 52 699 0466, or submit a request online for a free 30-minute consultation.'
      }
    ]
  },
  {
    id: 'bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    slug: '/locations/bengaluru/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Serving Bengaluru startups, SaaS companies, and D2C brands from our Andhra Pradesh studio.',
    h1: 'Digital Marketing, SEO & Web Development in Bengaluru',
    titleTag: 'SEO & Digital Marketing Services for Bengaluru — Siri Solutions',
    metaDescription: 'Technical SEO, GEO, Google Ads, and fast web development for Bengaluru SaaS startups, D2C brands, and enterprises.',
    primaryKeyword: 'SEO company in Bengaluru',
    secondaryKeywords: ['digital marketing Bengaluru', 'website development Bengaluru', 'Google Ads Bengaluru'],
    searchIntent: 'Local Commercial — Bengaluru SaaS, D2C, and enterprise teams',
    targetAudience: 'SaaS startups, D2C brands, and enterprises in Bengaluru',
    imageKey: 'webEngineeringCollab',
    heroLead: 'Technical SEO, GEO optimization, paid acquisition, and fast web development for Bengaluru SaaS, Fintech, and D2C brands.',
    marketOverview: 'Supporting growth teams across HSR Layout, Koramangala, Indiranagar, Whitefield, and ORR Bellandur.',
    commercialCorridors: ['HSR Layout & Koramangala', 'Indiranagar & CBD', 'ORR Bellandur', 'Whitefield'],
    keyIndustriesServed: [
      { name: 'B2B SaaS', slug: '/industries/saas/' },
      { name: 'E-commerce & D2C', slug: '/industries/ecommerce/' },
      { name: 'Fintech', slug: '/industries/fintech/' },
      { name: 'Real Estate', slug: '/industries/real-estate/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Bengaluru',
        targetKeyword: 'SEO company in Bengaluru',
        summary: 'Technical SEO, GEO, and content clusters for SaaS and D2C.',
        localStrategyPoints: ['SaaS & D2C organic growth', 'AI search optimization'],
        linkedCoreServiceSlug: '/services/seo-services/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Bengaluru',
        targetKeyword: 'digital marketing agency in Bengaluru',
        summary: 'Full-funnel paid media and content marketing.',
        localStrategyPoints: ['B2B demand generation', 'Meta CAPI & Google Ads'],
        linkedCoreServiceSlug: '/services/geo-optimization/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Bengaluru',
        targetKeyword: 'website development in Bengaluru',
        summary: 'High-speed marketing sites and conversion landing pages.',
        localStrategyPoints: ['Sub-2s load times', 'Clean React & CMS builds'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Bengaluru',
        targetKeyword: 'Google Ads agency in Bengaluru',
        summary: 'Search and Shopping campaigns tracked to revenue.',
        localStrategyPoints: ['Global & domestic search ads', 'CRM pipeline tracking'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Bengaluru D2C & B2B SaaS',
      summary: 'Grew non-branded organic revenue by +192% and SaaS demo bookings by +38%.',
      metric: '+192% Organic Revenue'
    },
    faqs: [
      {
        question: 'Do you work with Bengaluru startups remotely?',
        answer: 'Yes. We collaborate via Slack, weekly video sprints, and shared analytics dashboards.'
      }
    ]
  },
  {
    id: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    slug: '/locations/chennai/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Serving Chennai SaaS, industrial, and healthcare businesses.',
    h1: 'Digital Marketing, SEO & Web Development in Chennai',
    titleTag: 'Digital Marketing & SEO Services for Chennai — Siri Solutions',
    metaDescription: 'SEO, Google Ads, Local SEO, and web development for Chennai SaaS, manufacturing, and healthcare businesses.',
    primaryKeyword: 'SEO company in Chennai',
    secondaryKeywords: ['digital marketing Chennai', 'website development Chennai', 'Google Ads Chennai'],
    searchIntent: 'Local Commercial — Chennai B2B, healthcare, and enterprise businesses',
    targetAudience: 'SaaS along OMR, manufacturers in Ambattur/Guindy, and hospitals in Chennai',
    imageKey: 'enterpriseOffice',
    heroLead: 'Search-first digital marketing, B2B SEO, and web development for Chennai SaaS, manufacturing, and healthcare leaders.',
    marketOverview: 'Serving businesses across OMR IT Corridor, Guindy, Ambattur, Anna Nagar, and Adyar.',
    commercialCorridors: ['OMR IT Corridor', 'Guindy & Ambattur', 'Anna Salai & T. Nagar', 'Adyar & Anna Nagar'],
    keyIndustriesServed: [
      { name: 'B2B SaaS', slug: '/industries/saas/' },
      { name: 'Healthcare', slug: '/industries/healthcare/' },
      { name: 'Local & Industrial', slug: '/industries/local-businesses/' },
      { name: 'Education', slug: '/industries/education/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Chennai',
        targetKeyword: 'SEO company in Chennai',
        summary: 'B2B, industrial, and multi-location healthcare SEO.',
        localStrategyPoints: ['Topic-cluster SEO', 'Local Maps optimization'],
        linkedCoreServiceSlug: '/services/seo-services/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Chennai',
        targetKeyword: 'digital marketing agency in Chennai',
        summary: 'Lead generation across Search, Social, and Content.',
        localStrategyPoints: ['B2B & healthcare funnels', 'Transparent ROI reporting'],
        linkedCoreServiceSlug: '/services/content-marketing/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Chennai',
        targetKeyword: 'website development in Chennai',
        summary: 'Fast corporate websites and patient/buyer portals.',
        localStrategyPoints: ['Mobile-first UX', 'SEO-ready architecture'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Chennai',
        targetKeyword: 'Google Ads agency in Chennai',
        summary: 'High-intent paid search for domestic and export leads.',
        localStrategyPoints: ['Search & call campaigns', 'Negative keyword filtering'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Chennai SaaS & Healthcare',
      summary: 'Delivered +215% organic demo growth and 8.7% paid landing page conversion.',
      metric: '+215% Organic SaaS Demos'
    },
    faqs: [
      {
        question: 'How can Chennai businesses contact your team?',
        answer: 'Call +91 77940 06495 or WhatsApp +971 52 699 0466, or request a quote online.'
      }
    ]
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    slug: '/locations/mumbai/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Serving Mumbai, Navi Mumbai, and Thane businesses.',
    h1: 'Digital Marketing, SEO & Paid Media in Mumbai',
    titleTag: 'Digital Marketing & SEO Agency for Mumbai — Siri Solutions',
    metaDescription: 'SEO, Google Ads, Meta Ads, and conversion optimization for businesses in Mumbai, BKC, Navi Mumbai, and Thane.',
    primaryKeyword: 'digital marketing agency in Mumbai',
    secondaryKeywords: ['SEO company in Mumbai', 'website development Mumbai', 'Google Ads Mumbai'],
    searchIntent: 'Local Commercial — Mumbai BFSI, real estate, and D2C businesses',
    targetAudience: 'Fintech, real estate, D2C, and corporate businesses across MMR',
    imageKey: 'paidMediaSession',
    heroLead: 'ROI-driven SEO, Google & Meta Ads, and high-converting websites for Mumbai, Navi Mumbai, and Thane businesses.',
    marketOverview: 'Supporting enterprises across BKC, Lower Parel, Andheri, Powai, Thane, and Navi Mumbai.',
    commercialCorridors: ['BKC & Lower Parel', 'Andheri & Powai', 'Thane', 'Navi Mumbai'],
    keyIndustriesServed: [
      { name: 'Fintech & BFSI', slug: '/industries/fintech/' },
      { name: 'Real Estate', slug: '/industries/real-estate/' },
      { name: 'E-commerce', slug: '/industries/ecommerce/' },
      { name: 'Hospitality', slug: '/industries/hospitality/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Mumbai',
        targetKeyword: 'SEO company in Mumbai',
        summary: 'Technical SEO and high-trust content for competitive markets.',
        localStrategyPoints: ['Enterprise & local SEO', 'Core Web Vitals speed'],
        linkedCoreServiceSlug: '/services/technical-seo/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Mumbai',
        targetKeyword: 'digital marketing agency in Mumbai',
        summary: 'Performance marketing and conversion optimization.',
        localStrategyPoints: ['Multi-channel attribution', 'Landing page CRO'],
        linkedCoreServiceSlug: '/services/conversion-rate-optimization/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Mumbai',
        targetKeyword: 'website development in Mumbai',
        summary: 'Fast corporate websites and campaign landing pages.',
        localStrategyPoints: ['Custom responsive design', 'CRM integration'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Mumbai',
        targetKeyword: 'Google Ads agency in Mumbai',
        summary: 'Precision Search and Shopping campaigns.',
        localStrategyPoints: ['High-CPC efficiency', 'Offline conversion sync'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Mumbai Fintech & B2B Logistics',
      summary: 'Increased organic applications by +52% and B2B quote requests by +142%.',
      metric: '+142% B2B Quote Requests'
    },
    faqs: [
      {
        question: 'Do you cover Thane and Navi Mumbai?',
        answer: 'Yes. We run targeted search and paid campaigns across Mumbai, Thane, and Navi Mumbai.'
      }
    ]
  },
  {
    id: 'delhi',
    city: 'Delhi NCR',
    state: 'Delhi, Gurugram & Noida',
    slug: '/locations/delhi/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Serving businesses across New Delhi, Gurugram, and Noida.',
    h1: 'Digital Marketing, SEO & Web Development in Delhi NCR',
    titleTag: 'Digital Marketing & SEO Agency Delhi NCR — Siri Solutions',
    metaDescription: 'SEO, Google Ads, and fast websites for enterprises, EdTech, D2C, and healthcare brands across Delhi, Gurugram, and Noida.',
    primaryKeyword: 'digital marketing agency in Delhi NCR',
    secondaryKeywords: ['SEO company in Delhi', 'SEO agency Gurugram', 'website development Noida'],
    searchIntent: 'Local Commercial — Delhi, Gurugram, and Noida businesses',
    targetAudience: 'Enterprises, D2C brands, EdTech, and hospitals in Delhi NCR',
    imageKey: 'enterpriseOffice',
    heroLead: 'Organic search growth, paid acquisition, and fast web development for businesses in Delhi, Gurugram, and Noida.',
    marketOverview: 'Serving commercial hubs across Gurugram Cyber City, Noida Sector 62, and Central/South Delhi.',
    commercialCorridors: ['Gurugram Cyber City', 'Noida Sector 62 & Expressway', 'Connaught Place & South Delhi', 'Okhla & Faridabad'],
    keyIndustriesServed: [
      { name: 'Education & EdTech', slug: '/industries/education/' },
      { name: 'E-commerce & D2C', slug: '/industries/ecommerce/' },
      { name: 'Healthcare', slug: '/industries/healthcare/' },
      { name: 'Real Estate', slug: '/industries/real-estate/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Delhi NCR',
        targetKeyword: 'SEO company in Delhi',
        summary: 'SEO audits, e-commerce SEO, and multi-city Local SEO.',
        localStrategyPoints: ['Technical SEO & audits', 'Local pack rankings'],
        linkedCoreServiceSlug: '/services/seo-audit/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Delhi NCR',
        targetKeyword: 'digital marketing agency in Delhi NCR',
        summary: 'Paid search, Meta Ads, and content marketing.',
        localStrategyPoints: ['D2C & EdTech funnels', 'Lead quality filtering'],
        linkedCoreServiceSlug: '/services/meta-ads/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Delhi NCR',
        targetKeyword: 'website development in Delhi',
        summary: 'Fast corporate websites and e-commerce storefronts.',
        localStrategyPoints: ['Mobile-first speed', 'CRM integration'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Delhi NCR',
        targetKeyword: 'Google Ads agency in Delhi',
        summary: 'Targeted Search and Shopping ads across NCR.',
        localStrategyPoints: ['City-wise bid segmentation', 'ROI tracking'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Delhi NCR EdTech Platform',
      summary: 'Recovered +88% organic impressions and +47% counselor bookings.',
      metric: '+88% Organic Impressions'
    },
    faqs: [
      {
        question: 'Do you serve Gurugram and Noida businesses?',
        answer: 'Yes. We work with businesses across New Delhi, Gurugram, Noida, and Greater Noida.'
      }
    ]
  },
  {
    id: 'pune',
    city: 'Pune',
    state: 'Maharashtra',
    slug: '/locations/pune/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Serving Pune and PCMC businesses.',
    h1: 'Digital Marketing, B2B SEO & Web Development in Pune',
    titleTag: 'Digital Marketing & SEO Agency for Pune — Siri Solutions',
    metaDescription: 'B2B SEO, PPC, CRO, and custom web development for Pune IT/SaaS firms, manufacturers, and real estate brands.',
    primaryKeyword: 'SEO company in Pune',
    secondaryKeywords: ['digital marketing Pune', 'website development Pune', 'Google Ads Pune'],
    searchIntent: 'Local Commercial — Pune IT, manufacturing, and real estate businesses',
    targetAudience: 'IT/SaaS in Hinjewadi/Kharadi and manufacturers in Chakan/PCMC',
    imageKey: 'webEngineeringCollab',
    heroLead: 'B2B SEO, Google Ads, and modern web development for Pune IT, manufacturing, and real estate companies.',
    marketOverview: 'Serving Hinjewadi, Kharadi, Baner, Chakan, and Pimpri-Chinchwad (PCMC).',
    commercialCorridors: ['Hinjewadi & Baner', 'Kharadi & Viman Nagar', 'Chakan Industrial Belt', 'PCMC & Bhosari'],
    keyIndustriesServed: [
      { name: 'Industrial & Local', slug: '/industries/local-businesses/' },
      { name: 'B2B SaaS', slug: '/industries/saas/' },
      { name: 'Real Estate', slug: '/industries/real-estate/' },
      { name: 'Education', slug: '/industries/education/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Pune',
        targetKeyword: 'SEO company in Pune',
        summary: 'Technical B2B SEO and organic lead generation.',
        localStrategyPoints: ['Industrial & SaaS SEO', 'Local search visibility'],
        linkedCoreServiceSlug: '/services/seo-services/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Pune',
        targetKeyword: 'digital marketing agency in Pune',
        summary: 'Multi-channel PPC, content, and CRO.',
        localStrategyPoints: ['B2B RFQ generation', 'Conversion optimization'],
        linkedCoreServiceSlug: '/services/ppc-management/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Pune',
        targetKeyword: 'website development in Pune',
        summary: 'Fast corporate websites and product catalogs.',
        localStrategyPoints: ['Clean modern UI', 'Mobile performance'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Pune',
        targetKeyword: 'Google Ads agency in Pune',
        summary: 'Targeted Search campaigns for B2B and real estate.',
        localStrategyPoints: ['High-intent search ads', 'Lead tracking'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Pune B2B & Solar EPC',
      summary: 'Generated ₹3.8 Cr pipeline and lifted commercial enquiries by +94%.',
      metric: '+94% Commercial Enquiries'
    },
    faqs: [
      {
        question: 'Can you help Pune B2B manufacturers get online enquiries?',
        answer: 'Yes. We build specification-driven pages and run targeted B2B search campaigns.'
      }
    ]
  },
  {
    id: 'visakhapatnam',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    slug: '/locations/visakhapatnam/',
    presenceType: 'Verified Service-Area & Client Delivery Hub',
    officeNote: 'Serving Visakhapatnam (Vizag) and Coastal Andhra businesses directly from Andhra Pradesh.',
    h1: 'Digital Marketing, Local SEO & Web Development in Visakhapatnam',
    titleTag: 'Digital Marketing & SEO Agency Visakhapatnam — Siri Solutions',
    metaDescription: 'SEO, Google Maps, Google Ads, and fast web development for businesses in Visakhapatnam (Vizag).',
    primaryKeyword: 'digital marketing agency in Visakhapatnam',
    secondaryKeywords: ['SEO company in Visakhapatnam', 'website development Vizag', 'Google Ads Visakhapatnam'],
    searchIntent: 'Local Commercial — Visakhapatnam healthcare, hospitality, real estate, and retail businesses',
    targetAudience: 'Hospitals, hotels, real estate developers, and schools in Visakhapatnam',
    imageKey: 'heroWorkspace',
    heroLead: 'Local SEO, Google Ads, social media marketing, and fast websites for Visakhapatnam businesses.',
    marketOverview: 'Serving Dwaraka Nagar, Siripuram, MVP Colony, Madhurawada, Rushikonda, and Gajuwaka.',
    commercialCorridors: ['Dwaraka Nagar & Siripuram', 'Madhurawada & Rushikonda', 'MVP Colony', 'Gajuwaka & Auto Nagar'],
    keyIndustriesServed: [
      { name: 'Hospitality & Hotels', slug: '/industries/hospitality/' },
      { name: 'Healthcare', slug: '/industries/healthcare/' },
      { name: 'Real Estate', slug: '/industries/real-estate/' },
      { name: 'Local Businesses', slug: '/industries/local-businesses/' }
    ],
    cityServicePillars: [
      {
        id: 'seo',
        title: 'SEO Services in Visakhapatnam',
        targetKeyword: 'SEO company in Visakhapatnam',
        summary: 'Local Maps ranking and organic search optimization in Vizag.',
        localStrategyPoints: ['Google Business Profile SEO', 'Local keyword targeting'],
        linkedCoreServiceSlug: '/services/local-seo/'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing in Visakhapatnam',
        targetKeyword: 'digital marketing agency in Visakhapatnam',
        summary: 'Social media, paid ads, and WhatsApp lead generation.',
        localStrategyPoints: ['Instagram & Facebook Ads', 'Click-to-WhatsApp funnels'],
        linkedCoreServiceSlug: '/services/meta-ads/'
      },
      {
        id: 'web-development',
        title: 'Website Development in Visakhapatnam',
        targetKeyword: 'website development in Vizag',
        summary: 'Mobile-first websites for clinics, hotels, and businesses.',
        localStrategyPoints: ['Fast mobile load speed', 'Booking & call integration'],
        linkedCoreServiceSlug: '/services/website-development/'
      },
      {
        id: 'google-ads',
        title: 'Google Ads in Visakhapatnam',
        targetKeyword: 'Google Ads agency in Visakhapatnam',
        summary: 'Local search and call campaigns for immediate leads.',
        localStrategyPoints: ['Pin-code targeting', 'Call & enquiry tracking'],
        linkedCoreServiceSlug: '/services/google-ads/'
      }
    ],
    localCaseHighlight: {
      sector: 'Andhra Pradesh Healthcare & Retail',
      summary: 'Increased direct Google Maps calls by +118% and online bookings by +84%.',
      metric: '+118% Direct Clinic Calls'
    },
    faqs: [
      {
        question: 'Do you support businesses across Visakhapatnam and Andhra Pradesh?',
        answer: 'Yes. With our headquarters in Vijayawada, Andhra Pradesh, we work closely with businesses across Visakhapatnam, Vijayawada, Rajahmundry, and Tirupati.'
      }
    ]
  }
];

export const getLocationBySlug = (slug: string): LocationPageData | undefined => {
  const normalized = slug.endsWith('/') ? slug : `${slug}/`;
  return LOCATIONS_DATA.find((l) => l.slug === normalized);
};
