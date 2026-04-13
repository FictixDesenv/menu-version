

## Ajustar TrinioOSTab — cards finos e compridos

Entendi a correção: os cards devem ser **mais largos/compridos horizontalmente e mais baixos em altura** (landscape), não mais altos.

### Mudanças em `src/components/tabs/TrinioOSTab.tsx`

1. **Subtítulo**: Trocar para "Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam."

2. **Layout dos cards**: Mudar de `grid grid-cols-2` para **lista vertical** (`flex flex-col gap-3`) — cada card ocupa a largura toda, ficando fino e comprido (tipo uma row/barra)

3. **Estilo dos cards**:
   - Remover `glass-card` → usar classes manuais: `bg-white/5 border border-white/10 rounded-xl` (border-radius ~12px)
   - Card como **row horizontal**: `flex flex-row items-center gap-4 px-5 py-4`
   - Altura compacta, sem height fixo — o padding controla

4. **Conteúdo dos cards**:
   - Ícone à esquerda, centralizado verticalmente
   - Apenas **título** (sem descrição, sem ChevronRight)

5. **Preparar para ícones personalizados** — manter estrutura que aceita imagens quando o usuário enviar

### Resultado visual
Cards empilhados verticalmente, cada um fino e largo (full-width), ícone à esquerda + título, border-radius pequeno (~12px).

