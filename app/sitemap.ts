import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/zh", "/privacy", "/zh/privacy"].map(path => ({ url: new URL(path, site.origin).href, alternates: { languages: { en: new URL(path.includes("privacy") ? "/privacy" : "/", site.origin).href, "zh-CN": new URL(path.includes("privacy") ? "/zh/privacy" : "/zh", site.origin).href } } }));
}
