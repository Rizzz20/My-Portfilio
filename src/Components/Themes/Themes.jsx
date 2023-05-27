import React, { useEffect, useState } from "react";

// IMPORT
import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { BiCog } from "react-icons/bi";
import "./Themes.css";
import { BsEmojiSunglassesFill, BsEmojiSunglasses } from "react-icons/bs";
// LocalStorageColor
const getStorageColor = () => {
  let color = "hsl(0, 100%, 50%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

// LocalStorageTheme
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor);
  const [theme, setTheme] = useState(getStorageTheme);

  // Color Mode

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-c", color);
    localStorage.setItem("color", color);
  }, [color]);

  // Dark Mode

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div
          className="style__switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <BiCog />
        </div>

        <div className="theme__toggler" onClick={toggleTheme}>
          {theme === "light-theme" ? (
            <BsEmojiSunglassesFill />
          ) : (
            <BsEmojiSunglasses />
          )}
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>

        <div
          className="style__switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
