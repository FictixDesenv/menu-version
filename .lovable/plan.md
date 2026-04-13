

## Ajustes na página /app/trinio-os

### 1. Tabs do header (`src/pages/MainPage.tsx`, linhas 64-68)

- `px-4 py-2.5` → `px-3 py-1.5` (reduzir height)
- `text-sm` → `text-xs` (fonte menor)
- `rounded-full` → `rounded-sm` (border-radius small)

### 2. Cards de funcionalidades (`src/components/tabs/TrinioOSTab.tsx`, linhas 38-51)

- Remover `<p>` de descrição (linha 48)
- Remover `<ChevronRight>` (linha 49)
- Centralizar conteúdo: `items-start text-left` → `items-center text-center justify-center`
- Trocar `glass-card` por classes com `rounded-sm` e background/border manuais
- Adicionar altura fixa `h-[120px]`
- Ícone centralizado acima do título

