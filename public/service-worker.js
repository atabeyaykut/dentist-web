// Service Worker for Dental Clinic Website
const CACHE_NAME = 'dental-clinic-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/js/analytics.js'
  // Only include files that actually exist
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Cache files one by one to prevent failure if one file is missing
        const cachePromises = urlsToCache.map(url => {
          return cache.add(url).catch(error => {
            console.error(`Failed to cache: ${url}`, error);
            // Continue despite the error
            return Promise.resolve();
          });
        });
        return Promise.all(cachePromises);
      })
      .catch(error => {
        console.error('Service worker installation failed:', error);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache API calls or external resources
                if (
                  !event.request.url.includes('/api/') && 
                  event.request.url.startsWith(self.location.origin)
                ) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          });
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
