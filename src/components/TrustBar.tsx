import { Award, Users, Building, Clock } from "lucide-react";

const items = [
  { icon: Clock, label: "Desde 2020", desc: "no mercado" },
  { icon: Users, label: "+200", desc: "profissionais treinados" },
  { icon: Building, label: "+30", desc: "empresas atendidas" },
  { icon: Award, label: "4.9/5", desc: "avaliação média" },
];

const TrustBar = () => (
  <div className="relative z-10 border-y border-foreground/5 bg-dark-2/65 backdrop-blur-xl py-6">
    <div className="container flex items-center justify-center gap-12 flex-wrap">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5">
          <item.icon size={18} className="text-primary" />
          <span className="text-[13px] text-gray-2 font-medium">
            <strong className="text-foreground font-bold">{item.label}</strong> {item.desc}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
