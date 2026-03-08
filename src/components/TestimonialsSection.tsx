import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "A Tribo Ágil transformou completamente nossa forma de trabalhar. Em 6 meses, reduzimos o tempo de entrega em 45% e o time nunca esteve tão alinhado. O ROI foi impressionante.",
    name: "Rafael Santos",
    role: "CEO · TechStart Solutions",
    initials: "RS",
    gradient: "from-teal-dark to-primary",
  },
  {
    text: "A mentoria executiva foi divisor de águas na minha carreira como Product Manager. Me ajudaram a pensar estrategicamente e a me posicionar com muito mais clareza e segurança.",
    name: "Ana Carvalho",
    role: "Product Manager · Fintech Nacional",
    initials: "AC",
    gradient: "from-gold-dark to-secondary",
  },
  {
    text: "O treinamento presencial trouxe a Scrum Master e o time inteiro para o mesmo nível. A aplicabilidade imediata do conteúdo foi o que mais surpreendeu — saímos praticando no dia seguinte.",
    name: "Marcos Costa",
    role: "Scrum Master · Empresa de Varejo",
    initials: "MC",
    gradient: "from-dark-5 to-dark-4",
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-24 bg-dark-2 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
          Depoimentos
        </span>
        <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.9rem)] leading-[1.08] tracking-[-1.5px]">
          O que dizem<br /><span className="text-primary">nossos clientes</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="bg-dark-3 border border-foreground/[0.055] rounded-2xl p-8 hover:-translate-y-1 hover:border-primary/15 transition-all"
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
