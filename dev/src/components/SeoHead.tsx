import Head from "next/head";
import { DEFAULT_OG_IMAGE_PATH, DEV_SITE_URL } from "@/lib/siteMetadata";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  ogImagePath?: string;
}

function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, DEV_SITE_URL).toString();
}

export function SeoHead({
  title,
  description,
  path,
  ogType = "website",
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
}: SeoHeadProps) {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImageUrl = toAbsoluteUrl(ogImagePath);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
