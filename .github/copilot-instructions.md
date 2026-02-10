# Copilot Instructions — Top Networks Website

## Project Overview

Single-page marketing/investor-pitch website for **Top Networks**, a Performance Publishing company. Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui (new-york style)**. The app lives entirely inside `app/` (working directory for all commands).

## Architecture

- **Single route:** `src/app/page.tsx` composes 14 ordered section components between `<Navbar />` and `<Footer />`.
- **All section components are client components** (`"use client"`) because they use Framer Motion.
- `src/components/AnimatedSection.tsx` — central animation wrapper exporting reusable variants (`itemVariants`, `cardVariants`, `metricVariants`, `staggerContainer`, `photoVariants`, `slideFromLeftVariants`, etc.). Every section wraps its content in `<AnimatedSection id="..." className="...">`.
- `src/components/ui/` — shadcn/ui primitives (used by `Navbar` only: `NavigationMenu`, `Sheet`). Sections themselves don't use shadcn/ui components.
- `src/lib/utils.ts` — single `cn()` helper (clsx + tailwind-merge).
- Path alias: `@/*` → `./src/*`.

## Developer Workflow

```bash
cd app          # all commands run from app/
npm run dev     # Next.js dev server at localhost:3000
npm run build   # production build
npm run lint    # ESLint (next core-web-vitals + typescript)
npm run format  # Prettier
```

No test framework is configured. No CI/CD pipeline exists yet.

## Section Component Pattern

Every section in `src/components/sections/` follows this template:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  itemVariants /* other variants */,
} from "@/components/AnimatedSection";

export default function ExampleSection() {
  return (
    <AnimatedSection
      id="section-id"
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Optional dot texture (white-bg sections only) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div variants={itemVariants}>{/* Content */}</motion.div>
      </div>

      {/* Watermark — bottom-right logo (ALL sections have this) */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 right-8 z-10"
      >
        <Image
          src="/images/topnetworks-logo-full-color.webp"
          alt="Top Networks Logo"
          width={40}
          height={40}
          className="opacity-40 w-8 h-8 object-contain"
        />
      </motion.div>
    </AnimatedSection>
  );
}
```

**Key rules:**

- Layout container: `max-w-7xl px-6 lg:px-12` (exception: `CompanyOverviewSection` uses `max-w-6xl px-8 lg:px-16`).
- White backgrounds get the dot texture overlay; blue (`bg-[#1C5AD8]`) backgrounds do not.
- On blue backgrounds, the watermark logo uses `brightness-0 invert` to render white.
- Data arrays (metrics, team members, cards) use `staggerContainer` on the parent and `cardVariants`/`metricVariants`/`photoVariants` on each child.

## Brand Tokens

| Token       | Value                                  | Usage                                      |
| ----------- | -------------------------------------- | ------------------------------------------ |
| Brand blue  | `#1C5AD8` / `var(--color-brand-blue)`  | Primary backgrounds, heading accents       |
| Brand green | `#97E087` / `var(--color-brand-green)` | Highlights, italic spans, decorative bars  |
| Font        | Spline Sans (Google Fonts)             | `--font-spline-sans`, loaded in layout.tsx |

## Navigation & Scroll

`Navbar.tsx` defines `NAV_GROUPS` mapping section labels to DOM `id`s. Smooth-scrolling uses a manual `scrollTo()` helper with a 72px navbar offset. An `IntersectionObserver` tracks the active section for highlighting. Any new section **must** be registered in `NAV_GROUPS` and `ALL_SECTION_IDS`, and given a matching `id` prop on its `<AnimatedSection>`.

## Images

All images live in `app/public/images/` as `.webp` files. Use `next/image` with explicit `width`/`height`. Naming convention: descriptive kebab-case (e.g., `mobile-phone-slide-1.webp`).

## Conventions

- **No server components with interactivity** — sections are client components for animation.
- **Tailwind v4** — uses `@import "tailwindcss"` in CSS, `@theme inline` for custom properties, and `@custom-variant dark` for dark mode. No `tailwind.config` file.
- **shadcn/ui** — add components via `npx shadcn@latest add <component>`. Config in `components.json` (new-york style, RSC enabled, lucide icons).
- **Animation easing** — always use `smoothEase` from `AnimatedSection.tsx`: `[0.25, 0.1, 0.25, 1]`.
- **No API routes or data fetching** — this is a purely static marketing site.
