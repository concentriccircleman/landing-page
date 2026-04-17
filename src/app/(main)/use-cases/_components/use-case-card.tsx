import Link from "next/link";
import IsometricCard from "@/components/isometric-card";
import type { UseCaseData } from "../_data/use-cases-data";
import { categoryIcons } from "../_data/use-cases-data";

interface UseCaseCardProps {
  useCase: UseCaseData;
  categoryId: string;
  categorySlug: string;
}

const UseCaseCard = ({ useCase, categoryId, categorySlug }: UseCaseCardProps) => {
  const iconPath = categoryIcons[categoryId];

  return (
    <Link href={`/use-cases/${categorySlug}/${useCase.id}`}>
      <IsometricCard wrapperClassName="h-full" className="border border-[#e0e0e3] bg-[#f8f8f8] p-12 h-full">
        <div>
          <div className="w-10 h-10 bg-brand flex items-center justify-center mb-6">
            <svg
              className="w-5 h-5 text-[#f0f0f0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={iconPath} />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-foreground tracking-tighter mb-2">
            {useCase.title}
          </h3>
          <p className="text-[13px] text-muted leading-relaxed">
            {useCase.subtitle}
          </p>
          <p className="text-sm text-muted leading-relaxed mt-4">
            {useCase.hoverText}
          </p>
        </div>
      </IsometricCard>
    </Link>
  );
};

export default UseCaseCard;
