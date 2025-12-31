import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Prev from "../assets/Icons/prev.svg";
import Next from "../assets/Icons/next.svg";
import { slides } from "../Constants";
import { useLanguage } from "../Contexts/LanguageContext";
import { Link } from "react-router";

const Slider = () => {
  const { language, t } = useLanguage();
  const currentSlides = slides[language];
  const sliderTexts = t("slider");

  return (
    <section className="relative w-[95%] mx-auto mt-18 bg-[linear-gradient(45deg,#f4f4f4,#d2d2d4)] rounded-xl min-[1201px]:h-[630px] py-8 md:py-5 overflow-hidden font-jost">
      {/* التايتل الثابت */}
      <h1
        className={`max-[1200px]:relative max-[1200px]:mb-8 max-[1200px]:mt-8 absolute top-[7%] mx-auto text-center font-bold left-0 right-0 md:max-w-[85%] z-10 ${language === "ar" ? "font-cairo leading-relaxed" : "font-jost"
          } ${language === "ar" ? "text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl" : "text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          }`}
      >
        {sliderTexts.mainHeading}
      </h1>

      {/* الصورة - ثابتة على الشاشات الصغيرة */}
      <div className="max-[1200px]:relative max-[1200px]:mx-auto max-[1200px]:mb-8 max-[1200px]:flex max-[1200px]:justify-center absolute md:left-0 md:right-0 sm:right-4 right-5 bottom-[3%] md:bottom-[3%]">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1200}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="mx-auto h-56 sm:h-72 md:h-96 lg:max-h-[480px]"
          dir={language === "ar" ? "rtl" : "ltr"}
          key={language}
        >
          {currentSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt="Product"
                  className="max-[1200px]:static mx-auto h-56 sm:h-72 md:h-96 lg:max-h-[480px] object-contain animate-float"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* القائمة بالأيقونات */}
      <div className="max-[1200px]:flex max-[1200px]:justify-center max-[1200px]:mb-8 max-md:hidden">
        <ul className="max-[1200px]:relative max-[1200px]:right-[0%] absolute bottom-[15%] right-[4%] w-full max-w-[350px] z-10">
          {t("sliderUlContent").map((slide, idx) => (
            <div key={idx} className="animate-float-delayed">
              <li className="flex items-center justify-between mb-6">
                <span
                  className={`text-lg font-medium ${language === "ar" ? "font-cairo" : "font-lato"
                    } text-text dark:text-black`}
                >
                  {slide.title}
                </span>
                {slide.icon}
              </li>
              <hr className="my-2 text-gray-500 opacity-25" />
            </div>
          ))}
        </ul>
      </div>

      {/* الوصف والزر */}
      <div className="max-[1200px]:relative max-[1200px]:mx-auto max-[1200px]:left-[0%] max-[1200px]:text-center absolute bottom-[15%] md:bottom-[25%] left-[4%] max-w-[350px] z-10">
        <h3
          className={`max-[1200px]:relative max-[1200px]:mb-4 font-bold absolute max-md:top-[30%] ${language === "ar"
            ? "font-cairo text-lg px-4 py-3"
            : "font-family-lato text-sm px-3 py-2"
            } bg-black text-white rounded-full animate-bounce-slow max-[1200px]:inline-block`}
        >
          {sliderTexts.smartTag}
        </h3>
        <h5
          className={`max-w-[300px] md:max-w-[350px] max-[1200px]:mx-auto max-[1200px]:mt-0 mt-18 ${language === "ar" ? "font-cairo text-[20px]!" : "font-lato"
            } text-paragraph dark:text-black mb-6`}
        >
          {sliderTexts.description}
        </h5>
        <button className={`max-[1200px]:relative max-[1200px]:bottom-0 absolute max-md:bottom-[-60%] bottom-[-50%] animate-bounce-slow group cursor-pointer max-[1200px]:mt-6 hover:scale-105 transition-transform duration-300`}>
          <div className="flex items-center gap-6 bg-black text-white px-3 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            <p
              className={`uppercase  ${language === "ar"
                ? "font-cairo mr-2 text-xl!"
                : "font-jost ml-2"
                }`}
            >
              {sliderTexts.buttonText}
            </p>
            <div className="text-white bg-blue-600 group-hover:bg-white group-hover:text-blue-600 rounded-full px-3 py-2 transition-transform duration-500 group-hover:rotate-360">
              <i
                className="fa-solid fa-arrow-up fa-rotate-by font-extralight text-lg"
                style={{ "--fa-rotate-angle": "45deg" }}
              ></i>
            </div>
          </div>
        </button>
      </div>

      {/* أزرار التنقل مخفية */}
      <button className="swiper-button-prev-custom hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-lg">
        <img src={Prev} alt="Previous" className="w-6 h-6" />
      </button>
      <button className="swiper-button-next-custom hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2 shadow-lg">
        <img src={Next} alt="Next" className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Slider;
