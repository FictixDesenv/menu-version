import FeaturePage from "./FeaturePage";

const slides = [
  { id: 1, title: "Caso de sucesso #1", desc: "Como uma rede varejista aumentou 40% nas vendas com o Trinio OS." },
  { id: 2, title: "Caso de sucesso #2", desc: "Redução de 60% no tempo de checkout com nossa solução integrada." },
  { id: 3, title: "Caso de sucesso #3", desc: "Transformação digital completa: do PDV ao e-commerce unificado." },
  { id: 4, title: "Caso de sucesso #4", desc: "Expansão internacional facilitada com pagamentos multi-moeda." },
];

const CasesPage = () => <FeaturePage pageTitle="Cases" slides={slides} />;
export default CasesPage;
