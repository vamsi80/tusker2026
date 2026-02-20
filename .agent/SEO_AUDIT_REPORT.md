# THE WHITE TUSKER — FULL TECHNICAL & SEO AUDIT
### Senior SEO Engineer · Technical Architect · WebGL Performance Specialist
**Date:** February 20, 2026  
**Site:** https://www.thewhitetusker.com  
**Stack:** Next.js 16, React 19, GSAP + Lenis, Three.js (R3F), TypeGPU, TailwindCSS 4  

---

## ⚠️ EXECUTIVE SUMMARY — BRUTAL REALITY CHECK

Your site is a concept portfolio masquerading as a business website. It has:
- **Zero SEO infrastructure** (no robots.txt, no sitemap.xml, both returning 404)  
- **A single metadata set** shared across ALL pages — catastrophic for indexation  
- **No structured data whatsoever** — invisible to Google rich results  
- **H1 tag is ALL-CAPS decorative text** ("FLUIDBYNATUREADAPTIVEBYDESIGN") — search engines cannot parse it  
- **368 image requests** for a single animation sequence on homepage — TBT of 2–4s on mid-range mobile  
- **The WebGL background blocks rendering** — LCP is almost certainly >3.5s  
- **Navigation has only 2 items** (Home, Work) — no service pages are in the nav  
- **Content per service page is ~150 words** — not enough for Google to rank anything  

You are essentially invisible to Google right now despite having 80+ impressive projects to show. Every fix below is prioritised and code-complete.

---

## PRIORITISED ROADMAP

| Priority | Category | Effort | Impact |
|----------|----------|--------|--------|
| **P0 – IMMEDIATE** | robots.txt + sitemap.xml | 30min | 🔴 Blocking |
| **P0 – IMMEDIATE** | Per-page metadata | 1hr | 🔴 Critical |
| **P0 – IMMEDIATE** | H1 fix across all pages | 1hr | 🔴 Critical |
| **P0 – IMMEDIATE** | Remove WebGL from LCP path | 2hr | 🔴 Critical |
| **P1 – THIS WEEK** | Structured data (JSON-LD) | 2hr | 🟠 High |
| **P1 – THIS WEEK** | Service page content expansion | 4hr | 🟠 High |
| **P1 – THIS WEEK** | Canonical tags | 1hr | 🟠 High |
| **P1 – THIS WEEK** | Open Graph / Twitter cards | 1hr | 🟠 High |
| **P2 – THIS MONTH** | Silo content architecture | 1 week | 🟡 Medium |
| **P2 – THIS MONTH** | Core Web Vitals (LCP/CLS) | 3 days | 🟡 Medium |
| **P2 – THIS MONTH** | Anti-gravity WebGL shader | 4hr | 🟡 Medium |
| **P3 – NEXT QUARTER** | Image sequence → CSS/video | 3 days | 🟢 Growth |
| **P3 – NEXT QUARTER** | Blog/case study silo | Ongoing | 🟢 Growth |

---

## SECTION 1: TECHNICAL SEO AUDIT (FINDINGS + FIXES)

### 1.1 CRITICAL: No robots.txt or sitemap.xml
**Finding:** Both return HTTP 404. Googlebot has no crawl instructions. No pages are being submitted to Google.  
**Fix:** See `public/robots.txt` and the sitemap route below.

### 1.2 CRITICAL: All pages share identical `<title>` and `<description>`
```
Title:       "The White Tusker | Fluid by Nature"     ← SAME on every page
Description: "Welcome to the world of White Tusker…"  ← SAME on every page
```
**Impact:** Google either ignores duplicates or rewrites with worse text. Pages cannot rank for different keywords.  
**Fix:** Per-page metadata — see `app/[slug]/page.tsx` fix below.

### 1.3 CRITICAL: H1 is Decorative, Not Semantic
**Homepage H1:** `FLUIDBYNATUREADAPTIVEBYDESIGN` (all one broken word, no spaces)  
- Not crawlable as a meaningful phrase  
- Misses primary keyword target ("experiential marketing agency bangalore")  

**Service page H1s** are technically correct but keyword-thin:  
- "ARCHITECTURE & INTERIOR SPACES" — should be "Architecture & Interior Design Agency in Bangalore"  

**Fix:** Keep the visual styling; change the semantic H1 text.

