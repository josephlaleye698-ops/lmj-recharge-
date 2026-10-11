// Service worker minimal : aucune mise en cache, pour que chaque mise à jour du site soit visible tout de suite.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method === 'GET' && new URL(e.request.url).origin === self.location.origin) {
    e.respondWith(fetch(e.request));
  }
});
