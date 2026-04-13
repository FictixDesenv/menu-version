import { useState } from "react";
import { DollarSign, XCircle, Receipt, Users } from "lucide-react";
import GenericDetail from "./GenericDetail";

const cards = [
  { id: "menos-custo", icon: DollarSign, title: "Menos custo por pedido", description: "Reduza custos operacionais com automação e otimização de processos logísticos." },
  { id: "menos-cancelamentos", icon: XCircle, title: "Menos cancelamentos", description: "Diminua a taxa de cancelamento com comunicação proativa e gestão inteligente de pedidos." },
  { id: "beneficios-fiscais", icon: Receipt, title: "Aproveite benefícios fiscais", description: "Maximize benefícios fiscais com configurações inteligentes e compliance automatizado." },
  { id: "potencialize-time", icon: Users, title: "Potencialize seu time", description: "Empodere sua equipe com ferramentas que multiplicam a produtividade e eliminam tarefas manuais." },
];

const detailData: Record<string, { title: string; description: string; features: string[]; video?: string }> = {
  "menos-custo": {
    title: "Menos custo por pedido",
    description: "Reduza custos operacionais com automação e otimização de processos logísticos.",
    features: [
      "Automação de processos que reduz custo operacional",
      "Otimização de rotas e fulfillment para menor custo",
      "Relatórios detalhados de custo por pedido",
    ],
  },
  "menos-cancelamentos": {
    title: "Menos cancelamentos",
    description: "Diminua a taxa de cancelamento com comunicação proativa e gestão inteligente de pedidos.",
    features: [
      "Comunicação proativa sobre status do pedido",
      "Gestão inteligente que antecipa problemas",
      "Alertas automáticos para pedidos em risco",
    ],
  },
  "beneficios-fiscais": {
    title: "Aproveite benefícios fiscais",
    description: "Maximize benefícios fiscais com configurações inteligentes e compliance automatizado.",
    features: [
      "Configurações fiscais otimizadas automaticamente",
      "Compliance automatizado com legislação vigente",
      "Aproveitamento máximo de incentivos fiscais",
    ],
  },
  "potencialize-time": {
    title: "Potencialize seu time",
    description: "Empodere sua equipe com ferramentas que multiplicam a produtividade e eliminam tarefas manuais.",
    features: [
      "Ferramentas que multiplicam a produtividade",
      "Eliminação de tarefas manuais repetitivas",
      "Dashboards de performance da equipe",
    ],
  },
};

const detailIds = ["menos-custo", "menos-cancelamentos", "beneficios-fiscais", "potencialize-time"];

const MaisMargemTab = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  if (selectedFeature) {
    return (
      <GenericDetail
        sectionTitle="Mais margem"
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
        <h2 className="text-2xl font-bold text-foreground">Mais margem</h2>
        {/* <p className="text-muted-foreground text-sm mt-1">
          Reduza custos e aumente a eficiência da sua operação
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

export default MaisMargemTab;
