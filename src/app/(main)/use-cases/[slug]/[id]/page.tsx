import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import { categories, useCases } from "../../_data/use-cases-data";
import UseCaseArticle from "../../_components/use-case-article";

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

export const generateStaticParams = () => {
  const paramsList: { slug: string; id: string }[] = [];
  for (const category of categories) {
    for (const useCase of useCases) {
      if (useCase.category === category.id) {
        paramsList.push({ slug: category.slug, id: useCase.id });
      }
    }
  }
  return paramsList;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { id } = await params;
  const useCase = useCases.find((uc) => uc.id === id);
  if (!useCase) return {};

  return createMetadata({
    title: useCase.title,
    description: useCase.subtitle,
  });
};

const UseCaseArticlePage = async ({ params }: PageProps) => {
  const { slug, id } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  const useCase = useCases.find((uc) => uc.id === id);
  if (!category || !useCase || useCase.category !== category.id) notFound();

  return <UseCaseArticle useCase={useCase} categoryTitle={category.title} categorySlug={slug} />;
};

export default UseCaseArticlePage;
