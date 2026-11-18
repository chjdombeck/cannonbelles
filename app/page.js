import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/HomeNav";
import HomeFooter from "@/components/HomeFooter";
import { BUSINESS, ADDRESS_SHORT, TEL_HREF, MAPS_EMBED_URL, ORDER_ONLINE_URL, SHOP_ALL_URL, hoursCompact } from "@/lib/site";
import ExternalIcon from "@/components/ExternalIcon";
import GiftBoxes from "@/components/GiftBoxes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "CannonBelles | Coffee, Ice Cream & Cheese in Cannon Falls, MN",
  description:
    "Coffee, 16 ice cream flavors daily, breakfast, lunch, and award-winning artisanal cheese in downtown Cannon Falls, MN. Order online or shop our cheese.",
});

export default function HomePage() {
  return (
    <div className="pg-index">
      {/* NAVIGATION */}
      <HomeNav />
      {/* HERO — SPLIT */}
      <h1 className="sr-only">CannonBelles Coffee &amp; Ice Cream and Artisanal Cheese in Cannon Falls, Minnesota</h1>
      <section className="flex flex-col md:flex-row split-container" id="hero-split" style={{ minHeight: "100vh", position: "relative" }}>
        {/* Left: Coffee & Ice Cream */}
        <Link href="/coffee" className="split-panel flex-1 relative flex flex-col items-center justify-end pb-16 px-8 text-center" style={{ minHeight: "50vh" }}>
          <Image src="/images/shop-interior.jpg" alt="Coffee and ice cream" width={1600} height={1068} sizes="(max-width: 767px) 163vw, 94vw" priority fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.52) saturate(0.85)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 50%, transparent 100%)" }}></div>
          <div className="relative z-10">
            <p className="section-label mb-3" style={{ color: "rgba(239,230,216,0.85)" }}>Coffee &amp; Ice Cream</p>
            {" "}
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-4" style={{ letterSpacing: "-0.03em" }}>Your Local<br /><em>Coffee Stop</em></h2>
            {" "}
            <p className="mb-8 max-w-xs mx-auto" style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: "1.7" }}>Handcrafted drinks, scoops of joy, and a place to belong, right in the heart of Cannon Falls.</p>
            {" "}
            <span className="btn-primary">Explore the Shop</span>
          </div>
        </Link>
        {/* Vertical divider */}
        <div className="hidden md:block w-px relative z-10" style={{ background: "rgba(255,255,255,0.15)" }}></div>
        {/* Right: Artisanal Cheese */}
        <Link href="/cheese" className="split-panel flex-1 relative flex flex-col items-center justify-end pb-16 px-8 text-center" style={{ minHeight: "50vh" }}>
          <Image src="/images/painted-desert-cheddar.jpg" alt="Artisanal cheese" width={1402} height={1122} sizes="(max-width: 767px) 136vw, 79vw" loading="eager" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.48) saturate(0.8)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.22) 50%, transparent 100%)" }}></div>
          <div className="relative z-10">
            <p className="section-label mb-3" style={{ color: "rgba(239,230,216,0.85)" }}>Artisanal Cheese</p>
            {" "}
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-4" style={{ letterSpacing: "-0.03em" }}>Handcrafted<br /><em>With Care</em></h2>
            {" "}
            <p className="mb-8 max-w-xs mx-auto" style={{ color: "rgba(255,255,255,0.68)", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: "1.7" }}>Small-batch artisanal cheese made with quality ingredients and time-honored tradition.</p>
            {" "}
            <span className="btn-outline">Discover the Cheese</span>
          </div>
        </Link>
      </section>
      {/* Tagline bar */}
      <div style={{ background: "#D91E18", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <p className="ribbon" style={{ color: "white", fontFamily: "'Inter',sans-serif", fontSize: "0.6875rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}><span>Simple · Local · Delicious&nbsp;·</span>{" "}<span>Cannon Falls, Minnesota</span></p>
      </div>
      {/* HOLIDAY GIFT BOXES (toggle with HOLIDAY.enabled in lib/site.js) */}
      <GiftBoxes />
      {/* COFFEE & ICE CREAM SECTION */}
      <section id="coffee" className="section-py-lg" style={{ padding: "6rem 0", background: "#F8F5F0", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Coffee &amp; Ice Cream Shop</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Coffee, Ice Cream<br /><em>&amp; Community</em></h2>
            {" "}
            <div className="ornament-line max-w-xs mx-auto text-xs" style={{ fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", color: "#B0B0B0" }}><span>Your Cannon Falls Gathering Place</span></div>
          </div>
          {" "}
          {/* Feature row */}
          {" "}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src="/images/shop-seating-brick.jpg" alt="Coffee shop interior" width={1000} height={667} sizes="(max-width: 767px) 99vw, 47vw" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="section-label mb-4">Est. in Cannon Falls</p>
              {" "}
              <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>A Place to Slow<br />Down &amp; Savor</h3>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>We believe the best things in life are simple: a perfectly pulled espresso, a scoop of something sweet, and good company. Our shop is the kind of place where everyone feels at home.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "2rem" }}>Made fresh daily, sourced thoughtfully, and served with a smile. That's the CannonBelles way.</p>
              {" "}
              <a href="#visit" className="btn-primary">Come On In</a>
            </div>
          </div>
          {" "}
          {/* Cards */}
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hover-lift rounded-sm overflow-hidden card-shadow bg-white">
              <div className="img-hover" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <Image src="/images/latte-wood.jpg" alt="Coffee drinks" width={1600} height={1067} sizes="(max-width: 767px) 99vw, 31vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <p className="section-label mb-2">Espresso · Drip · Cold Brew</p>
                {" "}
                <h4 className="font-display text-xl font-bold text-charcoal mb-3" style={{ letterSpacing: "-0.02em" }}>Crafted Coffee</h4>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>From your morning latte to an afternoon cold brew, every cup is made with care and quality beans.</p>
              </div>
            </div>
            <div className="hover-lift rounded-sm overflow-hidden card-shadow bg-white">
              <div className="img-hover" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <Image src="/images/ice-cream-scoop-2.jpg" alt="Ice cream" width={1080} height={721} sizes="(max-width: 767px) 99vw, 31vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <p className="section-label mb-2">Scoops · Sundaes · Shakes</p>
                {" "}
                <h4 className="font-display text-xl font-bold text-charcoal mb-3" style={{ letterSpacing: "-0.02em" }}>Sweet Scoops</h4>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Generous scoops of premium ice cream in classic and seasonal flavors. The kind that drips a little. The good kind.</p>
              </div>
            </div>
            <div className="hover-lift rounded-sm overflow-hidden card-shadow bg-white">
              <div className="img-hover" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <Image src="/images/shop-lounge.jpg" alt="Cozy shop" width={1500} height={1000} sizes="(max-width: 767px) 99vw, 31vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.5rem" }}>
                <p className="section-label mb-2">Gather · Relax · Connect</p>
                {" "}
                <h4 className="font-display text-xl font-bold text-charcoal mb-3" style={{ letterSpacing: "-0.02em" }}>A Town Hangout</h4>
                {" "}
                <p style={{ fontSize: "0.875rem", color: "rgba(43,43,43,0.62)", fontFamily: "'Inter',sans-serif", lineHeight: "1.7" }}>Comfortable seating, friendly faces, and a neighborhood feel. Whether catching up or sitting solo, you belong here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* QUOTE BANNER */}
      <div className="relative overflow-hidden noise" style={{ background: "#2B2B2B", padding: "5rem 1.5rem", position: "relative" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 50%, rgba(217,30,24,0.15) 0%, transparent 55%), radial-gradient(ellipse at 75% 50%, rgba(122,92,62,0.15) 0%, transparent 55%)", pointerEvents: "none" }}></div>
        {" "}
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="section-label mb-5" style={{ color: "rgba(239,230,216,0.55)" }}>Where Cannon Falls Comes Together</p>
          {" "}
          <blockquote className="quote-text font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.15" }}>
            "A place where community,
            <br />
            quality, and craftsmanship
            <br />
            <em>come together."</em>
          </blockquote>
          {" "}
          <p style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'Inter',sans-serif", fontSize: "0.8125rem", letterSpacing: "0.06em" }}>CannonBelles, Cannon Falls, MN</p>
        </div>
      </div>
      {/* ARTISANAL CHEESE SECTION */}
      <section id="cheese" className="section-py-lg" style={{ padding: "6rem 0", background: "#EFE6D8", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Artisanal Cheese</p>
            {" "}
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Handcrafted Cheese<br /><em>Quality You Can Taste</em></h2>
            {" "}
            <div className="ornament-line max-w-xs mx-auto text-xs" style={{ fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", color: "#B0B0B0" }}><span style={{ whiteSpace: "nowrap" }}>Small‑Batch · Locally&nbsp;Made · Time‑Honored</span></div>
          </div>
          {" "}
          {/* Editorial feature */}
          {" "}
          <div className="grid md:grid-cols-5 rounded-sm overflow-hidden card-shadow mb-16" style={{ gap: "0" }}>
            <div className="md:col-span-3 img-hover" style={{ minHeight: "380px", overflow: "hidden" }}>
              <Image src="/images/charcuterie-board.jpg" alt="Cheese board" width={1600} height={1068} sizes="(max-width: 767px) 147vw, 52vw" className="w-full h-full object-cover" style={{ filter: "saturate(0.88)" }} />
            </div>
            <div className="md:col-span-2 flex flex-col justify-center editorial-dark-panel" style={{ background: "#2B2B2B", padding: "3.5rem" }}>
              <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.65)" }}>Crafted with Intention</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Made Here.<br />Made Right.</h3>
              <p style={{ color: "rgba(255,255,255,0.62)", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", lineHeight: "1.75", marginBottom: "2rem" }}>Every wheel and wedge is made using time-honored techniques and quality local ingredients. Our cheese is crafted in small batches, never rushed, never compromised.</p>
              <a href={SHOP_ALL_URL} target="_blank" rel="noopener" className="btn-outline" style={{ alignSelf: "flex-start" }}>Shop the Cheese <ExternalIcon /></a>
            </div>
          </div>
          {" "}
          {/* Cheese variety grid */}
          {" "}
          <div className="cheese-grid grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            <div className="hover-lift bg-white rounded-sm overflow-hidden card-shadow">
              <div className="img-hover" style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                <Image src="/images/queso-fresco-ribbon.jpg" alt="CannonBelles Queso Fresco" width={1024} height={1024} sizes="(max-width: 767px) 50vw, 25vw" className="w-full h-full object-cover" />
                <span className="signature-tab">Signature Cheese</span>
              </div>
              {" "}
              <div style={{ padding: "1.25rem" }}>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Queso Fresco</h4>
                {" "}
                <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.65" }}>Our award winner: mild, creamy, and the cheese in every grilled cheese we serve.</p>
              </div>
            </div>
            <div className="hover-lift bg-white rounded-sm overflow-hidden card-shadow">
              <div className="img-hover" style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                <Image src="/images/cheddar-board.jpg" alt="Aged Cheddar" width={1600} height={1066} sizes="(max-width: 767px) 50vw, 25vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.25rem" }}>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Aged Cheddar</h4>
                {" "}
                <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.65" }}>Sharp, rich, and full-bodied. Aged more than 12 months right here in Cannon Falls.</p>
              </div>
            </div>
            <div className="hover-lift bg-white rounded-sm overflow-hidden card-shadow">
              <div className="img-hover" style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                <Image src="/images/gouda-rustic.jpg" alt="Gouda" width={1600} height={1065} sizes="(max-width: 767px) 50vw, 25vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.25rem" }}>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Gouda</h4>
                {" "}
                <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.65" }}>Creamy and mellow with a buttery finish. Aged at least 3 months.</p>
              </div>
            </div>
            <div className="hover-lift bg-white rounded-sm overflow-hidden card-shadow">
              <div className="img-hover" style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
                <Image src="/images/dill-curds.jpg" alt="Cheese curds" width={1600} height={1066} sizes="(max-width: 767px) 50vw, 25vw" className="w-full h-full object-cover" />
              </div>
              {" "}
              <div style={{ padding: "1.25rem" }}>
                <h4 className="font-display text-lg font-bold text-charcoal mb-1" style={{ letterSpacing: "-0.02em" }}>Cheese Curds</h4>
                {" "}
                <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.55)", fontFamily: "'Inter',sans-serif", lineHeight: "1.65" }}>Squeaky and fresh in eight flavors, from plain and dill to Grim Reaper.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* OUR STORY */}
      <section id="about" className="section-py-lg" style={{ padding: "6rem 0", background: "#F8F5F0", scrollMarginTop: "88px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Rooted in<br /><em>Cannon Falls</em></h2>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>CannonBelles started as a simple love for good food and this community. What began with handcrafted cheese grew into something more: a full neighborhood destination offering coffee, ice cream, and the kind of food that reminds you where you are.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "1.25rem" }}>We're not trying to be trendy or corporate. We're just a local business that cares deeply about quality, our neighbors, and the idea that the best things in life are made by hand.</p>
              {" "}
              <p style={{ color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", lineHeight: "1.75", marginBottom: "2.5rem" }}>Every cup brewed, every wheel aged, every scoop served, all made with Cannon Falls in mind.</p>
              {" "}
              <div className="grid grid-cols-3 gap-6" style={{ borderTop: "1px solid #E5E5E5", paddingTop: "2rem" }}>
                <div>
                  <p className="font-display text-2xl font-bold" style={{ color: "#D91E18", marginBottom: "0.25rem" }}>Local</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif" }}>Rooted in Cannon Falls, MN</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold" style={{ color: "#D91E18", marginBottom: "0.25rem" }}>Craft</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif" }}>Small-batch, made by hand</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold" style={{ color: "#D91E18", marginBottom: "0.25rem" }}>Warm</p>
                  {" "}
                  <p style={{ fontSize: "0.8125rem", color: "rgba(43,43,43,0.52)", fontFamily: "'Inter',sans-serif" }}>Community-first always</p>
                </div>
              </div>
            </div>
            <div className="story-img-grid grid grid-cols-2 gap-4">
              <div className="img-hover rounded-sm card-shadow" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src="/images/storefront-door.jpg" alt="Shop" width={1349} height={1349} sizes="(max-width: 767px) 98vw, 27vw" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="img-hover rounded-sm card-shadow flex-1" style={{ overflow: "hidden", minHeight: "180px" }}>
                  <Image src="/images/espresso-pour.jpg" alt="Brewing" width={1600} height={1067} sizes="(max-width: 767px) 83vw, 23vw" className="w-full h-full object-cover" />
                </div>
                <div className="img-hover rounded-sm card-shadow flex-1" style={{ overflow: "hidden", minHeight: "180px" }}>
                  <Image src="/images/queso-fresco-ribbon.jpg" alt="Award-winning CannonBelles Queso Fresco" width={1024} height={1024} sizes="(max-width: 767px) 73vw, 20vw" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <div style={{ padding: "5rem 1.5rem", background: "#E5E5E5" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What People Are Saying</p>
            {" "}
            <h3 className="font-display text-3xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>Loved by the Community</h3>
          </div>
          {" "}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-sm card-shadow" style={{ padding: "1.75rem" }}>
              <div style={{ marginBottom: "1rem", color: "#D91E18" }}>★★★★★</div>
              {" "}
              <p className="font-display italic text-charcoal/80 leading-relaxed mb-5">"The cheese curds are the best I've ever had. Fresh, squeaky, and just perfect. A true Cannon Falls treasure."</p>
              {" "}
              <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.05em", color: "#2B2B2B" }}>Sarah M., Cannon Falls</p>
            </div>
            <div className="bg-white rounded-sm card-shadow" style={{ padding: "1.75rem" }}>
              <div style={{ marginBottom: "1rem", color: "#D91E18" }}>★★★★★</div>
              {" "}
              <p className="font-display italic text-charcoal/80 leading-relaxed mb-5">"We stop in every week. The coffee is always great and the staff feels like family. This is what a small-town shop should feel like."</p>
              {" "}
              <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.05em", color: "#2B2B2B" }}>Dave &amp; Linda K., Locals</p>
            </div>
            <div className="bg-white rounded-sm card-shadow" style={{ padding: "1.75rem" }}>
              <div style={{ marginBottom: "1rem", color: "#D91E18" }}>★★★★★</div>
              {" "}
              <p className="font-display italic text-charcoal/80 leading-relaxed mb-5">"I brought the aged cheddar to a dinner party and everyone wanted to know where it came from. Nothing like it in the cities."</p>
              {" "}
              <p style={{ fontSize: "0.75rem", fontWeight: "600", fontFamily: "'Inter',sans-serif", letterSpacing: "0.05em", color: "#2B2B2B" }}>Tom R., Northfield</p>
            </div>
          </div>
        </div>
      </div>
      {/* VISIT US */}
      <section id="visit" className="relative overflow-hidden noise" style={{ padding: "6rem 1.5rem", background: "#2B2B2B", scrollMarginTop: "88px", position: "relative" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 60%, rgba(217,30,24,0.12) 0%, transparent 50%), radial-gradient(ellipse at 85% 30%, rgba(122,92,62,0.12) 0%, transparent 50%)", pointerEvents: "none" }}></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.65)" }}>Come See Us</p>
              {" "}
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>Visit Us in<br /><em>Cannon Falls</em></h2>
              {" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", letterSpacing: "0.18em", textTransform: "uppercase" }}>Location</p>
                  </div>
                  {" "}
                  <p style={{ color: "white", fontWeight: "500", fontFamily: "'Inter',sans-serif", marginBottom: "0.25rem" }}>{ADDRESS_SHORT}</p>
                  {" "}
                  <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif" }}>Downtown Cannon Falls</p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", letterSpacing: "0.18em", textTransform: "uppercase" }}>Coffee Shop</p>
                  </div>
                  {" "}
                  <p style={{ color: "white", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", marginBottom: "0.2rem" }}>{hoursCompact(BUSINESS.hours[0])}</p>
                  {" "}
                  <p style={{ color: "white", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", marginBottom: "0.2rem" }}>{hoursCompact(BUSINESS.hours[1])}</p>
                  {" "}
                  <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif" }}>{hoursCompact(BUSINESS.hours[2])}</p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", letterSpacing: "0.18em", textTransform: "uppercase" }}>Our Cheese</p>
                  </div>
                  {" "}
                  <p style={{ color: "white", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", marginBottom: "0.2rem" }}>Full selection sold in the shop</p>
                  {" "}
                  <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif" }}>Same hours, 7 days a week</p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "3px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D91E18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.5 3.18 2 2 0 012.48 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.61a16 16 0 006.28 6.28l1.38-1.38a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                    <p style={{ fontSize: "0.6875rem", fontWeight: "600", color: "rgba(255,255,255,0.5)", fontFamily: "'Inter',sans-serif", letterSpacing: "0.18em", textTransform: "uppercase" }}>Contact</p>
                  </div>
                  {" "}
                  <p style={{ color: "white", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif", marginBottom: "0.2rem" }}>
                    <a href={TEL_HREF} style={{ color: "inherit", textDecoration: "none" }}>{BUSINESS.phone.display}</a>
                  </p>
                  {" "}
                  <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.875rem", fontFamily: "'Inter',sans-serif" }}>{BUSINESS.website}</p>
                </div>
              </div>
              {" "}
              <a href={ORDER_ONLINE_URL} target="_blank" rel="noopener" className="btn-primary">
                Order Online <ExternalIcon />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-sm overflow-hidden card-shadow" style={{ aspectRatio: "16/9", background: "#3A3A3A" }}>
                <iframe src={MAPS_EMBED_URL} title="Map to CannonBelles Coffee & Ice Cream" style={{ border: "0", width: "100%", height: "100%", display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
              </div>
              <div className="img-hover rounded-sm overflow-hidden card-shadow" style={{ aspectRatio: "16/9" }}>
                <Image src="/images/ice-cream-cone-sign.jpg" alt="Storefront" width={1500} height={1000} sizes="(max-width: 767px) 88vw, 43vw" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <HomeFooter />
    </div>
  );
}