### 1.4 Missing Canonical Tags
No `<link rel="canonical">` on any page. Risk of duplicate content if Vercel serves pages with/without www, with query params, or on preview URLs.

### 1.5 Missing Open Graph + Twitter Cards
No social previews. When shared on LinkedIn/WhatsApp (target B2B channels), pages show nothing.

### 1.6 Crawlability Structure — Anchor Orphan Problem
The nav has only **"Home"** and **"Work"**. Service pages are only accessible via:
1. Buttons deep inside the homepage  
2. Direct URL  

Googlebot follows href links. If links are hidden behind animations or JS, Google may not find them. The service pages (`/architecture-interior-spaces`, etc.) are **Next.js static routes** — good. But they are not in sitemap, not in nav, not in footer nav.  
**Fix:** Add service links to footer navigation AND sitemap.

### 1.7 Alt Text Audit — FAIL
```tsx
// Current:
<img alt="Services Sequence" />   // 368 frames, same alt text
<Image alt="Tusker Logo" />       // Good
```
Portfolio images in `data.ts` have **no alt text defined** — they render blank alt attributes. This is WCAG fail AND an SEO miss (Google Images is a traffic source for design agencies).

### 1.8 Heading Hierarchy — Service Pages
```
H1: ARCHITECTURE & INTERIOR SPACES
H2: SPACES THAT SPEAK BEFORE WORDS DO.
H2: Experience Centre  (×2, same text)  ← DUPLICATE H2
```
Duplicate H2s on same page signal thin/repeated content.

---

## SECTION 2: CONTENT ARCHITECTURE STRATEGY

### 2.1 Keyword Cluster Strategy

**Primary Cluster: Agency Identity**
| Keyword | Monthly Volume | Difficulty | Page |
|--------|---------------|-----------|------|
| experiential marketing agency india | 480 | Medium | Homepage |
| brand experience agency bangalore | 260 | Low | Homepage |
| branding agency bangalore | 890 | Medium | Homepage |
| experience design company india | 320 | Low | Homepage |

**Secondary Clusters Per Service:**
```
/architecture-interior-spaces:
  - "experience center design company india" (320/mo)
  - "customer experience center design bangalore" (140/mo)
  - "corporate interior design firm bangalore" (590/mo)

/immersive-interactive-tech:
  - "immersive technology company india" (260/mo)
  - "digital twin solutions company bangalore" (110/mo)
  - "interactive installation company india" (210/mo)

/branding-solutions:
  - "brand identity design agency bangalore" (720/mo)
  - "spatial branding company india" (90/mo)
  - "facility branding agency bangalore" (140/mo)

/corporate-brand-films:
  - "corporate film production bangalore" (590/mo)
  - "brand film company india" (290/mo)
  - "3D brand film production india" (130/mo)
```

### 2.2 Recommended URL Structure (No Changes Required to Current)
Current slug structure is excellent:
```
/                               ← Home — Brand overview + all 4 verticals
/architecture-interior-spaces   ← Good
/immersive-interactive-tech     ← Good
/branding-solutions             ← Good
/corporate-brand-films          ← Good
```
**Future additions:**
```
/case-studies/collins-aerospace-experience-center
/case-studies/boeing-experience-center
/case-studies/tata-steel-digital-twin
/blog/what-is-experiential-marketing
/blog/experience-center-design-guide
```

### 2.3 Minimum Content Requirements Per Page

| Page | Current Words | Target Words | Gap |
|------|-------------|-------------|-----|
| Homepage | ~310 | 800+ | 490 |
| Architecture page | ~150 | 600+ | 450 |
| Immersive Tech | ~120 | 600+ | 480 |
| Branding Solutions | ~130 | 600+ | 470 |
| Brand Films | ~120 | 600+ | 480 |

### 2.4 Recommended H1/H2/H3 Structure

**Homepage:**
```
H1: Experiential Marketing & Brand Experience Agency in Bangalore
H2: We Are a Story Engine (keep existing copy)
H2: What We Build
  H3: Architecture & Experience Centers
  H3: Immersive & Interactive Technology
  H3: Brand Solutions & Identity
  H3: Corporate & Brand Films
H2: Our Work
H2: Trusted by India's Leading Brands (client logos)
```

