import { ArrowLeft, Check, Bot, BarChart3, ShoppingCart, Truck, Package, Plug } from "lucide-react";
import { useState } from "react";

const featureData: Record<string, { icon: any; title: string; description: string; features: string[]; video?: string }> = {
  agentes: {
    icon: Bot,
    title: "Time de Agentes de IA",
    video: "/videos/trinio-os-agentes.mp4",
    description: "Agentes inteligentes que automatizam tarefas repetitivas, monitoram sua operação 24/7 e tomam decisões baseadas em dados para otimizar processos.",
    features: ["Monitoramento contínuo", "Automação de tarefas", "Decisões baseadas em dados", "Alertas inteligentes"],
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
  const Icon = data.icon;

  return (
    <div className="flex flex-col h-full px-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4 p-2 -ml-2"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Voltar</span>
      </button>

      {/* Sub-tab pills */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-none">
        {featureIds.map((id) => {
          const TabIcon = featureData[id].icon;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-[rgba(164,168,255,0.12)] border border-[rgba(164,168,255,0.19)] text-muted-foreground"
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              {featureData[id].title.split(" ").slice(0, 2).join(" ")}
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div className="glass-card p-6 flex-1 flex flex-col transition-opacity duration-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{data.title}</h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{data.description}</p>

        {/* Video placeholder */}
        <div className="w-full aspect-video rounded-2xl bg-[rgba(164,168,255,0.08)] border border-[rgba(164,168,255,0.12)] overflow-hidden mb-5">
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
        <div className="space-y-3">
          {data.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrinioOSDetail;
