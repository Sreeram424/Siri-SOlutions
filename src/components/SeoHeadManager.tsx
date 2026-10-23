import React, { useEffect } from 'react';
import { COMPLETE_SEO_INVENTORY } from '../data/seoDeliverablesData';
import { getServiceBySlug } from '../data/servicesData';
import { getIndustryBySlug } from '../data/industriesData';
import { getLocationBySlug } from '../data/locationsData';
import { getBlogBySlug } from '../data/blogData';
import { IMAGE_LIBRARY } from '../data/images';

export interface CmsPageOverride {
  titleTag?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  h1?: string;
  imageAltText?: string;
}

const CMS_STORAGE_KEY = 'siri_solutions_cms_overrides_v1';

export const getCmsOverrides = (): Record<string, CmsPageOverride> => {
  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const saveCmsOverride = (url: string, override: CmsPageOverride) => {
  try {
    const existing = getCmsOverrides();
    existing[url] = { ...existing[url], ...override };
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(existing));
    window.dispatchEvent(new Event('siri-cms-updated'));
  } catch {
    // ignore storage errors
  }
};

export const buildJsonLdForRoute = (currentPath: string, title: string, description: string) => {
  const baseUrl = 'https://sirisolutions.in';
  const fullUrl = `${baseUrl}${currentPath === '/' ? '/' : currentPath}`;

  const baseOrganization = {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Siri Solutions',
    url: `${baseUrl}/`,
    logo: `${baseUrl}/logo.svg`,
    email: 'contact@sirisolutions.in',
    telephone: '+91-77940-06495',
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+91-77940-06495', contactType: 'sales', areaServed: 'IN' },
      { '@type': 'ContactPoint', telephone: '+971-52-699-0466', contactType: 'customer support', areaServed: ['IN', 'AE'] },
    ],
    description:
      'Digital marketing, SEO, GEO, paid advertising, and web development agency in Vijayawada, Andhra Pradesh serving India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vijayawada',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  const baseWebsite = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: `${baseUrl}/`,
    name: 'Siri Solutions',
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: 'en-IN',
  };

  const graph: Record<string, unknown>[] = [baseOrganization, baseWebsite];

  // BreadcrumbList for all non-home pages
  if (currentPath !== '/') {
    const segments = currentPath.split('/').filter(Boolean);
    const itemListElement = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      ...segments.map((seg, index) => {
        const accumulatedPath = '/' + segments.slice(0, index + 1).join('/') + '/';
        const readableName = seg
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        return {
          '@type': 'ListItem',
          position: index + 2,
          name: index === segments.length - 1 ? title.split('|')[0].split('—')[0].trim() : readableName,
          item: `${baseUrl}${accumulatedPath}`,
        };
      }),
    ];

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${fullUrl}#breadcrumb`,
      itemListElement,
    });
  }

  // Verified LocalBusiness Schema on Home and Contact page
  if (currentPath === '/' || currentPath === '/contact/' || currentPath === '/locations/vijayawada/') {
    graph.push({
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#vijayawada-office`,
      name: 'Siri Solutions',
      url: fullUrl,
      telephone: '+91-77940-06495',
      email: 'contact@sirisolutions.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vijayawada',
        addressRegion: 'Andhra Pradesh',
        addressCountry: 'IN',
      },
      parentOrganization: { '@id': `${baseUrl}/#organization` },
    });
  }

  // Service Page Schema + FAQPage Schema
  const service = getServiceBySlug(currentPath);
  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': `${fullUrl}#service`,
      name: service.shortName,
      serviceType: service.shortName,
      description: service.metaDescription,
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      url: fullUrl,
    });

    if (service.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${fullUrl}#faq`,
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      });
    }
  }

  // Industry Page Schema
  const industry = getIndustryBySlug(currentPath);
  if (industry) {
    graph.push({
      '@type': 'Service',
      '@id': `${fullUrl}#industry-service`,
      name: `Digital Marketing & SEO for ${industry.name}`,
      description: industry.metaDescription,
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      url: fullUrl,
    });

    if (industry.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${fullUrl}#faq`,
        mainEntity: industry.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      });
    }
  }

  // Location Page Schema
  const location = getLocationBySlug(currentPath);
  if (location) {
    graph.push({
      '@type': 'Service',
      '@id': `${fullUrl}#location-service`,
      name: `Digital Marketing, SEO & Web Development Services in ${location.city}`,
      description: location.metaDescription,
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: {
        '@type': 'City',
        name: location.city,
        containedInPlace: { '@type': 'State', name: location.state },
      },
      url: fullUrl,
    });

    if (location.faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${fullUrl}#faq`,
        mainEntity: location.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      });
    }
  }

  // Blog Article Schema (BlogPosting + Person)
  const blog = getBlogBySlug(currentPath);
  if (blog) {
    const authorId = `${baseUrl}/#author-${blog.author.name.toLowerCase().replace(/\s+/g, '-')}`;
    graph.push(
      {
        '@type': 'Person',
        '@id': authorId,
        name: blog.author.name,
        jobTitle: blog.author.role,
        description: blog.author.credentials,
        worksFor: { '@id': `${baseUrl}/#organization` },
      },
      {
        '@type': 'BlogPosting',
        '@id': `${fullUrl}#article`,
        headline: blog.h1,
        description: blog.metaDescription,
        datePublished: blog.publishedDate,
        dateModified: blog.updatedDate,
        author: { '@id': authorId },
        publisher: { '@id': `${baseUrl}/#organization` },
        mainEntityOfPage: fullUrl,
        inLanguage: 'en-IN',
      }
    );
  }

  // Generic WebPage fallback if not matched above
  if (!service && !industry && !location && !blog) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${fullUrl}#webpage`,
      url: fullUrl,
      name: title,
      description,
      isPartOf: { '@id': `${baseUrl}/#website` },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};

