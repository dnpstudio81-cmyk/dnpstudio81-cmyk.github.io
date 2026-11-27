// 운빨카드 service worker: lets the site be added to the home screen.
// It caches nothing, so every visit always gets the latest site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font-family:sans-serif;background:#15130f;color:#f3ead7;display:grid;place-items:center;height:90vh;text-align:center"><p>인터넷 연결을 확인한 뒤<br>다시 열어 주세요.</p>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
