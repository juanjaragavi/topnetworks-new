import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import CompanyOverviewSection from "@/components/sections/CompanyOverviewSection";
import KeyMetricsSection from "@/components/sections/KeyMetricsSection";
import DynamicMarketSection from "@/components/sections/DynamicMarketSection";
import AdvertisingPredicamentSection from "@/components/sections/AdvertisingPredicamentSection";
import ModelSolutionSection from "@/components/sections/ModelSolutionSection";
import AIBridgeSection from "@/components/sections/AIBridgeSection";
import UserFlowSection from "@/components/sections/UserFlowSection";
import TopGeniusSection from "@/components/sections/TopGeniusSection";
import DefensibleGrowthSection from "@/components/sections/DefensibleGrowthSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ProductLogosSection from "@/components/sections/ProductLogosSection";

import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Section 1 — Hero */}
        <HeroSection />

        {/* Section 2 — Company Overview */}
        <CompanyOverviewSection />

        {/* Section 3 — Key Metrics */}
        <KeyMetricsSection />

        {/* Section 4 — Dynamic Market (The Opportunity) */}
        <DynamicMarketSection />

        {/* Section 5 — The Digital Advertising Predicament */}
        <AdvertisingPredicamentSection />

        {/* Section 6 — How the Model Solves This */}
        <ModelSolutionSection />

        {/* Section 7 — The AI-Driven Bridge for Modern Marketing */}
        <AIBridgeSection />

        {/* Section 8 — User Flow: The Intent Refinement Engine */}
        <UserFlowSection />

        {/* Section 9 — TOP Genius AI */}
        <TopGeniusSection />

        {/* Section 10 — Building Defensible Growth */}
        <DefensibleGrowthSection />

        {/* Section 11 — Founder-Led Leadership */}
        <LeadershipSection />

        {/* Section 12 — Product Logos */}
        <ProductLogosSection />

        {/* Section 13 — Contact / CTA Footer */}
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
