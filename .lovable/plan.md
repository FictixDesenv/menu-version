

## Animação Shimmer no botão CTA

Substituir a animação de glow-pulse por um efeito shimmer — um brilho suave que desliza horizontalmente pelo botão, simulando um reflexo de luz.

### Abordagem técnica

**1. tailwind.config.ts** — Substituir o keyframe `glow-pulse` por `shimmer`:
- Keyframe que move um gradiente linear (transparente → branco semi-transparente → transparente) da esquerda para a direita usando `background-position`

**2. src/pages/LandingPage.tsx** — Atualizar o botão:
- Remover `animate-[glow-pulse_...]`
- Adicionar classes para o efeito shimmer via `overflow-hidden` e um pseudo-elemento `::after` com o gradiente animado, ou usar `background-size` + `background-position` diretamente no botão
- Implementação via classe CSS customizada no `index.css` para o pseudo-elemento `::after` que cria a faixa de brilho deslizante

**3. src/index.css** — Adicionar classe `.shimmer-btn`:
```css
.shimmer-btn {
  position: relative;
  overflow: hidden;
}
.shimmer-btn::after {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: shimmer 3s ease-in-out infinite;
}
```

Resultado: um reflexo de luz suave e contínuo percorrendo o botão horizontalmente.

