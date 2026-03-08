import { motion } from "framer-motion";
import { Heart, Lightbulb, Handshake } from "lucide-react";

const values = [
  { icon: Heart, title: "Propósito", desc: "Ajudar pessoas e empresas a prosperarem por meio da agilidade." },
  { icon: Handshake, title: "Colaboração", desc: "O poder da colaboração e da entrega contínua de valor." },
  { icon: Lightbulb, title: "Confiança", desc: "Construção de ambientes de confiança e alta performance." },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-dark-2 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="container">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
            Sobre Nós
          </span>
          <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.9rem)] leading-[1.08] tracking-[-1.5px] mb-5">
            Desde 2020 ajudando empresas a <span className="text-primary">organizar gestão</span> e acelerar resultados
          </h2>
          <p className="text-[15.5px] text-gray-2 leading-relaxed mb-7">
            Mais de 30 líderes e equipes já passaram por nossos treinamentos e consultorias. Acreditamos no poder da colaboração, da entrega contínua de valor e na construção de ambientes de confiança e alta performance.
          </p>
          <div className="flex flex-col gap-3.5">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-3.5 p-4 bg-primary/5 border border-primary/10 rounded-xl hover:bg-primary/[0.09] hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <v.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-[13.5px] font-bold mb-1">{v.title}</div>
                  <div className="text-[12.5px] text-gray-1 leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gradient-to-br from-dark-3 to-dark-4 border border-secondary/10 rounded-2xl p-10 relative overflow-hidden shadow-[0_36px_72px_rgba(0,0,0,0.38)]">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/5 pointer-events-none" />
            <div className="font-display text-[64px] font-extrabold tracking-[-3px] leading-none mb-1.5 bg-gradient-to-br from-secondary to-gold-dark bg-clip-text text-transparent">
              2020
            </div>
            <p className="text-[13px] text-gray-1 mb-7">Fundação da Tribo Ágil</p>
            <div className="grid grid-cols-2 gap-0.5 bg-primary/[0.08] rounded-xl overflow-hidden border border-primary/10 mb-6">
              {[
                { n: "+200", l: "Profissionais\ntreinados" },
                { n: "+30", l: "Empresas\natendidas" },
                { n: "+95%", l: "Taxa de\nsatisfação" },
                { n: "4.9", l: "Avaliação\nmédia" },
              ].map((s) => (
                <div key={s.n} className="p-5 bg-dark-3 text-center">
                  <div className="font-display text-[32px] font-extrabold tracking-[-1.5px] mb-1">{s.n}</div>
                  <div className="text-[11.5px] text-gray-1 leading-snug whitespace-pre-line">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="text-[13.5px] text-gray-2 leading-relaxed p-4 bg-primary/5 rounded-lg border border-primary/10">
              <strong className="text-teal-light">Metodologia Tribo Ágil:</strong> combinamos Scrum, Kanban, OKRs, Design Thinking e SAFe com contexto real brasileiro.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
