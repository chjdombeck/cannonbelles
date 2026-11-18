import Image from "next/image";
import Link from "next/link";
import { SHOP_URL } from "@/lib/site";
import { SIGNATURE, CHEESE_GROUPS } from "@/lib/cheeses";

// Artisanal Cheese page: every CannonBelles cheese, grouped by type (data in lib/cheeses.js).
// Desktop: a grid of cards per type. Phones: each type is a swipeable row so the page stays a sensible length.
const shopHref = (handle) => `${SHOP_URL}/products/${handle}`;

function ShopLink({ handle, label = "Shop online" }) {
  if (!handle) return <span className="ch-instore">Available in our shop</span>;
  return (
    <a href={shopHref(handle)} target="_blank" rel="noopener" className="ch-shop">
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}

function CheeseCard({ item, wide }) {
  return (
    <article className={`ch-card${wide ? " ch-card-wide" : ""}`}>
      <div className="ch-img">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          sizes={wide ? "(max-width: 767px) 88vw, (max-width: 1023px) 45vw, 22vw" : "(max-width: 767px) 80vw, (max-width: 1023px) 45vw, (max-width: 1279px) 30vw, 300px"}
          className="w-full h-full object-cover"
        />
        {item.badge && <span className="ch-badge">{item.badge}</span>}
      </div>
      <div className="ch-body">
        <h4 className="ch-name font-display">{item.name}</h4>
        <p className="ch-desc">{item.desc}</p>
        {item.pairing && (
          <div className="ch-pair">
            <p className="ch-pair-label">Pair it with</p>
            <p className="ch-pair-text">{item.pairing}</p>
          </div>
        )}
        <div className="ch-foot"><ShopLink handle={item.shop} label={item.shop === "curds" ? "Shop curds" : undefined} /></div>
      </div>
    </article>
  );
}

export default function CheeseCatalog() {
  return (
    <div className="cat">
      {/* Signature cheese */}
      <div className="cat-signature card-shadow">
        <div className="cat-signature-img img-hover">
          <Image src={SIGNATURE.image.src} alt={SIGNATURE.image.alt} width={SIGNATURE.image.width} height={SIGNATURE.image.height} sizes="(max-width: 767px) 92vw, 50vw" className="w-full h-full object-cover" />
          <span className="cat-signature-tab">Signature Cheese</span>
        </div>
        <div className="cat-signature-body">
          <p className="section-label mb-2">Our Signature Cheese</p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-3" style={{ letterSpacing: "-0.03em" }}>{SIGNATURE.name}</h3>
          <p className="cat-text">{SIGNATURE.desc}</p>
          <div className="ch-pair" style={{ marginTop: "1.25rem" }}>
            <p className="ch-pair-label">Pair it with</p>
            <p className="ch-pair-text">{SIGNATURE.pairing}</p>
          </div>
          <a href={shopHref(SIGNATURE.shop)} target="_blank" rel="noopener" className="btn-primary" style={{ marginTop: "1.5rem" }}>Shop Queso Fresco <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      {/* Jump links */}
      <div className="cat-jump" role="navigation" aria-label="Cheese types">
        {CHEESE_GROUPS.map((g) => (
          <a key={g.id} href={`#${g.id}`} className="cat-jump-link">{g.title}</a>
        ))}
      </div>

      <div className="cat-groups">
        {CHEESE_GROUPS.map((g) => {
          const single = g.items.length === 1;
          return (
            <section key={g.id} id={g.id} className={`cat-group${single ? " cat-group-single" : ""}`} aria-labelledby={`${g.id}-title`}>
              <div className="cat-group-head">
                <div>
                  <h3 id={`${g.id}-title`} className="font-display">{g.title}</h3>
                  <p className="cat-group-intro">{g.intro}</p>
                </div>
                {!single && (
                  <span className="cat-count">
                    {g.items.length} {g.id === "curds" ? "flavors" : g.id === "gift-boxes" ? "boxes" : "varieties"}
                    <span className="cat-swipe" aria-hidden="true"> · swipe →</span>
                  </span>
                )}
              </div>
              <div className={single ? "ch-single" : `ch-grid${g.items.length % 5 === 0 ? " ch-grid-5" : ""}`}>
                {g.items.map((it) => <CheeseCard key={it.name} item={it} wide={single} />)}
              </div>
              {g.id === "gift-boxes" && (
                <p className="cat-fundraise">
                  Raising money for a school, team, or club? Our gift boxes make a great fundraiser.{" "}
                  <Link href="/fundraising" className="cat-fundraise-link">See how it works →</Link>
                </p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
