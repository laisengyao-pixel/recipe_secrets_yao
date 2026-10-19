Build a visually stunning, image-rich website for "Recipe Secrets Restaurant" using plain HTML, CSS and vanilla JavaScript only (no frameworks, no build step, no backend). It must work on free static hosting like GitHub Pages or Netlify.

## Visual direction (top priority)
The site should feel premium, warm and appetizing, like a high-end restaurant's site. Visitors should feel hungry within seconds. Food photography should lead every page.
- Palette: deep terracotta/burgundy, warm cream, charcoal and a gold accent, all set as CSS variables.
- Typography: an elegant display serif for headings (e.g. Playfair Display or Cormorant Garamond) and a clean sans-serif for body text (e.g. Inter or Lato), via Google Fonts. Use large, confident heading sizes.
- Generous whitespace, rounded image corners, soft shadows and subtle gold divider lines.
- Tasteful motion: fade/slide-in on scroll (IntersectionObserver), gentle zoom on image hover, smooth scrolling, a sticky header that turns solid on scroll. Respect `prefers-reduced-motion`.

## Images (use plenty)
- Use high-quality free photos from Unsplash (direct image URLs). Pick images that match each section: plated dishes, chefs cooking, cozy restaurant interior, candlelit tables, fresh ingredients, desserts, cocktails/wine.
- Every page starts with a full-width hero image under a dark gradient overlay so the white heading text stands out.
- Use `object-fit: cover`, consistent aspect ratios, `loading="lazy"` (except the hero images), responsive `srcset` where possible, and descriptive alt text.
- Put all image URLs in one config file (`js/images.js`) so I can swap in my own photos easily.

## Pages (exactly 5, with shared header and footer on each)
1. **Home**: full-screen hero with a slow Ken Burns zoom (or crossfading slideshow of 3 images), restaurant name, tagline and a gold "Reserve a Table" button; a split section with an image and an intro text; 3 featured specials as large image cards; an image gallery grid (6–8 photos, masonry or mixed sizes) with a lightbox on click; a testimonials section over a parallax background image; opening hours with a call-to-action banner.
2. **About**: hero image; our story in alternating image/text rows; chef/team cards with portrait photos; a "fresh ingredients" section with a photo strip.
3. **Specials**: hero image; filter buttons (e.g. Starters, Mains, Desserts, Drinks); a grid of 8–12 dish cards (large photo, name, description, price, optional "Chef's Pick" badge), loaded from one JS data file so they're easy to update.
4. **Reservation**: split layout with an atmospheric dining photo on one side and an elegant form on the other (name, email, phone, date, time, guests 1–12, special requests). Add client-side validation (no past dates, times within opening hours). Submit via Formspree with a placeholder endpoint and styled success/error messages.
5. **Contact**: hero image; cards for address, phone, email and hours with icons; an embedded Google Map; a short contact form (also Formspree).

## Shared layout
- Header: logo/name, navigation with the active page highlighted, a "Book Now" button, and a hamburger menu on mobile.
- Footer: dark background with a subtle food-texture image, address, hours, social icons (placeholders), copyright.

## Quality
- Mobile-first and fully responsive. It must look just as good on a phone as on desktop.
- Accessible: form labels, alt text, readable contrast over images, keyboard-friendly nav and lightbox.
- Fast: lazy-loading, compressed/appropriately sized images, no heavy libraries.
- Unique title, meta description and Open Graph image on each page, plus a favicon.
- No console errors or broken links.

## Content
Use realistic, appetizing placeholder text, dish names and prices. Mark everything I must replace with <!-- TODO --> comments.

## Deliverables
A clean folder structure (/css, /js, /images) plus a README covering local preview, swapping images, updating specials and contact details, setting up Formspree, and deploying to GitHub Pages or Netlify.

## Process
Show me the file structure, color palette and font choices first, then build. When finished, check every page at mobile and desktop widths, fix any visual issues, and list the TODOs I need to fill in.

