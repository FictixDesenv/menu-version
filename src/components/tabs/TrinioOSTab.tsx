import { useState } from "react";
import iconAgentes from "@/assets/icon-agentes.png";
import iconRaiox from "@/assets/icon-raiox.png";
import iconCheckout from "@/assets/icon-checkout.png";
import iconLogistica from "@/assets/icon-logistica.png";
import iconPickpack from "@/assets/icon-pickpack.png";
import iconIntegracoes from "@/assets/icon-integracoes.png";
import TrinioOSDetail from "./TrinioOSDetail";

const features = [
  { id: "agentes", icon: iconAgentes, title: "Time de Agentes de IA" },
  { id: "raiox", icon: iconRaiox, title: "Raio-X da Operação" },
  { id: "checkout", icon: iconCheckout, title: "Checkout Inteligente" },
  { id: "logistica", icon: iconLogistica, title: "Logística Customizada" },
  { id: "pickpack", icon: iconPickpack, title: "App Pick and Pack" },
  { id: "integracoes", icon: iconIntegracoes, title: "Integrações e Visibilidade" },
];

const TrinioOSTab = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  if (selectedFeature) {
    return <TrinioOSDetail featureId={selectedFeature} onBack={() => setSelectedFeature(null)} />;
  }

  return (
    <div className="flex flex-col h-full px-6 pb-[30px] pl-[36px] pr-[36px]">
      <div className="mb-2">
        <h2 className="text-base font-bold text-foreground">O que é o Trinio OS?</h2>
        <p className="text-muted-foreground text-[10px] mt-0.5">
          Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 flex-1 px-0 py-0">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature.id)}
            className="flex flex-col items-center justify-center text-center p-2 h-[64px] rounded-sm border border-[rgba(164,168,255,0.19)] bg-[rgba(35,28,99,0.48)] active:scale-95 transition-transform duration-100"
          >
            <img src={feature.icon} alt={feature.title} className="w-4 h-4 mb-1.5" />
            <h3 className="font-semibold text-foreground text-[10px]">{feature.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrinioOSTab;
