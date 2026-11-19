"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { STORE_TOWNS, SCHOOL_TOWNS, DISTRIBUTORS } from "@/lib/stores";

// The draggable store map (client side). The town list below it is plain server HTML (StoreFinder.js);
// its "show on map" buttons carry data-city and are handled here with one click listener.
// Leaflet is only downloaded when the map scrolls near the screen, so it never slows the first page load.
const HOME = "Cannon Falls";

const SCHOOL_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>';

const TRUCK_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 4h14v11H1zM15 8h4l3 3v4h-7z"/><circle cx="5.5" cy="17.5" r="1.8"/><circle cx="18.5" cy="17.5" r="1.8"/></svg>';

function distPopupHtml(d) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<div class="sf-pop sf-pop-dist"><p class="sf-pop-kicker">Distributor</p><p class="sf-pop-city">${esc(d.name)}</p><ul><li>${esc(d.city)}, ${d.state}</li></ul></div>`;
}

function schoolPopupHtml(t) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<div class="sf-pop sf-pop-school"><p class="sf-pop-kicker">Schools</p><p class="sf-pop-city">${esc(t.city)}, ${t.state}</p><ul>${t.schools
    .map((s) => `<li>${esc(s)}</li>`)
    .join("")}</ul></div>`;
}

function popupHtml(t) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<div class="sf-pop"><p class="sf-pop-city">${esc(t.city)}, ${t.state}</p><ul>${t.stores
    .map((s) => `<li>${esc(s.name)}</li>`)
    .join("")}</ul></div>`;
}

export default function StoreMap() {
  const mapEl = useRef(null);
  const mapRef = useRef(null);
  const markers = useRef({});
  const schoolMarkers = useRef({});
  const distMarkers = useRef({});
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
      // Schools: gold pins, nudged up and to the right so they never hide a store pin in the same town
      const ss = small ? 22 : 26;
      for (const t of SCHOOL_TOWNS) {
        const icon = L.divIcon({ className: "", html: `<span class="sf-pin sf-pin-school">${SCHOOL_ICON}</span>`, iconSize: [ss, ss], iconAnchor: [ss / 2 - 13, ss / 2 + 11], popupAnchor: [13, -20] });
        const m = L.marker([t.lat, t.lng], { icon, title: `${t.city}: ${t.schools.join(", ")}`, zIndexOffset: 500 })
          .bindPopup(schoolPopupHtml(t), { maxWidth: 260 })
          .addTo(map);
        schoolMarkers.current[t.city] = m;
        pts.push([t.lat, t.lng]);
      }
      // Distributors: brown pins, nudged down and to the right
      for (const d of DISTRIBUTORS) {
        const icon = L.divIcon({ className: "", html: `<span class="sf-pin sf-pin-dist">${TRUCK_ICON}</span>`, iconSize: [ss, ss], iconAnchor: [ss / 2 - 13, ss / 2 - 13], popupAnchor: [13, 0] });
        distMarkers.current[d.name] = L.marker([d.lat, d.lng], { icon, title: `${d.name} (distributor), ${d.city}`, zIndexOffset: 400 })
          .bindPopup(distPopupHtml(d), { maxWidth: 240 })
          .addTo(map);
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

    // "Show on map" buttons in the city list
    const onClick = (e) => {
      const btn = e.target.closest?.("[data-city], [data-school-city], [data-dist]");
      if (!btn) return;
      const { city, schoolCity, dist } = btn.dataset;
      const t = dist ? DISTRIBUTORS.find((x) => x.name === dist)
        : schoolCity ? SCHOOL_TOWNS.find((x) => x.city === schoolCity)
        : STORE_TOWNS.find((x) => x.city === city) || SCHOOL_TOWNS.find((x) => x.city === city) || DISTRIBUTORS.find((x) => x.city === city);
      const map = mapRef.current;
      if (!t || !map) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      map.flyTo([t.lat, t.lng], 11, { duration: 0.8 });
      const marker = dist ? distMarkers.current[dist] : schoolCity ? schoolMarkers.current[schoolCity] : markers.current[city] || schoolMarkers.current[city] || Object.values(distMarkers.current).find((m) => m.options.title.endsWith(city));
      map.once("moveend", () => marker?.openPopup());
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelled = true;
      io.disconnect();
      document.removeEventListener("click", onClick);
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, []);

  return (
    <div className="sf-map-wrap card-shadow">
      <div ref={mapEl} className="sf-map" role="region" aria-label="Map of stores that carry CannonBelles cheese" />
      {!ready && <p className="sf-map-loading">Loading map…</p>}
      <div className="sf-legend" aria-hidden="true">
        <span><i className="sf-legend-dot" /> Stores</span>
        <span><i className="sf-legend-dot sf-legend-school" /> Schools</span>
        <span><i className="sf-legend-dot sf-legend-dist" /> Distributors</span>
      </div>
    </div>
  );
}
