import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/**
 * Builds a consistent Metadata object for a route, including
 * Open Graph and Twitter card data. Pass `path` as the route's
 * pathname, e.g. "/about".
 */
export function buildMetadata({
  title,
  description,
  path,
  image = "/images/misc/og-default.png",
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
