import { useTranslation } from "react-i18next";
const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return <button onClick={toggleLanguage}>{t("changeLanguage")}</button>;
};

export default LanguageSwitcher;
