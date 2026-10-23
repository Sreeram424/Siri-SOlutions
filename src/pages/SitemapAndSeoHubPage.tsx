import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  COMPLETE_SEO_INVENTORY,
  LAUNCH_CHECKLIST_ITEMS,
} from '../data/seoDeliverablesData';
import { IMAGE_INVENTORY_LIST } from '../data/images';
import {
  buildJsonLdForRoute,
  getCmsOverrides,
  saveCmsOverride,
  useResolvedPageCopy,
} from '../components/SeoHeadManager';

interface SitemapPageProps {
  onNavigate: (href: string) => void;
}

export const SitemapAndSeoHubPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<
    'html-sitemap' | 'keyword-map' | 'image-inventory' | 'schema-cms' | 'launch-checklist'
  >('html-sitemap');
  const [groupFilter, setGroupFilter] = useState<string>('All');
  const [selectedSchemaUrl, setSelectedSchemaUrl] = useState<string>('/');

  const [cmsTargetUrl, setCmsTargetUrl] = useState<string>('/');
  const currentTargetRow =
    COMPLETE_SEO_INVENTORY.find((r) => r.url === cmsTargetUrl) || COMPLETE_SEO_INVENTORY[0];
  const existingOverride = getCmsOverrides()[cmsTargetUrl] || {};

  const [editTitle, setEditTitle] = useState<string>(
    existingOverride.titleTag || currentTargetRow.titleTag
  );
  const [editMetaDesc, setEditMetaDesc] = useState<string>(
    existingOverride.metaDescription || currentTargetRow.metaDescription
  );
  const [editCanonical, setEditCanonical] = useState<string>(
    existingOverride.canonicalUrl || `https://sirisolutions.in${currentTargetRow.url}`
  );
  const [editH1, setEditH1] = useState<string>(existingOverride.h1 || currentTargetRow.h1);
  const [editAlt, setEditAlt] = useState<string>(
    existingOverride.imageAltText || currentTargetRow.imageAltText
  );
  const [cmsSavedMessage, setCmsSavedMessage] = useState<string>('');

  const { h1 } = useResolvedPageCopy(
    '/sitemap/',
    'HTML Sitemap & SEO Directory',
    'seoAuditDesk'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const handleSelectCmsUrl = (url: string) => {
    setCmsTargetUrl(url);
    const row = COMPLETE_SEO_INVENTORY.find((r) => r.url === url) || COMPLETE_SEO_INVENTORY[0];
    const ov = getCmsOverrides()[url] || {};
    setEditTitle(ov.titleTag || row.titleTag);
    setEditMetaDesc(ov.metaDescription || row.metaDescription);
    setEditCanonical(ov.canonicalUrl || `https://sirisolutions.in${row.url}`);
    setEditH1(ov.h1 || row.h1);
    setEditAlt(ov.imageAltText || row.imageAltText);
    setCmsSavedMessage('');
  };

  const handleSaveCmsChanges = (e: React.FormEvent) => {
    e.preventDefault();
    saveCmsOverride(cmsTargetUrl, {
      titleTag: editTitle.trim(),
      metaDescription: editMetaDesc.trim(),
      canonicalUrl: editCanonical.trim(),
      h1: editH1.trim(),
      imageAltText: editAlt.trim(),
    });
    setCmsSavedMessage(`Saved metadata for ${cmsTargetUrl}`);
  };

  const handleDownloadCsv = () => {
    const headers = [
      'URL',
      'Group',
      'Primary Keyword',
      'Secondary Keywords',
      'Title Tag',
      'Meta Description',
      'H1',
      'Image Filename',
      'Image Alt Text',
    ];
    const rows = COMPLETE_SEO_INVENTORY.map((r) => [
      `https://sirisolutions.in${r.url}`,
      r.pageGroup,
      r.primaryKeyword,
      r.secondaryKeywords.join('; '),
      r.titleTag,
      r.metaDescription,
      r.h1,
      r.imageFilename,
      r.imageAltText,
    ]);
    const csvContent =
      [headers, ...rows]
        .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'siri-solutions-seo-inventory.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const filteredInventory =
    groupFilter === 'All'
      ? COMPLETE_SEO_INVENTORY
      : COMPLETE_SEO_INVENTORY.filter((r) => r.pageGroup === groupFilter);

  const schemaRow =
    COMPLETE_SEO_INVENTORY.find((r) => r.url === selectedSchemaUrl) || COMPLETE_SEO_INVENTORY[0];
  const sampleJsonLd = buildJsonLdForRoute(
    schemaRow.url,
    schemaRow.titleTag,
    schemaRow.metaDescription
  );

  return (
    <div className="space-y-12 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Sitemap', href: '/sitemap/' }]} onNavigate={onNavigate} />

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#141413]">{h1}</h1>
              <p className="text-xs text-[#6E6D68] mt-1">
                {COMPLETE_SEO_INVENTORY.length} Indexable Pages · Siri Solutions (Vijayawada, Andhra Pradesh)
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleDownloadCsv}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg cursor-pointer"
              >
                Export SEO CSV
              </button>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-[#141413] bg-white border border-[#E5E4DF] rounded-lg"
              >
                sitemap.xml
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-semibold text-[#141413] bg-white border border-[#E5E4DF] rounded-lg"
              >
                robots.txt
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F3F2EE] border border-[#E5E4DF] rounded-xl">
            {[
              { id: 'html-sitemap', label: 'HTML Sitemap' },
              { id: 'keyword-map', label: 'Keyword & Meta Sheet' },
              { id: 'image-inventory', label: 'Image Alt Text' },
              { id: 'schema-cms', label: 'Schema & CMS Editor' },
              { id: 'launch-checklist', label: 'Checklist' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg cursor-pointer ${
                  activeTab === tab.id ? 'bg-white text-[#141413] font-semibold shadow-xs' : 'text-[#4A4945]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'html-sitemap' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(['Main Pages', 'Service Pages', 'Industry Pages', 'Location Hubs', 'Blog Articles'] as const).map(
              (group) => {
                const items = COMPLETE_SEO_INVENTORY.filter((r) => r.pageGroup === group);
                return (
                  <div key={group} className="bg-white border border-[#E5E4DF] rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E5E4DF] pb-2">
                      <h2 className="text-sm font-bold text-[#141413]">{group}</h2>
                      <span className="text-xs font-mono-tabular text-[#6E6D68]">{items.length}</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      {items.map((item) => (
                        <li key={item.url}>
                          <a
                            href={item.url}
                            onClick={(e) => handleLink(e, item.url)}
                            className="font-medium text-[#1D4ED8] hover:underline"
                          >
                            {item.titleTag.split('|')[0].split('—')[0].trim()}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        )}

        {activeTab === 'keyword-map' && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {['All', 'Main Pages', 'Service Pages', 'Industry Pages', 'Location Hubs', 'Blog Articles'].map(
                (grp) => (
                  <button
                    key={grp}
                    type="button"
                    onClick={() => setGroupFilter(grp)}
                    className={`px-3 py-1 text-xs rounded-lg border cursor-pointer ${
                      groupFilter === grp ? 'bg-[#141413] text-white' : 'bg-white text-[#4A4945] border-[#E5E4DF]'
                    }`}
                  >
                    {grp}
                  </button>
                )
              )}
            </div>

            <div className="bg-white border border-[#E5E4DF] rounded-xl overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E5E4DF]">
                    <th className="py-2.5 px-3 font-bold">URL</th>
                    <th className="py-2.5 px-3 font-bold">Primary Keyword</th>
                    <th className="py-2.5 px-3 font-bold">Title Tag</th>
                    <th className="py-2.5 px-3 font-bold">H1</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E4DF]">
                  {filteredInventory.map((row) => (
                    <tr key={row.url}>
                      <td className="py-2.5 px-3 font-mono-tabular whitespace-nowrap">
                        <a href={row.url} onClick={(e) => handleLink(e, row.url)} className="text-[#1D4ED8] hover:underline">
                          {row.url}
                        </a>
                      </td>
                      <td className="py-2.5 px-3 font-medium">{row.primaryKeyword}</td>
                      <td className="py-2.5 px-3 text-[#4A4945]">{row.titleTag}</td>
                      <td className="py-2.5 px-3 text-[#4A4945]">{row.h1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'image-inventory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {IMAGE_INVENTORY_LIST.map((img) => (
              <div key={img.id} className="bg-white border border-[#E5E4DF] rounded-xl p-4 space-y-2 text-xs">
                <img src={img.src} alt={img.alt} referrerPolicy="no-referrer" className="w-full aspect-video object-cover rounded-lg" />
                <p className="font-mono-tabular text-[#1D4ED8] font-semibold">{img.seoFilename}</p>
                <p className="text-[#4A4945]">Alt: {img.alt}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schema-cms' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form onSubmit={handleSaveCmsChanges} className="bg-white border border-[#E5E4DF] rounded-xl p-6 space-y-3 text-xs">
              <h2 className="text-base font-bold text-[#141413]">Page Metadata &amp; H1 Editor</h2>
              <select
                value={cmsTargetUrl}
                onChange={(e) => handleSelectCmsUrl(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg font-mono-tabular"
              >
                {COMPLETE_SEO_INVENTORY.map((r) => (
                  <option key={r.url} value={r.url}>{r.url}</option>
                ))}
              </select>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Title Tag"
                className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg"
              />
              <textarea
                rows={2}
                value={editMetaDesc}
                onChange={(e) => setEditMetaDesc(e.target.value)}
                placeholder="Meta Description"
                className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg"
              />
              <input
                type="text"
                value={editH1}
                onChange={(e) => setEditH1(e.target.value)}
                placeholder="H1 Heading"
                className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg"
              />
              {cmsSavedMessage && <p className="text-[#15803D] font-semibold">{cmsSavedMessage}</p>}
              <button type="submit" className="px-4 py-2 font-semibold text-white bg-[#1D4ED8] rounded-lg cursor-pointer">
                Save Changes
              </button>
            </form>

            <div className="bg-white border border-[#E5E4DF] rounded-xl p-6 space-y-3 text-xs">
              <h2 className="text-base font-bold text-[#141413]">JSON-LD Inspector</h2>
              <select
                value={selectedSchemaUrl}
                onChange={(e) => setSelectedSchemaUrl(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg font-mono-tabular"
              >
                {COMPLETE_SEO_INVENTORY.map((r) => (
                  <option key={r.url} value={r.url}>{r.url}</option>
                ))}
              </select>
              <pre className="p-3 bg-[#141413] text-[#FAF9F6] rounded-lg text-[11px] font-mono-tabular overflow-x-auto max-h-64">
                {JSON.stringify(sampleJsonLd, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'launch-checklist' && (
          <div className="bg-white border border-[#E5E4DF] rounded-xl p-6 divide-y divide-[#E5E4DF] text-xs">
            {LAUNCH_CHECKLIST_ITEMS.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                <span><strong className="text-[#141413]">{item.category}:</strong> {item.requirement}</span>
                <span className="font-mono-tabular text-[#15803D] font-semibold shrink-0">{item.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
