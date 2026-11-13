import Image from "next/image";
import Link from "next/link";
import { PAGES, COPYRIGHT_YEAR } from "@/lib/site";

const base = { fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", textDecoration: "none" };
const inactive = { ...base, color: "rgba(255,255,255,0.5)" };
const active = { ...base, color: "white", fontWeight: "600" };

// Dark footer used on the Coffee, Cheese, and Story pages. `current` is highlighted.
export default function SubpageFooter({ current }) {
  const links = [{ href: "/", label: "Home" }, ...PAGES];
  return (
    <footer style={{ background: "#2B2B2B", padding: "3rem 1.5rem 2rem" }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "white", borderRadius: "9999px", width: "96px", height: "96px", overflow: "hidden", boxShadow: "0 1px 6px rgba(43,43,43,0.12)" }}>
            <Image src="/Logos.png" alt="CannonBelles" width={1080} height={1080} sizes="96px" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </Link>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {links.map((l) =>
              l.href === current ? (
                <Link key={l.href} href={l.href} style={active}>{l.label}</Link>
              ) : (
                <Link key={l.href} className="hv-3" href={l.href} style={inactive}>{l.label}</Link>
              )
            )}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontFamily: "'Inter',sans-serif" }}>© {COPYRIGHT_YEAR} CannonBelles · Cannon Falls, Minnesota · Simple · Local · Delicious</p>
        </div>
      </div>
    </footer>
  );
}
