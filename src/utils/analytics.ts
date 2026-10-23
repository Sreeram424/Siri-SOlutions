export interface LeadSubmissionRecord {
  id: string;
  submittedAt: string;
  fullName: string;
  businessEmail: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  requiredService: string;
  monthlyBudget: string;
  projectDetails: string;
  sourcePage: string;
}

export interface ConversionEventRecord {
  id: string;
  timestamp: string;
  eventName: 'generate_lead' | 'phone_click' | 'whatsapp_click' | 'quote_step_complete';
  label: string;
  pagePath: string;
}

const LEADS_STORAGE_KEY = 'siri_solutions_leads_v1';
const EVENTS_STORAGE_KEY = 'siri_solutions_ga4_events_v1';

export const trackConversionEvent = (
  eventName: ConversionEventRecord['eventName'],
  label: string,
  pagePath: string = window.location.pathname
) => {
  try {
    const newEvent: ConversionEventRecord = {
      id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      timestamp: new Date().toISOString(),
      eventName,
      label,
      pagePath,
    };

    // Push to standard GTM dataLayer if present
    const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: eventName,
      event_label: label,
      page_path: pagePath,
      timestamp: newEvent.timestamp,
    });

    const raw = localStorage.getItem(EVENTS_STORAGE_KEY);
    const list: ConversionEventRecord[] = raw ? JSON.parse(raw) : [];
    list.unshift(newEvent);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
    window.dispatchEvent(new Event('siri-analytics-updated'));
  } catch {
    // ignore storage errors
  }
};

export const saveLeadSubmission = (lead: Omit<LeadSubmissionRecord, 'id' | 'submittedAt'>): LeadSubmissionRecord => {
  const record: LeadSubmissionRecord = {
    ...lead,
    id: `lead_${Date.now()}`,
    submittedAt: new Date().toISOString(),
  };

  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    const list: LeadSubmissionRecord[] = raw ? JSON.parse(raw) : [];
    list.unshift(record);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore storage errors
  }

  trackConversionEvent('generate_lead', `${lead.requiredService} (${lead.companyName})`, lead.sourcePage);
  return record;
};

export const getSavedLeads = (): LeadSubmissionRecord[] => {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const getTrackedEvents = (): ConversionEventRecord[] => {
  try {
    const raw = localStorage.getItem(EVENTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
