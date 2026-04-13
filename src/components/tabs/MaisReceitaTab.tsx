import { useState } from "react";
import { TrendingUp, Truck, BarChart3 } from "lucide-react";
import GenericDetail from "./GenericDetail";

const cards = [
  { id: "checkout-uplift", icon: TrendingUp, title: "Checkout Uplift", description: "Aumente a conversão do seu checkout com otimizações inteligentes e experiências personalizadas." },
  { id: "dynamic-shipping", icon: Truck, title: "Dynamic Shipping Options", description: "Ofereça opções de frete dinâmicas que se adaptam ao perfil do cliente e maximizam a receita." },
  { id: "sale-funnel", icon: BarChart3, title: "Sale Funnel Insights", description: "Visibilidade completa do funil de vendas com insights para otimizar cada etapa da jornada." },
];

const detailData: Record<string, { title: string; description: string; features: string[]; video?: string }> = {
  "checkout-uplift": {
    title: "Checkout Uplift",
    description: "Aumente a conversão do seu checkout com otimizações inteligentes e experiências personalizadas.",
    features: [
      "Otimizações de UX que aumentam a taxa de conversão",
      "Experiências personalizadas por perfil de cliente",
      "Testes A/B automáticos para maximizar resultados",
    ],
  },
  "dynamic-shipping": {
    title: "Dynamic Shipping Options",
    description: "Ofereça opções de frete dinâmicas que se adaptam ao perfil do cliente e maximizam a receita.",
    features: [
      "Opções de frete adaptadas ao perfil do cliente",
      "Regras dinâmicas para maximizar margem e conversão",
      "Integração com múltiplas transportadoras",
    ],
  },
  "sale-funnel": {
    title: "Sale Funnel Insights",
    description: "Visibilidade completa do funil de vendas com insights para otimizar cada etapa da jornada.",
    features: [
      "Visão completa de cada etapa do funil de vendas",
      "Identificação de gargalos e oportunidades de melhoria",
      "Dashboards em tempo real com métricas acionáveis",
    ],
  },
};

const detailIds = ["checkout-uplift", "dynamic-shipping", "sale-funnel"];

const MaisReceitaTab = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  if (selectedFeature) {
    return (
      <GenericDetail
        sectionTitle="Mais receita"
        featureData={detailData}
        featureIds={detailIds}
        initialFeatureId={selectedFeature}
        onBack={() => setSelectedFeature(null)}
      />
    );
  }

  return (
    <div className="flex flex-col h-full px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Mais receita</h2>
        {/* <p className="text-muted-foreground text-sm mt-1">
          Ferramentas para aumentar sua receita e conversão
        </p> */}
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {cards.map((card, i) => {
          // const Icon = card.icon;
          return (
            <button
              key={i}
              onClick={() => setSelectedFeature(card.id)}
              className={`glass-card p-3 h-[60px] flex flex-col items-center justify-center text-center active:scale-95 transition-transform duration-100 ${i === 2 ? "col-span-2" : ""}`}
            >
              {/* <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div> */}
              <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
              {/* <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p> */}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MaisReceitaTab;
