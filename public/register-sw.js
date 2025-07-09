// Register service worker for offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Preconnect to external domains
  const preconnectLinks = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://cdn.jsdelivr.net'
  ];
  
  preconnectLinks.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
  
  // Lazy load non-critical resources
  setTimeout(() => {
    const lazyScripts = document.querySelectorAll('script[data-lazy]');
    lazyScripts.forEach(script => {
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach(attr => {
        if (attr.name !== 'data-lazy') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });
      newScript.innerHTML = script.innerHTML;
      script.parentNode.replaceChild(newScript, script);
    });
  }, 2000);
});
