

## Mais espaçamento lateral e no header

Atualmente `px-8` (32px) já está aplicado, mas com o zoom 2.5x no totem ainda fica apertado. Vamos aumentar para `px-12` (48px).

### Mudanças

| Arquivo | O que muda |
|---------|-----------|
| `src/pages/MenuPage.tsx` | `px-8` → `px-12` no container principal |
| `src/pages/FeaturePage.tsx` | `px-8` → `px-12` no div de conteúdo (linha 39) |
| `src/components/TrinioHeader.tsx` | `px-8` → `px-12` e `pt-8` → `pt-12` no header; `p-2` → `p-3` no botão de voltar |

Isso aumenta o respiro lateral em todas as telas e dá mais margem superior e área de toque na seta de voltar.

