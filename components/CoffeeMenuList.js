import { MENU_SECTIONS } from "@/lib/menu";

// Coffee page preview list. Names and descriptions come from the official menu (lib/menu.js),
// so the Coffee & Ice Cream page always matches the Menu page.
const ITEMS = Object.fromEntries(
  MENU_SECTIONS.flatMap((s) => [...(s.items || []), ...(s.groups || []).flatMap((g) => g.items)]).map((it) => [it.name, it])
);

const nameStyle = { fontWeight: "600", fontFamily: "'Inter',sans-serif", fontSize: "0.9375rem", color: "#2B2B2B" };
const descStyle = { fontSize: "0.8125rem", color: "rgba(43,43,43,0.72)", fontFamily: "'Inter',sans-serif", marginTop: "0.15rem" };

export default function CoffeeMenuList({ names }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {names.map((name) => {
        const it = ITEMS[name];
        if (!it) throw new Error(`"${name}" is not on the official menu (lib/menu.js)`);
        return (
          <div key={name} className="menu-item">
            <div>
              <p style={nameStyle}>{it.name}</p>
              {it.desc && <p style={descStyle}>{it.desc}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
