"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { smoothEase } from "@/components/AnimatedSection";

// Staggered animation variants for Hero elements
const heroH1Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0, ease: smoothEase },
  },
};

const heroSubtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: smoothEase },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, x: 80, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, delay: 0.4, ease: smoothEase },
  },
};

export default function HeroSection() {
  return (
    <AnimatedSection
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#1C5AD8] flex items-center pt-18"
      viewportAmount={0.1}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        {/* Left content — staggered fade-up animations */}
        <div className="flex flex-col items-start text-left lg:max-w-2xl">
          <motion.h1
            variants={heroH1Variants}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building The Future of{" "}
            <span className="italic text-[#97E087]">Digital Advertising.</span>
          </motion.h1>

          <motion.p
            variants={heroSubtitleVariants}
            className="mt-6 text-lg font-light text-blue-100 sm:text-xl lg:text-2xl"
          >
            Ad Profit Optimization Through{" "}
            <span className="font-medium text-white">
              AI-Driven AdTech Infrastructure.
            </span>
          </motion.p>
        </div>

        {/* Right smartphone mockup — slide in from right with delay */}
        <motion.div variants={heroImageVariants} className="relative shrink-0">
          <Image
            src="/images/mobile-phone-slide-1.webp"
            alt="Top Networks Mobile App"
            width={380}
            height={700}
            className="drop-shadow-2xl w-64 sm:w-80 lg:w-95 -rotate-6"
            priority
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
