# PDF Blender Website

A small bilingual product website for PDF Blender, a Windows desktop app for local PDF formatting, watermarks and extraction protection. Product copy follows `WEBSITE-CONTENT-PLAN.md` and later user decisions. The confirmed production domain is https://pdf-blender.vercel.app. Primary calls to action use Microsoft's official Store badge; the header has a separate GitHub repository button. A Store link is not a claim that publication or installation has been verified.

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

Next.js 14.2.5, React/React DOM 18.3.1 and pnpm 10.32.1 match the neighboring ucdt-app. These are project dependencies, not global Next.js or React installations. Tailwind CSS 4, Radix Accordion, Lucide and next-themes supply the UI. Inter Variable is bundled locally; builds do not fetch Google Fonts.

## Pages and content

| Route | Purpose |
| --- | --- |
| `/` | Homepage with dynamic English/Chinese content |
| `/privacy` | Privacy policy with dynamic English/Chinese content |

Language switching updates the current page in place without a reload or URL change. The browser saves the selected language locally; English is the server-rendered default. The document language, title and description update with the displayed content. The root provider persists across homepage/privacy navigation. Legacy `/zh` and `/zh/privacy` URLs redirect to `/` and `/privacy`.

The header contains only a privacy link, GitHub button and icon-only language/theme buttons. The theme button cycles system (default), light and dark; its accessible label and tooltip identify the current and next modes. Privacy uses the fixed effective date 2026-10-12. The policy discloses local theme and language storage.

- `components/home.tsx`: hero, six features, three steps, screenshots, FAQ and final CTA.
- `components/privacy.tsx`: privacy article with contents links.
- `app/layout.tsx`: shared font, providers, header and footer.
- `components/language-provider.tsx`: dynamic language state and preference persistence.
- `data/content.ts`: English/Chinese homepage and shared UI copy.
- `data/privacy.json`: English/Chinese policy text, adapted from the approved content plan.
- `lib/site.ts`: public links, policy date and localized metadata.
- `app/globals.css`: responsive layouts and restrained light/dark coral accents.
- `app/sitemap.ts`, `app/robots.ts`: the two public page URLs.

There are no accounts, pricing, testimonials, partner badges, PDF uploads, tracking scripts or support forms.

## Assets

Keep original materials in `assets/`; the user manages that folder. The logo and four screenshots are imported directly from it. `pnpm dev` and `pnpm build` first run `scripts/sync-assets.mjs`, which copies favicon, Apple touch icon and Bitcookies wordmark to `public/`. These generated copies are ignored by Git and recreated on Vercel during the build. Update their source files in assets/, then restart dev or build. Do not edit the public copies directly. Template ZIP archives are local reference materials and are also ignored.

`public/og.png` is a local 1200 × 630 sharing image generated from the supplied logo and factual product copy. It is independent of the runtime screenshot imports and should be regenerated if the product branding changes. English light-mode screenshots are used in both locales and themes until additional variants are supplied; they are never inverted.

Official Store badges are kept unchanged in `public/microsoft-store-en.svg` and `public/microsoft-store-zh.svg`, downloaded from https://get.microsoft.com/images/en-us%20dark.svg and https://get.microsoft.com/images/zh-cn%20dark.svg. They are served locally and switch with the page language. `public/MICROSOFT-STORE-BADGES.md` records their provenance.

## Vercel

Select the Next.js framework preset and build command `pnpm build`. The production origin is `https://pdf-blender.vercel.app`, used by default for canonical URLs, sitemap and sharing metadata. `NEXT_PUBLIC_SITE_URL` can override it for a future domain change (see `.env.example`). Both languages share the same URLs, so there are no separate language alternates.

Use `https://pdf-blender.vercel.app/privacy` for the Microsoft Store privacy URL. Verify hosting configuration and any platform-added analytics before publication. The repository adds no Vercel Analytics or Speed Insights. The Store link was explicitly requested by the owner; its authoritative product ID is `9P65NBNQRGVZ`. No deployment is performed by local build commands.

## Attribution

The visual baseline is [SaaS Landing Template](https://github.com/gonzalochale/saas-landing-template), by Gonzalo Chalé, under MIT. Its original notice remains in `license.txt`. The desktop app has a separate GPL v3 license, linked in the website footer. The older template archives are no longer in the user-managed assets folder.
