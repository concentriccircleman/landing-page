import Link from "next/link";
import FadeIn from "@/components/fade-in";

export default function Security() {
  return (
    <section className="max-w-screen-2xl mx-auto w-full px-6">
      <FadeIn>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-10">
          <div className="w-8 h-8 bg-brand flex items-center justify-center rounded-sm">
            <svg className="w-4 h-4 text-[#f0f0f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1f]">
            Your data stays safe, private, and under your control
          </h2>
        </div>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FadeIn delay={100} className="h-full">
          <div className="border border-[#e0e0e3] bg-[#f8f8f8] p-8 rounded-sm h-full">
            <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1f] tracking-tighter mb-6">
              Enterprise-grade security
            </h3>
            <p className="text-[14px] text-[#52525b] mb-8 leading-relaxed">
              Keeping your data safe is our top priority. Sentra is SOC 2 compliant and follows ISO and GDPR standards (certifications pending) — so you can trust that your information is always protected.
            </p>
            <Link 
              href="https://trust.delve.co/sentra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1a1a1f] px-6 py-3 rounded-sm text-[13px] font-medium hover:bg-[#f4f4f5] duration-200 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06),inset_0_0.75px_0_rgba(255,255,255,0.8)] transition-all active:scale-[0.97] hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08),inset_0_0.75px_0_rgba(255,255,255,0.8)] focus-visible:ring-[3px] focus-visible:ring-[rgba(37,149,238,0.2)]"
            >
              Visit our Security &amp; Trust Center
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </FadeIn>
        
        <FadeIn delay={200} className="h-full">
          <div className="border border-[#e0e0e3] bg-[#f8f8f8] p-8 rounded-sm h-full">
            <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1f] tracking-tighter mb-6">
              On-premise deployments
            </h3>
            <p className="text-[14px] text-[#52525b] leading-relaxed">
              For organizations with sensitive data requirements, we offer dedicated isolated VPC or on-premise air-gapped deployments. This flexibility ensures your data never leaves your infrastructure while still providing the full power of Sentra&apos;s AI-driven organizational intelligence.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
