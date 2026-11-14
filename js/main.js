/* =========================================================
   BLOOMS by Aditi — shared layout, data & interactions
   ========================================================= */

/* ---------- Data ---------- */
const COLLECTIONS = [
  { id: "resin", name: "Resin Art Collection", tag: "Preserve moments in art.", img: "col-resin.jpg" },
  { id: "chenille", name: "Chenille Collection", tag: "Bunches of handmade happiness.", img: "col-chenille.jpg" },
  { id: "candles", name: "Scented Candle Collection", tag: "Light up your little joys.", img: "col-candles.jpg" },
  { id: "gifting", name: "Personalised Gifting Collection", tag: "Gifts with a heart.", img: "col-gifting.jpg" },
  { id: "accessories", name: "Creative Accessories & Décor", tag: "Add a touch of art.", img: "col-accessories.jpg" },
  { id: "jewellery", name: "Handmade Jewellery Collection", tag: "Adorn with artistry.", img: "col-jewellery.jpg" },
];

const PRODUCTS = [
  { id: "resin-floral-frame", name: "Resin Floral Frame", price: 1299, col: "resin", img: "p-resin-frame.jpg", best: true },
  { id: "sunflower-bouquet", name: "Sunflower Bouquet", price: 899, col: "chenille", img: "p-sunflower.jpg", best: true },
  { id: "tulip-candle", name: "Tulip Candle", price: 749, col: "candles", img: "p-tulip-candle.jpg", best: true },
  { id: "personalised-keychain", name: "Personalised Keychain", price: 499, col: "accessories", img: "p-keychain.jpg", best: true },
  { id: "floral-resin-tray", name: "Floral Resin Tray", price: 1799, col: "resin", img: "p-resin-tray.jpg", best: true },
  { id: "bubble-candle", name: "Bubble Candle", price: 599, col: "candles", img: "p-bubble-candle.jpg", best: true },
  { id: "resin-coaster-set", name: "Resin Coaster Set", price: 1299, col: "resin", img: "p-coasters.jpg" },
  { id: "baby-memory-keepsake", name: "Baby Memory Keepsake", price: 2499, col: "resin", img: "p-baby-keepsake.jpg" },
  { id: "tulip-bunch", name: "Chenille Tulip Bunch", price: 999, col: "chenille", img: "p-tulips.jpg" },
  { id: "lavender-stems", name: "Lavender Stems (Set of 5)", price: 649, col: "chenille", img: "p-lavender.jpg" },
  { id: "rose-jar-candle", name: "Rose Jar Candle", price: 899, col: "candles", img: "p-rose-candle.jpg" },
  { id: "hamper-box", name: "Blush Gift Hamper", price: 2299, col: "gifting", img: "p-hamper.jpg" },
  { id: "name-plaque", name: "Custom Name Plaque", price: 1499, col: "gifting", img: "p-plaque.jpg" },
  { id: "bow-bag-charm", name: "Bow Bag Charm", price: 399, col: "accessories", img: "p-bag-charm.jpg" },
  { id: "pressed-flower-pendant", name: "Pressed Flower Pendant", price: 899, col: "jewellery", img: "p-pendant.jpg" },
  { id: "resin-drop-earrings", name: "Resin Drop Earrings", price: 699, col: "jewellery", img: "p-earrings.jpg" },
];

const IMG_PATH = "images/";
const rupee = (n) => "₹" + n.toLocaleString("en-IN");
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Icons ---------- */
const ICON = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20s-7-4.4-9.2-8.6C1.2 8.2 3 4.5 6.6 4.5c2 0 3.3 1.1 4.1 2.3l1.3 1.6 1.3-1.6c.8-1.2 2.1-2.3 4.1-2.3 3.6 0 5.4 3.7 3.8 6.9C19 15.6 12 20 12 20z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>',
  diamond: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l3 16 3-16"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="8" width="18" height="4"/><path d="M5 12v8h14v-8M12 8v12"/><path d="M12 8S10.5 4 8 4.5 7.5 8 12 8zm0 0s1.5-4 4-3.5S16.5 8 12 8z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19 14 10"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 6h12v10H2zM14 9h4l3 3v4h-7"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>',
  shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 9h16l-1-5H5zM5 9v11h14V9"/><path d="M10 20v-5h4v5"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M11 8c3-1 5 1 4.5 3.5S12 14 11.5 12M11.5 10.5 9.5 20"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg>',
};

