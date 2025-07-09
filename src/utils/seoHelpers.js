/**
 * SEO Helper functions for dental website
 * Provides utility functions for improving SEO across the site
 */

/**
 * Generates canonical URL for the current page
 * @param {string} path - Current path (e.g., '/services/dental-implants')
 * @returns {string} Full canonical URL
 */
export const getCanonicalUrl = (path) => {
  const baseUrl = 'https://www.dentalclinic.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Creates breadcrumb structured data for SEO
 * @param {Array} items - Array of breadcrumb items [{name, url}]
 * @returns {Object} Structured data object for breadcrumbs
 */
export const createBreadcrumbData = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': getCanonicalUrl(item.url)
    }))
  };
};

/**
 * Creates FAQ structured data for SEO
 * @param {Array} items - Array of FAQ items [{question, answer}]
 * @returns {Object} Structured data object for FAQs
 */
export const createFaqData = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
};

/**
 * Generates meta description based on content
 * @param {string} content - Page content
 * @param {number} maxLength - Maximum description length
 * @returns {string} Optimized meta description
 */
export const generateMetaDescription = (content, maxLength = 160) => {
  // Strip HTML tags
  const plainText = content.replace(/<[^>]+>/g, '');
  
  // Get first few sentences
  let description = plainText.split(/[.!?]/).slice(0, 2).join('. ');
  
  // Truncate if needed
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }
  
  return description;
};

/**
 * Creates JSON-LD structured data for dental services
 * @param {Object} service - Service details
 * @returns {Object} Structured data for the service
 */
export const createServiceData = (service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    'name': service.title,
    'description': service.description,
    'procedureType': service.type || 'Dental',
    'bodyLocation': 'Mouth',
    'preparation': service.preparation || [],
    'followup': service.followup || [],
    'howPerformed': service.procedure || '',
    'performer': {
      '@type': 'Dentist',
      'name': 'Dental Clinic',
      'url': 'https://www.dentalclinic.com'
    }
  };
};

export default {
  getCanonicalUrl,
  createBreadcrumbData,
  createFaqData,
  generateMetaDescription,
  createServiceData
};
