"use client";

import { fadeTransition, fadeVariants } from "@/app/_animations/fadeVariants";
import Link from "next/link";
import { ibmPlexMono } from "@/app/fonts";
import { motion } from "motion/react";
import { useAnimation } from "@/app/providers";

// Type declaration for DelveCookieConsent
declare const DelveCookieConsent: {
  show: () => void;
};

const navLinks = [
  { path: "/privacy", label: "Privacy" },
  { path: "/terms", label: "Terms" },
  {
    path: "https://trust.delve.co/sentra",
    target: "_blank",
    label: "Security",
  },
];

export default function HeroFooter() {
  const { isLoaded } = useAnimation();

  return (
    <motion.div
      className={`w-full flex flex-col sm:flex-row justify-between items-center p-4 pointer-events-auto z-10 ${ibmPlexMono.className}`}
      variants={fadeVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      transition={{ ...fadeTransition }}
    >
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-2 sm:mb-0 w-full sm:w-auto">
        {navLinks.map(({ path, label, target = undefined }) => (
          <Link
            key={path}
            href={path}
            target={target}
            scroll={false}
            className="text-xs xs:text-sm text-background/80 hover:text-background underline hover:no-underline transition-colors"
          >
            {label}
          </Link>
        ))}
        <button
          onClick={() => DelveCookieConsent.show()}
          className="text-xs xs:text-sm text-background/80 hover:text-background underline hover:no-underline transition-colors cursor-pointer"
        >
          Cookie Settings
        </button>
      </div>
      <p
        className="hidden sm:block text-xs xs:text-sm text-background/80"
      >
        2025 © Dynamis Labs.
      </p>
      <div className="w-full sm:hidden">
        <p
          className="text-xs xs:text-sm text-background/80 text-center"
        >
          2025 © Dynamis Labs.
        </p>
      </div>
    </motion.div>
  );
}
