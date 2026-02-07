"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

const metrics = [
  {
    value: "34%",
    label: "CTR",
    detail: "680x the Industry Average",
  },
  {
    value: "$345",
    label: "eCPM",
    detail: "Benchmarked against a $30 US Industry baseline (11.5x)",
  },
  {
    value: "+300",
    label: "Brands",
    detail: "advertising on our web properties",
  },
  {
    value: "2.4m",
    label: "Ad",
    detail: "impressions served",
  },
];

export default function KeyMetricsSection() {
  return (
    <AnimatedSection
      id="key-metrics"
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Grid dot texture background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Architecting Win-Win{" "}
            <span className="italic text-[#1C5AD8]">
              Marketing Interactions
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <p className="mx-auto max-w-3xl text-base text-gray-600">
            We transform the user experience by delivering hyper-relevant
            content.
          </p>
          <p className="mx-auto max-w-3xl text-base text-gray-600">
            We drive superior advertising results by{" "}
            <span className="font-bold">
              connecting users with the brands they genuinely love.
            </span>
          </p>
        </motion.div>

        {/* Four metric columns in a single row */}
        <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-left"
            >
              <div className="border-t-2 border-[#1C5AD8]/10 pt-6">
                <span className="text-5xl font-light text-gray-800 lg:text-6xl">
                  {metric.value}
                </span>
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-bold text-gray-800">
                    {metric.label}
                  </span>{" "}
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-lg text-gray-600">
            ...capturing value with{" "}
            <span className="bg-[#97E087]/30 px-1 font-semibold">
              exponential growth potential
            </span>
          </p>
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
