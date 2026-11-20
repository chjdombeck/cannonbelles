import Image from "next/image";
import Link from "next/link";
import { COPYRIGHT_YEAR } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

const headingStyle = { fontSize: "0.6875rem", fontWeight: "600", color: "#2B2B2B", fontFamily: "'Inter',sans-serif", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "1rem" };
const linkStyle = { fontSize: "0.875rem", color: "rgba(43,43,43,0.72)", textDecoration: "none", transition: "color 0.15s" };
const smallPrint = { fontSize: "0.75rem", color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif" };

const COLUMNS = [
  {
    title: "Coffee & Ice Cream",
    links: [
      { href: "/menu", label: "Our Menu" },
      { href: "/menu#coffee", label: "Coffee Drinks" },
      { href: "/menu#ice-cream", label: "Ice Cream Flavors" },
      { href: "#visit", label: "Hours & Location" },
    ],
  },
  {
    title: "Artisanal Cheese",
    links: [
      { href: "/cheese", label: "Cheese Selection" },
      { href: "/cheese", label: "Fresh Curds" },
      { href: "/cheese", label: "Aged Varieties" },
      { href: "/story", label: "Our Story" },
    ],
  },
];

// Light footer used on the home page.
export default function HomeFooter() {
  return (
    <footer style={{ background: "#F8F5F0", borderTop: "1px solid #E5E5E5", padding: "3.5rem 1.5rem 2rem" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "white", borderRadius: "9999px", width: "96px", height: "96px", overflow: "hidden", boxShadow: "0 1px 6px rgba(43,43,43,0.12)", marginBottom: "1rem", flexShrink: "0" }}>
              <Image src="/Logos.png" alt="CannonBelles" width={1080} height={1080} sizes="96px" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </span>
            <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", maxWidth: "20rem" }}>Small-town charm meets elevated, handcrafted quality. Coffee, ice cream, and artisanal cheese, made with care in Cannon Falls, Minnesota.</p>
            <SocialLinks variant="light" className="mt-5" />
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p style={headingStyle}>{col.title}</p>
              <ul style={{ fontFamily: "'Inter',sans-serif" }}>
                {col.links.map((l, i) => (
                  <li key={l.label} style={i < col.links.length - 1 ? { marginBottom: "0.625rem" } : undefined}>
                    <Link className="hv-1" href={l.href} style={linkStyle}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #E5E5E5", paddingTop: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
          <p style={{ ...smallPrint, textAlign: "center" }}>© {COPYRIGHT_YEAR} CannonBelles · Cannon Falls, Minnesota · All rights reserved</p>
          <p style={{ ...smallPrint, letterSpacing: "0.1em" }}>Simple · Local · Delicious</p>
          <p className="site-credit">Site by <a href="https://www.ceejaysocial.com/" target="_blank" rel="noopener">CeeJay Social</a></p>
        </div>
      </div>
    </footer>
  );
}
