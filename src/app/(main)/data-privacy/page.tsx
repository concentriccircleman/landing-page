import type { Metadata } from "next";
import DataPrivacy from "./_components/DataPrivacy";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Data Privacy & Visibility",
  canonical: "/data-privacy",
});

export default function DataPrivacyPage() {
  return <DataPrivacy />;
}
