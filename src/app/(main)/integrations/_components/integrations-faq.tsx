"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How do integrations work with Sentra?",
    answer:
      "Sentra connects to the tools your team already uses — calendars, email, messaging, docs, and developer platforms. Once connected, Sentra passively observes activity across these tools to build organizational memory and awareness, without disrupting your existing workflows.",
  },
  {
    question: "Is my data secure when I connect an integration?",
    answer:
      "Yes. Sentra uses OAuth-based authentication for all integrations, meaning we never store your credentials. Data is encrypted in transit and at rest, and you can revoke access to any integration at any time from your settings.",
  },
  {
    question: "Can I connect multiple accounts for the same integration?",
    answer:
      "Account-level integrations like Google Calendar, Gmail, and Outlook are connected per user. Workspace-level integrations like Slack, GitHub, and Linear are connected once for your entire organization by an admin.",
  },
  {
    question: "What happens if I disconnect an integration?",
    answer:
      "Disconnecting an integration stops Sentra from accessing new data from that tool. Previously captured organizational memory remains intact unless you explicitly request its deletion.",
  },
  {
    question: "Do you plan to add more integrations?",
    answer:
      "Yes. We are continuously expanding our integration catalog. If there is a specific tool your team relies on, reach out to us and we will prioritize it.",
  },
];

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
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
          <div className="pb-5 text-sm text-muted leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationsFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
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

export default IntegrationsFaq;
