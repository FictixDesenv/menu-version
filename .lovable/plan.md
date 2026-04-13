

## Trocar ícone do card "Trinio OS" por imagem personalizada

### Mudanças

1. **Copiar imagem** `user-uploads://T.png` → `src/assets/trinio_os_card_icon.png`

2. **`src/pages/HomePage.tsx`**:
   - Importar a imagem: `import trinioOsCardIcon from "@/assets/trinio_os_card_icon.png"`
   - Alterar o card "trinio-os" para usar `image` em vez de `icon`:
     ```
     { id: "trinio-os", image: trinioOsCardIcon, label: "O que é o\nTrinio OS" }
     ```
   - Atualizar o render dos cards para suportar ambos (icon component ou image):
     ```tsx
     {card.icon ? (
       <Icon className="w-5 h-5 text-foreground" />
     ) : (
       <img src={card.image} className="w-5 h-5 object-contain" />
     )}
     ```

