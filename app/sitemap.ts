import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hari-om-pandey.vercel.app";
  return [
    "",
    "/about",
    "/experience",
    "/skills",
    "/ai-lab",
    "/ask-hari",
    "/contact",
    "/resume",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
