export interface ImageAsset {
  id: string;
  src: string;
  seoFilename: string;
  alt: string;
  title?: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
  width: number;
  height: number;
  caption: string;
  usedOnPages: string[];
}

export const IMAGE_LIBRARY: Record<string, ImageAsset> = {
  heroWorkspace: {
    id: 'heroWorkspace',
    src: '/src/assets/images/siri_agency_hero_workspace_1791616464212.jpg',
    seoFilename: 'siri-solutions-digital-marketing-agency-india.webp',
    alt: 'Digital marketing strategists at Siri Solutions reviewing website wireframes and search analytics on a desktop monitor',
    title: 'Digital strategy and wireframing review session',
    aspectRatio: '16:9',
    width: 1600,
    height: 900,
    caption: 'Strategy and UX wireframing review at Siri Solutions.',
    usedOnPages: ['/', '/about/', '/services/website-design/', '/locations/hyderabad/']
  },
  seoAuditDesk: {
    id: 'seoAuditDesk',
    src: '/src/assets/images/seo_technical_audit_desk_1791616477036.jpg',
    seoFilename: 'seo-specialist-reviewing-website-performance.webp',
    alt: 'SEO specialist reviewing website performance and organic search data on a desktop monitor',
    title: 'Website performance review',
    aspectRatio: '4:3',
    width: 1200,
    height: 900,
    caption: 'Technical crawl diagnostics and organic search visibility tracking.',
    usedOnPages: [
      '/',
      '/services/seo-services/',
      '/services/technical-seo/',
      '/services/seo-audit/',
      '/services/geo-optimization/',
      '/services/local-seo/'
    ]
  },
  webEngineeringCollab: {
    id: 'webEngineeringCollab',
    src: '/src/assets/images/web_engineering_team_collab_1791616486864.jpg',
    seoFilename: 'web-development-ux-team-wireframe-architecture.webp',
    alt: 'Web developers and UX designers collaborating over printed user flow wireframes and a laptop in a sunlit studio',
    title: 'Frontend architecture and conversion flow planning',
    aspectRatio: '4:3',
    width: 1200,
    height: 900,
    caption: 'Information architecture and conversion path engineering for B2B and D2C platforms.',
    usedOnPages: [
      '/',
      '/services/website-development/',
      '/services/landing-page-development/',
      '/services/conversion-rate-optimization/',
      '/portfolio/'
    ]
  },
  paidMediaSession: {
    id: 'paidMediaSession',
    src: '/src/assets/images/paid_media_strategy_session_1791616497677.jpg',
    seoFilename: 'paid-search-ppc-attribution-consultation-india.webp',
    alt: 'Performance marketing lead presenting quarterly Google Ads and paid media attribution reports to enterprise clients in a glass meeting room',
    title: 'Quarterly paid search and attribution review',
    aspectRatio: '4:3',
    width: 1200,
    height: 900,
    caption: 'Quarterly paid acquisition, ROAS, and lead quality review with client stakeholders.',
    usedOnPages: [
      '/',
      '/services/google-ads/',
      '/services/ppc-management/',
      '/services/meta-ads/',
      '/case-studies/'
    ]
  },
  enterpriseOffice: {
    id: 'enterpriseOffice',
    src: '/src/assets/images/indian_enterprise_growth_meeting_1791616506962.jpg',
    seoFilename: 'indian-enterprise-digital-growth-consultation-workspace.webp',
    alt: 'Cross-functional digital marketing and content team discussing campaign architecture at a standing table in a sunlit modern Indian workspace',
    title: 'Cross-functional digital growth planning',
    aspectRatio: '16:9',
    width: 1600,
    height: 900,
    caption: 'Collaborative planning across search, content, and engineering practices.',
    usedOnPages: [
      '/services/',
      '/industries/',
      '/services/content-marketing/',
      '/services/social-media-marketing/',
      '/services/ecommerce-seo/',
      '/contact/'
    ]
  }
};

export const IMAGE_INVENTORY_LIST: ImageAsset[] = Object.values(IMAGE_LIBRARY);
