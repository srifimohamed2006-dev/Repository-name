# متجر M-SHOP

موقع بسيط (HTML/CSS/JS بدون أي أدوات بناء) لعرض منتجاتك من تاجر مع فلترة حسب الدولة والقسم.

## الملفات
```
m-shop/
  index.html          الصفحة الرئيسية (الأقسام + المنتجات الأكثر طلبًا)
  category.html       صفحة قسم واحد (تُفتح بـ category.html?cat=beauty)
  product.html         صفحة تفاصيل منتج (تُفتح بـ product.html?id=1)
  assets/css/style.css التصميم
  assets/js/data.js     بيانات الأقسام/الدول/المنتجات (هذا هو الملف الوحيد الذي تحتاج تعديله لإضافة منتجات)
  assets/js/main.js     المنطق العام (فلترة، اختيار الدولة، الروابط)
  assets/img/           صور المنتجات والشعار
```

## كيف تضيف منتج جديد؟
افتح `assets/js/data.js` وأضف كائنًا جديدًا داخل مصفوفة `PRODUCTS`، مثلاً:

```js
{
  id: 4,                       // رقم فريد لم يُستخدم من قبل
  name: "اسم المنتج",
  category: "electronics",     // أحد: beauty / electronics / clothes / home / entertainment
  country: "SA",                // أحد: EG / SA / AE / IQ / OM
  price: 199,
  currency: "ر.س",
  image: "assets/img/product-4.jpg",   // ضع الصورة في مجلد assets/img
  link: "رابط الهبوط من تاجر",
  description: "وصف قصير للمنتج.",
},
```
لا حاجة لأي تعديل آخر — سيظهر المنتج تلقائيًا في الرئيسية وفي صفحة قسمه ودولته.

## كيف تنشر الموقع مجانًا كرابط فعلي؟

### الخيار الأول: Netlify (الأسهل، بدون حساب GitHub)
1. ادخل إلى https://app.netlify.com/drop
2. اسحب مجلد `m-shop` بالكامل وأفلته في الصفحة
3. سيعطيك رابطًا فوريًا (يمكنك لاحقًا تغيير الاسم من إعدادات الموقع)

### الخيار الثاني: GitHub Pages
1. أنشئ حسابًا على github.com (إن لم يكن لديك)
2. أنشئ مستودعًا (Repository) جديدًا، وارفع محتويات مجلد `m-shop` بالكامل إليه
3. من إعدادات المستودع Settings → Pages، اختر Branch: main، ثم Save
4. بعد دقيقة سيظهر رابط بالشكل: `https://username.github.io/repo-name`

بعد النشر، شارك الرابط مباشرة مع متابعينك.
