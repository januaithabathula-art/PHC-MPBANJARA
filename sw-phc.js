// PHC Banjara Service Worker
const CACHE = 'phc-banjara-v1';
const ASSETS = [
  '/PHC-MPBANJARA/PHC_App.html',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800;900&family=DM+Mono:wght@500&display=swap'
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e=>{
  // Always network first for Firebase (real-time data)
  if(e.request.url.includes('firebase') || e.request.url.includes('firebaseio')){
    return; // Don't cache Firebase requests
  }
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request))
  );
});
