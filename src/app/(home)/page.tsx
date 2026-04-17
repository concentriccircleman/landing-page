import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import FeatureCards from "./_components/feature-cards";
import Security from "./_components/security";
import CTA from "./_components/cta";
import IntegrationsDiagram from "@/components/integrations-diagram";

export const metadata: Metadata = createMetadata({ canonical: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <section className="py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <IntegrationsDiagram />
        </div>
      </section>
      <FeatureCards />
      <div className="relative z-10 bg-[#f8f8f8] pt-24 pb-24 md:pt-32 md:pb-40">
        <Security />
      </div>
      <CTA />
    </>
  );
}