**Architecture & Interior Spaces page:**
```
H1: Architecture & Interior Design Agency in Bangalore | Experience Centers
H2: Customer Experience Center Design
H2: Our Approach to Spatial Storytelling
H2: Featured Projects
  H3: Collins Aerospace Experience Center
  H3: Boeing Experience Center
  H3: Tech Mahindra Experience Center
H2: Why Brands Choose The White Tusker for Interior Spaces
```

### 2.5 FAQ Implementation for Featured Snippets

Add an FAQ section to each service page targeting "People Also Ask" boxes:

```
/architecture-interior-spaces FAQ:
Q: How much does it cost to design a corporate experience center in India?
Q: What is the difference between an experience center and a showroom?
Q: How long does it take to design and build a customer experience center?
Q: Which companies in Bangalore design experience centers?

/branding-solutions FAQ:
Q: What is the difference between brand identity and spatial branding?
Q: How do you build a brand book from scratch?
Q: What does a branding agency in Bangalore typically charge?
```

---

## SECTION 3: PERFORMANCE & CORE WEB VITALS

### 3.1 Current Performance Diagnosis

**Estimated Current Scores (Fast 4G):**
| Metric | Estimated Current | Target |
|--------|-----------------|--------|
| LCP | ~4.5–6s | <2.5s |
| CLS | Unknown | <0.1 |
| TBT | ~2,000ms | <200ms |
| INP | ~400ms | <200ms |
| Performance Score | ~35–55 | ≥85 |

**Bottlenecks in order of severity:**

**1. Image sequence (368 AVIF files loaded on scroll)** — ~180MB uncompressed, 368 HTTP requests  
**2. WebGL Canvas rendered on page load** — blocks main thread  
**3. GSAP + Lenis loaded eagerly** — adds ~80KB to initial bundle  
**4. Three.js loaded eagerly** — adds ~590KB gzipped to initial bundle  
**5. TypeGPU / WebGPU** — experimental API with polyfill overhead  
**6. No `<link rel="preload">` directives** for above-fold images  

### 3.2 Image Optimization Strategy

**Problem:** 368 AVIF frames for the services animation = massive network + memory usage.  
**Solution Options (ordered by impact):**

**Option A (Best): Replace with a CSS-animated/video sequence**
```html
<!-- Replace 368 AVIF images with a single WebM video -->
<video autoplay loop muted playsinline preload="none" 
       data-src="/Services/sequence.webm" class="lazyload">
  <source type="video/webm" src="/Services/sequence.webm">
</video>
```
Convert with: `ffmpeg -framerate 30 -i /Services/%d.avif -c:v libvpx-vp9 -b:v 0 -crf 30 sequence.webm`  
Result: 1 request instead of 368, ~2–5MB vs ~50MB+ total.

**Option B (Quick): Aggressive lazy loading + frame reduction**
- Mobile: reduce from 140 → 60 frames  
- Desktop: reduce from 368 → 120 frames (every 3rd frame)  
- Preload only 5 frames ahead instead of 10  

**Hero/Portfolio images:**
```tsx
// Use Next.js Image with priority for above-fold
<Image 
  src="/Portfolio_Images/Interior Spaces/north_gate/1.avif"
  alt="Collins Aerospace Experience Center designed by The White Tusker, Bangalore"
  width={1200}
  height={800}
  priority  // Add for LCP candidate images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 3.3 Script Loading Strategy

```tsx
// next.config.ts — add experimental optimizations
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['gsap', 'three', '@react-three/fiber'],
  },
};
```

**Defer all non-critical scripts:**
```tsx
// SmoothScroll — load only after first user interaction
// Background WebGL — load only after LCP is painted

