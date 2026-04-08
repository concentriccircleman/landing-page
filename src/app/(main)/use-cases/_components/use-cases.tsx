"use client";

import Link from "next/link";
import PageHeader from "@/components/page-header";
import FadeIn from "@/components/fade-in";
import { cn } from "@/utils/cn";
import {
  ScrollSpy,
  ScrollSpyLink,
  ScrollSpyNav,
  ScrollSpySection,
} from "@/components/mdx/scroll-spy";
import { useCases, categories } from "../_data/use-cases-data";
import UseCaseCard from "./use-case-card";

const getCategoryUseCases = (categoryId: string) =>
  useCases.filter((useCase) => useCase.category === categoryId);

const UseCases = () => {
  return (
    <ScrollSpy asChild orientation="vertical" offset={96}>
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block shrink-0 w-56 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
            <ScrollSpyNav>
              {categories.map((category) => (
                <div key={category.id} className="mb-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
                    {category.title}
                  </p>
                  <div className="flex flex-col gap-1">
                    {getCategoryUseCases(category.id).map((useCase) => (
                      <ScrollSpyLink
                        key={useCase.id}
                        value={useCase.id}
                        className="block text-xs text-muted hover:text-foreground duration-200 data-[state=active]:text-foreground data-[state=active]:font-semibold py-0.5 truncate"
                      >
                        <span className="text-muted-foreground mr-1.5">
                          {useCase.number}
                        </span>
                        {useCase.title}
                      </ScrollSpyLink>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollSpyNav>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="max-w-3xl mx-auto">
              <PageHeader
                title="Use Cases"
                subtitle="A chief of staff for every person. A program manager for every team."
              />

              <FadeIn delay={100}>
                <div className="text-base leading-8 text-secondary space-y-6 mb-16">
                  <p className="text-lg text-secondary leading-relaxed">
                    See how Sentra transforms work at every level of your
                    organization.
                  </p>
                  <p>
                    One principle, many manifestations. Every use case that
                    follows is an instance of a single architectural truth:
                    because Sentra&apos;s ontology captures the two primitives
                    from which every system of record is downstream, it can
                    generate any artifact those systems produce, personalized to
                    each person&apos;s role and context. What follows are not 25
                    separate features. They are 25 demonstrations of what
                    becomes possible when the intelligence layer holds the source
                    and the artifacts become views.
                  </p>
                </div>
              </FadeIn>
            </div>

            {categories.map((category) => (
              <div key={category.id}>
                <FadeIn>
                  <div
                    id={category.slug}
                    className="section-gray -mx-6 px-6 py-12 mb-12"
                  >
                    <div className="max-w-3xl mx-auto">
                      <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
                        {category.title}
                      </p>
                      <p className="text-xl font-medium tracking-tight text-foreground">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <div className="max-w-3xl mx-auto">
                  {getCategoryUseCases(category.id).map(
                    (useCase, indexInCategory) => {
                      const globalIndex = useCases.indexOf(useCase);
                      return (
                        <ScrollSpySection
                          key={useCase.id}
                          value={useCase.id}
                          asChild
                        >
                          <div>
                            <UseCaseCard
                              useCase={useCase}
                              index={globalIndex}
                            />
                          </div>
                        </ScrollSpySection>
                      );
                    }
                  )}
                </div>
              </div>
            ))}

            <FadeIn>
              <div className="max-w-3xl mx-auto text-center py-16">
                <p className="text-xl font-semibold tracking-tight text-foreground mb-4">
                  Ready to see Sentra in action?
                </p>
                <Link
                  href="/download"
                  className={cn(
                    "h-10 inline-flex items-center gap-2 text-sm font-medium",
                    "bg-brand text-background px-6 rounded-sm",
                    "duration-200 hover:brightness-110 transition-all active:scale-[0.97]",
                    "shadow-[0_0_0_1px_#1a7dd4,0_2px_4px_rgba(37,149,238,0.3),0_6px_16px_rgba(37,149,238,0.2),0_10px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.25)]"
                  )}
                >
                  <svg
                    className="w-4 h-4 -ml-0.5"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-62.1 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  Download Sentra
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </ScrollSpy>
  );
};

export default UseCases;
