

## Ajustes nas tabs Mais Receita, Mais Margem e Mais Experiência

### O que muda
- Nas 3 tabs, os cards mostrarão apenas o título (ícones e textos comentados no código, não apagados)
- O subtítulo entre o título da seção e os cards será comentado
- Ao clicar em um card, abre uma tela de detalhe idêntica à do Trinio OS (back button, sub-tabs, card com título, vídeo e bullet points)

### Arquivos

**1. Novo: `src/components/tabs/GenericDetail.tsx`**
Componente reutilizável de detalhe, com a mesma estrutura visual do TrinioOSDetail:
- Back button com título da seção
- Sub-tabs de navegação entre features
- Card com título, descrição, vídeo placeholder e checklist

Interface:
```ts
interface GenericDetailProps {
  sectionTitle: string;
  featureData: Record<string, { title: string; description: string; features: string[]; video?: string }>;
  featureIds: string[];
  initialFeatureId: string;
  onBack: () => void;
}
```

**2. `src/components/tabs/MaisReceitaTab.tsx`**
- Comentar subtítulo `<p>`
- Nos cards: comentar ícone e descrição, manter `<h3>` título
- Adicionar `useState` + clique nos cards → renderizar `GenericDetail`
- Dados de detalhe para: Checkout Uplift, Dynamic Shipping Options, Sale Funnel Insights

**3. `src/components/tabs/MaisMargemTab.tsx`**
- Mesma lógica com 4 features: Menos custo por pedido, Menos cancelamentos, Aproveite benefícios fiscais, Potencialize seu time

**4. `src/components/tabs/MaisExperienciaTab.tsx`**
- Mesma lógica com 4 features: Entrega e retirada em loja, SAC mais rápido, Visão unificada, Cliente sempre informado

### O que NÃO muda
- Header, botão CTA, tab Trinio OS, TrinioOSDetail

