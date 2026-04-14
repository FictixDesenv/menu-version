

## Diagnóstico: vídeos com resolução ruim na TV 55"

### Causa raiz

O `TotemScaler` usa **CSS `zoom`** para escalar o layout de 432px → 1080px (fator 2.5x). O problema é que o browser renderiza o `<video>` na resolução CSS original (432px de largura, ~216px de altura pelo aspect-[16/8]) e depois **amplia os pixels** via zoom. Mesmo os vídeos sendo 4K (3840×2160), o browser decodifica e renderiza na resolução do elemento CSS antes do zoom — resultando em blur.

Além disso, `aspect-[16/8]` (2:1) recorta bastante dos vídeos 16:9, desperdiçando resolução.

### Solução

Usar **CSS `transform: scale()`** em vez de `zoom` no TotemScaler. Com `transform`, o browser mantém a resolução nativa do conteúdo e aplica a escala via composição GPU — o vídeo é decodificado em resolução real e exibido com qualidade.

### Mudanças

**1. `src/components/TotemScaler.tsx`** — trocar `zoom` por `transform: scale()`:

```tsx
const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();
  const isScaled = scale > 1;

  return (
    <div style={{
      width: isScaled ? "432px" : "100%",
      height: isScaled ? `${100 / scale}vh` : "100vh",
      transform: isScaled ? `scale(${scale})` : undefined,
      transformOrigin: "top left",
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
};
```

Com `transform: scale()`, o layout interno continua calculado em 432px, mas o browser compõe em resolução nativa da tela (1080px), preservando a qualidade dos vídeos.

**2. `src/components/tabs/FeatureContent.tsx`** — corrigir aspect ratio de `16/8` para `16/9`:

```tsx
// De:
<div className="w-full aspect-[16/8] ...">

// Para:
<div className="w-full aspect-video ...">
```

Isso elimina o recorte desnecessário e usa toda a resolução do vídeo 16:9.

**3. `src/components/tabs/GenericDetail.tsx`** e **`src/components/tabs/TrinioOSDetail.tsx`** — mesma correção de aspect ratio onde aplicável.

### Resultado esperado

- Vídeos renderizados em resolução nativa na TV (sem upscale de pixels)
- Aspect ratio correto (16:9) sem recorte excessivo
- Layout das features mantido idêntico visualmente

