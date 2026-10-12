"use client";
import { useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { content } from "@/data/content";
import { useLanguage } from "./language-provider";

const modes = ["system", "light", "dark"] as const;
const subscribe = () => () => {};
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { locale } = useLanguage();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const reduced = useReducedMotion();
  const current = mounted ? theme ?? "system" : "system";
  const index = Math.max(0, modes.indexOf(current as typeof modes[number]));
  const next = (index + 1) % modes.length;
  const c = content[locale];
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;
  const label = locale === "en" ? `Theme: ${c.themes[index]}. Switch to ${c.themes[next]}.` : `当前主题：${c.themes[index]}。切换到${c.themes[next]}。`;
  return <button type="button" className="icon-button theme-button" aria-label={label} title={label} onClick={() => setTheme(modes[next])}>
    <AnimatePresence initial={false}>
      <motion.span key={current} className="theme-icon" aria-hidden="true"
        initial={{ opacity: 0, rotate: reduced ? 0 : -45, scale: reduced ? 1 : 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: reduced ? 0 : 45, scale: reduced ? 1 : 0.8 }}
        transition={{ duration: reduced ? 0 : 0.25 }}><Icon size={19} /></motion.span>
    </AnimatePresence>
  </button>;
}
