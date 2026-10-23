import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { saveLeadSubmission, trackConversionEvent } from '../utils/analytics';

interface LeadCaptureFormProps {
  defaultService?: string;
  sourcePage: string;
  onSuccessNavigate?: (href: string) => void;
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

export const RECIPIENT_EMAIL = 'contact@sirisolutions.in';

export const buildMailtoLink = (data: {
  fullName: string;
  businessEmail: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  requiredService: string;
  projectDetails: string;
  sourcePage: string;
}) => {
  const subject = encodeURIComponent(
    `New Enquiry from ${data.fullName} (${data.companyName}) — ${data.requiredService}`
  );
  const body = encodeURIComponent(
    [
      `New Website Consultation Enquiry (sirisolutions.in)`,
      `--------------------------------------------------`,
      `Full Name: ${data.fullName}`,
      `Business Email: ${data.businessEmail}`,
      `Mobile / WhatsApp: ${data.phone}`,
      `Company Name: ${data.companyName}`,
      `Website URL: ${data.websiteUrl}`,
      `Service Needed: ${data.requiredService}`,
      `Message: ${data.projectDetails}`,
      `Source Page: https://sirisolutions.in${data.sourcePage}`,
    ].join('\n')
  );
  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
};

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  defaultService = 'Search Engine Optimization',
  sourcePage,
  onSuccessNavigate,
  heading = 'Request a Consultation',
  subheading = 'Fill out the form below to send your enquiry directly to contact@sirisolutions.in.',
}) => {
  const [fullName, setFullName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [requiredService, setRequiredService] = useState(defaultService);
  const [projectDetails, setProjectDetails] = useState('');
  const [botField, setBotField] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [submittedRecordId, setSubmittedRecordId] = useState<string | null>(null);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail.trim() || !emailRegex.test(businessEmail.trim())) {
      nextErrors.businessEmail = 'Valid email required';
    }
    const cleanedPhone = phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || !/^\+?[0-9]{10,14}$/.test(cleanedPhone)) {
      nextErrors.phone = 'Valid phone number required';
    }
    if (!companyName.trim()) {
      nextErrors.companyName = 'Required';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botField || isSending) return;
    if (!validate()) return;

    const payload = {
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim(),
      phone: phone.trim(),
      companyName: companyName.trim(),
      websiteUrl: websiteUrl.trim() || 'Not provided',
      requiredService,
      monthlyBudget: 'Standard',
      projectDetails: projectDetails.trim() || 'Consultation request',
      sourcePage,
    };

    setIsSending(true);

    const record = saveLeadSubmission(payload);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Siri Solutions Enquiry: ${payload.fullName} (${payload.companyName})`,
          _replyto: payload.businessEmail,
          _template: 'table',
          _captcha: 'false',
          'Full Name': payload.fullName,
          'Business Email': payload.businessEmail,
          'Mobile / WhatsApp': payload.phone,
          'Company Name': payload.companyName,
          'Website URL': payload.websiteUrl,
          'Service Needed': payload.requiredService,
          Message: payload.projectDetails,
          'Source Page': `https://sirisolutions.in${payload.sourcePage}`,
          'Reference ID': record.id,
        }),
      });

      if (!response.ok) {
        // Fallback to opening default mail client addressed to contact@sirisolutions.in
        window.location.href = buildMailtoLink(payload);
      }
    } catch {
      // Fallback to opening default mail client addressed to contact@sirisolutions.in
      window.location.href = buildMailtoLink(payload);
    } finally {
      setIsSending(false);
      setSubmittedRecordId(record.id);
      if (onSuccessNavigate) {
        onSuccessNavigate('/thank-you/');
      }
    }
  };

  if (submittedRecordId) {
    const mailtoHref = buildMailtoLink({
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim(),
      phone: phone.trim(),
      companyName: companyName.trim(),
      websiteUrl: websiteUrl.trim() || 'Not provided',
      requiredService,
      projectDetails: projectDetails.trim() || 'Consultation request',
      sourcePage,
    });

    return (
      <div className="bg-white border border-[#E5E4DF] rounded-xl p-6 space-y-3">
        <p className="text-xs font-mono-tabular text-[#15803D] font-medium">
          Sent to {RECIPIENT_EMAIL} · Ref: {submittedRecordId}
        </p>
        <h3 className="text-lg font-bold text-[#141413]">
          Thank you, {fullName}. Your enquiry has been sent to {RECIPIENT_EMAIL}.
        </h3>
        <div className="pt-2 flex flex-wrap gap-3 text-xs">
          <a
            href={mailtoHref}
            className="px-4 py-2 font-medium text-white bg-[#1D4ED8] rounded-lg hover:bg-[#1E40AF]"
          >
            Open in Email App ({RECIPIENT_EMAIL}) →
          </a>
          <a
            href="https://wa.me/971526990466"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversionEvent('whatsapp_click', 'Post-Form WhatsApp', sourcePage)}
            className="px-4 py-2 font-medium text-[#141413] bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg hover:bg-[#F3F2EE]"
          >
            WhatsApp: +971 52 699 0466 →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E4DF] rounded-xl p-6 sm:p-8">
      <div className="mb-5 space-y-1">
        <h3 className="text-xl font-bold text-[#141413]">{heading}</h3>
        <p className="text-xs sm:text-sm text-[#4A4945]">{subheading}</p>
      </div>

      <form
        action={`https://formsubmit.co/${RECIPIENT_EMAIL}`}
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4"
      >
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`fullName_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
              Full Name *
            </label>
            <input
              id={`fullName_${sourcePage}`}
              name="Full Name"
              type="text"
              required
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
            />
            {errors.fullName && <p className="mt-1 text-xs text-[#B91C1C]">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor={`businessEmail_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
              Business Email *
            </label>
            <input
              id={`businessEmail_${sourcePage}`}
              name="Business Email"
              type="email"
              required
              placeholder="you@company.com"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
            />
            {errors.businessEmail && <p className="mt-1 text-xs text-[#B91C1C]">{errors.businessEmail}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`phone_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
              Mobile / WhatsApp *
            </label>
            <input
              id={`phone_${sourcePage}`}
              name="Mobile / WhatsApp"
              type="tel"
              required
              placeholder="+91 77940 06495"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
            />
            {errors.phone && <p className="mt-1 text-xs text-[#B91C1C]">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor={`companyName_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
              Company Name *
            </label>
            <input
              id={`companyName_${sourcePage}`}
              name="Company Name"
              type="text"
              required
              placeholder="Company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
            />
            {errors.companyName && <p className="mt-1 text-xs text-[#B91C1C]">{errors.companyName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`websiteUrl_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
              Website URL
            </label>
            <input
              id={`websiteUrl_${sourcePage}`}
              name="Website URL"
              type="url"
              placeholder="https://"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
            />
          </div>

          <div>
            <label htmlFor={`requiredService_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
              Service Needed
            </label>
            <select
              id={`requiredService_${sourcePage}`}
              name="Service Needed"
              value={requiredService}
              onChange={(e) => setRequiredService(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
            >
              <option value="Full Digital Growth">Full Digital Growth (SEO + Ads + Web)</option>
              {SERVICES_DATA.map((s) => (
                <option key={s.id} value={s.shortName}>
                  {s.shortName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor={`projectDetails_${sourcePage}`} className="block text-xs font-medium text-[#141413] mb-1">
            Message (Optional)
          </label>
          <textarea
            id={`projectDetails_${sourcePage}`}
            name="Message"
            rows={2}
            placeholder="Brief note on your goals..."
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            className="w-full px-3.5 py-2 text-sm bg-[#FAF9F6] border border-[#E5E4DF] rounded-lg text-[#141413] focus:outline-none focus:border-[#1D4ED8]"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSending}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#111113] rounded-xl hover:bg-[#2563EB] disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap"
          >
            {isSending ? 'Sending to contact@sirisolutions.in...' : 'Submit Enquiry'}
          </button>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#4A4945]">
            <a
              href="tel:+917794006495"
              onClick={() => trackConversionEvent('phone_click', 'Form Call +91 77940 06495', sourcePage)}
              className="font-semibold text-[#141413] underline underline-offset-4 hover:text-[#1D4ED8]"
            >
              +91 77940 06495
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="tel:+971526990466"
              onClick={() => trackConversionEvent('phone_click', 'Form Call +971 52 699 0466', sourcePage)}
              className="font-semibold text-[#141413] underline underline-offset-4 hover:text-[#1D4ED8]"
            >
              +971 52 699 0466
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/971526990466"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversionEvent('whatsapp_click', 'Form WhatsApp', sourcePage)}
              className="font-semibold text-[#1D4ED8] underline underline-offset-4"
            >
              WhatsApp: +971 52 699 0466
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
