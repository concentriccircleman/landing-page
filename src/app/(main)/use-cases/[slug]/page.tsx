import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import { categories } from "../_data/use-cases-data";
import CategoryPage from "../_components/category-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  categories.map((category) => ({ slug: category.slug }));

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) return {};

  return createMetadata({
    title: category.title,
    description: category.subtitle,
    canonical: `/use-cases/${slug}`,
  });
};

const UseCaseCategoryPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) notFound();

  return <CategoryPage slug={slug} />;
};

export default UseCaseCategoryPage;
