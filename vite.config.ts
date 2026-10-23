import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function apiChatPlugin(): Plugin {
  return {
    name: 'api-chat-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const { message, history } = JSON.parse(body || '{}');
            let reply = '';

            if (process.env.GEMINI_API_KEY) {
              const { GoogleGenAI } = await import('@google/genai');
              const ai = new GoogleGenAI({
                apiKey: process.env.GEMINI_API_KEY,
                httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
              });

              const formattedHistory = Array.isArray(history)
                ? history.slice(-6).map((h: { role: string; text: string }) => ({
                    role: h.role === 'user' ? 'user' : 'model',
                    parts: [{ text: String(h.text || '') }],
                  }))
                : [];

              const systemInstruction = `You are the Siri Solutions AI Growth Advisor for Siri Solutions (sirisolutions.in), a premier digital marketing, SEO, and web engineering agency based in Vijayawada, Andhra Pradesh, India.
Key details:
- Services: SEO, Local SEO, Technical SEO, E-commerce SEO, GEO, Google Ads, Meta Ads, Website Design, Website Development, Landing Pages, CRO.
- Verified Clients: Dandamudi Box Office (dandamudiboxoffice.com), Dandamudi Biotech (dandamudibiotech.in), Silver Spring Realtors (silverspringrealtors.com), Deccan Trails (deccantrails.com - SEO).
- Direct Contact: Phone +91 77940 06495, UAE Phone +971 52 699 0466, WhatsApp +971 52 699 0466, Email contact@sirisolutions.in.
- Keep responses concise, helpful, and welcoming. Offer consultation via WhatsApp or phone.`;

              const response = await ai.models.generateContent({
                model: 'gemini-3.8-flash',
                contents: [
                  ...formattedHistory,
                  { role: 'user', parts: [{ text: String(message || '') }] },
                ],
                config: {
                  systemInstruction,
                  temperature: 0.6,
                  maxOutputTokens: 500,
                },
              });

              reply = response.text || '';
            }

            if (!reply) {
              const msgLower = (message || '').toLowerCase();
              if (msgLower.includes('audit')) {
                reply = 'We offer a free comprehensive Website & SEO Audit within 24 hours. Contact our Vijayawada team on WhatsApp at +971 52 699 0466 or submit your website at /contact/!';
              } else if (msgLower.includes('client') || msgLower.includes('work')) {
                reply = 'We recently built platforms for Dandamudi Box Office (dandamudiboxoffice.com), Dandamudi Biotech (dandamudibiotech.in), Silver Spring Realtors (silverspringrealtors.com), and manage SEO for Deccan Trails (deccantrails.com). Check our /portfolio/ page!';
              } else {
                reply = 'Hello from Siri Solutions! How can we assist your business today? Reach us directly at +91 77940 06495, WhatsApp +971 52 699 0466, or contact@sirisolutions.in.';
              }
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ reply }));
          } catch (e) {
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                reply:
                  'Thank you for contacting Siri Solutions! For immediate assistance, reach our Vijayawada team at +91 77940 06495, WhatsApp +971 52 699 0466, or contact@sirisolutions.in.',
              })
            );
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiChatPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
