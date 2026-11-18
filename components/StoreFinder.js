import StoreMap from "@/components/StoreMap";
import { STORE_TOWNS, STORE_COUNT } from "@/lib/stores";

// "Find Our Cheese Near You": the draggable map (StoreMap, client side) plus the same stores listed by city.
// The list is plain server-rendered HTML so it costs no JavaScript; its buttons are wired up inside StoreMap.
const HOME = "Cannon Falls";
const slug = (t) => `town-${t.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function StoreFinder() {
  return (
    <section id="stores" className="sf section-py-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Where to Buy</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>
            Find Our Cheese<br /><em>Near You</em>
          </h2>
          <p className="sf-lede">
            CannonBelles cheese is on the shelf at {STORE_COUNT} shops, markets, breweries, and restaurants in {STORE_TOWNS.length} towns.
            Drag the map to explore, or tap a pin to see the stores in that town.
          </p>
        </div>

        <StoreMap />

        <h3 className="sf-list-title font-display">Stores by City</h3>
        <div className="sf-list">
          {STORE_TOWNS.map((t) => (
            <div key={t.city} id={slug(t)} className={`sf-town${t.city === HOME ? " sf-town-home" : ""}`}>
              <button type="button" className="sf-town-btn" data-city={t.city} title={`Show ${t.city} on the map`}>
                <span className="sf-town-name">{t.city}</span>
                {t.state !== "MN" && <span className="sf-town-state">{t.state === "IA" ? "Iowa" : "Wisconsin"}</span>}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="sr-only"> (show on map)</span>
              </button>
              <ul>
                {t.stores.map((s) => <li key={s.name}>{s.name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
