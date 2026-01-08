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
    about: "About Us",
    products: "Products",
    blogs: "Blogs",
    contact: "Contact Us",
  },
  ar: {
    home: "الرئيسية",
    about: "تفاصيل عنا",
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

// 3️⃣ Features section content with icons
export const featuresContent = {
  en: [
    {
      title: "10AM TO 6PM SUPPORT",
      description: "01050627310",
      iconName: "headset",
    },
    {
      title: "ACCEPT PAYMENT",
      description: "Cash, Instapay",
      iconName: "credit-card",
    },
    {
      title: "SECURED PAYMENT",
      description: "100% secured",
      iconName: "shield",
    },
    {
      title: "7 YEARS GUARANTEE",
      description: "14 DAYS RETURN",
      iconName: "medal",
    },
    {
      title: "FAST SHIPPING",
      description: "All Over Egypt",
      iconName: "truck",
    },
  ],
  ar: [
    {
      title: "دعم من 10ص الى 6م",
      description: "01050627310",
      iconName: "headset",
    },
    {
      title: "طرق الدفع",
      description: "كاش، انستاباي",
      iconName: "credit-card",
    },
    {
      title: "دفع آمن",
      description: "مؤمن 100%",
      iconName: "shield",
    },
    {
      title: "ضمان 7 سنوات",
      description: "استرجاع خلال 14 يوم",
      iconName: "medal",
    },
    {
      title: "شحن سريع",
      description: "لجميع أنحاء مصر",
      iconName: "truck",
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
    {
      title: "Security and Surveillance",
      icon: <i className="fa-solid fa-shield-halved"></i>,
    },
    {
      title: "Climate and Air Control",
      icon: <i className="fa-solid fa-wind"></i>,
    },
    {
      title: "Lighting and Ambiance",
      icon: <i className="fa-solid fa-lightbulb"></i>,
    },
    {
      title: "Entertainment & Media",
      icon: <i className="fa-solid fa-tv"></i>,
    },
  ],
  ar: [
    {
      title: "الأمن والمراقبة",
      icon: <i className="fa-solid fa-shield-halved"></i>,
    },
    {
      title: "التحكم في المناخ والهواء",
      icon: <i className="fa-solid fa-wind"></i>,
    },
    {
      title: "الإضاءة والأجواء",
      icon: <i className="fa-solid fa-lightbulb"></i>,
    },
    { title: "الترفيه والإعلام", icon: <i className="fa-solid fa-tv"></i> },
  ],
};

// 4️⃣ Slider section content
export const sliderContent = {
  en: {
    mainHeading: "Turn Your Smartphone into a Home Command Center",
    smartTag: "( 2026 ) SMART HOME FOR SMART LIVING",
    description:
      "Seamlessly connect, automate, and control every smart device in your home—directly from your phone.",
    buttonText: "Get Started",
  },
  ar: {
    mainHeading: "حوّل هاتفك الذكي إلى مركز أوامر للمنزل",
    smartTag: "( 2026 ) بيت ذكي لحياة ذكية",
    description:
      "تحكّم في كل أجهزة منزلك الذكية بسهولة من هاتفك، واستمتع بتجربة منزل موحّد وذكي بالكامل.",
    buttonText: "ابدأ الآن",
  },
};

// 5️⃣ Footer Section Content
export const footerContent = {
  en: {
    about: {
      title: "RG SMART HOME",
      description: "Professional services with excellence and innovation across multiple industries.",
    },
    quickLinks: {
      title: "QUICK LINKS",
      links: [
        { label: "HOME", path: "/" },
        { label: "ABOUT", path: "/about" },
        { label: "SHOP", path: "/products" },
        { label: "BLOGS", path: "/blog" },
        { label: "CONTACT", path: "/contact" },
      ]
    },
    helpInfo: {
      title: "HELP & INFO",
      links: [
        { label: "TRACK YOUR ORDER", path: "/" }, // Placeholder paths
        { label: "RETURNS POLICIES", path: "/" },
        { label: "SHIPPING + DELIVERY", path: "/" },
        { label: "CONTACT US", path: "/contact" },
        { label: "FAQS", path: "/" },
      ]
    },
    contact: {
      title: "CONTACT US",
      queryText: "Do you have any queries or suggestions?",
      email: "RG.ROSHDYGROUP@GMAIL.COM",
      supportText: "If you need support? Just give us a call.",
      phone: "01200777756",
    },
    copyright: "Copyright 2026 RG Smart Home. All rights reserved.",
    shipWith: "We ship with:",
    paymentOptions: "Payment options:",
  },
  ar: {
    about: {
      title: "RG SMART HOME",
      description: "خدمات احترافية بتميز وابتكار عبر العديد من الصناعات.",
    },
    quickLinks: {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", path: "/" },
        { label: "من نحن", path: "/about" },
        { label: "المتجر", path: "/products" },
        { label: "المدونات", path: "/blog" },
        { label: "تواصل معنا", path: "/contact" },
      ]
    },
    helpInfo: {
      title: "المساعدة والمعلومات",
      links: [
        { label: "تتبع طلبك", path: "/" },
        { label: "سياسات الاسترجاع", path: "/" },
        { label: "الشحن والتوصيل", path: "/" },
        { label: "اتصل بنا", path: "/contact" },
        { label: "الأسئلة الشائعة", path: "/" },
      ]
    },
    contact: {
      title: "اتصل بنا",
      queryText: "هل لديك أي استفسارات أو مقترحات؟",
      email: "RG.ROSHDYGROUP@GMAIL.COM",
      supportText: "هل تحتاج إلى دعم؟ فقط اتصل بنا.",
      phone: "01200777756",
    },
    copyright: "حقوق النشر 2026 RG Smart Home. جميع الحقوق محفوظة.",
    shipWith: "نحن نشحن مع:",
    paymentOptions: "خيارات الدفع:",
  },
};
