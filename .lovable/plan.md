

## Adaptar página de detalhe das features para totem 55"

Comparando a imagem de referência com o código atual do `TrinioOSDetail.tsx`, há várias mudanças necessárias para adequar ao layout do totem.

### Mudanças no `src/components/tabs/TrinioOSDetail.tsx`

**1. Layout do botão Voltar** — Na imagem, o título "O que é o Trinio OS?" aparece ao lado da seta de voltar, não em separado. Trocar o texto "Voltar" pelo título da seção.

**2. Sub-tabs (pills)** — Remover os ícones Lucide das pills. Mostrar o título completo de cada feature (não truncado). Ajustar para `rounded-sm` seguindo o padrão do projeto.

**3. Card de conteúdo** — Remover o ícone circular ao lado do título dentro do card. Deixar apenas o título em texto. Aumentar tamanhos de fonte para legibilidade no totem.

**4. Features/checklist** — Atualizar os textos das features do "agentes" para os da imagem de referência:
   - "Identificam ineficiências operacionais antes de impactar o cliente"
   - "Propõem e executam novas regras de negócio baseadas em dados reais"
   - "Respondem ao SAC com contexto completo do pedido"

**5. Padding e espaçamento** — Ajustar `px-6` para `pl-[36px] pr-[36px]` consistente com o resto do app. Adicionar `pb-[60px]` no container.

**6. Tamanhos de fonte para totem** — Título do card: `text-xl` → `text-2xl`. Descrição: `text-sm` → `text-base`. Items do checklist: `text-sm` → `text-base`.

### Arquivo afetado
- `src/components/tabs/TrinioOSDetail.tsx`

