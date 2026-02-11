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
    visual: {
      type: "image",
      src: "/images/app-1-slide-8.webp",
      width: 280,
      height: 560,
      alt: "Mobile UI Screenshot",
    },
  },
  {
    number: "02",
    title: "Intent Refinement (The Bridge)",
    subtitle: "Top Networks Sites",
    description:
      'AI-curated "Information-First" content yields a 34% CTR (68x higher than industry average).',
    dashed: false,
    visual: {
      type: "image",
      src: "/images/app-2-slide-8.webp",
      width: 280,
      height: 560,
      alt: "Citi Desktop UI Screenshot",
    },
  },
  {
    number: "03",
    title: "Premium Monetization",
    description:
      "Direct high-intent brand alignment (e.g., Citi) driving a $345 eCPM.",
    dashed: false,
    visual: {
      type: "image",
      src: "/images/app-3-slide-8.webp",
      width: 280,
      height: 560,
      alt: "Dashboard Screenshot",
    },
  },
  {
    number: "04",
    title: "Algorithmic Feedback",
    description:
      "Real-time data feeds AI tools to continuously optimize acquisition costs and yield.",
    dashed: true,
    visual: {
      type: "logo",
      src: "/images/top-genius-platforms-logo-slide-8.webp",
      width: 200,
      height: 200,
      alt: "TOP Genius AI Logo",
      label: "TOP GENIUS PLATFORMS",
    },
  },
];

export default function UserFlowSection() {
  return (
    <AnimatedSection
      id="user-flow"
      className="relative z-0 w-full bg-white py-24 lg:py-32 overflow-hidden isolate"
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
          User Flow:{" "}
          <span className="text-[#1C5AD8] italic">
            The Intent Refinement Engine: Turning Traffic into High-Yield Assets
          </span>
        </motion.h2>

        {/* 4-Column Grid: Step Cards + Visual Assets */}
        <motion.div
          variants={sequentialContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={slideFromLeftVariants}
              className="relative flex flex-col"
            >
              {/* Step Card */}
              <div
                className={`flex flex-col rounded-2xl border-2 ${
                  step.dashed
                    ? "border-dashed border-[#1C5AD8]/40"
                    : "border-[#1C5AD8]/30"
                } bg-white p-6 mb-6`}
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

              {/* Arrow connector (between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-16 z-10 text-[#1C5AD8] text-2xl">
                  →
                </div>
              )}

              {/* Visual Asset - Aligned in same column */}
              <div className="flex flex-col items-center justify-start w-full h-full">
                {step.visual.type === "image" ? (
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white h-full flex items-start">
                    <Image
                      src={step.visual.src}
                      alt={step.visual.alt}
                      width={step.visual.width}
                      height={step.visual.height}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-between rounded-2xl bg-linear-to-br from-[#1C5AD8]/10 to-[#97E087]/10 p-8 shadow-lg min-h-70">
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src={step.visual.src}
                        alt={step.visual.alt}
                        width={160}
                        height={160}
                        className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
                      />
                    </div>
                    <p className="text-center text-xs lg:text-sm font-bold text-[#1C5AD8] tracking-wider uppercase mt-4">
                      {step.visual.label}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
