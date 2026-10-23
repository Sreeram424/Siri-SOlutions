import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  heading?: string;
  subheading?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  heading = 'Frequently Asked Questions',
  subheading,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {heading && (
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141413]">{heading}</h2>
          {subheading && <p className="text-sm sm:text-base text-[#4A4945] max-w-2xl">{subheading}</p>}
        </div>
      )}

      <div className="divide-y divide-[#E5E4DF] border-t border-b border-[#E5E4DF]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-4">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between gap-4 text-left py-1.5 text-base font-semibold text-[#141413] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6E6D68] shrink-0 mt-0.5 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                    }`}
                  />
                </button>
              </h3>
              {isOpen && (
                <div className="mt-2.5 pr-8 text-sm sm:text-[15px] text-[#4A4945] leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
