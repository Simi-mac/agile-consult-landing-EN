import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO(); // sincroniza title, meta description e html[lang] com o idioma ativo

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      {/* Depoimentos removidos do fluxo da página */}
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
