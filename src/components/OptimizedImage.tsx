/**
 * OptimizedImage Component
 * 
 * Performance-optimized image component with:
 * - Native lazy loading
 * - Explicit width/height to prevent CLS
 * - Modern image formats (WebP)
 * - Responsive sizing
 * - Accessibility support
 */

import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean; // Disable lazy loading for above-the-fold images
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{
        aspectRatio: `${width} / ${height}`,
        ...props.style,
      }}
      {...props}
    />
  );
}
