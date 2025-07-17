import type { Metadata } from "next";
import Privacy from "./_components/Privacy";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  return <Privacy />;
}
