import Landing from "./_components/Hero";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({});

export default function HomePage() {
  return <Landing />;
}
