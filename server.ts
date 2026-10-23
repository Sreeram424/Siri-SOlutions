import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI client on the server
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

const SYSTEM_INSTRUCTION = `You are the Siri Solutions AI Growth Advisor for Siri Solutions (sirisolutions.in), a premier digital marketing, SEO, and web engineering agency headquartered in Vijayawada, Andhra Pradesh, India, serving clients across India and the UAE.

Your goal is to answer visitor questions concisely, warmly, and knowledgeably, explain our digital growth capabilities, share client success stories, and invite visitors to book a consultation or contact our team directly.

Key Company Facts:
- Name: Siri Solutions (website: https://sirisolutions.in/)
- Tagline: Rooted in Strategy. Powered by Innovation.
- Headquarters: Vijayawada, Andhra Pradesh, India
- Direct Phone: +91 77940 06495 (India) and +971 52 699 0466 (UAE / International)
- WhatsApp: +971 52 699 0466 (https://wa.me/971526990466)
- Email: contact@sirisolutions.in
- 15 Core Capabilities:
  1. Search Engine Optimization (SEO)
  2. Local SEO Services (Google Maps / Business Profile)
  3. Technical SEO Services (Core Web Vitals, Crawl Budget, Schema)
  4. E-commerce SEO (Shopify / WooCommerce / Custom)
  5. SEO Audit Services (Comprehensive technical & competitor review)
  6. Generative Engine Optimization (GEO - ChatGPT, Perplexity, Google AI Overviews citation strategy)
  7. Google Ads Management (Search, Shopping, Performance Max)
  8. PPC Management
  9. Meta Ads Management (Facebook, Instagram with Conversions API)
  10. Social Media Marketing
  11. Content Marketing (Topic Clusters & Editorial Authority)
  12. Website Design (Figma, Clean UI/UX)
  13. Website Development (Sub-2s mobile speed, Next.js, React, modern web)
  14. Landing Page Development (High-converting campaign microsites)
  15. Conversion Rate Optimization (CRO)
- Verified Work & Clients:
  1. Dandamudi Box Office (https://dandamudiboxoffice.com/) — Official Film Production House Website Created
  2. Dandamudi Biotech (https://dandamudibiotech.in/) — Corporate Biotechnology & Ayurvedic Wellness Web Platform Created
  3. Silver Spring Realtors (https://silverspringrealtors.com/) — Luxury Real Estate Web Platform Created
  4. Deccan Trails (https://www.deccantrails.com/) — Search Engine Optimization (SEO Services) & Organic Traffic Growth
- Core Differentiators:
  - 100% Client Ownership of code, analytics, and advertising accounts
  - Sub-2.0s mobile performance benchmarks
  - Transparent weekly/monthly ROI and pipeline reporting
  - Dedicated team based in Vijayawada with multi-city reach (Hyderabad, Bengaluru, Chennai, Mumbai, Delhi, Pune, Visakhapatnam, and UAE)

Tone Guidelines:
- Professional, concise, welcoming, helpful. Avoid hyperbole or fluff.
- Keep answers under 3-4 short paragraphs or bullet points.
- Always offer to connect via WhatsApp (+971 52 699 0466), direct phone (+91 77940 06495), or email (contact@sirisolutions.in).`;

// Fallback response engine if GEMINI_API_KEY is not set or network fails
function generateFallbackReply(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('audit') || lower.includes('free audit') || lower.includes('review')) {
    return `We offer a comprehensive free Website & SEO Audit for businesses! Our team in Vijayawada reviews your technical crawl health, organic keywords, mobile Core Web Vitals, and competitor gaps within 24 hours.

To request yours, drop your website URL here or submit our contact form at /contact/. You can also message us directly on WhatsApp at +971 52 699 0466!`;
  }

  if (lower.includes('seo') || lower.includes('rank') || lower.includes('google search') || lower.includes('geo')) {
    return `Siri Solutions provides end-to-end SEO services including Technical SEO, Local SEO (Google Maps), E-commerce SEO, and Generative Engine Optimization (GEO for ChatGPT & Perplexity).

For example, we manage SEO for Deccan Trails (deccantrails.com), expanding their search rankings for nature retreats and camping around Hyderabad. Would you like a custom keyword roadmap for your industry?`;
  }

  if (lower.includes('website') || lower.includes('web') || lower.includes('develop') || lower.includes('design')) {
    return `We design and engineer high-speed, mobile-first websites with sub-2.0s Core Web Vitals and 100% client code ownership.

Recent websites we built include:
• Dandamudi Box Office (dandamudiboxoffice.com) — Film production portal
• Dandamudi Biotech (dandamudibiotech.in) — Bio-research & corporate platform
• Silver Spring Realtors (silverspringrealtors.com) — Luxury real estate portal

Would you like to discuss requirements for your new website or redesign?`;
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('pricing') || lower.includes('package')) {
    return `Our digital growth packages are custom-tailored to your project scope and targets:
• SEO & AI Search Retainers: Monthly structured sprints with bi-weekly reporting
• Performance PPC Ads: Google & Meta campaign engineering with CAPI tracking
• Custom Website Builds: One-time milestone-based pricing with complete source code delivery

Get an exact quote within 24 hours at /get-a-quote/ or call +91 77940 06495!`;
  }

  if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('email') || lower.includes('location') || lower.includes('address') || lower.includes('whatsapp')) {
    return `You can reach Siri Solutions directly:
• Headquarters: Vijayawada, Andhra Pradesh, India
• Direct Phone (India): +91 77940 06495
• Direct Phone (UAE): +971 52 699 0466
• WhatsApp: +971 52 699 0466 (https://wa.me/971526990466)
• Email: contact@sirisolutions.in

Our team is available Monday through Saturday to review your project.`;
  }

  if (lower.includes('client') || lower.includes('work') || lower.includes('portfolio') || lower.includes('past')) {
    return `We have partnered with leading businesses across entertainment, biotechnology, real estate, and hospitality:
1. Dandamudi Box Office (dandamudiboxoffice.com) — Website Created
2. Dandamudi Biotech (dandamudibiotech.in) — Website Created
3. Silver Spring Realtors (silverspringrealtors.com) — Website Created
4. Deccan Trails (deccantrails.com) — SEO Services

You can explore full project details on our /portfolio/ page!`;
  }

  return `Hello! Welcome to Siri Solutions. We are an India-focused digital marketing, SEO, paid media, and web engineering agency based in Vijayawada, Andhra Pradesh.

How can we help your business today?
1. Free Website & SEO Audit
2. Custom Website Design & Development
3. Google & Meta Ads Management
4. Connect with our Vijayawada team (+91 77940 06495 / WhatsApp: +971 52 699 0466)`;
}

// AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!aiClient) {
    // Graceful fallback when API key is not configured
    const fallbackReply = generateFallbackReply(message);
    return res.json({ reply: fallbackReply });
  }

  try {
    const formattedHistory = Array.isArray(history)
      ? history.slice(-6).map((h) => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: String(h.text || '') }],
        }))
      : [];

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        ...formattedHistory,
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
        maxOutputTokens: 600,
      },
    });

    const reply = response.text || generateFallbackReply(message);
    res.json({ reply });
  } catch (error) {
    console.error('Error generating AI response:', error);
    // Return friendly domain-specific fallback rather than breaking client UI
    const fallbackReply = generateFallbackReply(message);
    res.json({ reply: fallbackReply });
  }
});

// Vite Integration: Dev vs Production
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built static directory
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Siri Solutions server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
