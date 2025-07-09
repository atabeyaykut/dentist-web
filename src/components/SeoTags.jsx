import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl } from '../utils/seoHelpers';

/**
 * SeoTags Component
 * Manages page-specific SEO tags dynamically based on current route
 */
function SeoTags({ 
  title, 
  description, 
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData = null,
  children 
}) {
  const location = useLocation();
  const canonicalUrl = getCanonicalUrl(location.pathname);
  
  // Default values
  const pageTitle = title ? `${title} | Dental Clinic` : 'Dental Clinic | Professional Dental Care';
  const pageDescription = description || 'Our dental clinic provides professional dental care services including general dentistry, cosmetic procedures, and emergency treatments.';
  
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: pageDescription },
      { name: 'keywords', content: keywords || 'dental clinic, dentist, dental care' },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage || '/social-preview.jpg' },
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: ogImage || '/social-preview.jpg' }
    ];
    
    if (noindex) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }
    
    // Remove existing meta tags we might have added
    document.querySelectorAll('meta[data-react-seo="true"]').forEach(el => el.remove());
    
    // Add meta tags to head
    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;
      
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      meta.setAttribute('data-react-seo', 'true');
      document.head.appendChild(meta);
    });
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Add structured data if provided
    if (structuredData) {
      // Remove any existing structured data
      document.querySelectorAll('script[data-react-structured-data="true"]').forEach(el => el.remove());
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      script.setAttribute('data-react-structured-data', 'true');
      document.head.appendChild(script);
    }
    
    // Clean up function
    return () => {
      document.querySelectorAll('meta[data-react-seo="true"]').forEach(el => el.remove());
      document.querySelectorAll('script[data-react-structured-data="true"]').forEach(el => el.remove());
    };
  }, [pageTitle, pageDescription, keywords, canonicalUrl, ogImage, ogType, twitterCard, noindex, structuredData]);
  
  return <>{children}</>;
}

export default SeoTags;
