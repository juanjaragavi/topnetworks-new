"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

const solutions = [
  {
    title: "Objective Mediation",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1C5AD8"
        strokeWidth="2"
      >
        <circle cx="24" cy="24" r="20" />
        <path d="M16 24h16M24 16v16" />
        <circle cx="24" cy="24" r="6" fill="#1C5AD8" fillOpacity="0.15" />
      </svg>
    ),
    description:
      "Curates relevant content, acting as a trusted mediator between user confusion and brand solutions — not pushing ads.",
  },
  {
    title: "Breaking Banner Blindness",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1C5AD8"
        strokeWidth="2"
      >
        <path d="M4 24c0 0 8-16 20-16s20 16 20 16-8 16-20 16S4 24 4 24z" />
        <circle cx="24" cy="24" r="6" />
        <circle cx="24" cy="24" r="2" fill="#1C5AD8" />
      </svg>
    ),
    description:
      "By refining intent through a proprietary content framework, achieves a 34% CTR vs. 0.05% industry average — 680x higher.",
  },
  {
    title: "High-Yield Monetization",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1C5AD8"
        strokeWidth="2"
      >
        <path d="M8 40V20l8-6v26M20 40V14l8-6v32M32 40V8l8-6v38" />
        <line x1="4" y1="40" x2="44" y2="40" />
      </svg>
    ),
    description:
      "The model commands a $345 eCPM, compared to the $30 industry standard — 11.5x higher than the average.",
  },
  {
    title: "Scalable Architecture",
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#1C5AD8"
        strokeWidth="2"
      >
        <path d="M24 4l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z" />
        <path d="M24 36v8M16 40h16" />
      </svg>
    ),
    description:
      'Solves the organic decline by building a high-scale "paid-to-paid" engine.',
  },
];

export default function ModelSolutionSection() {
  return (
    <AnimatedSection
      id="model-solution"
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
        {/* Centered title */}
        <motion.div variants={itemVariants} className="mb-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="text-gray-900">How our model </span>
            <span className="text-[#1C5AD8] italic">solves this...</span>
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center text-gray-500"
        >
          Bridging the convergence of trust erosion, declining performance, and
          the death of organic reach through AI-driven intent refinement.
        </motion.p>

        {/* Four open columns — no card borders */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {solution.description}
              </p>
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
