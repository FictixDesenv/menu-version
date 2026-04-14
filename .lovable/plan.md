

## Unificar HomePage + Trinio OS em uma única página

### O que muda

A HomePage atual (grid 2x2 com cards) será substituída por uma nova página que já mostra o conteúdo do Trinio OS diretamente, conforme a referência. O Splash navegará direto para `/app` que agora será essa nova página unificada.

### Layout da nova HomePage (baseado na referência)

```text
┌─────────────────────────────┐
│ [Trinio Logo]   [Demo btn]  │  ← header igual ao MainPage
├─────────────────────────────┤
│       [Trinio OS icon]      │  ← ícone grande do Trinio OS
│    "O que é o Trinio OS?"   │  ← título
│    descrição do agentes     │  ← descrição da feature ativa
├─────────────────────────────┤
│ [Agentes IA] [Raio-X]       │  ← grid 2x3 com as 6 features
│ [Checkout]   [Logística]    │    do Trinio OS (glass cards
│ [Pick&Pack]  [Integrações]  │    com ícone + título)
└─────────────────────────────┘
```

Ao clicar em um card de feature, navega para `/app/trinio-os` (MainPage) com aquela feature ativa. Os outros 3 cards do menu antigo (receita, margem, experiência) continuam acessíveis via as tabs na MainPage.

### Arquivos modificados

**1. `src/pages/HomePage.tsx`** — Reescrever completamente:
- Header com TrinioLogo + botão "Agendar uma Demo" (mesmo estilo do MainPage)
- Ícone Trinio OS centralizado (usar `trinio_os_icon.svg`)
- Título "O que é o Trinio OS?" e descrição geral
- Grid 2x3 com as 6 features do `trinioOSTab.featureData` (glass cards com ícone colorido + título)
- Cada card navega para `/app/trinio-os?feature={id}` ou similar
- Scroll habilitado (conteúdo é mais alto que a tela)

**2. `src/pages/MainPage.tsx`** — Pequeno ajuste:
- Ler query param `feature` para pré-selecionar a feature ativa ao entrar
- Logo clica de volta para `/app`

**3. `src/App.tsx`** — Sem mudanças de rota (Splash → `/app` → HomePage, `/app/:section` → MainPage)

**4. `src/pages/SplashPage.tsx`** — Sem mudanças (já navega para `/app`)

### Ícones dos cards de features
Na referência cada feature tem um ícone colorido distinto. Usaremos ícones do Lucide com cores específicas:
- Agentes IA → Sparkles (azul)
- Raio-X → TrendingUp (rosa)
- Checkout → CreditCard (roxo)
- Logística → Layers (azul)
- Pick & Pack → Package (verde)
- Integrações → Grid3X3 (laranja)

