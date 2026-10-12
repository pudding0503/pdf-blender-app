"use client";
import Image from "next/image";
import { useEffect, useState, useRef, type KeyboardEvent } from "react";
import { LoaderCircle } from "lucide-react";
import config from "@/assets/screenshot-2.webp";
import custom from "@/assets/screenshot-3.webp";
import presets from "@/assets/screenshot-4.webp";
import { content } from "@/data/content";
import type { Locale } from "@/lib/site";

const screenshots = [config, custom, presets];
export default function Screenshots({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const [displayed, setDisplayed] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState([false, false, false]);
  const [attempts, setAttempts] = useState([0, 0, 0]);
  const ready = useRef([false, false, false]);
  const wanted = useRef(0);
  const alive = useRef(true);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const c = content[locale];
  const pending = displayed !== selected && !failed[selected];
  useEffect(() => {
    alive.current = true;
    return () => { alive.current = false; };
  }, []);
  useEffect(() => {
    if (!pending) return;
    const timer = window.setTimeout(() => setLoading(true), 150);
    return () => window.clearTimeout(timer);
  }, [pending, selected]);
  function choose(index: number) {
    wanted.current = index;
    setSelected(index);
    setLoading(false);
    if (ready.current[index]) setDisplayed(index);
  }
  function fail(index: number) {
    if (!alive.current) return;
    setFailed(previous => previous.map((value, i) => i === index ? true : value));
    if (wanted.current === index) setLoading(false);
  }
  async function decoded(image: HTMLImageElement, index: number) {
    try {
      await image.decode();
      if (!alive.current) return;
      ready.current[index] = true;
      setFailed(previous => previous.map((value, i) => i === index ? false : value));
      if (wanted.current === index) { setDisplayed(index); setLoading(false); }
    } catch { fail(index); }
  }
  function retry() {
    setLoading(false);
    setFailed(previous => previous.map((value, i) => i === selected ? false : value));
    setAttempts(previous => previous.map((value, i) => i === selected ? value + 1 : value));
  }
  function handleKeys(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = e.key === "ArrowRight" ? (i + 1) % 3 : e.key === "ArrowLeft" ? (i + 2) % 3 : e.key === "Home" ? 0 : e.key === "End" ? 2 : null;
    if (next !== null) { e.preventDefault(); choose(next); buttons.current[next]?.focus(); }
  }
  return <div className="config-gallery">
    <div className="screenshot-tabs" role="tablist" aria-label={c.screensCaption}>{c.screens.map((label, i) => <button key={i} type="button" ref={el => { buttons.current[i] = el; }} role="tab" id={`screen-tab-${i}`} aria-controls={`screen-panel-${i}`} aria-selected={selected === i} tabIndex={selected === i ? 0 : -1} onClick={() => choose(i)} onKeyDown={e => handleKeys(e, i)}>{label}</button>)}</div>
    <div className="screenshot-stage" aria-busy={pending}>
      {displayed === null && <div className="screenshot-placeholder" aria-hidden="true" />}
      {screenshots.map((src, i) => <div key={i} className="screenshot-panel" data-visible={displayed === i} role="tabpanel" id={`screen-panel-${i}`} aria-labelledby={`screen-tab-${i}`} aria-hidden={selected !== i} inert={selected !== i} tabIndex={selected === i ? 0 : -1}>
        <Image key={attempts[i]} src={src} alt={c.screenAlts[i]} sizes="(max-width: 960px) 92vw, 880px" loading="eager" onLoad={event => void decoded(event.currentTarget, i)} onError={() => fail(i)} />
      </div>)}
      {((pending && loading) || failed[selected]) && <div className="screenshot-feedback" role="status">
        {failed[selected] ? <><span>{locale === "en" ? "Screenshot could not load." : "截图加载失败。"}</span><button type="button" onClick={retry}>{locale === "en" ? "Retry" : "重试"}</button></> : <><LoaderCircle className="loading-spinner" size={16} aria-hidden="true" /><span>{locale === "en" ? "Loading screenshot…" : "正在加载截图…"}</span></>}
      </div>}
    </div>
    <p className="screenshot-caption">{c.screensCaption}</p>
  </div>;
}
