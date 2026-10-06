// 낭독 앱 설치용 최소 서비스 워커 (항상 네트워크 우선)
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request).catch(function(){ return caches.match(e.request); }));
});
