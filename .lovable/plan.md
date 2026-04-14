

## O que muda

Atualmente existem **dois níveis de navegação separados**:
1. Tabs principais no MainPage (Trinio OS, Mais receita, Mais margem, Mais experiência)
2. Sub-tabs de features dentro de cada detail view (ex: "Time de Agentes de IA", "Raio-X da Operação"...)

A proposta é **unificar em um único bloco de navegação** com duas linhas (como na referência visual):
- **Linha 1**: Tabs principais (Trinio OS, Mais receita, etc.)
- **Linha 2**: Sub-features da tab ativa (aparece sempre, não só no detail)

Quando o usuário clica numa sub-feature, o conteúdo do detail aparece diretamente abaixo — sem a tela intermediária de cards grid.

O header mantém logo à esquerda e botão demo à direita (já está assim).

## Alterações

### 1. `src/pages/MainPage.tsx` — Navegação unificada
- Mover o state de `selectedFeature` para o MainPage (hoje vive dentro de cada tab)
- Definir as sub-features de cada tab principal como dados no MainPage
- Renderizar **linha 2** de sub-tabs abaixo das tabs principais, baseada na tab ativa
- Quando uma sub-feature é selecionada, renderizar o detail view diretamente no content area
- Quando nenhuma sub-feature é selecionada, mostrar a primeira sub-feature por padrão (como na referência — a tela de detail é o estado padrão)
- Remover a tela de grid de cards — a navegação por sub-tabs substitui essa função

### 2. `src/components/tabs/TrinioOSTab.tsx`, `MaisReceitaTab.tsx`, `MaisMargemTab.tsx`, `MaisExperienciaTab.tsx`
- Essas tabs deixam de gerenciar seu próprio estado de `selectedFeature`
- Podem ser simplificadas ou eliminadas, já que o MainPage passa a controlar tudo
- Os **dados** (featureData, detailData, etc.) serão extraídos e usados pelo MainPage

### 3. `src/components/tabs/GenericDetail.tsx` e `TrinioOSDetail.tsx`
- Remover o back button e os sub-tab pills internos (agora ficam no MainPage)
- Receber apenas o featureId ativo e renderizar o conteúdo (título, descrição, vídeo, features list)
- Criar um componente `FeatureContent` simplificado que mostra apenas o conteúdo sem navegação

### 4. Estilo da navegação (referência visual)
- Linha 1 (tabs): pills com fundo roxo quando ativo, glass quando inativo — mesmo estilo atual
- Linha 2 (sub-features): pills menores, fundo branco/foreground quando ativo, texto simples quando inativo — conforme referência
- As duas linhas ficam dentro de um container com borda glass-card (como mostra a referência)

```text
┌─────────────────────────────────────────────┐
│ [Trinio OS]  [Mais receita]  [Mais margem]  │  ← linha 1
│ [Agentes IA] [Raio-X] [Checkout] [Log] ...  │  ← linha 2
└─────────────────────────────────────────────┘
```

## Estrutura de dados centralizada

O MainPage terá um mapa de tabs → sub-features com os dados de cada feature, consolidando o que hoje está espalhado em 4 arquivos de tab + 2 arquivos de detail.

