import SH1 from "../assets/Images/1.webp";
import SH2 from "../assets/Images/2.webp";
import SH3 from "../assets/Images/3.webp";
import SH4 from "../assets/Images/4.webp";

// 1️⃣ Base nav links (with keys + paths only)
export const navLinksBase = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "products", path: "/products" },
  { key: "blogs", path: "/blog" },
  { key: "contact", path: "/contact" },
];

// 2️⃣ Titles for each language
export const titles = {
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    blogs: "Blogs",
    contact: "Contact",
  },
  ar: {
    home: "الرئيسية",
    about: "حول",
    products: "المنتجات",
    blogs: "المدونات",
    contact: "اتصل بنا",
  },
};

export const newsletterContent = {
  en: {
    title: "Subscribe Us Now",
    description:
      "Get latest news, updates and deals directly mailed to your inbox.",
    placeholder: "Your email address here",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing!",
  },
  ar: {
    title: "اشترك معنا الأن",
    description:
      "احصل على آخر الأخبار والتحديثات والعروض مباشرة في بريدك الإلكتروني.",
    placeholder: "أدخل بريدك الإلكتروني",
    buttonText: "اشترك",
    successMessage: "شكراً لاشتراكك!",
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

export const slides = {
  en: [
    {
      title: "CONTROL EVERYTHING\nWITH ONE TOUCH",
      image: SH1,
      button: "SHOP PRODUCT",
    },
    {
      title: "SMART TECHNOLOGY\nFOR MODERN LIVING",
      image: SH2,
      button: "SHOP PRODUCT",
    },
    {
      title: "LIVE SMARTER\nNOT HARDER",
      image: SH3,
      button: "SHOP PRODUCT",
    },
    {
      title: "SMART LIVING\nSTARTS HERE",
      image: SH4,
      button: "SHOP PRODUCT",
    },
  ],
  ar: [
    {
      title: "تحكم في كل شيء\nبلمسة واحدة.",
      image: SH1,
      button: "تسوق المنتج",
    },
    {
      title: "تقنية ذكية\nلحياة عصرية",
      image: SH2,
      button: "تسوق المنتج",
    },
    {
      title: "عش بذكاء\nليس بجهد",
      image: SH3,
      button: "تسوق المنتج",
    },
    {
      title: "الحياة الذكية\nتبدأ هنا",
      image: SH4,
      button: "تسوق المنتج",
    },
  ],
};

export const sliderUlContent = {
  en: [
    { title: "Security and Surveillance", icon: <i className="fa-solid fa-shield-halved"></i> },
    { title: "Climate and Air Control", icon: <i className="fa-solid fa-wind"></i> },
    { title: "Lighting and Ambiance", icon: <i className="fa-solid fa-lightbulb"></i> },
    { title: "Entertainment & Media", icon: <i className="fa-solid fa-tv"></i> },
  ],
  ar: [
    { title: "الأمن والمراقبة", icon: <i className="fa-solid fa-shield-halved"></i> },
    { title: "التحكم في المناخ والهواء", icon: <i className="fa-solid fa-wind"></i> },
    { title: "الإضاءة والأجواء", icon: <i className="fa-solid fa-lightbulb"></i> },
    { title: "الترفيه والإعلام", icon: <i className="fa-solid fa-tv"></i> },
  ],
};
