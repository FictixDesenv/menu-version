

## Melhorar qualidade dos vídeos nas features (sem alterar TotemScaler)

### Problema
O `zoom` CSS faz o browser renderizar os vídeos em ~360×180px e depois ampliar 2.5x, causando blur. Além disso, `aspect-[16/8]` recorta vídeos 16:9 desnecessariamente.

### Abordagem
Não mexer no TotemScaler. Apenas nos componentes de vídeo:

1. **Corrigir aspect ratio** — trocar `aspect-[16/8]` por `aspect-video` (16:9) nos 3 arquivos
2. **Forçar composição GPU no vídeo** — adicionar `will-change: transform` no `<video>`, que cria uma camada de composição separada e faz o browser decodificar o vídeo em resolução nativa da tela em vez da resolução CSS pré-zoom

### Arquivos alterados

**`src/components/tabs/FeatureContent.tsx`**
- `aspect-[16/8]` → `aspect-video`
- Adicionar `style={{ willChange: 'transform' }}` no `<video>`

**`src/components/tabs/GenericDetail.tsx`**
- Mesmas duas alterações

**`src/components/tabs/TrinioOSDetail.tsx`**
- Mesmas duas alterações

### Resultado
- Vídeos decodificados em resolução mais alta pelo browser
- Aspect ratio correto sem recorte excessivo
- Layout geral da aplicação 100% preservado (TotemScaler intocado)

