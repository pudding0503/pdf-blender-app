import { copyFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

// Use the image processor already shipped with Next.js; no extra dependency.
const requireFromNext = createRequire(import.meta.resolve("next"));
const sharp = requireFromNext("sharp");

const root = new URL("../", import.meta.url);
await mkdir(new URL("public/", root), { recursive: true });
for (const name of ["favicon.ico", "apple-touch-icon.png", "bitcookies-words.svg", "logo.png"]) {
  await copyFile(new URL(`assets/${name}`, root), new URL(`public/${name}`, root));
}
for (const size of [192, 512]) {
  await sharp(fileURLToPath(new URL("assets/logo.png", root)))
    .resize(size, size)
    .png()
    .toFile(fileURLToPath(new URL(`public/pwa-icon-${size}.png`, root)));
}
console.log("Synced site icons, PWA icons and publisher wordmark from assets/.");
