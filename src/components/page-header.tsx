"use client";

import FadeIn from "@/components/fade-in";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
}

export default function PageHeader({ title, subtitle, date }: PageHeaderProps) {
  return (
    <FadeIn>
      <header className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1f]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-[15px] text-[#a1a1aa] leading-relaxed">
            {subtitle}
          </p>
        )}
        {date && (
          <p className="mt-2 text-[13px] text-[#a1a1aa] italic">
            Last Updated: {date}
          </p>
        )}
      </header>
    </FadeIn>
  );
}
