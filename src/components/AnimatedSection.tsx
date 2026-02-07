"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Override default section variants */
  variants?: Variants;
  /** Override viewport amount (default 0.2) */
  viewportAmount?: number;
}

/** Smooth cubic-bezier used across all animations */
export const smoothEase: [number, number, number, number] = [
  0.25, 0.1, 0.25, 1,
];

/* ------------------------------------------------------------------ */
/*  Default section / item variants                                    */
/* ------------------------------------------------------------------ */

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Specialised variant presets – imported by individual sections       */
/* ------------------------------------------------------------------ */

/** Card that fades up from below + slight scale */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

/** Metric card: scale-in */
export const metricVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

/** Slide in from the left */
export const slideFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

/** Slide in from the right */
export const slideFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

/** Scale in from center (for flywheel, etc.) */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

/** Photo zoom settle */
export const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

/** Stagger container only – no own transform */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/** Stagger container with wider delay for sequential reveals */
export const sequentialContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AnimatedSection({
  children,
  className = "",
  id,
  variants,
  viewportAmount = 0.2,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={variants ?? sectionVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
}
