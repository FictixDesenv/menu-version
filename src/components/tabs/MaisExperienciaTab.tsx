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
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Mais experiência</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Melhore a experiência do seu cliente em todos os pontos de contato
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="glass-card p-5 flex flex-col items-start">
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

export default MaisExperienciaTab;
