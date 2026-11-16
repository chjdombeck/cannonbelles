import Image from "next/image";
import { HOLIDAY, SHOP_ALL_URL } from "@/lib/site";
import { getGiftBoxes } from "@/lib/gifts";
import ExternalIcon from "@/components/ExternalIcon";

// Home page "Holiday Shop" section: gift boxes from the CannonBelles Shopify store.
export default async function GiftBoxes() {
  if (!HOLIDAY.enabled) return null;
  const boxes = await getGiftBoxes();
  return (
    <section id="gifts" className="gifts-section">
      <div className="gifts-glow" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="gifts-head">
          <p className="gifts-label">🎁 The Holiday Shop</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>
            Give the Gift of<br /><em>Minnesota Cheese</em>
          </h2>
          <p className="gifts-intro">Handcrafted in Cannon Falls and packed with local favorites. Order online and share a little CannonBelles this season.</p>
        </div>

        <div className="gifts-track" role="list">
          {boxes.map((b) => (
            <a key={b.handle} href={b.url} target="_blank" rel="noopener" className="gift-card" role="listitem">
              <div className="gift-card-img">
                <Image src={b.image.src} alt={b.name} width={b.image.width} height={b.image.height} sizes="(max-width: 767px) 78vw, (max-width: 1023px) 45vw, 380px" className="w-full h-full object-cover" />
                {!b.available && <span className="gift-soldout">Sold out</span>}
              </div>
              <div className="gift-card-body">
                <div className="gift-card-top">
                  <h3 className="font-display text-xl font-bold text-charcoal" style={{ letterSpacing: "-0.02em" }}>{b.name}</h3>
                  <p className="gift-price">${b.price}{b.priceNote ? <span> {b.priceNote}</span> : null}</p>
                </div>
                <p className="gift-desc">{b.desc}</p>
                <span className="gift-cta">Shop this box <ExternalIcon /></span>
              </div>
            </a>
          ))}
        </div>

        <div className="gifts-foot">
          <a href={SHOP_ALL_URL} target="_blank" rel="noopener" className="btn-primary">Shop All Cheese Online <ExternalIcon /></a>
        </div>
      </div>
    </section>
  );
}
