

## Ajustes no menu unificado

Conforme as duas referências visuais (imagens anteriores), as duas linhas de navegação devem estar dentro de **um único container glass-card**, criando um bloco visual coeso com fundo e borda unificados. Na referência nota-se:

- O container glass-card envolve **ambas as linhas** (tabs principais + sub-features)
- As tabs da linha 1 ocupam largura igual (flex-1), com espaçamento uniforme
- A sub-feature ativa tem fundo branco com texto escuro; as inativas têm fundo glass com texto claro
- A tab principal ativa tem fundo roxo (primary); as inativas têm fundo glass com borda

```text
┌─ glass-card p-3 ────────────────────────────┐
│  [Trinio OS] [Mais receita] [Mais margem]   │  ← linha 1, flex-1 cada
│  [Mais experiência]                         │
│                                             │
│  [Feature 1] [Feature 2] [Feature 3] ...    │  ← linha 2, flex-1 cada
└─────────────────────────────────────────────┘
```

## Alterações em `src/pages/MainPage.tsx`

### 1. Container glass-card unificado
- Envolver linhas 55-86 (ambas as linhas de navegação) num `div` com classe `glass-card p-3`
- Remover padding/margin externo das linhas individuais que agora está no container

### 2. Aumentar gap header → menus
- Mudar header `pb-4` (linha 42) para `pb-8`

### 3. Aumentar gap menus → conteúdo
- Mudar o wrapper de navegação `pb-4` (linha 53) para `pb-8`

### 4. Tabs linha 1 — ajustar para flex-1
- Adicionar `flex-1` às tabs principais para que ocupem largura igual, como na referência

Apenas `src/pages/MainPage.tsx` será editado.

