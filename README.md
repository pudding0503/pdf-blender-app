# PDF Blender Website

A small bilingual product website for PDF Blender, a Windows desktop app for local PDF formatting, watermarks and extraction protection. Product copy follows `WEBSITE-CONTENT-PLAN.md` and later user decisions. The confirmed production domain is https://pdf-blender.vercel.app. Primary calls to action use Microsoft's official Store badge for the published product; the header has a separate GitHub repository button.

## Development

Use PowerShell 7 (`pwsh`) and the existing local dependencies:

```powershell
pnpm dev
```

Open http://localhost:3000. On a fresh checkout, run `pnpm install --frozen-lockfile` first. Use the shared pnpm store; do not copy node_modules or create a repository-local store. If the shared store was chosen explicitly for installation, use the same `--store-dir` when modifying dependencies.

```powershell
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

Next.js 16.1.6, React/React DOM 19.2.4, Tailwind CSS 4.2.1 and Framer Motion 12.23.13 match the reference template, with pnpm 10.32.1. Node.js 20.9+ is required. These are project dependencies, not global Next.js or React installations. Geist Sans is bundled locally via `geist/font/sans`; builds do not fetch Google Fonts. ESLint 9 uses `eslint.config.mjs` and `eslint .`, replacing the removed `next lint`. Motion's internal dependencies are pinned to the template lockfile versions to avoid incompatible newer resolutions.

## Pages and content

| Route | Purpose |
| --- | --- |
| `/` | Homepage with dynamic English/Chinese content |
| `/privacy` | Privacy policy with dynamic English/Chinese content |

Language switching updates the current page in place without a reload or URL change. The browser saves the selected language locally; English is the server-rendered default. The document language, title and description update with the displayed content. The root provider persists across homepage/privacy navigation. Legacy `/zh` and `/zh/privacy` URLs redirect to `/` and `/privacy`.

The header contains only a privacy link, GitHub button, EN/CH language mark and icon-only theme button. It is transparent at the top and frosted after scrolling. Clicking the homepage logo smoothly returns to the top; on privacy it navigates home. The theme button cycles system (default), light and dark with soft color transitions and rotating/crossfading icons. Accessible labels and tooltips identify the controls. Privacy uses the fixed effective date 2026-10-12 and discloses local theme and language storage.

The hero restores the template's gradient heading and diagonal light in coral. Sections enter as they scroll into view, cards respond to hover and Store badges scale gently. All four screenshots have square corners. Both theme variants of the three configuration screenshots preload locally and crossfade only after decoding; pending loads preserve the current image and show delayed feedback. Initial loads use a shimmer placeholder, and failures offer retry. Arrow keys, Home and End navigate tabs. Motion respects `prefers-reduced-motion`.

The hero heading reads `Keep PDFs readable. / Make extraction harder.` in English and `使 PDF 保持便于阅读，/ 但使内容更难复制。` in Chinese. Its smaller supporting line is `DO NOT PLAGIARIZE MY PDF!` or `别抄我的 PDF！`. The footer retains the slogan and factual local PDF formatting/extraction-protection descriptor. The hero benefits are dark mode, multilingual support and no sign-up. There is no caption beneath the homepage screenshot. Light surfaces use neutral white/gray with layered coral diagonal light that drifts slowly. Section labels are enlarged to 16px. The footer keeps the BITCOOKIES wordmark without an introductory attribution phrase.

The website package version is `1.1.0`; the desktop app version is independent. The version badge is read from the Microsoft Store product API with one-hour server revalidation and falls back to `site.appVersion` (`1.0.1`) if the API is unavailable. It displays only the first three numeric version segments as `Current version v<version>` or `当前版本 v<version>`. `package.json` tracks the website version, while `site.appVersion` in `lib/site.ts` is only the fallback desktop source version. Page titles use ASCII ` - ` in both languages. Support and privacy questions use GitHub issues; no email addresses or instructions are displayed. The footer wordmark and `© 2026 BITCOOKIES` both link to https://bitcookies.nousbuild.com/.

- `components/home.tsx`: hero, six features, three steps, screenshots, FAQ and final CTA.
- `components/privacy.tsx`: privacy article with contents links.
- `app/layout.tsx`: shared font, providers, header and footer.
- `components/language-provider.tsx`: dynamic language state and preference persistence.
- `data/content.ts`: English/Chinese homepage and shared UI copy.
- `data/privacy.json`: English/Chinese policy text, adapted from the approved content plan.
- `lib/site.ts`: public links, policy date and localized metadata.
- `app/globals.css`: responsive layouts and restrained light/dark coral accents.
- `app/sitemap.ts`, `app/robots.ts`: the two public page URLs.

There are no accounts, pricing, testimonials, partner badges, PDF uploads, tracking scripts or support forms. The site includes an installable PWA with network-first page caching, static asset caching and a branded offline fallback.

## Assets

Keep original materials in `assets/`; the user manages that folder. The sixteen language and theme PNG screenshots are imported directly from it, with imports centralized in `data/screenshots.ts`. `pnpm dev` and `pnpm build` first run `scripts/sync-assets.mjs`, which copies favicon, Apple touch icon, logo and BITCOOKIES wordmark to `public/` and generates 192px and 512px PWA icons from the logo using Next.js's existing image processor. These generated files are ignored by Git and recreated on Vercel during the build. Update their source files in assets/, then restart dev or build. Do not edit the public copies directly. Template ZIP archives are local reference materials and are also ignored.

`public/og.png` is a local 1200 × 630 sharing image generated from the supplied logo and factual product copy. It is independent of the runtime screenshot imports and should be regenerated if the product branding changes. The sixteen supplied `screenshot-{1..4}-{en|zh}-{light|dark}.png` images follow the active language and resolved website theme, including system theme changes. All variants load locally and decode before crossfading, retaining the current image on slow or failed loads. The selected configuration tab is preserved.

`app/manifest.ts`, `components/service-worker-register.tsx`, `public/sw.js` and `public/offline.html` provide the PWA. Registration runs only in production on secure origins or localhost. Navigations request fresh HTML first, fall back to a cached document and finally show the bilingual offline page. Static assets use the cache first. The registration component also asks the worker to cache the current document and loaded local assets after the first visit and App Router navigation, which otherwise would only fetch RSC data. This storage contains public website content, not PDF documents; users can remove it through browser site-data settings.

For website releases, update the `VERSION` constant in `public/sw.js` whenever the cached website assets change. The current worker uses cache revision `1.1.0` (`pdf-blender-static-v1.1.0` and `pdf-blender-pages-v1.1.0`), activates immediately and removes only old PDF Blender caches. `/sw.js` uses no-cache/no-store headers and registration bypasses the browser's HTTP cache for update checks. Manifest responses require revalidation. The root layout exports responsive theme colors and color-scheme metadata; localized titles, descriptions and OG/Twitter text update on language switching.

Official Store badges are kept unchanged in `public/microsoft-store-en.svg` and `public/microsoft-store-zh.svg`, downloaded from https://get.microsoft.com/images/en-us%20dark.svg and https://get.microsoft.com/images/zh-cn%20dark.svg. They are served locally and switch with the page language. `public/MICROSOFT-STORE-BADGES.md` records their provenance.

## Vercel

Select the Next.js framework preset and build command `pnpm build`. The production origin is `https://pdf-blender.vercel.app`, used by default for canonical URLs, sitemap and sharing metadata. `NEXT_PUBLIC_SITE_URL` can override it for a future domain change (see `.env.example`). Both languages share the same URLs, so there are no separate language alternates.

Use `https://pdf-blender.vercel.app/privacy` for the Microsoft Store privacy URL. Verify hosting configuration and any platform-added analytics before publication. The repository adds no Vercel Analytics or Speed Insights. The Store link was explicitly requested by the owner; its authoritative product ID is `9P65NBNQRGVZ`. No deployment is performed by local build commands.

## Attribution

The visual baseline is [SaaS Landing Template](https://github.com/gonzalochale/saas-landing-template), by Gonzalo Chalé, under MIT. Its original notice remains unchanged in `LICENSE`, with no extension. The desktop app has a separate GPL v3 license, linked in the website footer. The reference ZIP in assets/ is preserved locally and ignored by Git.
