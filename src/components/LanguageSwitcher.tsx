import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

/**
 * Botão de troca de idioma PT / EN.
 * Navega para "/" (pt) ou "/en" (en) e o LanguageDetector no App
 * chama i18n.changeLanguage() automaticamente.
 */
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const isEN = i18n.language === "en";

  return (
    <div className="flex items-center gap-0.5 text-[11px] font-bold select-none">
      <button
        onClick={() => { if (isEN) navigate("/"); }}
        aria-label="Mudar para Português"
        className={`px-2 py-1 rounded transition-colors duration-150 ${
          !isEN
            ? "text-teal-light cursor-default"
            : "text-gray-2 hover:text-foreground cursor-pointer"
        }`}
      >
        PT
      </button>
      <span className="text-gray-1">|</span>
      <button
        onClick={() => { if (!isEN) navigate("/en"); }}
        aria-label="Switch to English"
        className={`px-2 py-1 rounded transition-colors duration-150 ${
          isEN
            ? "text-teal-light cursor-default"
            : "text-gray-2 hover:text-foreground cursor-pointer"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
