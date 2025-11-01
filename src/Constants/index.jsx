// 1️⃣ Base nav links (with keys + paths only)
export const navLinksBase = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "blogs", path: "/blogs" },
  { key: "contact", path: "/contact" },
];

// 2️⃣ Titles for each language
export const titles = {
  en: {
    home: "HOME",
    about: "ABOUT",
    blogs: "BLOGS",
    contact: "CONTACT",
  },
  ar: {
    home: "الرئيسية",
    about: "حول",
    blogs: "المدونات",
    contact: "اتصل بنا",
  },
};

// 3️⃣ Features section content with icons as strings

// title and description for each feature in both languages
export const featuresContent = {
  en: [
    {
      title: "Free delivery",
      description: "Get your orders delivered for free.",
      icon: "cart.svg",
    },
    {
      title: "Quality guarantee",
      description: "We guarantee the quality of our products.",
      icon: "quality.svg",
    },
    {
      title: "Daily offers",
      description: "Get the best deals every day.",
      icon: "offer.svg",
    },
    {
      title: "100% secure payment",
      description: "Your payment information is always safe with us.",
      icon: "security.svg",
    },
  ],
  ar: [
    {
      title: "توصيل مجاني",
      description: "احصل على طلباتك مع توصيل مجاني.",
      icon: "cart.svg",
    },
    {
      title: "ضمان الجودة",
      description: "نحن نضمن جودة منتجاتنا.",
      icon: "quality.svg",
    },
    {
      title: "عروض يومية",
      description: "احصل على أفضل العروض كل يوم.",
      icon: "offer.svg",
    },
    {
      title: "دفع آمن 100%",
      description: "معلومات الدفع الخاصة بك آمنة دائمًا معنا.",
      icon: "security.svg",
    },
  ],
};

