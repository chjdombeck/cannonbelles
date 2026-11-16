// SEO helpers: per-page metadata (description, canonical URL, link previews) and
// Google structured data for the business, all built from lib/site.js.
import { SITE_URL, SITE_NAME, BUSINESS, SOCIAL, MAPS_URL } from "./site";

const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "CannonBelles Coffee, Ice Cream & Artisanal Cheese in Cannon Falls, MN" };

// Usage in a page: export const metadata = pageMetadata({ path: "/menu", title: "...", description: "..." });
export function pageMetadata({ path, title, description }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

// Day names in BUSINESS.hours[].schema -> schema.org openingHoursSpecification
const to24 = (t) => {
  const m = t.match(/^(\d{1,2}):(\d{2})(am|pm)$/);
  let h = Number(m[1]) % 12;
  if (m[3] === "pm") h += 12;
  return `${String(h).padStart(2, "0")}:${m[2]}`;
};

export function businessJsonLd() {
  const { address, phone, hours, geo } = BUSINESS;
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    logo: `${SITE_URL}/Logos.png`,
    telephone: phone.tel,
    menu: `${SITE_URL}/menu`,
    servesCuisine: ["Coffee", "Ice Cream", "Breakfast", "Sandwiches"],
    hasMap: MAPS_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schema,
      opens: to24(h.open),
      closes: to24(h.close),
    })),
    sameAs: SOCIAL.map((s) => s.href),
  };
}
