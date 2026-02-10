// sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

// 必須監聽 fetch 事件，PWA 安裝提示才會生效
self.addEventListener('fetch', (event) => {
    // 排除 API 請求，避免 CORS 錯誤
    if (event.request.url.includes('nntitestserver.com')) {
        return;
    }
    event.respondWith(fetch(event.request));
});