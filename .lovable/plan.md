

## Pivot Completo — Novo Design System e Navegação por Features

A aplicação será reconstruída com um design dark/glass, navegação por tabs em vez de personas, e layout fullscreen sem scroll para o totem.

---

### Arquitetura Nova

```text
┌─────────────────────────────────┐
│  HEADER — Logo Trinio (centro)  │
├─────────────────────────────────┤
│  TOP NAV — 4 pills horizontais  │
│  [Trinio OS] [Mais receita]     │
│  [Mais margem] [Mais experiência]│
├─────────────────────────────────┤
│  CONTENT AREA (flex-1)          │
│  Grid de glass cards            │
├─────────────────────────────────┤
│  FOOTER — CTA "Agendar Demo"   │
│  outline roxo, pill button      │
└─────────────────────────────────┘
```

**Fluxo:** Splash (idle) → toque → App principal (tabs). Sem LandingPage intermediária.

---

### Mudanças por arquivo

#### 1. Design Tokens — `src/index.css`
- Remover paleta clara atual (HSL vars)
- Adicionar novos tokens: `--bg-gradient`, `--purple-active`, `--card-bg`, `--card-border`, `--nav-inactive-bg`, etc.
- Background global: gradiente escuro `#0b0a1a → #19134b → #0c0b1c`
- Body: `overflow: hidden`, `height: 100vh`

#### 2. Tailwind Config — `tailwind.config.ts`
- Atualizar cores para os novos tokens (purple-active, card-bg, navy, coral, etc.)
- Adicionar border-radius `35px` para cards glass

#### 3. Splash Page — `src/pages/SplashPage.tsx`
- Manter como tela de idle/descanso
- Ao tocar, navegar direto para `/app` (remover `/landing`)
- Manter fade-out transition

#### 4. Remover páginas obsoletas
- **Deletar:** `LandingPage.tsx`, `MenuPage.tsx`, `OverviewPage.tsx`, `PaymentsPage.tsx`, `AnalyticsPage.tsx`, `ExperiencePage.tsx`, `CasesPage.tsx`, `FeaturePage.tsx`

#### 5. Nova página principal — `src/pages/MainPage.tsx`
- Layout fullscreen (`h-screen overflow-hidden`) com background gradient
- **Header:** Logo Trinio centralizada (topo, ~80px do topo)
- **Top Nav:** 4 pills horizontais (Trinio OS, Mais receita, Mais margem, Mais experiência)
  - Ativo: bg `#8F59DF`, texto branco
  - Inativo: bg `rgba(164,168,255,0.12)`, borda `rgba(164,168,255,0.19)`
- **Content:** renderiza conteúdo da tab ativa
- **Footer:** Botão CTA "Agendar uma Demo" outline roxo (`#8E58DF`), pill, centralizado

#### 6. Tab: Trinio OS — Overview (`src/components/tabs/TrinioOSTab.tsx`)
- Título "O que é o Trinio OS?" + subtítulo em cinza
- Grid 2×3 com 6 glass cards (bg `rgba(35,28,99,0.48)`, borda `rgba(164,168,255,0.21)`, radius 35px):
  1. Time de Agentes de IA
  2. Raio-X da Operação
  3. Checkout Inteligente
  4. Logística Customizadas
  5. App Pick and Pack
  6. Integrações e Visibilidade
- Clicar card → abre detail view com sub-tabs

#### 7. Tab: Trinio OS — Detail View (`src/components/tabs/TrinioOSDetail.tsx`)
- Seta voltar + título lado a lado
- Row de 6 sub-tab pills (scroll horizontal)
- Glass card com: título, descrição, área de vídeo placeholder, lista de features com check icons
- Conteúdo de cada sub-tab conforme o prompt

#### 8. Tab: Mais Receita (`src/components/tabs/MaisReceitaTab.tsx`)
- Título "Mais receita"
- Grid: 3 glass cards (2 col + 1 col)
  - Checkout Uplift, Dynamic Shipping Options, Sale Funnel Insights

#### 9. Tab: Mais Margem (`src/components/tabs/MaisMargemTab.tsx`)
- Título "Mais margem"
- Grid 2×2: Menos custo por pedido, Menos cancelamentos, Aproveite benefícios fiscais, Potencialize seu time

#### 10. Tab: Mais Experiência (`src/components/tabs/MaisExperienciaTab.tsx`)
- Título "Mais experiência"
- Grid 2×2: Entrega e retirada em loja, SAC mais rápido, Visão unificada, Cliente sempre informado

#### 11. Componentes atualizados
- **`DemoModal.tsx`:** Manter mas adaptar visual para fundo escuro (card glass)
- **`DemoButton.tsx`:** Estilo outline roxo `#8E58DF`, pill, font-semibold 44px no totem
- **`IdleOverlay.tsx`:** Manter lógica (navega para `/` após inatividade)
- **`TrinioHeader.tsx` e `TrinioLogo.tsx`:** Simplificar — logo branca centralizada, sem seta de voltar (nav por tabs agora)

#### 12. Rotas — `src/App.tsx`
- Remover rotas antigas (`/landing`, `/menu`, `/overview`, `/payments`, `/analytics`, `/experience`, `/cases`)
- Adicionar: `/` (Splash), `/app` (MainPage)
- Remover zoom/totem scale wrapper (app é fullscreen 1080×1920 nativo)

---

### Interações e Animações

- **Tab switch:** instantâneo
- **Card tap:** `active:scale-95 transition-transform duration-100`
- **Sub-tab switch:** fade in (`transition-opacity duration-200`)
- **Back (detail → overview):** slide from left (`translateX`, 200ms)
- **Touch targets:** mínimo 80px de altura

---

### Resumo

| Ação | Arquivos |
|------|----------|
| Deletar | `LandingPage`, `MenuPage`, `OverviewPage`, `PaymentsPage`, `AnalyticsPage`, `ExperiencePage`, `CasesPage`, `FeaturePage` |
| Reescrever | `index.css`, `tailwind.config.ts`, `App.tsx`, `SplashPage.tsx`, `DemoButton.tsx`, `DemoModal.tsx`, `TrinioHeader.tsx` |
| Criar | `MainPage.tsx`, `TrinioOSTab.tsx`, `TrinioOSDetail.tsx`, `MaisReceitaTab.tsx`, `MaisMargemTab.tsx`, `MaisExperienciaTab.tsx` |
| Manter | `IdleOverlay.tsx` (sem mudanças), `TrinioLogo.tsx` (ajustar cor para branco) |

