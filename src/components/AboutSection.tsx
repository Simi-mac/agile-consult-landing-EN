import { CheckCircle2, TrendingUp, Users2, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { n: "+200", label: "Profissionais treinados", icon: Users2 },
  { n: "+30",  label: "Empresas atendidas",      icon: TrendingUp },
  { n: "95%",  label: "Taxa de satisfação",       icon: Star },
  { n: "4.9",  label: "Avaliação média",          icon: Star },
];

const benefits = [
  { title: "Clareza operacional imediata",   desc: "Times que saem dos treinamentos com processos definidos e ritmo de trabalho claro." },
  { title: "Gestão que realmente funciona",  desc: "Rituais ágeis adaptados ao contexto brasileiro — sem teoria desnecessária." },
  { title: "Líderes mais confiantes",        desc: "Desenvolvimento prático de liderança para quem gerencia pessoas e resultados." },
];

const AboutSection = () => {
  const left  = useReveal();
  const right = useReveal();

  return (
    <section id="sobre" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Coluna esquerda ── */}
          <div ref={left.ref} className={`rv-l ${left.visible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
              Quem somos
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.9rem)] leading-[1.08] tracking-[-1.5px] mb-5">
              Resultados reais para empresas que precisam <span className="text-primary">crescer com estrutura</span>
            </h2>
            <p className="text-[15.5px] text-gray-2 leading-relaxed mb-8">
              Desde 2020 ajudamos líderes e equipes a transformar caos operacional em processos claros — com metodologias ágeis aplicadas ao contexto real do mercado brasileiro.
            </p>

            {/* Benefícios concretos */}
            <div className="flex flex-col gap-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-3.5 p-4 bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/[0.09] hover:border-primary/20 transition-all duration-300"
                >
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[13.5px] font-bold mb-0.5">{b.title}</div>
                    <div className="text-[12.5px] text-gray-1 leading-relaxed">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Coluna direita — prova social ── */}
          <div ref={right.ref} className={`rv-r ${right.visible ? "visible" : ""}`}>
            <div className="bg-gradient-to-br from-dark-3 to-dark-4 border border-primary/10 rounded-2xl p-8 relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/5 pointer-events-none blur-2xl" />

              {/* Números em destaque */}
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-gray-1 mb-4">Impacto comprovado</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((s) => (
                  <div
                    key={s.n}
                    className="p-5 bg-background/60 border border-primary/10 rounded-xl text-center hover:border-primary/20 transition-colors duration-200"
                  >
                    <div className="font-display text-[36px] font-extrabold tracking-[-2px] leading-none text-foreground mb-1">
                      {s.n}
                    </div>
                    <div className="text-[11.5px] text-gray-2 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Metodologia */}
              <div className="text-[13.5px] text-gray-2 leading-relaxed p-4 bg-primary/5 rounded-xl border border-primary/10 mb-4">
                <strong className="text-teal-light">Metodologia Tribo Ágil:</strong>{" "}
                Scrum, Kanban, OKRs, Design Thinking e SAFe — adaptados ao contexto real brasileiro.
              </div>

              {/* Ano discreto */}
              <p className="text-[12px] text-gray-1 text-center">
                Tribo Ágil — desde <span className="font-semibold text-gray-2">2020</span> no mercado
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
