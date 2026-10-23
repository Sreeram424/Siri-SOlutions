import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (href: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const fullItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-[#6E6D68]">
      <ol className="flex flex-wrap items-center gap-2">
        {fullItems.map((item, idx) => {
          const isLast = idx === fullItems.length - 1;
          return (
            <li key={item.href + idx} className="flex items-center gap-2">
              {idx > 0 && (
                <span aria-hidden="true" className="text-[#6E6D68]/60 select-none">
                  /
                </span>
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-[#141413] truncate max-w-[260px] sm:max-w-md"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                  }}
                  className="hover:text-[#1D4ED8] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
