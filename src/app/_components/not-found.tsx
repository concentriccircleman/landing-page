"use client";

import Link from "next/link";
import FadeIn from "@/components/fade-in";

const NotFound = () => {
  return (
    <section className="w-full flex-1 flex items-center justify-center px-6 md:px-8">
      <div className="w-full max-w-2xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl s:text-4xl md:text-5xl font-semibold tracking-tighter text-[#1a1a1f] mb-4">
              Page not found
            </h1>
            <p className="text-[15px] text-[#a1a1aa] mb-8 leading-relaxed">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-[#1a1a1f] px-6 py-3 text-[14px] font-medium rounded-lg duration-200 hover:cursor-pointer hover:-translate-y-px shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06),inset_0_0.75px_0_rgba(255,255,255,0.8)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08),inset_0_0.75px_0_rgba(255,255,255,0.8)] transition-all active:scale-[0.97] focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,0.2)]"
            >
              Return Home
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default NotFound;
