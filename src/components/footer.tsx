"use client";

import CustomLink from "./ui/custom-link";
import PixelShimmer from "./pixel-shimmer";
import FadeIn from "./fade-in";

declare const DelveCookieConsent: {
  show: () => void;
};

interface LinkItem {
  path: string;
  label: string;
  target?: string;
}

interface FooterLinks {
  legal: LinkItem[];
  compliance: LinkItem[];
  company: LinkItem[];
}

const footerLinks: FooterLinks = {
  legal: [
    { path: "/terms", label: "Terms of Service" },
    { path: "/privacy", label: "Privacy Policy" },
  ],
  compliance: [
    {
      path: "https://trust.delve.co/sentra",
      label: "Security",
    },
    { path: "/data-privacy", label: "How We Handle Data" },
  ],
  company: [
    { path: "/about", label: "About" },
    { path: "/manifesto", label: "Manifesto" },
    { path: "/contact", label: "Enterprise" },
    { path: "/blog", label: "Blog" },
    { path: "/careers", label: "Careers" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full z-20 bg-[#1a1a1f]" style={{ boxShadow: '0 0 0 50vh #1a1a1f', clipPath: 'inset(0 -100vw -50vh -100vw)' }}>
      <div className="relative overflow-hidden">
        <PixelShimmer />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <FadeIn>
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#808085] mb-4">Legal</h3>
              <ul className="space-y-2.5">
                {footerLinks.legal.map(({ path, label }) => (
                  <li key={path}>
                    <CustomLink
                      href={path}
                      className="text-[13px] text-[#a1a1aa] hover:text-[#f0f0f0] transition-colors duration-150 inline-block"
                    >
                      {label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={75}>
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#808085] mb-4">
                Compliance
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.compliance.map(({ path, label }) => (
                  <li key={path}>
                    <CustomLink
                      href={path}
                      className="text-[13px] text-[#a1a1aa] hover:text-[#f0f0f0] transition-colors duration-150 inline-block"
                    >
                      {label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#808085] mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map(({ path, label }) => (
                  <li key={path}>
                    <CustomLink
                      href={path}
                      className="text-[13px] text-[#a1a1aa] hover:text-[#f0f0f0] transition-colors duration-150 inline-block"
                    >
                      {label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={225}>
            <div>
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-[#808085] mb-4">
                Preferences
              </h3>
              <button
                onClick={() => DelveCookieConsent.show()}
                className="text-[13px] text-[#a1a1aa] hover:text-[#f0f0f0] transition-colors duration-150 text-left inline-block"
              >
                Cookie Settings
              </button>
            </div>
          </FadeIn>
        </div>
        <p className="text-[12px] text-[#71717a] mb-4">
          Subprocessors include Amazon Web Services, Github, Slack, Google Cloud
          Platform, and OpenAI.
        </p>
        <div className="pt-6 border-t border-[#333338]">
          <p className="text-[12px] text-[#71717a]">
            &copy; {new Date().getFullYear()} Dynamis Labs. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
