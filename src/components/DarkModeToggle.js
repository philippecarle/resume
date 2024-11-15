import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaArrowRight, FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div id="dark-mode">
      <span onClick={toggleDarkMode}>
        <FaMoon id="dark-mode-moon" />
        <FaArrowRight id="dark-mode-arrow" />
        <FaSun id="dark-mode-sun" />
      </span>
    </div>
  );
};

export default DarkModeToggle;
