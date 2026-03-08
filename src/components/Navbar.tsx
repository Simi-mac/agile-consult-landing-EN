import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-triboagil.png";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/93 backdrop-blur-xl border-b border-primary/10 py-3"
          : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Tribo Ágil" className="w-10 h-10 rounded-lg object-contain" />
          <span className="font-display font-extrabold text-lg">
            <span className="text-secondary">Tribo</span>
            <span className="text-primary">Ágil</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">Sobre</a>
          <a href="#servicos" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">Serviços</a>
          <a href="#metodologia" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">Metodologia</a>
          <a href="#depoimentos" className="text-sm font-medium text-gray-2 hover:text-foreground transition-colors">Depoimentos</a>
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-primary to-teal-dark text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-lg shadow-[0_4px_18px_hsl(var(--teal)/0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_26px_hsl(var(--teal)/0.42)] transition-all"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
