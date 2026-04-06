

## Diagnóstico

O problema é a classe `max-w-md` no `App.tsx` (linha 24), que limita o app a **448px de largura**. Numa tela de 55" (geralmente 1920x1080 ou 3840x2160), isso cria uma faixa estreita no centro com branco ao redor.

**Nenhum dos modos de preview (mobile/tablet/desktop) do Lovable simula um totem de 55".** O mais próximo seria o desktop, mas o `max-w-md` impede que o conteúdo ocupe a tela.

## Solução: Layout responsivo para totem

Em vez de um tamanho fixo mobile, o app precisa **escalar para ocupar a tela inteira do totem**, mantendo o layout centralizado e proporcional.

### Alterações

1. **`src/App.tsx`** — Substituir `max-w-md` por uma abordagem responsiva:
   - Manter `max-w-md` para mobile/tablet real
   - Em telas grandes (≥1024px), usar `max-w-2xl` ou `max-w-3xl` para ocupar mais espaço
   - Alternativa mais simples: usar `max-w-screen-sm` (~640px) que funciona melhor no totem sem precisar de zoom

2. **`src/index.css`** — Adicionar media query para telas grandes (≥1080px de altura) que aumente o `font-size` base do `html`, fazendo todo o layout escalar proporcionalmente via `rem`

3. **Fontes e botões** — Em telas ≥1024px, escalar automaticamente:
   - Texto base: 20-24px (em vez de 16px)
   - Botões: padding maior
   - Cards: mais espaçamento

### Abordagem recomendada

A solução mais limpa: usar **CSS `scale` transform** no container do app quando detectar tela grande. Isso mantém todo o design mobile intacto mas "amplia" proporcionalmente para o totem:

```text
Tela do totem (1920x1080)
┌─────────────────────────────────┐
│                                 │
│     ┌───────────────────┐       │
│     │   App escalado    │       │
│     │   (~2x zoom)      │       │
│     │   mantendo layout │       │
│     │   mobile           │       │
│     └───────────────────┘       │
│                                 │
└─────────────────────────────────┘
```

Isso é basicamente o que você fez manualmente com o zoom do navegador, mas automático.

### Arquivos a editar

| Arquivo | Mudança |
|---------|---------|
| `src/App.tsx` | Adicionar hook de detecção de tela grande + CSS transform scale no container |
| `src/hooks/use-mobile.tsx` | Adicionar hook `useIsTotem()` para telas ≥1920px |
| `src/index.css` | Background escuro para área ao redor (em vez de branco) |

