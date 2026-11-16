// Holiday gift boxes sold in the CannonBelles Shopify store.
// Names/descriptions are written for the website; price, photo, and availability come live
// from Shopify (refreshed hourly) and fall back to the values below if Shopify can't be reached.
import { SHOP_URL } from "./site";

const CDN = "https://cdn.shopify.com/s/files/1/0828/0545/7116/files";

export const GIFT_BOXES = [
  {
    handle: "christmas-cheese-box",
    name: "Cheese Block Box",
    desc: "Four 6 oz blocks (Gouda, Olive Cheddar, Colby-Cheddar, and Queso Fresco) with a cutting board.",
    price: 36,
    image: { src: `${CDN}/FAF0D4AA-14A8-4F3E-98A2-C8F1873B6EE9.jpg`, width: 977, height: 968 },
  },
  {
    handle: "curds-and-queso-gift-box",
    name: "Curds & Queso Box",
    desc: "Three 6 oz bags of cheese curds plus our award-winning Queso Fresco.",
    price: 30,
    image: { src: `${CDN}/BBF21599-0E7F-41F2-8261-E4F495077FC5.png`, width: 1086, height: 1448 },
  },
  {
    handle: "gift-box-coffee-box",
    name: "Coffee Lover's Box",
    desc: "A CannonBelles mug (personalize it for $5 more), Loon's Nest coffee beans, instant coffee sticks, car coasters, and a coffee squishy.",
    price: 30,
    image: { src: `${CDN}/D1E262E9-E291-4F8E-A9BD-61B59E2AB093.jpg`, width: 873, height: 850 },
  },
  {
    handle: "gift-box-brat-box",
    name: "Brat Box",
    desc: "A 4-pack of Lorentz Meats brats made with CannonBelles cheddar curds, plus plain and dill curds.",
    price: 25,
    image: { src: `${CDN}/1C763E3E-43A8-4C3E-B325-080F3DFE1A18.png`, width: 1087, height: 1446 },
  },
  {
    handle: "gift-box-snack-pack",
    name: "Snack Pack",
    desc: "Ferndale Market turkey cranberry sticks with plain and bacon cheese curds.",
    price: 23,
    image: { src: `${CDN}/A091CCB5-257F-404A-97E9-B230E5DB6C8D.png`, width: 1211, height: 1299 },
  },
  {
    handle: "christmas-box-build-your-own",
    name: "Build Your Own Box",
    desc: "Start with our cow-print gift box and red fluff, then fill it with your favorite CannonBelles cheeses.",
    price: 5,
    priceNote: "box",
    image: { src: "/images/cheese-flatlay.jpg", width: 1600, height: 1066 },
  },
];

const productUrl = (handle) => `${SHOP_URL}/products/${handle}`;

export async function getGiftBoxes() {
  const live = {};
  try {
    const res = await fetch(`${SHOP_URL}/products.json?limit=250`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const { products } = await res.json();
      for (const p of products || []) live[p.handle] = p;
    }
  } catch {
    // Shopify unreachable: use the saved values below.
  }
  return GIFT_BOXES.map((g) => {
    const p = live[g.handle];
    const img = p?.images?.[0];
    return {
      ...g,
      url: productUrl(g.handle),
      price: p ? Math.min(...p.variants.map((v) => Number(v.price))) : g.price,
      available: p ? p.variants.some((v) => v.available) : true,
      // Only use Shopify's photo when the product has one (Build Your Own uses a site photo).
      image: img && g.image.src.startsWith("https://") ? { src: img.src.split("?")[0], width: img.width, height: img.height } : g.image,
    };
  });
}
