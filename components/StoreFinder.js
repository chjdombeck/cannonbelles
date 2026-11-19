import StoreMap from "@/components/StoreMap";
import { STORE_TOWNS, STORE_COUNT, SCHOOL_TOWNS, SCHOOL_COUNT, DISTRIBUTORS, ALL_TOWNS } from "@/lib/stores";

// "Find Our Cheese Near You": the draggable map (StoreMap, client side), highlighted Schools and Distributors
// panels, and every town listed by city. The lists are plain server-rendered HTML (no JavaScript cost);
// their "show on map" buttons are wired up inside StoreMap.
const HOME = "Cannon Falls";
const slug = (t) => `town-${t.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const CapIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>
);
const TruckIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 4h14v11H1zM15 8h4l3 3v4h-7z" /><circle cx="5.5" cy="17.5" r="1.8" /><circle cx="18.5" cy="17.5" r="1.8" /></svg>
);

export default function StoreFinder() {
  const schools = SCHOOL_TOWNS.flatMap((t) => t.schools.map((name) => ({ name, city: t.city })))
    .sort((a, b) => a.name.localeCompare(b.name) || a.city.localeCompare(b.city));

  return (
    <section id="stores" className="sf section-py-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Where to Buy</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-5" style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}>
            Find Our Cheese<br /><em>Near You</em>
          </h2>
          <p className="sf-lede">
            CannonBelles cheese is on the shelf at {STORE_COUNT} shops, markets, breweries, and restaurants in {STORE_TOWNS.length} towns,
            on the lunch tray at {SCHOOL_COUNT} schools, and carried by {DISTRIBUTORS.length} distributors.
            Drag the map to explore, or tap a pin to see who carries it.
          </p>
        </div>

        <StoreMap />

        <div className="sf-extra">
          {/* Schools (gold) */}
          <div className="sf-schools">
            <div className="sf-schools-head">
              <span className="sf-schools-icon"><CapIcon /></span>
              <div>
                <h3 className="font-display sf-schools-title">In Schools Too</h3>
                <p className="sf-schools-sub">Proud to serve local cheese to students at {SCHOOL_COUNT} schools and programs.</p>
              </div>
            </div>
            <ul className="sf-schools-list">
              {schools.map((x) => (
                <li key={x.name + x.city}>
                  <button type="button" className="sf-school" data-school-city={x.city} title={`Show ${x.name} on the map`}>
                    <span className="sf-school-name">{x.name}</span>
                    <span className="sf-school-city">{x.city}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Distributors (brown) */}
          <div className="sf-dists">
            <div className="sf-schools-head">
              <span className="sf-dists-icon"><TruckIcon /></span>
              <div>
                <h3 className="font-display sf-schools-title">Our Distributors</h3>
                <p className="sf-schools-sub">Wholesale partners who carry CannonBelles cheese.</p>
              </div>
            </div>
            <ul className="sf-dists-list">
              {DISTRIBUTORS.map((d) => (
                <li key={d.name}>
                  <button type="button" className="sf-dist" data-dist={d.name} title={`Show ${d.name} on the map`}>
                    <span className="sf-school-name">{d.name}</span>
                    <span className="sf-school-city">{d.city}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="sf-list-title font-display">Where to Find Us, by City</h3>
        <div className="sf-list">
          {ALL_TOWNS.map((t) => (
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
                {t.stores.map((s) => (
                  <li key={s}>
                    {s}
                    {t.distributors.includes(s) && <span className="sf-tag sf-tag-dist">Distributor</span>}
                  </li>
                ))}
                {t.distributors.filter((d) => !t.stores.includes(d)).map((d) => (
                  <li key={d}>{d}<span className="sf-tag sf-tag-dist">Distributor</span></li>
                ))}
                {t.schools.map((s) => (
                  <li key={s}>{s}<span className="sf-tag sf-tag-school">School</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