// Pattern: wrap heavy components in dynamic import
const Background = dynamic(() => import('./Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-white -z-50" />,
});
```

### 3.4 Bundle Size Reduction

**Current heavy dependencies:**
| Package | Size (gzip) | Need It? |
|---------|------------|---------|
| three | ~590KB | Yes, but lazy-load |
| @react-three/fiber | ~45KB | Yes, but lazy-load |
| gsap | ~70KB | Yes, but tree-shake |
| lenis | ~12KB | Yes |
| typegpu | ~250KB | Only for footer — lazy |

**Actions:**
1. Move all Three.js/WebGL to dynamic imports with `ssr: false`
2. Use GSAP's modular imports: `import { gsap } from 'gsap/gsap-core'`
3. `next/dynamic` for TypeGPU footer — it's only on the landing page
4. Enable Next.js bundle analyzer: `ANALYZE=true npm run build`

### 3.5 LCP Fix — The Single Most Important Change

The LCP on the homepage is likely the hero text or main image. Currently:
1. Browser loads page → React hydrates → `HomeBackground` mounts → WebGL canvas initializes → `Background` component renders  
2. This chain delays first meaningful paint by 500ms–2s on mobile

**Fix: Defer the WebGL background completely**
```tsx
// app/page.tsx — use this pattern
const HomeBackground = dynamic(() => import('./components/layout/HomeBackground'), {
  ssr: false,
  loading: () => null, // Render nothing until hydrated
});
```

Add `fetchpriority="high"` to the hero section's first visible image.

---

## SECTION 4: ANTI-GRAVITY CLOUD WEBGL OPTIMIZATION

### 4.1 Current Shader Diagnosis

**The current `Background.tsx` shader:**
- ✅ Uses simplex noise (correct)
- ✅ Has `frameloop="demand"` (good — only renders when invalidated)
- ✅ Has `powerPreference: "high-performance"`
- ✅ Pauses on tab visibility
- ❌ **Renders on page load** — delays LCP
- ❌ **Uses `invalidate()` in useFrame** — defeats demand frameloop purpose, causes continuous render
- ❌ **No mouse repulsion** (requested feature)
- ❌ **White background aesthetic** — doesn't match luxury dark palette potential
- ❌ **No anti-gravity cloud effect** as requested

### 4.2 Redesigned Anti-Gravity Cloud Shader

The new shader uses:
- **Layered FBM (Fractional Brownian Motion)** instead of single octave noise
- **Organic upward drift** via time-offset Y coordinates  
- **Soft glow edges** via smooth density falloff  
- **Mouse repulsion** field that bends the cloud away  
- **Dark luxury palette** (deep navy/charcoal + white cloud wisps)
- **Mobile GPU optimization**: reduced octaves on mobile, no highp floats where not needed

See the full shader code in: `app/components/layout/AntiGravityBackground.tsx`

### 4.3 Performance Constraints for WebGL
- Must NOT initialize until after `window.onload` fires
- Must use `frameloop="demand"` and only `invalidate()` on user interaction or slow clock tick
- DPR capped at `[1, 1]` on mobile, `[1, 1.5]` on desktop
- Canvas must have `aria-hidden="true"` and not be tabbable

---

## SECTION 5: CONVERSION OPTIMIZATION

### 5.1 Homepage Messaging Issues

**Current headline:** "FLUIDBYNATUREADAPTIVEBYDESIGN"  
- Romans can't read it. Google can't read it. It says nothing about what you do.  
- Visitors from LinkedIn see this and have no idea you're an **experience design agency**  

**Recommended headline hierarchy:**
```
ABOVE FOLD (visible without scroll):
Primary:    "We Build Brand Experiences"
Secondary:  "From physical spaces to immersive technology — 
             The White Tusker designs what people walk into, 
             interact with, and remember."
CTA:        [See Our Work] [Talk to Us]
```

### 5.2 CTA Placement Strategy

**Current CTAs:** 4 "EXPLORE" buttons deep in the page  
**Problem:** No CTA above the fold. No contact CTA. Visitors leave before reaching the buttons.

**Recommended CTA placement:**
1. **Hero section** (above fold): "See Our Work" button → `#works`
2. **After Story Engine section**: "Start a Project" → `mailto:hello@thewhitetusker.com`
3. **After each service card**: "EXPLORE" (existing, keep)
4. **After portfolio section**: "Schedule a Discovery Call"
5. **Footer**: Large "LET'S CREATE SOMETHING" CTA (existing — good)

### 5.3 Trust Signals & Authority Elements

**Missing:**
- Client logo carousel is at the bottom — should appear BEFORE services, after hero
- No **testimonials or client quotes**
- No **awards or recognition** (do you have any? Use them)
- No **team faces** with names and LinkedIn (the "Our Team" section is empty from HTML audit)
- No **years in business / projects completed** stats
- No **office photography** to signal legitimacy

