export interface FeatureInfo {
  title: string;
  shortTitle?: string;
  description: string;
  features: string[];
  video?: string;
}

export interface TabConfig {
  id: string;
  label: string;
  featureIds: string[];
  featureData: Record<string, FeatureInfo>;
  videos: string[];
}

const trinioOSTab: TabConfig = {
  id: "trinio-os",
  label: "Trinio OS",
  featureIds: ["agentes", "raiox", "checkout", "logistica", "pickpack", "integracoes"],
  videos: [
    "/videos/trinio-os-agentes.mp4",
    "/videos/trinio-os-raiox.mp4",
    "/videos/trinio-os-checkout.mp4",
    "/videos/trinio-os-logistica.mp4",
    "/videos/trinio-os-pickpack.mp4",
    "/videos/trinio-os-integracoes.mp4",
  ],
  featureData: {
    agentes: {
      title: "Time de Agentes de IA",
      shortTitle: "Agentes IA",
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
      title: "Raio-X da Operação",
      shortTitle: "Raio-X",
      video: "/videos/trinio-os-raiox.mp4",
      description: "Visão unificada de toda a sua operação em um único painel, em tempo real.",
      features: [
        "Pedidos, estoque, fulfillment e entregas centralizados",
        "Diagnóstico 360º da sua eficiência operacional e logística",
        "Visão completa de cada etapa do ciclo de vida do pedido",
      ],
    },
    checkout: {
      title: "Checkout Inteligente",
      shortTitle: "Checkout",
      video: "/videos/trinio-os-checkout.mp4",
      description: "Checkout de 1-clique de alta conversão, potencializado por IA.",
      features: [
        "Checkout com foco na experiência impulsiona até 15%",
        "Métodos de entrega e SLA respeitando regras de negócio",
        "Dados ricos do funil alimentam otimizações contínuas",
      ],
    },
    logistica: {
      title: "Logística Customizada",
      shortTitle: "Logística",
      video: "/videos/trinio-os-logistica.mp4",
      description: "Motor de regras que coloca o controle da operação  nas mãos do negócio.",
      features: [
        "Prioridades de fulfillment por custo, prazo, perfil do cliente e mais",
        "Split automático de pedidos entre CDs e lojas",
        "Configure  sem depender de TI",
      ],
    },
    pickpack: {
      title: "App Pick and Pack",
      shortTitle: "Pick & Pack",
      video: "/videos/trinio-os-pickpack.mp4",
      description: "App mobile para operadores de loja e CD gerenciarem a operação com agilidade.",
      features: [
        "Picking, packing e expedição com leitura  de código de barras",
        "Login social e tokenização automática",
        "Seleção automática do melhor meio de pagamento",
      ],
    },
    integracoes: {
      title: "Integrações e Visibilidade",
      shortTitle: "Integrações",
      video: "/videos/trinio-os-integracoes.mp4",
      description:
        "Conectores nativos para os principais sistemas do comércio brasileiro — plug and play, sem middleware.",
      features: [
        "Principais plataformas, ERPS e PDVs do mercado.",
        "Integração rápida com mínimo esforço técnico.",
        "Visibilidade e controle total de dados e operações.",
      ],
    },
  },
};

const maisReceitaTab: TabConfig = {
  id: "receita",
  label: "Mais receita",
  featureIds: ["checkout-uplift", "dynamic-shipping", "sale-funnel"],
  videos: [
    "/videos/mais-receita-checkout-uplift.mp4",
    "/videos/mais-receita-dynamic-shipping.mp4",
    "/videos/mais-receita-sale-funnel.mp4",
  ],
  featureData: {
    "checkout-uplift": {
      title: "Checkout Uplift",
      video: "/videos/mais-receita-checkout-uplift.mp4",
      description: "Checkout de 1-clique que elimina fricção e acelera a jornada de compra. ",
      features: [
        "Preenchimento automático de dados.",
        "SLAs de entrega precisos que reduzem abandono.",
        "Otimização  baseada em dados reais do funil de vendas.",
      ],
    },
    "dynamic-shipping": {
      title: "Dynamic Shipping Options",
      shortTitle: "Dynamic Shipping",
      video: "/videos/mais-receita-dynamic-shipping.mp4",
      description: "Orquestração inteligente que encontra a melhor combinação de preço e prazo para cada pedido.",
      features: [
        "Cálculo dinâmico conectando TMSs e regras de negócio.",
        "Regras de frete grátis e promoções configuráveis.",
        "Entrega flexíveis: agendada, expressa, retirada em loja.",
      ],
    },
    "sale-funnel": {
      title: "Sale Funnel Insights",
      shortTitle: "Sale Funnel",
      video: "/videos/mais-receita-sale-funnel.mp4",
      description: "Dashboards e agentes de IA que revelam oportunidades escondidas no seu funil.",
      features: [
        "Análise de conversão por canal, dispositivo, região e perfil de cliente.",
        "Identificação automática de pontos de fricção e abandono.",
        "Relatórios de performance ligados ao impacto em receita.",
      ],
    },
  },
};

