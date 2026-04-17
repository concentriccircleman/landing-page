"use client";

import { useState } from "react";

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

const IntegrationsFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
        FAQs
      </h2>
      <div className="flex flex-col">
        {faqItems.map((item, itemIndex) => (
          <div key={itemIndex} className="border-b border-border">
            <button
              type="button"
              onClick={() => handleToggle(itemIndex)}
              className="w-full flex items-center justify-between py-5 text-left gap-4"
            >
              <span className="text-base font-medium text-foreground">
                {item.question}
              </span>
              <svg
                className="w-5 h-5 text-muted shrink-0 transition-transform duration-300"
                style={{
                  transform: openIndex === itemIndex ? "rotate(180deg)" : "rotate(0deg)",
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
                gridTemplateRows: openIndex === itemIndex ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-muted leading-relaxed pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsFaq;
