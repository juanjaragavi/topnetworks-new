"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

export default function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      className="relative w-full overflow-hidden bg-[#1C5AD8] py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Logo top-center */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center"
        >
          <Image
            src="/images/topnetworks-logo-full-color.webp"
            alt="Top Networks Logo"
            width={180}
            height={50}
            className="brightness-0 invert"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT — smartphone mockup */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0 order-2 lg:order-1"
          >
            <Image
              src="/images/fading-mobile-phone-slide-14.webp"
              alt="Top Networks App"
              width={350}
              height={650}
              className="drop-shadow-2xl w-56 sm:w-72 lg:w-[320px]"
            />
          </motion.div>

          {/* RIGHT — text content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              Join Us Building The Future of Digital Marketing.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mb-8 h-1 w-24 rounded-full bg-[#97E087]"
            />

            {/* Compact contact info */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#97E087]">
                <Image
                  src="/images/camilo-gomez.webp"
                  alt="Camilo Gomez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-white">Camilo Gomez</p>
                <p className="text-sm text-blue-200">
                  Co-founder, Partnerships
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <a
                    href="mailto:camilo.gomez@topnetworks.co"
                    className="text-[#97E087] hover:text-white transition-colors"
                  >
                    camilo.gomez@topnetworks.co
                  </a>
                  <span className="text-blue-300">|</span>
                  <a
                    href="tel:+525619952360"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    +52 56 1995 2360
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Top Networks Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
