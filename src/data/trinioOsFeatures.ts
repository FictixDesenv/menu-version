import iconAgentes from "@/assets/icon-agentes.png";
import iconRaiox from "@/assets/icon-raiox.png";
import iconCheckout from "@/assets/icon-checkout.png";
import iconLogistica from "@/assets/icon-logistica.png";
import iconPickpack from "@/assets/icon-pickpack.png";
import iconIntegracoes from "@/assets/icon-integracoes.png";

export interface TrinioOsFeature {
  id: string;
  icon: string;
  title: string;
  homeLabel: string;
  video: string;
  description: string;
  features: string[];
}

export const trinioOsFeatures: TrinioOsFeature[] = [
  {
    id: "agentes",
    icon: iconAgentes,
    title: "Time de Agentes de IA",
    homeLabel: "Time de\nAgentes de IA",
    video: "/videos/trinio-os-agentes-v2.mp4",
    description:
      "Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam.",
    features: [
      "Identificam ineficiências operacionais antes de impactar o cliente",
      "Propõem e executam novas regras de negócio baseadas em dados reais",
      "Respondem ao SAC com contexto completo do pedido",
    ],
  },
  {
    id: "raiox",
    icon: iconRaiox,
    title: "Raio-X da Operação",
    homeLabel: "Raio-X da\nOperação",
    video: "/videos/trinio-os-raiox.mp4",
    description: "Visão unificada de toda a sua operação em um único painel, em tempo real.",
    features: [
      "Pedidos, estoque, fulfillment e entregas centralizados",
      "Diagnóstico 360º da sua eficiência operacional e logística",
      "Visão completa de cada etapa do ciclo de vida do pedido",
    ],
  },
  {
    id: "checkout",
    icon: iconCheckout,
    title: "Checkout Inteligente",
    homeLabel: "Checkout\nInteligente",
    video: "/videos/trinio-os-checkout.mp4",
    description: "Checkout de 1-clique de alta conversão, potencializado por IA.",
    features: [
      "Checkout com foco na experiência impulsiona até 15%",
      "Métodos de entrega e SLA respeitando regras de negócio",
      "Dados ricos do funil alimentam otimizações contínuas",
    ],
  },
  {
    id: "logistica",
    icon: iconLogistica,
    title: "Logística Customizada",
    homeLabel: "Logística\nCustomizada",
    video: "/videos/trinio-os-logistica.mp4",
    description: "Motor de regras que coloca o controle da operação nas mãos do negócio.",
    features: [
      "Prioridades de fulfillment por custo, prazo, perfil do cliente e mais",
      "Split automático de pedidos entre CDs e lojas",
      "Configure sem depender de TI",
    ],
  },
  {
    id: "pickpack",
    icon: iconPickpack,
    title: "App Pick and Pack",
    homeLabel: "App Pick\nand Pack",
    video: "/videos/trinio-os-pickpack.mp4",
    description: "App mobile para operadores de loja e CD gerenciarem a operação com agilidade.",
    features: [
      "Picking, packing e expedição com leitura de código de barras",
      "Login social e tokenização automática",
      "Seleção automática do melhor meio de pagamento",
    ],
  },
  {
    id: "integracoes",
    icon: iconIntegracoes,
    title: "Integrações e Visibilidade",
    homeLabel: "Integrações e\nVisibilidade",
    video: "/videos/trinio-os-integracoes.mp4",
    description:
      "Conectores nativos para os principais sistemas do comércio brasileiro — plug and play, sem middleware.",
    features: [
      "Principais plataformas, ERPS e PDVs do mercado.",
      "Integração rápida com mínimo esforço técnico.",
      "Visibilidade e controle total de dados e operações.",
    ],
  },
];

export const trinioOsFeatureMap = Object.fromEntries(
  trinioOsFeatures.map((f) => [f.id, f])
) as Record<string, TrinioOsFeature>;

export const trinioOsFeatureIds = trinioOsFeatures.map((f) => f.id);

export const trinioOsVideos = trinioOsFeatures.map((f) => f.video);
