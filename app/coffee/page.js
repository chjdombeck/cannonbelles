import Image from "next/image";
import Link from "next/link";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import { BUSINESS, ADDRESS_FULL, TEL_HREF, MAPS_URL, ORDER_ONLINE_URL, hoursAligned } from "@/lib/site";
import ExternalIcon from "@/components/ExternalIcon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/coffee",
  title: "Coffee & Ice Cream | CannonBelles · Cannon Falls, MN",
  description:
    "Loon's Nest espresso drinks, Cedar Crest ice cream, and a cozy downtown shop at 402 Mill St W in Cannon Falls, MN. Open 7 days. Order online for pickup.",
});

export default function CoffeePage() {
  return (
    <div className="pg-coffee">
      {/* NAV */}
      <SubpageNav current="/coffee" />
      {/* HERO */}
      <div className="relative overflow-hidden hero-mobile-pad" style={{ minHeight: "88vh", display: "flex", alignItems: "flex-end", paddingBottom: "6rem", paddingTop: "10rem" }}>
        <Image src="/images/shop-interior.jpg" alt="Coffee shop" width={1600} height={1068} sizes="(max-width: 767px) 286vw, 100vw" priority fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.85)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.8)" }}>CannonBelles · Cannon Falls, MN</p>
            {" "}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5" style={{ letterSpacing: "-0.035em", lineHeight: "1.05" }}>Coffee &amp;<br />Ice Cream</h1>
            {" "}
            <p style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Inter',sans-serif", fontSize: "1.0625rem", lineHeight: "1.75", maxWidth: "32rem", marginBottom: "2rem" }}>Your local stop for handcrafted coffee drinks, premium ice cream, and the kind of warm, welcoming atmosphere that only a small-town shop can offer.</p>
            {" "}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="btn-primary">Order Online <ExternalIcon /></a>
              <Link href="/menu" className="btn-ghost hv-2" style={{ color: "white", borderColor: "rgba(255,255,255,0.45)" }}>See Our Menu</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Accent strip */}
      <div style={{ background: "#D91E18", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <p className="ribbon" style={{ color: "white", fontFamily: "'Inter',sans-serif", fontSize: "0.6875rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}><span>Open Daily&nbsp;·</span>{" "}<span>Coffee&nbsp;·</span>{" "}<span>Espresso&nbsp;·</span>{" "}<span>Cold Brew&nbsp;·</span>{" "}<span>Ice Cream&nbsp;·</span>{" "}<span>Sundaes</span></p>
      </div>
      {/* INTRO / ATMOSPHERE */}
      <section className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Your Neighborhood Shop</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>A Place to Slow<br />Down &amp; Savor</h2>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>We believe the best things in life are simple: a perfectly pulled espresso, a scoop of something sweet, and good company. Our coffee shop is the kind of place where everyone feels at home, whether you're a regular or visiting for the first time.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "2rem" }}>Made fresh daily, sourced thoughtfully, served with a smile.</p>
              {" "}
              <div className="stats-flex" style={{ display: "flex", gap: "2.5rem", borderTop: "1px solid #E5E5E5", paddingTop: "1.75rem" }}>
                <div>
                  <p className="font-display text-3xl font-bold" style={{ color: "#D91E18", letterSpacing: "-0.02em" }}>Daily</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.2rem" }}>Fresh brewed</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold" style={{ color: "#D91E18", letterSpacing: "-0.02em" }}>Local</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.2rem" }}>Cannon Falls, MN</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold" style={{ color: "#D91E18", letterSpacing: "-0.02em" }}>Warm</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.2rem" }}>Always welcoming</p>
                </div>
              </div>
            </div>
            <div className="intro-img-grid grid grid-cols-2 gap-4">
              <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src="/images/latte-art.jpg" alt="Latte art" width={1068} height={1600} sizes="(max-width: 767px) 77vw, 21vw" className="w-full h-full object-cover" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="img-hover rounded-sm card-shadow" style={{ flex: "1", overflow: "hidden", minHeight: "170px" }}>
                  <Image src="/images/ice-cream-cone-sign.jpg" alt="Ice cream" width={1500} height={1000} sizes="(max-width: 767px) 77vw, 21vw" className="w-full h-full object-cover" />
                </div>
                <div className="img-hover rounded-sm card-shadow" style={{ flex: "1", overflow: "hidden", minHeight: "170px" }}>
                  <Image src="/images/shop-lounge.jpg" alt="Shop interior" width={1500} height={1000} sizes="(max-width: 767px) 77vw, 21vw" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COFFEE DRINKS SECTION */}
      <section id="menu" className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#EFE6D8", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Serve</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Our Coffee Menu</h2>
            {" "}
            <div className="ornament-line max-w-xs mx-auto" style={{ color: "#B0B0B0", fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em" }}><span>Handcrafted Every Cup</span></div>
          </div>
          {" "}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Espresso Drinks */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"></path>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>Espresso Drinks</h3>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Latte</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Espresso with steamed milk</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$4.50+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Cappuccino</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Double shot with foamed milk</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$4.25+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Americano</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Espresso with hot water</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$3.75+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Mocha</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Espresso, chocolate, steamed milk</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$5.00+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Macchiato</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Espresso marked with foam</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$4.75+</p>
                </div>
              </div>
            </div>
            {/* Brewed & Cold */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>Brewed &amp; Cold</h3>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Drip Coffee</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Fresh brewed, always hot</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$2.50+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Cold Brew</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Slow-steeped, smooth &amp; bold</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$4.50+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Iced Latte</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Espresso over ice with milk</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$5.00+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Seasonal Specialty</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Ask us what's featured today</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$5.25+</p>
                </div>
                <div className="menu-item">
                  <div>
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" }}>Hot Chocolate</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" }}>Rich, creamy, kid-approved</p>
                  </div>
                  {" "}
                  <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", whiteSpace: "nowrap", fontSize: "0.9375rem" }}>$3.75+</p>
                </div>
              </div>
            </div>
          </div>
          {" "}
          {/* Note */}
          {" "}
          <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "rgba(43,43,43,0.45)", fontFamily: "'Inter',sans-serif", fontStyle: "italic" }}>Menu items and pricing may vary. Ask our staff about daily specials and seasonal offerings.</p>
        </div>
      </section>
      {/* ICE CREAM SECTION */}
      <section className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Sweet Treats</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Ice Cream &amp;<br /><em>Frozen Treats</em></h2>
            {" "}
            <div className="ornament-line max-w-xs mx-auto" style={{ color: "#B0B0B0", fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em" }}><span>Premium Scoops · Sundaes · Shakes</span></div>
          </div>
          {" "}
          {/* Big image + text */}
          {" "}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>We scoop premium ice cream in flavors that rotate with the seasons, from classic vanilla bean and rich chocolate to creative seasonal specials that keep things interesting.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "2rem" }}>Build your perfect sundae, blend up a thick shake, or keep it simple with a single scoop on a fresh cone. There's no wrong order.</p>
              {" "}
              <div className="grid grid-cols-2 gap-4">
                <div className="hover-lift rounded-sm card-shadow bg-white" style={{ padding: "1.25rem" }}>
                  <p className="font-display font-bold text-lg text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Scoops &amp; Cones</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.6" }}>Single, double, or triple. In a cup or on a fresh waffle cone.</p>
                </div>
                <div className="hover-lift rounded-sm card-shadow bg-white" style={{ padding: "1.25rem" }}>
                  <p className="font-display font-bold text-lg text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Sundaes</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.6" }}>Loaded with toppings, hot fudge, whipped cream, and a cherry.</p>
                </div>
                <div className="hover-lift rounded-sm card-shadow bg-white" style={{ padding: "1.25rem" }}>
                  <p className="font-display font-bold text-lg text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Shakes</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.6" }}>Thick, creamy milkshakes blended fresh in every flavor.</p>
                </div>
                <div className="hover-lift rounded-sm card-shadow bg-white" style={{ padding: "1.25rem" }}>
                  <p className="font-display font-bold text-lg text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Seasonal</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.6" }}>Rotating flavors that celebrate the best of each season.</p>
                </div>
              </div>
            </div>
            <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "4/5", overflow: "hidden" }}>
              <Image src="/images/ice-cream-scoop.jpg" alt="Ice cream" width={1600} height={1068} sizes="(max-width: 767px) 165vw, 81vw" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* DARK ATMOSPHERE BANNER */}
      <div className="relative overflow-hidden cta-banner-pad" style={{ background: "#2B2B2B", padding: "5rem 1.5rem", position: "relative" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(217,30,24,0.12) 0%, transparent 55%)", pointerEvents: "none" }}></div>
        {" "}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div style={{ padding: "0 1rem" }}>
              <div style={{ width: "3rem", height: "3rem", background: "rgba(217,30,24,0.15)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"></path>
                </svg>
              </div>
              {" "}
              <h3 className="font-display text-xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>Quality Beans</h3>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.52)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Every cup starts with thoughtfully sourced coffee beans, freshly ground and brewed to order.</p>
            </div>
            <div style={{ padding: "0 1rem" }}>
              <div style={{ width: "3rem", height: "3rem", background: "rgba(217,30,24,0.15)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              {" "}
              <h3 className="font-display text-xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>Made Fresh Daily</h3>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.52)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Nothing sits here. Our coffee is brewed fresh and our ice cream is scooped to order every single time.</p>
            </div>
            <div style={{ padding: "0 1rem" }}>
              <div style={{ width: "3rem", height: "3rem", background: "rgba(217,30,24,0.15)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              {" "}
              <h3 className="font-display text-xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>Community First</h3>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.52)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>We're not just a coffee shop. We're a gathering place for Cannon Falls and everyone who passes through.</p>
            </div>
          </div>
        </div>
      </div>
      {/* VISIT / HOURS */}
      <section id="visit" className="section-py-lg" style={{ padding: "6rem 1.5rem", background: "#EFE6D8", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Find Us</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Visit the<br /><em>Coffee Shop</em></h2>
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
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#2B2B2B", marginBottom: "0.2rem" }}>{ADDRESS_FULL}</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif" }}>
                      Downtown Cannon Falls ·{" "}
                      <a href={TEL_HREF} style={{ color: "inherit" }}>{BUSINESS.phone.display}</a>
                    </p>
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
              </div>
              {" "}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="btn-primary">Order Online <ExternalIcon /></a>
                <a href={MAPS_URL} target="_blank" rel="noopener" className="btn-ghost">Get Directions</a>
              </div>
            </div>
            <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src="/images/storefront-door.jpg" alt="Coffee shop exterior" width={1349} height={1349} sizes="(max-width: 767px) 88vw, 43vw" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <SubpageFooter current="/coffee" />
    </div>
  );
}
