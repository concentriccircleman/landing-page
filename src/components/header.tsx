"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import sentraLogo from "@/assets/brand/sentra.png";
import { cn } from "@/utils/cn";
import Button from "@/components/button";

const useCaseCategories = [
  {
    title: "Leadership & Strategy",
    description: "Strategic awareness at every level",
    href: "/use-cases#leadership-strategy",
  },
  {
    title: "Workflow Collapse",
    description: "When Sentra knows enough, entire workflows disappear",
    href: "/use-cases#workflow-collapse",
  },
  {
    title: "Operational Workflow Collapse",
    description: "Compliance, approvals, and recurring processes\u2014collapsed",
    href: "/use-cases#operational-workflow-collapse",
  },
];

const UseCasesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/use-cases"
        className="text-[13px] font-medium hover:opacity-80 duration-150 px-2.5 inline-flex items-center gap-1"
      >
        Use Cases
        <svg
          className={cn(
            "w-3 h-3 transition-transform duration-150",
            isOpen && "rotate-180"
          )}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </Link>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-72 bg-white border border-border p-2 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]">
            {useCaseCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 hover:bg-background duration-150 group"
              >
                <p className="text-[13px] font-medium text-foreground group-hover:text-brand duration-150">
                  {category.title}
                </p>
                <p className="text-[12px] text-muted mt-0.5 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handler = () => setAtTop(window.scrollY < 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const outerClasses = cn(
    "fixed z-40 left-1/2 -translate-x-1/2 w-full will-change-transform",
    "transition-[max-width,top,border-radius,background-color,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",

    atTop && "top-0 max-w-[100vw] rounded-none border-b backdrop-blur-xl bg-[#f8f8f8]/80 border-[#e8e8ec]/60",

    !atTop && "top-4 max-w-[calc(100vw-24px)] sm:max-w-4xl rounded-[10px] backdrop-blur-2xl bg-[#f4f4f5]/70 shadow-[0_0_0_1px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_16px_48px_rgba(0,0,0,0.04)]",
  );

  const innerClasses = cn(
    "relative flex justify-between items-center pointer-events-auto text-foreground",
    "transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
    atTop ? "max-w-screen-2xl mx-auto p-4" : "max-w-screen-2xl mx-auto pl-4 pr-2.5 py-2.5",
  );

  return (
    <section className={outerClasses}>
      <div className={innerClasses}>
        <Link
          href="/"
          scroll={false}
          className="flex items-center gap-2 hover:opacity-80 duration-200"
        >
          <Image src={sentraLogo} alt="Sentra" width={28} height={28} />
          <span className="text-[14px] font-semibold tracking-tight">Sentra</span>
        </Link>

        <div className="flex sm:hidden items-center gap-2">
          <Button href="/sign-in" variant="secondary" size="sm" className="text-[12px] px-3">
            Sign In
          </Button>
          <Button href="/sign-in" variant="primary" size="sm" className="text-[12px] px-3">
            Get Started
          </Button>
        </div>

        <div className="hidden sm:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-1">
          <Link href="/research" className="text-[13px] font-medium hover:opacity-80 duration-150 px-2.5">
            Research
          </Link>
          <UseCasesDropdown />
          <Link href="/manifesto" className="text-[13px] font-medium hover:opacity-80 duration-150 px-2.5">
            Manifesto
          </Link>
          <Link href="/pricing" className="text-[13px] font-medium hover:opacity-80 duration-150 px-2.5">
            Pricing
          </Link>
        </div>

        <div className="hidden sm:flex items-center justify-end gap-2.5">
          <Button href="/sign-in" variant="secondary" size="sm">
            Sign In
          </Button>
          <Button href="/sign-in" variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
