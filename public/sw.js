// Bump this revision whenever website assets change so clients discard stale caches.
const VERSION = "1.1.0";
const STATIC_CACHE = `pdf-blender-static-v${VERSION}`;
const PAGE_CACHE = `pdf-blender-pages-v${VERSION}`;
const OFFLINE_URL = "/offline.html";

const PRECACHE_URLS = [
  OFFLINE_URL,
  "/logo.png",
  "/pwa-icon-192.png",
  "/pwa-icon-512.png",
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/microsoft-store-en.svg",
  "/microsoft-store-zh.svg",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => (key.startsWith("pdf-blender-static-") || key.startsWith("pdf-blender-pages-")) && ![STATIC_CACHE, PAGE_CACHE].includes(key))
          .map(key => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

function isSameOrigin(request) {
  return new URL(request.url).origin === self.location.origin;
}

function isStaticRequest(url) {
  return url.pathname.startsWith("/_next/static/")
    || url.pathname.startsWith("/_next/image")
    || /\.(?:css|js|mjs|woff2?|png|jpe?g|webp|svg|ico)$/.test(url.pathname);
}

async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  // Optimized public images can vary by Accept; the generic prewarmed JPEG
  // remains a valid fallback for the same URL, width and quality offline.
  const cached = await cache.match(request, { ignoreVary: new URL(request.url).pathname === "/_next/image" });
  if (cached) return cached;
  const response = await fetch(request);
  if (response.status === 200) {
    // Storage limits must not turn a successful network response into an error.
    await cache.put(request, response.clone()).catch(() => {});
  }
  return response;
}

self.addEventListener("message", event => {
  if (event.data?.type !== "CACHE_PAGE" || !event.source) return;
  const page = new URL(event.data.url, self.location.origin);
  if (page.origin !== self.location.origin || !["/", "/privacy"].includes(page.pathname)) return;
  page.search = "";
  page.hash = "";
  event.waitUntil((async () => {
    await networkFirst(new Request(page, { headers: { Accept: "text/html" } }));
    const assets = Array.isArray(event.data.assets) ? event.data.assets : [];
    await Promise.allSettled(assets.map(asset => {
      const url = new URL(asset, self.location.origin);
      if (url.origin !== self.location.origin || url.pathname === "/sw.js" || !isStaticRequest(url)) return;
      return cacheFirst(new Request(url));
    }));
  })().catch(() => {}));
});

async function networkFirst(request) {
  const cache = await caches.open(PAGE_CACHE);
  try {
    const response = await fetch(request);
    if (response.status === 200) await cache.put(request, response.clone()).catch(() => {});
    return response;
  } catch {
    const staticCache = await caches.open(STATIC_CACHE);
    return (await cache.match(request)) || (await staticCache.match(OFFLINE_URL));
  }
}

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET" || !isSameOrigin(request)) return;
  const url = new URL(request.url);
  if (url.pathname === "/sw.js" || url.pathname === "/manifest.webmanifest") return;
  if (request.mode === "navigate") event.respondWith(networkFirst(request));
  else if (isStaticRequest(url)) event.respondWith(cacheFirst(request));
});
