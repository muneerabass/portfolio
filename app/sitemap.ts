import type { MetadataRoute } from "next";
import { absoluteUrl, projectImages, siteUrl } from "@/lib/seo";
import { personal } from "@/lib/data";

const lastModified = new Date("2026-08-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(personal.profileImage), ...projectImages],
    },
    {
      url: absoluteUrl(personal.resume),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
