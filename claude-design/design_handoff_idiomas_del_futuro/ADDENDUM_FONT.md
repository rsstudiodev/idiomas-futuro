Addendum — Typography Change (2026-08-15)
Supersedes the typography defined in the original handoff. Everything else (color, radii, shadows, spacing, layout) stays as specified.

Before → After
Role	Before	After
Display / headings (h1, h2, h3, level names, wordmark)	Instrument Serif	Bodoni Moda (high-contrast serif)
UI / labels / buttons / figures (prices, tables)	Fira Sans (local)	Work Sans
Body copy	Neue Machina (local)	Work Sans
Both local @font-face declarations are removed (public/fonts/FiraSans-Regular.ttf, public/fonts/NeueMachina-Regular.otf). The files can be deleted from the repo if nothing else uses them.

Font loading
One Google Fonts request, in <head> (or app/layout.tsx with next/font/google):

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Work+Sans:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
With next/font:

import { Bodoni_Moda, Work_Sans } from "next/font/google";

export const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
Tokens
:root {
  --font-display: "Bodoni Moda", ui-serif, Georgia, serif;
  --font-sans: "Work Sans", ui-sans-serif, system-ui, sans-serif;
}
Tailwind (tailwind.config.ts):

theme: {
  extend: {
    fontFamily: {
      display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
    },
  },
}
Find and replace across the codebase: font-['"]?Instrument Serif → font-display; FiraSans and NeueMachina → font-sans.

Scale and typographic adjustments
Bodoni Moda is high-contrast: it needs negative tracking at large sizes and no small sizes in running text.

Use	Tailwind classes
Hero h1	font-display text-[clamp(46px,6.4vw,92px)] leading-[1.02] tracking-[-0.012em] text-ink-900
Section h2	font-display text-[clamp(34px,4vw,52px)] leading-[1.08] tracking-[-0.008em]
Card h3	font-display text-2xl leading-snug (weight 500 if it looks fragile on the light-blue fill)
Nav / drawer links	font-display text-[28px] (drawer) · font-sans text-sm (desktop nav)
Body	font-sans text-[17px] leading-[1.8] font-light
Body in cards	font-sans text-sm leading-[1.75]
Eyebrow / label	font-sans text-[11px] tracking-[0.16em] uppercase
Price / figure	font-sans text-3xl font-medium tabular-nums
Button	font-sans text-sm font-medium
Rules:

Bodoni never below 20px, and never in paragraphs, tables, or labels — headings and the wordmark only.
Everything functional (nav, buttons, calendar tables, prices, forms) is Work Sans.
Long-form body in Work Sans 300 (font-light); UI and labels at 400/500.
Figures: tabular-nums in calendar tables and prices so columns align.
Bodoni italic is available (italic) for editorial accents — at most once per section.
Verification
Header wordmark, hero, every section h2, and level names in Bodoni; everything else in Work Sans.
No visible FOUT (display: swap + preconnect).
At 375px: the hero doesn't break words and the wordmark doesn't wrap.
Contrast: Bodoni headings in #14345c on cream #faf6ec — confirm the thin strokes stay legible at 24px.