const maisMargemTab: TabConfig = {
  id: "margem",
  label: "Mais margem",
  featureIds: ["menos-custo", "menos-cancelamentos", "beneficios-fiscais", "potencialize-time"],
  videos: [
    "/videos/mais-margem-menos-custo.mp4",
    "/videos/mais-margem-menos-cancelamentos.mp4",
    "/videos/mais-margem-beneficios-fiscais.mp4",
    "/videos/mais-margem-potencialize-time.mp4",
  ],
  featureData: {
    "menos-custo": {
      title: "Menos custo por pedido",
      shortTitle: "Menos custo",
      video: "/videos/mais-margem-menos-custo.mp4",
      description: "Cada pedido é alocado automaticamente para o ponto de fulfillment ideal.",
      features: [
        "Roteamento considerando estoque, custo logístico e SLA prometido.",
        "Split inteligente entre CDs e lojas quando vantajoso.",
        "Balanceamento de carga para evitar gargalos operacionais.",
      ],
    },
    "menos-cancelamentos": {
      title: "Menos cancelamentos",
      shortTitle: "- Cancelamentos",
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
      shortTitle: "Benefícios fiscais",
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
      shortTitle: "Seu time",
      video: "/videos/mais-margem-potencialize-time.mp4",
      description: "Aumente a produtividade do seu time com agentes de IA orquestrados pelo Trinio OS",
      features: [
        "Nossos agentes de IA automatizam tarefas repetitivas.",
        "Seu time aprova, a IA executa — com controle total.",
        "Antecipe problemas e oportunidades com ações em tempo real.",
      ],
    },
  },
};

const maisExperienciaTab: TabConfig = {
  id: "experiencia",
  label: "Mais experiência",
  featureIds: ["entrega-loja", "sac-rapido", "visao-unificada"],
  videos: [
    "/videos/mais-experiencia-entrega-loja.mp4",
    "/videos/mais-experiencia-sac-rapido.mp4",
    "/videos/mais-experiencia-visao-unificada.mp4",
  ],
  featureData: {
    "entrega-loja": {
      title: "Entrega e retirada em loja",
      shortTitle: "Entrega/Loja",
      video: "/videos/mais-experiencia-entrega-loja.mp4",
      description:
        "Ship from store e pick-up in store: cada pedido é alocado automaticamente para o ponto de fulfillment ideal.",
      features: [
        "App Pick and Pack  separação, embalagem e expedição.",
        "Checkout em tempo real com SLA e priorização por disponibilidade de lojas.",
        "Fluxo de retirada com notificação, conferência e rastreio.",
      ],
    },
    "sac-rapido": {
      title: "SAC mais rápido",
      shortTitle: "SAC",
      video: "/videos/mais-experiencia-sac-rapido.mp4",
      description: "Visibilidade total e IA que age preventivamente - aprove e execute com um clique.",
      features: [
        "Painel unificado com histórico: status,tracking,incidentes e comunicações.",
        "Classificação inteligente por SLA, perfil do cliente e canal.",
        "Agente de IA que sugere respostas, ações e status.",
      ],
    },
    "visao-unificada": {
      title: "Visão unificada",
      shortTitle: "Visão 360°",
      video: "/videos/mais-experiencia-visao-unificada.mp4",
      description: "Todos os canais em uma única interface.",
      features: [
        "VTEX, marketplaces, lojas e parceiros em um único painel.",
        "Estoque sincronizado em tempo real entre CDs, lojas e parceiros.",
        "Visibilidade do pedido do checkout à entrega.",
      ],
    },
    "cliente-informado": {
      title: "Cliente sempre informado",
      shortTitle: "Informado",
      description: "Notificações automáticas em cada etapa da entrega,  sem o cliente precisar perguntar.",
      features: [
        "Atualizações em tempo real por e-mail, SMS ou WhatsApp",
        "Página de rastreio personalizada com a sua marca.",
        "Menos tickets no SAC com comunicação proativa.",
      ],
    },
  },
};

export const allTabs: TabConfig[] = [trinioOSTab, maisReceitaTab, maisMargemTab, maisExperienciaTab];
