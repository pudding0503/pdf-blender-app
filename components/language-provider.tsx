"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { pageMetadata, type Locale } from "@/lib/site";

const LanguageContext = createContext<{ locale: Locale; toggleLanguage: () => void } | null>(null);
const storageKey = "pdf-blender-language";
let fallbackLocale: Locale = "en";
function languageSnapshot(): Locale {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === "en" || saved === "zh" ? saved : fallbackLocale;
  } catch { return fallbackLocale; }
}
function subscribeLanguage(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(storageKey, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(storageKey, callback);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // An English server snapshot keeps hydration stable; the browser reads its saved preference.
  const locale = useSyncExternalStore(subscribeLanguage, languageSnapshot, () => "en" as Locale);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    const metadata = pageMetadata(locale, pathname === "/privacy");
    document.title = metadata.title as string;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description ?? "");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.title as string);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.description ?? "");
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale === "zh" ? "zh_CN" : "en_US");
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(element => element.setAttribute("content", locale === "zh" ? "en_US" : "zh_CN"));
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", metadata.title as string);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metadata.description ?? "");
  }, [locale, pathname]);

  function toggleLanguage() {
    const next = locale === "en" ? "zh" : "en";
    fallbackLocale = next;
    try { localStorage.setItem(storageKey, next); } catch { /* Optional persistence. */ }
    window.dispatchEvent(new Event(storageKey));
  }

  return <LanguageContext.Provider value={{ locale, toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
