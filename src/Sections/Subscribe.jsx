import { useState } from "react";
import { useLanguage } from "../Contexts/LanguageContext";

const Newsletter = () => {
  const { t, language } = useLanguage();
  const content = t("newsletter");
  const isRTL = language === "ar";

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // هنا ممكن تضيف API call لحفظ البريد
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="padding-section py-16 md:py-20 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* 📝 Text Content */}
            <div
              className={`py-8 px-4 md:py-12 md:px-8 lg:py-16 lg:px-12 flex flex-col justify-center ${
                isRTL ? "lg:order-2" : "lg:order-1"
              }`}
            >
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-family-jost">
                {content.title}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-paragraph dark:text-paragraph-dark mb-8 leading-relaxed font-family-lato">
                {content.description}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={content.placeholder}
                    required
                    className={`w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                  <i
                    className={`fa-regular fa-envelope absolute top-1/2 -translate-y-1/2 ${
                      isRTL ? "left-5" : "right-5"
                    } text-gray-400 pointer-events-none`}
                  ></i>
                </div>

                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubscribed ? "animate-pulse" : ""
                  }`}
                >
                  {isSubscribed ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fa-solid fa-check"></i>
                      {content.successMessage}
                    </span>
                  ) : (
                    content.buttonText
                  )}
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-lock text-green-500"></i>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-blue-500"></i>
                  <span>Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope-circle-check text-purple-500"></i>
                  <span>No Spam</span>
                </div>
              </div>
            </div>

            {/* 🎨 Decorative Side */}
            <div
              className={`relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 md:p-12 lg:p-16 flex items-center justify-center overflow-hidden ${
                isRTL ? "lg:order-1" : "lg:order-2"
              }`}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

              {/* Animated Circles */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

              {/* Icon */}
              <div className="relative z-10 text-white">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border-4 border-white/30 shadow-2xl">
                  <i className="fa-solid fa-envelope-open-text text-6xl md:text-7xl lg:text-8xl animate-bounce-slow"></i>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 animate-float">
                  <i className="fa-solid fa-bell text-2xl"></i>
                </div>
                <div className="absolute -bottom-10 -left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 animate-float-delayed">
                  <i className="fa-solid fa-gift text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

