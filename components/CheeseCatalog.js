import Image from "next/image";
import { SHOP_URL } from "@/lib/site";
import { SIGNATURE, CHEESE_GROUPS } from "@/lib/cheeses";

// Artisanal Cheese page: every CannonBelles cheese, grouped by type (data in lib/cheeses.js).
const shopHref = (handle) => `${SHOP_URL}/products/${handle}`;

function ShopLink({ handle, label = "Shop" }) {
  if (!handle) return <span className="cat-instore">In our shop</span>;
  return (
    <a href={shopHref(handle)} target="_blank" rel="noopener" className="cat-shop">
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function CheeseCatalog() {
  return (
    <div className="cat">
      {/* Signature cheese */}
      <div className="cat-signature card-shadow">
        <div className="cat-signature-img img-hover">
          <Image src={SIGNATURE.image.src} alt={SIGNATURE.image.alt} width={SIGNATURE.image.width} height={SIGNATURE.image.height} sizes="(max-width: 767px) 92vw, 40vw" className="w-full h-full object-cover" />
          <span className="cat-signature-tab">Signature Cheese</span>
        </div>
        <div className="cat-signature-body">
          <p className="section-label mb-2">Our Signature Cheese</p>
          <h3 className="font-display text-3xl font-bold text-charcoal mb-3" style={{ letterSpacing: "-0.02em" }}>{SIGNATURE.name}</h3>
          <p className="cat-text">{SIGNATURE.desc}</p>
          <a href={shopHref(SIGNATURE.shop)} target="_blank" rel="noopener" className="btn-primary" style={{ marginTop: "1.5rem" }}>Shop Queso Fresco <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      {/* Jump links */}
      <div className="cat-jump" role="navigation" aria-label="Cheese types">
        {CHEESE_GROUPS.map((g) => (
          <a key={g.id} href={`#${g.id}`} className="cat-jump-link">{g.title}</a>
        ))}
      </div>

      {CHEESE_GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="cat-group card-shadow">
          <div className="cat-group-img img-hover">
            <Image src={g.image.src} alt={g.image.alt} width={g.image.width} height={g.image.height} sizes="(max-width: 767px) 92vw, 30vw" className="w-full h-full object-cover" style={g.image.position ? { objectPosition: g.image.position } : undefined} />
          </div>
          <div className="cat-group-body">
            <div className="cat-group-head">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>{g.title}</h3>
              {g.items && <span className="cat-count">{g.items.length} {g.items.length === 1 ? "variety" : "varieties"}</span>}
            </div>
            <p className="cat-text">{g.intro}</p>

            {g.flavors && (
              <>
                <p className="cat-subhead">{g.flavors.length} Flavors</p>
                <div className="cat-chips">
                  {g.flavors.map((f) => <span key={f} className="cat-chip">{f}</span>)}
                </div>
                <div style={{ marginTop: "1.25rem" }}><ShopLink handle={g.shop} label="Shop Cheese Curds" /></div>
              </>
            )}

            {g.items && (
              <ul className="cat-list">
                {g.items.map((it) => (
                  <li key={it.name} className="cat-item">
                    <div>
                      <p className="cat-item-name">
                        {it.name}
                        {it.badge && <span className="cat-badge">{it.badge}</span>}
                      </p>
                      <p className="cat-item-note">{it.note}</p>
                    </div>
                    <ShopLink handle={it.shop} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
