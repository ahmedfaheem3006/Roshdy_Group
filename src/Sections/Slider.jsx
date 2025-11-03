import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Prev from "../assets/Icons/prev.svg";
import Next from "../assets/Icons/next.svg";
import Hero1 from "../assets/Images/Hero1.png";
import Hero2 from "../assets/Images/Hero2.png";

const Slider = () => {
  return (
    <section className="relative  w-full bg-[#edf1f3dd] h-[500px] md:h-[612px]">
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
      >
        <SwiperSlide>
          <div className="flex items-center justify-between h-full padding-section">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-text">
                YOUR PRODUCTS
                <br />
                ARE GREAT.
              </h2>
              <button className="bg-text text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-hover transition-colors">
                SHOP PRODUCT
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src={Hero1}
                alt="Product"
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between h-full padding-section">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-text">
                DISCOVER NEW
                <br />
                COLLECTION.
              </h2>
              <button className="bg-text text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-hover transition-colors">
                SHOP PRODUCT
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src={Hero2}
                alt="Product"
                className="max-h-[400px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between h-full padding-section">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-text">
                PREMIUM QUALITY
                <br />
                GUARANTEED.
              </h2>
              <button className="bg-text text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-hover transition-colors">
                SHOP PRODUCT
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src="/path-to-product-3.png"
                alt="Product"
                className="max-h-[600px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev-custom absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer group">
        <img
          src={Prev}
          alt="Previous"
          className="w-10 h-16 md:w-12 md:h-20 lg:w-14 lg:h-24 opacity-50 group-hover:opacity-100 transition-opacity object-contain"
        />
      </button>

      <button className="swiper-button-next-custom absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer group">
        <img
          src={Next}
          alt="Next"
          className="w-10 h-16 md:w-12 md:h-20 lg:w-14 lg:h-24 opacity-50 group-hover:opacity-100 transition-opacity object-contain"
        />
      </button>
    </section>
  );
};

export default Slider;
