import "./globals.css";
import "@fontsource-variable/inter";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SkipLink from "@/components/skip-link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><Providers>
    <SkipLink /><NavBar />{children}<Footer />
  </Providers></body></html>;
}
