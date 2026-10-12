# PDF Blender Website Design

Retain the selected simpler SaaS template's centered hero, neutral surfaces, compact navigation and responsive cards. Product accents are coral: light #C9021E and dark #E74856. A subdued halo supports the main screenshot; avoid heavy animation and large empty gaps.

The homepage contains a concise hero and real application screenshot, six feature cards, three usage steps, a manual selector for the remaining three configuration screenshots, eight short FAQ entries and an official Microsoft Store badge CTA. Pricing, testimonials, fabricated statistics and partner logos are removed. GitHub has its own dark button on the right side of the header.

The supplied screenshots show the actual English light-mode app. Keep their full aspect ratio and all controls intact in both website themes. Do not simulate localization or dark screenshots. The transparent product logo is used in the header/footer; the Bitcookies wordmark appears at the footer with a light backing in dark mode for readability.

The privacy article is a separate page with a contents list, comfortable line spacing and a 780px maximum width. Both page types share dynamic language switching and system/light/dark controls. These controls are icon-only buttons with accessible labels and tooltips. Navigation has a single privacy link; no anchor menu or mobile drawer is necessary. GitHub becomes an icon button on narrow screens. On mobile, feature cards and steps become one column.

Client components still render English content on the server, then respond to shared language state on hydration. Update content without navigation or refresh and preserve FAQ/tab state when changing language. All images, fonts and official Store badges load locally. Respect reduced motion, use visible keyboard focus, preserve heading order and provide descriptive image alternatives. Images support rather than replace readable text.
