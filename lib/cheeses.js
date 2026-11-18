// CannonBelles cheese lineup, grouped by type for the Artisanal Cheese page.
// Sources: the CannonBelles Shopify store (product names and descriptions) and client notes (Nov 2026):
// Aged Cheddar is aged 12+ months; Gouda is plain (not smoked), aged 3+ months; curds are not made daily
// and are not fried; Grim Reaper Cheddar uses habanero, jalapeño, serrano, and Carolina Reaper peppers;
// Queso Fresco is the Signature Cheese.
// `shop` is the Shopify product handle (links to the online store); leave it off for in-shop-only cheeses.

const CDN = "https://cdn.shopify.com/s/files/1/0828/0545/7116/files";

export const SIGNATURE = {
  name: "Queso Fresco",
  shop: "queso-fresco-6oz",
  image: { src: "/images/queso-fresco-ribbon.jpg", width: 1024, height: 1024, alt: "CannonBelles Queso Fresco with its first-place ribbon" },
  desc: "A Spanish-style cheese with a smooth, solid texture and a mild, creamy flavor. It took first place in the Hispanic Cheese category at the 2017 American Cheese Society Awards, and it's the cheese in every grilled cheese at our coffee shop.",
};

export const CHEESE_GROUPS = [
  {
    id: "cheddars",
    title: "Cheddars",
    intro: "Our handcrafted cheddar, from classic and long-aged to bold, flavor-packed varieties.",
    image: { src: "/images/cheddar-board.jpg", width: 1600, height: 1066, alt: "CannonBelles Cheddar on a cutting board" },
    items: [
      { name: "Cheddar", note: "Rich and full-bodied with a smooth, creamy texture.", shop: "cheddar-6oz" },
      { name: "Aged Cheddar", note: "Aged more than 12 months for deeper, sharper flavor." },
      { name: "8-Year Cheddar", note: "A sharp white cheddar aged 8 years or more.", shop: "5-yr-cheddar-6oz" },
      { name: "Grim Reaper Cheddar", note: "A cheddar base with habanero, jalapeño, serrano, and Carolina Reaper peppers.", shop: "grim-reaper-cheddar-6oz", badge: "Award Winner" },
      { name: "Painted Desert Cheddar", note: "Southwest-inspired spices and colorful peppers.", shop: "painted-desert-cheddar-6-oz" },
      { name: "Tuscan Cheddar", note: "Italian herbs like basil, oregano, and sun-dried tomato.", shop: "tuscan-cheddar-6-oz" },
      { name: "Olive Cheddar", note: "A cheddar with a special story behind its name.", shop: "olive-cheddar-6oz" },
      { name: "Cranberry Cheddar", note: "Seasoned cranberries from Joe Mama, a local spice company. Seasonal.", shop: "cranberry-cheddar-6oz" },
      { name: "Red Wine Cheddar", note: "Made with red wine from Cannon River Winery.", shop: "red-wine-cheddar-6oz" },
      { name: "Rosé Wine Cheddar", note: "Made with Cannon River Winery's Reserve Rosé.", shop: "rose-wine-cheddar-6oz" },
      { name: "White Wine Cheddar", note: "Made with Cannon River Winery's Reserve White.", shop: "white-wine-cheddar-6oz" },
    ],
  },
  {
    id: "colbys",
    title: "Colbys",
    intro: "Smooth, mild, and buttery. A crowd-pleaser on any board or sandwich.",
    image: { src: "/images/colby.jpg", width: 1600, height: 1200, alt: "CannonBelles Colby" },
    items: [
      { name: "Colby", note: "Mild and slightly sweet with a melt-in-your-mouth texture.", shop: "colby-6-oz" },
      { name: "Colby-Cheddar", note: "The best of both, marbled together." },
      { name: "Bacon Colby", note: "Creamy Colby with real smoky bacon.", shop: "bacon-colby-6oz" },
      { name: "Caraway Colby", note: "Aromatic caraway seeds with warm, earthy notes.", shop: "caraway-colby-6oz" },
      { name: "Herb & Garlic Colby", note: "A fragrant mix of herbs and roasted garlic.", shop: "herb-and-garlic-colby-6oz" },
    ],
  },
  {
    id: "gouda",
    title: "Gouda",
    intro: "Creamy and mellow with a buttery texture and subtle nutty notes. Aged at least 3 months.",
    image: { src: "/images/gouda-rustic.jpg", width: 1600, height: 1065, alt: "CannonBelles Gouda" },
    items: [{ name: "Gouda", note: "Smooth and slightly sweet. Great for snacking or melting.", shop: "gouda-6oz" }],
  },
  {
    id: "curds",
    title: "Cheese Curds",
    intro: "Squeaky, fresh cheese curds, packaged for snacking on the go or using in your favorite recipes.",
    image: { src: "/images/dill-curds.jpg", width: 1600, height: 1066, alt: "CannonBelles dill cheese curds" },
    shop: "curds",
    flavors: ["Plain", "Bacon", "Dill", "Garlic", "Horseradish", "Jalapeño", "Ranch", "Grim Reaper"],
  },
  {
    id: "gift-boxes",
    title: "Gift Boxes",
    intro: "Ready-to-give boxes packed with CannonBelles cheese and local favorites.",
    image: { src: `${CDN}/FAF0D4AA-14A8-4F3E-98A2-C8F1873B6EE9.jpg`, width: 977, height: 968, alt: "CannonBelles Cheese Block gift box" },
    items: [
      { name: "Cheese Block Box", note: "Gouda, Olive Cheddar, Colby-Cheddar, and Queso Fresco with a cutting board.", shop: "christmas-cheese-box" },
      { name: "Curds & Queso Box", note: "Three bags of curds plus Queso Fresco.", shop: "curds-and-queso-gift-box" },
      { name: "Coffee Lover's Box", note: "A CannonBelles mug, Loon's Nest coffee, and more.", shop: "gift-box-coffee-box" },
      { name: "Brat Box", note: "Lorentz Meats brats made with our cheddar curds, plus plain and dill curds.", shop: "gift-box-brat-box" },
      { name: "Snack Pack", note: "Ferndale Market turkey cranberry sticks with plain and bacon curds.", shop: "gift-box-snack-pack" },
      { name: "Build Your Own Box", note: "A cow-print box you fill with your favorites.", shop: "christmas-box-build-your-own" },
    ],
  },
];

// Other places in Cannon Falls that carry CannonBelles cheese (from the client's Nov 2026 store list).
export const CANNON_FALLS_STOCKISTS = [
  { name: "Cannon River Winery", where: "421 Mill St W, downtown" },
  { name: "Tilion Brewing", where: "432 Mill St W, downtown" },
  { name: "Ferndale Market", where: "Just outside town" },
];
