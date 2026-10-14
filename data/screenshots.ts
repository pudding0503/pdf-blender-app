import type { Locale } from "@/lib/site";
import homeEnLight from "@/assets/screenshot-1-en-light.png";
import homeEnDark from "@/assets/screenshot-1-en-dark.png";
import homeZhLight from "@/assets/screenshot-1-zh-light.png";
import homeZhDark from "@/assets/screenshot-1-zh-dark.png";
import configEnLight from "@/assets/screenshot-2-en-light.png";
import configEnDark from "@/assets/screenshot-2-en-dark.png";
import configZhLight from "@/assets/screenshot-2-zh-light.png";
import configZhDark from "@/assets/screenshot-2-zh-dark.png";
import customEnLight from "@/assets/screenshot-3-en-light.png";
import customEnDark from "@/assets/screenshot-3-en-dark.png";
import customZhLight from "@/assets/screenshot-3-zh-light.png";
import customZhDark from "@/assets/screenshot-3-zh-dark.png";
import presetsEnLight from "@/assets/screenshot-4-en-light.png";
import presetsEnDark from "@/assets/screenshot-4-en-dark.png";
import presetsZhLight from "@/assets/screenshot-4-zh-light.png";
import presetsZhDark from "@/assets/screenshot-4-zh-dark.png";

export const homeScreenshots = [homeEnLight, homeEnDark, homeZhLight, homeZhDark];
export const configScreenshots = [
  configEnLight, customEnLight, presetsEnLight,
  configEnDark, customEnDark, presetsEnDark,
  configZhLight, customZhLight, presetsZhLight,
  configZhDark, customZhDark, presetsZhDark,
];

export function screenshotThemeOffset(locale: Locale, dark: boolean, tabs = 3) {
  return (locale === "zh" ? 2 : 0) * tabs + (dark ? tabs : 0);
}
