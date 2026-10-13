"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function canRegister() {
  return process.env.NODE_ENV === "production" && "serviceWorker" in navigator
    && (window.isSecureContext || window.location.hostname === "localhost");
}

export default function ServiceWorkerRegister() {
  const pathname = usePathname();
  useEffect(() => {
    if (!canRegister()) return;
    void navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).catch(() => {
      // PWA support is optional; a registration failure must not affect the site.
    });
  }, []);

  useEffect(() => {
    if (!canRegister()) return;
    let cancelled = false;
    void navigator.serviceWorker.ready.then(registration => {
      if (cancelled) return;
      // The first visit predates worker control; App Router navigation also
      // fetches RSC data rather than HTML. Cache a full document for either case.
      registration.active?.postMessage({
        type: "CACHE_PAGE",
        url: window.location.href,
        assets: performance.getEntriesByType("resource").map(resource => resource.name),
      });
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [pathname]);
  return null;
}
