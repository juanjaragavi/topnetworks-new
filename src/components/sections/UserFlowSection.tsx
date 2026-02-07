"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  itemVariants,
  slideFromLeftVariants,
  sequentialContainer,
} from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Omnichannel Traffic Acquisition",
    description:
      "Acquiring high-volume traffic from display, social, and email channels.",
    dashed: false,
  },
  {
    number: "02",
    title: "Intent Refinement (The Bridge)",
    subtitle: "Top Networks Sites",
    description:
      'AI-curated "Information-First" content yields a 34% CTR (680x higher than industry average).',
    dashed: false,
  },
  {
    number: "03",
    title: "Premium Monetization",
    description:
      "Direct high-intent brand alignment (e.g., Citi) driving a $345 eCPM.",
    dashed: false,
  },
  {
    number: "04",
    title: "Algorithmic Feedback",
    description:
      "Real-time data feeds AI tools to continuously optimize acquisition costs and yield.",
    dashed: true,
  },
];

export default function UserFlowSection() {
  return (
    <AnimatedSection
      id="user-flow"
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Grid dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="mb-16 text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          User Flow: The Intent Refinement Engine —{" "}
          <span className="text-[#1C5AD8] italic">
            Turning Traffic into High-Yield Assets.
          </span>
        </motion.h2>

        {/* Four numbered step cards — sequential left-to-right reveal */}
        <motion.div
          variants={sequentialContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={slideFromLeftVariants}
              className="relative"
            >
              <div
                className={`flex h-full flex-col rounded-2xl border-2 ${
                  step.dashed
                    ? "border-dashed border-[#1C5AD8]/40"
                    : "border-[#1C5AD8]/30"
                } bg-white p-6`}
              >
                <span className="text-4xl font-bold text-[#1C5AD8]/20">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="mt-1 text-sm font-medium text-[#1C5AD8]">
                    {step.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#1C5AD8] text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* App screenshots row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-end justify-center gap-6"
        >
          {[
            "app-1-slide-8.webp",
            "app-2-slide-8.webp",
            "app-3-slide-8.webp",
          ].map((app, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={`/images/${app}`}
                alt={`App Screenshot ${index + 1}`}
                width={240}
                height={480}
                className="w-44 sm:w-52"
              />
            </div>
          ))}
        </motion.div>

        {/* Top Genius Platforms badge — bottom right */}
        <motion.div variants={itemVariants} className="mt-8 flex justify-end">
          <Image
            src="/images/top-genius-platforms-logo-slide-8.webp"
            alt="TOP Genius Platforms"
            width={240}
            height={64}
            className="h-12 w-auto object-contain"
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
