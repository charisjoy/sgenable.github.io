const staticCacheName = 'site-static-v5';
const assets = [
 
];

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      return cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

// dynamic
// // activate event
// self.addEventListener('activate', evt => {
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       return Promise.all(keys
//         .filter(key =>  key !== dynamicCacheName)
//         .map(key => caches.delete(key))
//       );
//     })
//   );
// });
// // fetch event
// self.addEventListener('fetch', evt => {
//   evt.respondWith(
//     caches.match(evt.request).then(cacheRes => {
//       return cacheRes || fetch(evt.request).then(fetchRes => {
//         return caches.open(dynamicCacheName).then(cache => {
//           cache.put(evt.request.url, fetchRes.clone());
//           return fetchRes;
//         })
//       });
//     })
//   );
// });
