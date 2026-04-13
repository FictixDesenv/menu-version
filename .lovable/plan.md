

## Adicionar vídeo na feature "Time de Agentes de IA"

### Mudanças

| Arquivo | O que muda |
|---------|-----------|
| `public/videos/trinio-os-agentes.mp4` | Copiar o vídeo uploadado |
| `src/components/tabs/TrinioOSDetail.tsx` | Adicionar campo `video?: string` ao `featureData`. Para "agentes", setar `video: "/videos/trinio-os-agentes.mp4"`. No template, quando `data.video` existir, renderizar `<video autoPlay loop muted playsInline>` no lugar do placeholder "Vídeo em breve". |

### Avaliação crítica de performance

**O risco é real.** Considerando:

- São 6 features no Trinio OS + cards nas outras 3 tabs = potencialmente 10+ vídeos
- Se cada vídeo tiver ~5-15MB, o total pode passar de 100MB facilmente
- O totem roda local (não depende de CDN/internet lenta), o que ameniza o problema de download
- Porém, múltiplos `<video>` no DOM consomem memória de GPU e RAM

**Mitigações já aplicadas no plano:**
1. **Lazy loading** — vídeos só carregam quando a tab/sub-tab está ativa (componente monta/desmonta)
2. **Um vídeo por vez** — como o detail view mostra uma feature de cada vez, só 1 vídeo está no DOM
3. **`preload="none"`** nos vídeos inativos (não se aplica aqui pois só 1 monta por vez)

**Conclusão:** Com a arquitetura atual (detail view renderiza 1 feature por vez), colocar 1 vídeo por feature **não** vai pesar. O React desmonta o vídeo anterior ao trocar de sub-tab. O único custo é espaço em disco no deploy, que para um totem local é irrelevante.

**Recomendação:** Seguir em frente. Se os vídeos forem muito grandes (>20MB cada), comprimir com ffmpeg antes de adicionar.

