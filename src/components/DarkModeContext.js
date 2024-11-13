import React, { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("dark-mode") === "on";
    const systemDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedDarkMode || systemDarkMode) {
      document.body.setAttribute("data-bs-theme", "dark");
      return true;
    }

    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("dark-mode", "on");
      return;
    }

    document.body.removeAttribute("data-bs-theme");
    localStorage.setItem("dark-mode", "off");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };
