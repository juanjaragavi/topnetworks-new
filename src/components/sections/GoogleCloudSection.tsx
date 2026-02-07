"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

export default function GoogleCloudSection() {
  return (
    <AnimatedSection
      id="google-cloud"
      className="relative w-full overflow-hidden py-24 lg:py-32"
    >
      {/* Three-panel background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/3 bg-gray-100" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-gray-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl"
        >
          <span className="text-gray-900">We are a </span>
          <span className="text-[#1C5AD8]">Google Cloud Startup.</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <Image
            src="/images/google-cloud-platform-slide-13.webp"
            alt="Google Cloud Platform"
            width={400}
            height={120}
            className="w-64 sm:w-80 lg:w-96"
          />
        </motion.div>
      </div>

      {/* Bottom-right watermark */}
      <div className="absolute bottom-6 right-6 z-10">
        <Image
          src="/images/topnetworks-logo-full-color.webp"
          alt="Top Networks"
          width={40}
          height={40}
          className="opacity-40 w-8 h-8 object-contain"
        />
      </div>
    </AnimatedSection>
  );
}
