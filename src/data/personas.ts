export interface Persona {
  id: string;
  name: string;
  subtitle: string;
}

export const personas: Persona[] = [
  { id: "cto", name: "CTO / Tech Lead", subtitle: "Tecnologia e integrações" },
  { id: "ecommerce", name: "E-commerce Manager", subtitle: "Vendas e conversão" },
  { id: "cfo", name: "CFO / Financeiro", subtitle: "Custos e resultados" },
  { id: "produto", name: "Head de Produto", subtitle: "Experiência e inovação" },
];
