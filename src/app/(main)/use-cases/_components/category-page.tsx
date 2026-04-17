"use client";

import FadeIn from "@/components/fade-in";
import Button from "@/components/button";
import CTA from "@/app/(home)/_components/cta";
import { cn } from "@/utils/cn";
import { useCases, categories } from "../_data/use-cases-data";
import type { UseCaseData } from "../_data/use-cases-data";
import UseCaseCard from "./use-case-card";
import CategoryFaq from "./category-faq";

const chunkPairs = (items: UseCaseData[]): UseCaseData[][] => {
  const rows: UseCaseData[][] = [];
  for (let cursor = 0; cursor < items.length; cursor += 2) {
    rows.push(items.slice(cursor, cursor + 2));
  }
  return rows;
};

interface CategoryPageProps {
  slug: string;
}

const CategoryPage = ({ slug }: CategoryPageProps) => {
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) return null;

  const categoryUseCases = useCases.filter(
    (useCase) => useCase.category === category.id,
  );

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-28">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
              {category.title}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
              {category.subtitle}
            </h1>
          </FadeIn>
          <FadeIn>
            <Button href="/download" variant="primary" className="mt-8">
              Try Now
            </Button>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="flex flex-col gap-8 mb-16 max-w-6xl mx-auto">
            {chunkPairs(categoryUseCases).map((pair, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  "grid grid-cols-1 gap-8",
                  rowIndex % 2 === 0
                    ? "md:grid-cols-[5fr_7fr]"
                    : "md:grid-cols-[7fr_5fr]",
                )}
              >
                {pair.map((useCase) => (
                  <UseCaseCard
                    key={useCase.id}
                    useCase={useCase}
                    categoryId={category.id}
                    categorySlug={category.slug}
                  />
                ))}
              </div>
            ))}
          </div>
        </FadeIn>

        <CategoryFaq categoryId={category.id} />
      </div>

      <CTA />
    </>
  );
};

export default CategoryPage;
