import React, { Suspense } from 'react';
import { useIntersectionObserver } from '@site/src/hooks/useIntersectionObserver';
import { Skeleton } from '../Loading';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Component that defers rendering of children until visible in viewport.
 * Improves initial page load performance by deferring below-fold sections.
 */
export function LazySection({
  children,
  fallback = <Skeleton count={3} />,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
}: LazySectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}

export default LazySection;
