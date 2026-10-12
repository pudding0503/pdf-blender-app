import Image from "next/image";
import { ArrowUpRight, Github, Check, ScanLine, Type, Layers, Sparkles, Copyright, SlidersHorizontal, Monitor } from "lucide-react";
import screenshot from "@/assets/screenshot-1.webp";
import { content } from "@/data/content";
import { site, type Locale } from "@/lib/site";
import Faq from "./faq";
import Screenshots from "./screenshots";

const icons = [ScanLine, Type, Layers, Sparkles, Copyright, SlidersHorizontal];
function GithubButton({ label }: { label: string }) { return <a className="primary-button" href={site.github}><Github size={18} aria-hidden="true" />{label}<ArrowUpRight size={16} aria-hidden="true" /></a>; }
export default function Home({ locale }: { locale: Locale }) {
  const c = content[locale];
  return <main id="main">
    <section className="hero container">
      <p className="eyebrow"><Monitor size={14} aria-hidden="true" />{c.label}</p>
      <h1>{c.headline}<br /><span>{c.headlineAccent}</span></h1>
      <p className="hero-description">{c.description}</p>
      <div className="hero-actions"><GithubButton label={c.cta} /><p className="store-note">{c.coming}</p></div>
      <ul className="hero-facts">{c.facts.map(fact => <li key={fact}><Check size={14} aria-hidden="true" />{fact}</li>)}</ul>
      <figure className="hero-figure"><Image className="app-screenshot" src={screenshot} alt={c.homeAlt} priority sizes="(max-width: 1120px) 92vw, 1000px" /><figcaption className="screenshot-caption">{c.homeCaption}<span>{c.platform}</span></figcaption></figure>
    </section>
    <section id="features" className="section container"><div className="section-heading"><p className="section-kicker">{c.nav[0]}</p><h2>{c.featuresTitle}</h2><p>{c.featuresSubtitle}</p></div>
      <div className="feature-grid">{c.features.map(([title, description], i) => { const Icon = icons[i]; return <article className="feature-card" key={title}><span className="feature-icon"><Icon size={22} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>; })}</div>
      <p className="feature-notice">{c.notice}</p>
    </section>
    <section id="how-it-works" className="section workflow-section"><div className="container"><div className="section-heading"><p className="section-kicker">{c.nav[1]}</p><h2>{c.stepsTitle}</h2></div>
      <ol className="steps">{c.steps.map(([title, description], i) => <li key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol><p className="steps-note">{c.stepsNote}</p>
      <Screenshots locale={locale} />
    </div></section>
    <section id="faq" className="section container faq-section"><div className="section-heading"><p className="section-kicker">FAQ</p><h2>{c.faqTitle}</h2></div><Faq locale={locale} /></section>
    <section className="container final-cta"><div><h2>{c.finalTitle}</h2><p>{c.finalDescription}</p></div><GithubButton label={c.cta} /></section>
  </main>;
}
