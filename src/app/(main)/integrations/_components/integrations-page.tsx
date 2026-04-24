"use client";

import { useState, useMemo } from "react";
import { Tooltip } from "@base-ui/react/tooltip";
import FadeIn from "@/components/fade-in";
import Button from "@/components/button";
import IntegrationCard from "./integration-card";
import IntegrationsFaq from "./integrations-faq";
import RequestIntegrationDialog from "./request-integration-dialog";
import { integrations } from "../_data/integrations-data";

const IntegrationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = useMemo(() => {
    if (!searchQuery.trim()) return integrations;
    const query = searchQuery.toLowerCase();
    return integrations.filter(
      (integration) =>
        integration.name.toLowerCase().includes(query) ||
        integration.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);


  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6">
      <FadeIn>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
            {integrations.length} integrations available
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
            All the Tools Sentra Supports and Learns From
          </h1>
          <p className="mt-4 text-base text-muted leading-relaxed">
            Sentra connects to the tools your team already uses — learning from
            every interaction to build your company&apos;s shared memory.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="relative w-full sm:max-w-2xl">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search for an integration..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full pl-11 pr-10 h-10 bg-white text-foreground border border-[#e0e0e3] text-sm placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-[rgba(37,149,238,0.15)] transition-colors duration-150 rounded-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <RequestIntegrationDialog>
            <Button
              variant="tertiary"
              size="sm"
              className="h-10 px-4 whitespace-nowrap"
            >
              <span className="text-base leading-none" aria-hidden="true">+</span>
              Request an integration
            </Button>
          </RequestIntegrationDialog>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12">
          {filteredIntegrations.length === 0 ? (
            <p className="text-sm text-muted py-12">
              No integrations found matching &ldquo;{searchQuery}&rdquo;
            </p>
          ) : (
            <Tooltip.Provider delay={350} closeDelay={80}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                {filteredIntegrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="bg-background"
                  >
                    <IntegrationCard integration={integration} />
                  </div>
                ))}
                {filteredIntegrations.length % 3 !== 0 &&
                  Array.from({ length: 3 - (filteredIntegrations.length % 3) }).map((_, emptyIndex) => (
                    <div key={`empty-${emptyIndex}`} className="bg-background" />
                  ))}
              </div>
            </Tooltip.Provider>
          )}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="py-20 md:py-28">
          <IntegrationsFaq />
        </div>
      </FadeIn>
    </div>
  );
};

export default IntegrationsPage;
