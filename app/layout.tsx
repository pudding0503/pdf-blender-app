import "./globals.css";
import type { Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SkipLink from "@/components/skip-link";
import ServiceWorkerRegister from "@/components/service-worker-register";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151416" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className={GeistSans.variable}><Providers>
    <SkipLink /><NavBar />{children}<Footer /><ServiceWorkerRegister /><SpeedInsights />
  </Providers></body></html>;
}
