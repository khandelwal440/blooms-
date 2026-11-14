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

## Adding your photos
Drop JPGs into the `images/` folder with these names — they appear automatically
(until then a soft blush placeholder shows):

| Where | Filenames |
|---|---|
| Hero | `hero.jpg` |
| Collection cards | `col-resin.jpg`, `col-chenille.jpg`, `col-candles.jpg`, `col-gifting.jpg`, `col-accessories.jpg`, `col-jewellery.jpg` |
| Products | see `img` in `PRODUCTS` inside `js/main.js` (e.g. `p-resin-frame.jpg`); extra gallery shots: `p-resin-frame-2.jpg`, `-3`, `-4` |
| About teaser / story | `about-hands.jpg`, `about-story.jpg`, `story.jpg`, `raw-materials.jpg` |
| Page banners | `banner-collections.jpg`, `banner-about.jpg`, `banner-contact.jpg` |
| Reviews | `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` |
| Instagram | `insta-1.jpg` … `insta-6.jpg` |

## Editing products & collections
All product/collection data lives at the top of `js/main.js` (`COLLECTIONS`, `PRODUCTS`).
Header and footer are shared and rendered from `js/main.js` too, so edit them once.

## Notes
- Cart and wishlist are saved in the browser (localStorage). Checkout is a placeholder — connect
  Razorpay / Shopify / WooCommerce for real payments.
- Newsletter and custom-order forms show a thank-you message but don't send anywhere yet; hook them
  up to Formspree, EmailJS or your backend.
- Colours and fonts are CSS variables at the top of `css/style.css`.
