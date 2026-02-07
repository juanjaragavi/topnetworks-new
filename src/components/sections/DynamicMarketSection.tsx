"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

const cards = [
  {
    title: "Dynamic Market",
    paragraphs: [
      "We operate within a consolidated network of Tier-1 buy-side and sell-side players including Google, deploying proprietary AI to refine raw traffic into premium advertiser intent.",
      "Our model uniquely fuses the high-yield dynamics of the US market <em>with the untapped scalability of LatAm, creating a diversified, high-velocity revenue engine.</em>",
    ],
  },
  {
    title: "The Fall of Organic Search Traffic",
    paragraphs: [
      'As Generative AI and Search Generative Experiences (SGE) consume traditional organic results, "free" traffic is effectively disappearing.',
      'In this new landscape, <strong>Top Networks functions as a "Performance Bridge,"</strong> owning the paid intent rails that guarantee audience delivery for global brands.',
    ],
  },
  {
    title: "First-Party Data & Identity Segmentation",
    paragraphs: [
      'With the dawn of third-party cookies, platforms that own the user relationship are becoming "Prime Properties". Capturing the traceability value.',
      "We are not just buying traffic; we aim to build a <strong>high-intent segmented user database in high-value categories to power our models.</strong>",
    ],
  },
];

export default function DynamicMarketSection() {
  return (
    <AnimatedSection
      id="dynamic-market"
      className="relative w-full bg-white py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Centered heading */}
        <motion.h2
          variants={itemVariants}
          className="mb-4 text-center text-3xl font-bold text-[#1C5AD8] sm:text-4xl lg:text-5xl"
        >
          The Opportunity
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-3xl text-center text-base text-gray-600 lg:text-lg"
        >
          We embed ourselves in high value categories, optimize the experience
          for users and brands, and turn our sites into{" "}
          <strong className="underline">
            preferred valuable ad properties.
          </strong>
        </motion.p>

        {/* Decorative wave lines + blue shape in center */}
        <motion.div
          variants={itemVariants}
          className="relative mb-16 flex items-center justify-center"
        >
          {/* Wave pattern SVG */}
          <svg
            className="absolute w-full h-32 opacity-10"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <path
                key={i}
                d={`M0,${40 + i * 8} C300,${20 + i * 8} 600,${60 + i * 8} 1200,${40 + i * 8}`}
                fill="none"
                stroke="#1C5AD8"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          {/* Blue rounded rectangle */}
          <div className="relative z-10 h-28 w-44 rounded-2xl bg-[#1C5AD8] shadow-xl" />
        </motion.div>

        {/* Three-column card grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-base font-bold text-gray-900 underline decoration-1 underline-offset-4">
                  {card.title}
                </h3>
                <div className="space-y-3">
                  {card.paragraphs.map((p, pIndex) => (
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
