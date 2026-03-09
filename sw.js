/* ═══════════════════════════════════════════════
   Service Worker — Coberturas Carpintería
   Estrategia: Cache First + Network Fallback
   ═══════════════════════════════════════════════ */

const CACHE_NAME = 'carpinteria-v1';
const CACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-48.png',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-167.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-256.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './favicon.ico'
];

/* ── INSTALL: pre-cache all assets ── */
self.addEventListener('install', event => {
  console.log('[SW] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando archivos');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: limpia caches antiguas ── */
self.addEventListener('activate', event => {
  console.log('[SW] Activando...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Borrando cache antigua:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: Cache First, Network Fallback ── */
self.addEventListener('fetch', event => {
  // Solo interceptamos requests GET del mismo origen o assets conocidos
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          return cached;
        }
        return fetch(event.request)
          .then(response => {
            // Solo cacheamos responses válidas
            if (!response || response.status !== 200 || response.type === 'opaque') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            return response;
          })
          .catch(() => {
            // Offline fallback: devuelve index.html para navegación
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
