

## Contexto

Esta tela será exibida em um **totem touch de 55 polegadas** para autoatendimento. O conteúdo precisa ficar centralizado no meio da tela, evitando as áreas superior e inferior.

## Plano

### Arquivo: `src/pages/MenuPage.tsx`

1. **Container raiz**: usar `h-screen` com `flex flex-col items-center justify-center` para centralizar tudo vertical e horizontalmente na tela.

2. **Limitar largura do conteúdo**: envolver todo o conteúdo em um wrapper com `max-w-lg w-full` para que os cards não fiquem esticados na tela de 55".

3. **Remover paddings de topo/bottom** (`pt-8`, `pb-8`) que empurram o conteúdo para as bordas.

4. **Estrutura resultante**:

```text
┌──────────────────────────────────┐
│          (espaço vazio)          │
│                                  │
│         ┌──────────────┐         │
│         │    Logo      │         │
│         │   Título     │         │
│         │  Subtítulo   │         │
│         │   Cards      │         │
│         │  Botão CTA   │         │
│         └──────────────┘         │
│                                  │
│          (espaço vazio)          │
└──────────────────────────────────┘
```

5. **Aumentar tamanhos de fonte e ícones** para legibilidade em tela grande (título para `text-4xl`, subtítulo para `text-xl`, cards com textos maiores, ícones maiores).

