import React from 'react';

/**
 * SEO Component for managing document head metadata
 */
function SEO({ title, description, keywords, ogImage, ogUrl, children }) {
  // Set default values for props
  const siteTitle = "Dental Clinic | Professional Dental Care";
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || "Our dental clinic provides professional dental care services including general dentistry, cosmetic procedures, and emergency treatments.";
  const metaKeywords = keywords || "dental clinic, dentist, dental care, teeth cleaning, dental implants, cosmetic dentistry";
  const metaOgImage = ogImage || "/logo.png";
  const metaOgUrl = ogUrl || "https://www.dentalclinic.com";
  
  // Update document title
  React.useEffect(() => {
    document.title = metaTitle;
    
    // Add meta tags
    const metaTags = [
      { name: 'description', content: metaDescription },
      { name: 'keywords', content: metaKeywords },
      { property: 'og:title', content: metaTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:image', content: metaOgImage },
      { property: 'og:url', content: metaOgUrl },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: metaOgImage }
    ];
    
    // Remove any existing meta tags we might have added
    document.querySelectorAll('meta[data-react-seo="true"]').forEach(el => el.remove());
    
    // Add meta tags to head
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      meta.setAttribute('data-react-seo', 'true');
      document.head.appendChild(meta);
    });
    
    // Clean up function to remove meta tags when component unmounts
    return () => {
      document.querySelectorAll('meta[data-react-seo="true"]').forEach(el => el.remove());
    };
  }, [metaTitle, metaDescription, metaKeywords, metaOgImage, metaOgUrl]);
  
  return <>{children}</>;
}

export default SEO;
