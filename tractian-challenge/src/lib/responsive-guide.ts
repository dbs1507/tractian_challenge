/**
 * ============================================================
 * RESPONSIVE DESIGN GUIDE
 * Based on https://tractian.com/en/who-we-serve/plant-manager
 * ============================================================
 *
 * BREAKPOINTS (Tailwind defaults + custom):
 *   xs:  425px  (custom)
 *   sm:  640px
 *   md:  768px
 *   lg:  1024px
 *   xl:  1280px
 *   2xl: 1536px
 *   3xl: 2100px (custom)
 *   4xl: 2460px (custom)
 *
 * TYPOGRAPHY SCALE (base → lg):
 *   title-xl:  32px/40px  → 48px/60px
 *   title-lg:  24px/32px  → 40px/52px
 *   title-md:  1.25rem/1.75rem → 32px/40px
 *   title-sm:  20px/28px  → 24px/32px
 *   title-xs:  20px/24px  → 20px/28px
 *   body-xl:   16px/24px  → 20px/32px
 *   body-lg:   16px/24px  → 18px/28px
 *   body-md:   14px/22px  → 16px/24px
 *   body-sm:   14px/22px  → 14px/22px
 *   tag:       12px/20px
 *
 * FONT: Inter Tight for titles (font-family: var(--font-inter-tight))
 *
 * ============================================================
 * SECTION-BY-SECTION RESPONSIVE PATTERNS
 * ============================================================
 *
 * 1. HEADER / NAV
 *    - Mobile hamburger: below lg (1024px)
 *    - Desktop nav: lg+ (hidden lg:flex)
 *    - Nav height desktop: 72px
 *    - Container: max-w-screen-2xl, px-4 py-2 / lg:px-8 lg:py-0
 *
 * 2. HERO
 *    - Mobile (<md): solid bg-blue-950 (opacity 100%), text centered,
 *      separate <figure> with image below (h-[340px], sm:h-[290px])
 *      Two image variants: mobile crop (<sm) vs desktop crop (sm-md)
 *    - md+: background-image on section, 50% dark overlay left side (opacity 80%)
 *      Text left-aligned, content padding scales up at lg/xl
 *    - Floating testimonial card: hidden until lg
 *    - Ultra-wide: min-h scales at 3xl (675px) and 4xl (695px)
 *
 * 3. WHY CHOOSE ("Run a tighter ship")
 *    - NOT cards — it's a vertical accordion/tab list with left border indicator
 *    - Container: max-w-2xl mobile → lg:max-w-6xl
 *    - Mobile: tabs stacked vertically above image (flex-col)
 *    - lg+: tabs left, image right (flex-row), min-h-[360px]
 *    - Active tab: blue left border, revealed description
 *    - Image: object-contain mobile, md:object-cover, lg:object-contain h-[320px]
 *
 * 4. REPORTS TABS ("Built for smarter oversight")
 *    - Container: max-w-xl mobile → lg:max-w-6xl
 *    - Tab bar: flex-col (vertical) on mobile → sm:flex-row (horizontal)
 *    - Mobile tabs: full width, bg-[#F4F4F9]
 *    - sm+ tabs: auto width, transparent bg, blue bottom border on active
 *    - xl+: animated sliding blue underline indicator
 *    - Content: stacked mobile → lg:flex-row (text max-w-[382px] + image)
 *    - Content min-height: lg:min-h-[437px]
 *
 * 5. THREE PILLARS ("You run the plant")
 *    - Container: max-w-2xl → lg:max-w-6xl
 *    - Mobile: flex-col, each card is flex-row (icon left, text right)
 *    - lg+: flex-row (3 columns), each card is flex-col (icon top, text below)
 *    - Icon sizes: h-8 w-8 → sm:h-9 → md:h-10 → lg:h-12 w-12
 *    - Icon container: compact mobile → lg:h-24 w-24
 *    - Text: left-aligned mobile → lg:text-center
 *
 * 6. TESTIMONIALS
 *    - TWO separate renderings:
 *      Mobile (<sm): Swiper.js carousel
 *        - slidesPerView: 1.2 (300px), 1.3 (500px), 2.6 (700px)
 *        - spaceBetween: 24, loop: true, dot pagination
 *      sm+: CSS Grid / Flex
 *        - sm: grid-cols-2 (2x2 grid)
 *        - lg: flex-row (4 cards in a row)
 *    - Avatar: h-12 w-12 → lg:h-14 w-14
 *
 * 7. LOGOS CAROUSEL
 *    - TWO separate renderings:
 *      Mobile (<lg): CSS infinite scroll animation
 *        - translateX animation, 60s duration, linear infinite
 *        - Logos duplicated for seamless loop
 *        - scale-[0.7] on mobile → lg:scale-100
 *        - Fade edges with pseudo-elements (75px-200px gradient)
 *        - Slider height: h-20 (80px) → lg:h-28 (112px)
 *      Desktop (lg+): Static 6-column grid
 *        - grid-cols-6, max-w-6xl, centered, gap-12
 *
 * 8. PROCESS STEPS ("From first call to full rollout")
 *    - Container: max-w-2xl → lg:max-w-6xl
 *    - Mobile: flex-col, vertical stack
 *    - lg+: flex-row, 4 columns horizontal
 *    - Step badge: h-7 w-7 → lg:h-8 w-8
 *    - Content gap: gap-1 mobile → lg:gap-4
 *
 * 9. CTA ("More Than Machines")
 *    - Background image: always present, bg-cover bg-right
 *    - Mobile: full-width dark overlay (95% opacity), text centered
 *    - md+: 50% overlay (80% opacity), text left-aligned
 *    - Content max-width: full → md:318px → lg:full → xl:576px
 *    - Ultra-wide min-h: 2xl:475px → 3xl:525px → 4xl:560px
 *
 * 10. FAQ
 *    - Container: max-w-2xl → lg:max-w-6xl
 *    - Heading: text-title-md (20px) → lg:text-title-lg (40px)
 *    - Accordion: full-width buttons, p-4, border-slate-300
 *    - Hover: border-blue-600
 *    - Chevron rotates on expand (rotate-90 collapsed)
 *
 * 11. FOOTER
 *    - Container: max-w-6xl, px-4 → xl:px-0
 *    - Top bar: flex-col mobile → sm:flex-row (logo + badges)
 *    - Logo: hidden on mobile, sm:flex, h-8 w-28 → lg:h-12 w-36
 *    - Badges: scale-[0.8] → sm:scale-100, gap-1 → sm:gap-2 → lg:gap-6
 *    - Links: grid-cols-1 → md:grid-cols-2, visible dividers mobile only
 *    - Bottom: flex-col-reverse mobile → md:flex-row
 *    - Social icons: h-4 w-4, lg:gap-x-6
 *
 * ============================================================
 * KEY LAYOUT SUMMARY
 * ============================================================
 *
 * | Component         | Stacks at  | Side-by-side at |
 * |-------------------|------------|-----------------|
 * | Hero text/image   | < md       | md (bg + 50%)   |
 * | Why Choose        | < lg       | lg (flex-row)   |
 * | Reports tabs      | < sm       | sm (flex-row)   |
 * | Reports content   | < lg       | lg (flex-row)   |
 * | Three Pillars     | < lg       | lg (3 cols)     |
 * | Testimonials      | < sm       | sm (grid-2), lg (row-4) |
 * | Logos             | < lg (anim)| lg (grid-6)     |
 * | Process Steps     | < lg       | lg (4 cols)     |
 * | CTA overlay       | < md       | md (50% width)  |
 * | Nav               | < lg       | lg (desktop)    |
 * | Footer links      | < md       | md (grid-2)     |
 */

export const breakpoints = {
  xs: 425,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 2100,
  "4xl": 2460,
} as const;
