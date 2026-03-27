import { cn } from "@/utils/cn";

interface IsometricCardProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  persistent?: boolean;
}

const SHADOW_OFFSET = 20;

const IsometricCard = ({ children, className, wrapperClassName, style, persistent }: IsometricCardProps) => {
  return (
    <div className={cn("relative group", wrapperClassName)}>
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-200",
          persistent ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
        style={{
          top: SHADOW_OFFSET,
          left: SHADOW_OFFSET,
          background: `repeating-linear-gradient(
            45deg,
            #b4b4ba,
            #b4b4ba 1px,
            transparent 1px,
            transparent 6px
          )`,
        }}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative z-10",
          persistent
            ? "-translate-x-[3px] -translate-y-[3px]"
            : "transition-transform duration-200 group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]",
          className,
        )}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default IsometricCard;
