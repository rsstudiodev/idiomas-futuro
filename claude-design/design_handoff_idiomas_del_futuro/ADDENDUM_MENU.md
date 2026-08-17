Addendum 2 — Floating Navigation, Hero, and Cleanup (2026-08-17)
Applies on top of the original handoff + ADDENDUM-tipografia.md. Changes navigation and the hero; system color, radii, shadows, and spacing stay as specified.

Summary
The fixed top header is replaced by a floating bottom dock.
The green "Reserva tu lugar" FAB is removed (WhatsAppFab component deleted).
The dock uses inverted colors (translucent blue bar over the content) and scales up at medium/large breakpoints.
The hero loses its two buttons; the hero logo grows to 108px.
1. Floating bottom dock (replaces the header)
Before: fixed full-width top <nav>, height: 80px, cream at 82%, text links + WhatsApp button + side drawer below 1000px. After: centered floating bar at the bottom, width driven by content (not full-width), no drawer.

Geometry and surface:

Property	Value
Position	fixed, bottom: 22px (≥721px: 28px), centered via left:50%; translateX(-50%)
z-index	120
Outer container	pointer-events: none (doesn't block content); the bar itself pointer-events: auto
Bar radius	22px mobile · 26px ≥721px (slightly rounded, not a full pill)
Bar background	rgba(20, 52, 92, 0.72)
Blur	backdrop-filter: blur(28px) saturate(1.4) (+ -webkit- prefix)
Border	1px solid rgba(250, 246, 236, 0.22)
Shadow	0 22px 54px rgba(20,52,92,0.34), inset 0 1px 0 rgba(255,255,255,0.16)
Bar padding	8px mobile · 11px ≥721px
Gap between items	4px mobile (2px ≤720px) · 6px ≥721px
Tailwind equivalent:

<div class="pointer-events-none fixed bottom-[22px] md:bottom-7 left-1/2 z-[120] -translate-x-1/2 flex justify-center">
  <nav class="pointer-events-auto flex items-center gap-1 md:gap-1.5 rounded-[22px] md:rounded-[26px]
              bg-[#14345c]/70 backdrop-blur-2xl backdrop-saturate-150
              border border-[#faf6ec]/20 p-2 md:p-[11px]
              shadow-[0_22px_54px_rgba(20,52,92,0.34),inset_0_1px_0_rgba(255,255,255,0.16)]">
Items (in order)
#	Item	Icon	Destination
1	Logo (no label)	brand mark: ring + amber diamond	/
2	Próximos inicios	calendar	/proximos-inicios
3	Profesores	graduation cap / mortarboard	/profesores
4	Método	bar chart	/metodo
5	Reservar	WhatsApp logo (filled glyph)	https://wa.me/523311223344?text=… (target="_blank" rel="noopener noreferrer")
Icons: line icons at stroke-width: 1.7, stroke-linecap/linejoin: round, currentColor (Lucide works: calendar-days, graduation-cap, bar-chart-3). WhatsApp is the filled brand glyph, not a line icon.

Inverted colors (current state)
Nav items: text and icon #f4efe3, no background. Hover: background: rgba(250,246,236,0.16).
Logo tile: #faf6ec background, mark in #14345c (ring border: 2px solid #14345c, diamond #e0a35c). Hover #ffffff.
Reservar CTA: #faf6ec background, #14345c text, font-weight: 600. Hover #ffffff. (The only item with a solid fill → the dock's visual anchor.)
Shared transition: all .3s.
Scale by breakpoint
Element	≤720px	≥721px
Item padding	12px 14px	15px 22px
Text size	(label hidden)	16px
Icon	19px	22px
Item radius	16px	19px
Logo tile	44px / radius 16px	54px / radius 19px
Responsive rules:

≤720px: labels hide (display:none) → icon-only dock; items at 12px 14px; bar padding 8px, gap 2px.
≤400px: the dock stops being transform-centered and switches to left:12px; right:12px; transform:none; justify-content:center so it can't overflow.
Touch targets ≥44px at every size.
Page-level impact
All drawer markup and the isOpen state are removed (the header needs no logic anymore — it's a stateless component).
Every page adds padding-bottom: 96px to its wrapper so the dock never covers the end of the footer.
No top header → hero top padding is reduced:
Home: 160px → 120px (top)
Próximos inicios / Profesores / Método: 200px → 128px (top)
Mobile override (≤640px): padding-top: 130px → 88px
2. WhatsApp FAB removed
The green bottom-right floating button ("Reserva tu lugar") is gone site-wide: component deleted and its import removed from all 4 pages. The dock's Reservar CTA carries that job now.

3. Hero
Buttons removed: "Ver próximos inicios" (solid blue) and "Nuestro método" (light secondary), along with their flex container. The hero is now: logo → eyebrow → h1 → paragraph. Conversion lives in the dock.
Hero logo enlarged:
Before	After
Tile	62 × 62px, radius 19px	108 × 108px, radius 32px
Inner ring	24px, 3px border	42px, 5px border
Amber diamond	12px, 10px offset	21px, 17px offset
Shadow	none	0 18px 44px rgba(20,52,92,0.22)
Logo colors unchanged: tile #14345c, ring #faf6ec, diamond #e0a35c rotated 45°.

Verification
The dock floats above content on all 4 pages, centered, never touching the window edges.
No green FAB and no top header remain anywhere.
At 375px: icons only, dock doesn't overflow and stays centered.
Scrolled to the bottom: the footer reads in full (the 96px padding does its job).
The cream Reservar CTA reads against the blue bar; hover is perceptible on the text items.
The hero logo doesn't push the h1 out of the viewport on short screens (hero is min-height: 100vh, content centered).