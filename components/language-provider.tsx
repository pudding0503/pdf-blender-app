"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { pageMetadata, type Locale } from "@/lib/site";

const LanguageContext = createContext<{ locale: Locale; toggleLanguage: () => void } | null>(null);
const storageKey = "pdf-blender-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const pathname = usePathname();

  useEffect(() => {
    // Keep the server and initial client render identical; storage may be unavailable.
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "en" || saved === "zh") setLocale(saved);
    } catch { /* The language switch still works without persistent storage. */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    const metadata = pageMetadata(locale, pathname === "/privacy");
    document.title = metadata.title as string;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description ?? "");
  }, [locale, pathname]);

  function toggleLanguage() {
    const next = locale === "en" ? "zh" : "en";
    setLocale(next);
    try { localStorage.setItem(storageKey, next); } catch { /* Optional persistence. */ }
  }

  return <LanguageContext.Provider value={{ locale, toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
