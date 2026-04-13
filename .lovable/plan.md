

## Ajuste de layout da HomePage

### Mudanças

**`src/pages/HomePage.tsx`**:
- Container principal: adicionar `pt-[60px]` (padding top 60px)
- Botão "Agendar Demo": trocar `py-5` por `pb-[60px]` para criar espaço entre ele e o footer
- Footer (logo): manter posição atual, fixar no bottom com `mt-auto`

**`src/components/TrinioLogo.tsx`**:
- Reduzir 15% do tamanho atual (80×25 → 68×21)

### Estrutura resultante

```text
┌─────────────────────┐
│   padding-top: 60px │
│      [Ícone]        │
│     [Subtítulo]     │
│                     │
│   [Card] [Card]     │
│   [Card] [Card]     │
│                     │
│  [Agendar Demo]     │
│  padding-bottom:60px│
│                     │
│   [Logo Trinio]     │  ← mt-auto, fixo no bottom
│     pb-6            │
└─────────────────────┘
```

