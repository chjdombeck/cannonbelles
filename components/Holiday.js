import Link from "next/link";
import { HOLIDAY } from "@/lib/site";

// Thin announcement strip shown above the header on every page while HOLIDAY.enabled is true.
export function PromoBar() {
  if (!HOLIDAY.enabled) return null;
  return (
    <Link href={HOLIDAY.href} className="promo-bar">
      <span aria-hidden="true">🎁</span>
      <span className="promo-full">{HOLIDAY.bar}</span>
      <span className="promo-short">{HOLIDAY.barShort}</span>
      <span className="promo-sep" aria-hidden="true">·</span>
      <span className="promo-cta">{HOLIDAY.barCta} →</span>
    </Link>
  );
}

// 🎁 header button. Icon-only on phones/tablets; full label on wide screens (`labelFrom` = "lg" or "xl").
export function GiftButton({ labelFrom = "lg", onClick }) {
  if (!HOLIDAY.enabled) return null;
  return (
    <Link href={HOLIDAY.href} className={`gift-btn gift-btn-${labelFrom}`} aria-label={HOLIDAY.button} onClick={onClick}>
      <span aria-hidden="true">🎁</span>
      <span className="gift-btn-label">{HOLIDAY.button}</span>
    </Link>
  );
}

// First item in the phone menu.
export function GiftMenuLink({ onClick }) {
  if (!HOLIDAY.enabled) return null;
  return (
    <Link href={HOLIDAY.href} className="block text-sm font-semibold gift-menu-link" onClick={onClick}>
      🎁 {HOLIDAY.button}
    </Link>
  );
}
