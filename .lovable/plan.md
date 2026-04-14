

## Corrigir player de vídeo misturando vídeos entre tabs

### Problema
Na linha 125, o `<video>` não tem uma `key` baseada no `activeTab`. O React reutiliza o mesmo elemento DOM do vídeo quando o usuário troca de aba, fazendo com que o vídeo anterior continue tocando ou se misture com o novo.

### Solução
Adicionar `key={activeTab}` no elemento `<video>` (linha 125). Isso força o React a destruir e recriar o player quando a tab muda, garantindo que o vídeo correto seja carregado.

**Arquivo:** `src/components/tabs/TrinioOSDetail.tsx`

**Antes:**
```tsx
<video autoPlay loop muted playsInline className="w-full h-full object-cover">
```

**Depois:**
```tsx
<video key={activeTab} autoPlay loop muted playsInline className="w-full h-full object-cover">
```

Uma única linha alterada resolve o problema.

