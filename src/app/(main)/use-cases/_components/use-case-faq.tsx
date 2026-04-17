"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import type { UseCaseData } from "../_data/use-cases-data";

interface FaqItem {
  question: string;
  answer: string;
}

const buildFaqItems = (useCase: UseCaseData): FaqItem[] => {
  const items: FaqItem[] = [
    {
      question: "What problem does this solve?",
      answer: useCase.challenge,
    },
    {
      question: "What does Sentra deliver?",
      answer: useCase.deliverables
        .map((deliverable) => `${deliverable.title}: ${deliverable.description}`)
        .join("\n\n"),
    },
    {
      question: "What does this look like in practice?",
      answer: useCase.inPractice,
    },
    {
      question: "What changes for my team?",
      answer: `Before: ${useCase.before}\n\nAfter: ${useCase.after}`,
    },
  ];

  return items;
};

const AccordionItem = ({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-foreground pr-4">
          {item.question}
        </span>
        <svg
          className={cn(
            "w-4 h-4 shrink-0 text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
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
        className={cn(
          "grid transition-[grid-template-rows] duration-200",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-sm text-muted leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

interface UseCaseFaqProps {
  useCase: UseCaseData;
}

const UseCaseFaq = ({ useCase }: UseCaseFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = buildFaqItems(useCase);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold tracking-tighter text-foreground mb-2">
        Frequently Asked Questions
      </h2>
      <div>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCaseFaq;
