

## Problema

O `ZOOM_TARGET_WIDTH` está definido como 768px, mas o app foi desenhado para ~390px (largura do preview mobile). Na TV portrait (1080px), o zoom calculado é 1080/768 = 1.4x — insuficiente. O correto seria 1080/432 = 2.5x, que é exatamente o zoom manual que funciona.

Com browser zoom 250% em 1080px: viewport efetivo = 1080/2.5 = **432px**.

## Solução

Alterar `ZOOM_TARGET_WIDTH` de 768 para **432** (o viewport efetivo que o zoom 250% produzia).

### Mudanças

**1. `src/hooks/use-mobile.tsx`** — corrigir target width:
```ts
const ZOOM_TARGET_WIDTH = 432;
```

**2. `src/components/TotemScaler.tsx`** — ajustar largura base:
```tsx
<div style={{
  zoom: isScaled ? scale : undefined,
  width: isScaled ? "432px" : "100%",
  height: "100vh",
  overflow: "hidden"
}}>
```

### Threshold
Manter `w >= 768` — no preview Lovable (390px), scale = 1 (sem zoom). Na TV (1080px), scale = 1080/432 = **2.5x** — exatamente o zoom manual de 250%.

### Resultado
- **Preview (390px)**: sem zoom, layout nativo — OK como está
- **TV 55" portrait (1080px)**: zoom 2.5x automático, sem precisar de zoom manual do browser

