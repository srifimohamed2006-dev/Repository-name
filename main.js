// ============================================================
// وظائف مشتركة: اختيار الدولة، الهيدر/الفوتر، فلترة المنتجات
// الدولة تُحفظ في رابط الصفحة (?country=EG) وتُنقل تلقائيًا بين
// كل الصفحات، بدون أي تخزين محلي في المتصفح.
// ============================================================

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getCountry() {
  const c = getParam("country");
  return COUNTRIES.some((x) => x.code === c) ? c : null;
}

function countryName(code) {
  const c = COUNTRIES.find((x) => x.code === code);
  return c ? c.name : code;
}

// يبني رابطًا لصفحة أخرى مع الحفاظ على باقي البارامترات + الدولة الحالية
function buildUrl(page, params = {}) {
  const url = new URL(page, window.location.href);
  const country = getCountry();
  if (country) url.searchParams.set("country", country);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.pathname.split("/").pop() + url.search;
}

function getProducts({ country, category } = {}) {
  return PRODUCTS.filter(
    (p) =>
      (!country || p.country === country) &&
      (!category || p.category === category)
  );
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

// ---------- الهيدر ----------
function renderHeader(mountId) {
  const country = getCountry();
  const el = document.getElementById(mountId);
  el.innerHTML = `
    <div class="header-row container">
      <a class="brand" href="${buildUrl("index.html")}">
        <img src="assets/img/logo.png" alt="شعار M-SHOP" />
        <span class="brand-name">M-<b>SHOP</b></span>
      </a>
      <div class="country-pill" id="countryPillBtn" title="تغيير الدولة">
        <span>🌍</span>
        <span>${country ? countryName(country) : "اختر دولتك"}</span>
      </div>
    </div>
  `;
  document
    .getElementById("countryPillBtn")
    .addEventListener("click", () => openCountryModal(true));
}

// ---------- الفوتر ----------
function renderFooter(mountId) {
  const el = document.getElementById(mountId);
  el.innerHTML = `
    <div class="container">
      <div class="brand-name" style="justify-content:center;display:flex;gap:6px;margin-bottom:8px;">M-<b>SHOP</b></div>
      <div>جميع المنتجات معروضة عبر روابط الشراء الرسمية للمورّد. الأسعار قابلة للتغيير.</div>
    </div>
  `;
}

// ---------- نافذة اختيار الدولة ----------
function openCountryModal(forced) {
  let overlay = document.getElementById("countryOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "countryOverlay";
    overlay.className = "overlay hidden";
    overlay.innerHTML = `
      <div class="modal">
        <h2>اختر دولتك</h2>
        <p>لعرض المنتجات المتاحة للشحن في دولتك فقط.</p>
        <div class="country-list">
          ${COUNTRIES.map(
            (c) => `<div class="country-opt" data-code="${c.code}">${c.name}</div>`
          ).join("")}
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelectorAll(".country-opt").forEach((opt) => {
      opt.addEventListener("click", () => {
        const url = new URL(window.location.href);
        url.searchParams.set("country", opt.dataset.code);
        window.location.href = url.pathname.split("/").pop() + url.search;
      });
    });
  }
  overlay.classList.remove("hidden");
  if (!forced) {
    overlay.querySelector(".modal p").textContent =
      "لعرض المنتجات المتاحة للشحن في دولتك فقط.";
  }
}

function ensureCountrySelected() {
  if (!getCountry()) {
    openCountryModal(false);
    return false;
  }
  return true;
}
