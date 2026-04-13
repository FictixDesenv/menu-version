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
    <div className="flex flex-col h-full px-6 pb-[60px] pl-[36px] pr-[36px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">O que é o Trinio OS?</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Uma plataforma completa para escalar sua operação de e-commerce
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-1 px-0 py-0">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature.id)}
            className="flex flex-col items-center justify-center text-center p-4 h-[100px] rounded-sm border border-[rgba(164,168,255,0.19)] bg-[rgba(35,28,99,0.48)] active:scale-95 transition-transform duration-100"
          >
            <img src={feature.icon} alt={feature.title} className="w-8 h-8 mb-3" />
            <h3 className="text-sx font-semibold text-foreground text-xs">{feature.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrinioOSTab;
