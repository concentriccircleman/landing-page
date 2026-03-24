"use client";

import Link from "next/link";
import HeroDemo from "./HeroDemo";
import { StaticInvestorRow } from "./by-variants";
import FadeIn from "@/components/fade-in";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col bg-[#f8f8f8] min-h-screen overflow-hidden">
      {/* Demo UI — positioned relative to viewport, bleeds off right edge */}
      <div className="hidden md:block absolute top-[18%] bottom-[18%] left-[56%] -right-[15%] z-0">
        <HeroDemo />
      </div>
      <div className="relative z-10 flex-1 flex flex-col pt-32 2xs:pt-44 pb-16 sm:pt-32 sm:pb-16">
        <div className="w-full max-w-screen-2xl mx-auto px-4 flex-1 flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row items-center gap-8 relative">
            <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center md:w-[50%] relative z-10">
              <div className="flex flex-col items-center md:items-start">
                <FadeIn>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7422322649269350400/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 h-8 px-3.5 rounded-full bg-white text-[#1a1a1f]
                      shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04),inset_0_0.75px_0_rgba(255,255,255,0.6)]
                      hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06),inset_0_0.75px_0_rgba(255,255,255,0.6)]
                      hover:-translate-y-px transition-all duration-200 active:scale-[0.97]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"
                      style={{ animation: "dot-pulse 2s ease-in-out infinite" }}
                    />
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
                    Empower your enterprise with organizational memory
                  </h1>
                </FadeIn>
                <FadeIn delay={200} className="mt-4">
                  <p className="text-[15px] xs:text-base s:text-[17px] md:text-lg text-[#a1a1aa] leading-relaxed max-w-xl">
                    Sentra is your organizational memory system that transforms your
                    company&apos;s collective knowledge, data and decisions into living
                    intelligence.
                  </p>
                </FadeIn>
                <FadeIn delay={300} className="mt-10">
                  <Link
                    href="/contact"
                    className="text-[14px] font-medium bg-brand text-[#f0f0f0] px-8 py-3 rounded-lg duration-200 hover:cursor-pointer shadow-[0_0_0_1px_#1e40af,0_2px_4px_rgba(37,99,235,0.3),0_6px_16px_rgba(37,99,235,0.2),0_12px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_0_1px_#1e40af,0_4px_8px_rgba(37,99,235,0.35),0_10px_24px_rgba(37,99,235,0.25),0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.25)] hover:brightness-110 transition-all active:scale-[0.97] focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,0.2)]"
                  >
                    Book a demo
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>

          <FadeIn delay={400} className="mt-auto pt-20 w-full max-w-3xl mx-auto flex flex-col items-center gap-3">
            <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#a1a1aa]">
              Backed by
            </p>
            <StaticInvestorRow />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
