import Image from "next/image";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import { MENU_SECTIONS, ORDER_ONLINE_URL } from "@/lib/menu";
import { BUSINESS, ADDRESS_FULL, MAPS_URL, TEL_HREF, hoursCompact } from "@/lib/site";

export const metadata = {
  title: "Menu | CannonBelles Coffee & Ice Cream · Cannon Falls, MN",
  description:
    "Breakfast served all day, grilled cheese made with CannonBelles Queso Fresco, Loon's Nest espresso drinks, specialty mochas, Cedar Crest ice cream, and cheese to go in downtown Cannon Falls.",
};

const ICONS = {
  egg: <path d="M12 3c-3.5 0-7 5.2-7 10a7 7 0 0014 0c0-4.8-3.5-10-7-10z" />,
  sandwich: <path d="M3 11l9-6 9 6M4 11h16v3H4zM5 14v2a2 2 0 002 2h10a2 2 0 002-2v-2" />,
  cup: <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />,
  sparkle: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />,
  ice: <path d="M6 3h12l-1.5 17a2 2 0 01-2 1.8h-5a2 2 0 01-2-1.8L6 3zM6.5 8h11M10 3l1-2" />,
  cone: <path d="M7 10a5 5 0 1110 0M6 10h12l-6 12-6-12z" />,
  whisk: <path d="M12 2v6M8 8h8l-1 13H9L8 8zM6 8h12" />,
  cheese: <path d="M3 13l9-7 9 4v8H3v-5zM3 13h18M8 16h.01M15 15.5h.01" />,
};

function SectionIcon({ name }) {
  return (
    <div className="menu-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[name]}
      </svg>
    </div>
  );
}

