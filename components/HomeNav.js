"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/lib/site";
import { PromoBar, GiftButton, GiftMenuLink } from "@/components/Holiday";
import SocialLinks from "@/components/SocialLinks";

const linkStyle = { transition: "color 0.15s", fontFamily: "'Inter',sans-serif", letterSpacing: "0.02em" };
const menuLinkStyle = { fontFamily: "'Inter',sans-serif" };
const LINKS = [...PAGES, { href: "#visit", label: "Visit Us" }]; // phone menu

// Header for the home page: logo, page links, red "Visit Us" button (jumps to #visit), mobile menu.
// The phone menu (no red button) keeps a "Visit Us" link.
export default function HomeNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav id="navbar">
      <PromoBar />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "5.5rem" }}>
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/Logos.png" alt="CannonBelles" width={1080} height={1080} sizes="72px" priority style={{ height: "4.5rem", width: "auto", display: "block" }} />
        </Link>
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {PAGES.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-charcoal hover:text-cannon-red whitespace-nowrap" style={linkStyle}>{l.label}</Link>
          ))}
          <GiftButton labelFrom="lg" />
        </div>
        <div className="flex items-center gap-3">
        <SocialLinks variant="header" className="hidden xl:flex mr-1" />
        <GiftButton labelFrom="lg" className="md:hidden" />
        <a href="#visit" className="btn-primary hidden md:inline-flex whitespace-nowrap" style={{ padding: "0.625rem 1.25rem", fontSize: "0.75rem" }}>
          Visit Us{" "}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
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
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="block text-sm font-medium text-charcoal" style={menuLinkStyle} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <SocialLinks variant="header" className="menu-social" />
      </div>
    </nav>
  );
}
