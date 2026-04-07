import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "@/hooks/use-reveal";
import { useSectionView } from "@/analytics";

// Dados estáticos das barras (width e highlight não são traduzíveis)
const BAR_STATIC = [
  { width: 68, highlight: false },
  { width: 55, highlight: false },
  { width: 40, highlight: true  },
  { width: 35, highlight: true  },
  { width: 42, highlight: false },
];

type BarTranslation = { label: string; value: string };
type Bar = BarTranslation & typeof BAR_STATIC[0];

type Step = { num: string; title: string; desc: string };

const ResultBar = ({ bar, inView }: { bar: Bar; inView: boolean }) => (
  <div>
    <div className="flex justify-between items-center mb-2 text-[14px]">
      <span className="text-foreground font-normal pr-4">{bar.label}</span>
      <span className="font-semibold whitespace-nowrap" style={{ color: '#1a9e8f' }}>{bar.value}</span>
    </div>
    <div className="h-1.5 bg-gray-300/50 rounded-full overflow-hidden">
      {bar.highlight ? (
        <div
          className="h-full rounded-full"
          style={{
            width: inView ? `${bar.width}%` : '0%',
            background: 'linear-gradient(90deg, #1a9e8f 0%, #a8ddd7 100%)',
            transition: "width 1.4s cubic-bezier(.16,1,.3,1)",
          }}
        />
      ) : (
        <div
          className="h-full rounded-full origin-left"
          style={{
            transform: inView ? `scaleX(${bar.width / 100})` : "scaleX(0)",
            transition: "transform 1.4s cubic-bezier(.16,1,.3,1)",
            backgroundColor: '#1a9e8f',
          }}
        />
      )}
    </div>
  </div>
);

const MethodologySection = () => {
  const { t } = useTranslation();
  const left = useReveal();
  const right = useReveal();
  const barRef = useRef<HTMLDivElement>(null);
  const [barsInView, setBarsInView] = useState(false);
  const sectionRef = useSectionView('methodology');

  const steps = t("methodology.steps", { returnObjects: true }) as Step[];
  const barTranslations = t("methodology.bars", { returnObjects: true }) as BarTranslation[];
  const bars: Bar[] = BAR_STATIC.map((b, i) => ({ ...b, ...barTranslations[i] }));

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
    <section ref={sectionRef} id="metodologia" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute -bottom-48 -right-48 w-[550px] h-[550px] rounded-full bg-primary/[0.04] pointer-events-none" />
      <div className="container">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div ref={left.ref} className={`rv-l ${left.visible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-5">
              {t("methodology.badge")}
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.55rem,2.8vw,2.2rem)] tracking-[-1.5px] leading-[1.08] mb-3">
              {t("methodology.title_pre")} <span className="text-primary">{t("methodology.title_hl")}</span>
            </h2>
            <p className="text-[14px] text-gray-1 leading-relaxed mb-7">
              {t("methodology.description")}
            </p>
            <div className="flex flex-col">
              {steps.map((s) => (
                <div key={s.num} className="group flex gap-4 py-4 border-b border-foreground/5 last:border-b-0">
                  <div className="flex-shrink-0 w-[38px] h-[38px] rounded-[9px] bg-primary/10 border-[1.5px] border-primary/25 flex items-center justify-center font-display text-[15px] font-extrabold text-teal-light group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
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
            <div ref={barRef} className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <h3 className="font-display text-[22px] font-bold mb-7 text-dark-1 relative">{t("methodology.results_title")}</h3>
              <div className="flex flex-col gap-5 relative">
                {bars.map((bar) => (
                  <ResultBar key={bar.label} bar={bar} inView={barsInView} />
                ))}
              </div>
              <div className="mt-6 p-4 bg-teal-50 rounded-xl text-[13px] text-gray-700 leading-relaxed relative">
                <strong className="text-teal-700">{t("methodology.methodology_hl")}</strong> {t("methodology.methodology_desc")}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 text-center leading-relaxed relative">
                {t("methodology.disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
