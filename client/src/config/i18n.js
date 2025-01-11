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
          welcome: "¡Bienvenido!",
          register: "Registrarse",
          login: "Iniciar Sesión",
          changeLanguage: "EN",
          name: "Nombre: ",
          username: "Nombre de usuario: ",
          birthday: "Fecha de nacimiento: ",
          email: "Correo: ",
          password: "Contraseña: ",
          forgot: "¿Olvidaste la contraseña?",
          account:"¿No tienes una cuenta?",
        },
      },
      en: {
        translation: {
          welcome: "¡Welcome!",
          register: "Sign Up",
          login: "Login",
          changeLanguage: "ES",
          name: "Name: ",
          username: "Username: ",
          birthday: "Date of birthday: ",
          email: "Email: ",
          password: "Password: ",
          forgot: "Forgot the password?",
          account:"Don't have an account?",
        },
      },
    },
  });

export default i18n;
