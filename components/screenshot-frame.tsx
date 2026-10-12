"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/site";

export default function ScreenshotFrame({ src, alt, locale }: { src: StaticImageData; alt: string; locale: Locale }) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  return <div className="screenshot-stage" aria-busy={!ready && !failed}>
    {!ready && <div className="screenshot-placeholder" aria-hidden="true" />}
    <Image key={attempt} className="screenshot-layer" data-visible={ready} src={src} alt={alt}
      preload sizes="(max-width: 1120px) 92vw, 1000px"
      onLoad={async event => {
        try { await event.currentTarget.decode(); setReady(true); }
        catch { setFailed(true); }
      }} onError={() => setFailed(true)} />
    {failed && <div className="screenshot-feedback" role="status"><span>{locale === "en" ? "Screenshot could not load." : "截图加载失败。"}</span><button type="button" onClick={() => { setFailed(false); setAttempt(attempt + 1); }}>{locale === "en" ? "Retry" : "重试"}</button></div>}
  </div>;
}
