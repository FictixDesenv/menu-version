

## Reduzir ~20% título, sub-tabs e card de feature (manter header)

Apenas 3 componentes são afetados. O header e footer do `MainPage.tsx` ficam como estão.

### 1. `src/components/tabs/TrinioOSTab.tsx`
- Título: `text-2xl` → `text-xl`
- Subtítulo margem: `mb-6` → `mb-4`
- Cards grid: `h-[100px]` → `h-[80px]`, `p-4` → `p-3`, `gap-y-3` → `gap-y-2`
- Ícones: `w-6 h-6 mb-3` → `w-5 h-5 mb-2`
- Container: `pb-[60px]` → `pb-[40px]`

### 2. `src/components/tabs/TrinioOSDetail.tsx`
- Back button: `mb-4` → `mb-2`, título `text-lg` → `text-base`
- Sub-tabs: `mb-5` → `mb-3`, `py-[5px]` → `py-[4px]`, `text-[10px]` → `text-[8px]`
- Card padding: `p-6` → `p-4`
- Card título: `text-2xl` → `text-xl`, `mb-4` → `mb-2`
- Descrição: `text-base` → `text-sm`, `mb-5` → `mb-3`
- Vídeo: `aspect-video` → `aspect-[16/8]`, `mb-5` → `mb-3`, `rounded-2xl` → `rounded-xl`
- Checklist: `space-y-3` → `space-y-2`, check icon `w-5 h-5` → `w-4 h-4`, texto `text-base` → `text-sm`
- Container: `pb-[60px]` → `pb-[40px]`

### 3. Tabs secundárias (`MaisReceitaTab`, `MaisMargemTab`, `MaisExperienciaTab`)
- Título: `text-2xl` → `text-xl`, `mb-6` → `mb-4`
- Cards: `p-5` → `p-3`, ícone container `w-10 h-10` → `w-8 h-8`, `mb-3` → `mb-2`
- Gap: `gap-4` → `gap-3`

### Arquivos afetados
- `src/components/tabs/TrinioOSTab.tsx`
- `src/components/tabs/TrinioOSDetail.tsx`
- `src/components/tabs/MaisReceitaTab.tsx`
- `src/components/tabs/MaisMargemTab.tsx`
- `src/components/tabs/MaisExperienciaTab.tsx`

