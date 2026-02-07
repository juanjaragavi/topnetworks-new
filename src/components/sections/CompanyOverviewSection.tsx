"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

export default function CompanyOverviewSection() {
  return (
    <AnimatedSection id="company-overview" className="w-full">
      {/* Top half — white background */}
      <div className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <motion.p
            variants={itemVariants}
            className="text-2xl leading-relaxed text-gray-900 sm:text-3xl lg:text-4xl"
          >
            <span className="font-bold">Top Networks</span> is a{" "}
            <span className="italic text-[#1C5AD8]">
              Performance Publishing company monetizing advertising arbitrage
              models
            </span>{" "}
            in the US and LatAm...
          </motion.p>
        </div>
      </div>

      {/* Bottom half — blue background */}
      <div className="relative bg-[#1C5AD8] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          <motion.p
            variants={itemVariants}
            className="text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl"
          >
            ...we connect{" "}
            <span className="italic text-[#97E087]">
              high intent customers to relevant advertisers
            </span>{" "}
            through our proprietary marketing platform and our digital
            properties{" "}
            <span className="italic text-[#97E087]">
              achieving exponential ad conversions.
            </span>
          </motion.p>
        </div>

        {/* Bottom-right watermark */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 right-6"
        >
          <Image
            src="/images/topnetworks-logo-full-color.webp"
            alt="Top Networks"
            width={40}
            height={40}
            className="brightness-0 invert opacity-40 w-8 h-8 object-contain"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
