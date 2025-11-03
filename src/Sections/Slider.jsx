import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Prev from "../assets/Icons/prev.svg";
import Next from "../assets/Icons/next.svg";
import { slides } from "../Constants";

import { useLanguage } from "../Contexts/LanguageContext";
import { Link } from "react-router";

const Slider = () => {
  const { language } = useLanguage();

  const currentSlides = slides[language];

  return (
    <section className="relative w-full bg-[#edf1f3dd] h-auto md:h-[500px] lg:h-[612px] py-8 md:py-0">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
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
        className="h-full"
        dir={language === "ar" ? "rtl" : "ltr"}
        key={language}
      >
        {currentSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex ${
                language === "ar"
                  ? "flex-col-reverse md:flex-row"
                  : "flex-col-reverse md:flex-row"
              } items-center justify-between h-full padding-section gap-6 md:gap-0 py-8 md:py-0`}
            >
              <div
                className={`flex-1 space-y-4 md:space-y-12 ${
                  language === "ar"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  tracking-wide text-text ${
                    language === "ar" ? "font-cairo" : "font-jost"
                  }`}
                >
                  {slide.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < slide.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <button
                  className={`bg-text text-white px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm font-medium tracking-wider hover:bg-hover transition-colors rounded-md ${
                    language === "ar" ? "font-cairo" : "font-lato"
                  } uppercase`}
                >
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <Link to="/shop">{slide.button}</Link>
                  </div>
                </button>
              </div>
              <div
                className={`flex-1 flex ${
                  language === "ar"
                    ? "justify-center md:justify-start"
                    : "justify-center md:justify-end"
                }`}
              >
                <img
                  src={slide.image}
                  alt="Product"
                  className="h-56 sm:h-72 md:h-96 lg:max-h-[480px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows - Hidden on mobile */}
      <button
        className={`swiper-button-prev-custom hidden md:block absolute ${
          language === "ar"
            ? "right-4 md:right-8 lg:right-12"
            : "left-4 md:left-8 lg:left-12"
        } top-1/2 -translate-y-1/2 z-10 cursor-pointer group`}
      >
        <img
          src={Prev}
          alt="Previous"
          className={`w-8 h-12 md:w-12 md:h-20 lg:w-14 lg:h-24 opacity-50 group-hover:opacity-100 transition-opacity object-contain ${
            language === "ar" ? "rotate-180" : ""
          }`}
        />
      </button>

      <button
        className={`swiper-button-next-custom hidden md:block absolute ${
          language === "ar"
            ? "left-4 md:left-8 lg:left-12"
            : "right-4 md:right-8 lg:right-12"
        } top-1/2 -translate-y-1/2 z-10 cursor-pointer group`}
      >
        <img
          src={Next}
          alt="Next"
          className={`w-8 h-12 md:w-12 md:h-20 lg:w-14 lg:h-24 opacity-50 group-hover:opacity-100 transition-opacity object-contain ${
            language === "ar" ? "rotate-180" : ""
          }`}
        />
      </button>
    </section>
  );
};

export default Slider;
