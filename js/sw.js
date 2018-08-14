let cashName = "rr-local-v1";

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            return cache.addAll(['/']);
        }).catch(err => console.log('caching failed', err))
    );
});