const FLORAL_SVG = `<svg viewBox="0 0 120 220" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">
  <path d="M60 220C58 170 55 120 70 60"/>
  <path d="M62 170c-18-6-30-20-32-36 16 2 28 14 32 36zM64 130c16-8 30-8 40-2-10 10-26 10-40 2z"/>
  <path d="M70 60c-10-14-10-30 0-44 10 14 10 30 0 44z"/>
  <path d="M70 60c-16-6-26-18-26-34 14 4 24 16 26 34zM70 60c16-6 26-18 26-34-14 4-24 16-26 34z"/>
  <path d="M58 100c-14-14-34-14-46-6 12 10 30 12 46 6z"/>
</svg>`;

/* ---------- Layout injection ---------- */
const page = document.body.dataset.page || "home";
const navItems = [
  { key: "home", href: "index.html", label: "Home" },
  { key: "collections", href: "collections.html", label: "Collections", dropdown: true },
  { key: "about", href: "about.html", label: "About Us" },
  { key: "custom", href: "contact.html#custom", label: "Customise Your Gift" },
  { key: "contact", href: "contact.html", label: "Contact" },
];

function renderHeader() {
  const el = $("#site-header");
  if (!el) return;
  el.outerHTML = `
  <div class="announce">
    <span class="spark">✦</span>Free Shipping on Orders Above ₹999
    <span class="spark">✦</span>Crafting Memories That Bloom Forever.<span class="spark">✦</span>
  </div>
  <header class="site-header">
    <div class="container header-inner">
      <button class="icon-btn menu-toggle" aria-label="Open menu">${ICON.menu}</button>
      <a href="index.html" class="logo" aria-label="BLOOMS by Aditi — Home">
        <span class="logo-mark">BA</span>
        <span class="logo-text"><strong>BLOOMS</strong><em>by Aditi</em></span>
      </a>
      <nav class="main-nav" aria-label="Main">
        <ul>
          ${navItems.map((n) => n.dropdown
            ? `<li class="has-dropdown"><a href="${n.href}" class="${page === n.key ? "active" : ""}">${n.label} <span class="chev">▾</span></a>
                 <ul class="dropdown">${COLLECTIONS.map((c) => `<li><a href="collections.html?c=${c.id}">${c.name}</a></li>`).join("")}</ul></li>`
            : `<li><a href="${n.href}" class="${page === n.key ? "active" : ""}">${n.label}</a></li>`).join("")}
        </ul>
      </nav>
      <div class="header-icons">
        <button class="icon-btn" id="searchBtn" aria-label="Search">${ICON.search}</button>
        <button class="icon-btn wish-icon" aria-label="Wishlist">${ICON.heart}<span class="badge" id="wishCount">0</span></button>
        <button class="icon-btn" id="cartBtn" aria-label="Cart">${ICON.bag}<span class="badge" id="cartCount">0</span></button>
      </div>
    </div>
    <div class="container search-bar" id="searchBar">
      <form action="collections.html"><input type="search" name="q" placeholder="Search resin art, candles, bouquets…" aria-label="Search products"></form>
    </div>
  </header>`;
}

