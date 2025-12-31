import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import Logo from "../assets/Images/rg_gold.png";
import LogoDark from "../assets/Images/logo_dark.jpg";
import logodark from "../assets/Images/logo_dark.webp";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";
import { useTheme } from "../Contexts/ThemeContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close search on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const location = useLocation();

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on window resize - تم تغيير 768 إلى 1050
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1050) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`px-10 py-4 dark:bg-black bg-nav-bg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "shadow-lg backdrop-blur-md bg-nav-bg/95 dark:bg-black/95"
        : ""
        }`}
      style={{ direction: "ltr" }}
    >
      <nav className="flex justify-between items-center">
        {theme === "light" ? (
          <Link to="/">
            {/* <h1 className="font-semibold text-4xl text-[#b79b83] hover:text-[#a08872] transition-colors duration-300">RG</h1> */}
            <img src={Logo} alt="Logo" className="w-16 h-11" />
          </Link>
        ) : (
          <Link to="/">
            {/* <h1 className="font-semibold text-4xl text-[#b79b83] hover:text-[#d4b89a] transition-colors duration-300">RG</h1> */}
            <img src={Logo} alt="Logo" className="w-16 h-11" />
          </Link>
        )}

        {/* تم تغيير md:flex إلى min-[1050px]:flex */}
        <ul className="items-center space-x-11 min-[1050px]:flex hidden">
          {t("navLinks").map((link) => (
            <li
              key={link.path}
              className={`font-medium text-[16px] leading-[148%] tracking-[10%] mx-4 ${language === "ar" ? "font-cairo" : "font-lato"}`}
            >
              <Link
                to={link.path}
                className={`${location.pathname === link.path
                  ? "bg-[#b79b83] text-white rounded-full px-6 py-2 shadow-md"
                  : "text-text dark:text-text-dark hover:bg-[#b79b83] hover:text-white rounded-full px-6 py-2 transition-all duration-300"
                  }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* تم تغيير md:flex إلى min-[1050px]:flex */}
        <div className="hidden min-[1050px]:flex items-center space-x-6 *:text-text dark:*:text-text-dark *:hover:text-[#b79b83] *:cursor-pointer">
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-[#b79b83] transition-colors">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>

          {theme === "light" ? (
            <Moon onClick={toggleTheme} className="w-5 h-5" />
          ) : (
            <Sun onClick={toggleTheme} className="w-5 h-5" />
          )}
          {language === "en" ? (
            <span onClick={toggleLanguage}>AR</span>
          ) : (
            <span onClick={toggleLanguage}>EN</span>
          )}

        </div>

        {/* تم تغيير lg:hidden إلى max-[1049px]:flex */}
        <div className="max-[1049px]:flex hidden row-re items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-text dark:text-text-dark hover:text-red-600 mr-5" />
            ) : (
              <Menu className="w-6 h-6 text-text dark:text-text-dark hover:text-hover" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <>
            {/* Full Screen Menu - تم تغيير md:hidden إلى min-[1050px]:hidden */}
            <div
              className="fixed inset-x-0 top-[72px] bottom-0 bg-white dark:bg-[#1a1a1a] z-50 min-[1050px]:hidden overflow-y-auto overflow-x-hidden scrollbar-hide"
              style={{
                height: "calc(100vh - 72px)",
                direction: language === "ar" ? "rtl" : "ltr",
              }}
            >
              <div className="container mx-auto px-4 py-6 sm:py-8">
                {/* Navigation Links */}
                <nav className="space-y-2">
                  {t("navLinks").map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl ${location.pathname === link.path
                        ? "bg-[#b79b83]/20 text-[#b79b83] shadow-lg border border-[#b79b83]/30"
                        : "text-text dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#b79b83]"
                        } transition-all cursor-pointer`}
                    >
                      <span className={`font-medium text-lg sm:text-xl ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-6 sm:my-8 h-px bg-black/10 dark:bg-white/10" />

                {/* Bottom Actions */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text dark:text-white transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#b79b83] shrink-0" />
                      <span className={`font-medium text-lg sm:text-xl ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                        {language === "en" ? "Language" : "اللغة"}
                      </span>
                    </div>
                    <span className={`text-base sm:text-lg text-paragraph dark:text-gray-400 ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                      {language === "ar" ? "العربية" : "English"}
                    </span>
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text dark:text-white transition-all"
                  >
                    <div className="flex items-center gap-4">
                      {theme === "dark" ? (
                        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-[#b79b83] shrink-0" />
                      ) : (
                        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-[#b79b83] shrink-0" />
                      )}
                      <span className={`font-medium text-lg sm:text-xl ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                        {language === "en" ? "Theme" : "المظهر"}
                      </span>
                    </div>
                    <span className={`text-base sm:text-lg text-paragraph dark:text-gray-400 ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                      {theme === "dark"
                        ? language === "en"
                          ? "Dark"
                          : "داكن"
                        : language === "en"
                          ? "Light"
                          : "فاتح"}
                    </span>
                  </button>


                  <div className="flex items-center justify-center gap-6 pt-4">
                    <button onClick={() => { setIsSearchOpen(true); setIsMenuOpen(false); }} className="text-paragraph dark:text-gray-400 hover:text-[#b79b83] transition-colors">
                      <i className="fa-solid fa-magnifying-glass text-xl"></i>
                    </button>
                    <button className="text-paragraph dark:text-gray-400 hover:text-[#b79b83] transition-colors">
                      <i className="fa-solid fa-user text-xl"></i>
                    </button>
                    <button className="text-paragraph dark:text-gray-400 hover:text-[#b79b83] transition-colors">
                      <i className="fa-solid fa-cart-shopping text-xl"></i>
                    </button>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 flex justify-center">
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-[#b79b83] to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
      {/* Search Overlay Portal */}
      {createPortal(
        <div
          className={`fixed inset-0 h-[100dvh] w-screen bg-white/30 dark:bg-black/60 backdrop-blur-xl z-[9999] transition-all duration-300 flex items-center justify-center ${isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSearchOpen(false);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-8 text-black dark:text-white hover:text-[#b79b83] transition-colors p-2 z-[10000]"
          >
            <i className="fa-solid fa-xmark text-4xl"></i>
          </button>

          {/* Search Container */}
          <div
            className={`w-[90%] md:w-[60%] lg:w-[40%] transform transition-all duration-500 delay-100 relative ${isSearchOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}
          >
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full">
              <input
                type="text"
                placeholder={language === "ar" ? "ابحث هنا..." : "Search here..."}
                autoFocus={isSearchOpen}
                className={`w-full bg-transparent border-b-2 border-[#b79b83] text-2xl md:text-5xl py-4 px-2 text-center text-black dark:text-white leading-relaxed placeholder:text-gray-800 dark:placeholder:text-gray-300 focus:outline-none font-lato ${language === 'ar' ? 'font-cairo' : ''}`}
              />
              {/* Button Container for Layout */}
              <div className="absolute right-0 top-0 bottom-0 flex items-center">
                {/* Animated Button */}
                <button
                  type="submit"
                  className={`text-[#b79b83] hover:text-[#a0856e] p-2 transition-all duration-500 delay-300 transform ${isSearchOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 rtl:translate-x-8"
                    }`}
                >
                  <i className="fa-solid fa-arrow-right text-3xl rtl:rotate-180"></i>
                </button>
              </div>
            </form>
            <p className={`mt-4 text-center text-gray-900 dark:text-gray-200 text-sm ${language === 'ar' ? 'font-cairo' : 'font-lato'}`}>
              {language === 'ar' ? 'اضغط Enter للبحث' : 'Press Enter to search'}
            </p>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Navbar;