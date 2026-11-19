// Fundraising page content, from the client's "2026 gift box fundraising packet" (PDF in the project folder).
// No prices on the site (client request): organizations contact Kathy for pricing.

const CDN = "https://cdn.shopify.com/s/files/1/0828/0545/7116/files";

export const FUND_BOXES = [
  {
    name: "Cheese Box",
    image: { src: `${CDN}/FAF0D4AA-14A8-4F3E-98A2-C8F1873B6EE9.jpg`, width: 977, height: 968, alt: "CannonBelles Cheese Box" },
    contents: ["6oz Gouda", "6oz Olive Cheddar", "6oz Colby-Cheddar", "6oz Queso Fresco", "Cheese board"],
  },
  {
    name: "Curds & Queso Box",
    image: { src: `${CDN}/BBF21599-0E7F-41F2-8261-E4F495077FC5.png`, width: 1086, height: 1448, alt: "CannonBelles Curds & Queso Box" },
    contents: ["6oz Plain Cheese Curds", "6oz Ranch Cheese Curds", "6oz Jalapeño Cheese Curds (mild)", "6oz Queso Fresco"],
  },
  {
    name: "Brat Box",
    image: { src: `${CDN}/1C763E3E-43A8-4C3E-B325-080F3DFE1A18.png`, width: 1087, height: 1446, alt: "CannonBelles Brat Box" },
    contents: ["4-count Cheddar Brats", "6oz Plain Cheese Curds", "6oz Dill Cheese Curds"],
  },
  {
    name: "Snack Pack",
    image: { src: `${CDN}/A091CCB5-257F-404A-97E9-B230E5DB6C8D.png`, width: 1211, height: 1299, alt: "CannonBelles Snack Pack" },
    contents: ["Ferndale Market Cranberry Turkey Sticks", "6oz Plain Cheese Curds", "6oz Bacon Cheese Curds"],
  },
  {
    name: "Coffee Box",
    badge: "New this year",
    image: { src: `${CDN}/D1E262E9-E291-4F8E-A9BD-61B59E2AB093.jpg`, width: 873, height: 850, alt: "CannonBelles Coffee Box" },
    contents: ["CannonBelles coffee mug with your organization's logo on the back", "Loon's Nest coffee beans", "2 Loon's Nest instant coffee sticks", "2 car coasters", "Coffee squishy"],
    noFridge: true,
  },
];

