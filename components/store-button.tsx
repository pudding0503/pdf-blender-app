"use client";
import Image from "next/image";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";

export default function StoreButton() {
  const { locale } = useLanguage();
  return <a className="store-button" href={site.store} target="_blank" rel="noopener noreferrer">
    <Image src={locale === "zh" ? "/microsoft-store-zh.svg" : "/microsoft-store-en.svg"} alt={locale === "zh" ? "从 Microsoft Store 获取（在新标签页打开）" : "Get it from Microsoft Store (opens in a new tab)"} width={161} height={44} unoptimized />
  </a>;
}
