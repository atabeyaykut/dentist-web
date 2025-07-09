import React, { lazy, Suspense } from 'react';

/**
 * Creates a lazy-loaded component with a fallback
 * @param {Function} importFunc - Dynamic import function
 * @param {Object} options - Configuration options
 * @returns {React.Component} Lazy loaded component
 */
export const lazyLoad = (importFunc, { fallback = null } = {}) => {
  const LazyComponent = lazy(importFunc);
  
  return props => (
    <Suspense fallback={fallback || <LoadingFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

/**
 * Default loading fallback component
 */
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-12">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default lazyLoad;
