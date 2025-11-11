import { useLanguage } from "../Contexts/LanguageContext";
const ContactHero = () => {
  const { language } = useLanguage();
  return (
    <section className="w-full h-[281px] bg-section-bg dark:bg-section-bg-dark flex items-center justify-center flex-col gap-6">
      {language === "en" ? (
        <h1 className="font-jost font-light text-[83px] tracking-[2%] leading-[114%] uppercase text-text dark:text-white">
          Contact Us
        </h1>
      ) : (
        <h1 className="font-cairo font-light text-[83px] tracking-[2%] leading-[114%] uppercase text-text dark:text-white">
          تواصل معنا
        </h1>
      )}
      {language === "en" ? (
        <pre className="font-lato font-light text-[16px] tracking-[3%] leading-[138%] text-text dark:text-white">
          Home   &gt;   <span className="text-hover">Contact Us</span>{" "}
        </pre>
      ) : (
        <pre className="font-cairo font-light text-[16px] tracking-[3%] leading-[138%] text-text dark:text-white">
          الرئيسية   &gt;{"   "}
          <span className="text-hover">اتصل بنا</span>
        </pre>
      )}
    </section>
  );
};

export default ContactHero;
