import logo from "@/assets/logo-fundo-transparente.png";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-2 border-t border-foreground/[0.055] py-8">
    <div className="container flex flex-col items-center text-center">
      {/* Logo centralizada */}
      <img
        src={logo}
        alt="Tribo Ágil"
        className="h-20 w-auto object-contain mb-4"
      />

      {/* Links de navegação */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4">
        {[
          { label: "Sobre", href: "#sobre" },
          { label: "Serviços", href: "#servicos" },
          { label: "Metodologia", href: "#metodologia" },
          { label: "Contato", href: "#contato" },
        ].map((l) => (
          <a key={l.label} href={l.href} className="text-[13px] text-gray-2 hover:text-teal-light transition-colors duration-200">
            {l.label}
          </a>
        ))}
      </div>

      {/* Contato + Redes */}
      <div className="flex items-center gap-4 mb-6">
        <a
          href="mailto:triboagilconsultoria@gmail.com"
          className="flex items-center gap-1.5 text-[12px] text-gray-2 hover:text-teal-light transition-colors duration-200"
        >
          <Mail size={12} /> triboagilconsultoria@gmail.com
        </a>
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/company/tribo-agil" },
          { icon: Instagram, href: "https://instagram.com/triboagil" },
        ].map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-md bg-foreground/[0.045] border border-foreground/[0.07] flex items-center justify-center text-gray-2 hover:bg-primary/10 hover:border-primary/25 hover:text-teal-light transition-all duration-[220ms]"
          >
            <s.icon size={14} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="w-full pt-4 border-t border-foreground/[0.045]">
        <p className="text-[12px] text-gray-1">© {new Date().getFullYear()} Tribo Ágil — Transformando com propósito desde 2020.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
