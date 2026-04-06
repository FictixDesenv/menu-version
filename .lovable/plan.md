

## Diagnóstico

O problema tem duas partes:

1. **`transform: scale()` não funciona bem para isso** — ele amplia visualmente mas não recalcula o layout, causando scroll estranho e conteúdo "espichado"
2. **O fator de escala calculado (~1.2x) é muito baixo** — o usuário precisou de 250% (2.5x) no browser zoom para ficar bom

Quando você usou zoom 250% no navegador, a viewport efetiva do totem (1920x1080) virou ~768x432 CSS pixels. Isso fez o `max-w-md` (448px) ocupar a maior parte da largura, e todos os elementos ficaram no tamanho certo para toque.

## Solução

Trocar `transform: scale()` por **CSS `zoom`**. Diferente do transform, o `zoom` recalcula o layout real — o scroll funciona normalmente e os elementos ocupam o espaço correto.

### Cálculo do zoom

```text
Tela totem: 1920px de largura
Viewport ideal: ~768px (onde o layout mobile fica confortável)
Zoom = 1920 / 768 = 2.5x ← exatamente o que você usou manualmente
```

### Arquivos a editar

| Arquivo | Mudança |
|---------|---------|
| `src/hooks/use-mobile.tsx` | Alterar `useTotemScale` para calcular zoom como `window.innerWidth / 768`, resultando em ~2.5x no totem |
| `src/App.tsx` | Trocar `transform: scale()` por `zoom` no style do container. Remover o hack de `minHeight` |

### Resultado esperado

- No totem (1920px+): zoom automático ~2.5x, layout mobile grande e legível, scroll normal
- No desktop (1024-1919px): zoom moderado proporcional
- No mobile/tablet (<1024px): sem zoom, layout normal

