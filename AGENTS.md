# PDF Blender Website Instructions

## Current Phase
The active website uses the simpler SaaS Landing Template's restrained visual system, adapted with the supplied PDF Blender content and assets. `WEBSITE-CONTENT-PLAN.md` is the product copy reference, with later user decisions taking precedence. The confirmed production origin is https://pdf-blender.vercel.app. At the user's request, primary CTAs use the official Microsoft Store SVG badge linked to product 9P65NBNQRGVZ; this does not establish that the listing is public. GitHub is the header's right-side repository button. Privacy has a fixed effective date of 2026-10-12. Do not invent claims, testimonials or prices.

## Environment
- Use PowerShell 7 (`pwsh`) on Windows.
- Use pnpm for this project. Next.js is pinned to 14.2.5, React/React DOM to 18.3.1, and pnpm to 10.32.1 to match ucdt-app.
- Check installed tools before installing or upgrading them.
- Use the existing shared pnpm store; do not create a store directory inside this repository.

## Architecture
- Next.js App Router, TypeScript, Tailwind CSS 4, Radix Accordion, next-themes and Lucide.
- `app/page.tsx` and `app/privacy/page.tsx`: homepage and privacy at stable language-neutral URLs.
- `app/layout.tsx`: shared document layout, local font, providers, navbar and footer.
- `components/language-provider.tsx`: dynamic language state and browser preference persistence; switching must not reload or navigate. Update document language/title with the content.
- `next.config.mjs`: redirects legacy /zh and /zh/privacy URLs to / and /privacy.
- `app/providers.tsx`: next-themes provider.
- `app/globals.css`: Tailwind 4 imports and light/dark tokens.
- `components/`: homepage, privacy article, compact navbar, footer, FAQ, screenshot tabs, Store badge and icon-only preference controls.
- `data/content.ts` and `data/privacy.json`: bilingual content.
- `lib/site.ts`: metadata, links and policy date.
- `components/ui/`: reusable Radix-based components.
- `lib/utils.ts`: class-name merging helpers.
- `components.json`: shadcn-compatible component configuration.
- The template has no login/signup routes or authentication backend.

## Assets and Content
- Preserve every existing file in assets/. The user manages replacements there; old template archives are no longer present.
- Screenshots and logo use static imports from assets/. `scripts/sync-assets.mjs` copies icons and wordmark into public/ before dev/build. Do not edit those copies directly.
- Use local runtime assets and fonts; do not add analytics, external embeds or upload forms.
- Follow the selected template's visual system. Previous UCDT and Chakra/Saas UI assumptions are retired.
- PDF Blender content should remain data-driven and use truthful Microsoft Store release information. The explicit user request authorizes the current Store badge/link; do not infer availability or installation verification from it.
- `public/microsoft-store-en.svg` and `public/microsoft-store-zh.svg` are official Microsoft SVG badges downloaded from get.microsoft.com. Keep original artwork and local loading.
- Keep the template MIT notice in license.txt.

## Validation and Deployment
- Run pnpm typecheck, pnpm lint, and pnpm build before declaring the template ready.
- Intended deployment target: Vercel. Do not deploy unless requested.
- Keep node_modules, .next, package-manager stores, staging files, environment files, and TypeScript caches out of Git.
