import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import Hero from "./_components/Hero";

export const metadata: Metadata = createMetadata({});

export default function HomePage() {
  return <Hero />;
}
