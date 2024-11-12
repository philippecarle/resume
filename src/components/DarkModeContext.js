import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const initialValue = localStorage.getItem("dark-mode") === "on";
    if (initialValue) {
      document.body.setAttribute("data-bs-theme", "dark");
    }
    return initialValue;
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode && !document.body.hasAttribute("data-bs-theme")) {
      document.body.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("dark-mode", "on");

      return;
    }

    document.body.removeAttribute("data-bs-theme");
    localStorage.setItem("dark-mode", "off");
  };
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
