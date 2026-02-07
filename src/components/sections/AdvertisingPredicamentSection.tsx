"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, {
  itemVariants,
  cardVariants,
  staggerContainer,
} from "@/components/AnimatedSection";

const problems = [
  {
    label: "The Bias Problem -",
    labelItalic: true,
    title: "Trust Erosion",
    paragraphs: [
      'Users have developed "banner blindness" because they <span class="text-[#1C5AD8]">perceive direct brand ads as biased</span> and non-objective.',
      'Brands don\'t generally trust traffic sources and quality <span class="text-xs text-gray-400">(bots, click bait, others)</span>',
    ],
  },
  {
    label: "The Precision Problem -",
    labelItalic: false,
    title: "Declining Ad Effectiveness",
    paragraphs: [
      'As <span class="text-[#1C5AD8]">trust falls, engagement plummet</span>—industry averages have dropped to a staggering 0.05% CTR.',
    ],
  },
  {
    label: "The AI Disruption -",
    labelItalic: true,
    title: "The Death of Organic Traffic",
    paragraphs: [
      '<em>Generative <span class="text-[#1C5AD8]">AI is consuming traditional organic search traffic generation</span>. In this new world, paid acquisition strongly becomes the viable rail for growth.</em>',
    ],
  },
];

export default function AdvertisingPredicamentSection() {
  return (
    <AnimatedSection
      id="advertising-predicament"
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
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The Digital Advertising Predicament:
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            A market in need of an effectiveness overhaul
          </p>
        </motion.div>

        {/* Three vertical cards — staggered fade-up */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-md border border-gray-100">
                <p
                  className={`text-sm ${problem.labelItalic ? "italic" : ""} mb-1`}
                >
                  <span className="bg-[#97E087]/30 px-1">{problem.label}</span>
                </p>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {problem.title}
                </h3>
                <div className="space-y-3">
                  {problem.paragraphs.map((p, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
