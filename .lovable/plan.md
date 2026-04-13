

## Restaurar ícones customizados no TrinioOSTab

O componente `TrinioOSTab.tsx` está usando ícones Lucide (Bot, BarChart3, etc.) em vez das imagens PNG customizadas que foram adicionadas anteriormente. As imagens existem em `src/assets/` mas não estão sendo importadas.

### Correção (`src/components/tabs/TrinioOSTab.tsx`)

1. Remover imports do Lucide (Bot, BarChart3, ShoppingCart, Truck, Package, Plug, ChevronRight)
2. Importar as imagens PNG:
   ```
   import iconAgentes from "@/assets/icon-agentes.png";
   import iconRaiox from "@/assets/icon-raiox.png";
   import iconCheckout from "@/assets/icon-checkout.png";
   import iconLogistica from "@/assets/icon-logistica.png";
   import iconPickpack from "@/assets/icon-pickpack.png";
   import iconIntegracoes from "@/assets/icon-integracoes.png";
   ```
3. Trocar `icon: Bot` etc. por `icon: iconAgentes` etc. no array `features`
4. Substituir o render de `<Icon className="w-5 h-5 text-primary" />` por `<img src={feature.icon} alt={feature.title} className="w-10 h-10" />`
5. Remover o wrapper div com `bg-primary/20` já que a imagem não precisa de fundo
6. Manter o `gap-x-4 gap-y-3` no grid

