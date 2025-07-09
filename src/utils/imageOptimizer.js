/**
 * Image optimization utility functions
 * Helps with responsive images and performance optimization
 */

/**
 * Generates a srcset attribute for responsive images
 * @param {string} basePath - Base path of the image
 * @param {string} filename - Filename without extension
 * @param {string} extension - File extension (jpg, png, webp)
 * @param {Array} sizes - Array of sizes to include in srcset
 * @returns {string} Formatted srcset attribute
 */
export const generateSrcSet = (basePath, filename, extension, sizes = [320, 640, 960, 1280, 1920]) => {
  return sizes
    .map(size => `${basePath}/${filename}-${size}.${extension} ${size}w`)
    .join(', ');
};

/**
 * Returns appropriate image size based on viewport width
 * @param {Object} options - Configuration options
 * @returns {string} CSS sizes attribute
 */
export const getResponsiveSizes = ({ 
  sm = '100vw',
  md = '50vw',
  lg = '33vw',
  xl = '25vw',
  default: defaultSize = '100vw'
} = {}) => {
  return `
    (max-width: 640px) ${sm},
    (max-width: 768px) ${md},
    (max-width: 1024px) ${lg},
    (max-width: 1280px) ${xl},
    ${defaultSize}
  `;
};

/**
 * Formats image URL for optimization with query parameters
 * @param {string} url - Original image URL
 * @param {Object} options - Optimization options
 * @returns {string} Optimized image URL
 */
export const optimizeImageUrl = (url, { width, height, quality = 80, format = 'webp' } = {}) => {
  // For real implementation, this would connect to an image CDN or optimization service
  // This is a placeholder implementation
  const params = [];
  
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  if (quality) params.push(`q=${quality}`);
  if (format) params.push(`fm=${format}`);
  
  if (params.length === 0) return url;
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.join('&')}`;
};

/**
 * Get image dimensions from URL or path
 * @param {string} src - Image source URL
 * @returns {Promise<Object>} Image dimensions {width, height}
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export default {
  generateSrcSet,
  getResponsiveSizes,
  optimizeImageUrl,
  getImageDimensions
};
