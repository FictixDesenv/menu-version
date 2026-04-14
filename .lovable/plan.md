

## Problema

Três issues no TrinioOSTab e MainPage:

1. **Botao "Agendar uma Demo"**: usa `rounded-full` (pill shape) quando deveria usar `rounded-[6px]` para manter consistência com o design system
2. **Grid dos cards**: os cards usam `rounded-sm` (2px) mas deveriam usar a classe `glass-card` que tem `border-radius: 10px`. Além disso, o `gap-x-4 gap-y-3` está inconsistente — deveria ser `gap-4` uniforme como nas outras tabs
3. **Cards esticando verticalmente**: o grid tem `flex-1` que faz os cards expandirem para preencher toda a tela. Precisa remover `flex-1` para que os cards mantenham altura fixa

## Alterações

### 1. `src/pages/MainPage.tsx` — Botão demo
- Mudar `rounded-full` para `rounded-[6px]` no botão "Agendar uma Demo"
- Alinhar padding do header com `px-[36px]` para consistência

### 2. `src/components/tabs/TrinioOSTab.tsx` — Grid e cards
- Remover `flex-1` do grid container (evita que os cards estiquem para preencher a tela)
- Mudar `gap-x-4 gap-y-3` para `gap-4` (espaçamento uniforme)
- Nos cards: trocar as classes inline (`rounded-sm border border-[...] bg-[...]`) pela classe `glass-card` que já tem o border-radius, border e background corretos
- Manter `h-[100px]` nos cards para altura fixa

