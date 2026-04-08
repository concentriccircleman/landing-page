"use client";

import { useState } from "react";
import FadeIn from "@/components/fade-in";
import { cn } from "@/utils/cn";
import type { UseCaseData } from "../_data/use-cases-data";

interface UseCaseCardProps {
  useCase: UseCaseData;
  index: number;
}

const tabs = ["Challenge", "Solution", "In Practice"] as const;
type Tab = (typeof tabs)[number];

const UseCaseCard = ({ useCase, index }: UseCaseCardProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("Challenge");
  const isEven = index % 2 === 1;

  return (
    <FadeIn>
      <div
        id={useCase.id}
        className={cn("mb-20", isEven ? "text-right" : "text-left")}
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
          Use Case {useCase.number}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
          {useCase.title}
        </h3>
        <p className="text-base text-secondary mb-6">{useCase.subtitle}</p>

        <div
          className={cn(
            "flex gap-1 mb-6",
            isEven ? "justify-end" : "justify-start"
          )}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-3.5 py-1.5 text-sm font-medium transition-colors duration-150",
                activeTab === tab
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-left">
          {activeTab === "Challenge" && (
            <p className="text-base leading-8 text-secondary">
              {useCase.challenge}
            </p>
          )}

          {activeTab === "Solution" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCase.deliverables.map((deliverable) => (
                  <div
                    key={deliverable.title}
                    className="border border-border bg-white p-5 rounded-sm"
                  >
                    <span className="text-lg mb-2 block">
                      {deliverable.icon}
                    </span>
                    <p className="font-medium text-foreground text-sm mb-1">
                      {deliverable.title}
                    </p>
                    <p className="text-sm text-secondary leading-relaxed">
                      {deliverable.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-background rounded-sm">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
                    Before Sentra
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {useCase.before}
                  </p>
                </div>
                <div className="p-5 bg-background border-l-2 border-brand rounded-sm">
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-3">
                    With Sentra
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {useCase.after}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "In Practice" && (
            <p className="text-base leading-8 text-secondary">
              {useCase.inPractice}
            </p>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default UseCaseCard;
