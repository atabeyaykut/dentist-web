import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage Component for performance optimization
 * Implements lazy loading for images with IntersectionObserver
 */
function LazyImage({ src, alt, className, placeholderSrc, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  
  // Default placeholder if none provided
  const defaultPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23cccccc'/%3E%3C/svg%3E";
  
  useEffect(() => {
    // Skip if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading when image is 200px from viewport
        threshold: 0.01
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };
  
  return (
    <div 
      ref={imgRef}
      className={`relative ${className || ''}`}
      style={{ 
        background: !isLoaded ? '#f3f4f6' : 'transparent',
        transition: 'background 0.3s ease'
      }}
      {...props}
    >
      {isInView && (
        <img
          src={src}
          alt={alt || ''}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoaded}
          loading="lazy"
        />
      )}
      
      {!isLoaded && (
        <img
          src={placeholderSrc || defaultPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default LazyImage;
