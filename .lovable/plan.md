

## Problema

O `TotemScaler` sempre define `width: 768px`, mesmo quando o viewport é menor (390px no preview mobile). Com `overflow: hidden`, o conteúdo que excede 390px é cortado.

## Solução

Aplicar `width: 768px` apenas quando o zoom está ativo (telas ≥ 768px). Em telas menores, usar `width: 100%`.

### Mudança

**`src/components/TotemScaler.tsx`**:

```tsx
const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();
  const isScaled = scale > 1;

  return (
    <div style={{
      zoom: isScaled ? scale : undefined,
      width: isScaled ? "768px" : "100%",
      height: "100vh",
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
};
```

### Resultado
- **Preview mobile (390px)**: sem zoom, width 100%, conteúdo visível normalmente
- **TV 55" (1080px)**: zoom ativo, width 768px escalado para preencher a tela

