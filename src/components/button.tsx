import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const baseClasses =
  "inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200 active:scale-[0.97]";

const variantClasses: Record<string, string> = {
  primary: [
    "bg-brand text-[#f0f0f0]",
    "shadow-[0_0_0_1px_#1a7dd4,0_2px_4px_rgba(37,149,238,0.3),0_6px_16px_rgba(37,149,238,0.2),0_10px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.25)]",
    "hover:brightness-110",
    "hover:shadow-[0_0_0_1px_#1a7dd4,0_4px_8px_rgba(37,149,238,0.35),0_10px_24px_rgba(37,149,238,0.25),0_16px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.25)]",
    "focus-visible:ring-[3px] focus-visible:ring-[rgba(37,149,238,0.2)]",
  ].join(" "),
  secondary: [
    "bg-white text-[#1a1a1f]",
    "shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_0_0_3px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]",
    "hover:bg-[#f4f4f5] hover:-translate-y-px",
    "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_0_0_3.5px_rgba(255,255,255,0.12),0_4px_8px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]",
  ].join(" "),
  tertiary: [
    "bg-transparent text-[#52525b]",
    "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]",
    "hover:bg-[#f4f4f5] hover:text-[#1a1a1f] hover:-translate-y-px",
    "hover:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]",
    "focus-visible:ring-[3px] focus-visible:ring-[rgba(0,0,0,0.08)]",
  ].join(" "),
  outline: [
    "bg-transparent text-[#f0f0f0]",
    "shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35),0_2px_4px_rgba(0,0,0,0.2),0_6px_16px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]",
    "hover:bg-white/5 hover:-translate-y-px",
    "hover:shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.5),0_4px_8px_rgba(0,0,0,0.25),0_8px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]",
  ].join(" "),
};

const sizeClasses: Record<string, string> = {
  sm: "h-8 text-[13px] px-3.5 gap-1.5",
  md: "text-[14px] px-8 py-3 gap-2",
};

const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  target,
  rel,
  onClick,
  type = "button",
}: ButtonProps) => {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
