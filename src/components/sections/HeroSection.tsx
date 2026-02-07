"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

export default function HeroSection() {
  return (
    <AnimatedSection
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#1C5AD8] flex items-center"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        {/* Left content */}
        <div className="flex flex-col items-start text-left lg:max-w-2xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Building The Future of{" "}
            <span className="italic text-[#97E087]">Digital Marketing.</span>
          </motion.h1>
        </div>

        {/* Right smartphone mockup */}
        <motion.div variants={itemVariants} className="relative flex-shrink-0">
          <Image
            src="/images/mobile-phone-slide-1.webp"
            alt="Top Networks Mobile App"
            width={380}
            height={700}
            className="drop-shadow-2xl w-64 sm:w-80 lg:w-[380px] -rotate-6"
            priority
          />
        </motion.div>
      </div>

      {/* Bottom-right logo watermark */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 right-8 z-10"
      >
        <Image
          src="/images/topnetworks-logo-full-color.webp"
          alt="Top Networks Logo"
          width={48}
          height={48}
          className="brightness-0 invert opacity-60 w-10 h-10 object-contain"
          priority
        />
      </motion.div>
    </AnimatedSection>
  );
}
