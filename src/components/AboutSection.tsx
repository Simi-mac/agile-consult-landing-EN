import { CheckCircle2, TrendingUp, Users2, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useReveal } from "@/hooks/use-reveal";

// Ícones mantidos no componente (não são traduzíveis)
const STAT_ICONS = [Users2, TrendingUp, Star, Star];

const AboutSection = () => {
  const { t } = useTranslation();
  const left  = useReveal();
  const right = useReveal();

  type Benefit = { title: string; desc: string };
  type Stat    = { n: string; label: string };

  const benefits = t("about.benefits", { returnObjects: true }) as Benefit[];
  const statTexts = t("about.stats", { returnObjects: true }) as Stat[];
  const stats = STAT_ICONS.map((icon, i) => ({ ...statTexts[i], icon }));

  return (
    <section id="sobre" className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Coluna esquerda ── */}
          <div ref={left.ref} className={`rv-l ${left.visible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
              {t("about.badge")}
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.9rem,3.5vw,2.9rem)] leading-[1.08] tracking-[-1.5px] mb-5">
              {t("about.title_pre")} <span className="text-primary">{t("about.title_hl")}</span>
            </h2>
            <p className="text-[15.5px] text-gray-2 leading-relaxed mb-8">
              {t("about.description")}
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
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-gray-1 mb-4">{t("about.stats_badge")}</p>
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
                <strong className="text-teal-light">{t("about.methodology_hl")}</strong>{" "}
                {t("about.methodology_desc")}
              </div>

              {/* Ano discreto */}
              <p className="text-[12px] text-gray-1 text-center">
                {t("about.since_prefix")} <span className="font-semibold text-gray-2">{t("about.since_year")}</span> {t("about.since_suffix")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
