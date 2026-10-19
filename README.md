# Recipe Secrets Restaurant — Website

A 5-page, premium restaurant website built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build step, no backend — works on any static host.

## Folder structure

```
recipe_website/
├── index.html          Home
├── about.html           About
├── specials.html        Specials / menu
├── reservation.html     Reservation form
├── contact.html         Contact details + map + short form
├── css/
│   └── style.css        All site styles (colors, type, layout, components)
├── js/
│   ├── images.js        Every image URL used on the site (single config file)
│   ├── specials-data.js Menu items shown on the Specials page
│   └── main.js          Header/nav, scroll reveal, lightbox, forms, hero slideshow
└── README.md
```

## Local preview

No build step is required. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder locally (recommended, avoids any `file://` quirks), e.g.:
  ```bash
  npx serve .
  # or
  python -m http.server 8080
  ```
  then visit `http://localhost:8080`.

## Swapping images

All image URLs live in **`js/images.js`**. Each entry is just a URL (or `{ src, alt }` object), grouped by where it's used (hero, home gallery, about team, etc.). To use your own photos:

1. Upload your images somewhere (an `/images` folder in this project, or any image host).
2. Replace the corresponding URL(s) in `js/images.js`. Keep the same object keys — the HTML pages reference images by key (e.g. `data-img="hero.home.0"`), so nothing else needs to change.
3. Keep images reasonably sized (hero images ~1920px wide, cards/gallery ~900px) and compressed for fast loading.

Open Graph (`og:image`) tags in each page's `<head>` are set directly in the HTML (crawlers don't run JavaScript), so update those `<meta property="og:image">` tags separately if you change the hero photos.

## Updating specials / menu

Edit **`js/specials-data.js`**. Each dish is an object:

```js
{
  category: "mains",       // starters | mains | desserts | drinks
  name: "Dry-Aged Ribeye",
  description: "28-day aged, bone marrow butter, triple-cooked chips.",
  price: "$46",
  image: unsplash("photo-XXXXXXXXXXXXX-xxxxxxxxxxxx", 900), // or any image URL
  chefsPick: false         // true shows a "Chef's Pick" badge
}
```

Add, remove or edit entries freely — the Specials page renders the grid and filter buttons automatically from this file.

## Updating contact details

The address, phone, email and opening hours appear in the footer of every page, the Contact page cards, and the Home page CTA banner. Search each HTML file for `<!-- TODO -->` comments next to these values and update them (phone/email also appear as `tel:` and `mailto:` links — update both the display text and the link).

On `contact.html`, replace the Google Maps `<iframe src="...">` with an embed for your real address (Google Maps → Share → Embed a map → copy the `src` URL).

## Setting up Formspree

The Reservation and Contact forms post to [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form for each page (or reuse one form for both).
2. Copy the endpoint, e.g. `https://formspree.io/f/abcd1234`.
3. In `reservation.html` and `contact.html`, replace `YOUR_FORM_ID` in the `<form action="https://formspree.io/f/YOUR_FORM_ID">` attribute with your real endpoint.
4. Until you do this, submitting either form shows a "demo mode" message and nothing is sent — this is intentional so you don't lose real messages to a placeholder endpoint.

Both forms validate on the client first (required fields, email/phone format, no past reservation dates, reservation times within opening hours, 1–12 guests) before submitting.

## Deploying

### GitHub Pages
1. Push this folder to a GitHub repository (as the repo root, or a `/docs` folder).
2. Repo → Settings → Pages → set the source branch/folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

### Netlify
1. Drag-and-drop this folder into [app.netlify.com/drop](https://app.netlify.com/drop), **or** connect the GitHub repo and set the publish directory to the project root.
2. No build command is needed — this is a static site.

After deploying, update the `<meta property="og:url">` tag in each page's `<head>` to your real domain.

## TODOs to fill in before launch

Search the project for `<!-- TODO -->` comments. In summary:

- [ ] Real restaurant tagline, founding story and team bios (`index.html`, `about.html`)
- [ ] Real team member names/roles/photos (`js/images.js` → `about.team`, `about.html`)
- [ ] Real address, phone, email everywhere they appear (footer on all pages, `contact.html`)
- [ ] Real opening hours if different from the placeholder (footer, `index.html` CTA banner, `contact.html`)
- [ ] Real Google Maps embed URL (`contact.html`)
- [ ] Real Formspree endpoints for both forms (`reservation.html`, `contact.html`)
- [ ] Real social media links (footer `<a href="#">` icons, all pages)
- [ ] Your own food photography in `js/images.js` to replace the Unsplash placeholders
- [ ] Final menu items, descriptions and prices (`js/specials-data.js`)
- [ ] Legal/business name in the footer copyright line
- [ ] `og:url` meta tag on each page once you know your live domain
