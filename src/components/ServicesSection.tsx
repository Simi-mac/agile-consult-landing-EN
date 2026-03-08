import { motion } from "framer-motion";
import { BookOpen, Users, UserCircle, BarChart3, ArrowRight } from "lucide-react";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";

const services = [
  {
    num: "01",
    badge: "Online & Assíncrono",
    icon: BookOpen,
    title: "Academia",
    highlight: "Tribo Ágil",
    desc: "Plataforma online com formações práticas em Agilidade, Scrum, Kanban, Design Thinking, Métricas Ágeis, OKR, Discovery e muito mais.",
    items: ["Cursos online práticos e aplicáveis", "Conteúdo atualizado por especialistas", "Certificações e trilhas de aprendizado", "Comunidade e networking ativo"],
    cta: "Acessar a Academia",
    waMessage: WA_MESSAGES.academia,
    gold: false,
  },
  {
    num: "02",
    badge: "Presencial & In-Company",
    icon: Users,
    title: "Treinamentos",
    highlight: "Presenciais",
    subtitle: "Personalizados",
    desc: "Aulas presenciais adaptadas à realidade da sua equipe, com foco prático e aplicabilidade imediata.",
    items: ["Scrum, Kanban e Lean para equipes", "Liderança Ágil e Gestão de Times", "OKRs — definição, alinhamento e execução", "Design Thinking e Inovação"],
    cta: "Solicitar proposta",
    waMessage: WA_MESSAGES.treinamento,
    gold: true,
  },
  {
    num: "03",
    badge: "Individual & Grupo",
    icon: UserCircle,
    title: "Mentorias",
    highlight: "Individuais",
    subtitle: "e em Grupo",
    desc: "Para Product Managers, Product Owners, Scrum Masters, Agile Coaches e lideranças que precisam de orientação estratégica.",
    items: ["Mentoria 1-a-1 com especialistas sênior", "Grupos de mentoria temáticos", "Desenvolvimento de liderança ágil", "Carreira em agilidade (PM, PO, SM, Coach)"],
    cta: "Quero ser mentorado",
    waMessage: WA_MESSAGES.mentoria,
    gold: false,
  },
  {
    num: "04",
    badge: "PMEs & Grandes Empresas",
    icon: BarChart3,
    title: "Consultoria",
    highlight: "Organizacional",
    desc: "Diagnóstico profundo, identificação de pontos críticos e construção de um plano de ação prático, alinhado com os objetivos da empresa.",
    items: ["Diagnóstico organizacional completo", "Identificação de gargalos e pontos críticos", "Transformação ágil em escala (SAFe, LeSS)", "Plano de ação prático e acompanhado"],
    cta: "Solicitar diagnóstico",
    waMessage: WA_MESSAGES.consultoria,
    gold: true,
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-dark-2 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
          Nossos Serviços
        </span>
        <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.9rem)] leading-[1.08] tracking-[-1.5px] mb-3.5">
          Soluções completas para <span className="text-primary">transformar</span><br />sua organização
        </h2>
        <p className="text-base text-gray-1 leading-relaxed max-w-xl mx-auto">
          Da formação individual à transformação organizacional — tudo com foco prático e resultados mensuráveis.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`group relative bg-dark-3 border rounded-2xl p-8 transition-all duration-300 overflow-hidden hover:-translate-y-1.5 ${
              s.gold
                ? "border-secondary/10 hover:border-secondary/20 hover:shadow-[0_22px_56px_rgba(0,0,0,0.28),0_0_36px_hsl(var(--gold)/0.07)]"
                : "border-foreground/[0.055] hover:border-primary/15 hover:shadow-[0_22px_56px_rgba(0,0,0,0.28),0_0_36px_hsl(var(--teal)/0.07)]"
            }`}
          >
            {/* Top line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                s.gold
                  ? "bg-gradient-to-r from-gold-dark to-secondary"
                  : "bg-gradient-to-r from-primary to-teal-light"
              }`}
            />

            {/* Number watermark */}
            <span
              className={`absolute top-7 right-7 font-display text-[42px] font-extrabold tracking-[-2px] leading-none opacity-[0.06] ${
                s.gold ? "text-secondary" : "text-teal-light"
              }`}
            >
              {s.num}
            </span>

            <span
              className={`inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[1.3px] uppercase px-3 py-1 rounded-full mb-3.5 ${
                s.gold
                  ? "bg-secondary/10 border border-secondary/20 text-gold-light"
                  : "bg-primary/10 border border-primary/20 text-teal-light"
              }`}
            >
              {s.badge}
            </span>

            <div
              className={`w-[54px] h-[54px] rounded-[13px] flex items-center justify-center mb-5 ${
                s.gold
                  ? "bg-secondary/10 border border-secondary/15"
                  : "bg-primary/10 border border-primary/15"
              }`}
            >
              <s.icon size={24} className={s.gold ? "text-secondary" : "text-primary"} />
            </div>

            <h3 className="font-display text-xl font-bold mb-3">
              {s.title}{" "}
              <span className={s.gold ? "text-secondary" : "text-primary"}>
                {s.highlight}
              </span>
              {s.subtitle && <><br />{s.subtitle}</>}
            </h3>

            <p className="text-sm text-gray-1 leading-relaxed mb-5">{s.desc}</p>

            <ul className="flex flex-col gap-2.5 mb-5">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-2">
                  <div
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center ${
                      s.gold ? "bg-secondary/10 border border-secondary/25" : "bg-primary/10 border border-primary/25"
                    }`}
                  >
                    <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
                      <polyline
                        points="3,8 6.5,11.5 13,5"
                        stroke={s.gold ? "hsl(var(--gold))" : "hsl(var(--teal-light))"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(s.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-[13px] font-bold transition-all group-hover:gap-2.5 ${
                s.gold ? "text-gold-light" : "text-teal-light"
              }`}
            >
              {s.cta} <ArrowRight size={13} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
