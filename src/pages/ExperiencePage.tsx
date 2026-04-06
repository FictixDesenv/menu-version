import FeaturePage from "./FeaturePage";

const slides = [
  { id: 1, title: "Experiência personalizada", desc: "Ofereça jornadas únicas e personalizadas para cada cliente." },
  { id: 2, title: "Omnichannel", desc: "Integre todos os canais de venda em uma experiência fluida e consistente." },
  { id: 3, title: "Fidelização", desc: "Programas de fidelidade inteligentes que aumentam a retenção." },
  { id: 4, title: "Atendimento premium", desc: "Ferramentas para um atendimento ágil e de alta qualidade." },
];

const ExperiencePage = () => <FeaturePage pageTitle="Mais experiência" slides={slides} />;
export default ExperiencePage;
