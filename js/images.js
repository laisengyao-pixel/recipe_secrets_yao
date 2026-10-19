/* =========================================================
   IMAGE CONFIG
   TODO: Replace every URL below with your own restaurant photography.
   Keep the same keys so the rest of the site keeps working.
   All images are free-to-use Unsplash photos (placeholders only).
========================================================= */

function unsplash(id, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const IMAGES = {
  // ---- Hero images (one per page, full-width, dark overlay) ----
  hero: {
    home: [
      unsplash("photo-1414235077428-338989a2e8c0", 1920), // cozy restaurant interior
      unsplash("photo-1424847651672-bf20a4b0982b", 1920), // candlelit table
      unsplash("photo-1517248135467-4c7edcad34c4", 1920)  // elegant table setting
    ],
    about: unsplash("photo-1572116469696-31de0f17cc34", 1920),    // restaurant bar / interior
    specials: unsplash("photo-1555939594-58d7cb561ad1", 1920),    // fine dining plated dish
    reservation: unsplash("photo-1424847651672-bf20a4b0982b", 1920), // candlelit table
    contact: unsplash("photo-1559305616-3f99cd43e353", 1920)      // restaurant interior tables
  },

  // ---- Home page ----
  home: {
    introSplit: unsplash("photo-1467003909585-2f8a72700288", 1200), // chef cooking
    specials: [
      { src: unsplash("photo-1546069901-ba9599a7e63c", 1000), alt: "Pan-seared duck breast with red wine jus" },
      { src: unsplash("photo-1574071318508-1cdbab80d002", 1000), alt: "Wood-fired artisan pizza with fresh basil" },
      { src: unsplash("photo-1586190848861-99aa4a171e90", 1000), alt: "Handmade pasta with wild mushrooms" }
    ],
    gallery: [
      unsplash("photo-1504674900247-0877df9cc836", 900),
      unsplash("photo-1551183053-bf91a1d81141", 900),
      unsplash("photo-1540189549336-e6e99c3679fe", 900),
      unsplash("photo-1470337458703-46ad1756a187", 900),
      unsplash("photo-1551024506-0bccd828d307", 900),
      unsplash("photo-1488477181946-6428a0291777", 900),
      unsplash("photo-1510626176961-4b57d4fbad03", 900),
      unsplash("photo-1484723091739-30a097e8f929", 900)
    ],
    testimonialsBg: unsplash("photo-1466978913421-dad2ebd01d17", 1920),
    ctaBanner: unsplash("photo-1495521821757-a1efb6729352", 1600)
  },

  // ---- About page ----
  about: {
    storyRows: [
      unsplash("photo-1551218808-94e220e084d2", 1000),
      unsplash("photo-1490818387583-1baba5e638af", 1000),
      unsplash("photo-1559305616-3f99cd43e353", 1000)
    ],
    team: [
      { src: unsplash("photo-1577219491135-ce391730fb2c", 600), name: "Marco Alvarez", role: "Executive Chef" },
      { src: unsplash("photo-1580489944761-15a19d654956", 600), name: "Elena Rossi", role: "Head Pastry Chef" },
      { src: unsplash("photo-1607631568010-a87245c0daf8", 600), name: "James Carter", role: "Sous Chef" },
      { src: unsplash("photo-1595273670150-bd0c3c392e46", 600), name: "Priya Nair", role: "Restaurant Manager" }
    ],
    ingredientsStrip: [
      unsplash("photo-1510626176961-4b57d4fbad03", 700),
      unsplash("photo-1495521821757-a1efb6729352", 700),
      unsplash("photo-1490818387583-1baba5e638af", 700),
      unsplash("photo-1504674900247-0877df9cc836", 700)
    ]
  },

  // ---- Reservation page ----
  reservation: {
    side: unsplash("photo-1424847651672-bf20a4b0982b", 1400)
  },

  // ---- Footer ----
  footerTexture: unsplash("photo-1495521821757-a1efb6729352", 1600, 40),

  // ---- Open Graph (social share) images ----
  og: {
    home: unsplash("photo-1414235077428-338989a2e8c0", 1200),
    about: unsplash("photo-1572116469696-31de0f17cc34", 1200),
    specials: unsplash("photo-1555939594-58d7cb561ad1", 1200),
    reservation: unsplash("photo-1424847651672-bf20a4b0982b", 1200),
    contact: unsplash("photo-1559305616-3f99cd43e353", 1200)
  }
};
