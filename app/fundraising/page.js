import Image from "next/image";
import Link from "next/link";
import SubpageNav from "@/components/SubpageNav";
import SubpageFooter from "@/components/SubpageFooter";
import { FUNDRAISING } from "@/lib/site";
import { FUND_BOXES, MARKUPS, money } from "@/lib/fundraising";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/fundraising",
  title: "Fundraising with CannonBelles Cheese | Cannon Falls, MN",
  description:
    "Raise money for your school, team, or organization with award-winning CannonBelles cheese gift boxes, handcrafted in Cannon Falls, MN. See the boxes, how it works, and potential profits.",
});

const MAILTO = `mailto:${FUNDRAISING.email}?subject=${encodeURIComponent("CannonBelles fundraiser")}`;
const TEL = `tel:${FUNDRAISING.phone.tel}`;
const PACKET = "/fundraising/CannonBelles-Fundraising-Packet-2026.pdf";

const WHY = [
  { icon: "award", title: "Award-Winning Cheese", text: "Our cheeses have won top honors at international and state competitions." },
  { icon: "farm", title: "Locally Made", text: "Made with fresh, local milk from Square Deal Dairy, a fifth-generation family farm in Randolph, MN." },
  { icon: "gift", title: "Loved by Food Lovers", text: "Cheese boxes are perfect for holiday gifts, celebrations, or everyday enjoyment." },
  { icon: "mug", title: "New: Your Logo on a Mug", text: "Our new Coffee Box can include your organization's logo on the coffee mug." },
];

const ICONS = {
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" /></>,
  farm: <><path d="M3 21V10l9-6 9 6v11" /><path d="M9 21v-6h6v6" /><path d="M3 21h18" /></>,
  gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13M5 12v9h14v-9" /><path d="M7.5 8a2.5 2.5 0 010-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 010 5" /></>,
  mug: <><path d="M17 8h1a4 4 0 010 8h-1" /><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" /><path d="M6 2v2M10 2v2M14 2v2" /></>,
};

function Icon({ name }) {
  return (
    <span className="fund-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[name]}</svg>
    </span>
  );
}

const STEPS = [
  {
    title: "Partner with us",
    body: "We make it easy by providing printable sale flyers and order sheets. Choose how you'd like to receive your final order:",
    options: [
      { label: "Option 1", text: "Each gift box arrives assembled, packed, labeled, and ready to go." },
      { label: "Option 2", text: "Your organization assembles the boxes (box, label, fluff, cheese, and so on). It's easier for storing the cheese, and you can add your own twist." },
    ],
  },
  { title: "Raise funds", body: "Your organization sets its own selling prices (see the profit chart below). You'll get the sales flyer and order form as editable electronic files." },
  { title: "Place your final order", body: <>Email <a href={MAILTO} className="fund-link">{FUNDRAISING.email}</a> with your order at least {FUNDRAISING.leadWeeks} weeks before your preferred delivery date.</> },
  { title: "Delivery", body: "Once your final order is placed, we'll schedule your delivery date. Every box except the Coffee Box must be refrigerated, but not frozen." },
  { title: "Payment", body: `CannonBelles invoices your organization at delivery, with a ${FUNDRAISING.paymentDays}-day payment period.` },
];

