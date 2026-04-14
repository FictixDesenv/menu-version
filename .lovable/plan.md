

## Usar `title` em vez de `shortTitle` nos pills de sub-features

O problema: na linha de sub-features do menu, o código atual prioriza `shortTitle` sobre `title`:

```tsx
{activeTab.featureData[id].shortTitle || activeTab.featureData[id].title}
```

A correção é inverter para usar sempre `title`:

### Alteração em `src/pages/MainPage.tsx`

Na linha dos pills de sub-features (~linha 83), trocar:
```tsx
{activeTab.featureData[id].shortTitle || activeTab.featureData[id].title}
```
por:
```tsx
{activeTab.featureData[id].title}
```

Apenas uma linha alterada em um único arquivo.

