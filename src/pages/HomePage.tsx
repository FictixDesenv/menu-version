import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, CreditCard, Layers, Package, Grid3X3 } from "lucide-react";
import TrinioLogo from "@/components/TrinioLogo";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import IdleOverlay from "@/components/IdleOverlay";
import trinioOsIcon from "@/assets/trinio_os_icon.svg";

const features = [
  { id: "agentes", icon: Sparkles, label: "Time de\nAgentes de IA", color: "text-blue-400", bg: "bg-blue-400/20" },
  { id: "raiox", icon: TrendingUp, label: "Raio-X da\nOperação", color: "text-pink-400", bg: "bg-pink-400/20" },
  {
    id: "checkout",
    icon: CreditCard,
    label: "Checkout\nInteligente",
    color: "text-purple-400",
    bg: "bg-purple-400/20",
  },
  { id: "logistica", icon: Layers, label: "Logística\nCustomizada", color: "text-sky-400", bg: "bg-sky-400/20" },
  { id: "pickpack", icon: Package, label: "App Pick\nand Pack", color: "text-emerald-400", bg: "bg-emerald-400/20" },
  {
    id: "integracoes",
    icon: Grid3X3,
    label: "Integrações e\nVisibilidade",
    color: "text-orange-400",
    bg: "bg-orange-400/20",
  },
] as const;

const HomePage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-y-auto">
      <IdleOverlay />

      {/* Header */}
      <div className="flex items-center justify-between px-[36px] pb-4 pt-[36px]">
        <TrinioLogo size="sm" />
        <button
          onClick={() => setDemoOpen(true)}
          className="px-2 py-1 rounded-[6px] border border-primary text-primary text-[8px] font-semibold hover:bg-primary/10 transition-colors"
        >
          Agendar uma Demo
        </button>
      </div>

      {/* Trinio OS Hero */}
      <div className="flex flex-col items-center px-[36px] pt-4 pb-2">
        <img src={trinioOsIcon} alt="Trinio OS" className="h-[72px] object-contain mb-3" />
        <h1 className="text-xl font-bold text-foreground text-center mb-1">O que é o Trinio OS?</h1>
        <p className="text-muted-foreground text-[10px] text-center max-w-[280px]">
          Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam.
        </p>
      </div>

      {/* 2x3 Grid */}
      <div className="grid grid-cols-2 gap-3 px-[36px] pt-4 pb-8">
        {features.map((feat) => (
          <button
            key={feat.id}
            onClick={() => navigate(`/app/trinio-os?feature=${feat.id}`)}
            className="glass-card flex flex-col items-center justify-center p-3 h-[110px] active:scale-95 transition-transform duration-100"
          >
            <div className={`w-10 h-10 rounded-2xl ${feat.bg} flex items-center justify-center mb-2`}>
              <feat.icon className={`w-5 h-5 ${feat.color}`} />
            </div>
            <span className="text-xs font-bold text-foreground text-center whitespace-pre-line leading-tight">
              {feat.label}
            </span>
          </button>
        ))}
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default HomePage;
