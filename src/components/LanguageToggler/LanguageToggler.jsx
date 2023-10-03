import sprite from "../../img/icons/symbol-defs.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LangIcon } from "./LanguageToggler.styled";

export const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const changeLanguage = currentLanguage === "en" ? "uk" : "en";
    setCurrentLanguage(changeLanguage);
    i18n.changeLanguage(changeLanguage);
  };

  return (
    <button type="button" onClick={toggleLanguage}>
      {currentLanguage === "uk" ? (
        <LangIcon>
          <use href={sprite + "#icon-united-kingdom"}></use>
        </LangIcon>
      ) : (
        <LangIcon>
          <use href={sprite + "#icon-ukraine"}></use>
        </LangIcon>
      )}
    </button>
  );
};
