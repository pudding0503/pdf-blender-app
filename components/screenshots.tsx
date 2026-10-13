"use client";
import { useState, useRef, type KeyboardEvent } from "react";
import { useTheme } from "next-themes";
import { configScreenshots } from "@/data/screenshots";
import { content } from "@/data/content";
import type { Locale } from "@/lib/site";
import ScreenshotFrame from "./screenshot-frame";

export default function Screenshots({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const { resolvedTheme } = useTheme();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const c = content[locale];
  function handleKeys(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = e.key === "ArrowRight" ? (i + 1) % 3 : e.key === "ArrowLeft" ? (i + 2) % 3 : e.key === "Home" ? 0 : e.key === "End" ? 2 : null;
    if (next !== null) { e.preventDefault(); setSelected(next); buttons.current[next]?.focus(); }
  }
  return <div className="config-gallery">
    <div className="screenshot-tabs" role="tablist" aria-label={c.screensCaption}>{c.screens.map((label, i) => <button key={i} type="button" ref={el => { buttons.current[i] = el; }} role="tab" id={`screen-tab-${i}`} aria-controls="screen-panel" aria-selected={selected === i} tabIndex={selected === i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={e => handleKeys(e, i)}>{label}</button>)}</div>
    <ScreenshotFrame sources={configScreenshots} selected={selected + (resolvedTheme === "dark" ? 3 : 0)} alts={[...c.screenAlts, ...c.screenAlts]} locale={locale} galleryTab={selected} />
    <p className="screenshot-caption">{c.screensCaption}</p>
  </div>;
}
