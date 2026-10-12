import { copyFile, mkdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
await mkdir(new URL("public/", root), { recursive: true });
for (const name of ["favicon.ico", "apple-touch-icon.png", "bitcookies-words.svg"]) {
  await copyFile(new URL(`assets/${name}`, root), new URL(`public/${name}`, root));
}
console.log("Synced site icons and publisher wordmark from assets/.");
