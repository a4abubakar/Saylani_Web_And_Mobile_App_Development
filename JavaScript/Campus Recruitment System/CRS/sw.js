const cacheName = 'CRS';
const staticAssets = [
    './',
    './assets/css/style.css',
    './assets/index.html',
    './assets/script/app.js',
    './assets/img/campus_logo.png',
    './assets/img/PehlaJob.jpg',
    './assets/img/cover2.png',
    './assets/img/ecampus.jpg',
    './assets/img/maxresdefault.jpg',
    './assets/img/people.jpg'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(staticAssets);
        })
      );
})
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}