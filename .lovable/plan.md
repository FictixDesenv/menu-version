

## Trocar vídeo da feature "Agentes" para comparação

O vídeo atual da feature "Agentes de IA" é `public/videos/trinio-os-agentes.mp4`. O plano é:

1. **Copiar o vídeo enviado** para `public/videos/trinio-os-agentes-v2.mp4`
2. **Analisar os dois vídeos** com `ffprobe` — comparar resolução, codec, bitrate, profile e pixel format
3. **Atualizar `src/data/trinioOsFeatures.ts`** — trocar o path do vídeo de agentes para o novo arquivo:
   ```ts
   video: "/videos/trinio-os-agentes-v2.mp4",
   ```
4. **Apresentar a comparação técnica** dos dois arquivos para entender se a diferença de qualidade está no encode

Nenhuma alteração no TotemScaler ou layout geral.

