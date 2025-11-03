import { useEffect } from "react";
import { useTheme } from "../Contexts/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {children}
    </div>
  );
};

export default Layout;