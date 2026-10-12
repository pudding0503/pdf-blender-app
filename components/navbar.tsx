"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Languages } from "lucide-react";
import logo from "@/assets/logo.png";
import ThemeSwitcher from "./theme-switcher";
import { useLanguage } from "./language-provider";
import { content } from "@/data/content";
import { site } from "@/lib/site";

export default function NavBar() {
  const { locale, toggleLanguage } = useLanguage();
  const c = content[locale];
  const languageLabel = locale === "en" ? "切换到中文" : "Switch to English";
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="brand"><Image src={logo} alt="" width={36} height={36} /><span>PDF Blender</span></Link>
    <nav className="header-nav" aria-label={locale === "en" ? "Main navigation" : "主导航"}><Link href="/privacy">{c.privacy}</Link></nav>
    <div className="header-controls">
      <a className="github-button" href={site.github} target="_blank" rel="noopener noreferrer" aria-label={locale === "en" ? "PDF Blender on GitHub (opens in a new tab)" : "PDF Blender GitHub 仓库（在新标签页打开）"}><Github size={18} aria-hidden="true" /><span>GitHub</span></a>
      <button type="button" className="icon-button" aria-label={languageLabel} title={languageLabel} onClick={toggleLanguage}><Languages size={19} aria-hidden="true" /></button>
      <ThemeSwitcher />
    </div>
  </div></header>;
}
