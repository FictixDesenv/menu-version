

## Mudanças na MainPage

### 1. Logo 10% maior
Em `TrinioLogo.tsx`, aumentar os valores do size `sm` de 68×21 para ~75×23.

### 2. Botão "Agendar uma Demo" 10% menor
Em `MainPage.tsx` linha 47, reduzir o texto/padding do botão (de `text-xs px-4 py-2` para `text-[10px] px-3 py-1.5`).

### 3. Reduzir gap entre tabs e card de conteúdo
Em `MainPage.tsx` linha 54, trocar `pb-8` por `pb-3` no container do navigation block.

### 4. Swipe entre features da mesma tab
Em `MainPage.tsx`, adicionar touch swipe handlers no container de conteúdo:
- Detectar `touchstart`/`touchend` com diferença X > 50px
- Swipe direita → feature anterior, swipe esquerda → próxima feature
- Navegar apenas dentro de `activeTab.featureIds`
- Sem indicador de posição

Implementação com `onTouchStart`/`onTouchEnd` no div de conteúdo (linha 93), armazenando `touchStartX` via `useRef`. No `onTouchEnd`, calcular delta e chamar `setActiveFeatureId` com o próximo/anterior ID da lista.

