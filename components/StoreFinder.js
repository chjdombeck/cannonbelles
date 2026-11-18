"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { STORE_TOWNS, STORE_COUNT } from "@/lib/stores";

// "Where to find our cheese": a draggable map with a pin per town, plus the same stores listed by city.
// Leaflet is only downloaded when the map scrolls near the screen, so it never slows the first page load.
const HOME = "Cannon Falls";
const slug = (t) => `town-${t.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

function popupHtml(t) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<div class="sf-pop"><p class="sf-pop-city">${esc(t.city)}, ${t.state}</p><ul>${t.stores
    .map((s) => `<li>${esc(s.name)}</li>`)
    .join("")}</ul></div>`;
}

export default function StoreFinder() {
  const mapEl = useRef(null);
  const mapRef = useRef(null);
  const markers = useRef({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = mapEl.current;
    if (!el) return;
    let cancelled = false;
    const load = async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || mapRef.current) return;
      const map = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: true, zoomSnap: 0.5 });
      mapRef.current = map;
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 16,
        minZoom: 5,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
      }).addTo(map);
      const pts = [];
      const small = window.innerWidth < 560; // smaller pins on phones, where metro towns sit close together
      const size = (home) => (home ? (small ? 26 : 30) : small ? 18 : 22);
      for (const t of STORE_TOWNS) {
        const home = t.city === HOME;
        const icon = L.divIcon({
          className: "",
          html: `<span class="sf-pin${home ? " sf-pin-home" : ""}">${t.stores.length > 1 ? t.stores.length : ""}</span>`,
          iconSize: [size(home), size(home)],
          iconAnchor: [size(home) / 2, size(home) / 2],
          popupAnchor: [0, -10],
        });
        const m = L.marker([t.lat, t.lng], { icon, title: `${t.city}: ${t.stores.length} ${t.stores.length === 1 ? "store" : "stores"}`, zIndexOffset: home ? 1000 : 0 })
          .bindPopup(popupHtml(t), { maxWidth: 260 })
          .addTo(map);
        markers.current[t.city] = m;
        pts.push([t.lat, t.lng]);
      }
      // Open on the core area around Cannon Falls (most stores); drag or zoom out for the far-off towns.
      const core = STORE_TOWNS.filter((t) => Math.abs(t.lat - 44.6) < 1.3 && Math.abs(t.lng + 93.3) < 1.6).map((t) => [t.lat, t.lng]);
      map.fitBounds(core.length ? core : pts, { padding: [20, 20] });
      // Scroll-wheel zoom only after someone clicks into the map, so it doesn't hijack page scrolling.
      map.on("click focus", () => map.scrollWheelZoom.enable());
      map.on("mouseout blur", () => map.scrollWheelZoom.disable());
      setReady(true);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); load(); }
    }, { rootMargin: "600px" });
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, []);

  const showOnMap = (t) => {
    const map = mapRef.current;
    if (!map) return;
    mapEl.current.scrollIntoView({ behavior: "smooth", block: "center" });
    map.flyTo([t.lat, t.lng], 11, { duration: 0.8 });
    map.once("moveend", () => markers.current[t.city]?.openPopup());
  };

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

        <div className="sf-map-wrap card-shadow">
          <div ref={mapEl} className="sf-map" role="region" aria-label="Map of stores that carry CannonBelles cheese" />
          {!ready && <p className="sf-map-loading">Loading map…</p>}
        </div>

        <h3 className="sf-list-title font-display">Stores by City</h3>
        <div className="sf-list">
          {STORE_TOWNS.map((t) => (
            <div key={t.city} id={slug(t)} className={`sf-town${t.city === HOME ? " sf-town-home" : ""}`}>
              <button type="button" className="sf-town-btn" onClick={() => showOnMap(t)} aria-label={`Show ${t.city} on the map`}>
                <span className="sf-town-name">{t.city}</span>
                {t.state !== "MN" && <span className="sf-town-state">{t.state === "IA" ? "Iowa" : "Wisconsin"}</span>}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
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
