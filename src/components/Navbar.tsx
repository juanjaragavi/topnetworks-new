"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

/* ------------------------------------------------------------------ */
/*  Section map – grouped by theme                                    */
/* ------------------------------------------------------------------ */

const NAV_GROUPS = [
  {
    label: "About",
    items: [
      { label: "Company Overview", id: "company-overview" },
      { label: "Key Metrics", id: "key-metrics" },
    ],
  },
  {
    label: "Market",
    items: [
      { label: "The Opportunity", id: "dynamic-market" },
      { label: "The Predicament", id: "advertising-predicament" },
      { label: "Our Solution", id: "model-solution" },
    ],
  },
  {
    label: "Platform",
    items: [
      { label: "AI-Driven Bridge", id: "ai-bridge" },
      { label: "User Flow", id: "user-flow" },
      { label: "TOP Genius AI", id: "top-genius" },
      { label: "Defensible Growth", id: "defensible-growth" },
    ],
  },
  {
    label: "Team",
    items: [
      { label: "Leadership", id: "leadership" },
      { label: "Products", id: "products" },
      { label: "Google Cloud", id: "google-cloud" },
    ],
  },
];

const CONTACT_ITEM = { label: "Contact", id: "contact" };

/** All section IDs in order (for Intersection Observer) */
const ALL_SECTION_IDS = [
  "hero",
  ...NAV_GROUPS.flatMap((g) => g.items.map((i) => i.id)),
  CONTACT_ITEM.id,
];

/* ------------------------------------------------------------------ */
/*  Smooth scroll helper                                              */
/* ------------------------------------------------------------------ */

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72; // navbar height
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* --- scroll shadow ------------------------------------------------ */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- Intersection Observer for active section ---------------------- */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
          // Pick the section with highest ratio
          let best = "";
          let bestRatio = 0;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = sectionId;
            }
          });
          if (best) setActiveSection(best);
        },
        { threshold: [0, 0.2, 0.4, 0.6], rootMargin: "-72px 0px 0px 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* --- helper: is a nav group active? ------------------------------- */
  const isGroupActive = useCallback(
    (items: { id: string }[]) => items.some((i) => i.id === activeSection),
    [activeSection],
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="relative shrink-0"
          aria-label="Scroll to top"
        >
          <Image
            src="/images/topnetworks-logo-full-color.webp"
            alt="Top Networks"
            width={280}
            height={76}
            className={`h-16 w-auto object-contain transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </button>

        {/* ---- Desktop navigation ---- */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {NAV_GROUPS.map((group) => (
              <NavigationMenuItem key={group.label}>
                <NavigationMenuTrigger
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? isGroupActive(group.items)
                        ? "text-[#1C5AD8]"
                        : "text-gray-700 hover:text-gray-900"
                      : isGroupActive(group.items)
                        ? "text-[#97E087]"
                        : "text-white/80 hover:text-white"
                  } bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent`}
                >
                  {group.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-70 gap-1 p-2">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollTo(item.id)}
                            className={`flex w-full items-center rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-[#1C5AD8]/5 ${
                              activeSection === item.id
                                ? "bg-[#1C5AD8]/10 text-[#1C5AD8] font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            <span
                              className={`mr-2.5 h-1.5 w-1.5 rounded-full ${
                                activeSection === item.id
                                  ? "bg-[#1C5AD8]"
                                  : "bg-gray-300"
                              }`}
                            />
                            {item.label}
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {/* Contact — direct link */}
            <NavigationMenuItem>
              <button
                onClick={() => scrollTo(CONTACT_ITEM.id)}
                className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? activeSection === CONTACT_ITEM.id
                      ? "bg-[#1C5AD8] text-white"
                      : "bg-[#1C5AD8]/10 text-[#1C5AD8] hover:bg-[#1C5AD8] hover:text-white"
                    : activeSection === CONTACT_ITEM.id
                      ? "bg-white text-[#1C5AD8]"
                      : "bg-white/10 text-white hover:bg-white hover:text-[#1C5AD8]"
                }`}
              >
                {CONTACT_ITEM.label}
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ---- Mobile hamburger ---- */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-0.5 w-6 rounded-full transition-colors ${
                    scrolled ? "bg-gray-800" : "bg-white"
                  }`}
                />
              ))}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 overflow-y-auto">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src="/images/topnetworks-logo-full-color.webp"
                  alt="Top Networks"
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-6 p-4">
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {group.label}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {group.items.map((item) => (
                      <SheetClose key={item.id} asChild>
                        <button
                          onClick={() => {
                            setMobileOpen(false);
                            setTimeout(() => scrollTo(item.id), 100);
                          }}
                          className={`flex items-center rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-[#1C5AD8]/5 ${
                            activeSection === item.id
                              ? "bg-[#1C5AD8]/10 text-[#1C5AD8] font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          <span
                            className={`mr-2.5 h-1.5 w-1.5 rounded-full ${
                              activeSection === item.id
                                ? "bg-[#1C5AD8]"
                                : "bg-gray-300"
                            }`}
                          />
                          {item.label}
                        </button>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact CTA */}
              <SheetClose asChild>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setTimeout(() => scrollTo(CONTACT_ITEM.id), 100);
                  }}
                  className="mt-2 w-full rounded-lg bg-[#1C5AD8] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1C5AD8]/90"
                >
                  Contact Us
                </button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
