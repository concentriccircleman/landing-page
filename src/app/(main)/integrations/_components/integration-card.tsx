import Image from "next/image";
import type { Integration } from "../_data/integrations-data";

interface IntegrationCardProps {
  integration: Integration;
}

const IntegrationCard = ({ integration }: IntegrationCardProps) => {
  const {
    name,
    description,
    icon,
    permission,
    iconSize = "md",
    isMemorySource = false,
  } = integration;
  const iconPixels = iconSize === "sm" ? 20 : 28;
  const iconClass =
    iconSize === "sm" ? "w-5 h-5 object-contain" : "w-7 h-7 object-contain";

  return (
    <div className="relative flex flex-col gap-3 p-6">
      {isMemorySource ? (
        <span className="absolute top-5 right-5 inline-flex items-center gap-1 h-5 pl-1.5 pr-2 text-xs font-medium text-muted border border-border bg-background">
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
            <path d="M19 14l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
          </svg>
          Memory
        </span>
      ) : (
        <span className="absolute top-5 right-5 inline-flex items-center h-5 px-2 text-xs font-medium text-muted border border-border bg-background">
          {permission}
        </span>
      )}
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04),0_3px_6px_rgba(0,0,0,0.04),inset_0_0.75px_0_rgba(255,255,255,0.6)]">
        <Image
          src={icon}
          alt={name}
          width={iconPixels}
          height={iconPixels}
          className={iconClass}
        />
      </div>
      <h3 className="text-sm font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default IntegrationCard;
