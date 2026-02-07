"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

const tools = [
  {
    name: "Email Genius",
    subtitle: "Lifecycle Orchestration Agent",
    image: "smartphone-1-slide-9.webp",
    capability:
      "An autonomous AI-agent engine that generates personalized templates, high-conversion copy, and dynamic imagery.",
    efficiency:
      "Trained on historical performance data to predictively deploy content that maximizes open rates and CTR.",
  },
  {
    name: "RSoC Content Generator",
    subtitle: "Intent Extraction Agent",
    image: "smartphone-2-slide-9.webp",
    capability:
      "Automated keyword intelligence coupled with real-time AI content generation specifically for Search Arbitrage (RSoC) monetization.",
    efficiency:
      'Rapidly identifies high-value "intent buckets" to capture premium search budgets with zero manual research.',
  },
  {
    name: "Meta Campaign Generator",
    subtitle: "Creative-to-Campaign Bridge",
    image: "smartphone-3-slide-9.webp",
    capability:
      "Directly ingests insights from the Content Generator to produce multi-format AI visual assets and ad copy for Meta ecosystems.",
    efficiency:
      'Eliminates the "Creative Bottleneck" by bridging content production and campaign activation in a single automated flow.',
  },
  {
    name: "Magic Banner Creator",
    subtitle: "Generative Production Studio",
    image: "smartphone-4-slide-9.webp",
    capability:
      "AI-native design tool for instantaneous creation of omnichannel banners and social assets.",
    efficiency:
      "Provides outcomes-focused creative at scale, ensuring brand consistency while reducing design timelines from days to seconds.",
  },
];

export default function TopGeniusSection() {
  return (
    <AnimatedSection
      id="top-genius"
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
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="text-[#97E087]">TOP Genius</span>{" "}
            <span className="text-[#97E087]">AI:</span>{" "}
            <span className="text-gray-900">
              Proprietary AI-Agentic Infrastructure.
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-16 max-w-3xl text-gray-500"
        >
          Automating the end-to-end performance lifecycle to drive exponential
          operational leverage and superior yields.
        </motion.p>

        {/* Four columns with smartphone mockups */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col"
            >
              {/* Smartphone mockup */}
              <div className="mb-6 flex items-center justify-center">
                <Image
                  src={`/images/${tool.image}`}
                  alt={tool.name}
                  width={200}
                  height={400}
                  className="w-36 h-auto drop-shadow-lg"
                />
              </div>

              {/* Title with blue checkmark */}
              <div className="mb-1 flex items-center gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-[#1C5AD8]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-lg font-bold text-[#1C5AD8]">
                  {tool.name}
                </h3>
              </div>
              <p className="mb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
                {tool.subtitle}
              </p>

              {/* Capability & Efficiency */}
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#97E087]">
                    Capability
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tool.capability}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#1C5AD8]">
                    Efficiency Gain
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tool.efficiency}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
