"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  itemVariants,
  scaleInVariants,
} from "@/components/AnimatedSection";

const stages = [
  { label: "Massive Execution", sublabel: "Scale", angle: 0 },
  { label: "Data Generation", sublabel: "", angle: 90 },
  { label: "AI Training", sublabel: "", angle: 180 },
  { label: "Arbitrage Optimization", sublabel: "Profitability", angle: 270 },
];

export default function DefensibleGrowthSection() {
  return (
    <AnimatedSection
      id="defensible-growth"
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
        <motion.h2
          variants={itemVariants}
          className="mb-16 text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Building Defensible Growth:{" "}
          <span className="text-[#1C5AD8] italic">
            Velocity, Data, and Algorithmic Scaling.
          </span>
        </motion.h2>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Flywheel diagram — scale-in from center */}
          <motion.div
            variants={scaleInVariants}
            className="relative flex shrink-0 items-center justify-center"
          >
            <div className="relative h-80 w-80 sm:h-96 sm:w-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#1C5AD8]/20" />

              {/* Animated circular arrows */}
              <svg
                className="absolute inset-0 h-full w-full animate-flywheel"
                viewBox="0 0 400 400"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="4"
                    refX="5"
                    refY="2"
                    orient="auto"
                  >
                    <polygon points="0 0, 6 2, 0 4" fill="#1C5AD8" />
                  </marker>
                </defs>
                <path
                  d="M 200 40 A 160 160 0 0 1 360 200"
                  fill="none"
                  stroke="#1C5AD8"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  opacity="0.4"
                />
                <path
                  d="M 360 200 A 160 160 0 0 1 200 360"
                  fill="none"
                  stroke="#97E087"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  opacity="0.4"
                />
                <path
                  d="M 200 360 A 160 160 0 0 1 40 200"
                  fill="none"
                  stroke="#1C5AD8"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  opacity="0.4"
                />
                <path
                  d="M 40 200 A 160 160 0 0 1 200 40"
                  fill="none"
                  stroke="#97E087"
                  strokeWidth="3"
                  markerEnd="url(#arrowhead)"
                  opacity="0.4"
                />
              </svg>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-[#1C5AD8] flex items-center justify-center shadow-lg">
                  <span className="text-center text-xs font-bold text-white leading-tight px-2">
                    AI Virtuous
                    <br />
                    Cycle
                  </span>
                </div>
              </div>

              {/* Stage labels */}
              {stages.map((stage, index) => {
                const positions = [
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
                  "top-1/2 right-0 translate-x-2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
                  "top-1/2 left-0 -translate-x-2 -translate-y-1/2",
                ];
                return (
                  <div
                    key={index}
                    className={`absolute ${positions[index]} rounded-xl bg-white px-4 py-2 text-center shadow-md border border-gray-100`}
                  >
                    <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                      {stage.label}
                    </p>
                    {stage.sublabel && (
                      <p className="text-xs text-[#1C5AD8]">{stage.sublabel}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right column — supporting copy */}
          <div className="flex flex-col gap-8 flex-1">
            <motion.div variants={itemVariants}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Accelerated Arbitrage Iteration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Implements a high-velocity testing cycle to identify
                  &quot;Profitability Buckets,&quot; iterating and scaling only
                  what has been data-validated.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  The AI Virtuous Cycle
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The AI infrastructure requires massive data volumes to feed
                  back into and perfect predictive models; higher scale leads to
                  greater precision and efficiency.
                </p>
              </div>
            </motion.div>
          </div>
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
