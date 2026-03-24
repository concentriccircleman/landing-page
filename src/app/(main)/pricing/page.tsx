import Pricing from "./_components/pricing";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for teams of every size. Choose the plan that fits your organization.",
  canonical: "/pricing",
});

export default function PricingPage() {
  return <Pricing />;
}
