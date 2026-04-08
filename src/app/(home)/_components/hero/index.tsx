"use client";

import HeroDemo from "./HeroDemo";
import { StaticInvestorRow } from "./by-variants";
import FadeIn from "@/components/fade-in";
import PixelShimmer from "@/components/pixel-shimmer";
import Button from "@/components/button";

export default function Hero() {
  return (
    <>
    <section className="relative w-full flex flex-col bg-[#f8f8f8] md:min-h-screen overflow-hidden">
      <div
        className="hidden md:block absolute top-[8%] bottom-[8%] left-[46%] -right-[25%] z-0 pointer-events-none overflow-hidden"
        style={{ maskImage: "linear-gradient(to top, transparent, black 15%, black 85%, transparent), linear-gradient(to left, transparent, black 10%, black 90%, transparent)", maskComposite: "intersect", WebkitMaskImage: "linear-gradient(to top, transparent, black 15%, black 85%, transparent), linear-gradient(to left, transparent, black 10%, black 90%, transparent)", WebkitMaskComposite: "source-in" }}
      >
        <PixelShimmer maxOpacity={0.2} spawnRate={10} fadeRate={0.0005} />
      </div>
      <div className="hidden md:block absolute top-[18%] bottom-[18%] left-[56%] -right-[15%] z-[1]">
        <HeroDemo />
      </div>
      <div className="relative z-10 flex-1 flex flex-col pt-32 2xs:pt-44 pb-16 sm:pt-32 sm:pb-16">
        <div className="w-full max-w-screen-2xl mx-auto px-6 flex-1 flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row items-center gap-8 relative">
            <div className="flex flex-col items-start text-left justify-center md:w-[50%] relative z-10">
              <div className="flex flex-col items-start">
                <FadeIn>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7422322649269350400/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 h-8 px-3.5 rounded-sm bg-white text-[#1a1a1f]
                      shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04),0_3px_6px_rgba(0,0,0,0.04),inset_0_0.75px_0_rgba(255,255,255,0.6)]
                      hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05),inset_0_0.75px_0_rgba(255,255,255,0.6)]
                      hover:-translate-y-px transition-all duration-200 active:scale-[0.97]"
                  >
                    <span className="inline-grid grid-cols-2 gap-0.5 shrink-0">
                      {[0, 1, 2, 3].map((pixelIndex) => (
                        <span
                          key={pixelIndex}
                          className="w-1 h-1 bg-brand"
                          style={{ animation: `pixel-shimmer 2.4s ease-in-out ${pixelIndex * 0.4}s infinite` }}
                        />
                      ))}
                    </span>
                    <span className="text-[12px] font-medium tracking-[0.01em]">
                      Announcing our $5M Seed Round
                    </span>
                    <svg className="w-3 h-3 text-[#a1a1aa] group-hover:text-[#52525b] group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </FadeIn>
                <FadeIn delay={100} className="mt-8">
                  <h1 className="leading-[1.1] text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-semibold tracking-tighter text-[#1a1a1f]">
                    Your company&apos;s knowledge, always at your fingertips
                  </h1>
                </FadeIn>
                <FadeIn delay={200} className="mt-4">
                  <p className="text-[15px] xs:text-base s:text-[17px] md:text-lg text-[#a1a1aa] leading-relaxed max-w-xl">
                    Sentra remembers every meeting, decision, and conversation so your
                    team doesn&apos;t have to. Less time searching, more time doing what
                    matters.
                  </p>
                </FadeIn>
                <FadeIn delay={300} className="mt-10 flex items-center gap-3 self-center md:self-start">
                  <Button href="/sign-in" variant="primary">
                    Get Started
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Book a Demo
                  </Button>
                </FadeIn>
              </div>
            </div>
          </div>

          <FadeIn delay={350} className="mt-8 md:hidden w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-[#e8e8ec] bg-white rounded-sm">
              <div className="absolute inset-0 origin-top-left" style={{ transform: "scale(0.55)", width: "182%", height: "182%" }}>
                <HeroDemo />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
    <div className="relative z-10 bg-[#f8f8f8] pt-1 pb-3">
      <FadeIn delay={400} className="w-full max-w-3xl mx-auto flex flex-col items-center gap-2 px-6">
        <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#a1a1aa]">
          Backed by
        </p>
        <StaticInvestorRow />
      </FadeIn>
    </div>
    </>
  );
}
