// Stores that carry CannonBelles cheese, grouped by town (from the client's "Cheese Store List - Nov. 2026").
// Schools and distributors are left out. Pins are placed at the town center (the list has no street addresses);
// town coordinates come from OpenStreetMap. To add a store, add it to its town (or add a new town with lat/lng).
export const STORE_TOWNS = [
  { city: "Andover", state: "MN", lat: 45.2333, lng: -93.2913, stores: [
    { name: "Festival Foods", type: "Grocery & market" },
  ] },
  { city: "Annandale", state: "MN", lat: 45.2627, lng: -94.1244, stores: [
    { name: "Petty Bros. Meats", type: "Grocery & market" },
  ] },
  { city: "Apple Valley", state: "MN", lat: 44.7319, lng: -93.2177, stores: [
    { name: "Fresh Thyme Market", type: "Grocery & market" },
    { name: "Valley Natural Foods", type: "Grocery & market" },
  ] },
  { city: "Bloomington", state: "MN", lat: 44.8322, lng: -93.3205, stores: [
    { name: "Element Hotel (Mall of America)", type: "Restaurant & cafe" },
    { name: "Festival Foods", type: "Grocery & market" },
    { name: "Fresh Thyme Market", type: "Grocery & market" },
  ] },
  { city: "Brainerd", state: "MN", lat: 46.358, lng: -94.2008, stores: [
    { name: "Malloy Farms", type: "Grocery & market" },
  ] },
  { city: "Brooklyn Park", state: "MN", lat: 45.1005, lng: -93.3444, stores: [
    { name: "Festival Foods", type: "Grocery & market" },
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Brooten", state: "MN", lat: 45.5011, lng: -95.1245, stores: [
    { name: "Redhead Creamery", type: "Restaurant & cafe" },
  ] },
  { city: "Cannon Falls", state: "MN", lat: 44.5068, lng: -92.9062, stores: [
    { name: "Cannon River Winery", type: "Brewery & winery" },
    { name: "Cannon Valley Ranch", type: "Restaurant & cafe" },
    { name: "CannonBelles Coffee & Ice Cream", type: "Grocery & market" },
    { name: "Ferndale Market", type: "Grocery & market" },
    { name: "Tilion Brewing", type: "Brewery & winery" },
  ] },
  { city: "Champlin", state: "MN", lat: 45.1889, lng: -93.3975, stores: [
    { name: "Jensen's Market", type: "Grocery & market" },
  ] },
  { city: "Chanhassen", state: "MN", lat: 44.8618, lng: -93.5307, stores: [
    { name: "Lakewinds Food Co-op", type: "Grocery & market" },
  ] },
  { city: "Circle Pines", state: "MN", lat: 45.1449, lng: -93.1554, stores: [
    { name: "Festival Foods", type: "Grocery & market" },
  ] },
  { city: "Comstock", state: "WI", lat: 45.4777, lng: -92.0752, stores: [
    { name: "Comstock Meat & Cheese", type: "Grocery & market" },
  ] },
  { city: "Cottage Grove", state: "MN", lat: 44.8277, lng: -92.9438, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Dundas", state: "MN", lat: 44.4294, lng: -93.2021, stores: [
    { name: "Chapel Brewery", type: "Brewery & winery" },
    { name: "Keepsake Cidery", type: "Brewery & winery" },
  ] },
  { city: "Eagan", state: "MN", lat: 44.8182, lng: -93.1659, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Farmington", state: "MN", lat: 44.6402, lng: -93.1435, stores: [
    { name: "Brand Farms", type: "Grocery & market" },
  ] },
  { city: "Fountain", state: "MN", lat: 43.74, lng: -92.1363, stores: [
    { name: "Sugar Creek Vineyard & Meadery", type: "Brewery & winery" },
  ] },
  { city: "Gibbon", state: "MN", lat: 44.5339, lng: -94.5264, stores: [
    { name: "Backstreet Market", type: "Restaurant & cafe" },
  ] },
  { city: "Grand Marais", state: "MN", lat: 47.7505, lng: -90.3347, stores: [
    { name: "Loon's Nest Coffee", type: "Grocery & market" },
  ] },
  { city: "Hampton", state: "MN", lat: 44.6108, lng: -93.0001, stores: [
    { name: "Greg's Meats", type: "Grocery & market" },
  ] },
  { city: "Hastings", state: "MN", lat: 44.7427, lng: -92.8519, stores: [
    { name: "Spiral Foods", type: "Grocery & market" },
  ] },
  { city: "Hugo", state: "MN", lat: 45.1599, lng: -92.9933, stores: [
    { name: "Festival Foods", type: "Grocery & market" },
  ] },
  { city: "Humboldt", state: "IA", lat: 42.7209, lng: -94.2155, stores: [
    { name: "Caribbean Coffee Shop", type: "Grocery & market" },
  ] },
  { city: "Inver Grove Heights", state: "MN", lat: 44.8479, lng: -93.0428, stores: [
    { name: "Corner Store", type: "Grocery & market" },
  ] },
  { city: "Janesville", state: "MN", lat: 44.1161, lng: -93.708, stores: [
    { name: "Wiste's Meat Market", type: "Grocery & market" },
  ] },
  { city: "Lakeville", state: "MN", lat: 44.6501, lng: -93.2433, stores: [
    { name: "1890's Meats", type: "Grocery & market" },
  ] },
  { city: "Mankato", state: "MN", lat: 44.1659, lng: -94.0028, stores: [
    { name: "Hy-Vee Hilltop", type: "Grocery & market" },
    { name: "Meatery", type: "Grocery & market" },
    { name: "Minnesota Valley Action Council", type: "Grocery & market" },
  ] },
  { city: "Maple Grove", state: "MN", lat: 45.0985, lng: -93.4419, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Minneapolis", state: "MN", lat: 44.9773, lng: -93.2655, stores: [
    { name: "Farmers Kitchen + Bar", type: "Restaurant & cafe" },
    { name: "Fresh Thyme Market", type: "Grocery & market" },
    { name: "Linden Hills Co-op", type: "Grocery & market" },
  ] },
  { city: "Minnetonka", state: "MN", lat: 44.9405, lng: -93.4639, stores: [
    { name: "Lakewinds Food Co-op", type: "Grocery & market" },
  ] },
  { city: "Minnetrista", state: "MN", lat: 44.9236, lng: -93.7187, stores: [
    { name: "Mackenthun's Fine Foods", type: "Grocery & market" },
  ] },
  { city: "Montgomery", state: "MN", lat: 44.4389, lng: -93.5813, stores: [
    { name: "Cody Lake Farms", type: "Grocery & market" },
  ] },
  { city: "Nerstrand", state: "MN", lat: 44.3419, lng: -93.068, stores: [
    { name: "Nerstrand Meats", type: "Grocery & market" },
  ] },
  { city: "New Ulm", state: "MN", lat: 44.314, lng: -94.4614, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Northfield", state: "MN", lat: 44.4582, lng: -93.1612, stores: [
    { name: "Fireside Orchard", type: "Grocery & market" },
    { name: "Imminent Brewery", type: "Brewery & winery" },
    { name: "Just Food", type: "Grocery & market" },
    { name: "Little Hill Berry Farm", type: "Grocery & market" },
    { name: "Windy Willow Farm", type: "Grocery & market" },
    { name: "Ziggy's", type: "Grocery & market" },
  ] },
  { city: "Norwood Young America", state: "MN", lat: 44.7736, lng: -93.9216, stores: [
    { name: "The Grater Good", type: "Grocery & market" },
  ] },
  { city: "Oakdale", state: "MN", lat: 44.9856, lng: -92.9646, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Owatonna", state: "MN", lat: 44.084, lng: -93.2261, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
    { name: "Neighbors Meats", type: "Grocery & market" },
  ] },
  { city: "Perham", state: "MN", lat: 46.5944, lng: -95.5725, stores: [
    { name: "Bongards", type: "Grocery & market" },
  ] },
  { city: "Plymouth", state: "MN", lat: 45.0065, lng: -93.4665, stores: [
    { name: "Fresh Thyme Market", type: "Grocery & market" },
  ] },
  { city: "Prior Lake", state: "MN", lat: 44.7133, lng: -93.4227, stores: [
    { name: "Spring Lake Farm", type: "Grocery & market" },
  ] },
  { city: "Red Wing", state: "MN", lat: 44.5625, lng: -92.5338, stores: [
    { name: "Art Café", type: "Restaurant & cafe" },
  ] },
  { city: "Richfield", state: "MN", lat: 44.8766, lng: -93.2878, stores: [
    { name: "Lakewinds Food Co-op", type: "Grocery & market" },
  ] },
  { city: "Robbinsdale", state: "MN", lat: 45.0313, lng: -93.3396, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Rochester", state: "MN", lat: 44.0234, lng: -92.463, stores: [
    { name: "Fresh Thyme Market", type: "Grocery & market" },
    { name: "Hy-Vee Barlow Plaza", type: "Grocery & market" },
    { name: "Hy-Vee North (37th St)", type: "Grocery & market" },
    { name: "Hy-Vee West Circle Drive", type: "Grocery & market" },
    { name: "Little Thistle Brewery", type: "Brewery & winery" },
    { name: "People's Food", type: "Grocery & market" },
  ] },
  { city: "Rosemount", state: "MN", lat: 44.7392, lng: -93.1261, stores: [
    { name: "Omni Winery & Event Center", type: "Brewery & winery" },
  ] },
  { city: "Savage", state: "MN", lat: 44.7779, lng: -93.3356, stores: [
    { name: "Fresh Thyme Market", type: "Grocery & market" },
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Shakopee", state: "MN", lat: 44.798, lng: -93.5269, stores: [
    { name: "1890's Meats", type: "Grocery & market" },
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "Spring Lake Park", state: "MN", lat: 45.1154, lng: -93.2493, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
  { city: "St. Cloud", state: "MN", lat: 45.5616, lng: -94.1642, stores: [
    { name: "Jules Bistro", type: "Grocery & market" },
    { name: "Pantown Brewery", type: "Brewery & winery" },
  ] },
  { city: "St. Paul", state: "MN", lat: 44.9497, lng: -93.0931, stores: [
    { name: "Haskell's Cheese Shop", type: "Grocery & market" },
    { name: "Keystone Community Food Center", type: "Grocery & market" },
    { name: "Mississippi Market (East 7th)", type: "Grocery & market" },
    { name: "Mississippi Market (Selby)", type: "Grocery & market" },
    { name: "Mississippi Market (West 7th)", type: "Grocery & market" },
  ] },
  { city: "St. Peter", state: "MN", lat: 44.3238, lng: -93.9585, stores: [
    { name: "Hy-Vee", type: "Grocery & market" },
    { name: "Minnesota Valley Action Council", type: "Grocery & market" },
  ] },
  { city: "Stillwater", state: "MN", lat: 45.0559, lng: -92.8076, stores: [
    { name: "Brine's Market", type: "Grocery & market" },
  ] },
  { city: "Vadnais Heights", state: "MN", lat: 45.0575, lng: -93.0739, stores: [
    { name: "Fresh Thyme Market", type: "Grocery & market" },
  ] },
  { city: "Waconia", state: "MN", lat: 44.8508, lng: -93.7869, stores: [
    { name: "Parley Lake Winery", type: "Brewery & winery" },
    { name: "Sweet Winks", type: "Restaurant & cafe" },
  ] },
  { city: "Waite Park", state: "MN", lat: 45.5537, lng: -94.2335, stores: [
    { name: "Fresh Thyme Market", type: "Grocery & market" },
  ] },
  { city: "Waseca", state: "MN", lat: 44.0777, lng: -93.5076, stores: [
    { name: "Minnesota Valley Action Council", type: "Grocery & market" },
  ] },
  { city: "Webster", state: "MN", lat: 44.5297, lng: -93.3527, stores: [
    { name: "Sweetland Orchards", type: "Grocery & market" },
  ] },
  { city: "White Bear Lake", state: "MN", lat: 45.0838, lng: -93.0069, stores: [
    { name: "Festival Foods", type: "Grocery & market" },
    { name: "White Bear Meadery", type: "Brewery & winery" },
  ] },
  { city: "Winona", state: "MN", lat: 44.05, lng: -91.6392, stores: [
    { name: "Garvin Heights Vineyard", type: "Brewery & winery" },
    { name: "Hy-Vee", type: "Grocery & market" },
  ] },
];

export const STORE_COUNT = STORE_TOWNS.reduce((n, t) => n + t.stores.length, 0);
