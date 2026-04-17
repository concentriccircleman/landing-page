import Link from "next/link";
import FadeIn from "@/components/fade-in";
import Button from "@/components/button";
import CTA from "@/app/(home)/_components/cta";
import UseCaseFaq from "./use-case-faq";
import type { UseCaseData } from "../_data/use-cases-data";

interface UseCaseArticleProps {
  useCase: UseCaseData;
  categoryTitle: string;
  categorySlug: string;
}

const splitIntoParagraphs = (text: string): string[] => {
  const sentences = text.split(/(?<=\.)\s+/);
  const paragraphs: string[] = [];
  let current: string[] = [];

  for (const sentence of sentences) {
    current.push(sentence);
    if (current.length >= 3) {
      paragraphs.push(current.join(" "));
      current = [];
    }
  }

  if (current.length > 0) {
    paragraphs.push(current.join(" "));
  }

  return paragraphs;
};

const UseCaseArticle = ({ useCase, categoryTitle, categorySlug }: UseCaseArticleProps) => {
  const paragraphs = splitIntoParagraphs(useCase.expandedText);

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <Link
              href={`/use-cases/${categorySlug}`}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200 mb-10 inline-flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {categoryTitle}
            </Link>
          </FadeIn>
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
              {categoryTitle}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
              {useCase.title}
            </h1>
            <p className="text-base text-muted leading-relaxed mt-4">
              {useCase.subtitle}
            </p>
          </FadeIn>
          <FadeIn>
            <Button href="/download" variant="primary" className="mt-8">
              Try Now
            </Button>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 flex flex-col gap-6">
              {paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-base text-muted leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <UseCaseFaq useCase={useCase} />
          </FadeIn>
        </div>
      </div>

      <div className="mt-24">
        <CTA />
      </div>
    </>
  );
};

export default UseCaseArticle;
