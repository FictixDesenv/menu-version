import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TrinioLogo from "@/components/TrinioLogo";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import { ShoppingCart, CreditCard, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  { id: 1, title: "Checkout Inteligente", desc: "Experiência de compra otimizada", icon: ShoppingCart, color: "bg-primary/10 text-primary" },
  { id: 2, title: "Pagamentos", desc: "Múltiplos métodos", icon: CreditCard, color: "bg-secondary/10 text-secondary" },
  { id: 3, title: "Analytics", desc: "Dados em tempo real", icon: BarChart3, color: "bg-primary/10 text-primary" },
  { id: 4, title: "Segurança", desc: "Proteção avançada", icon: Shield, color: "bg-secondary/10 text-secondary" },
  { id: 5, title: "Performance", desc: "Velocidade máxima", icon: Zap, color: "bg-primary/10 text-primary" },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background">
      <div className="max-w-lg w-full flex flex-col items-center px-5">
        <div className="pb-6 flex justify-center">
          <TrinioLogo size="sm" />
        </div>

        <h2 className="text-4xl font-bold text-foreground mb-2 text-center">
          Conheça a Trinio OS
        </h2>
        <p className="text-muted-foreground text-xl mb-8 text-center">
          Descubra como podemos transformar seus resultado
        </p>

        {/* Feature card - full width */}
        <button
          onClick={() => navigate("/overview")}
          className="w-full bg-card rounded-2xl p-6 mb-4 border border-border text-left shadow-sm hover:shadow-md transition-shadow"
        >
          {(() => { const Icon = features[0].icon; return (
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${features[0].color}`}>
            <Icon className="w-6 h-6" />
          </div>
          ); })()}
          <h3 className="font-semibold text-foreground text-lg">{features[0].title}</h3>
          <p className="text-muted-foreground text-base mt-1">{features[0].desc}</p>
        </button>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 w-full">
          {features.slice(1).map((f) => (
            <button
              key={f.id}
              onClick={() => navigate("/overview")}
              className="bg-card rounded-2xl p-5 border border-border text-left shadow-sm hover:shadow-md transition-shadow"
            >
              {(() => { const Icon = f.icon; return (
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-2 ${f.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              ); })()}
              <h3 className="font-semibold text-foreground text-base">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-0.5">{f.desc}</p>
            </button>
          ))}
        </div>

        <DemoButton onClick={() => setDemoOpen(true)} />
        <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      </div>
    </div>
  );
};

export default MenuPage;
