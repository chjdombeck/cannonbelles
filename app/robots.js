import { SITE_URL } from "@/lib/site";

// /robots.txt: let search engines crawl everything and point them to the sitemap.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
