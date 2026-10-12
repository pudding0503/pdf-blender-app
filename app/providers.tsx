"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "@/components/language-provider";
import { MotionConfig } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user"><LanguageProvider>{children}</LanguageProvider></MotionConfig>
    </NextThemesProvider>
  );
}
