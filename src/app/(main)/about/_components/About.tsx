"use client";

import { fadeTransition, fadeVariants } from "@/app/_animations/fadeVariants";

import { motion } from "motion/react";
import { useAnimation } from "@/app/providers";

export default function About() {
  const { isLoaded } = useAnimation();

  return (
    <section className="flex flex-col justify-center items-center text-foreground pointer-events-none h-full">
      <div className="px-4 max-w-3xl z-10 flex flex-col h-full w-full justify-center items-center pointer-events-auto">
        <motion.div
          className="flex flex-col"
          variants={fadeVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={fadeTransition}
        >
          <h1 className="text-3xl/snug s:text-4xl/snug md:text-5xl/snug font-medium">
            Autonomous Enterprise
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 mb-8 md:mb-12 font-light italic">
            The future of organizational intelligence
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            3 years ago when ChatGPT first released, we realized models were
            amnesic, and that a robust memory model would be the most impactful
            invention to supercharge AI. We started work at MIT which stemmed
            from an early chain of thought framework into a stateful memory
            structure used by an agent network. But even with robust models, we
            found that interfacing with AI via just text was incredibly limiting
            and unpleasant. When voice models crossed uncanny valley earlier in
            2025, we realized there was a strong &ldquo;why now&rdquo; to build
            the ultimate AI employee.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            Since 2022, AI in the workplace has followed a clear progression,
            much like the SAE standards for autonomous vehicles. We see several
            distinct levels, each representing a fundamental shift in how
            technology integrates with human organizations.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            L1 AI were the generic chatbots and task agents that help save
            seconds and minutes of a person&apos;s work. These tools enhance
            individual productivity but require constant human oversight. L2
            role agents began to emerge in 2024 to automate entire workflows,
            potentially replacing specific roles but still operating within
            human-defined parameters.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            L3 is where Sentra operates today - the first goal agents working
            toward continuous business mandates. Unlike discrete task
            completion, these work toward unbounded metrics: &ldquo;team never
            misaligned,&rdquo; &ldquo;always legally compliant,&rdquo;
            &ldquo;employees happy.&rdquo; This autonomy requires a stateful,
            immutable understanding of organizational dynamics.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            What makes this progression inevitable is the same dynamic we see in
            autonomous vehicles: the first company to reach the next level
            dominates the entire market. Products stuck in previous eras become
            quickly commoditized. Every car has cruise control nowadays. We
            firmly believe we are among the first to make the great leap from L2
            to L3, which is why Sentra can provide what were previously L0-L2
            products (meeting notetaking, knowledge search) as trivially
            commoditized features within a much more powerful system.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            The challenge from L2 to L3 isn&apos;t solely technological. L3
            adoption marks the first time a single AI has direct impact on the
            entire organization at once, requiring careful consideration of
            cooperation mechanisms and human incentives.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            Sentra is part of us building towards a world where organizations
            self-heal, self-reflect, and maintain perfect alignment as they
            scale. We believe there are a unique set of problems within
            organizations that only AI can solve.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8">
            Our vision is simple yet profound: &ldquo;Sentra will let a large
            company run at the speed of a small company.&rdquo; This is the
            future of autonomous enterprise - organizations that think, learn,
            and evolve with central AI employees who empower every individual
            within them.
          </p>

          <p className="text-base text-foreground/80 mb-6 md:mb-8 text-right">
            — Jae, Co-founder and CEO
          </p>
        </motion.div>
      </div>
    </section>
  );
}
