"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import ThemeSwitcher from "./theme-switcher";
import { useLanguage } from "./language-provider";
import { content } from "@/data/content";
import { site } from "@/lib/site";

export default function NavBar() {
  const { locale, toggleLanguage } = useLanguage();
  const c = content[locale];
  const languageLabel = locale === "en" ? "切换到中文" : "Switch to English";
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function returnToTop(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <header className="site-header" data-scrolled={scrolled}><div className="container header-inner">
    <Link href="/" className="brand" onClick={returnToTop}><Image src={logo} alt="" width={36} height={36} /><span>PDF Blender</span></Link>
    <nav className="header-nav" aria-label={locale === "en" ? "Main navigation" : "主导航"}><Link href="/privacy">{c.privacy}</Link></nav>
    <div className="header-controls">
      <a className="github-button" href={site.github} target="_blank" rel="noopener noreferrer" aria-label={locale === "en" ? "PDF Blender on GitHub (opens in a new tab)" : "PDF Blender GitHub 仓库（在新标签页打开）"}><Github size={18} aria-hidden="true" /><span>GitHub</span></a>
      <button type="button" className="icon-button language-button" aria-label={languageLabel} title={languageLabel} onClick={toggleLanguage}><span aria-hidden="true">{locale === "en" ? "EN" : "CH"}</span></button>
      <ThemeSwitcher />
    </div>
  </div></header>;
}
