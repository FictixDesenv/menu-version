import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrinioLogo from "@/components/TrinioLogo";
import DemoModal from "@/components/DemoModal";
import IdleOverlay from "@/components/IdleOverlay";
import trinioOsIcon from "@/assets/trinio_os_icon.svg";
import iconAgentes from "@/assets/icon-agentes.png";
import iconRaiox from "@/assets/icon-raiox.png";
import iconCheckout from "@/assets/icon-checkout.png";
import iconLogistica from "@/assets/icon-logistica.png";
import iconPickpack from "@/assets/icon-pickpack.png";
import iconIntegracoes from "@/assets/icon-integracoes.png";

const features = [
  { id: "agentes", icon: iconAgentes, label: "Time de\nAgentes de IA", alt: "Time de Agentes de IA" },
  { id: "raiox", icon: iconRaiox, label: "Raio-X da\nOperação", alt: "Raio-X da Operação" },
  { id: "checkout", icon: iconCheckout, label: "Checkout\nInteligente", alt: "Checkout Inteligente" },
  { id: "logistica", icon: iconLogistica, label: "Logística\nCustomizada", alt: "Logística Customizada" },
  { id: "pickpack", icon: iconPickpack, label: "App Pick\nand Pack", alt: "App Pick and Pack" },
  { id: "integracoes", icon: iconIntegracoes, label: "Integrações e\nVisibilidade", alt: "Integrações e Visibilidade" },
] as const;

const HomePage = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-y-auto">
      <IdleOverlay />

      <div className="flex items-center justify-between px-[36px] pb-4 pt-[36px]">
        <TrinioLogo size="sm" />
        <button
          onClick={() => setDemoOpen(true)}
          className="px-2 py-1 rounded-[6px] border border-primary text-primary text-[8px] font-semibold hover:bg-primary/10 transition-colors"
        >
          Agendar uma Demo
        </button>
      </div>

      <div className="flex flex-col items-center px-[36px] pt-4 pb-2">
        <img src={trinioOsIcon} alt="Trinio OS" className="h-[72px] object-contain mb-3" />
        <h1 className="text-xl font-bold text-foreground text-center mb-1">O que é o Trinio OS?</h1>
        <p className="text-muted-foreground text-[8px] text-center max-w-[280px]">
          Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-[36px] pt-4 pb-8">
        {features.map((feat) => (
          <button
            key={feat.id}
            onClick={() => navigate(`/app/trinio-os?feature=${feat.id}`)}
            className="glass-card flex flex-col items-center justify-center p-3 h-[110px] active:scale-95 transition-transform duration-100"
          >
            <img src={feat.icon} alt={feat.alt} className="mb-3 h-10 w-10 object-contain" />
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
