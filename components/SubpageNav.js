"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAGES, ORDER_ONLINE_URL } from "@/lib/site";
import { PromoBar, GiftButton, GiftMenuLink } from "@/components/Holiday";
import SocialLinks from "@/components/SocialLinks";

const linkStyle = { fontSize: "0.875rem", fontWeight: "500", fontFamily: "'Inter',sans-serif", color: "rgba(43,43,43,0.55)", textDecoration: "none", transition: "color 0.15s" };
const menuLinkStyle = { fontFamily: "'Inter',sans-serif", color: "#2B2B2B" };
const barStyle = { background: "#2B2B2B" };

function BackArrow(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 12H5M12 5l-7 7 7 7"></path>
    </svg>
  );
}

// Header for the Coffee, Cheese, and Story pages: back link, centered logo, links to the other pages.
export default function SubpageNav({ current }) {
  const [open, setOpen] = useState(false);
  const others = PAGES.filter((p) => p.href !== current);
  return (
    <nav>
      <PromoBar />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "5.5rem" }}>
        <div className="flex-1 flex items-center">
        <Link href="/" className="hidden md:inline-flex items-center gap-2 hv-1" style={linkStyle}>
          <BackArrow />
          Back to Home
        </Link>
        <Link href="/" className="md:hidden nav-back-m" aria-label="Back to Home">
          <BackArrow style={{ color: "rgba(43,43,43,0.55)" }} />
        </Link>
        </div>
        <Link href="/">
          <Image src="/Logos.png" alt="CannonBelles" width={1080} height={1080} sizes="72px" priority style={{ height: "4.5rem", width: "auto", display: "block" }} />
        </Link>
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-6">
        <div className="hidden md:flex" style={{ gap: "1.5rem", alignItems: "center" }}>
          {others.map((p) => (
            <Link key={p.href} className="hv-1 whitespace-nowrap" href={p.href} style={linkStyle}>{p.label}</Link>
          ))}
        </div>
        <GiftButton labelFrom="never" />
        <SocialLinks variant="header" className="hidden xl:flex" />
        <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span className="block w-5 h-0.5 rounded-full" style={barStyle}></span>
          <span className="block w-5 h-0.5 rounded-full" style={barStyle}></span>
          <span className="block w-4 h-0.5 rounded-full" style={barStyle}></span>
        </button>
        </div>
      </div>
      <div id="subpage-mobile-menu" className={`${open ? "" : "hidden "}md:hidden px-6 py-5 space-y-4`} style={{ background: "#F8F5F0", borderTop: "1px solid #E5E5E5" }}>
        <GiftMenuLink onClick={() => setOpen(false)} />
        <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="block text-sm font-semibold" style={{ fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }} onClick={() => setOpen(false)}>Order Online ↗</a>
        <Link href="/" className="block text-sm font-medium" style={menuLinkStyle} onClick={() => setOpen(false)}>← Back to Home</Link>
        {others.map((p) => (
          <Link key={p.href} href={p.href} className="block text-sm font-medium" style={menuLinkStyle} onClick={() => setOpen(false)}>{p.label}</Link>
        ))}
        <SocialLinks variant="header" className="menu-social" />
      </div>
    </nav>
  );
}
