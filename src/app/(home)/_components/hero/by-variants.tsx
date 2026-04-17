import Image, { type ImageProps } from "next/image";

import googleLogo from "@/assets/logos/google-logo.svg";
import instacartLogo from "@/assets/logos/instacart-logo.webp";
import microsoftLogo from "@/assets/logos/microsoft-logo.svg";
import xLogo from "@/assets/logos/x-logo.svg";
import a16zSpeedrunLogo from "@/assets/investors/a16z-speedrun.svg";
import togetherFundLogo from "@/assets/investors/together-fund.svg";

interface LogoItem {
  id: string;
  src: ImageProps["src"];
  alt: string;
}

const ANGEL_LOGOS: LogoItem[] = [
  { id: "google", src: googleLogo, alt: "Google" },
  { id: "microsoft", src: microsoftLogo, alt: "Microsoft" },
  { id: "x", src: xLogo, alt: "X" },
  { id: "instacart", src: instacartLogo, alt: "Instacart" },
];

const _INVESTOR_LOGOS: LogoItem[] = [
  { id: "a16z-speedrun", src: a16zSpeedrunLogo, alt: "a16z Speedrun" },
  { id: "together-fund", src: togetherFundLogo, alt: "Together Fund" },
];

export function StaticLogoRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-2">
      {ANGEL_LOGOS.map((logo) => (
        <div
          key={logo.id}
          className="select-none h-5 md:h-6 w-auto flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={24}
            className="h-full w-auto object-contain opacity-60 grayscale"
          />
        </div>
      ))}
    </div>
  );
}

export function StaticInvestorRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-1">
      <div className="select-none h-7 md:h-8 w-auto flex items-center justify-center">
        <Image
          src={a16zSpeedrunLogo}
          alt="a16z Speedrun"
          width={160}
          height={32}
          className="h-full w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
        />
      </div>
      <div className="select-none h-9 md:h-10 w-auto flex items-center justify-center translate-y-0.5">
        <Image
          src={togetherFundLogo}
          alt="Together Fund"
          width={160}
          height={32}
          className="h-full w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
        />
      </div>
    </div>
  );
}
