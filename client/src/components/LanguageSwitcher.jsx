import { useTranslation } from "react-i18next";
import "../styles/languageSwitcher.css";
import spainFlag from "../assets/img/spain.png";
import ukFlag from "../assets/img/uk.png";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      <img
        src={i18n.language === "es" ? spainFlag : ukFlag}
        alt={i18n.language === "es" ? "Bandera de España" : "UK Flag"}
        className="language-icon"
      />
      <span className="language-label">
        {i18n.language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

