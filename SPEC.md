# PDF Blender Website Specification

## Scope

Adapt the simpler SaaS template to the approved PDF Blender content plan and supplied user assets. Ship English/Chinese homepages and privacy pages with no authentication, payment, analytics or PDF upload backend. Preserve all source assets and the original MIT notice. Deployment is a separate user-requested action.

## Compatibility

Keep Next.js 14.2.5, React/React DOM 18.3.1 and pnpm 10.32.1. Use App Router, TypeScript, Tailwind 4, Radix Accordion, next-themes and local Inter Variable fonts. Use the shared pnpm store rather than a repository store.

## Behavior

- Routes: `/`, `/zh`, `/privacy`, `/zh/privacy`.
- Correct server-rendered document language and localized canonical/alternate metadata.
- Theme follows the system by default and offers persistent light/dark overrides.
- Language switch keeps the visitor on the equivalent homepage or privacy page.
- GitHub is the current primary CTA. Show coming-to-Store text without an unpublished install link.
- Homepage displays supplied screenshot-1, then an accessible manual tab selector for screenshot-2 through screenshot-4.
- Six factual features and three usage steps come from the content plan. Include extraction/readability/accessibility limits; do not advertise unavailable GAN.
- Policy covers local files, configs, embedded text, device features, external services, website hosting, support and changes. Effective date is fixed at 2026-10-12.
- Policy distinguishes offline desktop processing from Vercel website requests and discloses local theme storage.
- Footer provides Bitcookies branding, GitHub, desktop GPL license, email, issues and privacy.
- No invented testimonials, user metrics, prices, partners or guaranteed protection claims.

## Acceptance

Run `pnpm typecheck`, `pnpm lint` and `pnpm build`. Verify all four routes, icons, screenshots, sharing image, sitemap and robots responses. Inspect rendered metadata, localized links and removal of inherited template content/scripts. Production hostname, Store availability and platform hosting settings remain publication-time checks.
