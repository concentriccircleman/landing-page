import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface NativeSelectProps extends Omit<React.ComponentProps<"select">, "size"> {
  size?: "sm" | "default";
}

export const NativeSelect = ({ className, size = "default", disabled, ...props }: NativeSelectProps) => {
  const sizeClasses =
    size === "sm"
      ? "h-9 px-4 py-2 pr-10 text-sm leading-5"
      : "h-10 px-4 py-2 pr-10 text-sm leading-5";

  return (
    <div
      className={cn("relative w-full", disabled ? "opacity-50" : null)}
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        disabled={disabled}
        className={cn(
          "w-full min-w-0 appearance-none bg-white text-[#1a1a1f] border border-[#e0e0e3] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,149,238,0.15)] transition-colors duration-150 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[#f5f5f5] rounded-sm",
          sizeClasses,
          className,
        )}
        {...props}
      />
      <ChevronDownIcon
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-foreground/60"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  );
};

export const NativeSelectOption = (props: React.ComponentProps<"option">) => {
  return <option data-slot="native-select-option" {...props} />;
};

export const NativeSelectOptGroup = ({
  className,
  ...props
}: React.ComponentProps<"optgroup">) => {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  );
};

