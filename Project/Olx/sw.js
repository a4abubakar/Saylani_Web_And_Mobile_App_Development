const cacheName = "OLX-Pak ";
const staticAssets = [
    './',
    '/index.html',
    '/assets/css/bootstrap/bootstrap.css',
    '/assets/css/bootstrap/bootstrap.min.css',
    '/assets/css/style.css',
    '/assets/fonts/font.woff2',
    '/assets/img/128.png',
    '/assets/img/144.png',
    '/assets/img/192.png',
    '/assets/img/256.png',
    '/assets/img/bike.png',
    '/assets/img/car.png',
    '/assets/img/crockery.jpg',
    '/assets/img/crockery.png',
    '/assets/img/favicon.ico',
    '/assets/img/furniture.jpg',
    '/assets/img/hero-bg-pk.fcc857a1.jpg',
    '/assets/img/kids.png',
    '/assets/img/logo.png',
    '/assets/img/mobile.png',
    '/assets/img/olx-617x340.png',
    '/assets/img/search.png',
    '/assets/img/searchbackground.png',
    '/assets/js/bootstrap/bootstrap.js',
    '/assets/js/bootstrap/bootstrap.min.js',
    'assets/js/index.js',
    'assets/js/signOut.js',
    '/pages/afterSignIn/Home.html',
    '/pages/afterSignIn/Home.js',
    '/pages/conversation/conversation.css',
    '/pages/conversation/conversation.html',
    '/pages/conversation/conversation.js',
    '/pages/conversation/conversationAd.html',
    '/pages/conversation/mainConversation.html',
    '/pages/conversation/mainConversation.js',
    '/pages/conversation/mainConversationAd.html',
    '/pages/conversation/mainConversationAd.js',
    '/pages/myAccount/myAccount.css',
    '/pages/myAccount/myAccount.html',
    '/pages/myAccount/myAccount.js',
    '/pages/myAccount/myProfile.html',
    '/pages/myAccount/myProfile.js',
    '/pages/myAccount/submitAdd.html',
    '/pages/myAccount/submitAdd.js',
    '/pages/signIn/signIn.css',
    '/pages/signIn/signIn.html',
    '/pages/signIn/signIn.js',
    '/pages/signUp/signUp.css',
    '/pages/signUp/signUp.html',
    '/pages/signUp/signUp.js',
]

self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Install");
    self.skipWaiting();
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log("[ServiceWorker] Caching app shell");
            return cache.addAll(staticAssets);
        })
    );
});

self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log("[ServiceWorker] Removing old cache", key);
                    return caches.delete(key);
                }
            })
            );
        })
    );
    return self.clients.claim();
});

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

self.addEventListener("fetch", function (e) {
    console.log("[Service Worker] Fetch", e.request.url);
    e.respondWith(
        caches.match(e.request)
            .then(function (response) {
                return response || fetch(e.request);
            })
    );
});