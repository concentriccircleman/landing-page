type MetaDataProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

const defaultMetadata = {
  title: "Sentra",
  description:
    "Sentra is your AI teammate that listens, learns, and alerts you when your company drifts — before you even notice. It creates a memory of your company's institutional knowledge, memorializing and documenting details everyone forgets.",
  canonical: "/",
  ogImage: "/og.png",
};

// Takes in title, description, and other props and returns a Next.js metadata object
export function createMetadata({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  canonical = defaultMetadata.canonical,
  ogImage = defaultMetadata.ogImage,
}: MetaDataProps) {
  return {
    metadataBase: new URL("https://sentra.com"),
    title:
      title !== defaultMetadata.title
        ? `${title} - ${defaultMetadata.title}`
        : defaultMetadata.title,
    description,
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
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "OG Image",
        },
      ],
    },
    robots: "index, follow",
  };
}
