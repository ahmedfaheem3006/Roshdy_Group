/* eslint-disable react-refresh/only-export-components */
// src/contexts/LanguageContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { navLinksBase, titles,featuresContent } from "../Constants/index.jsx";

const translations = {
  en: {
    // 1️⃣ Navigation links
    navLinks: navLinksBase.map(({ key, path }) => ({ title: titles.en[key], path })),
    // 2️⃣ Features section content
    features: featuresContent.en.map((feature) => ({
      title: feature.title,
      description: feature.description,
      icon: feature.icon,
    })),
  },
  ar: {
    // 1️⃣ Navigation links
    navLinks: navLinksBase.map(({ key, path }) => ({ title: titles.ar[key], path })),
    // 2️⃣ Features section content
    features: featuresContent.ar.map((feature) => ({
      title: feature.title,
      description: feature.description,
      icon: feature.icon,
    })),
  },
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLanguage;
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
