"use client";
import Image from "next/image";
import { site } from "@/lib/site";
import { useLanguage } from "./language-provider";
import { motion, useReducedMotion } from "framer-motion";

export default function StoreButton() {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  return <motion.a className="store-button" whileHover={{ scale: reduced ? 1 : 1.05 }} whileTap={{ scale: reduced ? 1 : 0.98 }} href={site.store} target="_blank" rel="noopener noreferrer">
    <Image src={locale === "zh" ? "/microsoft-store-zh.svg" : "/microsoft-store-en.svg"} alt={locale === "zh" ? "从 Microsoft Store 获取（在新标签页打开）" : "Get it from Microsoft Store (opens in a new tab)"} width={161} height={44} unoptimized />
  </motion.a>;
}
