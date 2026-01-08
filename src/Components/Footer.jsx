import { Link } from "react-router-dom";
import { useLanguage } from "../Contexts/LanguageContext";
import { useTheme } from "../Contexts/ThemeContext";
import { footerContent } from "../Constants";

const Footer = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();

    // Select content based on language
    const content = footerContent[language];
    const isRTL = language === "ar";

    return (
        <footer className={`w-full pt-16 pb-8 px-6 md:px-12 transition-colors duration-300 ${theme === "dark" ? "bg-black text-gray-300" : "bg-gray-100 text-gray-700"
            }`} dir={isRTL ? "rtl" : "ltr"}>

            {/* Top Section: 4 Columns */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Column 1: Brand & Socials */}
                <div className="space-y-6">
                    <h2 className={`text-2xl font-bold tracking-wider ${theme === "dark" ? "text-white" : "text-black"
                        } ${isRTL ? "font-cairo" : "font-lato"}`}>
                        {content.about.title}
                    </h2>
                    <p className={`text-sm leading-relaxed ${isRTL ? "font-cairo" : "font-lato"}`}>
                        {content.about.description}
                    </p>
                    <div className="flex items-center gap-6 mt-6">
                        <a href="#" className="text-xl hover:text-[#b79b83] transition-colors duration-300 transform hover:scale-110">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-[#b79b83] transition-colors duration-300 transform hover:scale-110">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-[#b79b83] transition-colors duration-300 transform hover:scale-110">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-[#b79b83] transition-colors duration-300 transform hover:scale-110">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-[#b79b83] transition-colors duration-300 transform hover:scale-110">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="space-y-6">
                    <h3 className={`text-lg font-semibold tracking-widest mb-4 uppercase ${theme === "dark" ? "text-white" : "text-black"
                        } ${isRTL ? "font-cairo" : "font-lato"}`}>
                        {content.quickLinks.title}
                    </h3>
                    <ul className="space-y-3">
                        {content.quickLinks.links.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.path}
                                    className={`text-sm hover:text-[#b79b83] hover:pl-2 transition-all duration-300 block ${isRTL ? "font-cairo hover:pr-2 hover:pl-0" : "font-lato"}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Help & Info */}
                <div className="space-y-6">
                    <h3 className={`text-lg font-semibold tracking-widest mb-4 uppercase ${theme === "dark" ? "text-white" : "text-black"
                        } ${isRTL ? "font-cairo" : "font-lato"}`}>
                        {content.helpInfo.title}
                    </h3>
                    <ul className="space-y-3">
                        {content.helpInfo.links.map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.path}
                                    className={`text-sm hover:text-[#b79b83] hover:pl-2 transition-all duration-300 block ${isRTL ? "font-cairo hover:pr-2 hover:pl-0" : "font-lato"}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div className="space-y-6">
                    <h3 className={`text-lg font-semibold tracking-widest mb-4 uppercase ${theme === "dark" ? "text-white" : "text-black"
                        } ${isRTL ? "font-cairo" : "font-lato"}`}>
                        {content.contact.title}
                    </h3>
                    <div className={`space-y-4 text-sm ${isRTL ? "font-cairo" : "font-lato"}`}>
                        <p>{content.contact.queryText}</p>
                        <a
                            href={`mailto:${content.contact.email}`}
                            className="block text-[#b79b83] hover:text-white transition-colors duration-300 font-bold underline decoration-1 underline-offset-4"
                        >
                            {content.contact.email}
                        </a>
                        <p>{content.contact.supportText}</p>
                        <a
                            href={`tel:${content.contact.phone}`}
                            className="block text-xl font-bold hover:text-[#b79b83] transition-colors duration-300 underline decoration-1 underline-offset-4"
                        >
                            {content.contact.phone}
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className={`w-full h-px mb-8 ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}></div>

            {/* Bottom Bar */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

                {/* Shipping & Payments */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    {/* Shipping */}
                    <div className="flex items-center gap-4">
                        <span className={`${isRTL ? "font-cairo" : "font-lato"} opacity-70`}>{content.shipWith}</span>
                        <div className="flex items-center gap-3 text-2xl">
                            <i className="fa-brands fa-dhl hover:text-[#b79b83] transition-colors"></i>
                            {/* Using generic icon for 'fast' shipping or plane as backup */}
                            <i className="fa-solid fa-plane-departure hover:text-[#b79b83] transition-colors"></i>
                        </div>
                    </div>

                    {/* Payments */}
                    <div className="flex items-center gap-4">
                        <span className={`${isRTL ? "font-cairo" : "font-lato"} opacity-70`}>{content.paymentOptions}</span>
                        <div className="flex items-center gap-3 text-2xl">
                            <i className="fa-brands fa-cc-visa hover:text-[#b79b83] transition-colors"></i>
                            <i className="fa-brands fa-cc-mastercard hover:text-[#b79b83] transition-colors"></i>
                            <i className="fa-brands fa-cc-paypal hover:text-[#b79b83] transition-colors"></i>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`text-center md:text-right opacity-60 ${isRTL ? "font-cairo" : "font-lato"}`}>
                    <p>
                        <span className={isRTL ? "text-2xl font-bold align-middle" : ""}>©</span> {content.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
