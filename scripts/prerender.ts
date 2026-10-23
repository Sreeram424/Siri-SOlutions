import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPLETE_SEO_INVENTORY } from '../src/data/seoDeliverablesData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

async function prerenderAllPages() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`Starting individual page generation for ${COMPLETE_SEO_INVENTORY.length} routes...`);

  let generatedCount = 0;

  for (const item of COMPLETE_SEO_INVENTORY) {
    const route = item.url;
    if (route === '/') continue; // root index.html already exists

    // Route folder structure, e.g. dist/services/seo-services/index.html
    const cleanRoute = route.replace(/^\/|\/$/g, '');
    const targetDir = path.join(distDir, cleanRoute);
    const targetFile = path.join(targetDir, 'index.html');

    fs.mkdirSync(targetDir, { recursive: true });

    const fullCanonicalUrl = `https://sirisolutions.in${route.endsWith('/') ? route : route + '/'}`;

    // Replace Title
    let pageHtml = baseHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${escapeHtml(item.titleTag)}</title>`
    );

    // Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(item.metaDescription)}" />`
    );

    // Replace Canonical
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${fullCanonicalUrl}" />`
    );

    // Replace OpenGraph Title & Description & URL
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(item.titleTag)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(item.metaDescription)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${fullCanonicalUrl}" />`
    );

    // Replace Twitter Title & Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(item.titleTag)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(item.metaDescription)}" />`
    );

    // Inject customized Page Schema for this individual route
    const pageSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${fullCanonicalUrl}#webpage`,
          url: fullCanonicalUrl,
          name: item.titleTag,
          description: item.metaDescription,
          isPartOf: { '@id': 'https://sirisolutions.in/#website' },
          breadcrumb: { '@id': `${fullCanonicalUrl}#breadcrumb` },
          inLanguage: 'en-IN',
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${fullCanonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://sirisolutions.in/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: item.h1 || item.titleTag,
              item: fullCanonicalUrl,
            },
          ],
        },
      ],
    };

    const schemaTag = `<script id="route-json-ld" type="application/ld+json">\n${JSON.stringify(pageSchema, null, 2)}\n    </script>\n  </head>`;
    pageHtml = pageHtml.replace('</head>', schemaTag);

    fs.writeFileSync(targetFile, pageHtml, 'utf-8');
    generatedCount++;
  }

  // Also ensure legal and utility pages have individual files
  const additionalRoutes = [
    {
      url: '/privacy-policy/',
      title: 'Privacy Policy | Siri Solutions',
      description: 'Privacy Policy and data protection compliance information for Siri Solutions website visitors.',
    },
    {
      url: '/terms-and-conditions/',
      title: 'Terms and Conditions | Siri Solutions',
      description: 'Terms of service and commercial agreement parameters for Siri Solutions digital marketing services.',
    },
    {
      url: '/sitemap/',
      title: 'HTML Sitemap & Complete SEO Architecture | Siri Solutions',
      description: 'Directory of all 49+ indexable pages and technical SEO deliverables for Siri Solutions.',
    },
    {
      url: '/thank-you/',
      title: 'Thank You | Siri Solutions',
      description: 'Enquiry confirmation for Siri Solutions digital marketing consultations.',
    },
  ];

  for (const extra of additionalRoutes) {
    const cleanRoute = extra.url.replace(/^\/|\/$/g, '');
    const targetDir = path.join(distDir, cleanRoute);
    const targetFile = path.join(targetDir, 'index.html');
    fs.mkdirSync(targetDir, { recursive: true });

    let pageHtml = baseHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(extra.title)}</title>`);
    pageHtml = pageHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${escapeHtml(extra.description)}" />`);
    fs.writeFileSync(targetFile, pageHtml, 'utf-8');
    generatedCount++;
  }

  console.log(`Successfully generated ${generatedCount} individual standalone page files in dist/!`);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

prerenderAllPages().catch((err) => {
  console.error('Error during static prerendering:', err);
  process.exit(1);
});
