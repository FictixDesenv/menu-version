import { useState } from "react";
import { DollarSign, XCircle, Receipt, Users } from "lucide-react";
import GenericDetail from "./GenericDetail";

const cards = [
  {
    id: "menos-custo",
    icon: DollarSign,
    title: "Menos custo por pedido",
    description: "Reduza custos operacionais com automação e otimização de processos logísticos.",
  },
  {
    id: "menos-cancelamentos",
    icon: XCircle,
    title: "Menos cancelamentos",
    description: "Diminua a taxa de cancelamento com comunicação proativa e gestão inteligente de pedidos.",
  },
  {
    id: "beneficios-fiscais",
    icon: Receipt,
    title: "Aproveite benefícios fiscais",
    description: "Maximize benefícios fiscais com configurações inteligentes e compliance automatizado.",
  },
  {
    id: "potencialize-time",
    icon: Users,
    title: "Potencialize seu time",
    description: "Empodere sua equipe com ferramentas que multiplicam a produtividade e eliminam tarefas manuais.",
  },
];

const detailData: Record<string, { title: string; description: string; features: string[]; video?: string }> = {
  "menos-custo": {
    title: "Menos custo por pedido",
    description: "Cada pedido é alocado automaticamente para o ponto de fulfillment ideal.",
    features: [
      "Roteamento considerando estoque, custo logístico e SLA prometido.",
      "Split inteligente entre CDs e lojas quando vantajoso.",
      "Balanceamento de carga para evitar gargalos operacionais.",
    ],
  },
  "menos-cancelamentos": {
    title: "Menos cancelamentos",
    video: "/videos/mais-margem-menos-cancelamentos.mp4",
    description: "Reduza cancelamentos por atraso ou ruptura em até 20%",
    features: [
      "Resolução automática de incidentes com re-alocação e comunicação proativa.",
      "Visibilidade total do pedido para prevenir cancelamentos.",
      "Análise de causa raiz por IA para evitar recorrência.",
    ],
  },
  "beneficios-fiscais": {
    title: "Aproveite benefícios fiscais",
    video: "/videos/mais-margem-beneficios-fiscais.mp4",
    description: "Regras configuráveis que maximizam benefícios tributários automaticamente.",
    features: [
      "Direcione pedidos para regiões com benefícios fiscais.",
      "Respeite regras para não comprometer prazos ou custos.",
      "Ajuste baseado em dados de performance e impacto financeiro.",
    ],
  },
  "potencialize-time": {
    title: "Potencialize seu time",
    video: "/videos/mais-margem-potencialize-time.mp4",
    description: "Aumente a produtividade do seu time com agentes de IA orquestrados pelo Trinio OS",
    features: [
      "Nossos agentes de IA automatizam tarefas repetitivas.",
      "Seu time aprova, a IA executa — com controle total.",
      "Antecipe problemas e oportunidades com ações em tempo real.",
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

      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, i) => {
          // const Icon = card.icon;
          return (
            <button
              key={i}
              onClick={() => setSelectedFeature(card.id)}
              className="glass-card p-3 h-[90px] flex flex-col items-center justify-center text-center active:scale-95 transition-transform duration-100"
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
