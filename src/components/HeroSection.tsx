import { CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-photo.webp";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";

const chips = [
  { text: "Estrutura de processos" },
  { text: "Equipes alinhadas" },
  { text: "Resultados mensuráveis" },
];

const trianglePositions = [
  { top: "12%", left: "75%", size: 18, delay: "0s", duration: "10s", opacity: 0.07 },
  { top: "25%", left: "85%", size: 14, delay: "1.5s", duration: "12s", opacity: 0.05 },
  { top: "55%", left: "80%", size: 22, delay: "3s", duration: "9s", opacity: 0.06 },
  { top: "70%", left: "70%", size: 12, delay: "4.5s", duration: "11s", opacity: 0.04 },
  { top: "35%", left: "90%", size: 16, delay: "2s", duration: "13s", opacity: 0.05 },
  { top: "80%", left: "88%", size: 10, delay: "5s", duration: "10s", opacity: 0.06 },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center min-h-[100svh] sm:min-h-[600px] md:h-[80vh] md:min-h-[560px] pt-24 sm:pt-24 md:pt-28 pb-12">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 animate-fade-in"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--teal) / 0.035) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--teal) / 0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 65% 20%, black, transparent 80%)",
          }}
        />
      </div>

      {/* Floating triangles */}
      {trianglePositions.map((t, i) => (
        <div
          key={i}
          className="absolute z-[1] animate-float animate-fade-in"
          style={{
            top: t.top,
            left: t.left,
            animationDelay: t.delay,
            animationDuration: t.duration,
            opacity: t.opacity,
          }}
        >
          <svg width={t.size} height={t.size} viewBox="0 0 24 24" fill="none" stroke="hsl(var(--teal-light))" strokeWidth="1.5">
            <polygon points="12,2 22,22 2,22" />
          </svg>
        </div>
      ))}

      {/* Glow blobs */}
      <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] animate-pulse-scale" style={{ willChange: "transform", transform: "translateZ(0)" }} />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] animate-pulse-scale" style={{ animationDelay: "2.5s", willChange: "transform", transform: "translateZ(0)" }} />

      <div className="container relative z-10" style={{ isolation: "isolate" }}>
        <div className="max-w-3xl">
          <div
            className="animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-teal-light mb-6">
              Consultoria, Mentoria & Treinamento
            </span>
          </div>

          <h1
            className="font-display font-extrabold text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-2px] mb-5 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Organizamos empresas que{" "}
            <span className="text-primary">cresceram</span> sem{" "}
            <span className="text-secondary">estrutura.</span>
          </h1>

          <p
            className="text-[17px] text-gray-2 leading-relaxed max-w-[540px] mb-8 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Consultoria e treinamentos em métodos ágeis para transformar caos operacional em processos claros e equipes alinhadas.
          </p>

          <div
            className="flex flex-wrap gap-2.5 mb-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {chips.map((chip) => (
              <span
                key={chip.text}
                className="flex items-center gap-2 text-[13px] font-medium text-gray-3 bg-foreground/[0.045] border border-foreground/[0.08] px-3.5 py-1.5 rounded-full transition-all duration-[250ms] hover:bg-primary/10 hover:border-primary/25 hover:text-teal-light"
              >
                <CheckCircle size={14} className="text-primary" />
                {chip.text}
              </span>
            ))}
          </div>

          <div
            className="flex items-center gap-3.5 flex-wrap animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href={whatsappLink(WA_MESSAGES.diagnostico)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-teal-dark text-primary-foreground text-[15px] font-bold px-8 py-3.5 rounded-xl shadow-[0_6px_26px_hsl(var(--teal)/0.38)] hover:-translate-y-[3px] hover:shadow-[0_14px_38px_hsl(var(--teal)/0.55)] transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L.057 23.7a.5.5 0 0 0 .611.625l6.083-1.596A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.855 9.855 0 0 1-5.023-1.373l-.36-.214-3.733.979.996-3.638-.235-.374A9.862 9.862 0 0 1 2.1 12c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9z"/></svg>
              Agendar diagnóstico gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-gray-3 text-sm font-semibold px-6 py-3.5 border-[1.5px] border-foreground/10 rounded-xl hover:text-teal-light hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              Conheça nossos serviços
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
