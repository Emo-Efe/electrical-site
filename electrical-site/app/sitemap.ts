import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

const pages = ["", "/products", "/services", "/projects", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${site.url}${path}`,
  }));
}