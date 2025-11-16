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

  return (
    <section className="relative w-[95%] mx-auto mt-18 bg-[linear-gradient(45deg,#f4f4f4,#d2d2d4)] rounded-xl h-[740px] md:h-[430px] lg:h-[630px] py-5 md:py-0 overflow-hidden font-jost">
      {/* المحتوى النصي الثابت مع أنيميشن */}
      <h1 className="absolute top-[7%] mx-auto text-center font-bold text-5xl md:text-7xl left-0 right-0 md:max-w-[85%] z-10 font-jost">
        Turn Your Smartphone into a Home Command Center
      </h1>

      <div className="absolute bottom-[15%] md:bottom-[25%] left-[4%] max-w-[350px] z-10">
        <h3 className="font-bold absolute max-md:top-[30%] font-family-lato bg-black text-white px-3 py-2 rounded-full text-sm animate-bounce-slow">
          ( 2035 ) SMART HOME FOR SMART LIVING
        </h3>
        <h5 className="max-w-[300px] md:max-w-[350px] mt-18 font-lato text-paragraph dark:text-paragraph-dark">
          Seamlessly connect and control every device with Orris — your
          all-in-one smart home solution powered by smartphone integration.
        </h5>
        <button className="absolute max-md:bottom-[-60%] bottom-[-70%] animate-bounce-slow">
          <div className="flex items-center gap-6 bg-black text-white px-3 py-2 rounded-full hover:bg-hover transition-colors duration-300">
            <p className="uppercase ml-2 font-jost">Get Started</p>
            <div className="text-white bg-blue-600 rounded-full p-2">
              <i
                className="fa-solid fa-arrow-up fa-rotate-by font-extralight text-lg"
                style={{ "--fa-rotate-angle": "45deg" }}
              ></i>
            </div>
          </div>
        </button>
      </div>

      <ul className="max-md:hidden absolute bottom-[15%] right-[4%] w-full max-w-[350px] z-10">
        {t("sliderUlContent").map((slide, idx) => (
          <div key={idx} className="animate-float-delayed">
            <li className="flex items-center justify-between mb-6">
              <span className="text-lg font-medium font-lato text-text dark:text-text-dark">
                {slide.title}
              </span>
              {slide.icon}
            </li>
            <hr className="my-2 text-gray-500 opacity-25" />
          </div>
        ))}
      </ul>

      {/* السلايدر للصور مع الأنيميشن */}
      <div className="absolute md:left-0 md:right-0 sm:right-4 right-5 bottom-[3%] md:bottom-[3%]">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true
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
                  className="mx-auto h-56 sm:h-72 md:h-96 lg:max-h-[480px] object-contain animate-float"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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