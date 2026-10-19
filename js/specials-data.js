/* =========================================================
   SPECIALS DATA
   TODO: Replace with your real menu — names, descriptions, prices, photos.
   category must be one of: starters | mains | desserts | drinks
========================================================= */

const SPECIALS = [
  {
    category: "starters",
    name: "Charred Octopus",
    description: "Smoked paprika, crushed fingerling potatoes, salsa verde, lemon oil.",
    price: "$18",
    image: unsplash("photo-1551024506-0bccd828d307", 900),
    chefsPick: false
  },
  {
    category: "starters",
    name: "Burrata & Heirloom Tomato",
    description: "Fresh burrata, basil oil, aged balsamic, toasted sourdough.",
    price: "$16",
    image: unsplash("photo-1432139555190-58524dae6a55", 900),
    chefsPick: true
  },
  {
    category: "starters",
    name: "Wild Mushroom Arancini",
    description: "Crisp risotto balls, truffle aioli, parmesan shavings.",
    price: "$14",
    image: unsplash("photo-1490818387583-1baba5e638af", 900),
    chefsPick: false
  },
  {
    category: "mains",
    name: "Pan-Seared Duck Breast",
    description: "Red wine jus, celeriac purée, roasted root vegetables.",
    price: "$34",
    image: unsplash("photo-1546069901-ba9599a7e63c", 900),
    chefsPick: true
  },
  {
    category: "mains",
    name: "Dry-Aged Ribeye",
    description: "28-day aged, bone marrow butter, triple-cooked chips.",
    price: "$46",
    image: unsplash("photo-1551218808-94e220e084d2", 900),
    chefsPick: false
  },
  {
    category: "mains",
    name: "Handmade Tagliatelle",
    description: "Wild mushrooms, black truffle, aged parmesan cream.",
    price: "$28",
    image: unsplash("photo-1586190848861-99aa4a171e90", 900),
    chefsPick: false
  },
  {
    category: "mains",
    name: "Wood-Fired Margherita",
    description: "San Marzano tomato, fior di latte, fresh basil, extra virgin olive oil.",
    price: "$22",
    image: unsplash("photo-1574071318508-1cdbab80d002", 900),
    chefsPick: false
  },
  {
    category: "mains",
    name: "Seared Scallops",
    description: "Cauliflower purée, brown butter, crispy pancetta, chive oil.",
    price: "$36",
    image: unsplash("photo-1484723091739-30a097e8f929", 900),
    chefsPick: true
  },
  {
    category: "desserts",
    name: "Dark Chocolate Fondant",
    description: "Molten centre, salted caramel ice cream, cocoa tuile.",
    price: "$13",
    image: unsplash("photo-1600891964092-4316c288032e", 900),
    chefsPick: true
  },
  {
    category: "desserts",
    name: "Classic Crème Brûlée",
    description: "Madagascar vanilla bean, caramelized sugar crust, shortbread.",
    price: "$12",
    image: unsplash("photo-1488477181946-6428a0291777", 900),
    chefsPick: false
  },
  {
    category: "desserts",
    name: "Lemon & Olive Oil Cake",
    description: "Candied citrus, mascarpone cream, rosemary syrup.",
    price: "$11",
    image: unsplash("photo-1587314168485-3236d6710814", 900),
    chefsPick: false
  },
  {
    category: "drinks",
    name: "Barrel-Aged Negroni",
    description: "Gin, Campari, sweet vermouth, orange oil, large ice sphere.",
    price: "$15",
    image: unsplash("photo-1470337458703-46ad1756a187", 900),
    chefsPick: false
  },
  {
    category: "drinks",
    name: "Reserve Red Blend",
    description: "A rich, full-bodied house blend of Cabernet and Merlot. Glass / Bottle.",
    price: "$14 / $56",
    image: unsplash("photo-1495521821757-a1efb6729352", 900),
    chefsPick: false
  }
];
