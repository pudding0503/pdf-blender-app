import "@/app/globals.css";
import "@fontsource-variable/inter";
import { Providers } from "@/app/providers";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { content } from "@/data/content";
import type { Locale } from "@/lib/site";

export default function SiteLayout({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return <html lang={locale === "zh" ? "zh-CN" : "en"} suppressHydrationWarning>
    <body><Providers>
      <a className="skip-link" href="#main">{content[locale].skip}</a>
      <NavBar locale={locale} />
      {children}
      <Footer locale={locale} />
    </Providers></body>
  </html>;
}
