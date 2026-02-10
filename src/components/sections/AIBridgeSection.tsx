"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  itemVariants,
  cardVariants,
  staggerContainer,
} from "@/components/AnimatedSection";

const valueProps = [
  {
    audience: "For Users",
    title: "Objective Decision Support",
    value:
      "Transforms confusing ad saturation into curated, trustworthy information.",
    outcome:
      "Users make confident purchasing decisions in a context-rich, non-intrusive environment.",
    labelBg: "bg-linear-to-r from-[#1C5AD8] to-[#4a7de8]",
    labelText: "text-white",
  },
  {
    audience: "For Advertisers",
    title: "Precision at Scale",
    value:
      "Connects brands with pre-qualified, high-intent users in specific categories.",
    outcome:
      "Algorithmic resilience and scalable Customer Acquisition Cost (CAC).",
    labelBg: "bg-[#97E087]",
    labelText: "text-gray-900",
  },
  {
    audience: "For Media Platforms",
    title: "Institutional Yield Management",
    value: "Enhances standard inventory with high-intent category context.",
    outcome:
      "A highly efficient, AI-agentic engine that can be replicated across global markets in different publisher segments.",
    labelBg: "bg-[#1C5AD8]",
    labelText: "text-white",
  },
];

export default function AIBridgeSection() {
  return (
    <AnimatedSection
      id="ai-bridge"
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
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          {/* Left column — title & subtitle */}
          <motion.div
            variants={itemVariants}
            className="lg:w-2/5 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-[#1C5AD8]">Top Networks:</span>{" "}
              <span className="text-gray-900">
                The AI-Driven Bridge for Modern Marketing.
              </span>
            </h2>
            <p className="mt-4 text-gray-500">
              Delivering high-intent audiences to brands through an objective,
              information-first mediation layer.
            </p>
          </motion.div>

          {/* Right column — three rows with stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 space-y-6"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
              >
                {/* Colored label block */}
                <div
                  className={`flex min-w-55 flex-col justify-center rounded-2xl ${prop.labelBg} px-6 py-5`}
                >
                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${prop.labelText} opacity-80`}
                  >
                    {prop.audience}
                  </span>
                  <span className={`mt-1 text-lg font-bold ${prop.labelText}`}>
                    {prop.title}
                  </span>
                </div>

                {/* Value cell */}
                <div className="flex-1 rounded-2xl bg-gray-50 px-5 py-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#1C5AD8]">
                    Value
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {prop.value}
                  </p>
                </div>

                {/* Outcome cell */}
                <div className="flex-1 rounded-2xl bg-gray-50 px-5 py-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#97E087]">
                    Outcome
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {prop.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
