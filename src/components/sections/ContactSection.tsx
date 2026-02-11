"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedSection, { itemVariants } from "@/components/AnimatedSection";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// EmailJS Configuration - reads from .env.local
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY must be the Public Key from EmailJS > Account > API Keys
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Check if EmailJS is properly configured
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        // Fallback: open mailto link
        const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.open(
          `mailto:top.admin@topnetworks.co,juan.hoyos@topnetworks.co?subject=${subject}&body=${body}`,
          "_self",
        );
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "top.admin@topnetworks.co",
        },
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      console.error("Config used — Service:", EMAILJS_SERVICE_ID, "Template:", EMAILJS_TEMPLATE_ID, "Key:", EMAILJS_PUBLIC_KEY?.slice(0, 4) + "...");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="relative w-full overflow-hidden bg-[#1C5AD8] py-24 lg:py-32"
    >
      {/* Full-bleed background image with fade overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/fading-mobile-phone-slide-14.webp')",
          backgroundSize: "contain",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      />
      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 z-0 bg-linear-to-r from-[#1C5AD8]/50 via-transparent to-[#1C5AD8]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Logo top-center */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex justify-center"
        >
          <Image
            src="/images/topnetworks-logo-full-color.webp"
            alt="Top Networks Logo"
            width={180}
            height={50}
            className="brightness-0 invert"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT — Heading and description */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-md">
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
            >
              Join Us Building The Future of{" "}
              <span className="text-[#97E087]">Digital Marketing</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mb-6 h-1 w-24 rounded-full bg-[#97E087]"
            />

            <motion.p
              variants={itemVariants}
              className="text-blue-100 text-lg leading-relaxed"
            >
              Ready to transform your digital presence? Get in touch with our
              team and discover how Top Networks can elevate your marketing
              strategy.
            </motion.p>
          </div>

          {/* RIGHT — Contact Form */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-lg lg:max-w-md"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border 
                    ${errors.name ? "border-red-400" : "border-white/20"} 
                    text-white placeholder-blue-200/60 
                    focus:outline-none focus:ring-2 focus:ring-[#97E087] focus:border-transparent
                    transition-all duration-200`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border 
                    ${errors.email ? "border-red-400" : "border-white/20"} 
                    text-white placeholder-blue-200/60 
                    focus:outline-none focus:ring-2 focus:ring-[#97E087] focus:border-transparent
                    transition-all duration-200`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-100 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border 
                    ${errors.message ? "border-red-400" : "border-white/20"} 
                    text-white placeholder-blue-200/60 
                    focus:outline-none focus:ring-2 focus:ring-[#97E087] focus:border-transparent
                    transition-all duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-300">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-base
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#97E087] hover:bg-[#7ed06e] cursor-pointer"
                  }
                  text-[#1C5AD8] transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C5AD8]`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-[#97E087]/20 border border-[#97E087]/40"
                >
                  <p className="text-[#97E087] text-sm font-medium text-center">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-400/40"
                >
                  <p className="text-red-300 text-sm font-medium text-center">
                    Oops! Something went wrong. Please try again or contact us
                    directly at top.admin@topnetworks.co
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Top Networks Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
