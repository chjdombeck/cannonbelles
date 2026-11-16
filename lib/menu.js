// CannonBelles Coffee & Ice Cream menu.
// Source: "CannonBelles Menu for Website 2026" (official menu from the shop), in the same order.
// Short descriptions come from the menu itself or the shop's ordering menu. Prices are intentionally left off.
// Edit items here; the /menu page renders whatever is in this file.

import { BUSINESS, shortTime } from "./site";

const KITCHEN_CLOSE = shortTime(BUSINESS.kitchenClose); // "4pm"

export { ORDER_ONLINE_URL } from "./site";

export const MENU_SECTIONS = [
  {
    id: "coffee",
    nav: "Coffee & Drinks",
    label: "Loon's Nest Espresso, Ground In Shop",
    title: "Coffee & Drinks",
    note: "Hot, iced, or blended. Customize any drink with our syrups and add-ons below.",
    icon: "cup",
    highlight: {
      title: "Rotating Seasonal Drink Specials",
      text: "Our specials change with the seasons. Ask what's new when you stop in.",
    },
    groups: [
      {
        title: "Espresso & Coffee",
        items: [
          { name: "Americano", desc: "Espresso and hot water." },
          { name: "Breve", desc: "Espresso and half & half." },
          { name: "Brewed Coffee", desc: "Medium, dark, or decaf." },
          { name: "Café au Lait", desc: "Half brewed coffee, half milk." },
          { name: "Cappuccino", desc: "Espresso, steamed milk, and foam." },
          { name: "Caramel Macchiato", desc: "Caramel, espresso, and milk." },
          { name: "Cold Brew", desc: "Smooth and slow-steeped." },
          { name: "Espresso Shots", desc: "Loon's Nest blend, ground fresh for every shot." },
          { name: "Latte", desc: "Espresso and milk with your choice of flavor." },
          { name: "Mocha", desc: "White or dark chocolate." },
        ],
      },
      {
        title: "Tea, Chai & More",
        items: [
          { name: "Chai Latte", desc: "Spiced chai with milk." },
          { name: "Matcha Latte", desc: "Matcha with milk." },
          { name: "Hot Chocolate", desc: "Rich and creamy." },
          { name: "Steamer", desc: "Steamed milk with your choice of flavor." },
          { name: "London Fog", desc: "Earl Grey, vanilla bean, and milk." },
          { name: "Two Leaves and a Bud Organic Tea" },
        ],
      },
      {
        title: "Cold & Blended",
        items: [
          { name: "Frappe", desc: "Blended and creamy." },
          { name: "Smoothies", desc: "Real fruit, blended." },
          { name: "Wild Ice Slushie" },
          { name: "Italian or French Soda", desc: "Club soda and syrup. Add cream to make it French." },
          { name: "Dirty Sodas" },
          { name: "Red Bull Infusions", desc: "Red Bull with your choice of flavor." },
          { name: "Focus Fuel Energy Drinks" },
          { name: "Iced Tea", desc: "Peach black or pear herbal." },
        ],
      },
    ],
  },
  {
    id: "flavors",
    nav: "Flavors & Add-Ons",
    label: "Make It Yours",
    title: "Flavors & Add-Ons",
    note: "Every flavored syrup is available year-round.",
    icon: "sparkle",
    chipGroups: [
      {
        title: "Flavored Syrups",
        footnote: "* Sugar-free option available",
        items: [
          "Almond *", "Apple", "Banana", "Blueberry", "Blue Raspberry", "Brown Sugar Cinnamon *", "Butterscotch", "Caramel *",
          "Cherry", "Cinnamon", "Coconut", "English Toffee", "Gingerbread", "Green Apple", "Green Mint", "Hazelnut *",
          "Irish Cream", "Lavender", "Lime", "Orange", "Peach", "Peppermint *", "Pumpkin Spice *", "Raspberry *",
          "Salted Caramel", "Strawberry", "Toasted Marshmallow", "Vanilla *", "Vanilla Bean", "White Chocolate *",
        ],
      },
      {
        title: "Add-Ons",
        items: ["Oat Milk", "Almond Milk", "Coconut Milk", "Flavored Cold Foam", "Heavy Whipping Cream", "Whipped Topping"],
      },
    ],
  },
  {
    id: "ice-cream",
    nav: "Ice Cream",
    label: "16 Flavors Offered Daily",
    title: "Ice Cream",
    note: "Cedar Crest ice cream, made in Wisconsin. Flavors rotate, so ask what's in the case today.",
    icon: "cone",
    items: [
      { name: "Cup" },
      { name: "Cone", desc: "Waffle, cake, or gluten-free." },
      { name: "Affogato", desc: "Ice cream with a shot of espresso poured over." },
      { name: "Sundae" },
      { name: "Malt" },
      { name: "Milkshake" },
      { name: "Coffee Float", desc: "Ice cream and brewed coffee." },
      { name: "Root Beer Float" },
      { name: "Ice Cream Flight", desc: "A sampler of four half scoops." },
      { name: "Pint or Quart", desc: "Take your favorite flavor home." },
    ],
  },
  {
    id: "breakfast",
    nav: "Breakfast",
    label: "Made In House",
    title: "Breakfast",
    note: `Farm-fresh eggs and our own CannonBelles Queso Fresco. The kitchen is open until ${KITCHEN_CLOSE} daily.`,
    icon: "egg",
    items: [
      { name: "Breakfast Sandwich", desc: "Made in house with a farm-fresh egg and CannonBelles Queso Fresco." },
      { name: "Belles Breakfast Burrito", desc: "Made in house with eggs, salsa, bacon, sausage, hash browns, and CannonBelles Queso Fresco." },
      { name: "Plain Bagel & Cream Cheese" },
      { name: "Two Waffles", desc: "With syrup and whipped cream." },
      { name: "Build Your Own", desc: "Toast, eggs, bacon, sausage, and hash browns." },
    ],
  },
  {
    id: "lunch",
    nav: "Lunch",
    label: "Grilled Cheese, Wraps & Soup",
    title: "Lunch",
    note: "Every grilled cheese is made with CannonBelles Queso Fresco.",
    icon: "sandwich",
    groups: [
      {
        title: "Lunch Favorites",
        items: [
          { name: "Build-A-Grilled Cheese", desc: "Start with CannonBelles Queso Fresco and make it your own." },
          { name: "BLT Sandwich", desc: "Bacon, lettuce, tomato, and mayo." },
          { name: "Belles Gourmet Mac & Cheese", desc: "CannonBelles Gouda, Cheddar, and Colby." },
          { name: "Soup", desc: "Offered year-round. Ask about today's soup." },
        ],
      },
      {
        title: "Specialty Grilled Cheese",
        items: [
          { name: "Ferndale Gobbler", desc: "Turkey and avocado." },
          { name: "Sweet and Spicy", desc: "Ghost pepper sauce, turkey, and bacon." },
          { name: "Ham and Honey Mustard" },
          { name: "Chicken Bacon Ranch" },
          { name: "BBQ Pulled Pork" },
          { name: "Garlic Chicken", desc: "Garlic pesto, chicken, and tomato." },
        ],
      },
      {
        title: "Specialty Wraps or Salads",
        note: "Any wrap can be made as a salad.",
        items: [
          { name: "Ferndale Gobbler", desc: "Turkey and avocado." },
          { name: "Classic CBR", desc: "Chicken, bacon, and ranch." },
          { name: "Chicken Caesar" },
          { name: "Buffalo Chicken" },
          { name: "Little Piggy", desc: "Bacon, ham, apple, and tomato." },
          { name: "Garden Veggie", desc: "Cucumber, apple, tomato, and avocado." },
          { name: "BLT Wrap" },
        ],
      },
    ],
  },
];
