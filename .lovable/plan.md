
## Problema encontrado

O vazamento do splash não parece vir mais do `min-h-screen`. O ponto mais suspeito agora é o uso de `zoom` no `TotemScaler` aplicado ao app inteiro, inclusive na rota `/`.

Com `zoom: 2.5`:
- o container base continua com `height: 100vh`
- mas o conteúdo visual é ampliado por fora desse cálculo
- no splash, o `video` está `absolute inset-0 w-full h-full object-cover`, então ele cobre a caixa ampliada e pode “vazar” visualmente na TV portrait

Isso também explica o comportamento estranho de 150%: ao mudar o zoom do browser, você altera o viewport CSS percebido, então o `scale` calculado muda e o resultado pode parecer “menor” mesmo aumentando o zoom do navegador.

## Solução proposta

Separar o comportamento do splash do restante do app:

1. Manter o `TotemScaler` para `/app`
2. Não aplicar esse zoom automático na rota `/` (splash)
3. Fazer o splash ocupar diretamente a viewport real da TV, sem passar pelo wrapper com `zoom`

Assim o vídeo inicial fica preso à tela física e não sofre o efeito colateral do `zoom` CSS.

## Mudanças

### 1. `src/App.tsx`
Mover o `TotemScaler` para envolver apenas as rotas internas:

- `/` → renderiza `SplashPage` direto
- `/app` e `/app/:section` → renderizam dentro do `TotemScaler`

Estrutura esperada:
```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<SplashPage />} />
    <Route
      path="/app"
      element={
        <TotemScaler>
          <HomePage />
        </TotemScaler>
      }
    />
    <Route
      path="/app/:section"
      element={
        <TotemScaler>
          <MainPage />
        </TotemScaler>
      }
    />
  </Routes>
</BrowserRouter>
```

### 2. `src/pages/SplashPage.tsx`
Manter o splash como tela cheia real, sem depender do scaler:
- continuar com `relative`
- usar `h-screen w-screen`
- manter `overflow-hidden`
- manter o vídeo com `absolute inset-0 w-full h-full object-cover`

Se necessário, trocar `h-screen` por `h-[100dvh]` para evitar diferenças de viewport em alguns navegadores.

### 3. `src/components/TotemScaler.tsx`
Sem mudança estrutural grande, apenas manter o scaler isolado para as páginas internas.

## Resultado esperado

- TV 55" vertical:
  - splash ocupa exatamente a tela inteira
  - vídeo não vaza
- preview mobile:
  - splash continua normal
- páginas internas `/app`:
  - mantêm o zoom automático que já está correto

## Detalhes técnicos

Hoje o problema é arquitetural:
```text
App inteiro
└── TotemScaler (zoom 2.5)
    └── SplashPage (video absolute cover)
```

Proposto:
```text
Route "/"
└── SplashPage sem zoom

Route "/app*"
└── TotemScaler (zoom 2.5)
    └── HomePage / MainPage
```

Isso evita misturar:
- tela de abertura full-screen real
- interface operacional escalada para parecer igual entre preview e TV

## Validação depois da implementação

Testar estes 3 pontos:
1. abrir `/` na TV 55" vertical e confirmar que o vídeo preenche sem ultrapassar bordas
2. tocar no splash e verificar transição para `/app`
3. confirmar que `/app` continua com a diagramação correta sem zoom manual do browser
