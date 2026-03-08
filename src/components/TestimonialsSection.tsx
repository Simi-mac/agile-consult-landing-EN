import { Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    text: "Conseguimos organizar nossos processos e reduzir retrabalho em poucas semanas. Em 6 meses, o tempo de entrega caiu 45% e o time nunca esteve tão alinhado.",
    name: "Rafael Santos",
    role: "CEO · TechStart Solutions",
    initials: "RS",
    gradient: "from-teal-dark to-primary",
  },
  {
    text: "A mentoria me ajudou a pensar estrategicamente e a me posicionar com muito mais clareza. Estruturei a gestão do meu time e os resultados apareceram rapidamente.",
    name: "Ana Carvalho",
    role: "Product Manager · Fintech Nacional",
    initials: "AC",
    gradient: "from-gold-dark to-secondary",
  },
  {
    text: "O treinamento presencial nivelou toda a equipe. A aplicabilidade imediata do conteúdo foi o que mais surpreendeu — saímos praticando no dia seguinte com processos claros.",
    name: "Marcos Costa",
    role: "Scrum Master · Empresa de Varejo",
    initials: "MC",
    gradient: "from-dark-5 to-dark-4",
  },
];

const TestimonialCard = ({ t, i }: { t: typeof testimonials[0]; i: number }) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`rv ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      <div className="bg-dark-3 border border-foreground/[0.055] rounded-2xl p-8 hover:-translate-y-[5px] hover:border-primary/15 transition-all duration-300 h-full">
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, j) => (
            <Star key={j} size={15} className="text-secondary fill-secondary" />
          ))}
        </div>
        <p className="text-[13.5px] text-gray-2 leading-relaxed mb-6 italic">"{t.text}"</p>
        <div className="flex items-center gap-3">
          <div className={`w-[42px] h-[42px] rounded-[11px] bg-gradient-to-br ${t.gradient} flex items-center justify-center font-display text-[15px] font-extrabold flex-shrink-0`}>
            {t.initials}
          </div>
          <div>
            <div className="text-[13.5px] font-bold">{t.name}</div>
            <div className="text-[11.5px] text-gray-1">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const header = useReveal();

  return (
    <section id="depoimentos" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      {/* Decorative blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/[0.04] blur-[80px] animate-pulse-scale pointer-events-none" />
      <div className="container relative">
        <div ref={header.ref} className={`text-center mb-16 rv ${header.visible ? "visible" : ""}`}>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
            Depoimentos
          </span>
          <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.9rem)] leading-[1.08] tracking-[-1.5px]">
            O que dizem<br /><span className="text-primary">nossos clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
