"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";

interface Feature {
  name: string;
  team: string | boolean;
  enterprise: string | boolean;
}

interface FeatureCategory {
  name: string;
  features: Feature[];
}

const teamFeatures = [
  "Integrate with Slack, Gmail, Calendar, Outlook, Github, Linear",
  "AI meeting notes",
  "See unlimited meeting history",
  "AI chat within and across meetings (Deep research)",
  "Customized tags for collaboration",
  "API/MCP integration",
  "Unlimited bot and desktop meeting recording",
  "Unlimited Customized meeting note templates",
  "Pre-meeting briefs",
  "Risk Radar",
  "Deep Research across all data",
  "Connection Intelligence",
  "Personalized reports",
  "Commitment tracker",
  "Automated workflows",
  "Get priority support",
];

const enterpriseFeatures = [
  "All integrations from standard list + Custom Integrations offered",
  "Early access to advanced Sentra features",
  "Priority access at high traffic times",
  "Temporal Swimlanes",
  "Central billing and user management",
  "SSO/SAML",
  "SOC 2 compliance",
  "Admin controls for meeting link sharing",
  "Org-wide notification that Sentra is being used",
  "Get priority support",
  "Self-generating reports and risk radar",
  "Memory-powered artifact generation",
  "Enterprise security (Custom MSA + BAA)",
  "Custom data retention controls",
  "Role-based access with fine-grained permissioning",
  "Audit logs",
  "API data access",
  "Get dedicated support team",
];

