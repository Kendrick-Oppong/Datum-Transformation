import { useEffect, useState } from "react";
import "./Theme.css";
export const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className="toggle-switch">
      <label className="switch-label ">
        <input
          type="checkbox"
          className="checkbox"
          onClick={handleThemeChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
