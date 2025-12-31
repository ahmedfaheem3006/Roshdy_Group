import { useLanguage } from "../Contexts/LanguageContext"
import { Headphones, CreditCard, ShieldCheck, Medal, Truck } from "lucide-react"

const Features = () => {
  const { language } = useLanguage();

  const featuresData = {
    en: [
      { title: "10AM TO 11PM SUPPORT", description: "01220068743", Icon: Headphones },
      { title: "ACCEPT PAYMENT", description: "Cash, Instapay, Vodafone Cash", Icon: CreditCard },
      { title: "SECURED PAYMENT", description: "100% secured", Icon: ShieldCheck },
      { title: "7 YEARS GUARANTEE", description: "14 Days Return", Icon: Medal },
      { title: "FAST SHIPPING", description: "All Over Egypt", Icon: Truck },
    ],
    ar: [
      { title: "دعم من 10ص الى 11م", description: "01220068743", Icon: Headphones },
      { title: "طرق الدفع", description: "كاش، انستاباي، فودافون كاش", Icon: CreditCard },
      { title: "دفع آمن", description: "مؤمن 100%", Icon: ShieldCheck },
      { title: "ضمان 7 سنوات", description: "استرجاع خلال 14 يوم", Icon: Medal },
      { title: "شحن سريع", description: "لجميع أنحاء مصر", Icon: Truck },
    ],
  };

  const features = featuresData[language] || featuresData.en;
  const isArabic = language === "ar";

  // Function to determine border classes
  const getBorderClasses = (index) => {
    const isLast = index === features.length - 1;
    
    let classes = [];
    
    // Mobile (1 column): bottom border for all except last
    if (!isLast) {
      classes.push('border-b border-black/20 dark:border-white/20');
    }
    
    // SM (2 columns): vertical divider for left column (0, 2, 4...)
    // Reset mobile bottom borders and add new logic
    classes.push('sm:border-b-0');
    
    if (index % 2 === 0 && !isLast) {
      // Left column items get right border (using border-e for RTL support)
      classes.push('sm:border-e sm:border-e-black/20 sm:dark:border-e-white/20');
    }
    
    // SM: bottom border for rows that have items below them
    if (index < 4) {
      classes.push('sm:border-b sm:border-b-black/20 sm:dark:border-b-white/20');
    }
    
    // LG (5 columns): only vertical dividers between items
    classes.push('lg:border-b-0');
    
    if (!isLast) {
      classes.push('lg:border-e lg:border-e-black/20 lg:dark:border-e-white/20');
    } else {
      classes.push('lg:border-e-0');
    }
    
    return classes.join(' ');
  };

  return (
    <section className='py-6 md:py-8'>
      <div className="w-[95%] mx-auto">
        <div className="border border-black/20 dark:border-white/20 rounded-xl bg-white dark:bg-[#1a1a1a] py-4 md:py-5 px-3 md:px-6">
          
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;

              return (
                <div
                  key={index}
                  className={`
                    flex items-center
                    py-4 sm:py-5 lg:py-3
                    justify-start lg:justify-center
                    ${getBorderClasses(index)}
                  `}
                >
                  <div className="flex items-center gap-3 md:gap-4 px-2 sm:px-4 lg:px-3">
                    <IconComponent
                      className="flex-shrink-0 hover:scale-125 transition-transform duration-300"
                      style={{ color: '#2b8afe' }}
                      size={36}
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className={`font-semibold uppercase text-text dark:text-white tracking-wide ${isArabic ? "font-cairo text-[16px] sm:text-[18px] md:text-[17px] lg:text-[18px]" : "font-jost text-[14px] sm:text-[16px] md:text-[15px] lg:text-[16px]"}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-paragraph dark:text-[#b79b83] pt-1 ${isArabic ? "font-cairo text-[13px] sm:text-[12px] md:text-[14px]" : "font-lato text-[12px] sm:text-[11px] md:text-[13px]"}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features