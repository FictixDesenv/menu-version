

## Corrigir ícones da HomePage — usar os ícones personalizados originais

### Problema
A `HomePage.tsx` está usando ícones genéricos do Lucide (Sparkles, TrendingUp, etc.) ao invés dos ícones PNG personalizados que já existem no projeto e são usados no `TrinioOSTab.tsx`.

### Correção em `src/pages/HomePage.tsx`

1. **Remover imports do Lucide** (Sparkles, TrendingUp, CreditCard, Layers, Package, Grid3X3)
2. **Importar os PNGs originais** da pasta `src/assets/`:
   - `icon-agentes.png`
   - `icon-raiox.png`
   - `icon-checkout.png`
   - `icon-logistica.png`
   - `icon-pickpack.png`
   - `icon-integracoes.png`
3. **Atualizar o array `features`** — trocar `icon: Sparkles` por `icon: iconAgentes` (string de imagem), remover props de `color`/`bg`
4. **Atualizar o render do grid** — trocar `<feat.icon className=...>` por `<img src={feat.icon} className="w-6 h-6" />`

### Arquivo modificado
- `src/pages/HomePage.tsx` — apenas trocar ícones Lucide pelos PNGs originais

