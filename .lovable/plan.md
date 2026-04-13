

## Fix: Botão "Agendar uma Demo" quebrado na HomePage

O problema é que o wrapper do botão na HomePage tem `w-auto`, que não dá uma largura de referência para o `w-3/4` interno do DemoButton funcionar corretamente.

### Correção (`src/pages/HomePage.tsx`, linha 61)

Trocar `w-auto` por `w-full`:

```
// De:
<div className="w-auto mt-6 max-w-sm pb-[72px]">

// Para:
<div className="w-full mt-6 max-w-sm pb-[72px]">
```

Isso garante que o container tenha largura total, e o `w-3/4 mx-auto` dentro do DemoButton calcule corretamente os 75%.

