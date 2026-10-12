"use client";
import { useLanguage } from "./language-provider";
import { content } from "@/data/content";
export default function SkipLink() {
  const { locale } = useLanguage();
  return <a className="skip-link" href="#main">{content[locale].skip}</a>;
}
