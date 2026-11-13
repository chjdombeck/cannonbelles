import Image from "next/image";
import Link from "next/link";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";

export const metadata = {
  title: "Our Story | CannonBelles · Cannon Falls, MN",
};

export default function StoryPage() {
  return (
    <div className="pg-story">
      {/* NAV */}
      <SubpageNav current="/story" />
      {/* HERO */}
      <div className="relative overflow-hidden" style={{ minHeight: "88vh", display: "flex", alignItems: "flex-end", paddingBottom: "6rem", paddingTop: "10rem" }}>
        <Image src="/images/charcuterie-board.jpg" alt="CannonBelles story" width={1600} height={1068} sizes="(max-width: 767px) 286vw, 100vw" priority className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.8)" }}>CannonBelles · Cannon Falls, MN</p>
            {" "}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5" style={{ letterSpacing: "-0.035em", lineHeight: "1.05" }}>Our<br />Story</h1>
            {" "}
            <p style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter',sans-serif", fontSize: "1.0625rem", lineHeight: "1.75", maxWidth: "34rem", marginBottom: "0" }}>A small-town business born from a love of good food, community, and the belief that the best things in life are made by hand.</p>
          </div>
        </div>
      </div>
      {/* Accent strip */}
      <div style={{ background: "#D91E18", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <p className="ribbon" style={{ color: "white", fontFamily: "'Inter',sans-serif", fontSize: "0.6875rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}><span>Rooted in Community&nbsp;·</span>{" "}<span>Crafted with Care&nbsp;·</span>{" "}<span>Cannon Falls, Minnesota</span></p>
      </div>
      {/* ORIGIN STORY */}
      <section style={{ padding: "6rem 1.5rem", background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Where It All Began</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Rooted in<br /><em>Cannon Falls</em></h2>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>CannonBelles didn't start as a business plan. It started as a passion. A love for real food, made the right way, shared with the people around you. That's still what drives everything we do.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>What began as small-batch artisanal cheesemaking grew naturally into something more. The community responded, word spread, and CannonBelles became a full destination, adding a coffee and ice cream shop that's become a daily gathering place for locals and visitors alike.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>We're proud to be part of Cannon Falls, a town that values real things, built by real people.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src="/images/cheesemakers-trio.jpg" alt="Our roots" width={1600} height={1600} sizes="(max-width: 767px) 56vw, 28vw" className="w-full h-full object-cover" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="img-hover rounded-sm card-shadow" style={{ flex: "1", overflow: "hidden", minHeight: "170px" }}>
                  <Image src="/images/shop-seating-brick.jpg" alt="The shop" width={1000} height={667} sizes="(max-width: 767px) 66vw, 21vw" className="w-full h-full object-cover" />
                </div>
                <div className="img-hover rounded-sm card-shadow" style={{ flex: "1", overflow: "hidden", minHeight: "170px" }}>
                  <Image src="/images/ice-cream-cone-sign.jpg" alt="Community" width={1500} height={1000} sizes="(max-width: 767px) 66vw, 21vw" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MEET THE OWNERS */}
      <section style={{ padding: "6rem 1.5rem", background: "#EFE6D8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">The People Behind It</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Meet the<br /><em>Owners</em></h2>
            {" "}
            <div className="ornament-line max-w-xs mx-auto" style={{ color: "#B0B0B0", fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em" }}><span>Three Friends &amp; a Dairy Farm</span></div>
          </div>
          {" "}
          {/* Group photo */}
          {" "}
          <div className="max-w-5xl mx-auto mb-10 md:mb-12">
            <div className="img-hover rounded-sm card-shadow owners-photo" style={{ aspectRatio: "16/8", overflow: "hidden" }}>
              <Image src="/images/owners-plant.jpg" alt="CannonBelles owners Kathy Hupf, Jackie Ohmann, and Deeann Lufkin (left to right) at their cheese plant" width={1600} height={1068} sizes="(max-width: 767px) 99vw, 72vw" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
            </div>
          </div>
          {" "}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="owner-card owner-bio">
              <p className="section-label mb-3">Co-Owner</p>
              {" "}
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.02em" }}>Kathy Hupf</h3>
              {" "}
              <p className="font-display italic" style={{ fontSize: "1.0625rem", color: "#7A5C3E", marginBottom: "1rem", lineHeight: "1.4" }}>From milking cows to making cheese</p>
              {" "}
              <p style={{ fontSize: "0.9rem", color: "rgba(43,43,43,0.68)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>Kathy spent 18 years running her own dairy farm and holds a degree in animal husbandry. Today she brings that farm-girl grit, plus a background in marketing and leadership, to the business side of CannonBelles.</p>
            </div>
            <div className="owner-card owner-bio">
              <p className="section-label mb-3">Co-Owner</p>
              {" "}
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.02em" }}>Jackie Ohmann</h3>
              {" "}
              <p className="font-display italic" style={{ fontSize: "1.0625rem", color: "#7A5C3E", marginBottom: "1rem", lineHeight: "1.4" }}>Spreading the good news… of cheese</p>
              {" "}
              <p style={{ fontSize: "0.9rem", color: "rgba(43,43,43,0.68)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>After 15 years as a Director of Christian Education, Jackie followed her family's entrepreneurial streak into cheese. Married to a dairy farmer, she's often the friendly face sharing CannonBelles with customers at local events.</p>
            </div>
            <div className="owner-card owner-bio">
              <p className="section-label mb-3">Head Cheesemaker</p>
              {" "}
              <h3 className="font-display text-2xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.02em" }}>Deeann Lufkin</h3>
              {" "}
              <p className="font-display italic" style={{ fontSize: "1.0625rem", color: "#7A5C3E", marginBottom: "1rem", lineHeight: "1.4" }}>From storm chaser to cheese creator</p>
              {" "}
              <p style={{ fontSize: "0.9rem", color: "rgba(43,43,43,0.68)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>A retired Air Force Reserve weather officer who flew with the Hurricane Hunters, Deeann now runs the cheese vat. She trained at the UW‑River Falls Cheesemaker Short Course and serves on the board of the League of Minnesota Cheesemakers.</p>
            </div>
          </div>
        </div>
      </section>
      {/* OUR JOURNEY / TIMELINE */}
      <section style={{ padding: "6rem 1.5rem", background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">How We Got Here</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-10" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>The CannonBelles<br /><em>Journey</em></h2>
              {" "}
              <div>
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.35rem" }}>The Beginning</p>
                    {" "}
                    <h4 className="font-display text-xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.01em" }}>A Passion for Craft</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>It started with a love of handcrafted cheese and a commitment to making something real, something the community of Cannon Falls could be proud of.</p>
                  </div>
                </div>
                {" "}
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.35rem" }}>Growing Roots</p>
                    {" "}
                    <h4 className="font-display text-xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.01em" }}>The Community Responds</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>Word spread quickly. Neighbors, farmers markets, and loyal regulars made it clear: Cannon Falls was hungry for something local, honest, and made with care.</p>
                  </div>
                </div>
                {" "}
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.35rem" }}>Expanding the Vision</p>
                    {" "}
                    <h4 className="font-display text-xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.01em" }}>Coffee &amp; Ice Cream Opens</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>The same spirit that built the cheese business carried into a full coffee and ice cream shop, a warm, welcoming space for the whole community to gather.</p>
                  </div>
                </div>
                {" "}
                <div className="timeline-item">
                  <div className="timeline-dot" style={{ background: "#2B2B2B" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  {" "}
                  <div>
                    <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B0B0B0", marginBottom: "0.35rem" }}>Today</p>
                    {" "}
                    <h4 className="font-display text-xl font-bold text-charcoal mb-2" style={{ letterSpacing: "-0.01em" }}>A Cannon Falls Destination</h4>
                    {" "}
                    <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.65)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>CannonBelles is now two businesses under one name, united by the same values that started it all: local, handcrafted, and made for the community.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Side image */}
            <div style={{ position: "sticky", top: "6rem" }}>
              <div className="img-hover rounded-sm card-shadow mb-5" style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <Image src="/images/storefront-door.jpg" alt="Our journey" width={1349} height={1349} sizes="(max-width: 767px) 110vw, 53vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ background: "#EFE6D8", borderRadius: "3px", padding: "1.5rem", borderLeft: "3px solid #D91E18" }}>
                <p className="font-display italic text-charcoal text-lg leading-relaxed">"We're not trying to be trendy. We're just a local business that cares deeply about quality, our neighbors, and the idea that the best things in life are made by hand."</p>
                {" "}
                <p style={{ fontSize: "0.8125rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", color: "rgba(43,43,43,0.55)", marginTop: "1rem", letterSpacing: "0.04em" }}>CannonBelles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VALUES */}
      <div style={{ background: "#2B2B2B", padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(217,30,24,0.1) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(122,92,62,0.1) 0%, transparent 55%)", pointerEvents: "none" }}></div>
        {" "}
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3" style={{ color: "rgba(239,230,216,0.6)" }}>What We Stand For</p>
            {" "}
            <h2 className="font-display text-4xl font-bold text-white" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Our Values</h2>
          </div>
          {" "}
          <div className="grid md:grid-cols-3 gap-8">
            <div style={{ padding: "2rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px", textAlign: "center" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", background: "rgba(217,30,24,0.15)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              {" "}
              <h3 className="font-display text-xl font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Locally Rooted</h3>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.52)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>Cannon Falls isn't just where we operate. It's who we are. Everything we do is in service of this town and the people in it.</p>
            </div>
            <div style={{ padding: "2rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px", textAlign: "center" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", background: "rgba(217,30,24,0.15)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              {" "}
              <h3 className="font-display text-xl font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Made with Care</h3>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.52)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>No shortcuts. No compromises. Every cup brewed and every wheel aged is held to the same standard, the best we can possibly make.</p>
            </div>
            <div style={{ padding: "2rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "3px", textAlign: "center" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", background: "rgba(217,30,24,0.15)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              {" "}
              <h3 className="font-display text-xl font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Community First</h3>
              {" "}
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.52)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75" }}>A business is only as good as the community it serves. We show up for Cannon Falls, at events, on main street, and every day we open our doors.</p>
            </div>
          </div>
        </div>
      </div>
      {/* EXPLORE THE BUSINESSES */}
      <section style={{ padding: "6rem 1.5rem", background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Come Visit</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Explore<br /><em>CannonBelles</em></h2>
          </div>
          {" "}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Coffee & Ice Cream CTA */}
            <Link href="/coffee" className="hover-lift relative rounded-sm overflow-hidden block" style={{ aspectRatio: "16/9", textDecoration: "none" }}>
              <Image src="/images/shop-interior.jpg" alt="Coffee & Ice Cream" width={1600} height={1068} sizes="(max-width: 767px) 99vw, 44vw" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.5) saturate(0.85)" }} />
              {" "}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}></div>
              {" "}
              <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "2rem" }}>
                <p className="section-label mb-2" style={{ color: "rgba(239,230,216,0.8)" }}>Coffee &amp; Ice Cream</p>
                {" "}
                <h3 className="font-display text-3xl font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Your Local Coffee Stop</h3>
                {" "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "white", background: "#D91E18", padding: "0.625rem 1.25rem", borderRadius: "3px" }}>
                  Explore{" "}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </Link>
            {/* Artisanal Cheese CTA */}
            <Link href="/cheese" className="hover-lift relative rounded-sm overflow-hidden block" style={{ aspectRatio: "16/9", textDecoration: "none" }}>
              <Image src="/images/cheese-flatlay.jpg" alt="Artisanal Cheese" width={1600} height={1066} sizes="(max-width: 767px) 99vw, 44vw" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.45) saturate(0.8)" }} />
              {" "}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}></div>
              {" "}
              <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "2rem" }}>
                <p className="section-label mb-2" style={{ color: "rgba(239,230,216,0.8)" }}>Artisanal Cheese</p>
                {" "}
                <h3 className="font-display text-3xl font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Handcrafted With Care</h3>
                {" "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "#2B2B2B", background: "white", padding: "0.625rem 1.25rem", borderRadius: "3px" }}>
                  Explore{" "}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <SubpageFooter current="/story" />
    </div>
  );
}
