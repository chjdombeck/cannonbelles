// Single source of truth for CannonBelles business info.
// Update hours, phone, or address here and every page updates.

export const BUSINESS = {
  name: "CannonBelles Coffee & Ice Cream",
  address: {
    street: "402 Mill St W",
    city: "Cannon Falls",
    state: "MN",
    zip: "55009",
  },
  phone: { display: "(507) 757-1155", tel: "+15077571155" },
  website: "cannonbelles.com",
  // Opening hours, matching the Google Business listing.
  // `pad` keeps the times visually aligned in the coffee/cheese "Hours" lists.
  hours: [
    { short: "Mon – Fri", long: "Mon – Fri", open: "6:00am", close: "5:00pm", pad: 1, schema: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { short: "Sat", long: "Saturday", open: "7:00am", close: "5:00pm", pad: 1, schema: ["Saturday"] },
    { short: "Sun", long: "Sunday", open: "11:00am", close: "5:00pm", pad: 3, schema: ["Sunday"] },
  ],
};

const mapsQuery = `CannonBelles Coffee & Ice Cream, ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sCannonBelles+Coffee+%26+Ice+Cream,+402+Mill+St+W,+Cannon+Falls,+MN+55009";

// "6:00am" -> "6am" (used where the design shows compact times)
export const shortTime = (t) => t.replace(":00", "");

const NBSP = " ";
// "Mon – Fri: 6am – 5pm" (home page)
export const hoursCompact = (h) => `${h.short}: ${shortTime(h.open)} – ${shortTime(h.close)}`;
// "Mon – Fri:  6:00am – 5:00pm" (coffee & cheese pages; non-breaking spaces align the times)
export const hoursAligned = (h) => `${h.long}: ${NBSP.repeat(h.pad)}${h.open} – ${h.close}`;

const { street, city, state, zip } = BUSINESS.address;
export const ADDRESS_SHORT = `${street}, ${city}, ${state}`;
export const ADDRESS_FULL = `${street}, ${city}, ${state} ${zip}`;
export const TEL_HREF = `tel:${BUSINESS.phone.tel}`;

// Sub-pages, in the order they appear in navigation.
export const PAGES = [
  { href: "/coffee", label: "Coffee & Ice Cream" },
  { href: "/menu", label: "Menu" },
  { href: "/cheese", label: "Artisanal Cheese" },
  { href: "/story", label: "Our Story" },
];

export const COPYRIGHT_YEAR = 2026;
