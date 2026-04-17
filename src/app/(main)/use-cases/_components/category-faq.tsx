"use client";

import { useState } from "react";
import FadeIn from "@/components/fade-in";
import { categoryFaqs } from "../_data/use-cases-data";

interface CategoryFaqProps {
  categoryId: string;
}

const CategoryFaq = ({ categoryId }: CategoryFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = categoryFaqs[categoryId];

  if (!faqs || faqs.length === 0) return null;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FadeIn>
      <div className="max-w-6xl mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
            FAQs
          </h2>
          <div className="flex flex-col">
            {faqs.map((faq, faqIndex) => (
              <div key={faqIndex} className="border-b border-[#e0e0e3]">
                <button
                  type="button"
                  onClick={() => handleToggle(faqIndex)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="text-base font-medium text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-muted shrink-0 transition-transform duration-300"
                    style={{
                      transform: openIndex === faqIndex ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{
                    gridTemplateRows: openIndex === faqIndex ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default CategoryFaq;
