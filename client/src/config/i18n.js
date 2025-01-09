import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) //Detecta automaticamente el idioma
  .use(initReactI18next) //vincula i18n con react
  .init({
    fallbackLng: "es",
    Lng: "es",
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
      es: {
        translation: {
          welcome: "Bienvenido",
          register: "Registrarse",
          login: "Iniciar Sesión",
          changeLanguage: "Cambiar a Inglés",
          name: "Nombre: ",
          username: "Nombre de usuario: ",
          birthday: "Fecha de nacimiento: ",
          email: "Correo: ",
          password: "Contraseña: "
        },
      },
      en: {
        translation: {
          welcome: "Welcome",
          register: "Register",
          login: "Login",
          changeLanguage: "Switch to Spanish",
           name: "Name: ",
          username: "Username: ",
          birthday: "Date of birthday: ",
          email: "Email: ",
          password: "Password: "
        },
      },
    },
  });

  export default i18n;
