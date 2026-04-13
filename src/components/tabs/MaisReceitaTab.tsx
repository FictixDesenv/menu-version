import { TrendingUp, Truck, BarChart3 } from "lucide-react";

const cards = [
  { icon: TrendingUp, title: "Checkout Uplift", description: "Aumente a conversão do seu checkout com otimizações inteligentes e experiências personalizadas." },
  { icon: Truck, title: "Dynamic Shipping Options", description: "Ofereça opções de frete dinâmicas que se adaptam ao perfil do cliente e maximizam a receita." },
  { icon: BarChart3, title: "Sale Funnel Insights", description: "Visibilidade completa do funil de vendas com insights para otimizar cada etapa da jornada." },
];

const MaisReceitaTab = () => {
  return (
    <div className="flex flex-col h-full px-6">
      <div className="mb-2">
        <h2 className="text-base font-bold text-foreground">Mais receita</h2>
        <p className="text-muted-foreground text-xs mt-0.5">
          Ferramentas para aumentar sua receita e conversão
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className={`glass-card p-2 flex flex-col items-start ${i === 2 ? "col-span-2" : ""}`}
            >
              <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center mb-1.5">
                <Icon className="w-3 h-3 text-primary" />
              </div>
              <h3 className="text-xs font-semibold text-foreground mb-0.5">{card.title}</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaisReceitaTab;
