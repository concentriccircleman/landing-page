"use client";

import { useState, useMemo } from "react";
import FadeIn from "@/components/fade-in";
import IntegrationCard from "./integration-card";
import IntegrationsFaq from "./integrations-faq";
import { integrations, type Integration } from "../_data/integrations-data";

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

  const paddedIntegrations = useMemo(() => {
    const padded: (Integration | null)[] = [...filteredIntegrations];
    const remainder = padded.length % 3;
    if (remainder > 0) {
      const paddingCount = 3 - remainder;
      for (let index = 0; index < paddingCount; index++) {
        padded.push(null);
      }
    }
    return padded;
  }, [filteredIntegrations]);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-6">
      <FadeIn>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">
            {integrations.length} integrations available
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">
            Connect All Your Favorite Tools in One Place
          </h1>
          <p className="mt-4 text-base text-muted leading-relaxed">
            Sentra integrates with the tools your team already uses. It&apos;s never
            been easier to bring your workflows together.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-10 max-w-xl">
          <div className="relative">
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
              className="w-full pl-11 pr-4 py-3 text-sm text-foreground bg-white border border-border placeholder:text-muted focus:outline-none focus:border-foreground transition-colors duration-150"
            />
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12">
          {filteredIntegrations.length === 0 ? (
            <p className="text-sm text-muted py-12">
              No integrations found matching &ldquo;{searchQuery}&rdquo;
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#a1a1aa] border border-[#a1a1aa]">
              {paddedIntegrations.map((integration, index) => (
                <div
                  key={integration ? integration.name : `empty-${index}`}
                  className="bg-white"
                >
                  {integration ? <IntegrationCard integration={integration} /> : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-24 max-w-2xl">
          <IntegrationsFaq />
        </div>
      </FadeIn>
    </div>
  );
};

export default IntegrationsPage;
