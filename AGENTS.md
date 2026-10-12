# PDF Blender Website Instructions

## Current Phase
The active website uses the simpler SaaS Landing Template's restrained visual system, adapted with the supplied PDF Blender content and assets. `WEBSITE-CONTENT-PLAN.md` is the product copy reference, with later user decisions taking precedence. The confirmed production origin is https://pdf-blender.vercel.app. At the user's request, primary CTAs use the official Microsoft Store SVG badge linked to product 9P65NBNQRGVZ; this does not establish that the listing is public. GitHub is the header's right-side repository button. Privacy has a fixed effective date of 2026-10-12. Do not invent claims, testimonials or prices.

## Environment
- Use PowerShell 7 (`pwsh`) on Windows.
- Use pnpm 10.32.1. Match the reference template: Next.js 16.1.6, React/React DOM 19.2.4, Tailwind CSS 4.2.1, TypeScript 5.9.2 and ESLint 9.39.3. Node.js 20.9+ is required.
- Check installed tools before installing or upgrading them.
- Use the existing shared pnpm store; do not create a store directory inside this repository.

## Architecture
- Next.js App Router, TypeScript, Tailwind CSS 4, Radix Accordion, next-themes, Lucide and Framer Motion 12.23.13. Motion's internal dependencies are pinned to the template lockfile versions via pnpm overrides.
- `app/page.tsx` and `app/privacy/page.tsx`: homepage and privacy at stable language-neutral URLs.
- `app/layout.tsx`: shared document layout, local font, providers, navbar and footer.
- `components/language-provider.tsx`: dynamic language state and browser preference persistence; switching must not reload or navigate. Update document language/title with the content.
- `next.config.mjs`: redirects legacy /zh and /zh/privacy URLs to / and /privacy.
- `app/providers.tsx`: next-themes provider.
- `app/globals.css`: Tailwind 4 imports and light/dark tokens.
- `components/`: homepage, privacy article, compact navbar, footer, FAQ, screenshot tabs, Store badge and preference controls. Language uses an EN/CH mark; theme uses animated icons. Language state uses a browser storage subscription with an English server snapshot.
- `components/animated-section.tsx`: viewport entry animations. Respect reduced motion and keep component keys stable across language changes.
- `components/screenshot-frame.tsx` and `components/screenshots.tsx`: rectangular images with stable aspect ratios, decode-before-display, loading placeholders, crossfades and retry states. Keep the current image visible while another loads.
- `eslint.config.mjs`: ESLint 9 flat config; use `eslint .`, since Next.js 16 removed `next lint`.
- `data/content.ts` and `data/privacy.json`: bilingual content.
- `lib/site.ts`: metadata, links and policy date.
- `components/ui/`: reusable Radix-based components.
- `lib/utils.ts`: class-name merging helpers.
- `components.json`: shadcn-compatible component configuration.
- The template has no login/signup routes or authentication backend.

## Assets and Content
- Preserve every existing file in assets/. The user manages replacements there; the template ZIP is a local reference ignored by Git.
- Screenshots and logo use static imports from assets/. `scripts/sync-assets.mjs` copies icons and wordmark into public/ before dev/build. Do not edit those copies directly.
- Use local runtime assets and Geist Sans from `geist/font/sans`; do not fetch Google Fonts during builds or add analytics, external embeds or upload forms.
- Follow the selected template's visual system. Previous UCDT and Chakra/Saas UI assumptions are retired.
- PDF Blender content should remain data-driven and use truthful Microsoft Store release information. The explicit user request authorizes the current Store badge/link; do not infer availability or installation verification from it.
- The slogan is exactly `DO NOT plagiarism my pdf` in both locales. Keep the factual local-processing descriptor alongside it. Hero benefits are dark mode, multilingual support and no sign-up; omit the homepage screenshot caption.
- `site.appVersion` is the desktop source version (currently 1.0.0), not the website package version. Show the localized coming-soon status until a release is confirmed, and update this value when desktop releases change.
- Use ASCII ` - ` in document titles. Display contact addresses with `#` in place of `@` throughout the site; do not expose a raw mailto link. The publisher footer contains the wordmark without an introductory attribution phrase.
- `public/microsoft-store-en.svg` and `public/microsoft-store-zh.svg` are official Microsoft SVG badges downloaded from get.microsoft.com. Keep original artwork and local loading.
- Keep the template MIT notice unchanged in LICENSE (no extension). The footer links to the desktop app's separate GPL license.
- Preserve the template's transparent-to-frosted navbar, coral gradient heading and diagonal light, soft theme transitions, smooth logo scroll-to-top and viewport animations. Do not restore the removed SaaS sections.
- Light surfaces are neutral white/gray. Use layered diagonal coral light with slow movement and reduced-motion support; avoid a yellow background or an indistinct glow.

## Validation and Deployment
- Run pnpm typecheck, pnpm lint, and pnpm build before declaring the template ready.
- Intended deployment target: Vercel. Do not deploy unless requested.
- Keep node_modules, .next, package-manager stores, staging files, environment files, and TypeScript caches out of Git.
