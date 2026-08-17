Addendum 3 — Typography Exploration: Libre Caslon Display + Karla (2026-08-17)
Status: candidate, not applied site-wide. Live only in Home tipos Caslon.dc.html (with its own SiteHeaderCaslon / SiteFooterCaslon). The shipped site still runs Addendum 1's pairing (Bodoni Moda + Work Sans). Implement this only once the pairing is approved.

Proposed change
Role	Current (Addendum 1)	Proposed
Display / headings, level names, hero eyebrow, wordmark	Bodoni Moda	Libre Caslon Display (400 only)
UI / labels / buttons / dock items / figures	Work Sans	Karla
Body copy	Work Sans	Karla
Rationale: Libre Caslon Display keeps the editorial serif voice but with sturdier strokes than Bodoni, so mid-size headings and headings on the blue fill stop looking fragile. Karla is a humanist grotesque with more warmth and character than Work Sans, and its figures hold up in the calendar tables.

Caveat: Libre Caslon Display ships one weight (400), no italic. Any place that previously leaned on Bodoni 500 or Bodoni italic needs a different emphasis device (size, color, or Karla 600).

Font loading
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
  rel="stylesheet"
/>
With next/font:

import { Libre_Caslon_Display, Karla } from "next/font/google";

export const display = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});
Tokens
:root {
  --font-display: "Libre Caslon Display", ui-serif, Georgia, serif;
  --font-sans: "Karla", ui-sans-serif, system-ui, sans-serif;
}
Tailwind config is unchanged from Addendum 1 — only the two CSS variables above change. The font-display / font-sans utilities keep working as-is.

Adjustments vs. ADDENDUM_FONT.md
Hero h1 tracking tightens: -0.012em → -0.018em (Caslon sets looser than Bodoni at display sizes).
Section h2 tracking: keep -0.008em.
Card h3: drop the weight-500 fallback — Caslon has no 500. If a heading reads too light on the light-blue fill, darken to #14345c or bump the size instead.
Editorial italic accents: switch from Bodoni italic to Karla italic 400, or drop them.
Everything else from Addendum 1's scale table stays: sizes, line-heights, tabular-nums on figures, the "never below 20px" rule now applies to Caslon, and all functional UI (dock, buttons, tables, forms) stays in the sans.
Dock note
The bottom dock's items and CTA use --font-sans, so they simply pick up Karla — sizes, weights (500 items / 600 CTA), and the ≥721px scale-up from Addendum 2 are unaffected.

If approved
Swap the font <link> / next/font block and the two CSS variables.
Apply the two tracking/weight adjustments above.
Delete the candidate files (Home tipos Caslon.dc.html, SiteHeaderCaslon.dc.html, SiteFooterCaslon.dc.html) — they exist only for comparison.
Saved as design_handoff_idiomas_del_futuro/ADDENDUM-3-tipografia-caslon-karla.md.