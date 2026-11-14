# BLOOMS by Aditi — Website

Static site (HTML + CSS + vanilla JS). No build step.

## Run locally
```
node serve.js
```
Then open http://localhost:5500 (or just double-click `index.html`).

## Pages
- `index.html` — Home (hero, collections, bestsellers, about, why-choose, banners, reviews, Instagram)
- `collections.html` — All collections + filterable/sortable shop (`?c=resin`, `?q=candle`)
- `product.html` — Product detail (`?id=floral-resin-tray`) with gallery, customisation, qty, add to bag
- `about.html` — Brand story, values, reviews
- `contact.html` — Contact, custom gift request form, shipping & returns

## Photos & videos
All photos are in `images/` (resized to max 1200px, ~120 KB each) and the short
"Watch Us Create" clips are in `videos/`.

- **Add or change a product:** put the photo in `images/`, then add/edit a line in
  `PRODUCTS` in `js/main.js` — `img` is the main photo, `gallery` lists extra photos.
- **Change a collection cover:** edit `img` in `COLLECTIONS` in `js/main.js`.
- **Other spots:** `hero.jpg`, `about-hands.jpg`, `about-story.jpg`, `raw-materials.jpg`,
  `banner-*.jpg`, `insta-1.jpg` … `insta-6.jpg` — replace the file, keep the name.
- **Videos:** keep clips short (under ~5 MB). They're listed in `index.html` (search `reels`).

## Editing products & collections
All product/collection data lives at the top of `js/main.js` (`COLLECTIONS`, `PRODUCTS`).
Header and footer are shared and rendered from `js/main.js` too, so edit them once.

## Notes
- Cart and wishlist are saved in the browser (localStorage). Checkout is a placeholder — connect
  Razorpay / Shopify / WooCommerce for real payments.
- Newsletter and custom-order forms show a thank-you message but don't send anywhere yet; hook them
  up to Formspree, EmailJS or your backend.
- Colours and fonts are CSS variables at the top of `css/style.css`.
