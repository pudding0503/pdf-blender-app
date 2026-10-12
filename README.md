# PDF Blender Website

A small bilingual product website for PDF Blender, a Windows desktop app for local PDF formatting, watermarks and extraction protection. Product copy follows `WEBSITE-CONTENT-PLAN.md`. The current Microsoft Store listing is not public, so calls to action link to the source repository on GitHub.

## Development

Use PowerShell 7 (`pwsh`) and the existing local dependencies:

```powershell
pnpm dev
```

Open http://localhost:3000 or http://localhost:3000/zh. On a fresh checkout, run `pnpm install --frozen-lockfile` first. Use the shared pnpm store; do not copy node_modules or create a repository-local store. If the shared store was chosen explicitly for installation, use the same `--store-dir` when modifying dependencies.

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
| `/` | English homepage |
| `/zh` | Chinese homepage |
| `/privacy` | English privacy policy |
| `/zh/privacy` | Chinese privacy policy |

Language switching preserves the page. Separate route-group root layouts set the correct document language on the server. Theme choices are system (default), light and dark; the browser saves the selected theme locally. Privacy uses the fixed effective date 2026-10-12.

- `components/home.tsx`: hero, six features, three steps, screenshots, FAQ and final CTA.
- `components/privacy.tsx`: privacy article with contents links.
- `components/site-layout.tsx`: shared font, theme provider, header and footer.
- `data/content.ts`: English/Chinese homepage and shared UI copy.
- `data/privacy.json`: English/Chinese policy text, adapted from the approved content plan.
- `lib/site.ts`: public links, policy date and localized metadata.
- `app/globals.css`: responsive layouts and restrained light/dark coral accents.
- `app/sitemap.ts`, `app/robots.ts`: the four public page URLs.

There are no accounts, pricing, testimonials, partner badges, PDF uploads, tracking scripts or support forms.

## Assets

Keep original materials in `assets/`; the user manages that folder. The logo and four screenshots are imported directly from it. `pnpm dev` and `pnpm build` first run `scripts/sync-assets.mjs`, which copies favicon, Apple touch icon and Bitcookies wordmark to `public/`. These generated copies are ignored by Git and recreated on Vercel during the build. Update their source files in assets/, then restart dev or build. Do not edit the public copies directly. Template ZIP archives are local reference materials and are also ignored.

`public/og.png` is a local 1200 × 630 sharing image generated from the supplied logo and factual product copy. It is independent of the runtime screenshot imports and should be regenerated if the product branding changes. English light-mode screenshots are used in both locales and themes until additional variants are supplied; they are never inverted.

## Vercel

Select the Next.js framework preset and build command `pnpm build`. Set `NEXT_PUBLIC_SITE_URL` to the final production HTTPS origin (see `.env.example`) so canonical URLs, language alternates, sitemap and sharing metadata use your real domain. The current fallback is the intended `https://pdf-blender.vercel.app`, whose assignment is not verified.

Use the final production origin plus `/privacy` for the Microsoft Store privacy URL. Verify the final hosting configuration and any platform-added analytics before publication. The repository adds no Vercel Analytics or Speed Insights. Enable a Store install link only after the listing becomes public; the authoritative product ID is `9P65NBNQRGVZ`. No deployment is performed by local build commands.

## Attribution

The visual baseline is [SaaS Landing Template](https://github.com/gonzalochale/saas-landing-template), by Gonzalo Chalé, under MIT. Its original notice remains in `license.txt`. The desktop app has a separate GPL v3 license, linked in the website footer. The older template archives are no longer in the user-managed assets folder.
