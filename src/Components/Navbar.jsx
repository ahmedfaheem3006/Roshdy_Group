import { Link, useLocation } from "react-router";
import Logo from "../assets/Images/logo.jpeg";
import logo from "../assets/Images/logo.webp";
import LogoDark from "../assets/Images/logo_dark.jpg";
import logodark from "../assets/Images/logo_dark.webp";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";
import { useTheme } from "../Contexts/ThemeContext";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const location = useLocation();

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
      className="padding-navbar  dark:bg-black bg-nav-bg"
      style={{ direction: "ltr" }}
    >
      <nav className="flex justify-between items-center ">
        {theme === "light" ? (
          <picture className="*:size-20">
            <source srcSet={logo} type="image/webp" />
            <img src={Logo} alt="Logo" />
          </picture>
        ) : (
          <picture className="*:size-20">
            <source srcSet={logodark} type="image/webp" />
            <img src={LogoDark} alt="Logo" />
          </picture>
        )}
        <div className="hidden lg:flex items-center space-x-22 ">
          <ul className="flex items-center space-x-11">
            {t("navLinks").map((link) => (
              <li
                key={link.path}
                className="font-lato font-medium text-[14px] leading-[148%] tracking-[10%] mx-4"
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
          <div className="flex items-center space-x-6 *:text-text dark:*:text-text-dark *:hover:text-hover *:cursor-pointer">
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
        </div>
        <div className="lg:hidden flex row-re items-center space-x-4">
          {theme === "light" ? (
            <Moon
              onClick={toggleTheme}
              className={`w-5 h-5 ${
                theme === "light" ? "text-text" : "text-text-dark"
              } hover:cursor-pointer hover:text-hover`}
            />
          ) : (
            <Sun
              onClick={toggleTheme}
              className={`w-5 h-5 ${
                theme === "light" ? "text-text" : "text-text-dark"
              } hover:cursor-pointer hover:text-hover`}
            />
          )}
          {language === "en" ? (
            <span
              onClick={toggleLanguage}
              className={`text-text dark:text-text-dark hover:cursor-pointer hover:text-hover`}
            >
              AR
            </span>
          ) : (
            <span
              onClick={toggleLanguage}
              className={`text-text dark:text-text-dark hover:cursor-pointer hover:text-hover`}
            >
              EN
            </span>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5 text-text dark:text-text-dark hover:cursor-pointer hover:text-hover" />
          </button>
        </div>
        {isMenuOpen && (
          <>
            {/* Backdrop - closes menu when clicked */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <div className="fixed top-20 right-0 w-1/3 h-1/2 bg-white dark:bg-[#1a1a1a] z-50 flex flex-col items-center justify-center space-y-8 border border-gray-200 dark:border-gray-700">
              <ul className="flex flex-col items-center space-y-4">
                <ul className="flex flex-col items-center space-y-4">
                  {t("navLinks").map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`font-lato font-medium text-[14px] leading-[148%] tracking-[10%] ${
                          location.pathname === link.path
                            ? "text-hover"
                            : "text-[#1a1a1a] dark:text-white hover:text-hover"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
