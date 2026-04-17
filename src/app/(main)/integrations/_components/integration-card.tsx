import Image from "next/image";
import type { Integration } from "../_data/integrations-data";

interface IntegrationCardProps {
  integration: Integration;
}

const IntegrationCard = ({ integration }: IntegrationCardProps) => {
  const { name, description, icon } = integration;

  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-sm shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04),0_3px_6px_rgba(0,0,0,0.04),inset_0_0.75px_0_rgba(255,255,255,0.6)]">
        <Image src={icon} alt={name} width={24} height={24} />
      </div>
      <h3 className="text-sm font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default IntegrationCard;
