import { DollarSign, XCircle, Receipt, Users } from "lucide-react";

const cards = [
  { icon: DollarSign, title: "Menos custo por pedido", description: "Reduza custos operacionais com automação e otimização de processos logísticos." },
  { icon: XCircle, title: "Menos cancelamentos", description: "Diminua a taxa de cancelamento com comunicação proativa e gestão inteligente de pedidos." },
  { icon: Receipt, title: "Aproveite benefícios fiscais", description: "Maximize benefícios fiscais com configurações inteligentes e compliance automatizado." },
  { icon: Users, title: "Potencialize seu time", description: "Empodere sua equipe com ferramentas que multiplicam a produtividade e eliminam tarefas manuais." },
];

const MaisMargemTab = () => {
  return (
    <div className="flex flex-col h-full px-6">
      <div className="mb-2">
        <h2 className="text-base font-bold text-foreground">Mais margem</h2>
        <p className="text-muted-foreground text-xs mt-0.5">
          Reduza custos e aumente a eficiência da sua operação
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="glass-card p-2 flex flex-col items-start">
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

export default MaisMargemTab;