const comparisonData: FeatureCategory[] = [
  {
    name: "Platform",
    features: [
      { name: "Users", team: "2–20", enterprise: "20+" },
      { name: "Action Credits", team: "200/user/mo", enterprise: "400+/user/mo" },
      { name: "Integrations", team: "Slack, Gmail, Calendar, Outlook, GitHub, Linear", enterprise: "All standard + Custom" },
    ],
  },
  {
    name: "Meetings",
    features: [
      { name: "AI meeting notes", team: true, enterprise: true },
      { name: "See unlimited meeting history", team: true, enterprise: true },
      { name: "AI chat within and across meetings (Deep research)", team: true, enterprise: true },
      { name: "Unlimited bot and desktop meeting recording", team: true, enterprise: true },
      { name: "Unlimited Customized meeting note templates", team: true, enterprise: true },
      { name: "Pre-meeting briefs", team: true, enterprise: true },
    ],
  },
  {
    name: "Intelligence",
    features: [
      { name: "AI chat within and across meetings", team: true, enterprise: true },
      { name: "Deep Research across all data", team: true, enterprise: true },
      { name: "Risk Radar", team: true, enterprise: true },
      { name: "Connection Intelligence", team: true, enterprise: true },
      { name: "Personalized reports", team: true, enterprise: true },
      { name: "Self-generating reports and risk radar", team: false, enterprise: true },
      { name: "Temporal Swimlanes", team: false, enterprise: true },
      { name: "Memory-powered artifact generation", team: false, enterprise: true },
    ],
  },
  {
    name: "Collaboration & Workflows",
    features: [
      { name: "Customized tags for collaboration", team: true, enterprise: true },
      { name: "Commitment tracker", team: true, enterprise: true },
      { name: "Automated workflows", team: true, enterprise: true },
      { name: "API/MCP integration", team: true, enterprise: true },
      { name: "API data access", team: false, enterprise: true },
      { name: "Admin controls for meeting link sharing", team: false, enterprise: true },
      { name: "Org-wide notification that Sentra is being used", team: false, enterprise: true },
    ],
  },
  {
    name: "Security & Compliance",
    features: [
      { name: "SSO/SAML", team: false, enterprise: true },
      { name: "SOC 2 compliance", team: false, enterprise: true },
      { name: "Enterprise security (Custom MSA + BAA)", team: false, enterprise: true },
      { name: "Custom data retention controls", team: false, enterprise: true },
      { name: "Role-based access with fine-grained permissioning", team: false, enterprise: true },
      { name: "Audit logs", team: false, enterprise: true },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "Get priority support", team: true, enterprise: true },
      { name: "Get dedicated support team", team: false, enterprise: true },
      { name: "Early access to advanced Sentra features", team: false, enterprise: true },
      { name: "Priority access at high traffic times", team: false, enterprise: true },
      { name: "Central billing and user management", team: false, enterprise: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full px-4">
      <PageHeader
        title="Plans that grow with you"
        subtitle="Simple, transparent pricing for teams of every size."
      />

      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ebebeb] border border-[#ebebeb] mb-16">
          <PricingCard
            name="Team"
            subtitle="For teams of 2–20"
            price="$18"
            priceDetail="per user / month"
            credits="200 Action Credits / user / month"
            features={teamFeatures}
            cta="Get Started"
            ctaHref="/contact"
            highlighted
          />
          <PricingCard
            name="Enterprise"
            subtitle="For teams of 20+"
            price="Custom"
            priceDetail="Speak with our team"
            credits="Starting at 400 Action Credits / user / month"
            features={enterpriseFeatures}
            cta="Talk to Sales"
            ctaHref="/contact"
          />
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <ComparisonTable />
      </FadeIn>
    </section>
  );
};

export default Pricing;

interface PricingCardProps {
  name: string;
  subtitle: string;
  price: string;
  priceDetail: string;
  credits: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

const PricingCard = ({
  name,
  subtitle,
  price,
  priceDetail,
  credits,
  features,
  cta,
  ctaHref,
  highlighted,
}: PricingCardProps) => {
  return (
    <div className="flex flex-col bg-white p-8 md:p-10">
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-base font-semibold text-[#1a1a1f]">{name}</h3>
        {highlighted && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-brand">
            Popular
          </span>
        )}
      </div>
      <p className="text-[13px] text-[#a1a1aa] mb-8">{subtitle}</p>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold tracking-tight text-[#1a1a1f]">
            {price}
          </span>
          <span className="text-[13px] text-[#71717a]">{priceDetail}</span>
        </div>
        <p className="mt-2 text-[12px] text-[#a1a1aa]">{credits}</p>
      </div>

      <div className="border-t border-[#ebebeb] pt-8 mb-8 flex-1">
        <div className="flex flex-col gap-3.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <CheckIcon />
              <span className="text-[13px] text-[#52525b] leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href={ctaHref}
        className={`h-11 inline-flex items-center justify-center text-[14px] font-medium rounded-lg duration-200 hover:cursor-pointer transition-all active:scale-[0.97] hover:-translate-y-px ${
          highlighted
            ? "bg-brand text-[#f0f0f0] shadow-[0_0_0_1px_#1e40af,0_2px_4px_rgba(37,99,235,0.3),0_6px_16px_rgba(37,99,235,0.2),0_10px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.25)] hover:brightness-110 focus-visible:ring-[3px] focus-visible:ring-[rgba(37,99,235,0.2)]"
            : "bg-white text-[#1a1a1f] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04),inset_0_0.75px_0_rgba(255,255,255,0.6)] hover:bg-[#f4f4f5] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.06),inset_0_0.75px_0_rgba(255,255,255,0.6)]"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
};

const ComparisonTable = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () => new Set(comparisonData.map((category) => category.name))
  );

  const toggleSection = (sectionName: string) => {
    setExpandedSections((previous) => {
      const next = new Set(previous);
      if (next.has(sectionName)) {
        next.delete(sectionName);
      } else {
        next.add(sectionName);
      }
      return next;
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tighter text-[#1a1a1f] mb-6">
        Compare plans
      </h2>

      <div className="border border-[#ebebeb] bg-white overflow-hidden">
        <div className="grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_180px_180px] bg-[#fafafa] border-b border-[#ebebeb]">
          <div className="px-5 py-3.5">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#71717a]">
              Features
            </span>
          </div>
          <div className="px-5 py-3.5 text-center border-l border-[#ebebeb]">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#71717a]">
              Team
            </span>
          </div>
          <div className="px-5 py-3.5 text-center border-l border-[#ebebeb]">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#71717a]">
              Enterprise
            </span>
          </div>
        </div>

        {comparisonData.map((category) => {
          const isExpanded = expandedSections.has(category.name);
          return (
            <div key={category.name}>
              <button
                type="button"
                onClick={() => toggleSection(category.name)}
                className="w-full grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_180px_180px] border-b border-[#ebebeb] bg-[#fafafa] hover:bg-[#f2f2f3] transition-colors duration-150 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 px-5 py-3">
                  <ChevronIcon rotated={isExpanded} />
                  <span className="text-[13px] font-semibold text-[#1a1a1f]">
                    {category.name}
                  </span>
                </div>
                <div className="border-l border-[#ebebeb]" />
                <div className="border-l border-[#ebebeb]" />
              </button>

              {isExpanded &&
                category.features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-[1fr_140px_140px] sm:grid-cols-[1fr_180px_180px] border-b border-[#ebebeb] ${
                      featureIndex % 2 === 1 ? "bg-[#fafafa]/50" : "bg-white"
                    }`}
                  >
                    <div className="px-5 py-3">
                      <span className="text-[13px] text-[#52525b]">
                        {feature.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-center px-3 py-3 border-l border-[#ebebeb]">
                      <CellValue value={feature.team} />
                    </div>
                    <div className="flex items-center justify-center px-3 py-3 border-l border-[#ebebeb]">
                      <CellValue value={feature.enterprise} />
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    );
  }

  if (value === false) {
    return <span className="text-[13px] text-[#d4d4d8]">&mdash;</span>;
  }

  return (
    <span className="text-[12px] text-[#52525b] text-center leading-snug">
      {value}
    </span>
  );
};

const CheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand shrink-0 mt-px"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ChevronIcon = ({ rotated }: { rotated: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#a1a1aa] transition-transform duration-200"
    style={{ transform: rotated ? "rotate(90deg)" : "rotate(0deg)" }}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);
