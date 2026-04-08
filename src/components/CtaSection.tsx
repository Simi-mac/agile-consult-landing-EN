import { useTranslation } from "react-i18next";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import { useReveal } from "@/hooks/use-reveal";
import { trackCtaAgendarConversa } from "@/analytics";

const CtaSection = () => {
  const { t } = useTranslation();
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <section id="contato" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.05] pointer-events-none blur-[60px]" />
      <div className="container">
        <div className="max-w-[740px] mx-auto text-center relative z-10">
          <div ref={r1.ref} className={`rv ${r1.visible ? "visible" : ""}`}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-gold-light mb-5">
              {t("cta.badge")}
            </span>
          </div>

          <div ref={r2.ref} className={`rv ${r2.visible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.3rem)] tracking-[-2px] leading-[1.05] mb-5">
              {t("cta.title_1")}<br />{t("cta.title_2")} <span className="text-secondary">{t("cta.title_highlight")}</span>
            </h2>
          </div>

          <div ref={r3.ref} className={`rv ${r3.visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <p className="text-base text-gray-1 leading-relaxed mb-11">
              {t("cta.description")}
            </p>
          </div>

          <div ref={r4.ref} className={`rv ${r4.visible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <a
              href={whatsappLink(WA_MESSAGES.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaAgendarConversa('final_cta')}
              className="inline-flex items-center gap-3.5 bg-gradient-to-br from-[#2AABEE] to-[#229ED9] text-foreground font-display text-xl font-extrabold px-12 py-5 rounded-2xl tracking-[-0.3px] shadow-[0_8px_32px_rgba(42,171,238,0.38)] hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(42,171,238,0.55)] transition-all duration-200"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.09 14.089l-2.956-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.722.497z"/></svg>
              {t("cta.button")}
            </a>
            <p className="mt-5 text-[13px] text-gray-1">
              <span className="text-teal-light font-semibold">{t("cta.online_label")}</span> &nbsp;·&nbsp; {t("cta.tagline")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
