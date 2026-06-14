const CACHE_NAME = 'wine-notes-v10';
const STATIC_ASSETS = [
  '/wine-karte/',
  '/wine-karte/index.html',
  '/wine-karte/manifest.json',
  '/wine-karte/assets/grape_gold.png',
  '/wine-karte/assets/wine_photo.png',
  '/wine-karte/assets/seal_look.png',
  '/wine-karte/assets/seal_aroma.png',
  '/wine-karte/assets/seal_taste.png',
  '/wine-karte/assets/seal_memo.png',
  '/wine-karte/assets/cat_full.png',
  '/wine-karte/assets/cat_round.png',
  '/wine-karte/assets/wineglass_t.png',
  '/wine-karte/assets/wineglass_gold.png',
  '/wine-karte/assets/gold_leaf.png',
  '/wine-karte/assets/grape.png',
  '/wine-karte/icons/icon-192.png',
  '/wine-karte/icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // HTML: network-first（更新が即反映されるよう）
  if (event.request.destination === 'document' ||
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 静的アセット: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return res;
      });
    })
  );
});