function ItemGrid({ items }) {
  return (
    <div className="menu-grid">
      {items.map((it) => (
        <div key={it.name} className="menu-item">
          <div>
            <p className="menu-item-name">{it.name}</p>
            {it.desc && <p className="menu-item-desc">{it.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

function FlavorList({ list }) {
  return (
    <div className="flavor-card">
      <div className="flavor-card-head">
        <h3 className="font-display text-xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>{list.title}</h3>
        {list.seasonal && <span className="season-badge">Limited Time</span>}
      </div>
      <div className="flavor-grid">
        {list.items.map((it) => (
          <div key={it.name}>
            <p className="menu-item-name">{it.name}</p>
            <p className="menu-item-desc">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chips({ chips }) {
  return (
    <div className="chips-block">
      <h3 className="font-display text-xl font-bold text-charcoal mb-4" style={{ letterSpacing: "-0.02em" }}>{chips.title}</h3>
      <div className="chips">
        {chips.items.map((c) => (
          <span key={c} className="chip">{c}</span>
        ))}
      </div>
      {chips.footnote && <p className="chips-footnote">{chips.footnote}</p>}
    </div>
  );
}

function MenuSection({ section, alt }) {
  return (
    <section id={section.id} className="menu-section section-py-lg" style={{ background: alt ? "#EFE6D8" : "#F8F5F0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="menu-section-head">
          <SectionIcon name={section.icon} />
          <div>
            <p className="section-label mb-2">{section.label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>{section.title}</h2>
            {section.note && <p className="menu-section-note">{section.note}</p>}
          </div>
        </div>

        {section.chips && section.id === "ice-cream" && <Chips chips={section.chips} />}

        {section.items && <ItemGrid items={section.items} />}

        {section.groups?.map((g) => (
          <div key={g.title} className="menu-group">
            <div className="menu-group-head">
              <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>{g.title}</h3>
              {g.note && <p className="menu-group-note">{g.note}</p>}
            </div>
            <ItemGrid items={g.items} />
          </div>
        ))}

        {section.lists && (
          <div className="flavor-stack">
            {section.lists.map((l) => (
              <FlavorList key={l.title} list={l} />
            ))}
          </div>
        )}

        {section.chips && section.id !== "ice-cream" && <Chips chips={section.chips} />}
      </div>
    </section>
  );
}

const ArrowOut = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

export default function MenuPage() {
  return (
    <div className="pg-coffee pg-menu">
      <SubpageNav current="/menu" />

      {/* HERO */}
      <div className="relative overflow-hidden hero-mobile-pad" style={{ minHeight: "64vh", display: "flex", alignItems: "flex-end", paddingBottom: "5rem", paddingTop: "10rem" }}>
        <Image src="/images/latte-art.jpg" alt="Latte art on a wooden table" width={1068} height={1600} sizes="100vw" priority className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.85)", objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.8)" }}>CannonBelles · Cannon Falls, MN</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5" style={{ letterSpacing: "-0.035em", lineHeight: "1.05" }}>Our Menu</h1>
            <p style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Inter',sans-serif", fontSize: "1.0625rem", lineHeight: "1.75", maxWidth: "32rem", marginBottom: "2rem" }}>
              Breakfast all day, grilled cheese made with our own Queso Fresco, Loon&apos;s Nest espresso, and Cedar Crest ice cream. Dine in, take out, or order ahead.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="btn-primary">Order Online <ArrowOut /></a>
              <a href="#visit" className="btn-ghost hv-2" style={{ color: "white", borderColor: "rgba(255,255,255,0.45)" }}>Hours &amp; Location</a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent strip */}
      <div style={{ background: "#D91E18", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <p className="ribbon" style={{ color: "white", fontFamily: "'Inter',sans-serif", fontSize: "0.6875rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <span>Breakfast All Day&nbsp;·</span> <span>Lunch&nbsp;·</span> <span>Coffee &amp; Espresso&nbsp;·</span> <span>Ice Cream&nbsp;·</span> <span>Cheese To Go</span>
        </p>
      </div>

      {/* Category jump bar */}
      <div className="menu-cats">
        <div className="menu-cats-scroll">
          <div className="menu-cats-inner">
            {MENU_SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="menu-cat">{s.nav}</a>
            ))}
          </div>
        </div>
      </div>

      {MENU_SECTIONS.map((s, i) => (
        <MenuSection key={s.id} section={s} alt={i % 2 === 1} />
      ))}

      {/* VISIT / ORDER */}
      <section id="visit" className="relative overflow-hidden section-py-lg" style={{ padding: "5rem 1.5rem", background: "#2B2B2B", scrollMarginTop: "9.5rem" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(217,30,24,0.12) 0%, transparent 55%)", pointerEvents: "none" }}></div>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.6)" }}>Order Ahead · Dine In · Take Out</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Hungry?<br /><em>Come See Us</em></h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", maxWidth: "28rem", marginBottom: "2rem" }}>
              Order online for quick pickup, or stop in and stay a while. Menu items and specials change with the seasons, so ask what&apos;s new.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="btn-primary">Order Online <ArrowOut /></a>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="btn-ghost hv-2" style={{ color: "white", borderColor: "rgba(255,255,255,0.45)" }}>Get Directions</a>
            </div>
          </div>
          <div className="visit-card">
            <div className="visit-row">
              <p className="visit-label">Location</p>
              <p className="visit-value">{ADDRESS_FULL}</p>
              <p className="visit-sub">Downtown Cannon Falls</p>
            </div>
            <div className="visit-row">
              <p className="visit-label">Hours</p>
              {BUSINESS.hours.map((h) => (
                <p key={h.short} className="visit-value">{hoursCompact(h)}</p>
              ))}
            </div>
            <div className="visit-row">
              <p className="visit-label">Call Ahead</p>
              <p className="visit-value"><a href={TEL_HREF} style={{ color: "inherit", textDecoration: "none" }}>{BUSINESS.phone.display}</a></p>
              <p className="visit-sub">Ask about today&apos;s soup and specials</p>
            </div>
          </div>
        </div>
      </section>

      <SubpageFooter current="/menu" />
    </div>
  );
}
