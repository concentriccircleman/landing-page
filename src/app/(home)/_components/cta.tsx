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
            href="/contact"
            className="relative z-10 inline-flex items-center justify-center px-10 py-3 text-[15px] font-medium rounded-[10px] duration-200 hover:cursor-pointer hover:-translate-y-px transition-all active:scale-[0.97]"
            style={{
              background: "#ffffff",
              color: "#1a1a1f",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.06), 0 0 0 3.5px rgba(255,255,255,0.15), 0 0 0 4.5px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.18), 0 6px 16px rgba(0,0,0,0.12)",
            }}
          >
            Book a demo
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
