"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ibmPlexMono } from "@/app/fonts";

// Type declaration for DelveCookieConsent
declare const DelveCookieConsent: {
  show: () => void;
};

const navLinks = [
  { path: "/privacy", label: "Privacy" },
  { path: "/terms", label: "Terms" },
  {
    path: "https://trust.delve.co/sentra",
    target: "_blank",
    label: "Security",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full z-20 ${
        isHomePage ? "bg-transparent" : "bg-background"
      }`}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center p-4 pointer-events-auto relative">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-2 sm:mb-0 w-full sm:w-auto">
          {navLinks.map(({ path, label, target = undefined }) => (
            <Link
              key={path}
              href={path}
              target={target}
              scroll={false}
              className={`text-xs xs:text-sm ${
                isHomePage
                  ? "text-background/80 hover:text-background"
                  : "text-foreground/80 hover:text-foreground"
              } underline hover:no-underline transition-colors ${
                ibmPlexMono.className
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => DelveCookieConsent.show()}
            className={`text-xs xs:text-sm ${
              isHomePage
                ? "text-background/80 hover:text-background"
                : "text-foreground/80 hover:text-foreground"
            } underline hover:no-underline transition-colors cursor-pointer ${
              ibmPlexMono.className
            }`}
          >
            Cookie Settings
          </button>
        </div>

        <div
          className={`text-xs xs:text-sm ${
            isHomePage ? "text-background/80" : "text-foreground/80"
          } ${ibmPlexMono.className}`}
        >
          2025 © Dynamis Labs.
        </div>
      </div>
    </footer>
  );
}
