import Image from "next/image";
import type { Integration } from "../_data/integrations-data";

interface IntegrationCardProps {
  integration: Integration;
}

const IntegrationCard = ({ integration }: IntegrationCardProps) => {
  const { name, description, icon } = integration;

  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="w-10 h-10 flex items-center justify-center border border-border bg-white rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <Image src={icon} alt={name} width={24} height={24} />
      </div>
      <h3 className="text-sm font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default IntegrationCard;
