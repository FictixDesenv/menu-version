import { useState } from "react";
import { Bot, BarChart3, ShoppingCart, Truck, Package, Plug, ChevronRight } from "lucide-react";
import TrinioOSDetail from "./TrinioOSDetail";

const features = [
  { id: "agentes", icon: Bot, title: "Time de Agentes de IA", description: "Automatize tarefas com agentes inteligentes" },
  { id: "raiox", icon: BarChart3, title: "Raio-X da Operação", description: "Visão completa da sua operação" },
  { id: "checkout", icon: ShoppingCart, title: "Checkout Inteligente", description: "Aumente conversão no checkout" },
  { id: "logistica", icon: Truck, title: "Logística Customizada", description: "Entregas sob medida para seu negócio" },
  { id: "pickpack", icon: Package, title: "App Pick and Pack", description: "Picking e packing otimizados" },
  { id: "integracoes", icon: Plug, title: "Integrações e Visibilidade", description: "Conecte tudo em um só lugar" },
];

const TrinioOSTab = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  if (selectedFeature) {
    return (
      <TrinioOSDetail
        featureId={selectedFeature}
        onBack={() => setSelectedFeature(null)}
      />
    );
  }

  return (
    <div className="flex flex-col h-full px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">O que é o Trinio OS?</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Uma plataforma completa para escalar sua operação de e-commerce
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature.id)}
              className="flex flex-col items-center justify-center text-center p-4 h-[120px] rounded-sm border border-[rgba(164,168,255,0.19)] bg-[rgba(35,28,99,0.48)] active:scale-95 transition-transform duration-100"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrinioOSTab;
