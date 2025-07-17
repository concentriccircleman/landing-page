import type { Metadata } from "next";
import Terms from "./_components/Terms";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  canonical: "/terms",
});

export default function TermsPage() {
  return <Terms />;
}
