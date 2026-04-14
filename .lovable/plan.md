

## Problema

O vídeo do splash usa `min-h-screen` (permite crescer além de 100vh) dentro do TotemScaler que tem `height: 100vh` + `overflow: hidden`. Com CSS zoom ativo, o vídeo pode extrapolar os limites do container.

## Solução

Trocar `min-h-screen` por `h-screen` no SplashPage para que o container do vídeo tenha exatamente a altura do viewport, sem crescer além.

### Mudança

**`src/pages/SplashPage.tsx`** — linha 19:

```tsx
// De:
className="relative flex items-center justify-center min-h-screen overflow-hidden cursor-pointer select-none"

// Para:
className="relative flex items-center justify-center h-screen w-full overflow-hidden cursor-pointer select-none"
```

`h-screen` fixa a altura em 100vh e `w-full` garante que o container respeite a largura do pai (432px com zoom ou 100% sem zoom), impedindo o vídeo de vazar.

