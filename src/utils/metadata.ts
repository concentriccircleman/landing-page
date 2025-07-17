type MetaDataProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

const defaultMetadata = {
  title: "Sentra",
  description:
    "Sentra is your AI teammate who creates a unified company memory, remembering details everyone forgot and alerting you when your teams are misaligned.",
  canonical: "/",
};

// Takes in title, description, and other props and returns a Next.js metadata object
export function createMetadata({
  title = defaultMetadata.title,
  description,
  canonical = defaultMetadata.canonical,
}: MetaDataProps) {
  const finalDescription =
    description ??
    (title !== defaultMetadata.title
      ? `${title} - ${defaultMetadata.description}`
      : defaultMetadata.description);

  return {
    metadataBase: new URL("https://sentra.app"),
    title:
      title !== defaultMetadata.title
        ? `${title} - ${defaultMetadata.title}`
        : defaultMetadata.title,
    description: finalDescription,
    alternates: {
      canonical,
    },
    keywords: [
      "sentra",
      "ai teammate",
      "institutional knowledge",
      "company memory",
      "ai assistant",
      "team productivity",
      "knowledge management",
      "company drift",
      "ai tools",
      "business intelligence",
      "team collaboration",
      "knowledge documentation",
    ],
    openGraph: {
      title,
      description: finalDescription,
      type: "website",
      url: canonical,
      images: [
        {
          url: "https://sentra.app/og.png",
          width: 1200,
          height: 630,
          alt: "OG Image",
        },
      ],
    },
    robots: "index, follow",
  };
}
