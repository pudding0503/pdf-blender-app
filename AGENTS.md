# PDF Blender Website Instructions

## Current Phase
The active website uses the simpler SaaS Landing Template's restrained visual system, adapted with the supplied PDF Blender content and assets. `WEBSITE-CONTENT-PLAN.md` is the product copy reference. The Store listing is not public: use GitHub CTAs and a coming-soon note. Privacy has a fixed effective date of 2026-10-12. Do not invent claims, testimonials, prices or download links.

## Environment
- Use PowerShell 7 (`pwsh`) on Windows.
- Use pnpm for this project. Next.js is pinned to 14.2.5, React/React DOM to 18.3.1, and pnpm to 10.32.1 to match ucdt-app.
- Check installed tools before installing or upgrading them.
- Use the existing shared pnpm store; do not create a store directory inside this repository.

## Architecture
- Next.js App Router, TypeScript, Tailwind CSS 4, Radix Accordion, next-themes and Lucide.
- `app/(en)/`: English homepage and privacy, with an English root layout.
- `app/(zh)/zh/`: Chinese homepage and privacy, with a Chinese root layout.
- `components/site-layout.tsx`: shared document layout, local font, providers, navbar and footer.
- `app/providers.tsx`: next-themes provider.
- `app/globals.css`: Tailwind 4 imports and light/dark tokens.
- `components/`: homepage, privacy article, navbar, footer, FAQ, screenshot tabs and theme controls.
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
- Future PDF Blender content should remain data-driven and use truthful Microsoft Store release information. Do not hard-code an unpublished Store URL.
- Keep the template MIT notice in license.txt.

## Validation and Deployment
- Run pnpm typecheck, pnpm lint, and pnpm build before declaring the template ready.
- Intended deployment target: Vercel. Do not deploy unless requested.
- Keep node_modules, .next, package-manager stores, staging files, environment files, and TypeScript caches out of Git.
