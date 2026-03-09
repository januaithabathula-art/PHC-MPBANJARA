// PHC Banjara Service Worker - v5 SELF-DESTRUCT
// This SW unregisters itself to prevent caching issues
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});
// Pass all fetches through without caching
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
