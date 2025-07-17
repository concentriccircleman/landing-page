import Manifesto from "./_components/Manifesto";
import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Manifesto",
  canonical: "/manifesto",
});

export default function ManifestoPage() {
  return <Manifesto />;
}
