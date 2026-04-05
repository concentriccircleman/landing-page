import Research from "./_components/research";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Research",
  description:
    "Building the mathematical and architectural foundations for enterprise memory, alignment, and intelligence.",
  canonical: "/research",
});

export default function ResearchPage() {
  return <Research />;
}
