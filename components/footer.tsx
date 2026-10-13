"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { content } from "@/data/content";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";
import AnimatedSection from "./animated-section";

export default function Footer() {
  const { locale } = useLanguage();
  const c = content[locale];
  const newTab = locale === "en" ? "(opens in a new tab)" : "（在新标签页打开）";
  return <footer className="site-footer"><AnimatedSection className="container">
    <div className="footer-grid">
      <div><Link className="brand" href="/"><Image src={logo} alt="" width={32} height={32} /><span>PDF Blender</span></Link><p className="footer-slogan">{c.slogan}</p><p className="muted footer-description">{c.footerDescription}</p></div>
      <div className="footer-links"><h2>{c.resources}</h2><a href={site.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${newTab}`}>GitHub</a><a href={site.license} target="_blank" rel="noopener noreferrer" aria-label={`${c.license} ${newTab}`}>{c.license}</a></div>
      <div className="footer-links"><h2>{c.contact}</h2><a href={site.issues} target="_blank" rel="noopener noreferrer" aria-label={`${c.issues} ${newTab}`}>{c.issues}</a><Link href="/privacy">{c.privacy}</Link></div>
    </div>
    <div className="footer-bottom"><a className="publisher-logo" href={site.publisher} target="_blank" rel="noopener noreferrer" aria-label={`BITCOOKIES ${newTab}`}><Image src="/bitcookies-words.svg" alt="BITCOOKIES" width={1445} height={410} /></a><a href={site.publisher} target="_blank" rel="noopener noreferrer" aria-label={`© 2026 BITCOOKIES ${newTab}`}>© 2026 BITCOOKIES</a></div>
  </AnimatedSection></footer>;
}
