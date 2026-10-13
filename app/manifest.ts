import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PDF Blender",
    short_name: "PDF Blender",
    description: "Local PDF formatting and extraction protection for Windows.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    id: "/",
    background_color: "#fafafa",
    theme_color: "#fafafa",
    icons: [
      { src: "/pwa-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x179", type: "image/png", purpose: "any" },
    ],
    lang: "en",
    dir: "ltr",
  };
}
