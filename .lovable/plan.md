

## Diagnóstico

O app foi desenhado em resolução mobile (~390px). No projeto original, provavelmente existia um wrapper CSS `transform: scale(...)` que ampliava o conteúdo para preencher telas grandes (1920×1080 em TV 55"). 

O hook `useTotemScale` já existe em `src/hooks/use-mobile.tsx` e calcula a escala correta (`window.innerWidth / 768` → ~2.5x em 1920px), **mas não está sendo usado em nenhum lugar**. É por isso que na tela grande o conteúdo aparece minúsculo e você precisa de 250% de zoom manual.

## Solução

Criar um componente wrapper `TotemScaler` que aplica `transform: scale(...)` + `transform-origin: top left` ao conteúdo inteiro, e usá-lo no `App.tsx` envolvendo todas as rotas.

### Mudanças

1. **Criar `src/components/TotemScaler.tsx`**
   - Usa `useTotemScale()` para obter o fator de escala
   - Renderiza um `<div>` com `width: 768px`, `height: 100vh`, `transform: scale(factor)`, `transform-origin: top left`
   - Esconde overflow no container pai para evitar scroll

2. **Editar `src/App.tsx`**
   - Envolver o `<BrowserRouter>` com `<TotemScaler>`
   - Assim todas as rotas (Splash, Home, MainPage) são escaladas automaticamente

3. **Editar `src/index.css`**
   - Adicionar `overflow: hidden` no `html, body` e `#root` para garantir que não haja scroll com a escala

### Comportamento esperado
- Em tela ≥1024px: escala proporcional (`largura / 768`)
- Em tela <1024px (mobile real): escala = 1, sem alteração
- O layout continua desenhado para 768px de largura, mas é ampliado via CSS transform

