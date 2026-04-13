

## Reduzir ~20% apenas na tela de detalhe da feature (TrinioOSDetail)

Arquivo único afetado: `src/components/tabs/TrinioOSDetail.tsx`

### Mudanças

**Título "O que é o Trinio OS?" (back button)**
- `text-lg` → `text-base`
- `mb-4` → `mb-2`

**Sub-tabs de navegação das features**
- `mb-5` → `mb-3`
- `py-[5px]` → `py-[4px]`
- `text-[10px]` → `text-[8px]`

**Card de conteúdo (glass-card)**
- Padding: `p-6` → `p-4`
- Título do card: `text-2xl` → `text-xl`, `mb-4` → `mb-2`
- Descrição: `text-base` → `text-sm`, `mb-5` → `mb-3`
- Vídeo: `aspect-video` → `aspect-[16/8]`, `mb-5` → `mb-3`, `rounded-2xl` → `rounded-xl`
- Checklist: `space-y-3` → `space-y-2`, `w-5 h-5` → `w-4 h-4`, texto `text-base` → `text-sm`, `gap-3` → `gap-2`

**Container geral**
- `pb-[60px]` → `pb-[40px]`

### Não afetados (conforme solicitado)
- Header do MainPage
- Botão CTA (DemoButton)
- Tela principal com cards de ícones (TrinioOSTab)
- Tabs Mais Receita / Margem / Experiência

