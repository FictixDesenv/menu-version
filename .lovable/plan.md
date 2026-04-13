

## Substituir pills por cards de texto em linha horizontal

### Mudança em `src/components/tabs/TrinioOSDetail.tsx` (linhas 70-85)

Substituir as pills atuais por cards de texto em **uma única linha (row)** que ocupam toda a largura disponível.

**Layout:**
- Container: `flex flex-row gap-2 mb-5 w-full`
- Cada card: `flex-1 text-center` — distribui igualmente a largura entre os 6 itens
- Apenas texto, sem ícones
- Mantém `rounded-sm`, `text-[10px]`, `py-[5px]`
- Card ativo: `bg-primary text-primary-foreground`
- Card inativo: `bg-[rgba(164,168,255,0.12)] border border-[rgba(164,168,255,0.19)]`
- Remove `whitespace-nowrap` e `overflow-x-auto` para permitir quebra de texto dentro do card

```text
┌────────┬────────┬──────────┬──────────┬────────┬───────────┐
│Agentes │Raio-X  │Checkout  │Logística │Pick&   │Integrações│
│  de IA │  da Op.│Intelig.  │Custom.   │Pack    │e Visibil. │
└────────┴────────┴──────────┴──────────┴────────┴───────────┘
```

### Arquivo afetado
- `src/components/tabs/TrinioOSDetail.tsx`

