"use client";
import Image from "next/image";
import { useState, useRef, type KeyboardEvent } from "react";
import config from "@/assets/screenshot-2.webp";
import custom from "@/assets/screenshot-3.webp";
import presets from "@/assets/screenshot-4.webp";
import { content } from "@/data/content";
import type { Locale } from "@/lib/site";

const screenshots = [config, custom, presets];
export default function Screenshots({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const c = content[locale];
  function handleKeys(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = e.key === "ArrowRight" ? (i + 1) % 3 : e.key === "ArrowLeft" ? (i + 2) % 3 : e.key === "Home" ? 0 : e.key === "End" ? 2 : null;
    if (next !== null) { e.preventDefault(); setSelected(next); buttons.current[next]?.focus(); }
  }
  return <div className="config-gallery">
    <div className="screenshot-tabs" role="tablist" aria-label={c.screensCaption}>{c.screens.map((label, i) => <button key={i} type="button" ref={el => { buttons.current[i] = el; }} role="tab" id={`screen-tab-${i}`} aria-controls={`screen-panel-${i}`} aria-selected={selected === i} tabIndex={selected === i ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={e => handleKeys(e, i)}>{label}</button>)}</div>
    {screenshots.map((src, i) => <div key={i} role="tabpanel" id={`screen-panel-${i}`} aria-labelledby={`screen-tab-${i}`} hidden={selected !== i} tabIndex={0}><Image className="app-screenshot" src={src} alt={c.screenAlts[i]} sizes="(max-width: 960px) 92vw, 880px" /></div>)}
    <p className="screenshot-caption">{c.screensCaption}</p>
  </div>;
}
