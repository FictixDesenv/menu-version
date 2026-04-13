

## Splash Page — Vídeo em Loop (sem texto overlay)

### Mudanças

| Arquivo | O que muda |
|---------|-----------|
| `public/videos/splash.mp4` | Copiar o vídeo uploadado para o projeto |
| `src/pages/SplashPage.tsx` | Remover SVG waves, logo animada e texto "Toque para continuar". Usar `<video>` fullscreen (`autoPlay`, `loop`, `muted`, `playsInline`, `object-cover`). Toque em qualquer lugar → fade-out → navega para `/app`. |

### SplashPage simplificado

- `<video>` como background: `object-fit: cover`, `inset-0`, sem controles
- Sem nenhum overlay de texto (o vídeo já tem CTA embutido)
- Ao tocar → `setExiting(true)` → `AnimatePresence` fade-out → `navigate("/app")`

