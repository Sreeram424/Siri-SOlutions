export interface CaseStudyItem {
  id: string;
  title: string;
  clientDescriptor: string;
  clientUrl?: string;
  city: string;
  industryName: string;
  industrySlug: string;
  servicesProvided: { name: string; slug: string }[];
  timeframe: string;
  imageKey: 'heroWorkspace' | 'seoAuditDesk' | 'webEngineeringCollab' | 'paidMediaSession' | 'enterpriseOffice';
  headlineMetric: string;
  secondaryMetrics: { value: string; label: string }[];
  baselineChallenge: string;
  strategicIntervention: string[];
  documentedOutcome: string;
}

export interface PortfolioProjectItem {
  id: string;
  title: string;
  clientName: string;
  clientUrl: string;
  sector: string;
  industrySlug: string;
  city: string;
  deliverableType: 'Website Created (Design & Dev)' | 'SEO Services & Organic Growth';
  imageKey: 'heroWorkspace' | 'seoAuditDesk' | 'webEngineeringCollab' | 'paidMediaSession' | 'enterpriseOffice';
  summary: string;
  technicalHighlights: string[];
  measuredImpact: string;
  relatedServiceSlug: string;
}

export interface ClientTestimonial {
  id: string;
  personName: string;
  role: string;
  organization: string;
  city: string;
  quote: string;
  verifiedOutcome: string;
  linkedServiceSlug: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProjectItem[] = [
  {
    id: 'dandamudi-biotech',
    title: 'Dandamudi Biotech — Corporate & Bio-Research Web Platform',
    clientName: 'Dandamudi Biotech Pvt. Ltd.',
    clientUrl: 'https://dandamudibiotech.in/',
    sector: 'Biotechnology & Ayurvedic Wellness',
    industrySlug: '/industries/healthcare/',
    city: 'Hyderabad',
    deliverableType: 'Website Created (Design & Dev)',
    imageKey: 'heroWorkspace',
    summary:
      'Designed and developed the official corporate website for Dandamudi Biotech Pvt. Ltd., showcasing their 500+ organic acres, Liquid CO2 bio-extraction systems, and Ayurvedic bio-research pillars.',
    technicalHighlights: [
      'Minimal editorial hero & strategic pillars architecture',
      'Mobile-first responsive design with fast Core Web Vitals',
      'Structured presentation of bio-research & clean-label formulations',
    ],
    measuredImpact: 'Website Created · dandamudibiotech.in',
    relatedServiceSlug: '/services/website-development/',
  },
  {
    id: 'dandamudi-box-office',
    title: 'Dandamudi Box Office — Film Production House Website',
    clientName: 'Dandamudi Box Office Pvt. Ltd.',
    clientUrl: 'https://dandamudiboxoffice.com/',
    sector: 'Film Production & Entertainment',
    industrySlug: '/industries/local-businesses/',
    city: 'Hyderabad',
    deliverableType: 'Website Created (Design & Dev)',
    imageKey: 'webEngineeringCollab',
    summary:
      'Created the official website for Dandamudi Box Office Pvt. Ltd., an Indian film production and entertainment studio known for feature films and cinematic storytelling.',
    technicalHighlights: [
      'Visual showcase for feature film productions & releases',
      'Fast-loading media layouts and production house profile',
      'SEO-friendly site structure for entertainment search visibility',
    ],
    measuredImpact: 'Website Created · dandamudiboxoffice.com',
    relatedServiceSlug: '/services/website-design/',
  },
  {
    id: 'silver-spring-realtors',
    title: 'Silver Spring Realtors — Luxury Real Estate Web Platform',
    clientName: 'Silver Spring Realtors',
    clientUrl: 'https://silverspringrealtors.com/',
    sector: 'Luxury Real Estate & Property Advisory',
    industrySlug: '/industries/real-estate/',
    city: 'Hyderabad',
    deliverableType: 'Website Created (Design & Dev)',
    imageKey: 'enterpriseOffice',
    summary:
      'Built a conversion-focused real estate website for Silver Spring Realtors highlighting luxury villas, sky towers, and high-yield property investments with direct buyer inquiry capture.',
    technicalHighlights: [
      'Curated property showcase for luxury villas & sky towers',
      'Streamlined lead capture & WhatsApp consultation triggers',
      'Clean mobile-first interface for high-net-worth property buyers',
    ],
    measuredImpact: 'Website Created · silverspringrealtors.com',
    relatedServiceSlug: '/services/website-development/',
  },
  {
    id: 'deccan-trails-seo',
    title: 'Deccan Trails — Search Engine Optimization (SEO Services)',
    clientName: 'Deccan Trails Adventure & Eco-Resort',
    clientUrl: 'https://www.deccantrails.com/',
    sector: 'Hospitality, Adventure & Eco-Tourism',
    industrySlug: '/industries/hospitality/',
    city: 'Hyderabad (Ananthagiri Hills / Vikarabad)',
    deliverableType: 'SEO Services & Organic Growth',
    imageKey: 'seoAuditDesk',
    summary:
      'Executed comprehensive Search Engine Optimization (SEO) for Deccan Trails to grow organic search rankings for camping, adventure activities, corporate retreats, and weekend nature getaways near Hyderabad.',
    technicalHighlights: [
      'On-page & local SEO for Hyderabad adventure resort & camping keywords',
      'Technical search optimization for activity & corporate outing pages',
      'Organic visibility growth across Google Search and Maps',
    ],
    measuredImpact: 'SEO Services · deccantrails.com',
    relatedServiceSlug: '/services/seo-services/',
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'deccan-trails-organic-seo',
    title: 'Scaling Organic Search Visibility & Direct Bookings for Deccan Trails',
    clientDescriptor: 'Deccan Trails (deccantrails.com)',
    clientUrl: 'https://www.deccantrails.com/',
    city: 'Hyderabad / Vikarabad',
    industryName: 'Hospitality, Resorts & Travel',
    industrySlug: '/industries/hospitality/',
    servicesProvided: [
      { name: 'Search Engine Optimization', slug: '/services/seo-services/' },
      { name: 'Local SEO Services', slug: '/services/local-seo/' },
    ],
    timeframe: 'Ongoing SEO Partner',
    imageKey: 'seoAuditDesk',
    headlineMetric: 'SEO Services · deccantrails.com',
    secondaryMetrics: [
      { value: 'Top Rankings', label: 'Adventure & Camping Queries near Hyderabad' },
      { value: 'Local SEO', label: 'Google Search & Maps Visibility' },
    ],
    baselineChallenge:
      'Capturing high-intent organic search traffic from families, trekkers, and corporate HR teams searching for adventure resorts, camping, and team outings around Hyderabad and Ananthagiri Hills.',
    strategicIntervention: [
      'Optimized core activity, camping, and corporate day-outing pages for high-intent regional keywords.',
      'Improved technical indexation, internal linking, and local search relevance for Vikarabad / Hyderabad.',
    ],
    documentedOutcome:
      'Strengthened organic search presence and direct booking enquiries on deccantrails.com across adventure, camping, and corporate retreat search terms.',
  },
  {
    id: 'dandamudi-biotech-web-build',
    title: 'Designing & Engineering the Digital Identity for Dandamudi Biotech',
    clientDescriptor: 'Dandamudi Biotech Pvt. Ltd. (dandamudibiotech.in)',
    clientUrl: 'https://dandamudibiotech.in/',
    city: 'Hyderabad',
    industryName: 'Biotechnology & Wellness',
    industrySlug: '/industries/healthcare/',
    servicesProvided: [
      { name: 'Website Design', slug: '/services/website-design/' },
      { name: 'Website Development', slug: '/services/website-development/' },
    ],
    timeframe: 'Complete Web Build',
    imageKey: 'heroWorkspace',
    headlineMetric: 'Website Created · dandamudibiotech.in',
    secondaryMetrics: [
      { value: 'Custom Build', label: 'Minimal Corporate Web Architecture' },
      { value: '≤ 2.0s', label: 'Fast Mobile Core Web Vitals' },
    ],
    baselineChallenge:
      'Presenting complex plant-based bio-research, 500+ organic plantation acres, and Liquid CO2 extraction capabilities through a calm, minimal, and credible digital presence.',
    strategicIntervention: [
      'Crafted a clean, minimal hero and 4-pillar architecture ("Rooted in Ayurveda. Powered by Innovation.").',
      'Built a fast, mobile-first website with clear navigation and direct Contact Desk pathways.',
    ],
    documentedOutcome:
      'Launched dandamudibiotech.in as an authoritative corporate platform for partners, researchers, and B2B enquiries.',
  },
  {
    id: 'silver-spring-realtors-web-build',
    title: 'Luxury Real Estate Web Platform for Silver Spring Realtors',
    clientDescriptor: 'Silver Spring Realtors (silverspringrealtors.com)',
    clientUrl: 'https://silverspringrealtors.com/',
    city: 'Hyderabad',
    industryName: 'Real Estate & Property Developers',
    industrySlug: '/industries/real-estate/',
    servicesProvided: [
      { name: 'Website Design', slug: '/services/website-design/' },
      { name: 'Website Development', slug: '/services/website-development/' },
    ],
    timeframe: 'Complete Web Build',
    imageKey: 'enterpriseOffice',
    headlineMetric: 'Website Created · silverspringrealtors.com',
    secondaryMetrics: [
      { value: 'Real Estate', label: 'Luxury Villas & Sky Towers Showcase' },
      { value: 'Lead Ready', label: 'Direct Consultation & Site-Visit Flows' },
    ],
    baselineChallenge:
      'Creating a modern, trustworthy real estate portal capable of showcasing premium residential villas, sky towers, and investment properties to discerning buyers.',
    strategicIntervention: [
      'Engineered silverspringrealtors.com with clean property presentation cards and intuitive navigation.',
      'Integrated frictionless lead capture and mobile click-to-call/WhatsApp inquiry triggers.',
    ],
    documentedOutcome:
      'Delivered a high-converting digital showcase at silverspringrealtors.com supporting property discovery and buyer consultations.',
  },
  {
    id: 'dandamudi-box-office-web-build',
    title: 'Official Production House Website for Dandamudi Box Office',
    clientDescriptor: 'Dandamudi Box Office Pvt. Ltd. (dandamudiboxoffice.com)',
    clientUrl: 'https://dandamudiboxoffice.com/',
    city: 'Hyderabad',
    industryName: 'Film Production & Media',
    industrySlug: '/industries/local-businesses/',
    servicesProvided: [
      { name: 'Website Design', slug: '/services/website-design/' },
      { name: 'Website Development', slug: '/services/website-development/' },
    ],
    timeframe: 'Complete Web Build',
    imageKey: 'webEngineeringCollab',
    headlineMetric: 'Website Created · dandamudiboxoffice.com',
    secondaryMetrics: [
      { value: 'Cinema Studio', label: 'Official Film Production Portal' },
      { value: 'Responsive', label: 'Mobile-First Media Showcase' },
    ],
    baselineChallenge:
      'Establishing a refined digital home for Dandamudi Box Office Pvt. Ltd. to showcase its feature film slate, production vision, and studio announcements.',
    strategicIntervention: [
      'Designed and developed dandamudiboxoffice.com with bold typography and clean movie showcase sections.',
      'Optimized site speed, mobile responsiveness, and brand search visibility.',
    ],
    documentedOutcome:
      'Launched dandamudiboxoffice.com as the official online presence for the film production house.',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'testimonial-1',
    personName: 'Dandamudi Biotech Team',
    role: 'Biotechnology & Wellness',
    organization: 'dandamudibiotech.in',
    city: 'Hyderabad',
    quote:
      'Siri Solutions designed and built our corporate website with the exact minimal clarity and scientific credibility we needed to showcase our organic plantations and bio-research capabilities.',
    verifiedOutcome: 'Website Created · dandamudibiotech.in',
    linkedServiceSlug: '/services/website-development/',
  },
  {
    id: 'testimonial-2',
    personName: 'Silver Spring Realtors',
    role: 'Luxury Real Estate Advisory',
    organization: 'silverspringrealtors.com',
    city: 'Hyderabad',
    quote:
      'Our website built by Siri Solutions presents our luxury villas and sky tower projects cleanly on mobile and desktop, making it easy for prospective buyers to connect with our team.',
    verifiedOutcome: 'Website Created · silverspringrealtors.com',
    linkedServiceSlug: '/services/website-design/',
  },
  {
    id: 'testimonial-3',
    personName: 'Deccan Trails',
    role: 'Adventure & Nature Resort',
    organization: 'deccantrails.com',
    city: 'Hyderabad',
    quote:
      'Siri Solutions manages our SEO strategy, helping Deccan Trails rank across high-intent adventure, camping, and corporate outing searches in the Hyderabad region.',
    verifiedOutcome: 'SEO Services · deccantrails.com',
    linkedServiceSlug: '/services/seo-services/',
  },
  {
    id: 'testimonial-4',
    personName: 'Dandamudi Box Office',
    role: 'Film Production House',
    organization: 'dandamudiboxoffice.com',
    city: 'Hyderabad',
    quote:
      'From concept to launch, Siri Solutions delivered a sleek, modern production house website for Dandamudi Box Office that captures our cinematic vision.',
    verifiedOutcome: 'Website Created · dandamudiboxoffice.com',
    linkedServiceSlug: '/services/website-development/',
  },
];
