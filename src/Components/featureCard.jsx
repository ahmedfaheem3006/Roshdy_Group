import { useLanguage } from "../Contexts/LanguageContext";
const FeatureCard = ({ title, description, icon }) => {
  const { language } = useLanguage();

  return (
    <div className="flex  gap-3.5">
      {icon && (
        <img
          src={`/src/assets/Icons/${icon}`}
          alt={title}
          className="size-7 mt-1"
        />
      )}
      <div>
        <h3 className={`text-[18px] tracking-[6%] uppercase text-text dark:text-text-dark text-nowrap mb-1 ${language === "ar" ? "font-cairo" : "font-jost"}`}>
          {title}
        </h3>
        <p className={`font-light text-[12px] text-paragraph dark:text-paragraph-dark tracking-[3%] leading-[138%] ${language === "ar" ? "font-cairo" : "font-lato"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
