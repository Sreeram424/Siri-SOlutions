import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SafeImage } from '../components/SafeImage';
import { BrandLogo } from '../components/BrandLogo';
import { LeadCaptureForm, buildMailtoLink, RECIPIENT_EMAIL } from '../components/LeadCaptureForm';
import { FaqAccordion } from '../components/FaqAccordion';
import { useResolvedPageCopy } from '../components/SeoHeadManager';
import { LOCATIONS_DATA } from '../data/locationsData';
import { SERVICES_DATA } from '../data/servicesData';
import { getSavedLeads, trackConversionEvent } from '../utils/analytics';

interface PageNavProps {
  onNavigate: (href: string) => void;
}

export const ContactPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1, imageAlt } = useResolvedPageCopy(
    '/contact/',
    'Contact Siri Solutions',
    'enterpriseOffice'
  );

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const contactFaqs = [
    {
      question: 'Where is Siri Solutions located?',
      answer: 'We are located in Vijayawada, Andhra Pradesh, India, and serve businesses across India and the UAE.',
    },
    {
      question: 'What are your contact numbers?',
      answer: 'You can reach us at +91 77940 06495 or +971 52 699 0466 (Phone & WhatsApp).',
    },
    {
      question: 'How quickly do you respond to enquiries?',
      answer: 'We respond to all phone, WhatsApp, and form enquiries within 24 hours.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact/' }]} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-3">
                <p className="text-xs text-[#6E6D68]">
                  Siri Solutions · Vijayawada, Andhra Pradesh, India
                </p>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#141413] leading-tight">
                  {h1}
                </h1>
                <p className="text-base text-[#4A4945] max-w-xl">
                  Connect with our team via phone, WhatsApp, or email for a free 30-minute strategy session.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-[#E5E4DF] rounded-xl space-y-2.5">
                  <BrandLogo size="sm" />
                  <p className="text-xs font-bold text-[#141413] pt-1">Address</p>
                  <p className="text-xs text-[#4A4945] leading-relaxed">
                    Siri Solutions<br />
                    Vijayawada, Andhra Pradesh,<br />
                    India
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E5E4DF] rounded-xl space-y-1.5 text-xs">
                  <p className="font-bold text-[#141413]">Direct Contact</p>
                  <p>
                    <span className="text-[#6E6D68]">Mobile 1: </span>
                    <a
                      href="tel:+917794006495"
                      onClick={() => trackConversionEvent('phone_click', 'Contact Page Phone 1', '/contact/')}
                      className="font-semibold text-[#1D4ED8] hover:underline"
                    >
                      +91 77940 06495
                    </a>
                  </p>
                  <p>
                    <span className="text-[#6E6D68]">Mobile 2: </span>
                    <a
                      href="tel:+971526990466"
                      onClick={() => trackConversionEvent('phone_click', 'Contact Page Phone 2', '/contact/')}
                      className="font-semibold text-[#1D4ED8] hover:underline"
                    >
                      +971 52 699 0466
                    </a>
                  </p>
                  <p>
                    <span className="text-[#6E6D68]">WhatsApp: </span>
                    <a
                      href="https://wa.me/971526990466"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackConversionEvent('whatsapp_click', 'Contact Page WhatsApp', '/contact/')}
                      className="font-semibold text-[#1D4ED8] hover:underline"
                    >
                      +971 52 699 0466
                    </a>
                  </p>
                  <p>
                    <span className="text-[#6E6D68]">Email: </span>
                    <a href="mailto:contact@sirisolutions.in" className="font-semibold text-[#141413] hover:underline">
                      contact@sirisolutions.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SafeImage imageKey="enterpriseOffice" customAlt={imageAlt} priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Vijayawada Map */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <LeadCaptureForm
            sourcePage="/contact/"
            onSuccessNavigate={onNavigate}
            heading="Send Us a Message"
          />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E5E4DF] rounded-xl p-5 space-y-4">
            <h2 className="text-base font-bold text-[#141413]">
              Location — Vijayawada, Andhra Pradesh
            </h2>
            <div className="aspect-4/3 w-full rounded-lg overflow-hidden border border-[#E5E4DF] bg-[#F3F2EE]">
              <iframe
                title="Siri Solutions Location — Vijayawada, Andhra Pradesh"
                src="https://www.google.com/maps?q=Vijayawada,Andhra+Pradesh,India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {LOCATIONS_DATA.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.slug}
                  onClick={(e) => handleLink(e, loc.slug)}
                  className="underline underline-offset-4 text-[#4A4945] hover:text-[#1D4ED8]"
                >
                  {loc.city}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E5E4DF] rounded-xl p-5">
            <FaqAccordion items={contactFaqs} heading="Quick FAQs" />
          </div>
        </div>
      </section>
    </div>
  );
};

