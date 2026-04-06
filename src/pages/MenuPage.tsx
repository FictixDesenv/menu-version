import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TrinioLogo from "@/components/TrinioLogo";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import { ShoppingCart, CreditCard, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  { id: 1, title: "O que é o Trinio OS?", desc: "Experiência de compra otimizada", icon: ShoppingCart, color: "bg-primary/10 text-primary" },
  { id: 2, title: "Pagamentos", desc: "Múltiplos métodos", icon: CreditCard, color: "bg-secondary/10 text-secondary" },
  { id: 3, title: "Analytics", desc: "Dados em tempo real", icon: BarChart3, color: "bg-primary/10 text-primary" },
  { id: 4, title: "Segurança", desc: "Proteção avançada", icon: Shield, color: "bg-secondary/10 text-secondary" },
  { id: 5, title: "Performance", desc: "Velocidade máxima", icon: Zap, color: "bg-primary/10 text-primary" },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pb-8">
      <div className="pt-10 pb-6 flex justify-center py-[66px]">
        <TrinioLogo size="sm" />
      </div>

      <h2 className="font-bold text-foreground mb-1 text-center text-xl">
        Conheça a Trinio OS
      </h2>
      <p className="text-muted-foreground mb-6 text-center text-sm">
        Descubra como podemos transformar seus resultado
      </p>

      {/* Feature card - full width */}
      <button
        onClick={() => navigate("/overview")}
        className="w-full bg-card rounded-2xl px-4 py-2.5 mb-4 border border-border text-center transition-shadow shadow-sm"
      >
        {(() => { const Icon = features[0].icon; return (
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 mx-auto ${features[0].color}`}>
          <Icon className="w-4 h-4" />
        </div>
        ); })()}
        <h3 className="text-foreground text-sm leading-tight text-center font-bold">{features[0].title}</h3>
        <p className="text-muted-foreground text-xs mt-0 leading-tight text-center">{features[0].desc}</p>
      </button>

      {/* 2x2 grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {features.slice(1).map((f) => (
          <button
            key={f.id}
            onClick={() => navigate("/overview")}
            className="bg-card rounded-2xl px-4 py-2.5 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
          >
            {(() => { const Icon = f.icon; return (
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 mx-auto ${f.color}`}>
              <Icon className="w-4 h-4" />
            </div>
            ); })()}
            <h3 className="text-foreground text-sm leading-tight text-center font-bold">{f.title}</h3>
            <p className="text-muted-foreground text-xs mt-0 leading-tight text-center">{f.desc}</p>
          </button>
        ))}
      </div>

      <DemoButton onClick={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MenuPage;
