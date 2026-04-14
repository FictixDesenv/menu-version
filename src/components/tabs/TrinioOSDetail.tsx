import { ArrowLeft, Check, Bot, BarChart3, ShoppingCart, Truck, Package, Plug } from "lucide-react";
import { useState } from "react";

const featureData: Record<
  string,
  { icon: any; title: string; description: string; features: string[]; video?: string }
> = {
  agentes: {
    icon: Bot,
    title: "Time de Agentes de IA",
    video: "/videos/trinio-os-agentes.mp4",
    description:
      "Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam.",
    features: [
      "Identificam ineficiências operacionais antes de impactar o cliente",
      "Propõem e executam novas regras de negócio baseadas em dados reais",
      "Respondem ao SAC com contexto completo do pedido",
    ],
  },
  raiox: {
    icon: BarChart3,
    title: "Raio-X da Operação",
    video: "/videos/trinio-os-raiox.mp4",
    description: "Visão unificada de toda a sua operação em um único painel, em tempo real.",
    features: [
      "Pedidos, estoque, fulfillment e entregas centralizados",
      "Diagnóstico 360º da sua eficiência operacional e logística",
      "Visão completa de cada etapa do ciclo de vida do pedido",
    ],
  },
  checkout: {
    icon: ShoppingCart,
    title: "Checkout Inteligente",
    video: "/videos/trinio-os-checkout.mp4",
    description: "Checkout de 1-clique de alta conversão, potencializado por IA.",
    features: [
      "Checkout com foco na experiência impulsiona até 15%",
      "Métodos de entrega e SLA respeitando regras de negócio",
      "Dados ricos do funil alimentam otimizações contínuas",
    ],
  },
  logistica: {
    icon: Truck,
    title: "Logística Customizada",
    description: "Motor de regras que coloca o controle da operação  nas mãos do negócio.",
    features: [
      "Prioridades de fulfillment por custo, prazo, perfil do cliente e mais",
      "Split automático de pedidos entre CDs e lojas",
      "Configure  sem depender de TI",
    ],
  },
  pickpack: {
    icon: Package,
    title: "App Pick and Pack",
    video: "/videos/trinio-os-pickpack.mp4",
    description: "App mobile para operadores de loja e CD gerenciarem a operação com agilidade.",
    features: [
      "Picking, packing e expedição com leitura  de código de barras",
      "Login social e tokenização automática",
      "Seleção automática do melhor meio de pagamento",
    ],
  },
  integracoes: {
    icon: Plug,
    title: "Integrações e Visibilidade",
    video: "/videos/trinio-os-integracoes.mp4",
    description:
      "Conectores nativos para os principais sistemas do comércio brasileiro — plug and play, sem middleware.",
    features: [
      "Principais plataformas, ERPS e PDVs do mercado.",
      "Integração rápida com mínimo esforço técnico.",
      "Visibilidade e controle total de dados e operações.",
    ],
  },
};

const featureIds = ["agentes", "raiox", "checkout", "logistica", "pickpack", "integracoes"];

interface TrinioOSDetailProps {
  featureId: string;
  onBack: () => void;
}

const TrinioOSDetail = ({ featureId, onBack }: TrinioOSDetailProps) => {
  const [activeTab, setActiveTab] = useState(featureId);
  const data = featureData[activeTab];

  return (
    <div className="flex flex-col h-full pl-[36px] pr-[36px] pb-[40px]">
      {/* Back button with section title */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-2 p-2 -ml-2"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-base font-bold">O que é o Trinio OS?</span>
      </button>

      {/* Sub-tab pills — no icons, full titles, rounded-sm */}
      <div className="flex flex-row gap-2 mb-3 w-full">
        {featureIds.map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 text-center px-1 py-[4px] rounded-[4px] text-[5px] font-medium leading-tight transition-all ${
              activeTab === id
                ? "bg-foreground text-card"
                : "bg-card border border-[rgba(164,168,255,0.19)] text-foreground"
            }`}
          >
            {featureData[id].title}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div className="glass-card p-4 flex-1 flex flex-col transition-opacity duration-200 pb-[8px]">
        <h3 className="text-xl font-bold text-foreground mb-2">{data.title}</h3>

        <p className="text-muted-foreground leading-relaxed mb-3 text-[10px]">{data.description}</p>

        {/* Video placeholder */}
        <div className="w-full aspect-[16/8] rounded-xl bg-[rgba(164,168,255,0.08)] border border-[rgba(164,168,255,0.12)] overflow-hidden mb-3">
          {data.video ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={data.video} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Vídeo em breve</span>
            </div>
          )}
        </div>

        {/* Feature list */}
        <div className="space-y-2">
          {data.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-[9px] text-foreground">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrinioOSDetail;
