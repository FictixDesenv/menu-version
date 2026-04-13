import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layers, ShoppingCart, DollarSign, Sparkles } from "lucide-react";
import TrinioLogo from "@/components/TrinioLogo";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import IdleOverlay from "@/components/IdleOverlay";
import trinioOsIcon from "@/assets/trinio_os_icon.png";

const cards = [
  { id: "trinio-os", icon: Layers, label: "O que é o\nTrinio OS" },
  { id: "receita", icon: ShoppingCart, label: "Mais\nreceita" },
  { id: "margem", icon: DollarSign, label: "Mais\nmargem" },
  { id: "experiencia", icon: Sparkles, label: "Mais\nexperiência" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center overflow-hidden px-6">
      <IdleOverlay />

      {/* Icon */}
      <div className="pt-12 pb-3">
        <img src={trinioOsIcon} alt="Trinio OS" className="h-[90px] object-contain" />
      </div>

      {/* Subtitle */}
      <p className="text-center text-muted-foreground text-sm max-w-[260px] mb-8">
        Descubra como podemos transformar seus resultados
      </p>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm flex-1 min-h-0">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => navigate(`/app/${card.id}`)}
              className="glass-card flex flex-col items-center justify-center p-5 active:scale-95 transition-transform duration-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-sm font-bold text-foreground text-center whitespace-pre-line leading-tight">
                {card.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <div className="w-full max-w-sm py-5">
        <DemoButton onClick={() => setDemoOpen(true)} variant="outline" />
      </div>

      {/* Footer logo */}
      <div className="pb-6">
        <TrinioLogo size="sm" />
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default HomePage;