function renderFooter() {
  const el = $("#site-footer");
  if (!el) return;
  el.outerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="logo">
          <span class="logo-mark">BA</span>
          <span class="logo-text"><strong>BLOOMS</strong><em>by Aditi</em></span>
        </a>
        <p class="footer-tag">Handcrafted with Love, Designed to Last.</p>
      </div>
      <div>
        <h4>Subscribe to our Newsletter</h4>
        <small>Be the first to know about new collections, special offers and more.</small>
        <form class="newsletter" id="newsletterForm">
          <input type="email" required placeholder="Your Email Address" aria-label="Email address">
          <button type="submit">Subscribe →</button>
        </form>
        <p class="form-msg" id="newsletterMsg"></p>
      </div>
      <div class="footer-links">
        <a href="collections.html">Shop Collections</a><a href="contact.html">Contact Us</a>
        <a href="about.html">About Us</a><a href="contact.html#shipping">Shipping &amp; Returns</a>
        <a href="contact.html#custom">Custom Orders</a><a href="#" data-open-newsletter>Get ${"10%"} Off ♡</a>
      </div>
      <div class="socials">
        <a href="#" aria-label="Instagram">${ICON.instagram}</a>
        <a href="#" aria-label="WhatsApp">${ICON.whatsapp}</a>
        <a href="#" aria-label="Pinterest">${ICON.pinterest}</a>
        <a href="#" aria-label="YouTube">${ICON.youtube}</a>
      </div>
    </div>
    <div class="footer-floral">${FLORAL_SVG}</div>
    <div class="footer-bottom">© ${new Date().getFullYear()} BLOOMS by Aditi. All rights reserved. &nbsp;|&nbsp; Crafting Memories That Bloom Forever. ♡</div>
  </footer>

  <aside class="drawer" id="cartDrawer" aria-label="Shopping bag">
    <header><h3>Your Bag</h3><button class="icon-btn" id="closeCart" aria-label="Close">✕</button></header>
    <div class="items" id="cartItems"></div>
    <footer>
      <div class="total"><span>Subtotal</span><span id="cartTotal">₹0</span></div>
      <button class="btn btn-primary btn-block" id="checkoutBtn">Checkout →</button>
    </footer>
  </aside>
  <div class="drawer-backdrop" id="backdrop"></div>
  <div class="toast" id="toast"></div>

  <nav class="mobile-tabbar" aria-label="Mobile">
    <a href="index.html" class="${page === "home" ? "active" : ""}">${ICON.home}Home</a>
    <a href="collections.html" class="${page === "collections" ? "active" : ""}">${ICON.grid}Collections</a>
    <a href="#" id="tabWish">${ICON.heart}Wishlist</a>
    <a href="#" id="tabBag">${ICON.bag}Bag</a>
  </nav>`;
}

/* ---------- Image loading with graceful fallback ---------- */
function loadImages(root = document) {
  $$(".ph[data-img]", root).forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = 1;
    const src = IMG_PATH + el.dataset.img;
    const img = new Image();
    img.onload = () => { el.style.backgroundImage = `url("${src}")`; el.classList.add("loaded"); };
    img.src = src;
  });
}

/* ---------- Product card ---------- */
function productCard(p, { addBtn = false } = {}) {
  return `<article class="product-card">
    <a href="product.html?id=${p.id}" class="ph" data-img="${p.img}" style="display:block" aria-label="${p.name}"></a>
    <button class="wish ${wish.has(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Add to wishlist">♡</button>
    <h4><a href="product.html?id=${p.id}">${p.name}</a></h4>
    <div class="price">${rupee(p.price)}</div>
    ${addBtn ? `<button class="btn btn-outline btn-sm add-mini" data-add="${p.id}">Add to Bag</button>` : ""}
  </article>`;
}
function collectionCard(c, i, { small = true } = {}) {
  return `<article class="collection-card reveal">
    <a href="collections.html?c=${c.id}" class="ph" data-img="${c.img}" aria-label="${c.name}"></a>
    <div class="body">
      <span class="num">0${i + 1}.</span>
      <h3>${c.name}</h3>
      <p>${c.tag}</p>
      <a href="collections.html?c=${c.id}" class="arrow-link">Explore Collection →</a>
    </div>
  </article>`;
}

/* ---------- Cart & wishlist (localStorage) ---------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
let cart = store.get("blooms-cart", []);
const wish = new Set(store.get("blooms-wish", []));

function toast(msg) {
  const t = $("#toast"); if (!t) return;
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 2200);
}
function addToCart(id, qty = 1, note = "") {
  const item = cart.find((i) => i.id === id && i.note === note);
  if (item) item.qty += qty; else cart.push({ id, qty, note });
  store.set("blooms-cart", cart); updateCart();
  toast("Added to your bag ♡");
}
function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const cc = $("#cartCount"); if (cc) cc.textContent = count;
  const wc = $("#wishCount"); if (wc) wc.textContent = wish.size;
  const list = $("#cartItems"); if (!list) return;
  if (!cart.length) { list.innerHTML = `<p class="empty">Your bag is empty.<br>Let something bloom ♡</p>`; }
  else list.innerHTML = cart.map((i, idx) => {
    const p = PRODUCTS.find((x) => x.id === i.id); if (!p) return "";
    return `<div class="item"><div class="ph" data-img="${p.img}"></div>
      <div><strong>${p.name}</strong><br>${i.qty} × ${rupee(p.price)}${i.note ? `<br><small>“${i.note}”</small>` : ""}</div>
      <button data-remove="${idx}" aria-label="Remove">✕</button></div>`;
  }).join("");
  const total = cart.reduce((s, i) => s + (PRODUCTS.find((p) => p.id === i.id)?.price || 0) * i.qty, 0);
  $("#cartTotal").textContent = rupee(total);
  loadImages(list);
}
function openCart(open = true) {
  $("#cartDrawer").classList.toggle("open", open);
  $("#backdrop").classList.toggle("open", open);
}

/* ---------- Global events ---------- */
function bindGlobal() {
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) { addToCart(add.dataset.add); return; }
    const w = e.target.closest("[data-wish]");
    if (w) {
      const id = w.dataset.wish;
      wish.has(id) ? wish.delete(id) : wish.add(id);
      store.set("blooms-wish", [...wish]);
      $$(`[data-wish="${id}"]`).forEach((b) => b.classList.toggle("on", wish.has(id)));
      updateCart(); toast(wish.has(id) ? "Saved to wishlist ♡" : "Removed from wishlist");
      return;
    }
    const rm = e.target.closest("[data-remove]");
    if (rm) { cart.splice(+rm.dataset.remove, 1); store.set("blooms-cart", cart); updateCart(); }
  });

  $("#cartBtn")?.addEventListener("click", () => openCart(true));
  $("#tabBag")?.addEventListener("click", (e) => { e.preventDefault(); openCart(true); });
  $("#tabWish")?.addEventListener("click", (e) => { e.preventDefault(); toast(`${wish.size} item(s) in your wishlist ♡`); });
  $("#closeCart")?.addEventListener("click", () => openCart(false));
  $("#backdrop")?.addEventListener("click", () => { openCart(false); $(".main-nav").classList.remove("open"); });
  $("#checkoutBtn")?.addEventListener("click", () => toast(cart.length ? "Checkout coming soon — connect your payment gateway." : "Your bag is empty"));
  $("#searchBtn")?.addEventListener("click", () => { const b = $("#searchBar"); b.classList.toggle("open"); if (b.classList.contains("open")) $("input", b).focus(); });

  const nav = $(".main-nav");
  $(".menu-toggle")?.addEventListener("click", () => { nav.classList.add("open"); $("#backdrop").classList.add("open"); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { openCart(false); nav?.classList.remove("open"); } });

  $("#newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault(); e.target.reset();
    $("#newsletterMsg").textContent = "Thank you for joining our blooming community ♡";
  });
}

/* ---------- Newsletter popup (a card that opens like a book) ---------- */
const NEWSLETTER = {
  discount: "10%",        // shown in the popup
  code: "BLOOMS10",       // coupon shown after signing up — create the same code in your store
  delayMs: 4000,          // opens this long after every page load / reload
};

function renderNewsletterPopup() {
  const wrap = document.createElement("div");
  wrap.className = "nl-popup";
  wrap.id = "nlPopup";
  wrap.setAttribute("role", "dialog");
  wrap.setAttribute("aria-modal", "true");
  wrap.setAttribute("aria-label", "Join the BLOOMS newsletter");
  wrap.innerHTML = `
    <div class="nl-book">
      <button class="nl-close" id="nlClose" aria-label="Close">Close ✕</button>

      <div class="nl-page" id="nlPage">
        <form class="nl-form" id="nlForm" novalidate>
          <h4>Join Our Blooming Circle</h4>
          <p>New collections, gifting ideas &amp; little surprises.</p>
          <input type="text" id="nlName" placeholder="Your Name" autocomplete="name" aria-label="Your name">
          <input type="email" id="nlEmail" placeholder="Your Email" autocomplete="email" aria-label="Your email" required>
          <div class="nl-error" id="nlError" aria-live="polite"></div>
          <button class="btn btn-primary" type="submit">Subscribe ♡</button>
          <div class="nl-ps">
            <span class="script">P.S.</span>
            <span>Get <strong>${NEWSLETTER.discount} off</strong> your first order after signing up — our little thank-you.</span>
          </div>
          <button type="button" class="nl-later" id="nlLater">Maybe later</button>
        </form>
      </div>

      <div class="nl-cover" id="nlCover">
        <div class="nl-face nl-front">
          <span class="nl-seal">BA</span>
          <span class="script">A little letter<br>for you ♡</span>
          <small>from BLOOMS by Aditi</small>
        </div>
        <div class="nl-face nl-back">
          <span class="nl-eyebrow">A Little Note From Our Studio</span>
          <h3>Hi, Beautiful!</h3>
          <p>Our little world of handmade magic is <span class="hl">MADE FOR YOU…</span></p>
          <span class="nl-aside">made with love, just for you ♡</span>
          <p>Step into a world where flowers never fade, memories last forever and every
            little detail is handcrafted with love.</p>
          <p class="nl-extra">Discover new creations, exclusive collections, behind-the-scenes stories
            and thoughtful gifting inspiration.</p>
          <p>Because every beautiful memory deserves to bloom forever.</p>
          <div class="nl-sign">— With love, Aditi ♡</div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(wrap);

  const open = () => {
    wrap.classList.add("show");
    setTimeout(() => wrap.classList.add("open"), 1500); // show the closed card first, then open it
    setTimeout(() => $("#nlEmail")?.focus({ preventScroll: true }), 3100);
  };
  const close = () => {
    wrap.classList.remove("open");
    setTimeout(() => wrap.classList.remove("show"), 700);
  };
  window.openNewsletter = open;

  $("#nlClose").addEventListener("click", close);
  $("#nlLater").addEventListener("click", close);
  wrap.addEventListener("click", (e) => { if (e.target === wrap) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && wrap.classList.contains("show")) close(); });
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open-newsletter]");
    if (t) { e.preventDefault(); open(); }
  });

  $("#nlForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#nlEmail"), err = $("#nlError");
    if (!email.value.trim() || !email.checkValidity()) { err.textContent = "Please enter a valid email address."; email.focus(); return; }
    const name = $("#nlName").value.trim().split(" ")[0];
    // TODO: send { name, email } to Mailchimp / Klaviyo / your backend here.
    $("#nlPage").innerHTML = `
      <div class="nl-thanks">
        <h4>Thank you${name ? ", " + name.replace(/[<>&"]/g, "") : ""}!</h4>
        <p style="font-size:.9rem;margin:6px 0 0">Excited to have you on board ♡<br>Here's your ${NEWSLETTER.discount} off code:</p>
        <div class="nl-code"><span id="nlCode">${NEWSLETTER.code}</span><button type="button" id="nlCopy">Copy</button></div>
        <p style="font-size:.75rem;color:var(--muted)">Use it at checkout on your first order.</p>
        <a href="collections.html" class="btn btn-primary btn-sm" style="margin-top:10px">Start Shopping →</a>
      </div>`;
    $("#nlCopy").addEventListener("click", () => {
      navigator.clipboard?.writeText(NEWSLETTER.code).then(() => toast("Code copied ♡"), () => {});
    });
  });

  // Auto-open on every page load / reload.
  setTimeout(open, NEWSLETTER.delayMs);
}

/* ---------- Reveal on scroll ---------- */
function bindReveal() {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Boot ---------- */
renderHeader();
renderFooter();
bindGlobal();
renderNewsletterPopup();
document.addEventListener("DOMContentLoaded", () => {
  window.pageInit?.();
  updateCart();
  loadImages();
  bindReveal();
});
