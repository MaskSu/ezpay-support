// Service Worker 必備的安裝與抓取事件
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 保持空載，但必須存在才能觸發 PWA 安裝提示
  e.respondWith(fetch(e.request));
});