interface SeoHeadManagerProps {
  currentPath: string;
}

export const SeoHeadManager: React.FC<SeoHeadManagerProps> = ({ currentPath }) => {
  useEffect(() => {
    const applyHeadUpdates = () => {
      const normalized = currentPath === '/' ? '/' : currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
      const inventoryMatch = COMPLETE_SEO_INVENTORY.find((row) => row.url === normalized);
      const overrides = getCmsOverrides()[normalized] || {};

      let title = overrides.titleTag || inventoryMatch?.titleTag || 'Siri Solutions — Digital Marketing & SEO Agency in India';
      let description =
        overrides.metaDescription ||
        inventoryMatch?.metaDescription ||
        'SEO-first digital marketing, technical search optimization, GEO, paid advertising, and web engineering agency in India.';
      let canonical = overrides.canonicalUrl || `https://sirisolutions.in${normalized}`;
      let robots = 'index, follow, max-image-preview:large, max-snippet:-1';

      if (normalized === '/thank-you/') {
        title = 'Thank You — Consultation Request Received | Siri Solutions';
        description = 'Your digital marketing and web engineering consultation request has been received by Siri Solutions.';
        robots = 'noindex, nofollow';
      } else if (!inventoryMatch && normalized !== '/thank-you/') {
        title = 'Page Not Found (404) | Siri Solutions';
        description = 'The requested URL could not be found on sirisolutions.in. Explore our SEO, paid media, and web development services.';
        robots = 'noindex, follow';
      }

      document.title = title;

      const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
        let el = document.querySelector(selector) as HTMLMetaElement | null;
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attrName, attrValue);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      setMetaTag('meta[name="description"]', 'name', 'description', description);
      setMetaTag('meta[name="robots"]', 'name', 'robots', robots);
      setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
      setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonical);
      setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
      setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);

      // Update JSON-LD structured data
      const jsonLdPayload = buildJsonLdForRoute(normalized, title, description);
      let scriptEl = document.getElementById('dynamic-json-ld') as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'dynamic-json-ld';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLdPayload, null, 2);
    };

    applyHeadUpdates();
    window.addEventListener('siri-cms-updated', applyHeadUpdates);
    return () => window.removeEventListener('siri-cms-updated', applyHeadUpdates);
  }, [currentPath]);

  return null;
};

export const useResolvedPageCopy = (url: string, defaultH1: string, defaultImageKey: keyof typeof IMAGE_LIBRARY) => {
  const [override, setOverride] = React.useState<CmsPageOverride>(() => getCmsOverrides()[url] || {});

  useEffect(() => {
    const sync = () => setOverride(getCmsOverrides()[url] || {});
    sync();
    window.addEventListener('siri-cms-updated', sync);
    return () => window.removeEventListener('siri-cms-updated', sync);
  }, [url]);

  return {
    h1: override.h1 || defaultH1,
    imageAlt: override.imageAltText || IMAGE_LIBRARY[defaultImageKey].alt,
  };
};
