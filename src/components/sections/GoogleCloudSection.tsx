"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

export default function GoogleCloudSection() {
  return (
    <AnimatedSection
      id="google-cloud"
      className="relative w-full overflow-hidden py-16 lg:py-24 flex items-center justify-center"
    >
      {/* Three-panel background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/3 bg-gray-100" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-gray-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-12">
        <motion.h2
          variants={itemVariants}
          className="mb-6 text-2xl font-bold sm:text-3xl"
        >
          <span className="text-gray-900">We are a </span>
          <span className="text-[#1C5AD8]">Google Cloud Startup</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <Image
            src="/images/google-cloud-platform-slide-13.webp"
            alt="Google Cloud Platform"
            width={200}
            height={60}
            className="w-20 sm:w-24 lg:w-28"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
