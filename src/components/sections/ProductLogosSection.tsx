"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

const products = [
  {
    name: "TopFinanzas",
    market: "Mexico",
    logo: "topfinanzas-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#1C5AD8]",
  },
  {
    name: "TopFinance",
    market: "USA",
    logo: "topfinance-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#1C5AD8]",
  },
  {
    name: "BudgetBee",
    market: "",
    logo: "budgetbee-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#97E087]",
  },
  {
    name: "KardTrust",
    market: "",
    logo: "kardtrust-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#97E087]",
  },
];

export default function ProductLogosSection() {
  return (
    <AnimatedSection
      id="products"
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
          Digital Properties &{" "}
          <span className="text-[#1C5AD8] italic">Product Portfolio</span>
        </motion.h2>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`flex items-center gap-6 rounded-2xl border-l-4 ${product.accent} bg-gray-50 p-6 shadow-sm`}
              >
                <div className="flex h-16 w-28 flex-shrink-0 items-center justify-center">
                  <Image
                    src={`/images/${product.logo}`}
                    alt={product.name}
                    width={160}
                    height={60}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                    {product.market && (
                      <span className="ml-1 text-sm font-normal text-gray-400">
                        ({product.market})
                      </span>
                    )}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1C5AD8]">
                    {product.category}
                  </span>
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
