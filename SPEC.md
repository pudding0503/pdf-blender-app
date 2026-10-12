# PDF Blender Website Specification

## Scope

Adapt the simpler SaaS template to the approved PDF Blender content plan and supplied user assets. Ship English/Chinese homepages and privacy pages with no authentication, payment, analytics or PDF upload backend. Preserve all source assets and the original MIT notice. Deployment is a separate user-requested action.

## Compatibility

Use template versions: Next.js 16.1.6, React/React DOM 19.2.4, Tailwind CSS 4.2.1, TypeScript 5.9.2, ESLint 9.39.3 and Framer Motion 12.23.13, with pnpm 10.32.1 and Node.js 20.9+. Use App Router, Radix Accordion, next-themes and local Geist Sans. ESLint uses flat config and its CLI. Pin Motion's internal dependencies to the template lockfile versions. Use the shared pnpm store rather than a repository store. Preserve the template MIT notice in LICENSE without an extension.

## Behavior

- Routes: `/` and `/privacy`, with dynamic bilingual content; redirect old /zh URLs to corresponding current pages.
- Confirmed origin: https://pdf-blender.vercel.app. Canonical and sitemap contain language-neutral URLs. English is the server-rendered default; document language/title/description update on switching.
- Theme follows the system by default; an icon button cycles system/light/dark without reloading, using soft color transitions and rotating/crossfading icons.
- An EN/CH language mark updates all content in place, preserving URL, page state and scroll position. Store language locally and preserve it across route navigation.
- Header contains a privacy link and a right-side GitHub repository button, followed by language/theme controls.
- Header is transparent at the top and frosted after scrolling. The homepage logo smoothly returns to the top; the privacy-page logo navigates home.
- Hero has a coral gradient title and diagonal blurred light. Restore entry, viewport, hover and FAQ accordion animations while respecting reduced motion.
- Hero slogan is exactly `DO NOT plagiarism my pdf` in both languages, paired with a factual local PDF formatting/extraction-protection descriptor. Benefits are dark mode, multilingual support and no sign-up. Do not show a caption below screenshot-1.
- Version badge uses the desktop source version (currently v1.0.0) and a localized coming-soon status until release; it does not use the website package version. Document titles use ASCII ` - ` in both locales.
- Light surfaces are neutral white/gray. Diagonal coral light has a defined core, soft glow and slow drift; reduced motion disables movement. Section labels are 16px.
- Primary CTA uses official Microsoft Store SVG artwork and the owner-requested product link. Do not infer verified publication/installation.
- Homepage displays supplied screenshot-1, then an accessible manual tab selector for screenshot-2 through screenshot-4.
- All screenshots have square corners and reserved aspect ratios. Preload the configuration screenshots and decode before crossfading. Keep the current image on slow/failed loads, show delayed loading feedback and allow retry. Rapid selection uses the last requested tab; keyboard arrows/Home/End remain supported.
- Six factual features and three usage steps come from the content plan. Include extraction/readability/accessibility limits; do not advertise unavailable GAN.
- Policy covers local files, configs, embedded text, device features, external services, website hosting, support and changes. Effective date is fixed at 2026-10-12.
- Policy distinguishes offline desktop processing from Vercel website requests and discloses local theme and language storage.
- Footer provides the slogan, Bitcookies wordmark without an introductory phrase, GitHub, desktop GPL license, masked contact, issues and privacy. Footer, FAQ and privacy display `#` instead of `@` with replacement guidance, and expose no raw mailto link.
- No invented testimonials, user metrics, prices, partners or guaranteed protection claims.

## Acceptance

Run `pnpm typecheck`, `pnpm lint` and `pnpm build`. Verify both routes, legacy redirects, icons, screenshots, official Store badges, sharing image, sitemap and robots responses. Check dynamic language/theme switching without reload, preference persistence, page state preservation and responsive navigation. Store availability and platform hosting settings remain publication-time checks.
