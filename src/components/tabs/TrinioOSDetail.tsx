import { ArrowLeft, Check, Bot, BarChart3, ShoppingCart, Truck, Package, Plug } from "lucide-react";
import { useState } from "react";

const featureData: Record<string, { icon: any; title: string; description: string; features: string[]; video?: string }> = {
  agentes: {
    icon: Bot,
    title: "Time de Agentes de IA",
    video: "/videos/trinio-os-agentes.mp4",
    description: "Agentes inteligentes que automatizam tarefas repetitivas, monitoram sua operação 24/7 e tomam decisões baseadas em dados para otimizar processos.",
    features: [
      "Identificam ineficiências operacionais antes de impactar o cliente",
      "Propõem e executam novas regras de negócio baseadas em dados reais",
      "Respondem ao SAC com contexto completo do pedido",
    ],
  },
  raiox: {
    icon: BarChart3,
    title: "Raio-X da Operação",
    description: "Dashboard completo com visão 360° da sua operação. Métricas em tempo real, análises preditivas e insights acionáveis.",
    features: ["Métricas em tempo real", "Análises preditivas", "Insights acionáveis", "Relatórios customizáveis"],
  },
  checkout: {
    icon: ShoppingCart,
    title: "Checkout Inteligente",
    description: "Checkout otimizado que aumenta a taxa de conversão com cálculo dinâmico de frete, upsell inteligente e experiência fluida.",
    features: ["Cálculo dinâmico de frete", "Upsell inteligente", "Experiência sem fricção", "A/B testing nativo"],
  },
  logistica: {
    icon: Truck,
    title: "Logística Customizada",
    description: "Gestão logística flexível que se adapta ao seu negócio. Ship from store, entregas same-day e roteirização inteligente.",
    features: ["Ship from store", "Entregas same-day", "Roteirização inteligente", "Múltiplos centros de distribuição"],
  },
  pickpack: {
    icon: Package,
    title: "App Pick and Pack",
    description: "Aplicativo mobile para picking e packing que acelera a separação de pedidos com leitura de código de barras e otimização de rotas.",
    features: ["Leitura de código de barras", "Otimização de rotas", "Controle de qualidade", "Integração com ERP"],
  },
  integracoes: {
    icon: Plug,
    title: "Integrações e Visibilidade",
    description: "Conecte todos os seus sistemas em uma única plataforma. ERPs, marketplaces, transportadoras e muito mais.",
    features: ["Integração com ERPs", "Conexão com marketplaces", "APIs abertas", "Webhooks em tempo real"],
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
    <div className="flex flex-col h-full pl-[36px] pr-[36px] pb-[30px]">
      {/* Back button with section title */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-foreground hover:text-foreground/80 transition-colors mb-1.5 p-1 -ml-1"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-bold">O que é o Trinio OS?</span>
      </button>

      {/* Sub-tab pills */}
      <div className="flex flex-row gap-1.5 mb-2 w-full">
        {featureIds.map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 text-center px-0.5 py-[3px] rounded-sm text-[7px] font-medium leading-tight transition-all ${
              activeTab === id
                ? "bg-primary text-primary-foreground"
                : "bg-[rgba(164,168,255,0.12)] border border-[rgba(164,168,255,0.19)] text-muted-foreground"
            }`}
          >
            {featureData[id].title}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div className="glass-card p-3 flex-1 flex flex-col transition-opacity duration-200">
        <h3 className="text-base font-bold text-foreground mb-1.5">{data.title}</h3>

        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{data.description}</p>

        {/* Video placeholder */}
        <div className="w-full aspect-[16/7] rounded-lg bg-[rgba(164,168,255,0.08)] border border-[rgba(164,168,255,0.12)] overflow-hidden mb-2">
          {data.video ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={data.video} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-xs">Vídeo em breve</span>
            </div>
          )}
        </div>

        {/* Feature list */}
        <div className="space-y-1.5">
          {data.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-2 h-2 text-primary" />
              </div>
              <span className="text-xs text-foreground">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrinioOSDetail;
