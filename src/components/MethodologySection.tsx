import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { num: "01", title: "Diagnóstico do negócio", desc: "Mapeamos processos, pessoas, estratégia e cultura — identificando pontos críticos e oportunidades de alto impacto." },
  { num: "02", title: "Plano de transformação", desc: "Construímos um roadmap personalizado com iniciativas priorizadas, OKRs definidos e marcos claros." },
  { num: "03", title: "Implementação com sua equipe", desc: "Implementamos lado a lado com a equipe, garantindo transferência real de conhecimento." },
  { num: "04", title: "Resultados medidos", desc: "Medimos com indicadores concretos, aprendemos com os dados e ajustamos continuamente." },
];

const bars = [
  { label: "Eficiência operacional", value: "+68%", width: 68, gold: false },
  { label: "Engajamento de equipes", value: "+55%", width: 55, gold: false },
  { label: "Redução de lead time", value: "-40%", width: 40, gold: true },
  { label: "Crescimento de receita", value: "+35%", width: 35, gold: true },
  { label: "Satisfação do cliente final", value: "+42%", width: 42, gold: false },
];

const ResultBar = ({ bar, inView }: { bar: typeof bars[0]; inView: boolean }) => (
  <div>
    <div className="flex justify-between mb-1.5 text-[12.5px]">
      <span className="text-gray-2 font-medium">{bar.label}</span>
      <span className={`font-bold ${bar.gold ? "text-gold-light" : "text-teal-light"}`}>{bar.value}</span>
    </div>
    <div className="h-[7px] bg-foreground/5 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full origin-left ${
          bar.gold ? "bg-gradient-to-r from-gold-dark to-gold-light" : "bg-gradient-to-r from-primary to-teal-light"
        }`}
        style={{
          transform: inView ? `scaleX(${bar.width / 100})` : "scaleX(0)",
          transition: "transform 1.4s cubic-bezier(.16,1,.3,1)",
        }}
      />
    </div>
  </div>
);

const MethodologySection = () => {
  const left = useReveal();
  const right = useReveal();
  const barRef = useRef<HTMLDivElement>(null);
  const [barsInView, setBarsInView] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metodologia" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -bottom-48 -right-48 w-[550px] h-[550px] rounded-full bg-primary/[0.04] pointer-events-none" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div ref={left.ref} className={`rv-l ${left.visible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
              Nossa Metodologia
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.8rem)] tracking-[-1.5px] leading-[1.08] mb-4">
              Como organizamos sua empresa em <span className="text-primary">4 etapas</span>
            </h2>
            <p className="text-[15px] text-gray-1 leading-relaxed mb-10">
              Seguimos um processo estruturado que garante consistência, aprendizado contínuo e entrega de valor real.
            </p>
            <div className="flex flex-col">
              {steps.map((s) => (
                <div key={s.num} className="group flex gap-5 py-6 border-b border-foreground/5 last:border-b-0">
                  <div className="flex-shrink-0 w-[46px] h-[46px] rounded-[11px] bg-primary/10 border-[1.5px] border-primary/25 flex items-center justify-center font-display text-[17px] font-extrabold text-teal-light group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                    {s.num}
                  </div>
                  <div>
                    <h4 className="text-[15.5px] font-bold mb-1">{s.title}</h4>
                    <p className="text-[13.5px] text-gray-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={right.ref} className={`rv-r ${right.visible ? "visible" : ""}`}>
            <div ref={barRef} className="bg-gradient-to-br from-dark-3 to-dark-4 border border-primary/10 rounded-2xl p-10 shadow-[0_36px_72px_rgba(0,0,0,0.38)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--teal)/0.07),transparent_58%)] pointer-events-none" />
              <h3 className="font-display text-[22px] font-extrabold mb-7 relative">Resultados Médios dos Projetos</h3>
              <div className="flex flex-col gap-5 relative">
                {bars.map((bar) => (
                  <ResultBar key={bar.label} bar={bar} inView={barsInView} />
                ))}
              </div>
              <div className="mt-7 p-4 bg-primary/5 rounded-xl border border-primary/10 text-[12.5px] text-gray-2 leading-relaxed relative">
                <strong className="text-teal-light">Metodologia Tribo Ágil:</strong> combinamos Scrum, Kanban, OKRs, Design Thinking e SAFe com contexto real brasileiro e foco absoluto em implementação prática.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
