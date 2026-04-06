import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logoTrino from "@/assets/logo_trinio.png";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import IdleOverlay from "@/components/IdleOverlay";
import { ShoppingCart, CreditCard, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  { id: 1, title: "O que é o Trinio OS?", desc: "Conheça nossa plataforma", icon: ShoppingCart, color: "bg-primary/10 text-primary", route: "/overview" },
  { id: 2, title: "Pagamentos", desc: "Múltiplos métodos aceitos", icon: CreditCard, color: "bg-primary/10 text-primary", route: "/payments" },
  { id: 3, title: "Analytics", desc: "Dados e métricas em tempo real", icon: BarChart3, color: "bg-primary/10 text-primary", route: "/analytics" },
  { id: 4, title: "Mais experiência", desc: "Inovação para seu cliente", icon: Shield, color: "bg-primary/10 text-primary", route: "/experience" },
  { id: 5, title: "Cases", desc: "Histórias de sucesso", icon: Zap, color: "bg-primary/10 text-primary", route: "/cases" },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background px-5 pb-8">
      <div className="flex justify-center pt-[60px] pb-[16px]">
        <img src={logoTrino} alt="Trinio" style={{ height: 39 }} className="object-contain" />
      </div>

      <p className="text-muted-foreground mb-[23px] text-center text-base">
        Descubra como podemos<br />transformar seus resultado
      </p>

      {/* Feature card - full width */}
      <button
        onClick={() => navigate("/overview")}
        className="w-full bg-card rounded-2xl px-4 py-2.5 mb-4 border border-border text-center shadow-sm hover:shadow-md transition-shadow"
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
      <IdleOverlay />
    </div>
  );
};

export default MenuPage;
