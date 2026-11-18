"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { STORE_TOWNS } from "@/lib/stores";

// The draggable store map (client side). The town list below it is plain server HTML (StoreFinder.js);
// its "show on map" buttons carry data-city and are handled here with one click listener.
// Leaflet is only downloaded when the map scrolls near the screen, so it never slows the first page load.
const HOME = "Cannon Falls";

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

    // "Show on map" buttons in the city list
    const onClick = (e) => {
      const btn = e.target.closest?.("[data-city]");
      if (!btn) return;
      const t = STORE_TOWNS.find((x) => x.city === btn.dataset.city);
      const map = mapRef.current;
      if (!t || !map) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      map.flyTo([t.lat, t.lng], 11, { duration: 0.8 });
      map.once("moveend", () => markers.current[t.city]?.openPopup());
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
    </div>
  );
}
