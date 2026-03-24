import Link from "next/link";
import PixelShimmer from "@/components/pixel-shimmer";
import FadeIn from "@/components/fade-in";

const CTA = () => {
  return (
    <section className="relative bg-[#1a1a1f] py-24 md:py-32 overflow-hidden">
      <PixelShimmer />
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-[#f0f0f0] mb-6">
            Sentralize Your Company
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-[15px] md:text-base text-[#a0a0a5] mb-8 leading-relaxed">
            Stay focused on what matters.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <Link
            href="/download"
            className="relative z-10 inline-flex items-center justify-center gap-2 px-10 py-3 text-[15px] font-medium rounded-lg duration-200 hover:cursor-pointer hover:-translate-y-px transition-all active:scale-[0.97]"
            style={{
              background: "#ffffff",
              color: "#1a1a1f",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.06), 0 0 0 3.5px rgba(255,255,255,0.15), 0 0 0 4.5px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.12)",
            }}
          >
            <svg className="w-4 h-4 -ml-0.5" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Download for Mac
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
