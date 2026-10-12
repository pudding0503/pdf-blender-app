"use client";
import { useEffect, useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { content } from "@/data/content";
import { useLanguage } from "./language-provider";

const modes = ["system", "light", "dark"] as const;
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? theme ?? "system" : "system";
  const index = Math.max(0, modes.indexOf(current as typeof modes[number]));
  const next = (index + 1) % modes.length;
  const c = content[locale];
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;
  const label = locale === "en" ? `Theme: ${c.themes[index]}. Switch to ${c.themes[next]}.` : `当前主题：${c.themes[index]}。切换到${c.themes[next]}。`;
  return <button type="button" className="icon-button" aria-label={label} title={label} onClick={() => setTheme(modes[next])}><Icon size={19} aria-hidden="true" /></button>;
}
