import type { Metadata } from "next";

export type Locale = "en" | "zh";
export const site = {
  origin: process.env.NEXT_PUBLIC_SITE_URL || "https://pdf-blender.vercel.app",
  github: "https://github.com/bitcookies/pdf-blender",
  storeProductId: "9P65NBNQRGVZ",
  store: "https://apps.microsoft.com/detail/9P65NBNQRGVZ",
  issues: "https://github.com/bitcookies/pdf-blender/issues",
  license: "https://github.com/bitcookies/pdf-blender/blob/main/LICENSE",
  publisher: "https://bitcookies.nousbuild.com/",
  policyDate: "2026-10-12",
};

const latestReleaseApi = "https://api.github.com/repos/bitcookies/pdf-blender/releases/latest";
const versionPattern = /^v?(\d+\.\d+(?:\.\d+){0,2}(?:[-+][0-9A-Za-z.-]+)?)$/;

function normalizeDisplayVersion(version: string): string {
  const separator = version.search(/[-+]/);
  const main = separator === -1 ? version : version.slice(0, separator);
  const suffix = separator === -1 ? "" : version.slice(separator);
  const parts = main.split(".").slice(0, 3);
  while (parts.length < 3) parts.push("0");
  return `${parts.join(".")}${suffix}`;
}

/**
 * Reads the latest stable desktop release from GitHub with hourly ISR.
 */
export async function getLatestAppVersion(): Promise<string | null> {
  try {
    const response = await fetch(latestReleaseApi, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "PDF-Blender-website",
      },
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      console.warn(`GitHub release version lookup failed with HTTP ${response.status}.`);
      return null;
    }

    const data: unknown = await response.json();
    if (!data || typeof data !== "object" || !("tag_name" in data)) return null;
    const rawVersion = data.tag_name;
    if (typeof rawVersion !== "string" || !rawVersion) return null;
    const match = rawVersion.match(versionPattern);
    return match ? normalizeDisplayVersion(match[1]) : null;
  } catch {
    console.warn("GitHub release version lookup failed.");
    return null;
  }
}

export function pageMetadata(locale: Locale, privacy = false): Metadata {
  const title = privacy
    ? locale === "zh" ? "隐私政策 - PDF Blender" : "Privacy Policy - PDF Blender"
    : locale === "zh" ? "PDF Blender - 本地 PDF 整理与提取防护工具" : "PDF Blender - Local PDF Tools for Windows";
  const description = privacy
    ? locale === "zh" ? "了解 PDF Blender 的本地文件处理、配置保存及产品网站的信息处理方式。" : "How PDF Blender and its product website handle files, settings and information."
    : locale === "zh" ? "统一页面尺寸、添加水印、图片化并调整复制层。在 Windows 本机处理 PDF，无需上传文件。" : "Format pages, add watermarks and make text extraction harder. Process PDFs locally on Windows.";
  const path = privacy ? "/privacy" : "/";
  const ogImage = new URL("/og.png", site.origin).href;
  return {
    metadataBase: new URL(site.origin), title, description,
    applicationName: "PDF Blender",
    creator: "BITCOOKIES",
    publisher: "BITCOOKIES",
    referrer: "origin-when-cross-origin",
    formatDetection: { telephone: false },
    manifest: "/manifest.webmanifest",
    appleWebApp: { capable: true, statusBarStyle: "default", title: "PDF Blender" },
    alternates: { canonical: path },
    openGraph: { title, description, url: new URL(path, site.origin).href, siteName: "PDF Blender", type: "website", locale: locale === "zh" ? "zh_CN" : "en_US", alternateLocale: locale === "zh" ? "en_US" : "zh_CN", images: [{ url: ogImage, width: 1200, height: 630, type: "image/png", alt: "PDF Blender - Local PDF tools for Windows" }] },
    twitter: { card: "summary_large_image", title, description, images: [{ url: ogImage, alt: "PDF Blender - Local PDF tools for Windows" }] },
    icons: { icon: [{ url: "/favicon.ico", type: "image/x-icon" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x179", type: "image/png" }] },
  };
}
