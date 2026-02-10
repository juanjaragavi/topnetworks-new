"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  itemVariants,
  photoVariants,
  staggerContainer,
} from "@/components/AnimatedSection";

const team = [
  {
    name: "Juan Hoyos",
    role: "Co-founder & Chief Architect",
    image: "juan-hoyos.webp",
    experience:
      "20+ years entrepreneur in AdTech leadership, AI deployment, digital strategy, advertising, digital marketing, and MarTech.",
    focus:
      "Applied AI, UX, digital channels, web content creation engineering, infrastructure, and lead architect of the proprietary TOP Genius.",
    linkedin: "https://www.linkedin.com/in/monohoyos/",
  },
  {
    name: "Francis Lock",
    role: "Co-founder & Growth Strategist",
    image: "francis-lock.webp",
    experience:
      "15+ years entrepreneur. Expert in digital media and advertising sales strategy with a deep focus on buy-side performance.",
    focus: "Applied AI, buy-side performance networks, and model analytics.",
    linkedin: "https://www.linkedin.com/in/francislock/",
  },
  {
    name: "Camilo Gomez",
    role: "Co-founder, Partnerships & AdTech Compliance",
    image: "camilo-gomez.webp",
    experience:
      "11+ years as a Google regional leader for Partnerships AdTech platform. Sell-side expert deploying scaled technologies globally.",
    focus:
      "Partner relations, bridging the trust gap between users and brands, AdTech compliance.",
    linkedin: "https://www.linkedin.com/in/gomezcamilo10/",
  },
  {
    name: "Juan Jaramillo",
    role: "Scale & Automation Engineering",
    image: "juan-jaramillo.webp",
    experience:
      "Coder, specialized technical and AI consultant for infrastructure and DevOps.",
    focus:
      "Technical deployment, infrastructure, AI agentic framework deployment.",
    linkedin: "https://www.linkedin.com/in/juan-jaramillo-ai/",
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

        {/* Four profile cards — staggered photo reveal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={photoVariants}>
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

                  {/* LinkedIn CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 text-sm font-medium text-[#0A66C2] hover:text-[#004182] transition-colors duration-200"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="group-hover:underline">
                        View LinkedIn Profile
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investors section */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl bg-gray-50 px-8 py-10 sm:px-16 sm:py-12"
        >
          {/* Green Investors badge - centered at top */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="inline-flex items-center justify-center rounded-full bg-[#97E087] px-6 py-2 shadow-sm">
              <span className="text-sm font-bold text-gray-900">Investors</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left: Backed by text */}
            <div className="text-center lg:text-left lg:shrink-0">
              <p className="text-base font-medium text-gray-900">
                <span className="font-bold">Backed</span> by Strategic Industry
                Leaders
              </p>
            </div>

            {/* Center: Investor logos */}
            <div className="flex items-center justify-center gap-12 lg:gap-16">
              <Image
                src="/images/logo-andar-partners.webp"
                alt="Andar Partners"
                width={140}
                height={50}
                className="h-12 w-auto object-contain opacity-90"
              />
              <Image
                src="/images/logo-eficiencia-web.webp"
                alt="Eficiencia Web"
                width={140}
                height={50}
                className="h-12 w-auto object-contain opacity-90"
              />
            </div>

            {/* Right: Google employees text */}
            <div className="text-center lg:text-right lg:shrink-0">
              <p className="text-sm text-gray-600">
                Current and former{" "}
                <span className="font-bold text-gray-900">
                  Google employees
                </span>
                <br className="hidden lg:block" />
                with deep expertise in the Ad Tech Industry
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
