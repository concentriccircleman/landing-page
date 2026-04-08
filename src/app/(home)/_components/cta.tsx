import PixelShimmer from "@/components/pixel-shimmer";
import FadeIn from "@/components/fade-in";
import Button from "@/components/button";

const CTA = () => {
  return (
    <section className="relative z-10 bg-[#1a1a1f] py-16 md:py-36 overflow-hidden">
      <PixelShimmer />
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-[#f0f0f0] mb-7">
            Sentralize Your Company
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-[15px] md:text-base text-[#a0a0a5] mb-10 leading-relaxed">
            Less busywork. More of what matters.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex items-center justify-center gap-3">
            <Button href="/sign-in" variant="secondary">
              Get Started
            </Button>
            <Button href="/contact" variant="outline">
              Book a Demo
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;