export const GetAQuotePage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1 } = useResolvedPageCopy(
    '/get-a-quote/',
    'Request a Free Strategy Call & Quote',
    'seoAuditDesk'
  );

  return (
    <div className="space-y-12 pb-20">
      <section className="pt-6 border-b border-[#E5E4DF] pb-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Get a Quote', href: '/get-a-quote/' }]} onNavigate={onNavigate} />
          <h1 className="text-3xl sm:text-5xl font-bold text-[#141413]">{h1}</h1>
          <p className="text-base text-[#4A4945] max-w-xl">
            Share your website and goals below, or call/WhatsApp us at +91 77940 06495 / +971 52 699 0466.
          </p>
        </div>
      </section>

      <section className="max-w-[920px] mx-auto px-4 sm:px-6 lg:px-8">
        <LeadCaptureForm
          sourcePage="/get-a-quote/"
          onSuccessNavigate={onNavigate}
          heading="Project Details"
        />
      </section>
    </div>
  );
};

export const ThankYouPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const savedLeads = getSavedLeads();
  const latest = savedLeads[0];

  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white border border-[#E5E4DF] rounded-xl p-8 space-y-5">
        <BrandLogo size="sm" />
        <p className="text-xs font-mono-tabular font-semibold text-[#15803D]">
          Enquiry Sent to {RECIPIENT_EMAIL}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#141413]">
          Thank You{latest ? `, ${latest.fullName}` : ''}.
        </h1>
        <p className="text-sm text-[#4A4945]">
          Your details have been forwarded to <strong className="text-[#141413]">{RECIPIENT_EMAIL}</strong>. Our team at Siri Solutions (Vijayawada, Andhra Pradesh) will contact you within 24 hours.
        </p>
        {latest && (
          <div className="p-4 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg space-y-1 text-xs text-[#4A4945]">
            <p className="font-bold text-[#141413]">{latest.fullName} · {latest.companyName}</p>
            <p>Email: {latest.businessEmail} · Phone: {latest.phone}</p>
            <p>Service: {latest.requiredService}</p>
          </div>
        )}
        <div className="pt-2 flex flex-wrap gap-3">
          {latest && (
            <a
              href={buildMailtoLink(latest)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF]"
            >
              Send Copy via Email App ({RECIPIENT_EMAIL})
            </a>
          )}
          <a
            href="/"
            onClick={(e) => handleLink(e, '/')}
            className="px-5 py-2.5 text-xs font-semibold text-[#141413] bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg hover:bg-[#F3F2EE]"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1 } = useResolvedPageCopy(
    '/privacy-policy/',
    'Privacy Policy',
    'heroWorkspace'
  );

  return (
    <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy/' }]} onNavigate={onNavigate} />
      <div className="bg-white border border-[#E5E4DF] rounded-xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#4A4945] leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#141413]">{h1}</h1>
        <p>
          Siri Solutions (Vijayawada, Andhra Pradesh, India) respects your privacy and complies with India’s Digital Personal Data Protection (DPDP) Act.
        </p>
        <p>
          <strong className="text-[#141413]">Data Collected:</strong> We only collect contact details you submit via our enquiry forms (name, email, phone, company, website) and basic GA4 analytics.
        </p>
        <p>
          <strong className="text-[#141413]">Usage &amp; Contact:</strong> We use your details solely to respond to your enquiry. We never sell your data. Contact <strong className="text-[#141413]">contact@sirisolutions.in</strong> or call <strong className="text-[#141413]">+91 77940 06495</strong> for data requests.
        </p>
      </div>
    </div>
  );
};

export const TermsPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const { h1 } = useResolvedPageCopy(
    '/terms-and-conditions/',
    'Terms and Conditions',
    'heroWorkspace'
  );

  return (
    <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <Breadcrumbs items={[{ label: 'Terms', href: '/terms-and-conditions/' }]} onNavigate={onNavigate} />
      <div className="bg-white border border-[#E5E4DF] rounded-xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#4A4945] leading-relaxed">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#141413]">{h1}</h1>
        <p>
          By using https://sirisolutions.in/, you agree to these terms. Client engagements are governed by a separate written agreement.
        </p>
        <p>
          <strong className="text-[#141413]">Ownership:</strong> Clients retain ownership of their website code, domain, and ad accounts upon milestone completion.
        </p>
        <p>
          <strong className="text-[#141413]">Jurisdiction:</strong> Governed by the laws of India, Vijayawada, Andhra Pradesh.
        </p>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white border border-[#E5E4DF] rounded-xl p-8 space-y-5">
        <p className="text-xs font-mono-tabular text-[#B91C1C] font-semibold">404 · Page Not Found</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#141413]">Page Not Found</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
          {SERVICES_DATA.slice(0, 6).map((s) => (
            <a
              key={s.id}
              href={s.slug}
              onClick={(e) => handleLink(e, s.slug)}
              className="p-3 bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-xs font-semibold text-[#141413] hover:border-[#1D4ED8]"
            >
              {s.shortName} →
            </a>
          ))}
        </div>
        <div className="pt-2">
          <a
            href="/"
            onClick={(e) => handleLink(e, '/')}
            className="inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#1D4ED8] rounded-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};
