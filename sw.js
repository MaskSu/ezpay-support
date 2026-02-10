// sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // 1. 完全不攔截 API 網域，避免 CORS 與 Fetch 報錯
    if (url.hostname.includes('nntitestserver.com')) {
        return; 
    }

    // 2. 處理其他請求並捕捉錯誤
    event.respondWith(
        fetch(event.request).catch((err) => {
            console.warn('[SW] Fetch 失敗:', event.request.url);
            // 回傳一個空的響應，防止 Uncaught Promise 報錯
            return new Response('Network error', { status: 408 });
        })
    );
});