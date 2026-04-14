

## Plano — Zoom CSS para todas as telas ≥ 768px

### Lógica
Com CSS `zoom`, ambos os ambientes terão **largura efetiva de 768px**:
- **TV portrait (1080×1920)**: zoom 1.4x → viewport efetivo 768×1371
- **Lovable preview (1577×890)**: zoom 2.05x → viewport efetivo 768×434

A largura é idêntica; a altura varia pelo aspect ratio (portrait vs landscape), o que é inevitável mas não afeta o layout horizontal.

### Mudanças

**1. `src/hooks/use-mobile.tsx`** — ativar para telas ≥ 768px:
```ts
const calculate = () => {
  const w = window.innerWidth;
  if (w >= 768) {
    setScale(w / ZOOM_TARGET_WIDTH);
  } else {
    setScale(1);
  }
};
```

**2. `src/components/TotemScaler.tsx`** — trocar transform por zoom:
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

### Resultado
- Layout 768px em ambos os ambientes
- `vh`, `h-screen`, `vw` funcionam corretamente com zoom
- Sem necessidade de zoom manual do browser na TV

