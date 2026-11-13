import Image from "next/image";
import Link from "next/link";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import { BUSINESS, ADDRESS_FULL, TEL_HREF, MAPS_URL, hoursAligned } from "@/lib/site";

export const metadata = {
  title: "Artisanal Cheese | CannonBelles · Cannon Falls, MN",
};

export default function CheesePage() {
  return (
    <div className="pg-cheese">
      {/* NAV */}
      <SubpageNav current="/cheese" />
      {/* HERO */}
      <div className="relative overflow-hidden hero-mobile-pad" style={{ minHeight: "88vh", display: "flex", alignItems: "flex-end", paddingBottom: "6rem", paddingTop: "10rem" }}>
        <Image src="/images/cheese-flatlay.jpg" alt="Artisanal cheese" width={1600} height={1066} sizes="(max-width: 767px) 286vw, 100vw" priority className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.42) saturate(0.78)" }} />
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
              <a href="#selection" className="btn-primary">See Our Selection</a>
              <a href="#process" className="btn-ghost-light">Our Process</a>
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
                  <Image src="/images/cheesemakers-curds.jpg" alt="Curd making" width={750} height={624} sizes="(max-width: 767px) 77vw, 21vw" className="w-full h-full object-cover" />
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
            <div className="ornament-line max-w-xs mx-auto" style={{ color: "#B0B0B0", fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em" }}><span>Handcrafted in Small Batches</span></div>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aged Cheddar */}
            <div className="cheese-card">
              <div className="img-hover" style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <Image src="/images/cheddar-board.jpg" alt="Aged Cheddar" width={1600} height={1066} sizes="(max-width: 767px) 88vw, 29vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3 className="font-display text-xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>Aged Cheddar</h3>
                  <span style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D91E18", background: "rgba(217,30,24,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>Signature</span>
                </div>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7", marginBottom: "1rem" }}>Sharp, rich, and full-bodied with a firm texture. Aged right here in Cannon Falls to develop deep, complex flavor that keeps you coming back.</p>
                {" "}
                <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E5E5E5" }}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Texture</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Firm, crumbly</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Flavor</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Sharp, nutty</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Age</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>6–12 months</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Smoked Gouda */}
            <div className="cheese-card">
              <div className="img-hover" style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <Image src="/images/gouda-rustic.jpg" alt="Smoked Gouda" width={1600} height={1065} sizes="(max-width: 767px) 88vw, 29vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3 className="font-display text-xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>Smoked Gouda</h3>
                  <span style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A5C3E", background: "rgba(122,92,62,0.1)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>Popular</span>
                </div>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7", marginBottom: "1rem" }}>Gently smoked over natural wood for a rich, buttery flavor with a subtle smokiness. Melts beautifully, perfect for boards, sandwiches, or straight off the wedge.</p>
                {" "}
                <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E5E5E5" }}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Texture</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Semi-firm</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Flavor</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Buttery, smoky</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Age</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>3–4 months</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Fresh Curds */}
            <div className="cheese-card">
              <div className="img-hover" style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <Image src="/images/bacon-curds.jpg" alt="Fresh Curds" width={1600} height={1066} sizes="(max-width: 767px) 88vw, 29vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                  <h3 className="font-display text-xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>Fresh Curds</h3>
                  <span style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#2B6B2B", background: "rgba(43,107,43,0.1)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>Fresh Daily</span>
                </div>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7", marginBottom: "1rem" }}>Squeaky, fresh, and irresistible. Made fresh every day in small batches so you always get the real deal. A true Minnesota classic: plain, seasoned, or fried.</p>
                {" "}
                <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E5E5E5" }}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Texture</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Soft, squeaky</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Flavor</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Mild, fresh</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Age</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Same day</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pepper Jack */}
            <div className="cheese-card">
              <div className="img-hover" style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <Image src="/images/grim-reaper-cheddar.jpg" alt="Pepper Jack" width={1600} height={1200} sizes="(max-width: 767px) 88vw, 29vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.02em" }}>Pepper Jack</h3>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7", marginBottom: "1rem" }}>A creamy Monterey Jack base studded with spicy peppers. Bold enough to add kick, smooth enough to balance it. Great on burgers, tacos, or a charcuterie board.</p>
                {" "}
                <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E5E5E5" }}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Texture</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Semi-soft</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Flavor</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Creamy, spicy</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Colby */}
            <div className="cheese-card">
              <div className="img-hover" style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <Image src="/images/colby.jpg" alt="Colby" width={1600} height={1200} sizes="(max-width: 767px) 88vw, 29vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.02em" }}>Colby</h3>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.6)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7", marginBottom: "1rem" }}>Mild, smooth, and approachable. Colby is the crowd-pleaser of the cheese world. A Wisconsin-style classic made with the same care we put into every product.</p>
                {" "}
                <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: "1px solid #E5E5E5" }}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Texture</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Firm, moist</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.2rem" }}>Flavor</p>
                    {" "}
                    <p style={{ fontSize: "0.8125rem", fontFamily: "'Inter',sans-serif", color: "#2B2B2B" }}>Mild, buttery</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Seasonal */}
            <div className="cheese-card" style={{ background: "#2B2B2B" }}>
              <div style={{ aspectRatio: "16/10", background: "linear-gradient(135deg, rgba(217,30,24,0.2), rgba(122,92,62,0.3))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 0.75rem" }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                  {" "}
                  <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", fontSize: "0.8125rem", letterSpacing: "0.08em" }}>Changes with the season</p>
                </div>
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <h3 className="font-display text-xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>Seasonal Varieties</h3>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7", marginBottom: "1rem" }}>We're always experimenting. Our rotating seasonal varieties celebrate local flavors, special ingredients, and the creativity of small-batch cheesemaking. Ask us what's on right now.</p>
                {" "}
                <a href="#visit" className="seasonal-link" style={{ fontSize: "0.8125rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#D91E18", textDecoration: "none", letterSpacing: "0.05em" }}>Ask about current varieties →</a>
              </div>
            </div>
          </div>
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
                    <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Quality Milk</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>It starts with good milk. We source locally and select for quality, because great cheese is only as good as what goes into it.</p>
                  </div>
                </div>
                {" "}
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>2</span></div>
                  {" "}
                  <div>
                    <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Culturing &amp; Setting</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>We add cultures and rennet to develop flavor and structure. This step is where the character of each cheese begins to take shape.</p>
                  </div>
                </div>
                {" "}
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>3</span></div>
                  {" "}
                  <div>
                    <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Pressing &amp; Shaping</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Each batch is carefully pressed and shaped by hand. No shortcuts, no assembly lines, just attention to detail in every step.</p>
                  </div>
                </div>
                {" "}
                <div className="process-step">
                  <div style={{ width: "2.25rem", height: "2.25rem", background: "#D91E18", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", marginTop: "0.1rem" }}><span style={{ color: "white", fontWeight: "700", fontFamily: "'Inter',sans-serif", fontSize: "0.875rem" }}>4</span></div>
                  {" "}
                  <div>
                    <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.01em" }}>Aging &amp; Finishing</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Good things take time. Our aged varieties are carefully tended through the aging process to develop the depth of flavor that makes them special.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process-sticky" style={{ position: "sticky", top: "5rem" }}>
              <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: "1.25rem" }}>
                <Image src="/images/cheesemakers-trio.jpg" alt="Cheesemaking" width={1600} height={1600} sizes="(max-width: 767px) 117vw, 57vw" className="w-full h-full object-cover" />
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
          <a href="#visit" className="btn-primary">Where to Buy Our Cheese</a>
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
                    <p style={{ fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "#2B2B2B", marginBottom: "0.2rem" }}>{ADDRESS_FULL}</p>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif" }}>Full selection at CannonBelles Coffee &amp; Ice Cream</p>
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
              </div>
              {" "}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="btn-primary">Get Directions</a>
            </div>
            <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src="/images/queso-fresco-ribbon.jpg" alt="Cheese shop" width={1024} height={1024} sizes="(max-width: 767px) 88vw, 43vw" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <SubpageFooter current="/cheese" />
    </div>
  );
}
