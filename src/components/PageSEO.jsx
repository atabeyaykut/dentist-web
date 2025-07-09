import React from 'react';
import SEO from './SEO';

/**
 * PageSEO Component for adding page-specific SEO metadata
 * Extends the base SEO component with structured data for dental services
 */
function PageSEO({ 
  title, 
  description, 
  keywords,
  serviceType = null,
  serviceArea = "Istanbul, Turkey",
  priceRange = "₺₺₺",
  children 
}) {
  // Create structured data for dental services
  React.useEffect(() => {
    if (serviceType) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": `https://www.dentalclinic.com/${title.toLowerCase().replace(/\s+/g, '-')}`,
        "name": `Dental Clinic - ${title}`,
        "description": description,
        "medicalSpecialty": "Dentistry",
        "serviceType": serviceType,
        "areaServed": serviceArea,
        "priceRange": priceRange,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Dental Street",
          "addressLocality": "Istanbul",
          "addressRegion": "Istanbul",
          "postalCode": "34000",
          "addressCountry": "TR"
        },
        "telephone": "+90-212-555-1234",
        "url": `https://www.dentalclinic.com/services/${title.toLowerCase().replace(/\s+/g, '-')}`,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "15:00"
          }
        ]
      };

      // Add structured data script to head
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      script.setAttribute('data-react-seo', 'true');
      document.head.appendChild(script);

      // Clean up function
      return () => {
        document.querySelectorAll('script[data-react-seo="true"]').forEach(el => el.remove());
      };
    }
  }, [title, description, serviceType, serviceArea, priceRange]);

  return (
    <SEO 
      title={title}
      description={description}
      keywords={keywords}
    >
      {children}
    </SEO>
  );
}

export default PageSEO;
