import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C5AD8] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between lg:px-12">
        {/* Logo */}
        <Image
          src="/images/topnetworks-logo-full-color.webp"
          alt="Top Networks"
          width={100}
          height={28}
          className="h-6 w-auto object-contain brightness-0 invert"
        />

        {/* Copyright */}
        <p className="text-xs text-blue-200">
          © 2026 Top Networks Inc. All rights reserved.
        </p>

        {/* Contact link */}
        <a
          href="mailto:top.admin@topnetworks.co"
          className="text-xs text-[#97E087] hover:text-white transition-colors"
        >
          top.admin@topnetworks.co
        </a>
      </div>
    </footer>
  );
}
