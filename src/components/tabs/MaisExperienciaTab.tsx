import { useState } from "react";
import { Store, Headphones, Eye, Bell } from "lucide-react";
import GenericDetail from "./GenericDetail";

const cards = [
  { id: "entrega-loja", icon: Store, title: "Entrega e retirada em loja", description: "Ofereça pick-up in store e ship from store com experiência perfeita para o cliente." },
  { id: "sac-rapido", icon: Headphones, title: "SAC mais rápido", description: "Atendimento ao cliente acelerado com contexto completo do pedido e automações inteligentes." },
  { id: "visao-unificada", icon: Eye, title: "Visão unificada", description: "Visão 360° do cliente com histórico de compras, preferências e interações em todos os canais." },
  { id: "cliente-informado", icon: Bell, title: "Cliente sempre informado", description: "Notificações proativas sobre status do pedido, entrega e oportunidades personalizadas." },
];

const detailData: Record<string, { title: string; description: string; features: string[]; video?: string }> = {
  "entrega-loja": {
    title: "Entrega e retirada em loja",
    description: "Ofereça pick-up in store e ship from store com experiência perfeita para o cliente.",
    features: [
      "Pick-up in store com experiência integrada",
      "Ship from store otimizando estoque e prazo",
      "Gestão unificada de pedidos loja e online",
    ],
  },
  "sac-rapido": {
    title: "SAC mais rápido",
    description: "Atendimento ao cliente acelerado com contexto completo do pedido e automações inteligentes.",
    features: [
      "Contexto completo do pedido para o atendente",
      "Automações inteligentes para respostas rápidas",
      "Redução significativa do tempo de resolução",
    ],
  },
  "visao-unificada": {
    title: "Visão unificada",
    description: "Visão 360° do cliente com histórico de compras, preferências e interações em todos os canais.",
    features: [
      "Histórico completo de compras e interações",
      "Preferências do cliente centralizadas",
      "Visão omnichannel de todos os pontos de contato",
    ],
  },
  "cliente-informado": {
    title: "Cliente sempre informado",
    description: "Notificações proativas sobre status do pedido, entrega e oportunidades personalizadas.",
    features: [
      "Notificações proativas sobre status do pedido",
      "Atualizações em tempo real sobre entrega",
      "Comunicações personalizadas por canal preferido",
    ],
  },
};

const detailIds = ["entrega-loja", "sac-rapido", "visao-unificada", "cliente-informado"];

const MaisExperienciaTab = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  if (selectedFeature) {
    return (
      <GenericDetail
        sectionTitle="Mais experiência"
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
        <h2 className="text-2xl font-bold text-foreground">Mais experiência</h2>
        {/* <p className="text-muted-foreground text-sm mt-1">
          Melhore a experiência do seu cliente em todos os pontos de contato
        </p> */}
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {cards.map((card, i) => {
          // const Icon = card.icon;
          return (
            <button
              key={i}
              onClick={() => setSelectedFeature(card.id)}
              className="glass-card p-3 h-[60px] flex flex-col items-center justify-center text-center active:scale-95 transition-transform duration-100"
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

export default MaisExperienciaTab;
