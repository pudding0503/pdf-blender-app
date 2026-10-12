"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Languages } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import ThemeSwitcher from "./theme-switcher";
import { content } from "@/data/content";
import { homePath, privacyPath, site, type Locale } from "@/lib/site";

export default function NavBar({ locale }: { locale: Locale }) {
  const c = content[locale];
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const other = locale === "en" ? "zh" : "en";
  const languagePath = pathname.includes("privacy") ? privacyPath(other) : homePath(other);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); button.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const links = c.nav.map((label, i) => <a key={label} href={`${homePath(locale)}#${["features", "how-it-works", "faq"][i]}`} onClick={() => setOpen(false)}>{label}</a>);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href={homePath(locale)} className="brand"><Image src={logo} alt="" width={36} height={36} /> <span>PDF Blender</span></Link>
      <nav className="desktop-nav" aria-label={locale === "en" ? "Main navigation" : "主导航"}>{links}<a href={site.github}>GitHub</a></nav>
      <div className="header-controls">
        <Link className="language-link" href={languagePath} hrefLang={other === "zh" ? "zh-CN" : "en"} aria-label={other === "zh" ? "切换到中文" : "Switch to English"}><Languages size={16} aria-hidden="true" /><span>{other === "zh" ? "中文" : "EN"}</span></Link>
        <ThemeSwitcher locale={locale} />
        <button ref={button} type="button" className="menu-button" aria-label={open ? c.close : c.menu} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
    <nav id="mobile-nav" className="mobile-nav container" hidden={!open} aria-label={locale === "en" ? "Mobile navigation" : "移动导航"}>{links}<a href={site.github}><Github size={16} aria-hidden="true" /> GitHub</a></nav>
  </header>;
}
