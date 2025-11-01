import FeatureCard from "../Components/featureCard";
import { useLanguage } from "../Contexts/LanguageContext"

const Features = () => {
  const { t } = useLanguage();
  
  return (
    <section className=' py-16 md:py-20 lg:py-24 '>
      <div className="padding-section">
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start gap-8 md:gap-10 lg:gap-20 '>
          {t("features").map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features