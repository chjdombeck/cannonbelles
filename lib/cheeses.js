// CannonBelles cheese lineup for the Artisanal Cheese page, grouped by type.
// Source: the client's "CannonBelles Cheese Descriptions" doc and flavor list (Nov 2026), plus client notes:
// Gouda is plain (not smoked) and aged 3+ months; curds are not made daily and are not fried;
// Grim Reaper Cheddar uses habanero, jalapeño, serrano, and Carolina Reaper peppers; Queso Fresco is the Signature Cheese.
// Photos are the client's "CB ..." product shots, saved in public/images/cheese/.
// `shop` is the Shopify product handle (links to the online store); leave it off for in-shop-only items.

const CDN = "https://cdn.shopify.com/s/files/1/0828/0545/7116/files";
const img = (slug, width, height, alt) => ({ src: `/images/cheese/${slug}.jpg`, width, height, alt });

export const SIGNATURE = {
  name: "Queso Fresco",
  shop: "queso-fresco-6oz",
  image: { src: "/images/queso-fresco-ribbon.jpg", width: 1024, height: 1024, alt: "CannonBelles Queso Fresco with its first-place ribbon" },
  desc: "A Spanish-style cheese with a smooth, solid texture and a mild, creamy flavor, handcrafted with high-quality local milk. It took first place in the Hispanic Cheese category at the 2017 American Cheese Society competition, and it's the star of every grilled cheese at our coffee shop.",
  pairing: "Slice for sandwiches, melt into omelets, or serve with olives, roasted vegetables, or fresh fruit. Lovely with a crisp Albariño, a light beer, or sparkling water with lime.",
};

