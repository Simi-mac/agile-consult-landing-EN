import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo-fundo-transparente.png";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-foreground/10 shadow-sm py-1.5" : "py-3"
      }`}
      style={{ background: "rgba(245,241,236,0.97)" }}
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Left: logo only */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Tribo Ágil"
            className="h-[48px] md:h-[56px] w-auto rounded-lg object-contain filter"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.12))" }}
          />
        </a>

        {/* Center: main menu (hidden on small screens) */}
        <div className="hidden md:flex items-center gap-7 justify-center">
          <a href="#sobre" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">{t("nav.about")}</a>
          <a href="#servicos" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">{t("nav.services")}</a>
          <a href="#metodologia" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">{t("nav.methodology")}</a>
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-primary to-teal-dark text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-lg shadow-[0_4px_18px_hsl(var(--teal)/0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_26px_hsl(var(--teal)/0.42)] transition-all"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );

  };

  export default Navbar;
