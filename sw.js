// sw.js
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // 1. 排除 API 請求，不讓 Service Worker 攔截處理
  // 這樣就不會觸發 Service Worker 特有的 CORS 限制
  if (url.hostname.includes('nntitestserver.com')) {
    return; // 直接返回，交由瀏覽器原生處理
  }

  // 2. 其他靜態資源的處理
  e.respondWith(
    fetch(e.request).catch((err) => {
      // 這裡可以做簡單的錯誤記錄
      return new Response('Network error occurred');
    })
  );
});