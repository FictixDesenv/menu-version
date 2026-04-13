import { TrendingUp, Truck, BarChart3 } from "lucide-react";

const cards = [
  { icon: TrendingUp, title: "Checkout Uplift", description: "Aumente a conversão do seu checkout com otimizações inteligentes e experiências personalizadas." },
  { icon: Truck, title: "Dynamic Shipping Options", description: "Ofereça opções de frete dinâmicas que se adaptam ao perfil do cliente e maximizam a receita." },
  { icon: BarChart3, title: "Sale Funnel Insights", description: "Visibilidade completa do funil de vendas com insights para otimizar cada etapa da jornada." },
];

const MaisReceitaTab = () => {
  return (
    <div className="flex flex-col h-full px-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Mais receita</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Ferramentas para aumentar sua receita e conversão
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className={`glass-card p-5 flex flex-col items-start ${i === 2 ? "col-span-2" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaisReceitaTab;
