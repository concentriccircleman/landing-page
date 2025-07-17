import type { Metadata } from "next";
import Terms from "./_components/Terms";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Sentra - Your AI teammate that listens, learns, and alerts you when your company drifts.",
});

export default function TermsPage() {
  return <Terms />;
}