export const CHEESE_GROUPS = [
  {
    id: "cheddars",
    title: "Cheddars",
    intro: "Small-batch cheddar made with local milk, from classic and long-aged to bold, flavor-packed varieties.",
    items: [
      {
        name: "Cheddar", shop: "cheddar-6oz", image: img("cheddar", 1600, 1066, "CannonBelles Cheddar on a cutting board"),
        desc: "Aged to develop a rich, full-bodied flavor with a smooth, creamy texture. Perfect for snacking, melting, or elevating your favorite recipes.",
        pairing: "Crisp apples, crusty sourdough, or summer sausage, with a hoppy IPA, a bold Cabernet Sauvignon, or a dry hard cider.",
      },
      {
        name: "Aged Cheddar", badge: "8+ Years", shop: "5-yr-cheddar-6oz", image: img("aged-cheddar", 1536, 1024, "CannonBelles Aged Cheddar, 8+ years"),
        desc: "A bold, full-bodied cheddar aged 8+ years for a rich, complex flavor. Sharp and tangy with deep savory notes and a firm, slightly crystalline texture.",
        pairing: "Crisp apples, ripe pears, honey, or fig jam, with hearty crackers, toasted nuts, or prosciutto. A star on any special cheese board.",
      },
      {
        name: "Grim Reaper Cheddar", badge: "Award Winner", shop: "grim-reaper-cheddar-6oz", image: img("grim-reaper-cheddar", 1600, 1200, "CannonBelles Grim Reaper Cheddar with its award medal and hot peppers"),
        desc: "Not for the faint of heart. A cheddar base packed with habanero, jalapeño, serrano, and Carolina Reaper peppers. 2nd place at the 2024 American Cheese Society competition and 1st place for Artisan Cheese at the 2024 Minnesota State Fair.",
        pairing: "Add a fiery kick to burgers, grilled cheese, or nachos, or try it with dark chocolate and honey. Pairs with a hoppy IPA, a smoky bourbon, or a mango smoothie to tame the heat.",
      },
      {
        name: "Painted Desert Cheddar", shop: "painted-desert-cheddar-6-oz", image: img("painted-desert-cheddar", 1402, 1122, "CannonBelles Painted Desert Cheddar"),
        desc: "A vibrant cheddar blended with southwest-inspired spices and colorful peppers, with a bold kick and an eye-catching marbled look.",
        pairing: "Slice into quesadillas, melt over burgers, or add to spicy mac and cheese. Great with an IPA, a smoky Syrah, or a margarita.",
      },
      {
        name: "Tuscan Cheddar", shop: "tuscan-cheddar-6-oz", image: img("tuscan-cheddar", 1600, 1600, "CannonBelles Tuscan Cheddar with fresh herbs"),
        desc: "Bold aged cheddar with a fragrant mix of Italian herbs and spices. A rich, tangy bite with a warm, aromatic finish.",
        pairing: "Melt into pasta, serve with crusty bread, or add flair to a charcuterie board. Enjoy with Chianti, an amber ale, or blood orange sparkling water.",
      },
      {
        name: "Olive Cheddar", shop: "olive-cheddar-6oz", image: img("olive-cheddar", 1448, 1086, "CannonBelles Olive Cheddar"),
        desc: "A twist on traditional cheddar: smooth, buttery cheddar balanced with the briny, tangy flavor of olives.",
        pairing: "Crusty bread, salami, or prosciutto, with cherry tomatoes, roasted red peppers, and marinated artichokes. A drizzle of olive oil brings out its Mediterranean side.",
      },
      {
        name: "Cranberry Cheddar", badge: "Seasonal", shop: "cranberry-cheddar-6oz", image: img("cranberry-cheddar", 1195, 896, "CannonBelles Cranberry Cheddar"),
        desc: "A festive blend of creamy, mild cheddar and sweet, tart cranberries. Available in fall and winter.",
        pairing: "Crackers and candied nuts on a holiday board, a turkey panini, or cubed in salads. Pour a Riesling, a cranberry cider, or a sparkling rosé.",
      },
      {
        name: "Red Wine Cheddar", shop: "red-wine-cheddar-6oz", image: img("red-wine-cheddar", 1536, 1024, "CannonBelles Red Wine Cheddar"),
        desc: "Aged one year and infused with Cannon River Winery's Reserve Red: sharp cheddar with deep, fruity wine notes and a beautifully marbled look.",
        pairing: "Dark cherries, aged salami, or rustic bread, with a glass of Cannon River Reserve Red or a full-bodied porter.",
      },
      {
        name: "Rosé Wine Cheddar", shop: "rose-wine-cheddar-6oz", image: img("rose-wine-cheddar", 1536, 1024, "CannonBelles Rosé Wine Cheddar"),
        desc: "Aged one year and infused with Cannon River Winery's Reserve Rosé: creamy, sharp cheddar with delicate, fruity notes and a subtle blush.",
        pairing: "Prosciutto, fresh strawberries, or dark chocolate, with a glass of Cannon River Reserve Rosé or a raspberry lemonade.",
      },
      {
        name: "White Wine Cheddar", shop: "white-wine-cheddar-6oz", image: img("white-wine-cheddar", 1536, 1024, "CannonBelles White Wine Cheddar"),
        desc: "Aged one year and infused with Cannon River Winery's Reserve White: a smooth, firm cheddar balancing creamy sharpness with bright wine notes.",
        pairing: "Fresh grapes, a crusty baguette, or mild cured meats, with a glass of Cannon River Reserve White or a crisp cider.",
      },
    ],
  },
  {
    id: "colbys",
    title: "Colbys",
    intro: "Smooth, mild, and buttery. A crowd-pleaser on any board or sandwich.",
    items: [
      {
        name: "Colby", shop: "colby-6-oz", image: img("colby", 1600, 1200, "CannonBelles Colby"),
        desc: "Smooth and mild with a creamy texture and a slightly sweet, buttery flavor. A classic favorite for all ages.",
        pairing: "Sandwiches, snack trays, or mac and cheese, with apple slices, pretzels, or summer sausage. Enjoy with a light lager or a crisp Chardonnay.",
      },
      {
        name: "Colby-Cheddar", image: img("colby-cheddar", 1207, 864, "CannonBelles Colby-Cheddar"),
        desc: "Two classics together: mild, creamy Colby and rich cheddar, with a smooth, slightly springy texture and a buttery finish.",
        pairing: "Crisp apples, grapes, or pears, with buttery crackers, pretzels, or smoked turkey. A drizzle of honey adds a touch of sweetness.",
      },
      {
        name: "Bacon Colby", shop: "bacon-colby-6oz", image: img("bacon-colby", 1600, 1199, "CannonBelles Bacon Colby"),
        desc: "Creamy, mild Colby blended with real smoky bacon for a rich, crowd-pleasing flavor.",
        pairing: "Melt into burgers, add to breakfast sandwiches, or serve with crackers and pickles. Try an amber ale or a Bloody Mary.",
      },
      {
        name: "Caraway Colby", shop: "caraway-colby-6oz", image: img("caraway-colby", 1600, 1200, "CannonBelles Caraway Colby"),
        desc: "Creamy Colby with aromatic caraway seeds, offering warm, earthy notes and a buttery finish. A nod to old-world tradition.",
        pairing: "Sliced on rye, melted into casseroles, or with cured meats and mustard. Pairs with a smooth lager or a dry Riesling.",
      },
      {
        name: "Herb & Garlic Colby", shop: "herb-and-garlic-colby-6oz", image: img("herb-and-garlic-colby", 1195, 896, "CannonBelles Herb & Garlic Colby"),
        desc: "Creamy, mild Colby with a fragrant mix of herbs and roasted garlic. A rich, buttery bite with a flavorful twist.",
        pairing: "Grilled cheese, mashed potatoes, or crackers and olives, with a Chardonnay, a pale ale, or lemon-rosemary sparkling water.",
      },
    ],
  },
  {
    id: "gouda",
    title: "Gouda",
    intro: "Plain, never smoked, and aged at least 3 months.",
    items: [
      {
        name: "Gouda", shop: "gouda-6oz", image: img("gouda", 1264, 843, "CannonBelles Gouda on a board with honey and crackers"),
        desc: "Creamy and mellow with a buttery texture and subtle nutty notes, made in small batches. Its smooth, slightly sweet flavor makes it a favorite for everyday snacking and gourmet cheese boards.",
        pairing: "Fresh pears, toasted almonds, or dark chocolate, with a light Pinot Noir, an amber ale, or a crisp Sauvignon Blanc.",
      },
    ],
  },
  {
    id: "queso",
    title: "Queso",
    intro: "Our award-winning Spanish-style cheese, and the one in every grilled cheese we serve.",
    items: [
      {
        name: "Queso Fresco", badge: "Signature", shop: "queso-fresco-6oz", image: img("queso-fresco", 1264, 842, "CannonBelles Queso Fresco"),
        desc: "Smooth, solid, and mild with a creamy flavor. First place in the Hispanic Cheese category at the 2017 American Cheese Society competition.",
        pairing: "Melt into omelets and grilled cheese, or crumble over tacos and salads, with olives, roasted vegetables, or fresh fruit.",
      },
    ],
  },
  {
    id: "curds",
    title: "Cheese Curds",
    intro: "Fresh, squeaky curds in eight flavors, made in small batches and packaged for snacking or cooking.",
    items: [
      {
        name: "Plain Curds", shop: "curds", image: img("curds-plain", 1264, 842, "CannonBelles plain cheese curds"),
        desc: "Fresh, squeaky bites of mild, buttery cheese. A classic, clean flavor and that signature squeak.",
        pairing: "Straight from the bag, warmed for extra squeak, on a snack board, or in poutine. Pair with a crisp lager or lemonade.",
      },
      {
        name: "Bacon Curds", shop: "curds", image: img("curds-bacon", 1600, 1066, "CannonBelles bacon cheese curds"),
        desc: "A savory, smoky twist on our classic curds with real bacon pieces in every squeaky bite.",
        pairing: "Top burgers, mix into scrambled eggs, or add to loaded fries. Pair with a smoky porter or a crisp apple cider.",
      },
      {
        name: "Dill Curds", shop: "curds", image: img("curds-dill", 1600, 1066, "CannonBelles dill cheese curds"),
        desc: "A fresh, tangy take on our classic curds, bursting with the bright, herbaceous flavor of dill.",
        pairing: "Snack on them with pickles, smoked salmon, or kettle chips, or toss into salads. Try a citrusy wheat beer.",
      },
      {
        name: "Garlic Curds", shop: "curds", image: img("curds-garlic", 1264, 842, "CannonBelles garlic cheese curds"),
        desc: "Creamy, squeaky curds with the rich taste of roasted garlic. A crave-worthy snack for garlic lovers.",
        pairing: "Toss into pasta, top flatbreads, or serve with cured meats. Pair with a robust red wine or an IPA.",
      },
      {
        name: "Grim Reaper Curds", shop: "curds", image: img("curds-grim-reaper", 1600, 1066, "CannonBelles Grim Reaper cheese curds"),
        desc: "Fiery curds infused with the intense heat of Carolina Reaper peppers, balanced by a creamy, squeaky texture.",
        pairing: "Enjoy straight from the bag if you dare, or add heat to poutine, mac and cheese, or nachos. A cold glass of milk helps.",
      },
      {
        name: "Horseradish Curds", shop: "curds", image: img("curds-horseradish", 1600, 1066, "CannonBelles horseradish cheese curds"),
        desc: "A bold, zesty twist with the sharp, tangy bite of real horseradish.",
        pairing: "Serve alongside roast beef, add to sandwiches, or melt into mashed potatoes. Pair with a brown ale or a Bloody Mary.",
      },
      {
        name: "Jalapeño Curds", shop: "curds", image: img("curds-jalapeno", 1600, 1066, "CannonBelles jalapeño cheese curds"),
        desc: "Creamy, squeaky curds with zesty jalapeño heat: just enough spice to wake up your taste buds.",
        pairing: "Mix into nachos and quesadillas, or serve with guacamole and burgers. Pair with a citrusy IPA or a margarita.",
      },
      {
        name: "Ranch Curds", shop: "curds", image: img("curds-ranch", 1024, 1024, "CannonBelles ranch cheese curds"),
        desc: "Our classic curds seasoned with cool, creamy ranch herbs and spices.",
        pairing: "Toss into salads and wraps, or serve with buffalo wings and veggie platters. Pair with a light lager or lemonade.",
      },
    ],
  },
  {
    id: "gift-boxes",
    title: "Gift Boxes",
    intro: "Ready-to-give boxes packed with CannonBelles cheese and local favorites.",
    items: [
      { name: "Cheese Box", shop: "christmas-cheese-box", image: { src: `${CDN}/FAF0D4AA-14A8-4F3E-98A2-C8F1873B6EE9.jpg`, width: 977, height: 968, alt: "CannonBelles Cheese Box gift box" }, desc: "Gouda, Olive Cheddar, Colby-Cheddar, and Queso Fresco (6oz each) with a cheese board." },
      { name: "Curds & Queso Box", shop: "curds-and-queso-gift-box", image: { src: `${CDN}/BBF21599-0E7F-41F2-8261-E4F495077FC5.png`, width: 1086, height: 1448, alt: "CannonBelles Curds & Queso gift box" }, desc: "Three 6oz bags of cheese curds plus Queso Fresco." },
      { name: "Brat Box", shop: "gift-box-brat-box", image: { src: `${CDN}/1C763E3E-43A8-4C3E-B325-080F3DFE1A18.png`, width: 1087, height: 1446, alt: "CannonBelles Brat Box gift box" }, desc: "Lorentz Meats brats made with our cheddar curds, plus plain and dill curds." },
      { name: "Snack Pack", shop: "gift-box-snack-pack", image: { src: `${CDN}/A091CCB5-257F-404A-97E9-B230E5DB6C8D.png`, width: 1211, height: 1299, alt: "CannonBelles Snack Pack gift box" }, desc: "Ferndale Market cranberry turkey sticks with plain and bacon curds." },
      { name: "Coffee Box", shop: "gift-box-coffee-box", image: { src: `${CDN}/D1E262E9-E291-4F8E-A9BD-61B59E2AB093.jpg`, width: 873, height: 850, alt: "CannonBelles Coffee Box gift box" }, desc: "A CannonBelles mug, Loon's Nest coffee beans and instant sticks, car coasters, and a coffee squishy." },
    ],
  },
];

// Other places in Cannon Falls that carry CannonBelles cheese (from the client's Nov 2026 store list).
export const CANNON_FALLS_STOCKISTS = [
  { name: "Cannon River Winery", where: "421 Mill St W, downtown" },
  { name: "Tilion Brewing", where: "432 Mill St W, downtown" },
  { name: "Ferndale Market", where: "Just outside town" },
];
