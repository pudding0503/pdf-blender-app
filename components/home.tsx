"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ScanLine, Type, Layers, Sparkles, Copyright, SlidersHorizontal, Package } from "lucide-react";
import { useTheme } from "next-themes";
import { homeScreenshots, screenshotThemeOffset } from "@/data/screenshots";
import { content } from "@/data/content";
import { useLanguage } from "./language-provider";
import StoreButton from "./store-button";
import Faq from "./faq";
import Screenshots from "./screenshots";
import ScreenshotFrame from "./screenshot-frame";
import AnimatedSection from "./animated-section";

const icons = [ScanLine, Type, Layers, Sparkles, Copyright, SlidersHorizontal];

function HeroLine({ text, locale }: { text: string; locale: "en" | "zh" }) {
  const punctuation = locale === "zh" && /[，。]$/.test(text) ? text.slice(-1) : "";
  const content = punctuation ? text.slice(0, -1) : text;
  return <>{content}{punctuation && <span className="hero-punctuation" aria-hidden="true">{punctuation}</span>}</>;
}

export default function Home({ appVersion }: { appVersion: string }) {
  const { locale } = useLanguage();
  const { resolvedTheme } = useTheme();
  const c = content[locale];
  const reduced = useReducedMotion();
  return <main id="main">
    <section className="hero container">
      <motion.div className="hero-light" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 2, delay: reduced ? 0 : 0.5 }}><div /></motion.div>
      <motion.div data-reveal initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: reduced ? 0 : 0.6, type: "spring", bounce: 0 }}>
      <p className="eyebrow"><Package size={14} aria-hidden="true" />{c.versionLabel} v{appVersion}</p>
      <h1 aria-label={`${c.headline} ${c.headlineAccent}`}><span aria-hidden="true"><HeroLine text={c.headline} locale={locale} />{" "}<br /><span><HeroLine text={c.headlineAccent} locale={locale} /></span></span></h1>
      <p className="hero-description">{c.description}</p>
      <div className="hero-actions"><StoreButton /></div>
      <ul className="hero-facts">{c.facts.map(fact => <li key={fact}><Check size={14} aria-hidden="true" />{fact}</li>)}</ul>
      </motion.div>
      <AnimatedSection delay={0.15}><figure className="hero-figure"><ScreenshotFrame sources={homeScreenshots} selected={screenshotThemeOffset(locale, resolvedTheme === "dark", 1)} alts={[c.homeAlt, c.homeAlt, c.homeAlt, c.homeAlt]} locale={locale} /></figure></AnimatedSection>
    </section>
    <section id="features" className="section container"><div className="section-heading"><p className="section-kicker">{c.nav[0]}</p><h2>{c.featuresTitle}</h2><p>{c.featuresSubtitle}</p></div>
      <div className="feature-grid">{c.features.map(([title, description], i) => { const Icon = icons[i]; return <AnimatedSection key={i} delay={(i % 3) * 0.06} className="feature-reveal"><article className="feature-card"><span className="feature-icon"><Icon size={22} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article></AnimatedSection>; })}</div>
      <p className="feature-notice">{c.notice}</p>
    </section>
    <section id="how-it-works" className="section workflow-section"><div className="container"><div className="section-heading"><p className="section-kicker">{c.nav[1]}</p><h2>{c.stepsTitle}</h2></div>
      <ol className="steps">{c.steps.map(([title, description], i) => <li key={i}><AnimatedSection delay={i * 0.08}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{description}</p></AnimatedSection></li>)}</ol><p className="steps-note">{c.stepsNote}</p>
      <AnimatedSection><Screenshots locale={locale} /></AnimatedSection>
    </div></section>
    <section id="faq" className="section container faq-section"><AnimatedSection><div className="section-heading"><p className="section-kicker">FAQ</p><h2>{c.faqTitle}</h2></div><Faq locale={locale} /></AnimatedSection></section>
    <AnimatedSection><section className="container final-cta"><div><h2>{c.finalTitle}</h2><p>{c.finalDescription}</p></div><StoreButton /></section></AnimatedSection>
  </main>;
}
