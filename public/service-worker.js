// const CACHE_NAME = 'my-app-cache-v1';
// const ASSETS_TO_CACHE = [
//   '/',
//   '/index.html',
//   '/styles.css',
//   '/script.js',
//   '/logo.png'
// ];

// // 📌 **Install Event:** Cache static assets
// self.addEventListener('install', event => {
//   console.log('Service Worker installing...');
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       console.log('Caching app shell...');
//       return cache.addAll(ASSETS_TO_CACHE);
//     })
//   );
//   self.skipWaiting(); // Activate worker immediately
// });

// // 📌 **Activate Event:** Delete old caches
// self.addEventListener('activate', event => {
//   console.log('Service Worker activated');
//   event.waitUntil(
//     caches.keys().then(cacheNames =>
//       Promise.all(
//         cacheNames.map(cache => {
//           if (cache !== CACHE_NAME) {
//             console.log('Deleting old cache:', cache);
//             return caches.delete(cache);
//           }
//         })
//       )
//     )
//   );
//   self.clients.claim(); // Take control of open pages
// });

// // 📌 **Fetch Event:** Serve from cache or fetch from network
// self.addEventListener('fetch', event => {
//   console.log('Fetching:', event.request.url);
//   event.respondWith(
//     caches.match(event.request).then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });



self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
  e.waitUntil(
    caches.open('ecom-cache').then((cache) => {
      return cache.addAll([
        '/deploy2/',
        '/deploy2/index.html',
        '/deploy2/manifest.json',
        '/deploy2/logo192.png',
        '/deploy2/logo512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

