import Image from "next/image";
import Link from "next/link";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import { BUSINESS, ADDRESS_FULL, TEL_HREF, MAPS_URL, SHOP_ALL_URL, hoursAligned } from "@/lib/site";
import ExternalIcon from "@/components/ExternalIcon";
import CheeseCatalog from "@/components/CheeseCatalog";
import StoreFinder from "@/components/StoreFinder";
import { CANNON_FALLS_STOCKISTS } from "@/lib/cheeses";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/cheese",
  title: "Artisanal Cheese | CannonBelles · Cannon Falls, MN",
  description:
    "Award-winning artisanal cheese made in Cannon Falls, MN: cheese curds, cheddar, gouda, Queso Fresco, and more. Buy in our downtown shop or order online.",
});

export default function CheesePage() {
  return (
    <div className="pg-cheese">
      {/* NAV */}
      <SubpageNav current="/cheese" />
      {/* HERO */}
      <div className="relative overflow-hidden hero-mobile-pad" style={{ minHeight: "88vh", display: "flex", alignItems: "flex-end", paddingBottom: "6rem", paddingTop: "10rem" }}>
        <Image src="/images/cheese-flatlay.jpg" alt="Artisanal cheese" width={1600} height={1066} sizes="(max-width: 767px) 286vw, 100vw" priority fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.42) saturate(0.78)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.8)" }}>CannonBelles · Cannon Falls, MN</p>
            {" "}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5" style={{ letterSpacing: "-0.035em", lineHeight: "1.05" }}>Artisanal<br />Cheese</h1>
            {" "}
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter',sans-serif", fontSize: "1.0625rem", lineHeight: "1.75", maxWidth: "32rem", marginBottom: "2rem" }}>Small-batch, handcrafted cheese made right here in Cannon Falls using time-honored techniques and quality local ingredients. Taste the difference that care makes.</p>
            {" "}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={SHOP_ALL_URL} target="_blank" rel="noopener" className="btn-primary">Shop Online <ExternalIcon /></a>
              <a href="#selection" className="btn-ghost-light">See Our Selection</a>
            </div>
          </div>
        </div>
      </div>
      {/* Accent strip */}
      <div style={{ background: "#D91E18", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <p className="ribbon" style={{ color: "white", fontFamily: "'Inter',sans-serif", fontSize: "0.6875rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}><span>Small-Batch&nbsp;·</span>{" "}<span>Handcrafted&nbsp;·</span>{" "}<span>Locally Made&nbsp;·</span>{" "}<span>Cannon Falls, Minnesota</span></p>
      </div>
      {/* INTRO */}
      <section className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="intro-img-grid grid grid-cols-2 gap-4">
              <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src="/images/tuscan-cheddar.jpg" alt="Cheese wheel" width={1600} height={1600} sizes="(max-width: 767px) 103vw, 28vw" className="w-full h-full object-cover" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="img-hover rounded-sm card-shadow" style={{ flex: "1", overflow: "hidden", minHeight: "170px" }}>
                  <Image src="/images/charcuterie-board.jpg" alt="Cheese board" width={1600} height={1068} sizes="(max-width: 767px) 86vw, 24vw" className="w-full h-full object-cover" />
                </div>
                <div className="img-hover rounded-sm card-shadow" style={{ flex: "1", overflow: "hidden", minHeight: "170px" }}>
                  <Image src="/images/dill-curds.jpg" alt="CannonBelles dill cheese curds" width={1600} height={1066} sizes="(max-width: 767px) 77vw, 21vw" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Made Here, Made Right</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Quality You<br />Can Taste</h2>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>Every wheel, wedge, and curd is made using time-honored techniques passed down through generations of cheesemakers. We never rush the process, because great cheese demands patience.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "2rem" }}>We source quality local ingredients and keep our batches small, so every piece you buy is crafted with genuine care, not mass-produced on a line.</p>
              {" "}
              <div className="stats-flex" style={{ display: "flex", gap: "2.5rem", borderTop: "1px solid #E5E5E5", paddingTop: "1.75rem" }}>
                <div>
                  <p className="font-display text-3xl font-bold" style={{ color: "#D91E18", letterSpacing: "-0.02em" }}>Small</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.2rem" }}>Batch crafted</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold" style={{ color: "#D91E18", letterSpacing: "-0.02em" }}>Local</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.2rem" }}>MN ingredients</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold" style={{ color: "#D91E18", letterSpacing: "-0.02em" }}>Aged</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.2rem" }}>Time-honored process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CHEESE SELECTION */}
      <section id="selection" className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#EFE6D8", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Make</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Our Cheese<br /><em>Selection</em></h2>
            {" "}
            <div className="ornament-line max-w-xs mx-auto" style={{ color: "#B0B0B0", fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em" }}><span>Every Cheese We Make, by Type</span></div>
          </div>
          {" "}
          <CheeseCatalog />
        </div>
      </section>
      {/* OUR PROCESS */}
      <section id="process" className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#F8F5F0", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">How We Make It</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>The Art of<br /><em>Cheesemaking</em></h2>
              {" "}
              <div>
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>1</span></div>
                  {" "}
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Quality Milk</h3>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>It starts with good milk. Ours comes from Square Deal Dairy in Randolph, a fourth-generation family dairy farm just five miles from our cheese plant. Fresh, local milk from neighbors we know is where every great cheese begins.</p>
                  </div>
                </div>
                {" "}
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>2</span></div>
                  {" "}
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Culturing &amp; Setting</h3>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>We add cultures and rennet to develop flavor and structure. This step is where the character of each cheese begins to take shape.</p>
                  </div>
                </div>
                {" "}
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>3</span></div>
                  {" "}
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Pressing &amp; Shaping</h3>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Each batch is carefully pressed and shaped by hand. No shortcuts, no assembly lines, just attention to detail in every step.</p>
                  </div>
                </div>
                {" "}
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>4</span></div>
                  {" "}
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Aging &amp; Finishing</h3>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Good things take time. Our aged varieties are carefully tended through the aging process to develop the depth of flavor that makes them special.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-sticky" style={{ position: "sticky", top: "5rem" }}>
              <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: "1.25rem" }}>
                <Image src="/images/painted-desert-cheddar.jpg" alt="CannonBelles Painted Desert Cheddar" width={1402} height={1122} sizes="(max-width: 767px) 117vw, 57vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ background: "#EFE6D8", borderRadius: "3px", padding: "1.5rem", borderLeft: "3px solid #D91E18" }}>
                <p className="font-display italic text-charcoal text-lg leading-relaxed">"Made with patience, care, and a genuine love for the craft, the same way it's always been done."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DARK CTA BANNER */}
      <div className="relative overflow-hidden cta-banner-pad" style={{ background: "#2B2B2B", padding: "5rem 1.5rem", position: "relative" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(122,92,62,0.15) 0%, transparent 55%)", pointerEvents: "none" }}></div>
        {" "}
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="section-label mb-5" style={{ color: "rgba(239,230,216,0.6)" }}>Come Taste the Difference</p>
          {" "}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Cheese You Can<br /><em>Feel Good About</em></h2>
          {" "}
          <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", fontSize: "1rem", maxWidth: "32rem", margin: "0 auto 2.5rem" }}>When you buy from CannonBelles, you're supporting local craftsmanship and a small business that genuinely cares about what it makes.</p>
          {" "}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={SHOP_ALL_URL} target="_blank" rel="noopener" className="btn-primary">Shop Cheese Online <ExternalIcon /></a>
            <a href="#visit" className="btn-ghost-light">Buy In Person</a>
          </div>
        </div>
      </div>
      {/* VISIT / HOURS */}
      <section id="visit" className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#EFE6D8", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Where to Buy</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Find Our Cheese<br /><em>Downtown</em></h2>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", background: "white", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxShadow: "0 1px 4px rgba(43,43,43,0.08)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: "700", fontFamily: "'Inter',sans-serif", color: "#2B2B2B", marginBottom: "0.15rem" }}>CannonBelles Coffee &amp; Ice Cream</p>
                    <p style={{ fontWeight: "500", fontFamily: "'Inter',sans-serif", color: "#2B2B2B", marginBottom: "0.2rem" }}>{ADDRESS_FULL}</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif" }}>Our full cheese selection, every day we&apos;re open</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", background: "white", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxShadow: "0 1px 4px rgba(43,43,43,0.08)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#2B2B2B", marginBottom: "0.35rem" }}>Hours</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif", marginBottom: "0.2rem" }}>{hoursAligned(BUSINESS.hours[0])}</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif", marginBottom: "0.2rem" }}>{hoursAligned(BUSINESS.hours[1])}</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif" }}>{hoursAligned(BUSINESS.hours[2])}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", background: "white", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", boxShadow: "0 1px 4px rgba(43,43,43,0.08)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.5 3.18 2 2 0 012.48 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.61a16 16 0 006.28 6.28l1.38-1.38a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#2B2B2B", marginBottom: "0.2rem" }}>Get in Touch</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif" }}>
                      <a href={TEL_HREF} style={{ color: "inherit" }}>{BUSINESS.phone.display}</a>
                      {" "}· cannonbelles.com
                    </p>
                  </div>
                </div>
                <div className="also-cf">
                  <p className="also-cf-title">Also in Cannon Falls</p>
                  <ul>
                    {CANNON_FALLS_STOCKISTS.map((st) => (
                      <li key={st.name}><span className="also-cf-name">{st.name}</span> <span className="also-cf-where">{st.where}</span></li>
                    ))}
                  </ul>
                  <a href="#stores" className="also-cf-more">See every store that carries our cheese →</a>
                </div>
              </div>
              {" "}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={SHOP_ALL_URL} target="_blank" rel="noopener" className="btn-primary">Shop Online <ExternalIcon /></a>
                <a href={MAPS_URL} target="_blank" rel="noopener" className="btn-ghost">Get Directions</a>
              </div>
            </div>
            <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src="/images/queso-fresco-ribbon.jpg" alt="Cheese shop" width={1024} height={1024} sizes="(max-width: 767px) 88vw, 43vw" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* WHERE TO BUY: map + list of stores by city */}
      <StoreFinder />
      {/* FOOTER */}
      <SubpageFooter current="/cheese" />
    </div>
  );
}
