"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

const team = [
  {
    name: "Juan Hoyos",
    role: "Co-founder & Chief Architect",
    image: "juan-hoyos.webp",
    experience:
      "20+ years entrepreneur in AdTech leadership, AI deployment, digital strategy, advertising, digital marketing, and MarTech.",
    focus:
      "Applied AI, UX, digital channels, web content creation engineering, infrastructure, and lead architect of the proprietary TOP Genius.",
  },
  {
    name: "Francis Lock",
    role: "Co-founder & Growth Strategist",
    image: "francis-lock.webp",
    experience:
      "15+ years entrepreneur. Expert in digital media and advertising sales strategy with a deep focus on buy-side performance.",
    focus: "Applied AI, buy-side performance networks, and model analytics.",
  },
  {
    name: "Camilo Gomez",
    role: "Co-founder, Partnerships & AdTech Compliance",
    image: "camilo-gomez.webp",
    experience:
      "11+ years as a Google regional leader for Partnerships AdTech platform. Sell-side expert deploying scaled technologies globally.",
    focus:
      "Partner relations, bridging the trust gap between users and brands, AdTech compliance.",
  },
  {
    name: "Juan Jaramillo",
    role: "Scale & Automation Engineering",
    image: "juan-jaramillo.webp",
    experience:
      "Coder, specialized technical and AI consultant for infrastructure and DevOps.",
    focus:
      "Technical deployment, infrastructure, AI agentic framework deployment.",
  },
];

export default function LeadershipSection() {
  return (
    <AnimatedSection
      id="leadership"
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
        {/* Team badge with green underline */}
        <motion.div variants={itemVariants} className="mb-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            Team
          </span>
          <div className="mt-1 h-0.5 w-12 bg-[#97E087]" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="mb-16 max-w-4xl text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Founder-Led Leadership —{" "}
          <span className="text-[#1C5AD8] italic">
            Architecture for Scale: A Team of AdTech Specialists Decoupling
            Growth from Headcount.
          </span>
        </motion.h2>

        {/* Four profile cards */}
        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="h-full rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden">
                {/* Photo — grayscale */}
                <div className="flex items-center justify-center p-6 pb-2">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full">
                    <Image
                      src={`/images/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                </div>

                <div className="px-6 pb-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-[#1C5AD8]">
                    {member.role}
                  </p>

                  <div className="space-y-3 text-left">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Experience
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.experience}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#97E087]">
                        TOP Focus
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investors section */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl border border-gray-100 bg-gray-50/50 p-8 sm:p-12 text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            Backed by Strategic Industry Leaders.
          </h3>
          <p className="text-gray-500">
            Current and former Google employees with deep expertise in the
            AdTech industry.
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
