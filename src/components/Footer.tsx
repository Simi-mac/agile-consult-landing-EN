import logo from "@/assets/logo-triboagil.png";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-2 border-t border-foreground/[0.055] pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-14 mb-14">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Tribo Ágil" className="w-11 h-11 rounded-[11px] object-contain" />
            <span className="font-display text-xl font-extrabold">
              <span className="text-secondary">Tribo</span>
              <span className="text-primary">Ágil</span>
            </span>
          </div>
          <p className="text-[13.5px] text-gray-1 leading-relaxed max-w-[270px] mb-5">
            Transformando pessoas e organizações com agilidade, colaboração e propósito desde 2020.
          </p>
          <div className="flex flex-col gap-2 mb-5">
            <a href="mailto:triboagilconsultoria@gmail.com" className="flex items-center gap-2 text-[13px] text-gray-2 hover:text-teal-light transition-colors">
              <Mail size={14} /> triboagilconsultoria@gmail.com
            </a>
          </div>
          <div className="flex gap-2.5">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/company/tribo-agil" },
              { icon: Instagram, href: "https://instagram.com/triboagil" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-foreground/[0.045] border border-foreground/[0.07] flex items-center justify-center text-gray-2 hover:bg-primary/10 hover:border-primary/25 hover:text-teal-light transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-1 mb-5">Serviços</h5>
          <ul className="flex flex-col gap-3">
            {["Academia Tribo Ágil", "Treinamentos Presenciais", "Mentorias", "Consultoria"].map((l) => (
              <li key={l}>
                <a href="#servicos" className="text-[13.5px] text-gray-2 hover:text-teal-light transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[11px] font-bold tracking-[1.5px] uppercase text-gray-1 mb-5">Empresa</h5>
          <ul className="flex flex-col gap-3">
            {["Sobre", "Metodologia", "Depoimentos", "Contato"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-[13.5px] text-gray-2 hover:text-teal-light transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-7 border-t border-foreground/[0.045] flex flex-col md:flex-row items-center justify-between gap-3.5">
        <p className="text-[12.5px] text-gray-1">© {new Date().getFullYear()} Tribo Ágil — Transformando com propósito desde 2020.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
