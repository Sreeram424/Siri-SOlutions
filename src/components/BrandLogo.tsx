import React, { useId } from 'react';

interface BrandLogoProps {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'light',
  size = 'md',
  className = '',
}) => {
  const rawId = useId();
  const maskId = `siri-logo-notch-${rawId.replace(/:/g, '')}`;

  const iconSizeClass =
    size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSizeClass =
    size === 'sm' ? 'text-[18px]' : size === 'lg' ? 'text-[26px]' : 'text-[22px]';
  const subSizeClass =
    size === 'sm' ? 'text-[7.5px]' : size === 'lg' ? 'text-[10px]' : 'text-[8.5px]';
  const dotSizeClass =
    size === 'sm' ? 'w-[4px] h-[4px]' : size === 'lg' ? 'w-[5.5px] h-[5.5px]' : 'w-[4.5px] h-[4.5px]';

  const isDarkTheme = theme === 'dark';

  return (
    <span className={`font-display whitespace-nowrap shrink-0 inline-flex items-center gap-2.5 ${className}`}>
      <span className={`relative ${iconSizeClass} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className={`${iconSizeClass} overflow-visible`}
          aria-hidden="true"
        >
          <defs>
            <mask id={maskId}>
              <rect x="-10" y="-10" width="120" height="120" fill="white" />
              <circle cx="81" cy="18" r="14.5" fill="black" />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            <g transform="rotate(-7 48 54)">
              <rect
                x="12"
                y="18"
                width="72"
                height="72"
                rx="18"
                fill="#111113"
                stroke={isDarkTheme ? '#334155' : 'none'}
                strokeWidth={isDarkTheme ? '2.5' : '0'}
              />
              <text
                x="48"
                y="69"
                textAnchor="middle"
                fill="#FFFFFF"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="800"
                fontSize="48"
              >
                S
              </text>
            </g>
          </g>
          <circle cx="81" cy="18" r="9.5" fill="#17B897" />
        </svg>
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`inline-flex items-baseline ${titleSizeClass} font-extrabold tracking-tight leading-none ${
            isDarkTheme ? 'text-white' : 'text-[#111113]'
          }`}
        >
          <span>Siri</span>
          <span className={`inline-block ${dotSizeClass} bg-[#2563EB] ml-[2px] mb-[1px]`} />
        </span>
        <span
          className={`${subSizeClass} font-normal tracking-[0.28em] mt-[4px] leading-none ${
            isDarkTheme ? 'text-[#E2E8F0]' : 'text-[#111113]'
          }`}
        >
          SOLUTIONS
        </span>
      </span>
    </span>
  );
};
