import { Store, Headphones, Eye, Bell } from "lucide-react";

const cards = [
  { icon: Store, title: "Entrega e retirada em loja", description: "Ofereça pick-up in store e ship from store com experiência perfeita para o cliente." },
  { icon: Headphones, title: "SAC mais rápido", description: "Atendimento ao cliente acelerado com contexto completo do pedido e automações inteligentes." },
  { icon: Eye, title: "Visão unificada", description: "Visão 360° do cliente com histórico de compras, preferências e interações em todos os canais." },
  { icon: Bell, title: "Cliente sempre informado", description: "Notificações proativas sobre status do pedido, entrega e oportunidades personalizadas." },
];

const MaisExperienciaTab = () => {
  return (
    <div className="flex flex-col h-full px-6">
      <div className="mb-2">
        <h2 className="text-base font-bold text-foreground">Mais experiência</h2>
        <p className="text-muted-foreground text-xs mt-0.5">
          Melhore a experiência do seu cliente em todos os pontos de contato
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

export default MaisExperienciaTab;
