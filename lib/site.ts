import type { Metadata } from "next";

export type Locale = "en" | "zh";
export const site = {
  origin: process.env.NEXT_PUBLIC_SITE_URL || "https://pdf-blender.vercel.app",
  github: "https://github.com/bitcookies/pdf-blender",
  store: "https://apps.microsoft.com/detail/9P65NBNQRGVZ",
  issues: "https://github.com/bitcookies/pdf-blender/issues",
  license: "https://github.com/bitcookies/pdf-blender/blob/main/LICENSE",
  publisher: "https://bitcookies.nousbuild.com/",
  // Desktop source version (Directory.Build.props), not a published release.
  appVersion: "1.0.1",
  policyDate: "2026-10-12",
};

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
