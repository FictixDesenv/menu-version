

## Corrigir espaçamento entre cards

### Problema
A classe `flex-1` no container do grid faz ele expandir para ocupar toda a altura disponível, esticando o espaço entre os cards.

### Solução
Remover `flex-1` da `<div>` do grid nos 3 arquivos:

**Arquivos:**
- `src/components/tabs/MaisReceitaTab.tsx` — linha 82: `grid grid-cols-2 gap-4 flex-1` → `grid grid-cols-2 gap-4`
- `src/components/tabs/MaisMargemTab.tsx` — mesma alteração
- `src/components/tabs/MaisExperienciaTab.tsx` — mesma alteração

### Resultado
Os cards ficam agrupados no topo com apenas 16px (`gap-4`) de espaço entre eles.

