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
  const { language, t } = useLanguage();

  const currentSlides = slides[language];

  return (
    <section className="relative w-[80%] mx-auto mt-24 bg-[linear-gradient(45deg,#f4f4f4,#d2d2d4)] rounded-xl h-[900px] md:h-[500px] lg:h-[800px] py-8 md:py-0">
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
        {currentSlides.map((index) => (
          <SwiperSlide key={index} className="relative">
            <h1 className="absolute top-[10%] mx-auto text-center font-bold text-5xl md:text-7xl left-0 right-0  md:max-w-[85%]">
              Turn Your Smartphone into a Home Command Center
            </h1>
            {/* <div
              className={`flex ${
                language === "ar"
                  ? "flex-col-reverse md:flex-row"
                  : "flex-col-reverse md:flex-row"
              } items-center justify-between h-full padding-section gap-6 md:gap-0 py-8 md:py-0 mt-14`}
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
            </div> */}
            <div className="absolute bottom-[20%] md:bottom-[30%] left-[4%] max-w-[350px]">
              <h3 className="font-bold absolute max-md:top-[30%]">
                ( 2035 ) SMART HOME FOR SMART LIVING
              </h3>
              <h5 className="max-w-[300px] md:max-w-[350px] mt-30">
                Seamlessly connect and control every device with Orris — your
                all-in-one smart home solution powered by smartphone
                integration.
              </h5>
              <button className="absolute max-md:bottom-[-60%] bottom-[-70%]">
                <div className="flex items-center gap-6 bg-black text-white px-3 py-2 rounded-full ">
                  <p className="uppercase ml-2">Get Started</p>
                  <div className="text-white bg-blue-600 rounded-full p-2">
                    {/* icon  insert here an arrow that is 45 deg that aim at the top right corner*/}
                    <i
                      className="fa-solid fa-arrow-up fa-rotate-by font-extralight text-lg"
                      style={{ "--fa-rotate-angle": "45deg" }}
                    ></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="absolute md:left-0 md:right-0 sm:right-4 right-5 bottom-[10%] md:bottom-[15%]">
              <img
                src={index.image}
                alt="Product"
                className="mx-auto h-56 sm:h-72 md:h-96 lg:max-h-[480px] object-contain"
              />
            </div>
            <ul className="max-md:hidden absolute  bottom-[15%]  right-[4%] w-full max-w-[350px]">
              {t("sliderUlContent").map((slide, idx) => (
                <div key={idx}>
                  <li className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium ">{slide.title}</span>
                    {/* icon */}
                    {slide.icon}
                  </li>
                  <hr className="my-2 text-gray-500 opacity-25" />
                </div>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows - Hidden on mobile */}
      {/* <button
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
      </button> */}
      {/*  */}
    </section>
  );
};

export default Slider;
