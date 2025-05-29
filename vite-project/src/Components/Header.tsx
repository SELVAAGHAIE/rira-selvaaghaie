import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";
import { FiSettings, FiLogOut } from "react-icons/fi";
import "../Style/Header.scss";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(i18n.language || "en");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    document.body.dir = lng === "fa" ? "rtl" : "ltr";
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="CurrencyIcon">c</div>
        <div>{t("Currency Converter")}</div>
      </div>

      <div className="settings-wrapper" ref={dropdownRef}>
        <button
          className="settings-button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <FiSettings />
        </button>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="section">
              <div className="section-title">{t("Mode")}</div>
              <div className="toggle-buttons">
                <button
                  className={theme === "light" ? "active" : ""}
                  onClick={() => theme !== "light" && toggleTheme()}
                >
                  🌞 {t("Light")}
                </button>
                <button
                  className={theme === "dark" ? "active" : ""}
                  onClick={() => theme !== "dark" && toggleTheme()}
                >
                  🌙 {t("Dark")}
                </button>
              </div>
            </div>

            <div className="section">
              <div className="section-title">{t("Language")}</div>
              <div className="toggle-buttons">
                <button
                  className={language === "en" ? "active" : ""}
                  onClick={() => changeLanguage("en")}
                >
                  En
                </button>
                <button
                  className={language === "fa" ? "active" : ""}
                  onClick={() => changeLanguage("fa")}
                >
                  Fa
                </button>
              </div>
            </div>

            <div className="exit-option" onClick={() => setDropdownOpen(false)}>
              <FiLogOut />
              <span>{t("Exit")}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

