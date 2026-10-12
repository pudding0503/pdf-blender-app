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
  return <footer className="site-footer"><AnimatedSection className="container">
    <div className="footer-grid">
      <div><Link className="brand" href="/"><Image src={logo} alt="" width={32} height={32} /><span>PDF Blender</span></Link><p className="footer-slogan">{c.slogan}</p><p className="muted footer-description">{c.footerDescription}</p></div>
      <div className="footer-links"><h2>{c.resources}</h2><a href={site.github}>GitHub</a><a href={site.license}>{c.license}</a></div>
      <div className="footer-links"><h2>{c.contact}</h2><span className="contact-address">{site.contact}</span><p className="contact-hint">{c.contactHint}</p><a href={site.issues}>{c.issues}</a><Link href="/privacy">{c.privacy}</Link></div>
    </div>
    <div className="footer-bottom"><span className="publisher-logo"><Image src="/bitcookies-words.svg" alt="BITCOOKIES" width={1445} height={410} /></span><span>© 2026 Bitcookies</span></div>
  </AnimatedSection></footer>;
}
