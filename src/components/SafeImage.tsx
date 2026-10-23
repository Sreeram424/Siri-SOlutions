import React, { useState, useEffect, useRef } from 'react';
import { IMAGE_LIBRARY, ImageAsset } from '../data/images';

interface SafeImageProps {
  imageKey: keyof typeof IMAGE_LIBRARY;
  customAlt?: string;
  customTitle?: string;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  imageKey,
  customAlt,
  customTitle,
  priority = false,
  className = '',
  showCaption = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const asset: ImageAsset = IMAGE_LIBRARY[imageKey] || IMAGE_LIBRARY.heroWorkspace;

  const altText = customAlt ?? asset.alt;
  const titleAttr = customTitle ?? asset.title;

  const aspectClass =
    asset.aspectRatio === '16:9'
      ? 'aspect-video'
      : asset.aspectRatio === '4:3'
      ? 'aspect-4/3'
      : 'aspect-square';

  useEffect(() => {
    let rafId = 0;

    const updateParallax = () => {
      const container = containerRef.current;
      const img = imgRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 800;

      // Normalized position relative to viewport center (-1 at top, 0 at center, +1 at bottom)
      const rawProgress = (rect.top + rect.height / 2 - viewportHeight / 2) / (viewportHeight / 2);
      const clampedProgress = Math.max(-1.3, Math.min(1.3, rawProgress));

      // Continuous bidirectional parallax shift on both forward & backward scrolls
      const imgOffsetY = clampedProgress * -30;
      const frameOffsetY = clampedProgress * 10;

      container.style.transform = `translate3d(0, ${frameOffsetY.toFixed(1)}px, 0)`;
      if (img) {
        img.style.transform = `translate3d(0, ${imgOffsetY.toFixed(1)}px, 0) scale(1.14)`;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <figure className="w-full" data-scroll-reveal="true">
      <div
        ref={containerRef}
        className={`relative overflow-hidden bg-[#ECEAE4] border border-[#E5E4DF] rounded-xl will-change-transform ${aspectClass} ${className}`}
      >
        {!hasError ? (
          <img
            ref={imgRef}
            src={asset.src}
            alt={altText}
            title={titleAttr}
            width={asset.width}
            height={asset.height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding={priority ? 'sync' : 'async'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            data-seo-filename={asset.seoFilename}
            className="w-full h-full object-cover object-center will-change-transform"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F3F2EE] to-[#E5E4DF] text-[#4A4945]"
            role="img"
            aria-label={altText}
          >
            <span className="font-mono-tabular text-xs text-[#6E6D68] mb-2">
              {asset.seoFilename}
            </span>
            <p className="text-sm font-medium text-[#141413] max-w-md">
              {asset.caption}
            </p>
          </div>
        )}
      </div>
      {showCaption && (
        <figcaption className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#6E6D68]">
          <span>{asset.caption}</span>
          <span className="font-mono-tabular text-[11px] text-[#6E6D68]/80">
            Asset: {asset.seoFilename}
          </span>
        </figcaption>
      )}
    </figure>
  );
};
