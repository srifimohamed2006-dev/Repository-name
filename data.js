// ============================================================
// بيانات المتجر — عدّل هنا فقط لإضافة أو تعديل منتجات/أقسام/دول
// ============================================================

const COUNTRIES = [
  { code: "EG", name: "مصر" },
  { code: "SA", name: "المملكة العربية السعودية" },
  { code: "AE", name: "الإمارات العربية المتحدة" },
  { code: "IQ", name: "العراق" },
  { code: "OM", name: "عمان" },
];

const CATEGORIES = [
  { id: "beauty", name: "الصحة والجمال" },
  { id: "electronics", name: "الإلكترونيات" },
  { id: "clothes", name: "الملابس" },
  { id: "home", name: "المنزل" },
  { id: "entertainment", name: "منتجات ترفيهية" },
];

// لإضافة منتج جديد: انسخ كائن كامل من الأسفل وعدّل قيمه.
// id يجب أن يكون فريدًا. country يجب أن يطابق أحد أكواد COUNTRIES بالأعلى.
const PRODUCTS = [
  {
    id: 1,
    name: "معالج بهتان الملابس",
    category: "beauty",
    country: "EG",
    price: 399,
    currency: "ج.م",
    image: "assets/img/product-1.jpg",
    link: "https://2285656.eg.dukan.shop/products/4cbbc36af093486395f41f293b3f61a8",
    description:
      "منتج مخصص لإعادة حيوية ألوان الملابس الباهتة. يعالج بهتان الأقمشة الملونة ويعيد لها لمعانها ونضارتها الأولى، مناسب لكل أنواع الأقمشة.",
  },
  {
    id: 2,
    name: "جهاز الترا سونيك لتنظيف البشرة",
    category: "beauty",
    country: "EG",
    price: 250,
    currency: "ج.م",
    image: "assets/img/product-2.png",
    link: "https://2285656.eg.dukan.shop/products/2cc0fc98a8664e058a45a2c4828fcb96",
    description:
      "جهاز تنظيف بشرة منزلي بتقنية الموجات فوق الصوتية، يعمل على إزالة الرؤوس السوداء والزيوت الزائدة، ويأتي مع رأسين إضافيين للتدليك والتنظيف العميق.",
  },
  {
    id: 3,
    name: "سيروم للعناية بالبشرة",
    category: "beauty",
    country: "EG",
    price: 400,
    currency: "ج.م",
    image: "assets/img/product-3.jpg",
    link: "https://2285656.eg.dukan.shop/products/dc58b535953046a584763c821b913244",
    description:
      "سيروم ريتينول مضاد لعلامات التقدم في السن، يساعد على تقليل التجاعيد، ويمنح البشرة نعومة ونضارة ومرونة. قوام خفيف سريع الامتصاص مناسب للاستخدام اليومي.",
  },
];
