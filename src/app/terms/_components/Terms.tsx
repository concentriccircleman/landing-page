"use client";

import { fadeTransition, fadeVariants } from "@/app/_animations/fadeVariants";

import { motion } from "motion/react";
import { useAnimation } from "@/app/providers";

export default function Terms() {
  const { isLoaded } = useAnimation();

  return (
    <section className="flex flex-col justify-center items-center text-foreground pointer-events-none h-full">
      <div className="px-8 max-w-3xl z-10 flex flex-col h-full w-full justify-center items-center pointer-events-auto">
        <motion.div
          className="flex flex-col"
          variants={fadeVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={fadeTransition}
        >
          <h1 className="text-3xl/snug s:text-4xl/snug md:text-5xl/snug font-medium">
            Terms of Service
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 mb-8 md:mb-12 font-light italic">
            Agreement for using Sentra
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            Sentra and services provided by Dynamis Labs (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            [Terms of Service content will be added here]
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            For questions about these Terms, please contact us at
            legal@dynamislabs.com
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8 text-right">
            Last updated: January 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
