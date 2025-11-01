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
      icon: <i className="fa-solid fa-cart-shopping text-hover size-6"></i>,
    },
    {
      title: "Quality guarantee",
      description: "We guarantee the quality of our products.",
      icon: <i className="fa-solid fa-check text-hover size-6"></i>,
    },
    {
      title: "Daily offers",
      description: "Get the best deals every day.",
      icon: <i className="fa-solid fa-tags text-hover size-6"></i>,
    },
    {
      title: "100% secure payment",
      description: "Your payment information is always safe with us.",
      icon: <i className="fa-solid fa-lock text-hover size-6"></i>,
    },
  ],
  ar: [
    {
      title: "توصيل مجاني",
      description: "احصل على طلباتك مع توصيل مجاني.",
      icon: <i className="fa-solid fa-cart-shopping text-hover size-6"></i>,
    },
    {
      title: "ضمان الجودة",
      description: "نحن نضمن جودة منتجاتنا.",
      icon: <i className="fa-solid fa-check text-hover size-6"></i>,
    },
    {
      title: "عروض يومية",
      description: "احصل على أفضل العروض كل يوم.",
      icon: <i className="fa-solid fa-tags text-hover size-6"></i>,
    },
    {
      title: "دفع آمن 100%",
      description: "معلومات الدفع الخاصة بك آمنة دائمًا معنا.",
      icon: <i className="fa-solid fa-lock text-hover size-6"></i>,
    },
  ],
};

