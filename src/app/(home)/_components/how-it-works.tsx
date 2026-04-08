import FadeIn from "@/components/fade-in";
import IsometricCard from "@/components/isometric-card";

const CAPABILITIES = [
  {
    id: "searchable-memory",
    label: "Searchable memory",
    number: "01",
    description:
      "Every meeting, message, and document becomes a living record your team can search instantly.",
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: "risk-awareness",
    label: "Risk awareness",
    number: "02",
    description:
      "Conflicting priorities and missed commitments get flagged before they turn into real problems.",
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "agents",
    label: "Autonomous agents",
    number: "03",
    description:
      "Weekly reports, meeting prep, follow-ups — Sentra's agents handle it so your team can focus.",
    icon: (
      <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#f8f8f8] py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#a1a1aa] mb-6">
            How it works
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tighter text-[#1a1a1f] leading-[1.1] mb-10 md:mb-16">
            Sentra knows more about your company than anyone in it. Search across every meeting, surface hidden risks, and let agents handle the rest.
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAPABILITIES.map((capability) => (
              <IsometricCard key={capability.id} className="border border-[#e0e0e3] bg-[#f8f8f8] p-10 rounded-sm relative">
                <span
                  className="absolute top-8 right-8 font-semibold tabular-nums select-none pointer-events-none text-[#e8e8ec]"
                  style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-0.04em" }}
                  aria-hidden="true"
                >
                  {capability.number}
                </span>
                <div className="relative">
                  <div className="w-6 h-6 bg-brand flex items-center justify-center rounded-sm mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1a1f] tracking-tighter mb-2">
                    {capability.label}
                  </h3>
                  <p className="text-[13px] text-[#71717a] leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </IsometricCard>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
