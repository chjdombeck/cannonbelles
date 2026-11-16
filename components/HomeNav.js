"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAGES, ORDER_ONLINE_URL } from "@/lib/site";
import ExternalIcon from "@/components/ExternalIcon";
import { PromoBar, GiftButton, GiftMenuLink } from "@/components/Holiday";
import SocialLinks from "@/components/SocialLinks";

const linkStyle = { transition: "color 0.15s", fontFamily: "'Inter',sans-serif", letterSpacing: "0.02em" };
const menuLinkStyle = { fontFamily: "'Inter',sans-serif" };
const LINKS = [...PAGES, { href: "#visit", label: "Visit Us" }]; // phone menu

// Header for the home page: logo, page links, red "Order Online" button (SpotOn), mobile menu.
// The phone menu (no red button) has Order Online plus a "Visit Us" link.
export default function HomeNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav id="navbar">
      <PromoBar />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "5.5rem" }}>
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/Logos.png" alt="CannonBelles" width={1080} height={1080} sizes="72px" priority style={{ height: "4.5rem", width: "auto", display: "block" }} />
        </Link>
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {PAGES.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-charcoal hover:text-cannon-red whitespace-nowrap" style={linkStyle}>{l.label}</Link>
          ))}
          <GiftButton labelFrom="lg" />
        </div>
        <div className="flex items-center gap-3">
        <SocialLinks variant="header" className="hidden xl:flex mr-1" />
        <GiftButton labelFrom="lg" className="md:hidden" />
        <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="btn-primary hidden md:inline-flex whitespace-nowrap" style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}>
          Order Online <ExternalIcon />
        </a>
        <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span className="block w-5 h-0.5 bg-charcoal rounded-full"></span>
          <span className="block w-5 h-0.5 bg-charcoal rounded-full"></span>
          <span className="block w-4 h-0.5 bg-charcoal rounded-full"></span>
        </button>
        </div>
      </div>
      <div id="mobile-menu" className={`${open ? "" : "hidden "}md:hidden px-6 py-5 space-y-4`} style={{ background: "#F8F5F0", borderTop: "1px solid #E5E5E5" }}>
        <GiftMenuLink onClick={() => setOpen(false)} />
        <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="block text-sm font-semibold" style={{ fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }} onClick={() => setOpen(false)}>Order Online ↗</a>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="block text-sm font-medium text-charcoal" style={menuLinkStyle} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <SocialLinks variant="header" className="menu-social" />
      </div>
    </nav>
  );
}
