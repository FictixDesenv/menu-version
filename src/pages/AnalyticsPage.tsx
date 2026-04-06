import FeaturePage from "./FeaturePage";

const slides = [
  { id: 1, title: "Dashboard em tempo real", desc: "Acompanhe todas as métricas do seu negócio em um painel intuitivo e atualizado." },
  { id: 2, title: "Relatórios detalhados", desc: "Gere relatórios completos de vendas, conversão e comportamento do cliente." },
  { id: 3, title: "Insights inteligentes", desc: "Receba sugestões baseadas em dados para otimizar suas operações." },
  { id: 4, title: "Exportação de dados", desc: "Exporte seus dados em diversos formatos para análises externas." },
];

const AnalyticsPage = () => <FeaturePage pageTitle="Analytics" slides={slides} />;
export default AnalyticsPage;