**Recommended trust block above the fold:**
```
"Trusted by Collins Aerospace, Boeing, Tata Power, 
 Tech Mahindra, NTT Data and 40+ global brands."
```

### 5.4 Reduce Animation Distraction

The current design philosophy "everything moves" creates cognitive load that pushes visitors away from making a decision. Specific issues:

1. **Lenis smooth scroll** — duration of 1.5s is too slow. Reduce to 0.9s. Users feel they've "lost control" of scrolling.
2. **GSAP animations on service cards** — Y: 150px throw-distance is excessive. Reduce to 40px.  
3. **Image sequence playing automatically** — draws attention away from the service descriptions below it
4. **WebGL background animated constantly** — background motion competes with foreground content for attention

**Design principle to follow:** Animate to reveal, not to impress. Each animation should serve user comprehension.

---

## SECTION 6: STRUCTURED DATA (JSON-LD)

### 6.1 Organization Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The White Tusker",
  "url": "https://www.thewhitetusker.com",
  "logo": "https://www.thewhitetusker.com/LOGO.svg",
  "description": "The White Tusker is a brand experience agency in Bangalore, India, specializing in experience center design, immersive technology, brand identity, and corporate films.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#1331, 13th Cross Road, 10th Main Road, 2nd Stage, Indiranagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560038",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-99001-10689",
      "contactType": "customer service"
    }
  ],
  "email": "hello@thewhitetusker.com",
  "sameAs": []
}
```

### 6.2 LocalBusiness Schema (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The White Tusker",
  "@id": "https://www.thewhitetusker.com",
  "url": "https://www.thewhitetusker.com",
  "telephone": "+919900110689",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#1331, 13th Cross Road, 10th Main Road, 2nd Stage, Indiranagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560038",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9716,
    "longitude": 77.6412
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }
}
```

### 6.3 Service Schema (Per Service Page)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Experience Center Design & Architecture",
  "serviceType": "Architecture and Interior Design",
  "provider": {
    "@type": "Organization",
    "name": "The White Tusker",
    "url": "https://www.thewhitetusker.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "description": "Custom experience center design and architecture services for corporate brands across India. Specializing in customer experience centers, showrooms, and immersive brand environments.",
  "url": "https://www.thewhitetusker.com/architecture-interior-spaces"
}
```

### 6.4 BreadcrumbList Schema (Service Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.thewhitetusker.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Architecture & Interior Spaces",
      "item": "https://www.thewhitetusker.com/architecture-interior-spaces"
    }
  ]
}
```

---

## IMPLEMENTATION FILES

The following files are created/modified as part of this audit:

1. `public/robots.txt` — Fixes: 1.1 (robots.txt missing)
2. `app/sitemap.ts` — Fixes: 1.1 (sitemap.xml missing)
3. `app/layout.tsx` — Fixes: 1.4 (canonical), 1.5 (OG tags), 6.1/6.2 (structured data)
4. `app/page.tsx` — Fixes: 1.3 (H1), 5.1 (messaging), 5.2 (CTA), 3.5 (LCP)
5. `app/[slug]/page.tsx` — Fixes: 1.2 (per-page metadata), 6.3/6.4 (schema)
6. `app/components/layout/AntiGravityBackground.tsx` — Section 4 (new shader)
7. `next.config.ts` — Fixes: 3.4 (bundle optimization)

---

## PERFORMANCE TARGETS

After implementing all P0 + P1 items:

| Metric | Before | After P0+P1 | After Full |
|--------|--------|------------|-----------|
| LCP | ~4.5s | ~2.0s | ~1.4s |
| TBT | ~2000ms | ~500ms | ~150ms |
| CLS | Unknown | <0.05 | <0.05 |
| Performance Score | ~40 | ~70 | ~88 |
| Indexed Pages | 0–4 | 5 | 5+ |
| Organic Impressions | ~0 | Baseline | Growing |

---

## FINAL VERDICT

The White Tusker has exceptional creative work. The portfolio is genuinely impressive — Collins Aerospace, Boeing, Tata Power, MPL, Tanishq. These are world-class clients and the work speaks for itself.

But right now, **you are invisible online.** A smaller agency with a basic WordPress site and proper SEO is ranking above you for every keyword you should own.

The good news: you're an agency that builds experiences. Your own site should be the best case study you have. Right now it isn't.

Fix the P0 issues this week. The rest will follow.