export default function FundraisingPage() {
  return (
    <div className="pg-story pg-fund">
      <SubpageNav current="/fundraising" />

      {/* HERO */}
      <div className="fund-hero relative overflow-hidden">
        <Image src="/images/hero-fundraising.jpg" alt="Award-winning CannonBelles Grim Reaper Cheddar with its 2024 American Cheese Society medal" width={2390} height={1792} sizes="(max-width: 767px) 240vw, 100vw" priority fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.5) saturate(0.9)", objectPosition: "62% 55%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.1) 100%), linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 45%, transparent 70%)" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-4" style={{ color: "rgba(239,230,216,0.85)" }}>Schools · Teams · Clubs · Churches</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5" style={{ letterSpacing: "-0.035em", lineHeight: "1.05" }}>Fundraise with<br /><em>CannonBelles Cheese</em></h1>
            <p className="fund-hero-text">CannonBelles Cheese is a women-owned artisan cheese business in Cannon Falls, MN. Our gift boxes make an easy, delicious fundraiser that people are happy to buy.</p>
            <div className="fund-hero-ctas">
              <a href={MAILTO} className="btn-primary">Start a Fundraiser</a>
              <a href={PACKET} target="_blank" rel="noopener" className="fund-btn-ghost">Download the Packet (PDF)</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#D91E18", padding: "0.75rem 1.5rem", textAlign: "center" }}>
        <p className="ribbon" style={{ color: "white", fontFamily: "'Inter',sans-serif", fontSize: "0.6875rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase" }}><span>Women-Owned&nbsp;·</span>{" "}<span>Award-Winning&nbsp;·</span>{" "}<span>Made in Cannon Falls</span></p>
      </div>

      {/* WHY */}
      <section className="fund-section" style={{ background: "#F8F5F0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="fund-head">
            <p className="section-label mb-3">Why CannonBelles</p>
            <h2 className="fund-h2 font-display">Why Choose Us for<br /><em>Your Fundraiser?</em></h2>
          </div>
          <div className="fund-why">
            {WHY.map((w) => (
              <div key={w.title} className="fund-why-card">
                <Icon name={w.icon} />
                <h3 className="font-display">{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <p className="fund-note">
            Want your logo on the Coffee Box mug? Email it to <a href={`mailto:${FUNDRAISING.logoEmail}`} className="fund-link">{FUNDRAISING.logoEmail}</a> as soon as possible.
          </p>
        </div>
      </section>

      {/* BOXES */}
      <section id="boxes" className="fund-section" style={{ background: "#EFE6D8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="fund-head">
            <p className="section-label mb-3">Locally Made in Cannon Falls</p>
            <h2 className="fund-h2 font-display">The Gift<br /><em>Boxes</em></h2>
          </div>
          <div className="fund-boxes">
            {FUND_BOXES.map((b) => (
              <article key={b.name} className="fund-box">
                <div className="fund-box-img">
                  <Image src={b.image.src} alt={b.image.alt} width={b.image.width} height={b.image.height} sizes="(max-width: 639px) 88vw, (max-width: 1023px) 44vw, 240px" className="w-full h-full object-cover" />
                  {b.badge && <span className="fund-badge">{b.badge}</span>}
                </div>
                <div className="fund-box-body">
                  <h3 className="font-display">{b.name}</h3>
                  <ul>{b.contents.map((c) => <li key={c}>{c}</li>)}</ul>
                  <p className={`fund-fridge${b.noFridge ? " fund-fridge-no" : ""}`}>{b.noFridge ? "No refrigeration needed" : "Keep refrigerated, not frozen"}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="fund-section" style={{ background: "#F8F5F0" }}>
        <div className="max-w-4xl mx-auto">
          <div className="fund-head">
            <p className="section-label mb-3">Simple from Start to Finish</p>
            <h2 className="fund-h2 font-display">How It<br /><em>Works</em></h2>
          </div>
          <ol className="fund-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="fund-step">
                <span className="fund-step-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3 className="font-display">{s.title}</h3>
                  <p>{s.body}</p>
                  {s.options && (
                    <div className="fund-options">
                      {s.options.map((o) => (
                        <div key={o.label} className="fund-option"><p className="fund-option-label">{o.label}</p><p>{o.text}</p></div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROFITS */}
      <section id="profits" className="fund-section" style={{ background: "#EFE6D8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="fund-head">
            <p className="section-label mb-3">You Set the Price</p>
            <h2 className="fund-h2 font-display">Potential<br /><em>Profits</em></h2>
            <p className="fund-lede">Your cost per box, with example selling prices and what your organization makes on each box.</p>
          </div>

          {/* table (tablet and up) */}
          <div className="fund-table-wrap card-shadow">
            <table className="fund-table">
              <thead>
                <tr>
                  <th rowSpan={2} scope="col" className="fund-th-box">Gift Box</th>
                  <th rowSpan={2} scope="col">Your Cost</th>
                  {MARKUPS.map((m, i) => <th key={m} colSpan={2} scope="colgroup" className={`fund-tier fund-tier-${i}`}>{m} markup</th>)}
                </tr>
                <tr>
                  {MARKUPS.map((m, i) => (
                    <FragmentCells key={m} i={i} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {FUND_BOXES.map((b) => (
                  <tr key={b.name}>
                    <th scope="row" className="fund-th-box">{b.name}</th>
                    <td>{money(b.cost)}</td>
                    {b.tiers.map((p, i) => (
                      <TierCells key={i} i={i} price={p} make={p - b.cost} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* cards (phones) */}
          <div className="fund-profit-cards">
            {FUND_BOXES.map((b) => (
              <div key={b.name} className="fund-profit-card">
                <div className="fund-profit-top"><h3 className="font-display">{b.name}</h3><p>Your cost <strong>{money(b.cost)}</strong></p></div>
                <div className="fund-profit-tiers">
                  {b.tiers.map((p, i) => (
                    <div key={i} className={`fund-profit-tier fund-tier-${i}`}>
                      <p className="fund-profit-mk">{MARKUPS[i]}</p>
                      <p>Sell <strong>${p}</strong></p>
                      <p className="fund-profit-make">Make {money(p - b.cost)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="fund-note">Prices are per box for the 2026 season. Your organization chooses its own selling price.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="fund-cta">
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="section-label mb-3" style={{ color: "rgba(239,230,216,0.75)" }}>Questions? Ready to Start?</p>
          <h2 className="fund-h2 font-display text-white">Let&apos;s Plan<br /><em>Your Fundraiser</em></h2>
          <p className="fund-cta-text">Contact {FUNDRAISING.contact}, co-owner of CannonBelles, and we&apos;ll get you set up with flyers and order forms.</p>
          <div className="fund-cta-row">
            <a href={MAILTO} className="btn-primary">Email {FUNDRAISING.contact.split(" ")[0]}</a>
            <a href={TEL} className="fund-btn-ghost">Call {FUNDRAISING.phone.display}</a>
          </div>
          <p className="fund-cta-small">
            {FUNDRAISING.email} · <a href={PACKET} target="_blank" rel="noopener" className="fund-link-light">Fundraising packet &amp; order form (PDF)</a> · <Link href="/cheese" className="fund-link-light">Meet our cheeses</Link>
          </p>
        </div>
      </section>

      <SubpageFooter current="/fundraising" />
    </div>
  );
}

function FragmentCells({ i }) {
  return (
    <>
      <th scope="col" className={`fund-sub fund-tier-${i}`}>Sell Price</th>
      <th scope="col" className={`fund-sub fund-tier-${i}`}>You Make</th>
    </>
  );
}

function TierCells({ i, price, make }) {
  return (
    <>
      <td className={`fund-tier-${i}`}>${price}</td>
      <td className={`fund-tier-${i} fund-make`}>{money(make)}</td>
    </>
  );
}
