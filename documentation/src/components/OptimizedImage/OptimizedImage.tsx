import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  srcSet?: string;
  placeholder?: 'blur' | 'none';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  decoding = 'async',
  sizes,
  srcSet,
  placeholder = 'none',
}: OptimizedImageProps) {
  // Generate modern format versions of the image
  const avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Build responsive srcsets if not provided
  const buildSrcSet = (base: string): string => {
    if (srcSet) return srcSet;
    // Mobile-first responsive sizes: 320px, 640px, 1280px
    return `${base} 1x, ${base.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '@2x.$&')} 2x`;
  };

  // Default sizes for mobile-responsive images
  const defaultSizes =
    '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 50vw, 33vw';

  const style = {
    ...(placeholder === 'blur' && {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),
  };

  return (
    <picture className={className} style={style}>
      {/* AVIF: Next-gen format for modern browsers */}
      <source srcSet={buildSrcSet(avifSrc)} type="image/avif" sizes={sizes || defaultSizes} />
      
      {/* WebP: Widely supported modern format */}
      <source srcSet={buildSrcSet(webpSrc)} type="image/webp" sizes={sizes || defaultSizes} />
      
      {/* Original format: Fallback for older browsers */}
      <source srcSet={buildSrcSet(src)} sizes={sizes || defaultSizes} />
      
      {/* Fallback img element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        sizes={sizes || defaultSizes}
      />
    </picture>
  );
}
