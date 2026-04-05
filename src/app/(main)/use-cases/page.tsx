import UseCases from "./_components/use-cases";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Use Cases",
  description:
    "See how Sentra transforms work at every level of your organization. A chief of staff for every person. A program manager for every team.",
  canonical: "/use-cases",
});

export default function UseCasesPage() {
  return <UseCases />;
}
