

## Nova Home Page entre Splash e MainPage

Baseado na imagem de referência, criar uma tela intermediária com layout centralizado: ícone Trinio OS, subtítulo, grid 2x2 de cards glass, botão "Agendar uma Demo" e logo no rodapé.

### Fluxo atualizado

```text
Splash (/) → Home (/app) → Feature detail (/app/trinio-os, /app/receita, etc.)
```

### Mudanças

| Arquivo | O que muda |
|---------|-----------|
| `src/pages/HomePage.tsx` | **Criar.** Layout fullscreen centralizado: ícone Trinio OS no topo (usar imagem uploadada como `src/assets/trinio_os_icon.png`), subtítulo "Descubra como podemos transformar seus resultado", grid 2x2 com 4 glass-cards (ícone + label cada), botão "Agendar uma Demo" outline, logo Trinio pequena no footer. Cards: "O que é o Trinio OS" (filtro icon), "Mais receita" (cart), "Mais margem" (dollar), "Mais experiência" (leaf/rocket). Ao clicar num card → navega para `/app/:section`. |
| `src/pages/MainPage.tsx` | Receber `section` da URL (useParams ou query) para abrir na tab correta. Adicionar botão voltar para `/app`. |
| `src/App.tsx` | Rota `/app` → HomePage, `/app/:section` → MainPage. |
| `src/assets/trinio_os_icon.png` | Copiar imagem uploadada (Container-14.png tem o ícone, mas vou extrair/usar como referência e recriar com CSS/componente o ícone estilizado do Trinio OS). |
| `src/components/IdleOverlay.tsx` | Sem mudanças — já volta para `/` no idle. |

### Design dos cards (referência da imagem)

- Glass-card com `border-radius: 35px`, mesma estética atual
- Ícones brancos centralizados, label branco bold abaixo
- Cards grandes (~160px altura) ocupando metade da largura cada
- Botão "Agendar uma Demo" outline purple, rounded-full, largura total

### Ícones dos cards

Usar Lucide icons existentes: `Filter` ou custom SVG para Trinio OS, `ShoppingCart` para receita, `DollarSign` para margem, `Leaf` ou `Sparkles` para experiência.

