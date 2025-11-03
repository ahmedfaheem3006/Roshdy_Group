import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/logo.jpeg";
import logo from "../assets/Images/logo.webp";
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
  const [isScrolled, setIsScrolled] = useState(false); // ✅ state جديد

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const location = useLocation();

  // ✅ متابعة السكرول
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

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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
      className={`padding-navbar py-2 dark:bg-black bg-nav-bg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "shadow-lg backdrop-blur-md bg-nav-bg/95 dark:bg-black/95" 
          : ""
      }`}
      style={{ direction: "ltr" }}
    >
      <nav className="flex justify-between items-center">
        {theme === "light" ? (
          <Link to="/">
          <picture className={`transition-all duration-300 ${isScrolled ? "*:size-12" : "*:size-14"}`}>
            <source srcSet={logo} type="image/webp" />
            <img src={Logo} alt="Logo" />
          </picture>
          </Link>
        ) : (
          <Link to="/">
          <picture className={`transition-all duration-300 ${isScrolled ? "*:size-12" : "*:size-14"}`}>
            <source srcSet={logodark} type="image/webp" />
            <img src={LogoDark} alt="Logo" />
          </picture>
          </Link>
        )}

        <ul className="items-center space-x-11 md:flex hidden">
          {t("navLinks").map((link) => (
            <li
              key={link.path}
              className={`font-medium text-[16px] leading-[148%] tracking-[10%] mx-4 ${language === "ar" ? "font-cairo" : "font-lato"}`}
            >
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-hover"
                    : "text-text dark:text-text-dark hover:text-hover"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-6 *:text-text dark:*:text-text-dark *:hover:text-hover *:cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
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

        <div className="lg:hidden flex row-re items-center space-x-4">
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
            {/* Backdrop */}
            {/* <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={closeMenu}
            /> */}

            {/* Full Screen Menu */}
            <div
              className="fixed inset-x-0 top-[72px] bottom-0 bg-[#1a1a1a] dark:bg-[#0a0a0a] z-50 md:hidden overflow-y-hidden overflow-x-hidden"
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
                      className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl ${
                        location.pathname === link.path
                          ? "bg-hover/20 text-hover shadow-lg border border-hover/30"
                          : "text-gray-300 hover:bg-white/5 hover:text-hover"
                      } transition-all cursor-pointer`}
                    >
                      <span className={`font-medium text-lg sm:text-xl ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div className="my-6 sm:my-8 h-px bg-white/10" />

                {/* Bottom Actions */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-hover shrink-0" />
                      <span className={`font-medium text-lg sm:text-xl ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                        {language === "en" ? "Language" : "اللغة"}
                      </span>
                    </div>
                    <span className={`font-lato text-base sm:text-lg text-gray-400 ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                      {language === "ar" ? "العربية" : "English"}
                    </span>
                  </Link>
                ))}
              </nav>

                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all"
                  >
                    <div className="flex items-center gap-4">
                      {theme === "dark" ? (
                        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-hover shrink-0" />
                      ) : (
                        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-hover shrink-0" />
                      )}
                      <span className=" font-medium text-lg sm:text-xl font-lato">
                        {language === "en" ? "Theme" : "المظهر"}
                      </span>
                    </div>
                    <span className={`font-lato text-base sm:text-lg text-gray-400 ${language === "ar" ? "font-cairo" : "font-lato"}`}>
                      {theme === "dark"
                        ? language === "en"
                          ? "Dark"
                          : "داكن"
                        : language === "en"
                        ? "Light"
                        : "فاتح"}
                    </span>
                  </div>
                  <span className="text-base sm:text-lg text-gray-400">
                    {language === "ar" ? "العربية" : "English"}
                  </span>
                </button>

                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all"
                >
                  <div className="flex items-center gap-4">
                    {theme === "dark" ? (
                      <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-hover shrink-0" />
                    ) : (
                      <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-hover shrink-0" />
                    )}
                    <span className="font-medium text-lg sm:text-xl font-lato">
                      {language === "en" ? "Theme" : "المظهر"}
                    </span>
                  </div>
                  <span className="text-base sm:text-lg text-gray-400">
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
                  <button className="text-gray-400 hover:text-hover transition-colors">
                    <i className="fa-solid fa-magnifying-glass text-xl"></i>
                  </button>
                  <button className="text-gray-400 hover:text-hover transition-colors">
                    <i className="fa-solid fa-user text-xl"></i>
                  </button>
                  <button className="text-gray-400 hover:text-hover transition-colors">
                    <i className="fa-solid fa-cart-shopping text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 flex justify-center">
                <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-transparent via-hover to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;