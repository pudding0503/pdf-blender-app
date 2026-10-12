import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SkipLink from "@/components/skip-link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className={GeistSans.variable}><Providers>
    <SkipLink /><NavBar />{children}<Footer />
  </Providers></body></html>;
}
