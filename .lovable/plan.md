

## Mudanças no Modal de QR Code

### Alterações em `src/components/DemoModal.tsx`

1. **Background (overlay)**: Trocar `bg-black/60` por `bg-black/60 backdrop-blur-md` para aplicar efeito glass/embaçado
2. **Modal card**: Trocar `glass-card` por fundo sólido `bg-[#393579]` mantendo border-radius e padding
3. **Posição**: Adicionar `mb-5` (ou `translate-y-[-20px]`) ao card para subir ~20px

```tsx
// Overlay: adicionar backdrop-blur
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">

// Card: fundo sólido #393579, subir 20px
<div className="p-6 mx-5 max-w-xs w-full flex flex-col items-center text-center relative shadow-2xl rounded-[10px] bg-[#393579] -translate-y-[20px]">
```

