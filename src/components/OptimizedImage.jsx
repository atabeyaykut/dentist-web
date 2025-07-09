import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * A responsive and performance-optimized image component with lazy loading
 */
function OptimizedImage({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes = '100vw',
  quality = 80,
  placeholderColor = '#f3f4f6',
  onLoad,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  
  // Generate WebP version if not already WebP
  const webpSrc = src.endsWith('.webp') ? src : `${src.split('.').slice(0, -1).join('.')}.webp`;
  
  // Generate srcSet if width is provided
  const generateSrcSet = () => {
    if (!width) return '';
    
    // For demonstration, generate 3 sizes
    const sizes = [width/2, width, width*2];
    return sizes.map(size => `${src} ${size}w`).join(', ');
  };
  
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
    if (onLoad) onLoad();
  };
  
  const aspectRatio = width && height ? `${width} / ${height}` : 'auto';
  
  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        backgroundColor: placeholderColor,
        aspectRatio,
        transition: 'background-color 0.3s ease'
      }}
      {...props}
    >
      {isInView && (
        <picture>
          {/* WebP format for browsers that support it */}
          <source srcSet={generateSrcSet(webpSrc)} type="image/webp" sizes={sizes} />
          
          {/* Fallback for browsers that don't support WebP */}
          <source srcSet={generateSrcSet()} sizes={sizes} />
          
          <img
            src={src}
            alt={alt || ''}
            width={width}
            height={height}
            loading={loading}
            onLoad={handleImageLoaded}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </picture>
      )}
      
      {!isLoaded && isInView && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default OptimizedImage;
