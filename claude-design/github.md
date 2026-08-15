repo: Ricsasa/lumina-landing
branch: main

## Last sync
date: 2026-08-15T02:20:00Z

### Updated in this project
- Reused the repo's design contract (section wrappers, card radii, borders, hover/shadow scale, WhatsApp CTA pattern) for a fictional language-school demo.
- Swapped the palette: cream/ivory surfaces from the reference screenshot with navy/blue accents and a warm amber highlight; kept --color-custom-whatsapp-green #25d366.
- Kept FiraSans/NeueMachina from public/fonts for labels and body copy; display headings now use Instrument Serif.
- New screens: Home, Calendarios, Profesores, Metodo (Idiomas del Futuro).

## Screen map
| Screen | Built from |
| --- | --- |
| Home.dc.html | src/styles/global.css, src/components/index/Gallery.jsx, src/components/index/Location.jsx, src/components/index/Reviews.jsx, src/components/common/SectionHeading.jsx, src/components/common/PriceCard.jsx, src/components/common/ImageCard.jsx |
| Calendarios.dc.html | src/styles/global.css, src/components/common/SectionHeading.jsx, src/components/common/PriceCard.jsx |
| Profesores.dc.html | src/styles/global.css, src/components/common/ImageCard.jsx, src/components/common/SectionHeading.jsx |
| Metodo.dc.html | src/styles/global.css, src/components/common/SectionHeading.jsx |
| SiteHeader.dc.html | src/components/Header.jsx |
| SiteFooter.dc.html | src/components/FooterSubpage.jsx |
| WhatsAppFab.dc.html | src/components/Whatsapp.jsx, public/variables.json |
