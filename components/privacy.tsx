"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import policies from "@/data/privacy.json";
import { content } from "@/data/content";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";

function PolicyText({ text }: { text: string }) {
  const { locale } = useLanguage();
  const newTab = locale === "en" ? "(opens in a new tab)" : "（在新标签页打开）";
  const parts = text.split(/(\[.*?\]\(https:\/\/(?:vercel\.com\/legal\/privacy-policy|github\.com\/bitcookies\/pdf-blender\/issues)\))/g);
  return <>{parts.map((part, i) => {
    const link = part.match(/^\[(.*?)\]\((https:\/\/.*?)\)$/);
    return link ? <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" aria-label={`${link[1]} ${newTab}`}>{link[1]}</a> : part.replace(/\*\*/g, "");
  })}</>;
}
export default function Privacy() {
  const { locale } = useLanguage();
  const p = policies[locale];
  const c = content[locale];
  return <main id="main" className="privacy-page container">
    <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" />{c.back}</Link>
    <header className="privacy-header"><p className="section-kicker">PDF Blender · BITCOOKIES</p><h1>{p.title}</h1><p className="policy-date">{c.effective}: <time dateTime={site.policyDate}>{site.policyDate}</time></p><p><PolicyText text={p.intro} /></p></header>
    <nav className="policy-contents" aria-label={c.contents}><h2>{c.contents}</h2><ol>{p.sections.map((section, i) => <li key={section.title}><a href={`#policy-${i + 1}`}>{section.title.replace(/^\d+\.\s*/, "")}</a></li>)}</ol></nav>
    <article className="policy-body">{p.sections.map((section, i) => <section key={section.title} id={`policy-${i + 1}`}><h2>{section.title}</h2>{section.paragraphs.map((text, j) => <p key={j}><PolicyText text={text} /></p>)}</section>)}</article>
  </main>;
}
