import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import FeatureCards from "./_components/feature-cards";
import Security from "./_components/security";
import CTA from "./_components/cta";

export const metadata: Metadata = createMetadata({ canonical: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeatureCards />
      <div className="relative z-10 bg-[#f8f8f8] pt-24 pb-24 md:pt-32 md:pb-40">
        <Security />
      </div>
      <CTA />
    </>
  );
}
