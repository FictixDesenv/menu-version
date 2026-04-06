

## Plano Atualizado — 7 Mudanças

### 1. Margens laterais maiores no MenuPage
**Arquivo:** `src/pages/MenuPage.tsx`
- `px-5` → `px-8` no container principal

### 2. Margens laterais maiores no FeaturePage (overview, payments, analytics, experience, cases)
**Arquivo:** `src/pages/FeaturePage.tsx`
- `px-5` → `px-8` no container de conteúdo (linha 39)

### 3. Header com mais espaçamento e logo clicável
**Arquivo:** `src/components/TrinioHeader.tsx`
- Aumentar margin-top: `py-4` → `pt-8 pb-4`
- Aumentar padding lateral: `px-5` → `px-8`
- Aumentar padding da seta de voltar: `p-1` → `p-2`
- Tornar a logo clicável — ao clicar, navegar para `/menu`
- Alinhar tamanho da logo com o MenuPage (usar `height: 39px` igual ao MenuPage em vez do `size="sm"` atual que é 37px)

### 4. Idle → reset automático (sem dialog)
**Arquivo:** `src/components/IdleOverlay.tsx`
- Remover Dialog completamente
- Navegar direto para `/` quando o timer expirar
- Componente não renderiza nada, apenas useEffect com timer + navigate

### 5. Modal do QR Code menor
**Arquivo:** `src/components/DemoModal.tsx`
- Container: `max-w-sm` → `max-w-xs`, padding `p-8` → `p-5`
- QR Code: `w-[180px] h-[180px]` → `w-[140px] h-[140px]`
- Título: `text-xl` → `text-lg`

### 6. Transição suave SplashPage → LandingPage
**Arquivo:** `src/pages/SplashPage.tsx`
- Ao clicar, ativar estado `exiting` com fade-out (opacity 1→0, ~400ms) via framer-motion
- Após animação, chamar `navigate("/landing")`

**Arquivo:** `src/pages/LandingPage.tsx`
- Envolver conteúdo em `motion.div` com fade-in (opacity 0→1, ~400ms) no mount

### 7. Logo clicável no TrinioLogo
**Arquivo:** `src/components/TrinioLogo.tsx`
- Aceitar prop opcional `onClick` ou `linkTo`
- Usado pelo TrinioHeader para navegar para `/menu`

### Resumo de arquivos

| Arquivo | Mudança |
|---------|---------|
| `src/pages/MenuPage.tsx` | `px-5` → `px-8` |
| `src/pages/FeaturePage.tsx` | `px-5` → `px-8` |
| `src/components/TrinioHeader.tsx` | Mais margin-top, padding lateral, seta maior, logo clicável para `/menu` |
| `src/components/TrinioLogo.tsx` | Ajustar altura para 39px (sm) e aceitar click handler |
| `src/components/IdleOverlay.tsx` | Remover dialog, navegar direto para `/` |
| `src/components/DemoModal.tsx` | Reduzir tamanhos do modal e QR code |
| `src/pages/SplashPage.tsx` | Fade-out ao clicar |
| `src/pages/LandingPage.tsx` | Fade-in ao montar |

