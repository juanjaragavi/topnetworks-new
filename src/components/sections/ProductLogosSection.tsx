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
    url: "https://topfinanzas.com/mx/",
  },
  {
    name: "TopFinance",
    market: "USA",
    logo: "topfinance-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#1C5AD8]",
    url: "https://us.topfinanzas.com/",
  },
  {
    name: "TopFinance",
    market: "UK",
    logo: "topfinance-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#1C5AD8]",
    url: "https://uk.topfinanzas.com/",
  },
  {
    name: "BudgetBee",
    market: "",
    logo: "budgetbee-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#97E087]",
    url: "https://budgetbeepro.com/",
  },
  {
    name: "KardTrust",
    market: "",
    logo: "kardtrust-logo-full-color.webp",
    category: "Personal Finance",
    accent: "border-l-[#97E087]",
    url: "https://kardtrust.com/",
  },
];

export default function ProductLogosSection() {
  return (
    <AnimatedSection
      id="products"
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
        <motion.h2
          variants={itemVariants}
          className="mb-16 text-3xl font-bold text-gray-900 sm:text-4xl"
        >
          Digital Properties &{" "}
          <span className="text-[#1C5AD8] italic">Product Portfolio</span>
        </motion.h2>

        {/* Five-column layout on desktop, responsive on smaller screens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <div
                  className={`flex flex-col items-center gap-4 rounded-2xl border-t-4 ${product.accent} bg-gray-50 p-6 shadow-sm transition-all duration-300 ease-[0.25,0.1,0.25,1] group-hover:-translate-y-1 group-hover:shadow-lg group-active:scale-[0.98] h-full`}
                >
                  <div className="flex h-20 w-full items-center justify-center">
                    <Image
                      src={`/images/${product.logo}`}
                      alt={product.name}
                      width={160}
                      height={60}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-900">
                      {product.name}
                      {product.market && (
                        <span className="ml-1 block text-sm font-normal text-gray-400">
                          ({product.market})
                        </span>
                      )}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1C5AD8]">
                      {product.category}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
