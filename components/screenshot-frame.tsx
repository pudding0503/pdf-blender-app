"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";
import { LoaderCircle } from "lucide-react";
import type { Locale } from "@/lib/site";

export default function ScreenshotFrame({ sources, selected, alts, locale, galleryTab }: {
  sources: StaticImageData[]; selected: number; alts: string[]; locale: Locale; galleryTab?: number;
}) {
  const [ready, setReady] = useState(() => sources.map(() => false));
  const [failed, setFailed] = useState(() => sources.map(() => false));
  const [attempts, setAttempts] = useState(() => sources.map(() => 0));
  const [displayed, setDisplayed] = useState<number | null>(null);
  const [loadingTarget, setLoadingTarget] = useState<number | null>(null);
  const alive = useRef(true);
  const pending = displayed !== selected && !failed[selected];
  useEffect(() => {
    alive.current = true;
    return () => { alive.current = false; };
  }, []);
  useEffect(() => {
    if (!pending) return;
    const timer = window.setTimeout(() => setLoadingTarget(selected), 150);
    return () => window.clearTimeout(timer);
  }, [pending, selected]);
  useEffect(() => {
    // Start the crossfade on the next paint, cancelling obsolete selections.
    if (!ready[selected] || displayed === selected) return;
    const frame = window.requestAnimationFrame(() => setDisplayed(selected));
    return () => window.cancelAnimationFrame(frame);
  }, [displayed, ready, selected]);
  function fail(index: number) {
    if (!alive.current) return;
    setFailed(previous => previous.map((value, i) => i === index ? true : value));
  }
  async function decoded(image: HTMLImageElement, index: number) {
    try {
      await image.decode();
      if (!alive.current || !image.isConnected) return;
      setReady(previous => previous.map((value, i) => i === index ? true : value));
      setFailed(previous => previous.map((value, i) => i === index ? false : value));
    } catch { if (image.isConnected) fail(index); }
  }
  function retry() {
    setLoadingTarget(null);
    setFailed(previous => previous.map((value, i) => i === selected ? false : value));
    setAttempts(previous => previous.map((value, i) => i === selected ? value + 1 : value));
  }
  return <div className="screenshot-stage" aria-busy={pending}
    role={galleryTab === undefined ? undefined : "tabpanel"} id={galleryTab === undefined ? undefined : "screen-panel"}
    aria-labelledby={galleryTab === undefined ? undefined : `screen-tab-${galleryTab}`} tabIndex={galleryTab === undefined ? undefined : 0}>
    {displayed === null && <div className="screenshot-placeholder" aria-hidden="true" />}
    {sources.map((src, i) => <Image key={`${i}-${attempts[i]}`} className="screenshot-layer" data-visible={displayed === i}
      src={src} alt={alts[i]} aria-hidden={displayed !== i}
      sizes={galleryTab === undefined ? "(max-width: 1120px) 92vw, 1000px" : "(max-width: 960px) 92vw, 880px"}
      preload={galleryTab === undefined && i === 0} loading={galleryTab === undefined && i === 0 ? undefined : "eager"}
      onLoad={event => void decoded(event.currentTarget, i)} onError={() => fail(i)} />)}
    {((pending && loadingTarget === selected) || failed[selected]) && <div className="screenshot-feedback" role="status">
      {failed[selected] ? <><span>{locale === "en" ? "Screenshot could not load." : "截图加载失败。"}</span><button type="button" onClick={retry}>{locale === "en" ? "Retry" : "重试"}</button></> : <><LoaderCircle className="loading-spinner" size={16} aria-hidden="true" /><span>{locale === "en" ? "Loading screenshot…" : "正在加载截图…"}</span></>}
    </div>}
  </div>;
}
