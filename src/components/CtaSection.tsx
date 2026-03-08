import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import { useReveal } from "@/hooks/use-reveal";

const CtaSection = () => {
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
              Diagnóstico Gratuito
            </span>
          </div>

          <div ref={r2.ref} className={`rv ${r2.visible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.3rem)] tracking-[-2px] leading-[1.05] mb-5">
              Quer estruturar sua empresa<br />com mais <span className="text-secondary">agilidade e propósito?</span>
            </h2>
          </div>

          <div ref={r3.ref} className={`rv ${r3.visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <p className="text-base text-gray-1 leading-relaxed mb-11">
              Agende uma conversa estratégica pelo WhatsApp — resposta rápida, sem compromisso, sem formulários.
            </p>
          </div>

          <div ref={r4.ref} className={`rv ${r4.visible ? "visible" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <a
              href={whatsappLink(WA_MESSAGES.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-foreground font-display text-xl font-extrabold px-12 py-5 rounded-2xl tracking-[-0.3px] shadow-[0_8px_32px_rgba(37,211,102,0.38)] hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(37,211,102,0.55)] transition-all duration-200"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L.057 23.7a.5.5 0 0 0 .611.625l6.083-1.596A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.855 9.855 0 0 1-5.023-1.373l-.36-.214-3.733.979.996-3.638-.235-.374A9.862 9.862 0 0 1 2.1 12c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9z"/></svg>
              Agendar conversa estratégica
            </a>
            <p className="mt-5 text-[13px] text-gray-1">
              <span className="text-teal-light font-semibold">● Online</span> &nbsp;·&nbsp; Resposta em minutos &nbsp;·&nbsp; Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
