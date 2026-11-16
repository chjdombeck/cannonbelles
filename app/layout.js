import "./globals.css";
import { HOLIDAY, SITE_URL, SITE_NAME } from "@/lib/site";
import { businessJsonLd } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CannonBelles | Coffee, Ice Cream & Cheese in Cannon Falls, MN",
  applicationName: SITE_NAME,
  formatDetection: { telephone: true, address: true },
};

export const viewport = {
  themeColor: "#F8F5F0",
};

// Latin subsets cover every character on the site; preload them so text renders in the right font immediately.
const PRELOAD_FONTS = [
  "/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2",
  "/fonts/playfair-nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2",
  "/fonts/playfair-nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2",
];

// Google structured data (business name, address, hours, phone, socials). Built only from the
// constants in lib/site.js; "<" is escaped so the JSON can never close the script tag.
const jsonLd = JSON.stringify(businessJsonLd()).replace(/</g, "\\u003c");

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={HOLIDAY.enabled ? "has-promo" : undefined}>
      <head>
        {PRELOAD_FONTS.map((href) => (
          <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="" />
        ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
