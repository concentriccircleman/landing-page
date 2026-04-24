import Image from "next/image";
import { Tooltip } from "@base-ui/react/tooltip";
import type { Integration } from "../_data/integrations-data";

interface IntegrationCardProps {
  integration: Integration;
}

const MEMORY_TOOLTIP_TEXT =
  "Sentra ingests content from this tool to build your team's shared memory — searchable, connected to meetings, and ready to answer questions.";

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
        <Tooltip.Root>
          <Tooltip.Trigger
            render={
              <span
                tabIndex={0}
                aria-label="Memory — what does this mean?"
                className="absolute top-5 right-5 inline-flex items-center gap-1 h-5 pl-1.5 pr-2 text-xs font-medium text-muted border border-border bg-background cursor-help focus:outline-none focus:border-foreground/40"
              >
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
            }
          />
          <Tooltip.Portal>
            <Tooltip.Positioner side="top" sideOffset={8}>
              <Tooltip.Popup className="max-w-xs bg-foreground text-background text-xs leading-relaxed px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-opacity duration-150 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0">
                {MEMORY_TOOLTIP_TEXT}
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
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
