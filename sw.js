self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // 排除 API 請求，不進行攔截處理以避開 CORS 限制
  if (url.hostname.includes('nntitestserver.com')) {
    return; 
  }

  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response('Offline');
    })
  );
});