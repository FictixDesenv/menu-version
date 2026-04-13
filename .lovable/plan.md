

## Ajustar botões do menu de navegação

### Arquivo: `src/pages/MainPage.tsx` (linha 69)

Apenas duas mudanças nas classes do botão:

- **Fonte menor**: `text-xs` → `text-[10px]`
- **Botão mais fino**: `py-[6px]` → `py-[4px]`
- **Borda**: mantém `rounded-sm` (como você pediu)

```
// De:
px-3 rounded-sm text-xs font-medium transition-all py-[6px]

// Para:
px-3 rounded-sm text-[10px] font-medium transition-all py-[4px]
```

