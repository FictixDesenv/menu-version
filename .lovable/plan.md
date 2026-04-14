

## Problema

O `TotemScaler` usa `transform: scale()`, mas isso **não altera o viewport CSS**. Componentes filhos que usam `h-screen` (100vh), `min-h-screen`, `w-screen` etc. continuam referenciando o viewport real (1920×1080), não o container escalado (768×432). Resultado: o conteúdo transborda e fica desconfigurado.

Antes, com zoom 250% do browser, o viewport efetivo era 768×432 e tudo funcionava porque o browser zoom altera as unidades de viewport.

## Solução

Trocar `transform: scale()` por **CSS `zoom`**, que altera o viewport efetivo igual ao zoom do browser. Assim `vh`, `vw`, `h-screen` etc. respondem corretamente.

### Mudanças

1. **`src/components/TotemScaler.tsx`** — substituir transform por zoom:
```tsx
const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();
  return (
    <div style={{ zoom: scale, width: "768px", height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};
```

2. **`src/hooks/use-mobile.tsx`** — alterar threshold para 1920px para não afetar o preview da Lovable:
```ts
const calculate = () => {
  const w = window.innerWidth;
  if (w >= 1920) {
    setScale(w / ZOOM_TARGET_WIDTH);
  } else {
    setScale(1);
  }
};
```

### Resultado
- **Lovable preview** (~1577px): escala = 1, desenvolvimento normal
- **TV 55" (1920px)**: zoom = 2.5x, viewport efetivo = 768×432, igual ao zoom manual de 250%
- `h-screen`, `vh`, `vw` funcionam corretamente dentro do conteúdo escalado

