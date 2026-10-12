"use client";
import { useEffect, useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { content } from "@/data/content";
import type { Locale } from "@/lib/site";

export default function ThemeSwitcher({ locale }: { locale: Locale }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const c = content[locale];
  const Icon = mounted && theme === "light" ? Sun : mounted && theme === "dark" ? Moon : Monitor;
  return <label className="theme-control"><Icon size={16} aria-hidden="true" />
    <span className="sr-only">{c.theme}</span>
    <select aria-label={c.theme} value={mounted ? theme ?? "system" : "system"} onChange={e => setTheme(e.target.value)}>
      {["system", "light", "dark"].map((value, i) => <option key={value} value={value}>{c.themes[i]}</option>)}
    </select>
  </label>;
}
