import type { MetadataRoute } from "next";
import { SITE } from "@/config/mog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `https://${SITE.domain}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
