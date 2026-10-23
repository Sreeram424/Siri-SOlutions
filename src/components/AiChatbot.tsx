import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  'Request Free Website & SEO Audit',
  'Custom Website Development',
  'Google & Meta Ads Strategy',
  'Recent Client Work & Portfolio',
  'Contact Vijayawada Office',
];

export const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: 'Hello! I am your Siri Solutions AI Growth Advisor. How can we help scale your search rankings, traffic, or website today?',
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      if (!res.ok) throw new Error('Network error');

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || 'Thank you for reaching out! Please contact us at contact@sirisolutions.in or WhatsApp +971 52 699 0466.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      // Offline fallback
      let fallback = `Thank you for your message! Our team in Vijayawada is ready to assist you.`;
      const q = query.toLowerCase();
      if (q.includes('audit')) {
        fallback = `We offer a comprehensive Free Website & SEO Audit within 24 hours. Message us directly on WhatsApp at +971 52 699 0466 or submit your URL at /contact/!`;
      } else if (q.includes('client') || q.includes('work') || q.includes('portfolio')) {
        fallback = `We recently built platforms for Dandamudi Box Office (dandamudiboxoffice.com), Dandamudi Biotech (dandamudibiotech.in), Silver Spring Realtors (silverspringrealtors.com), and provide SEO for Deccan Trails (deccantrails.com). Check our /portfolio/ page!`;
      } else {
        fallback = `Reach our Vijayawada team directly: Call +91 77940 06495, WhatsApp +971 52 699 0466, or email contact@sirisolutions.in!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: fallback,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-5 z-40 bg-[#111113] hover:bg-[#17B897] text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-200 border border-white/10 group cursor-pointer"
          aria-label="Open AI Growth Advisor"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#17B897] group-hover:bg-white animate-pulse" />
          <MessageSquare className="w-4 h-4 text-[#17B897] group-hover:text-white" />
          <span className="text-xs font-semibold tracking-tight pr-1">AI Growth Advisor</span>
        </button>
      )}

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-white border border-[#E5E4DF] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#111113] text-white p-4 flex items-center justify-between border-b border-[#262624] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                <Bot className="w-4 h-4 text-[#17B897]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    Siri Solutions Advisor
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#17B897]" />
                </div>
                <p className="text-[10px] text-[#A8A7A1]">
                  Vijayawada HQ · Online 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="https://wa.me/971526990466"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Direct"
                className="p-1.5 text-[#17B897] hover:bg-white/10 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#A8A7A1] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Contact Notice */}
          <div className="bg-[#FAF9F6] border-b border-[#E5E4DF] px-4 py-2 flex items-center justify-between text-[11px] text-[#4A4945]">
            <span>Need human strategist?</span>
            <div className="flex items-center gap-3">
              <a href="tel:+917794006495" className="font-semibold text-[#111113] hover:underline">
                Call +91 77940 06495
              </a>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-white text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-[#111113] text-white rounded-br-xs'
                      : 'bg-[#FAF9F6] border border-[#E5E4DF] text-[#141413] rounded-bl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#8C8B85] mt-1 px-1">{m.timestamp}</span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-[#6E6D68] text-xs py-1">
                <span className="w-2 h-2 rounded-full bg-[#17B897] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#17B897] animate-bounce [animation-delay:0.15s]" />
                <span className="w-2 h-2 rounded-full bg-[#17B897] animate-bounce [animation-delay:0.3s]" />
                <span className="text-[11px]">Consulting knowledge base...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-[#FAF9F6] border-t border-[#E5E4DF] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] font-medium text-[#4A4945] bg-white border border-[#E5E4DF] hover:border-[#111113] hover:text-[#111113] rounded-full px-2.5 py-1 whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#E5E4DF] flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about SEO, website design, ads, or pricing..."
              className="flex-1 px-3.5 py-2 text-xs bg-[#FAF9F6] border border-[#E5E4DF] rounded-xl text-[#141413] focus:outline-none focus:border-[#111113]"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2.5 bg-[#111113] text-white rounded-xl hover:bg-[#17B897] disabled:opacity-40 transition-colors cursor-pointer shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
