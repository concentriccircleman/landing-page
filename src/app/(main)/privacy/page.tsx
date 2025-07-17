import type { Metadata } from "next";
import Privacy from "./_components/Privacy";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Sentra - Your AI teammate that listens, learns, and alerts you when your company drifts.",
});

export default function PrivacyPage() {
  return <Privacy />;
}
